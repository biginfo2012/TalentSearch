<?php
	defined('BASEPATH') or die('No direct access script allowed!');

	require_once(APPPATH.'core/BaseController.php');

	class AdminController extends BaseController
	{
        var $layout = "admin";
        
		public function __construct() {
			parent::__construct();
			$admin = $this->user_data();
			if($admin["type"] != "2"){
				redirect("/");
			}
		}

        public function render($content, $data = array()){
            if(empty($data["sticky"]))
                $data["sticky"] = false;

            $this->data = array_merge($data, array('user'=>$this->user_data()));
            $this->template['header']  = $this->load->view('layout/'.$this->layout.'/header', $this->data, TRUE);
            $this->template['content'] = $this->load->view($content, $this->data, TRUE);
            $this->template['footer']  = $this->load->view('layout/'.$this->layout.'/footer', $this->data, TRUE);

            return $this->load->view('layout/'.$this->layout.'/template', $this->template);

        }
	}