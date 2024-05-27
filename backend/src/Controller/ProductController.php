<?php

namespace Controller;

use Commons\Helper\BaseController;
use Exception;
use JetBrains\PhpStorm\NoReturn;
use Product\Application\Command\AddProductCommand;
use Product\Application\Command\DeleteProductsCommand;
use Product\Application\Command\GetProductsBySkuCommand;
use Product\Application\Command\GetProductsCommand;
use Product\Application\Factory\ProductFactory;
use Product\Application\Validator\ProductValidator;

class ProductController extends BaseController
{

    /**
     * @throws Exception
     */
    #[NoReturn] public static function getProducts():void
    {
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');
        $getProductsCommand= new GetProductsCommand();
        $products= $getProductsCommand->execute();
        self::response($products);
    }

    /**
     * @throws Exception
     */
    public static function addProduct():void
    {
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');
        $addProductCommand= new AddProductCommand();
        $postData = file_get_contents('php://input');
        $postData = json_decode($postData, true);
        $errors =ProductValidator::validateProductData($postData);
            if (empty($errors)) {
                $product = $addProductCommand->execute(ProductFactory::make($postData['type'], $postData));
                if (isset($product['isAdded'])){
                    unset($product['isAdded']);
                    self::response($product, 422);
                }
                self::response($product);
            }
        self::response($errors, 422);
    }

    /**
     * @throws Exception
     */
    public static function deleteProducts()
    {
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');
        $postData = file_get_contents('php://input');
        $jsonData = json_decode($postData, true);
        $ids = $jsonData['ids'] ?? null;

        $deleteProductsCommand = new DeleteProductsCommand();
        if (!empty($ids)) {
            $deleteProductsCommand->execute($ids);
            $result = ['message' => 'success'];

        } else {
            $result = ['error' => 'No IDs received'];
        }
        self::response($result);

    }

    /**
     * @throws Exception
     */
    public static function getProductsBySku(string $sku): array
    {
        $getProductsBySkuCommand=new GetProductsBySkuCommand();
        return $getProductsBySkuCommand->execute( $sku );
    }
}