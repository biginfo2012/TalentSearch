<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(APPPATH.'core/AdminController.php');

class User extends AdminController {
	
	public function __construct(){

		parent::__construct();
		$this->load->model("User_model", "model");
	}

	public function index(){
		$data["page_title"] = "管理者";
		$this->render("admin/user",$data);
	}
	// delete image pair
	public function delete(){
		$id = $this->input->post("id");
		$this->user->unsetDataById($id);
		$this->json(array("success"=>true, "msg"=>"削除されました!"));
	}
	public function save(){
		$data = $this->input->post();
		unset($data["cf_password"]);
		$data["password"] = sha1($data["password"]);
		if($data["id"]){
			$this->model->updateData($data);
		}else{
			$data["created_at"] = date("Y-m-d");
			$this->model->setData($data);
		}
		$this->json(array("success"=>true, "msg"=>"成 功!"));
	}

	public function api(){
		$filter = $this->input->post("query");
		$data["meta"] = $filter;
		$data["data"] = $this->user->getDataByParam($filter);
		$this->json($data);
	}

}
