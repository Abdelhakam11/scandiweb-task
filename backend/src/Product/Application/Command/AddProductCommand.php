<?php

namespace Product\Application\Command;

use Controller\ProductController;
use Exception;
use Product\Domain\Model\Product;
use Product\Infrastructure\Repository\ProductRepo;

class AddProductCommand
{
    public ProductRepo $productRepo;
    public function __construct()
    {
        $this->productRepo= new ProductRepo();
    }

    /**
     * @throws Exception
     */
    public function checkIsValidSku(string $sku):bool {
        $productsBySku= ProductController::getProductsBySku($sku);
        if ( count($productsBySku) === 0){
            return true;
        }
        return false;
    }
    /**
     * @throws Exception
     */
    public function execute(Product $product): array
    {
        $isValidSku= $this->checkIsValidSku($product->getSku());
        if ($isValidSku){
            $product =  $this->productRepo->add($product);
            return [
                'sku' => $product->getSku(),
                'name' => $product->getName(),
                'price' => $product->getPrice(),
                'type' => $product->getType(),
                'attribute_type_unit_name' => $product->getAtTributeUnitName(),
                'attribute_type_value' => $product->attributeTypeValue(),
            ];
        }
        return [
            'isAdded' => true,
            'sku' => "sku: {$product->getSku()} is used before, try to change it"
        ];
    }
}