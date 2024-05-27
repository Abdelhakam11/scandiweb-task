<?php

namespace Product\Application\Validator;

use Cassandra\Function_;
use Exception;
use Product\Application\Const\ProductConst;

class ProductValidator
{
     private static array $requiredFields = ['sku', 'name', 'price', 'type', 'attribute_type_value'];

     private static array $errors = [];
    /**
     * @throws Exception
     */
    public static function validateProductData($postData): array
    {
        $requiredFields= self::$requiredFields;
        $missingFields = array_diff($requiredFields, array_keys($postData));
        if (!empty($missingFields)) {
            self::$errors['missing values'] = $missingFields;
            return  self::$errors;
        }

        $isValidType = static::validateType($postData['type']);
        if (!$isValidType) {
            return self::$errors;
        }
        static::validatePrice($postData['price']);
        $funcName = 'validateAttributeValue'.$postData['type'];
        self::$funcName($postData['attribute_type_value']);
        return self::$errors;
    }

    private static function validateType(string $type): bool
    {
        $allowedTypes = ProductConst::ALLOWED_TYPES;
        $isValid= in_array($type, $allowedTypes);
        if(!$isValid){
            $allowedTypes = implode(',', $allowedTypes);
            self::$errors[$type] = "type must be one of ({$allowedTypes})";
            return false;
        }
        return true;
    }

    private static function validatePrice($price): void
    {
        $isValidPrice= is_numeric($price) && $price > 0;
        if(!$isValidPrice){
            self::$errors['price'] = "price: {$price} is not numeric";
        }
    }

    private static function validateAttributeValueBook($attribute_type_value)
    {
        $attributeName= ProductConst::PRODUCT_BOOK_ATTRIBUTE_NAME;
        $isValidAttribute= is_numeric($attribute_type_value) && $attribute_type_value > 0;
        if(!$isValidAttribute){
            self::$errors[$attributeName] = "attribute_type_value: {$attribute_type_value} is not numeric";
        }
    }

    private static function validateAttributeValueDvd($attribute_type_value)
    {
        $attributeName= ProductConst::PRODUCT_DVD_ATTRIBUTE_NAME;
        $isValidAttribute= is_numeric($attribute_type_value) && $attribute_type_value > 0;
        if (!$isValidAttribute){
            self::$errors[$attributeName]= "attribute_type_value: {$attribute_type_value} is not numeric";
        }
    }

    private static function validateAttributeValueFurniture($attribute_type_value)
    {
        $attributeName= ProductConst::PRODUCT_FURNITURE_ATTRIBUTE_NAME;
        $explodedAttributeName = explode("x", $attribute_type_value);
        $isNumber= true;
        foreach ($explodedAttributeName as $item) {
            if (preg_match('/^\d+(\.\d+)?$/', $item) === 0){
                $isNumber= false;
                break;
            }
        }
        $isValidAttribute= count($explodedAttributeName)==3 && $isNumber;
        if (!$isValidAttribute){
            if (count($explodedAttributeName) !==3){
                self::$errors[$attributeName]= "{$attribute_type_value} must be as HxWxL";
            }
            if(!$isNumber){
                self::$errors[$attributeName]= "height and width and length must be numeric or decimal";
            }
        }
    }
}