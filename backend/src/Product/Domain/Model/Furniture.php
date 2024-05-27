<?php
namespace Product\Domain\Model;
use Product\Application\Const\ProductConst;

class Furniture extends Product
{
    private string $dimensions;

    public function __construct(string $sku, string $name, float $price, string $dimensions) {
        parent::__construct($sku, $name, $price);
        $this->dimensions = $dimensions;
    }

    public function getType():string
    {
        return ProductConst::PRODUCT_TYPE_FURNITURE;
    }

    public function attributeTypeName():string
    {
        return ProductConst::PRODUCT_FURNITURE_ATTRIBUTE_NAME;
    }

    public function attributeTypeValue():string
    {
        return $this->dimensions;
    }

    public function getAtTributeUnitName()
    {
        return null;
    }
}