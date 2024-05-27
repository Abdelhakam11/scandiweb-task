<?php

namespace Product\Infrastructure\Repository;

use Commons\Helper\DataBaseConnection;
use Exception;
use Product\Domain\Model\Book;
use Product\Domain\Model\Product;
class ProductRepo extends DataBaseConnection
{

    /**
     * @throws Exception
     */
    public function getProducts():array
    {
        $sql = "SELECT * from product";
        return $this->fetchAll($sql);
    }
    /**
     * @throws Exception
     */
    public function getProductsBySku(string $sku) :array {
        $sql = "SELECT * from product where sku=:sku";
        $params=['sku'=>$sku];
        return $this->fetchAll($sql, $params);
    }

    /**
     * @throws Exception
     */
    public function add(Product $product): Product
    {
        $sku= $product->getSku();
        $name= $product->getName();
        $price= $product->getPrice();
        $type= $product->getType();
        $attributeName= $product->attributeTypeName();
        $attributeValue= $product->attributeTypeValue();
        $attributeUnitName= $product->getAttributeUnitName();

        $sql= 'INSERT INTO product(sku,name,price,type,attribute_type_name,attribute_type_value,attribute_unit_name) 
                Values(:sku,:name,:price,:type,:attributeName,:attributeValue,:attributeUnitName)';

        $params=[
            'sku'=> $sku,
            'name'=> $name,
            'price'=> $price,
            'type'=> $type,
            'attributeName'=> $attributeName,
            'attributeValue'=> $attributeValue,
            'attributeUnitName'=> $attributeUnitName
            ];

        $this->query($sql,$params);
        return $product;
    }

    /**
     * @throws Exception
     */
    public function deleteProducts(array $ids): void
    {
        $placeholders = rtrim(str_repeat('?,', count($ids)), ',');
        $sql = "DELETE FROM product WHERE id IN ($placeholders)";
        $this->query($sql, $ids);
    }
}
