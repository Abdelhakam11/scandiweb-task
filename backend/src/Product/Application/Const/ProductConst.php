<?php

namespace Product\Application\Const;

class ProductConst
{
    public const PRODUCT_TYPE_BOOK = 'Book';
    public const PRODUCT_TYPE_DVD = 'Dvd';
    public const PRODUCT_TYPE_FURNITURE = 'Furniture';
    public const PRODUCT_FURNITURE_ATTRIBUTE_NAME = 'dimensions';
    public const PRODUCT_BOOK_ATTRIBUTE_NAME = 'weight';
    public const PRODUCT_DVD_ATTRIBUTE_NAME = 'size';
    public const PRODUCT_DVD_ATTRIBUTE_UNIT = 'MB';
    public const PRODUCT_BOOK_ATTRIBUTE_UNIT = 'KG';

    public const ALLOWED_TYPES = [
        self::PRODUCT_TYPE_FURNITURE,
        self::PRODUCT_TYPE_DVD,
        self::PRODUCT_TYPE_BOOK
    ];

}