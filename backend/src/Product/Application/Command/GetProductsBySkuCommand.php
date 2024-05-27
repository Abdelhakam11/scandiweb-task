<?php

namespace Product\Application\Command;

use Exception;
use Product\Infrastructure\Repository\ProductRepo;

class GetProductsBySkuCommand
{
    public ProductRepo $productRepo;

    public function __construct()
    {
        $this->productRepo= new ProductRepo();
    }

    /**
     * @throws Exception
     */
    public function execute(string $sku):array
    {
        return $this->productRepo->getProductsBySku($sku);
    }
}