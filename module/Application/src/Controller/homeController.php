<?php
/**
 * HomeController
 *
 * Responsável por renderizar a página inicial (catálogo). Implementa
 * paginação e cache (FileCache) para reduzir carga no banco e
 * melhorar a performance da listagem de filmes.
 */
namespace Application\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;
use Doctrine\ORM\EntityManager;
use Application\Entity\Filme;
use Application\Service\FileCache;

class HomeController extends AbstractActionController
{
    private $entityManager;
    private $cache;
    
    private const ITEMS_PER_PAGE = 20;
    private const CACHE_TTL = 300; // 5 minutos

    private function getEntityManager(): EntityManager
    {
        if ($this->entityManager === null) {
            $sm = $this->getEvent()->getApplication()->getServiceManager();
            $this->entityManager = $sm->get(\Doctrine\ORM\EntityManager::class);
        }
        return $this->entityManager;
    }
    
    private function getCache(): FileCache
    {
        if ($this->cache === null) {
            $this->cache = new FileCache();
        }
        return $this->cache;
    }

    public function indexAction()
    {
        // Pegar página do query string
        $currentPage = (int)$this->params()->fromQuery('page', 1);
        if ($currentPage < 1) $currentPage = 1;

        $cache = $this->getCache();
        $cacheKey = 'home_filmes_total';
        
        // Tentar obter count total do cache
        $totalFilmes = $cache->get($cacheKey);
        
        if ($totalFilmes === null) {
            // Contar total de filmes (rápido, com índice)
            $em = $this->getEntityManager();
            $totalFilmes = count($em->getRepository(Filme::class)->findAll());
            $cache->set($cacheKey, $totalFilmes, self::CACHE_TTL);
        }
        
        // Calcular paginação
        $totalPages = ceil($totalFilmes / self::ITEMS_PER_PAGE);
        if ($currentPage > $totalPages) $currentPage = $totalPages;
        
        $offset = ($currentPage - 1) * self::ITEMS_PER_PAGE;
        
        // Tentar obter página do cache
        $cacheKey = 'home_filmes_page_' . $currentPage;
        $filmes = $cache->get($cacheKey);
        
        if ($filmes === null) {
            // Carregar apenas a página necessária (MUITO mais rápido!)
            $em = $this->getEntityManager();
            $entities = $em->getRepository(Filme::class)
                ->findBy([], ['id' => 'ASC'], self::ITEMS_PER_PAGE, $offset);

            $filmes = array_map(function(Filme $f) {
                $streamingRaw = $f->getStreaming();
                $streaming = [];
                if (!empty($streamingRaw)) {
                    if (is_string($streamingRaw)) {
                        $streaming = array_filter(array_map('trim', explode(',', $streamingRaw)));
                    } elseif (is_array($streamingRaw)) {
                        $streaming = $streamingRaw;
                    }
                }

                return [
                    'id' => $f->getId(),
                    'nome' => $f->getNome(),
                    'sinopse' => $f->getSinopse(),
                    'capaPrincipal' => $f->getCapaPrincipal(),
                    'anoLancamento' => $f->getAnoLancamento(),
                    'diretor' => $f->getDiretor(),
                    'atoresPrincipais' => $f->getElenco(),
                    'genero' => $f->getGenero(),
                    'nota' => $f->getNota(),
                    'trailer' => $f->getTrailer(),
                    'streaming' => $streaming,
                ];
            }, $entities ?: []);
            
            // Cachear esta página por 5 minutos
            $cache->set($cacheKey, $filmes, self::CACHE_TTL);
        }

        return new ViewModel([
            'filmes' => $filmes,
            'currentPage' => $currentPage,
            'totalPages' => $totalPages,
            'totalFilmes' => $totalFilmes,
            'itemsPerPage' => self::ITEMS_PER_PAGE,
        ]);
    }
}
