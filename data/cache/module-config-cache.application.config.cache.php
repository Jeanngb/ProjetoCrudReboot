<?php
return [
    'service_manager' => [
        'aliases' => [
            'HttpRouter' => 'Laminas\\Router\\Http\\TreeRouteStack',
            'router' => 'Laminas\\Router\\RouteStackInterface',
            'Router' => 'Laminas\\Router\\RouteStackInterface',
            'RoutePluginManager' => 'Laminas\\Router\\RoutePluginManager',
            'Zend\\Router\\Http\\TreeRouteStack' => 'Laminas\\Router\\Http\\TreeRouteStack',
            'Zend\\Router\\RoutePluginManager' => 'Laminas\\Router\\RoutePluginManager',
            'Zend\\Router\\RouteStackInterface' => 'Laminas\\Router\\RouteStackInterface',
            'Laminas\\Validator\\Translator\\TranslatorInterface' => 'Laminas\\Validator\\Translator\\Translator',
            'ValidatorManager' => 'Laminas\\Validator\\ValidatorPluginManager',
            'Zend\\Validator\\ValidatorPluginManager' => 'Laminas\\Validator\\ValidatorPluginManager'
        ],
        'factories' => [
            'Laminas\\Router\\Http\\TreeRouteStack' => 'Laminas\\Router\\Http\\HttpRouterFactory',
            'Laminas\\Router\\RoutePluginManager' => 'Laminas\\Router\\RoutePluginManagerFactory',
            'Laminas\\Router\\RouteStackInterface' => 'Laminas\\Router\\RouterFactory',
            'Laminas\\Validator\\Translator\\Translator' => 'Laminas\\Validator\\Translator\\TranslatorFactory',
            'Laminas\\Validator\\ValidatorPluginManager' => 'Laminas\\Validator\\ValidatorPluginManagerFactory',
            'Doctrine\\ORM\\EntityManager' => function ($container) {
                $paths = [__DIR__ . '/../src/Entity'];
                $isDevMode = true;
                // Usar configuração por attributes (Doctrine ORM 3)
                if (class_exists(\Doctrine\ORM\ORMSetup::class) && method_exists(\Doctrine\ORM\ORMSetup::class, 'createAttributeMetadataConfiguration')) {
                    $config = \Doctrine\ORM\ORMSetup::createAttributeMetadataConfiguration($paths, $isDevMode);
                } else {
                    throw new \RuntimeException('Nenhuma API do Doctrine disponível para configuração de metadata.');
                }
                // Ler credenciais do array de configuração (merge de config/autoload/*.php)
                $appConfig = [];
                try {
                    $appConfig = $container->get('config');
                } catch (\Exception $e) {
                    // se não disponível, segue com fallback abaixo
                }
                $connectionParams = $appConfig['doctrine']['connection']['params'] ?? ['driver' => 'pdo_mysql', 'host' => '127.0.0.1', 'port' => 3306, 'user' => 'root', 'password' => '', 'dbname' => 'projeto_filmes', 'charset' => 'utf8mb4'];
                // Criar conexão DBAL e instanciar EntityManager (Doctrine ORM 3)
                $connection = \Doctrine\DBAL\DriverManager::getConnection($connectionParams);
                return new \Doctrine\ORM\EntityManager($connection, $config);
            }
        ]
    ],
    'route_manager' => [],
    'router' => [
        'routes' => [
            'home' => [
                'type' => 'Laminas\\Router\\Http\\Literal',
                'options' => [
                    'route' => '/',
                    'defaults' => [
                        'controller' => 'Application\\Controller\\HomeController',
                        'action' => 'index'
                    ]
                ]
            ],
            'filme' => [
                'type' => 'Laminas\\Router\\Http\\Segment',
                'options' => [
                    'route' => '/filme[/:action]',
                    'defaults' => [
                        'controller' => 'Application\\Controller\\DetalhesFilmeController',
                        'action' => 'detalhes'
                    ]
                ]
            ],
            'auth' => [
                'type' => 'Laminas\\Router\\Http\\Segment',
                'options' => [
                    'route' => '/auth[/:action]',
                    'defaults' => [
                        'controller' => 'Application\\Controller\\AuthController',
                        'action' => 'login'
                    ]
                ]
            ],
            'filmes' => [
                'type' => 'Laminas\\Router\\Http\\Literal',
                'options' => [
                    'route' => '/adm',
                    'defaults' => [
                        'controller' => 'Application\\Controller\\FilmesController',
                        'action' => 'index'
                    ]
                ]
            ]
        ]
    ],
    'controllers' => [
        'factories' => [
            'Application\\Controller\\HomeController' => function ($container) {
                return new \Application\Controller\HomeController();
            },
            'Application\\Controller\\DetalhesFilmeController' => function ($container) {
                return new \Application\Controller\DetalhesFilmeController();
            },
            'Application\\Controller\\AuthController' => function ($container) {
                return new \Application\Controller\AuthController();
            },
            'Application\\Controller\\FilmesController' => function ($container) {
                $em = $container->get(\Doctrine\ORM\EntityManager::class);
                return new \Application\Controller\FilmesController($em);
            }
        ]
    ],
    'view_manager' => [
        'display_not_found_reason' => true,
        'display_exceptions' => true,
        'doctype' => 'HTML5',
        'not_found_template' => 'error/404',
        'exception_template' => 'error/index',
        'template_map' => [
            'layout/layout' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/layout/layout.phtml',
            'application/home/index' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/application/home/index.phtml',
            'application/detalhes-filme/detalhes' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/application/filme/detalhesFilme.phtml',
            'application/auth/login' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/application/login/login.phtml',
            'application/auth/cadastro' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/application/login/cadastro.phtml',
            'error/404' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/error/404.phtml',
            'error/index' => 'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view/error/index.phtml'
        ],
        'template_path_stack' => [
            'C:\\projetoFilmesCopy\\projetoFilmesCopy\\module\\Application\\config/../view'
        ]
    ],
    'doctrine' => [
        'connection' => [
            'params' => [
                'driver' => 'pdo_mysql',
                'host' => 'buqhwzttbfnrkryplja1-mysql.services.clever-cloud.com',
                'port' => 3306,
                'user' => 'u1o3iwc66b56iik7',
                'password' => 'SSExIOA2cAcORbYjQ4JC',
                'dbname' => 'buqhwzttbfnrkryplja1',
                'charset' => 'utf8mb4'
            ]
        ]
    ]
];
