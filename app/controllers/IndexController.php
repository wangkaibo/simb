<?php
/**
 * Created by PhpStorm.
 * User: wangkaibo
 * Date: 2017/3/2 0002
 * Time: 18:31
 */
namespace App\Controllers;

use App\Models\Test;

class IndexController extends BaseController
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		echo view('index');
	}

	public function store()
	{

	}
}
