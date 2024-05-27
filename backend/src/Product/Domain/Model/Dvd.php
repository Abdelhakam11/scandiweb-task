<?php
namespace Product\Domain\Model;

use Product\Application\Const\ProductConst;

class Dvd extends Product
{
    private string $size;
    public function __construct(string $sku, string $name, float $price, string $size) {
        parent::__construct($sku,$name,$price);
        $this->size = $size;
    }

    public function getType():string
    {
        return ProductConst::PRODUCT_TYPE_DVD;
    }
    public function attributeTypeName():string
    {
        return ProductConst::PRODUCT_DVD_ATTRIBUTE_NAME;
    }
    public function attributeTypeValue():string
    {
        return $this->size;
    }
    public function getAtTributeUnitName():string
    {
        return ProductConst::PRODUCT_DVD_ATTRIBUTE_UNIT;
    }
}