<?php
namespace Product\Domain\Model;

use Product\Application\Const\ProductConst;

class Book extends Product
{
    private string $weight;
    public function __construct(string $sku, string $name, float $price, string $weight)
    {
        parent::__construct($sku, $name, $price);
        $this->weight = $weight;
    }

    public function getType():string
    {
        return ProductConst::PRODUCT_TYPE_BOOK;
    }

    public function attributeTypeName():string
    {
        return ProductConst::PRODUCT_BOOK_ATTRIBUTE_NAME;
    }

    public function attributeTypeValue():string
    {
        return $this->weight;
    }
    public function getAtTributeUnitName():string
    {
        return ProductConst::PRODUCT_BOOK_ATTRIBUTE_UNIT;
    }
}