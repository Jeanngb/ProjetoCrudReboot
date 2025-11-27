<?php
namespace Application\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\ViewModel;
use Doctrine\ORM\EntityManager;
use Application\Entity\Filme;

class AdmController extends AbstractActionController
{
    private $entityManager;

    public function __construct(EntityManager $entityManager = null)
    {
        $this->entityManager = $entityManager;
    }

    private function getEntityManager(): EntityManager
    {
        if ($this->entityManager === null) {
            $sm = $this->getEvent()->getApplication()->getServiceManager();
            $this->entityManager = $sm->get(\Doctrine\ORM\EntityManager::class);
        }

        return $this->entityManager;
    }

    private function ensureSession(): void
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
    }

    private function requireAdmin()
    {
        $this->ensureSession();
        if (empty($_SESSION['user']) || ($_SESSION['user']['tipo'] ?? '') !== 'admin') {
            return $this->redirect()->toRoute('auth', ['action' => 'login']);
        }
        return null;
    }

    public function indexAction()
    {
        $adminCheck = $this->requireAdmin();
        if ($adminCheck) return $adminCheck;

        $em = $this->getEntityManager();
        $repo = $em->getRepository(Filme::class);
        $request = $this->getRequest();

        // Remover via ?delete=ID
        $deleteId = $this->params()->fromQuery('delete', null);
        if ($deleteId) {
            $filme = $repo->find((int)$deleteId);
            if ($filme) {
                $em->remove($filme);
                $em->flush();
            }
            return $this->redirect()->toRoute('filmes');
        }

        $editing = null;
        $editId = $this->params()->fromQuery('edit', null);
        if ($editId) {
            $editing = $repo->find((int)$editId);
        }

        if ($request->isPost()) {
            $post = $request->getPost();
            $action = $post['action'] ?? 'add';

            $nome = trim((string)($post['nome'] ?? ''));
            if (empty($nome)) {
                $vm = new ViewModel([
                    'error' => 'Nome do filme é obrigatório.',
                    'filmes' => $repo->findAll(),
                    'editing' => null,
                ]);
                $vm->setTemplate('application/adm/adm');
                return $vm;
            }

            if ($action === 'add') {
                $filme = new Filme();
                $filme->setNome($nome);
                $filme->setDiretor(trim((string)($post['diretor'] ?? '')));
                $filme->setElenco(trim((string)($post['atoresPrincipais'] ?? '')));
                $filme->setStreaming(trim((string)($post['streaming'] ?? '')));
                $filme->setAnoLancamento((int)($post['ano'] ?? 0));
                $filme->setCapaPrincipal(trim((string)($post['capaPrincipal'] ?? '')));
                $filme->setCapaFundo(trim((string)($post['capaFundo'] ?? '')));
                $filme->setTrailer(trim((string)($post['trailer'] ?? '')));
                $filme->setSinopse(trim((string)($post['sinopse'] ?? '')));
                $filme->setGenero(trim((string)($post['genero'] ?? 'Drama')));
                $filme->setNota((float)($post['nota'] ?? 0));

                $em->persist($filme);
                $em->flush();
            } elseif ($action === 'update') {
                $id = (int)($post['id'] ?? 0);
                $filme = $repo->find($id);
                if ($filme) {
                    $filme->setNome($nome);
                    $filme->setDiretor(trim((string)($post['diretor'] ?? '')));
                    $filme->setElenco(trim((string)($post['atoresPrincipais'] ?? '')));
                    $filme->setStreaming(trim((string)($post['streaming'] ?? '')));
                    $filme->setAnoLancamento((int)($post['ano'] ?? 0));
                    $filme->setCapaPrincipal(trim((string)($post['capaPrincipal'] ?? '')));
                    $filme->setCapaFundo(trim((string)($post['capaFundo'] ?? '')));
                    $filme->setTrailer(trim((string)($post['trailer'] ?? '')));
                    $filme->setSinopse(trim((string)($post['sinopse'] ?? '')));
                    $filme->setGenero(trim((string)($post['genero'] ?? 'Drama')));
                    $filme->setNota((float)($post['nota'] ?? 0));

                    $em->flush();
                }
            }

            return $this->redirect()->toRoute('filmes');
        }

        return new ViewModel([
            'filmes' => $repo->findAll(),
            'editing' => $editing,
        ]);
    }
}
