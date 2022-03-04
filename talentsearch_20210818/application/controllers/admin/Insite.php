<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(APPPATH.'core/AdminController.php');

class Insite extends AdminController {

    public function __construct(){

        parent::__construct();
    }

    public function index(){
        $data["page_title"] = "インサイト";
        $this->render("admin/insite",$data);
    }
    public function save(){
        $data = $this->input->post();
        $talent_id = $data['talent_id'];
        $talent = $this->talent->getDataById($talent_id);
        $data['it_img'] = $talent['it_img'];
        $data['name'] = $talent['name'];

        if(isset($data["id"]) && $data["id"]){
//            print_r($data);
//            die();
            $this->insite->updateData($data);

        }else {
            $id = $this->insite->setData($data);
        }
        $this->json(array("success"=>true, "msg"=>"成 功!"));

    }
    public function edit($id = null){
        if($id){
            $data["insite"] = $this->insite->getDataById($id);
        }
        $talent_arr = array();
        $talents = $this->talent->getAll();
        foreach ($talents as $item){
            $tmp_arr = array();
            $tmp_arr['id'] = $item->id;
            $tmp_arr['it_img'] = $item->it_img;
            $tmp_arr['name'] = $item->name;
            $tmp_arr['email'] = $item->email;
            $tmp_arr['gender'] = $item->gender;
            $tmp_arr['occupation'] = $item->occupation;
            $tmp_arr['belonging'] = $item->belonging;
            $tmp_arr['activity_base'] = $item->activity_base;
            array_push($talent_arr, $tmp_arr);
        }
//		print_r($data['talent']['belonging']);
//		die();
        $data['talents'] = $talent_arr;
        $data["page_title"] = "タレントエディット";
        $this->render("admin/insiteedit", $data);
    }
    // delete image pair
    public function delete(){
        $id = $this->input->post("id");
        $this->insite->unsetDataById($id);
        $this->json(array("success"=>true, "msg"=>"削除されました!"));
    }

    public function api(){
        $filter = $this->input->post("query");
        $data["meta"] = $filter;
        $data["data"] = $this->insite->getDataByParam($filter);
        $this->json($data);
    }

}
