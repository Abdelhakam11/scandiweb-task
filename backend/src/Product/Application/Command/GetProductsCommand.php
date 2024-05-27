<?php
namespace Product\Application\Command;
use Exception;
use Product\Infrastructure\Repository\ProductRepo;

class GetProductsCommand
{
    public ProductRepo $productRepo;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        $this->productRepo= new ProductRepo();
    }

    /**
     * @throws Exception
     */
    public function execute():array
    {
        return $this->productRepo->getProducts();
    }

}