<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(APPPATH.'core/PublicController.php');

class Talents extends PublicController {
	

	public function __construct(){
		parent::__construct();
	}
		/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function edit(){
		$user = $this->user_data();
		if(!$user){
			redirect("/");
		}
		$data["user"] = $user;
		$data["talent"] = $this->talent->getOneByParam(array("user_id"=>$user["id"]));

        $this->render("public/edit", $data);
	}
	public function save(){
		$data = $this->input->post();
		$user = $this->user_data();
		$data["user_id"] = $user["id"];
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
		$this->json(array("success"=>true, "msg"=>"成 功!", "id"=>$id));
	}
	////////////////////  //////////////////////////////////////////////////////
	public function search(){
		$filter = $this->input->post();

		if(!isset($filter["pagination"])){
			$pagination["page"] = 1;
		}else{
			$pagination = $filter["pagination"];
		}

        if(isset($filter["per_page"]) && !empty($filter["per_page"])){
            $pagination["perpage"] = $filter["per_page"];
        }else{
            $pagination["perpage"] = 10;
        }

		$limit["start"] = ($pagination["page"]-1) * $pagination["perpage"];
		$limit["end"] = $pagination["perpage"];

        $filter["query"] = array();
        if(isset($filter["age_from"])) {
            $filter["query"]["age_from"] = $filter["age_from"];
            $data["age_from"] = $filter["query"]["age_from"];
        }
        if(isset($filter["age_to"])) {
            $filter["query"]["age_to"] = $filter["age_to"];
            $data["age_to"] = $filter["query"]["age_to"];
        }
        if(isset($filter["level"])) {
            $filter["query"]["level"] = $filter["level"];
            $data["level"] = $filter["level"];
        }
        if(isset($filter["gender"])) {
            $filter["query"]["gender"] = $filter["gender"];
            $data["gender"] = $filter["gender"];
        }
        if(isset($filter["keyword"])) {
            $filter["query"]["keyword"] = $filter["keyword"];
            $data["keyword"] = $filter["keyword"];
        }else{
            $filter["query"]["keyword"] = "";
        }

		if(isset($filter["active"])){
			$filter["query"]["active"] = $filter["active"];
			$data["active"] = $filter["active"];
		
		}
		if(isset($filter["belonging"])){
			$filter["query"]["belonging"] = $filter["belonging"];
			$data["belonging"] = $filter["belonging"];
		
		}
        if(isset($filter["talent"])){
            $filter["query"]["talent"] = $filter["talent"];
            $data["talent"] = $filter["talent"];
        }
        if(isset($filter["sort"])){
            $filter["query"]["sort"] = $filter["sort"];
            $data["sort"] = $filter["sort"];
        }
        if(isset($filter["desc"])){
            $filter["query"]["desc"] = $filter["desc"];
            $data["desc"] = $filter["desc"];
        }
//print_r($filter["query"]);
		$data["talents"] = $this->talent->search($filter["query"],$limit);
		if(!isset($filter["query"])){
			$pagination["total"] = $this->talent->count();
		}else{
			$pagination["total"] = $this->talent->count($filter["query"]);
		}
		if( $pagination["total"] % $pagination["perpage"] == 0 ){
			$pagination["total_page"] = (int)($pagination["total"]/$pagination["perpage"]);
		}else{
			$pagination["total_page"] = (int)($pagination["total"]/$pagination["perpage"] +1);
		}
		$pagination["pages"] = ceil($pagination["total"]/$pagination["perpage"]);
		if(($pagination["page"] % 5) == 0 ){
			$pagination["start_page"] = ((int)$pagination["page"]/5-1) * 5 +1;
		}else{
			$pagination["start_page"] = ((int)($pagination["page"]/5)) * 5 +1;
			// $pagination["start_page"] = ($pagination["page"]/5 + 1) * 5;
		}
		$pagination["end_page"]	= $pagination["start_page"] + 5;
//print_r($filter["query"]);
		$data["query"] = $filter["query"];

        if(empty($data["query"]["level"]))
            $data["query"]["level"] = array();
        foreach($data["query"]["level"] as $key => $val){
            if(!empty($val)){
                $data["query"]["level"]["label"] = empty($data["query"]["level"]["label"]) ? $this->talent->level[$key-1] : $data["query"]["level"]["label"].", ".$this->talent->level[$key-1];
            }
        }
        if(empty($data["age_label"]))
            $data["age_label"] = "";
        if(!empty($data["age_from"])){
            $data['age_label'] .= $data["age_from"] . "歳 ~ ";
        }
        if(!empty($data["age_to"])){
            if(empty($data["age_label"])){
                $data['age_label'] .=  "~ " . $data["age_to"] . "歳";
            } else {
                $data['age_label'] .=  $data["age_to"] . "歳";
            }

        }

		if(empty($data["query"]["gender"]))
            $data["query"]["gender"] = array();
		foreach($data["query"]["gender"] as $key => $val){
		    if(!empty($val)){
                $data["query"]["gender"]["label"] = empty($data["query"]["gender"]["label"]) ? $this->talent->gender[$key-1] : $data["query"]["gender"]["label"].", ".$this->talent->gender[$key-1];
            }
        }
		$data["pagination"] = $pagination;
		$config["base_url"] = base_url() . "public/search";
		$config["total_row"] = $pagination["total"];
		$config["per_page"] = $pagination["perpage"];
		$data["user"] = $this->user_data();

		$data["sticky"] = true;
        $this->render("public/search", $data);
		//$this->load->view("public/search", $data);
	}
	public function view($id) {
		$data["user"] = $this->user_data();
		$data["talent"] = $this->talent->getDataById($id);

        $this->render("public/view", $data);

		//$this->load->view("public/view", $data);
	}
}
