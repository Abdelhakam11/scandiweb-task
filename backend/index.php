<?php

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'src/autoload.php';

use \Commons\Helper\Router;

$router = new Router();

$router->get('/scandiweb-task/backend/products-getter', 'Controller\ProductController::getProducts');
$router->post('/scandiweb-task/backend/add-Product', 'Controller\ProductController::addProduct');
$router->get('/scandiweb-task/backend/products-by-sku', 'Controller\ProductController::getProductsBySku');
$router->post('/scandiweb-task/backend/delete-Product', 'Controller\ProductController::deleteProducts');

$router->resolve();