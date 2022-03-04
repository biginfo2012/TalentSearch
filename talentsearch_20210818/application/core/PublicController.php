<?php
	defined('BASEPATH') or die('No direct access script allowed!');

	require_once(APPPATH.'core/BaseController.php');

	class PublicController extends BaseController
	{
        var $layout = "public";
		public function __construct() {
			parent::__construct();
		}
	}