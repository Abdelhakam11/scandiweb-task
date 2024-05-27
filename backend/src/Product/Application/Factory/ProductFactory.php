<?php

namespace Product\Application\Factory;

use  Product\Domain\Model\Book;
use  Product\Domain\Model\DVD;
use  Product\Domain\Model\Furniture;
class ProductFactory
{

    public static function make($type, $data)
    {
        $className = 'Product\\Domain\\Model\\' . $type;
        return new $className($data['sku'], $data['name'], $data['price'], $data['attribute_type_value']);
    }

}