<?php
namespace Application\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;
use Doctrine\ORM\EntityManager;
use Application\Entity\Filme;

class HomeController extends AbstractActionController
{
    private $entityManager;

    private function getEntityManager(): EntityManager
    {
        if ($this->entityManager === null) {
            $sm = $this->getEvent()->getApplication()->getServiceManager();
            $this->entityManager = $sm->get(\Doctrine\ORM\EntityManager::class);
        }
        return $this->entityManager;
    }

    public function indexAction()
    {
        $em = $this->getEntityManager();
        $repo = $em->getRepository(Filme::class);
        $entities = $repo->findAll();

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

        return new ViewModel([
            'filmes' => $filmes
        ]);
    }
}
