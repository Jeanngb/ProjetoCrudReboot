<?php
/**
 * DetalhesFilmeController
 *
 * Responsável por servir a página de detalhes do filme e por fornecer
 * um endpoint JSON (`apiAction`) usado pelo frontend para carregar
 * dados em background (AJAX). A proteção de acesso (sessão) é mantida
 * no servidor — o controller retorna JSON de erro quando o usuário não
 * está autenticado.
 */
namespace Application\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;
use Laminas\View\Model\JsonModel;
use Doctrine\ORM\EntityManager;
use Application\Entity\Filme;

class DetalhesFilmeController extends AbstractActionController
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

    public function detalhesAction()
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // Protege rota: exige usuário logado
        if (empty($_SESSION['user'])) {
            return $this->redirect()->toRoute('auth', ['action' => 'login']);
        }

        $id = $this->params()->fromQuery('id', null);
        if (!$id) return $this->redirect()->toRoute('home');

        $em = $this->getEntityManager();
        $repo = $em->getRepository(Filme::class);
        $filmeEntity = $repo->find((int)$id);

        if (!$filmeEntity) return $this->redirect()->toRoute('home');

        // converter entidade para array compatível com a view existente
        $streamingRaw = $filmeEntity->getStreaming();
        $streamingArr = [];
        if (!empty($streamingRaw)) {
            if (is_string($streamingRaw)) {
                $streamingArr = array_filter(array_map('trim', explode(',', $streamingRaw)));
            } elseif (is_array($streamingRaw)) {
                $streamingArr = $streamingRaw;
            }
        }

        $filme = [
            'id' => $filmeEntity->getId(),
            'nome' => $filmeEntity->getNome(),
            'sinopse' => $filmeEntity->getSinopse(),
            'capaPrincipal' => $filmeEntity->getCapaPrincipal(),
            'capaFundo' => $filmeEntity->getCapaFundo(),
            'anoLancamento' => $filmeEntity->getAnoLancamento(),
            'diretor' => $filmeEntity->getDiretor(),
            'atoresPrincipais' => $filmeEntity->getElenco(),
            'genero' => $filmeEntity->getGenero(),
            'nota' => $filmeEntity->getNota(),
            'trailer' => $filmeEntity->getTrailer(),
            'streaming' => $streamingArr,
        ];

        $streamingMap = [
            'NETFLIX' => ['logo' => 'https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg', 'url' => 'https://www.netflix.com'],
            'DISNEY+' => ['logo' => 'https://t.ctcdn.com.br/DxNATHoRexdVV_g9cIca_86laOo=/1200x675/smart/i1037601.png', 'url' => 'https://www.disneyplus.com'],
            'MAX' => ['logo' => 'https://s2-epocanegocios.glbimg.com/6NE1a387ATTLjKAue2GN5dMQkA8=/0x0:1190x655/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2024/k/Q/ThYD79RLifppObYIoCiA/screenshot-2024-02-28t091358.407.png', 'url' => 'https://www.hbomax.com'],
            'AMAZON' => ['logo' => 'https://t.ctcdn.com.br/xnHfHafww85qzhYmlb6_EjpTMjs=/768x432/smart/i501822.png', 'url' => 'https://www.primevideo.com'],
            'GLOBOPLAY' => ['logo' => 'https://assets.b9.com.br/wp-content/uploads/2020/10/Captura-de-Tela-2020-10-05-is-15.09.07.png', 'url' => 'https://globoplay.globo.com'],
            'PARAMOUNT+' => ['logo' => 'https://portalaltadefinicao.com/wp-content/uploads/2021/03/paramount-plus-brasil.jpg', 'url' => 'https://www.paramountplus.com/br/'],
            'MUBI' => ['logo' => 'https://casaldougkelly.com.br/wp-content/uploads/2025/03/Logo-Mubi-Deitado.jpg', 'url' => 'https://mubi.com/pt/br'],
            'LOOKE' => ['logo' => 'https://downloadr2.apkmirror.com/wp-content/uploads/2018/03/5aaf6e921febe.png', 'url' => 'https://www.looke.com.br/landingpage'],
        ];

        $streamingData = [];
        if (!empty($filme['streaming']) && is_array($filme['streaming'])) {
            foreach ($filme['streaming'] as $p) {
                $key = strtoupper($p);
                if (isset($streamingMap[$key])) {
                    $streamingData[] = [
                        'nome' => $p,
                        'logo' => $streamingMap[$key]['logo'],
                        'url'  => $streamingMap[$key]['url'],
                    ];
                }
            }
        }

        return new ViewModel([
            'filme' => $filme,
            'streaming' => $streamingData
        ]);
    }
}
