<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(APPPATH.'core/BaseController.php');

class Welcome extends BaseController {
	
	var $layout = "public";
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
	public function index()
	{
        $data = $this->input->post();
		$user = $this->user_data();

        $data["talents"] = $this->talent->search();

		$data["user"] = $user;
		$data["result_count"] = count($data['talents']);
		$this->render("public/index", $data);
		
	}
	public function signup(){
		$data = $this->input->post();
		unset($data["cf_password"]);
		$user = $this->user->getOneByParam(array("email"=> $data["email"]));
		$data["password"] = sha1($data["password"]);
		if(!$user){
			$data["created_at"] = date("Y-m-d");
			$this->user->setData($data);
			$this->json(array("success" => true, "msg" => "アカウントが作成されました"));
		}else{
			$this->json(array("success" => false, "msg"=>"あなたのアカウントは存在します"));
		}
	}
	public function signin(){
		$data = $this->input->post();
		$user = $this->user->getOneByParam(array("email"=> $data["email"]));
		if($user){
			if($user["password"] == sha1($data["password"])){
				$this->session->set_userdata("user",$user);
				$this->json(array("success" => true, "msg" => "成功ログイン"));
			}else{
				$this->json(array("success" => false, "msg"=>"Password 間違った"));
			}	
		}else{
			$this->json(array("success" => false, "msg"=>"メールアドレス 間違った"));
		}
	}

	public function signout(){
	 	$this->session->unset_userdata('user');
		redirect("/");
	}

    public function term(){
        $user = $this->user_data();
        $data["user"] = $user;
        $this->render("public/term", $data);
    }

    public function privacypolicy(){
        $user = $this->user_data();
        $data["user"] = $user;
        $this->render("public/privacypolicy", $data);
    }
}
