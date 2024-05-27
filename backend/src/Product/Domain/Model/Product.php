<?php
namespace Product\Domain\Model;
abstract class Product
{
    protected string $sku;
    protected string $name;
    protected float $price;


    public function __construct(string $sku, string $name, float $price) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getSku():string
    {
        return $this->sku;
    }

    /**
     * @return string
     */
    public function getName():string
    {
        return $this->name;
    }

    /**
     * @return float
     */
    public function getPrice():float
    {
        return $this->price;
    }

    public abstract function getType():string;
    public abstract  function attributeTypeName():string;
    public abstract function attributeTypeValue():string;

    public abstract function getAtTributeUnitName();

}