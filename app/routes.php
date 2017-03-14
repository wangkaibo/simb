<?php
/**
 * Created by PhpStorm.
 * User: wangkaibo
 * Date: 2017/3/2 0002
 * Time: 18:03
 */
use \NoahBuscher\Macaw\Macaw as Router;

// your routes here
Router::get('/', 'App\Controllers\IndexController@index');

Router::dispatch();
