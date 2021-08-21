<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(APPPATH.'core/AdminController.php');

class Talent extends AdminController {
	
	public function __construct(){

		parent::__construct();
	}

	public function index(){
		$data["page_title"] = "才 能";
		$this->render("admin/talent",$data);
	}
	public function save(){
		$data = $this->input->post();
		unset($data["profile_avatar_remove"]);
		$context["json"] = json_encode($data);
		$temp = "";
		foreach($data as $key => $item){
			 $temp = $temp . " " . $item;
		}
		$context["content"] = $temp;

		if($data["id"]){
			$data["created_at"] = date("Y-m-d");
			$this->talent->updateData($data);
			$id = $data["id"];
			$context["id"] = $id;
			$this->context->updateData($context);

		}else {
			$id = $this->talent->setData($data);
			$this->context->setData($context);
		}
		if(isset($_FILES["file"])){
			if ( 0 < $_FILES['file']['error'] ) {
				echo 'Error: ' . $_FILES['file']['error'] . '<br>';
			}
			else {
				$name = $_FILES["file"]["name"];
				$ext = pathinfo($name, PATHINFO_EXTENSION);
				// print_r($_FILES["file".$i]['tmp_name']);
				move_uploaded_file($_FILES["file"]['tmp_name'], 'uploads/' . $id . "." . $ext);
			}
			$this->talent->updateData(array("id"=>$id, "image"=>$id . "." . $ext));
			$data["image"] = $id . "." . $ext;
		}
		$this->json(array("success"=>true, "msg"=>"成 功!"));

	}
	public function edit($id = null){
		if($id){
			$data["talent"] = $this->talent->getDataById($id);
		}
		$data["page_title"] = "タレントエディット";
		$this->render("admin/edit", $data);
	}
	// delete image pair
	public function delete(){
		$id = $this->input->post("id");
		$this->talent->unsetDataById($id);
		$this->json(array("success"=>true, "msg"=>"削除されました!"));
	}

	public function api(){
		$filter = $this->input->post("query");
		$data["meta"] = $filter;
		$data["data"] = $this->talent->getDataByParam($filter);
		$this->json($data);
	}

}
