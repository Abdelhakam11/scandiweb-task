<?php

namespace Product\Application\Command;

use Exception;
use Product\Infrastructure\Repository\ProductRepo;

class DeleteProductsCommand
{
    public ProductRepo $productRepo;

    public function __construct()
    {
        $this->productRepo= new ProductRepo();
    }

    /**
     * @throws Exception
     */
    public function execute(array $ids)
    {
        $this->productRepo->deleteProducts($ids);
    }

}