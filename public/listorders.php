<?php

require_once '../vendor/autoload.php';

use ShopExpress\ApiClient\ApiClient;
use ShopExpress\ApiClient\Response\ApiResponse;

$ApiClient = new ApiClient(
	'lNwzuV_Gb',
	'admin',
	'http://newshop.kupikupi.org/adm/api/'
);

$start = $_GET['start'];
$limit = $_GET['limit'];

$orders = $ApiClient->get("orders",
	[
		'start' => $start,
		'limit' => $limit
	]
);

$result = [];

foreach ($orders -> orders as $item) {
	$result[] = [$item['order_id'], $item['summ']];
}

echo(json_encode($result));