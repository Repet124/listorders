<?php

require_once '../vendor/autoload.php';

use ShopExpress\ApiClient\ApiClient;
use ShopExpress\ApiClient\Response\ApiResponse;

$ApiClient = new ApiClient(
    'lNwzuV_Gb',
    'admin',
    'http://newshop.kupikupi.org/adm/api/'
);

$orders = $ApiClient->get("orders",
    [
        'start' => 60,
        'limit' =>10
    ]
);

$result = [];

foreach ($orders -> orders as $item) {
	$result[] = [$item['order_id'], $item['summ']];
}

echo "<pre>";
var_dump($result);
echo "</pre>";