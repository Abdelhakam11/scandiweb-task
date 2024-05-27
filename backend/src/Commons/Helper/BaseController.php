<?php

namespace Commons\Helper;

use JetBrains\PhpStorm\NoReturn;

class BaseController
{

    #[NoReturn] public static function response($data, $statusCode = 200)
    {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        http_response_code($statusCode);
        $json_response = json_encode($data);
        echo $json_response;
        exit();
    }

}
