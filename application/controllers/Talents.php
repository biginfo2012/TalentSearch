<?php
defined('BASEPATH') or exit('No direct script access allowed');

require_once(APPPATH . 'core/PublicController.php');

class Talents extends PublicController
{


    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *        http://example.com/index.php/welcome
     *    - or -
     *        http://example.com/index.php/welcome/index
     *    - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function edit()
    {
        $user = $this->user_data();
        if (!$user) {
            redirect("/");
        }
        $data["user"] = $user;
        $data["talent"] = $this->talent->getOneByParam(array("user_id" => $user["id"]));

        $this->render("public/edit", $data);
    }

    public function save()
    {
        $data = $this->input->post();
        $user = $this->user_data();
        $data["user_id"] = $user["id"];
        unset($data["profile_avatar_remove"]);
        $context["json"] = json_encode($data);
        $temp = "";
        foreach ($data as $key => $item) {
            $temp = $temp . " " . $item;
        }
        $context["content"] = $temp;

        if ($data["id"]) {
            $data["created_at"] = date("Y-m-d");
            $this->talent->updateData($data);
            $id = $data["id"];
            $context["id"] = $id;
            $this->context->updateData($context);

        } else {
            $id = $this->talent->setData($data);
            $this->context->setData($context);
        }
        if (isset($_FILES["file"])) {
            if (0 < $_FILES['file']['error']) {
                echo 'Error: ' . $_FILES['file']['error'] . '<br>';
            } else {
                $name = $_FILES["file"]["name"];
                $ext = pathinfo($name, PATHINFO_EXTENSION);
                // print_r($_FILES["file".$i]['tmp_name']);
                move_uploaded_file($_FILES["file"]['tmp_name'], 'uploads/' . $id . "." . $ext);
            }
            $this->talent->updateData(array("id" => $id, "image" => $id . "." . $ext));
            $data["image"] = $id . "." . $ext;
        }
        $this->json(array("success" => true, "msg" => "成 功!", "id" => $id));
    }

    ////////////////////  //////////////////////////////////////////////////////
    public function search()
    {
        $filter = $this->input->post();

        if (!isset($filter["pagination"])) {
            $pagination["page"] = 1;
        } else {
            $pagination = $filter["pagination"];
        }

        if (isset($filter["per_page"]) && !empty($filter["per_page"])) {
            $pagination["perpage"] = $filter["per_page"];
        } else {
            $pagination["perpage"] = 20;
        }

        $limit["start"] = ($pagination["page"] - 1) * $pagination["perpage"];
        $limit["end"] = $pagination["perpage"];

        $filter["query"] = array();
        if (isset($filter["age_from"])) {
            $filter["query"]["age_from"] = $filter["age_from"];
            $data["age_from"] = $filter["query"]["age_from"];
        }
        if (isset($filter["age_to"])) {
            $filter["query"]["age_to"] = $filter["age_to"];
            $data["age_to"] = $filter["query"]["age_to"];
        }
        if (isset($filter["level"])) {
            $filter["query"]["level"] = $filter["level"];
            $data["level"] = $filter["level"];
        }
        if (isset($filter["active"])) {
            $filter["query"]["active"] = $filter["active"];
            $data["active"] = $filter["active"];
        }
        if (isset($filter["relationship"])) {
            $filter["query"]["relationship"] = $filter["relationship"];
            $data["relationship"] = $filter["relationship"];
        }
        if (isset($filter["charge_name"])) {
            $filter["query"]["charge_name"] = $filter["charge_name"];
            $data["charge_name"] = $filter["charge_name"];
        }
        if (isset($filter["belonging"])) {
            $filter["query"]["belonging"] = $filter["belonging"];
            $data["belonging"] = $filter["belonging"];
        }
        if (isset($filter["genre"])) {
            $filter["query"]["genre"] = $filter["genre"];
            $data["genre"] = $filter["genre"];
        }
        if (isset($filter["gender"])) {
            $filter["query"]["gender"] = $filter["gender"];
            $data["gender"] = $filter["gender"];
        }
        if (isset($filter["keyword"])) {
            $filter["query"]["keyword"] = $filter["keyword"];
            $data["keyword"] = $filter["keyword"];
        } else {
            $filter["query"]["keyword"] = "";
        }

//        if(isset($filter["instagram_money_from"])) {
//            $filter["query"]["instagram_money_from"] = $filter["instagram_money_from"];
//            $data["instagram_money_from"] = $filter["query"]["instagram_money_from"];
//        }
//        if(isset($filter["instagram_money_to"])) {
//            $filter["query"]["instagram_money_to"] = $filter["instagram_money_to"];
//            $data["instagram_money_to"] = $filter["query"]["instagram_money_to"];
//        }
//        if(isset($filter["youtube_money_from"])) {
//            $filter["query"]["youtube_money_from"] = $filter["youtube_money_from"];
//            $data["youtube_money_from"] = $filter["query"]["youtube_money_from"];
//        }
//        if(isset($filter["youtube_money_to"])) {
//            $filter["query"]["youtube_money_to"] = $filter["youtube_money_to"];
//            $data["youtube_money_to"] = $filter["query"]["youtube_money_to"];
//        }
//        if(isset($filter["tiktok_money_from"])) {
//            $filter["query"]["tiktok_money_from"] = $filter["tiktok_money_from"];
//            $data["tiktok_money_from"] = $filter["query"]["tiktok_money_from"];
//        }
//        if(isset($filter["tiktok_money_to"])) {
//            $filter["query"]["tiktok_money_to"] = $filter["tiktok_money_to"];
//            $data["tiktok_money_to"] = $filter["query"]["tiktok_money_to"];
//        }
//        if(isset($filter["twitter_money_from"])) {
//            $filter["query"]["twitter_money_from"] = $filter["twitter_money_from"];
//            $data["twitter_money_from"] = $filter["query"]["twitter_money_from"];
//        }
//        if(isset($filter["twitter_money_to"])) {
//            $filter["query"]["twitter_money_to"] = $filter["twitter_money_to"];
//            $data["twitter_money_to"] = $filter["query"]["twitter_money_to"];
//        }
//        if(isset($filter["blog_money_from"])) {
//            $filter["query"]["blog_money_from"] = $filter["blog_money_from"];
//            $data["blog_money_from"] = $filter["query"]["blog_money_from"];
//        }
//        if(isset($filter["blog_money_to"])) {
//            $filter["query"]["blog_money_to"] = $filter["blog_money_to"];
//            $data["blog_money_to"] = $filter["query"]["blog_money_to"];
//        }
//        if(isset($filter["wear_money_from"])) {
//            $filter["query"]["wear_money_from"] = $filter["wear_money_from"];
//            $data["wear_money_from"] = $filter["query"]["wear_money_from"];
//        }
//        if(isset($filter["wear_money_to"])) {
//            $filter["query"]["wear_money_to"] = $filter["wear_money_to"];
//            $data["wear_money_to"] = $filter["query"]["wear_money_to"];
//        }
//        if(isset($filter["weibo_money_from"])) {
//            $filter["query"]["weibo_money_from"] = $filter["weibo_money_from"];
//            $data["weibo_money_from"] = $filter["query"]["weibo_money_from"];
//        }
//        if(isset($filter["weibo_money_to"])) {
//            $filter["query"]["weibo_money_to"] = $filter["weibo_money_to"];
//            $data["weibo_money_to"] = $filter["query"]["weibo_money_to"];
//        }
//        if(isset($filter["wechat_money_from"])) {
//            $filter["query"]["wechat_money_from"] = $filter["wechat_money_from"];
//            $data["wechat_money_from"] = $filter["query"]["wechat_money_from"];
//        }
//        if(isset($filter["wechat_money_to"])) {
//            $filter["query"]["wechat_money_to"] = $filter["wechat_money_to"];
//            $data["wechat_money_to"] = $filter["query"]["wechat_money_to"];
//        }
//        if(isset($filter["red_money_from"])) {
//            $filter["query"]["red_money_from"] = $filter["red_money_from"];
//            $data["red_money_from"] = $filter["query"]["red_money_from"];
//        }
//        if(isset($filter["red_money_to"])) {
//            $filter["query"]["red_money_to"] = $filter["red_money_to"];
//            $data["red_money_to"] = $filter["query"]["red_money_to"];
//        }
//        if(isset($filter["keyin_money_from"])) {
//            $filter["query"]["keyin_money_from"] = $filter["keyin_money_from"];
//            $data["keyin_money_from"] = $filter["query"]["keyin_money_from"];
//        }
//        if(isset($filter["keyin_money_to"])) {
//            $filter["query"]["keyin_money_to"] = $filter["keyin_money_to"];
//            $data["keyin_money_to"] = $filter["query"]["keyin_money_to"];
//        }

        if (isset($filter["blog_fw_from"])) {
            $filter["query"]["blog_fw_from"] = $filter["blog_fw_from"];
            $data["blog_fw_from"] = $filter["query"]["blog_fw_from"];
        }
        if (isset($filter["blog_fw_to"])) {
            $filter["query"]["blog_fw_to"] = $filter["blog_fw_to"];
            $data["blog_fw_to"] = $filter["query"]["blog_fw_to"];
        }
        if (isset($filter["wear_fw_from"])) {
            $filter["query"]["wear_fw_from"] = $filter["wear_fw_from"];
            $data["wear_fw_from"] = $filter["query"]["wear_fw_from"];
        }
        if (isset($filter["wear_fw_to"])) {
            $filter["query"]["wear_fw_to"] = $filter["wear_fw_to"];
            $data["wear_fw_to"] = $filter["query"]["wear_fw_to"];
        }
        if (isset($filter["weibo_fw_from"])) {
            $filter["query"]["weibo_fw_from"] = $filter["weibo_fw_from"];
            $data["weibo_fw_from"] = $filter["query"]["weibo_fw_from"];
        }
        if (isset($filter["weibo_fw_to"])) {
            $filter["query"]["weibo_fw_to"] = $filter["weibo_fw_to"];
            $data["weibo_fw_to"] = $filter["query"]["weibo_fw_to"];
        }
        if (isset($filter["wechat_fw_from"])) {
            $filter["query"]["wechat_fw_from"] = $filter["wechat_fw_from"];
            $data["wechat_fw_from"] = $filter["query"]["wechat_fw_from"];
        }
        if (isset($filter["wechat_fw_to"])) {
            $filter["query"]["wechat_fw_to"] = $filter["wechat_fw_to"];
            $data["wechat_fw_to"] = $filter["query"]["wechat_fw_to"];
        }
        if (isset($filter["red_fw_from"])) {
            $filter["query"]["red_fw_from"] = $filter["red_fw_from"];
            $data["red_fw_from"] = $filter["query"]["red_fw_from"];
        }
        if (isset($filter["red_fw_to"])) {
            $filter["query"]["red_fw_to"] = $filter["red_fw_to"];
            $data["red_fw_to"] = $filter["query"]["red_fw_to"];
        }
        if (isset($filter["keyin_fw_from"])) {
            $filter["query"]["keyin_fw_from"] = $filter["keyin_fw_from"];
            $data["keyin_fw_from"] = $filter["query"]["keyin_fw_from"];
        }
        if (isset($filter["keyin_fw_to"])) {
            $filter["query"]["keyin_fw_to"] = $filter["keyin_fw_to"];
            $data["keyin_fw_to"] = $filter["query"]["keyin_fw_to"];
        }
//        if(isset($filter["height_from"])) {
//            $filter["query"]["height_from"] = $filter["height_from"];
//            $data["height_from"] = $filter["query"]["height_from"];
//        }
//        if(isset($filter["height_to"])) {
//            $filter["query"]["height_to"] = $filter["height_to"];
//            $data["height_to"] = $filter["query"]["height_to"];
//        }
        if (isset($filter["threesize_from"])) {
            $filter["query"]["threesize_from"] = $filter["threesize_from"];
            $data["threesize_from"] = $filter["query"]["threesize_from"];
        }
        if (isset($filter["threesize_to"])) {
            $filter["query"]["threesize_to"] = $filter["threesize_to"];
            $data["threesize_to"] = $filter["query"]["threesize_to"];
        }
//        if(isset($filter["company_name"])) {
//            $filter["query"]["company_name"] = $filter["company_name"];
//            $data["company_name"] = $filter["query"]["company_name"];
//        }
        if (isset($filter["instagram_man_from"])) {
            $filter["query"]["instagram_man_from"] = $filter["instagram_man_from"];
            $data["instagram_man_from"] = $filter["query"]["instagram_man_from"];
        }
        if (isset($filter["instagram_man_to"])) {
            $filter["query"]["instagram_man_to"] = $filter["instagram_man_to"];
            $data["instagram_man_to"] = $filter["query"]["instagram_man_to"];
        }
        if (isset($filter["instagram_wman_from"])) {
            $filter["query"]["instagram_wman_from"] = $filter["instagram_wman_from"];
            $data["instagram_wman_from"] = $filter["query"]["instagram_wman_from"];
        }
        if (isset($filter["instagram_wman_to"])) {
            $filter["query"]["instagram_wman_to"] = $filter["instagram_wman_to"];
            $data["instagram_wman_to"] = $filter["query"]["instagram_wman_to"];
        }
        if (isset($filter["instagram_engage_rate_from"])) {
            $filter["query"]["instagram_engage_rate_from"] = $filter["instagram_engage_rate_from"];
            $data["instagram_engage_rate_from"] = $filter["query"]["instagram_engage_rate_from"];
        }
        if (isset($filter["instagram_engage_rate_to"])) {
            $filter["query"]["instagram_engage_rate_to"] = $filter["instagram_engage_rate_to"];
            $data["instagram_engage_rate_to"] = $filter["query"]["instagram_engage_rate_to"];
        }
        if (isset($filter["youtube_man_from"])) {
            $filter["query"]["youtube_man_from"] = $filter["youtube_man_from"];
            $data["youtube_man_from"] = $filter["query"]["youtube_man_from"];
        }
        if (isset($filter["youtube_man_to"])) {
            $filter["query"]["youtube_man_to"] = $filter["youtube_man_to"];
            $data["youtube_man_to"] = $filter["query"]["youtube_man_to"];
        }
        if (isset($filter["youtube_wman_from"])) {
            $filter["query"]["youtube_wman_from"] = $filter["youtube_wman_from"];
            $data["youtube_wman_from"] = $filter["query"]["youtube_wman_from"];
        }
        if (isset($filter["youtube_wman_to"])) {
            $filter["query"]["youtube_wman_to"] = $filter["youtube_wman_to"];
            $data["youtube_wman_to"] = $filter["query"]["youtube_wman_to"];
        }
//        if(isset($filter["youtube_age_from"])) {
//            $filter["query"]["youtube_age_from"] = $filter["youtube_age_from"];
//            $data["youtube_age_from"] = $filter["query"]["youtube_age_from"];
//        }
//        if(isset($filter["youtube_age_to"])) {
//            $filter["query"]["youtube_age_to"] = $filter["youtube_age_to"];
//            $data["youtube_age_to"] = $filter["query"]["youtube_age_to"];
//        }
        if (isset($filter["tiktok_man_from"])) {
            $filter["query"]["tiktok_man_from"] = $filter["tiktok_man_from"];
            $data["tiktok_man_from"] = $filter["query"]["tiktok_man_from"];
        }
        if (isset($filter["tiktok_man_to"])) {
            $filter["query"]["tiktok_man_to"] = $filter["tiktok_man_to"];
            $data["tiktok_man_to"] = $filter["query"]["tiktok_man_to"];
        }
        if (isset($filter["tiktok_wman_from"])) {
            $filter["query"]["tiktok_wman_from"] = $filter["tiktok_wman_from"];
            $data["tiktok_wman_from"] = $filter["query"]["tiktok_wman_from"];
        }
        if (isset($filter["tiktok_wman_to"])) {
            $filter["query"]["tiktok_wman_to"] = $filter["tiktok_wman_to"];
            $data["tiktok_wman_to"] = $filter["query"]["tiktok_wman_to"];
        }
        if (isset($filter["instagram_fw_from"])) {
            $filter["query"]["instagram_fw_from"] = $filter["instagram_fw_from"];
            $data["instagram_fw_from"] = $filter["query"]["instagram_fw_from"];
        }
        if (isset($filter["instagram_fw_to"])) {
            $filter["query"]["instagram_fw_to"] = $filter["instagram_fw_to"];
            $data["instagram_fw_to"] = $filter["query"]["instagram_fw_to"];
        }
        if (isset($filter["youtube_fw_from"])) {
            $filter["query"]["youtube_fw_from"] = $filter["youtube_fw_from"];
            $data["youtube_fw_from"] = $filter["query"]["youtube_fw_from"];
        }
        if (isset($filter["youtube_fw_to"])) {
            $filter["query"]["youtube_fw_to"] = $filter["youtube_fw_to"];
            $data["youtube_fw_to"] = $filter["query"]["youtube_fw_to"];
        }
        if (isset($filter["tiktok_fw_from"])) {
            $filter["query"]["tiktok_fw_from"] = $filter["tiktok_fw_from"];
            $data["tiktok_fw_from"] = $filter["query"]["tiktok_fw_from"];
        }
        if (isset($filter["tiktok_fw_to"])) {
            $filter["query"]["tiktok_fw_to"] = $filter["tiktok_fw_to"];
            $data["tiktok_fw_to"] = $filter["query"]["tiktok_fw_to"];
        }
        if (isset($filter["twitter_fw_from"])) {
            $filter["query"]["twitter_fw_from"] = $filter["twitter_fw_from"];
            $data["twitter_fw_from"] = $filter["query"]["twitter_fw_from"];
        }
        if (isset($filter["twitter_fw_to"])) {
            $filter["query"]["twitter_fw_to"] = $filter["twitter_fw_to"];
            $data["twitter_fw_to"] = $filter["query"]["twitter_fw_to"];
        }


        if (isset($filter["talent"])) {
            $filter["query"]["talent"] = $filter["talent"];
            $data["talent"] = $filter["talent"];
        }
        if (isset($filter["sort"])) {
            $filter["query"]["sort"] = $filter["sort"];
            $data["sort"] = $filter["sort"];
        }
        if (isset($filter["desc"])) {
            $filter["query"]["desc"] = $filter["desc"];
            $data["desc"] = $filter["desc"];
        }
//print_r($filter["query"]);
        $data["talents"] = $this->talent->search($filter["query"], $limit);
        if (!isset($filter["query"])) {
            $pagination["total"] = $this->talent->count();
        } else {
            $pagination["total"] = $this->talent->count($filter["query"]);
        }
        if ($pagination["total"] % $pagination["perpage"] == 0) {
            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"]);
        } else {
            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"] + 1);
        }
        $pagination["pages"] = ceil($pagination["total"] / $pagination["perpage"]);
        if (($pagination["page"] % 5) == 0) {
            $pagination["start_page"] = ((int)$pagination["page"] / 5 - 1) * 5 + 1;
        } else {
            $pagination["start_page"] = ((int)($pagination["page"] / 5)) * 5 + 1;
            // $pagination["start_page"] = ($pagination["page"]/5 + 1) * 5;
        }
        $pagination["end_page"] = $pagination["start_page"] + 5;
//print_r($filter["query"]);
        $data["query"] = $filter["query"];

        if (empty($data["query"]["level"]))
            $data["query"]["level"] = array();
        foreach ($data["query"]["level"] as $key => $val) {
            if (!empty($val)) {
                $data["query"]["level"]["label"] = empty($data["query"]["level"]["label"]) ? $this->talent->level[$key - 1] : $data["query"]["level"]["label"] . ", " . $this->talent->level[$key - 1];
            }
        }
        if (empty($data["age_label"]))
            $data["age_label"] = "";
        if (!empty($data["age_from"])) {
            $data['age_label'] .= $data["age_from"] . "歳 ~ ";
        }
        if (!empty($data["age_to"])) {
            if (empty($data["age_label"])) {
                $data['age_label'] .= "~ " . $data["age_to"] . "歳";
            } else {
                $data['age_label'] .= $data["age_to"] . "歳";
            }

        }

        if (empty($data["query"]["gender"]))
            $data["query"]["gender"] = array();
        foreach ($data["query"]["gender"] as $key => $val) {
            if (!empty($val)) {
                $data["query"]["gender"]["label"] = empty($data["query"]["gender"]["label"]) ? $this->talent->gender[$key - 1] : $data["query"]["gender"]["label"] . ", " . $this->talent->gender[$key - 1];
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

    public function view($id)
    {
        $data["user"] = $this->user_data();
        $data["talent"] = $this->talent->getDataById($id);
        $favourite = $this->favourite->getOneByParam(array("talent_id" => $id));
        if (isset($favourite)) {
            $data["favourite"] = 1;
        } else {
            $data["favourite"] = 0;
        }

        $this->render("public/view", $data);

        //$this->load->view("public/view", $data);
    }
    public function popview($id)
    {
        $data["user"] = $this->user_data();
        $data["talent"] = $this->talent->getDataById($id);
        $favourite = $this->favourite->getOneByParam(array("talent_id" => $id));
        if (isset($favourite)) {
            $data["favourite"] = 1;
        } else {
            $data["favourite"] = 0;
        }

        $this->render("public/popview", $data);

        //$this->load->view("public/view", $data);
    }

    public function addFavourite($id)
    {
        $favourite["talent_id"] = $id;
        $this->favourite->setData($favourite);
        $this->json(array("success" => true, "msg" => "成 功!"));
        //$this->load->view("public/view", $data);
    }

    public function delFavourite($id)
    {
        $data = $this->favourite->getOneByParam(array("talent_id" => $id));
        $this->favourite->unsetDataById($data['id']);
        $this->json(array("success" => true, "msg" => "成 功!"));
        //$this->load->view("public/view", $data);
    }

    public function csvImport()
    {
        $data = $this->input->post();
        // If import request is submitted
        //if($data['csv']){

        // Form field validation rules
        $this->form_validation->set_rules('csv', 'CSV file', 'callback_file_check');

        // Validate submitted form data
        //if($this->form_validation->run() == true){
        $insertCount = $updateCount = $rowCount = $notAddCount = 0;


        // If file uploaded
        if (is_uploaded_file($_FILES['csv']['tmp_name'])) {
            // Load CSV reader library

            $this->load->library('CSVReader');

            // Parse data from CSV file
            $csvData = $this->csvreader->parse_csv($_FILES['csv']['tmp_name']);
            print_r($csvData);
            die();

            // Insert/update CSV data into database
            if (!empty($csvData)) {
                foreach ($csvData as $row) {
                    $rowCount++;

                    // Prepare data for DB insertion
                    $memData = array(
                        'name' => $row['Name'],
                        'email' => $row['Email'],
                        'phone' => $row['Phone'],
                        'status' => $row['Status'],
                    );

                    // Check whether email already exists in the database
                    $con = array(
                        'where' => array(
                            'email' => $row['Email']
                        ),
                        'returnType' => 'count'
                    );
//                            $prevCount = $this->member->getRows($con);
//
//                            if($prevCount > 0){
//                                // Update member data
//                                $condition = array('email' => $row['Email']);
//                                $update = $this->member->update($memData, $condition);
//
//                                if($update){
//                                    $updateCount++;
//                                }
//                            }else{
//                                // Insert member data
//                                $insert = $this->member->insert($memData);
//
//                                if($insert){
//                                    $insertCount++;
//                                }
//                            }
                }

                // Status message with imported data count
                $notAddCount = ($rowCount - ($insertCount + $updateCount));
                $successMsg = 'Members imported successfully. Total Rows (' . $rowCount . ') | Inserted (' . $insertCount . ') | Updated (' . $updateCount . ') | Not Inserted (' . $notAddCount . ')';
                $this->session->set_userdata('success_msg', $successMsg);
            }
        } else {
            $this->session->set_userdata('error_msg', 'Error on file upload, please try again.');
        }
//            }else{
//                $this->session->set_userdata('error_msg', 'Invalid file, please select only CSV file.');
//            }
        //}

    }

    public function favourite()
    {
        $filter = $this->input->post();

        if (!isset($filter["pagination"])) {
            $pagination["page"] = 1;
        } else {
            $pagination = $filter["pagination"];
        }

        if (isset($filter["per_page"]) && !empty($filter["per_page"])) {
            $pagination["perpage"] = $filter["per_page"];
        } else {
            $pagination["perpage"] = 10;
        }

        $limit["start"] = ($pagination["page"] - 1) * $pagination["perpage"];
        $limit["end"] = $pagination["perpage"];
        $filter["query"] = array();
        if (isset($filter["talent"])) {
            $filter["query"]["talent"] = $filter["talent"];
            $data["talent"] = $filter["talent"];
        }
        if (isset($filter["sort"])) {
            $filter["query"]["sort"] = $filter["sort"];
            $data["sort"] = $filter["sort"];
        }
        if (isset($filter["desc"])) {
            $filter["query"]["desc"] = $filter["desc"];
            $data["desc"] = $filter["desc"];
        }
//print_r($filter["query"]);
        $data["talents"] = $this->talent->favourite($filter["query"], $limit);
        if (!isset($filter["query"])) {
            $pagination["total"] = $this->talent->fa_count();
        } else {
            $pagination["total"] = $this->talent->fa_count($filter["query"]);
        }
        if ($pagination["total"] % $pagination["perpage"] == 0) {
            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"]);
        } else {
            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"] + 1);
        }
        $pagination["pages"] = ceil($pagination["total"] / $pagination["perpage"]);
        if (($pagination["page"] % 5) == 0) {
            $pagination["start_page"] = ((int)$pagination["page"] / 5 - 1) * 5 + 1;
        } else {
            $pagination["start_page"] = ((int)($pagination["page"] / 5)) * 5 + 1;
            // $pagination["start_page"] = ($pagination["page"]/5 + 1) * 5;
        }
        $pagination["end_page"] = $pagination["start_page"] + 5;
//print_r($filter["query"]);
        $data["query"] = $filter["query"];

        if (empty($data["query"]["level"]))
            $data["query"]["level"] = array();
        foreach ($data["query"]["level"] as $key => $val) {
            if (!empty($val)) {
                $data["query"]["level"]["label"] = empty($data["query"]["level"]["label"]) ? $this->talent->level[$key - 1] : $data["query"]["level"]["label"] . ", " . $this->talent->level[$key - 1];
            }
        }
        if (empty($data["age_label"]))
            $data["age_label"] = "";
        if (!empty($data["age_from"])) {
            $data['age_label'] .= $data["age_from"] . "歳 ~ ";
        }
        if (!empty($data["age_to"])) {
            if (empty($data["age_label"])) {
                $data['age_label'] .= "~ " . $data["age_to"] . "歳";
            } else {
                $data['age_label'] .= $data["age_to"] . "歳";
            }
        }

        if (empty($data["query"]["gender"]))
            $data["query"]["gender"] = array();
        foreach ($data["query"]["gender"] as $key => $val) {
            if (!empty($val)) {
                $data["query"]["gender"]["label"] = empty($data["query"]["gender"]["label"]) ? $this->talent->gender[$key - 1] : $data["query"]["gender"]["label"] . ", " . $this->talent->gender[$key - 1];
            }
        }
        $data["pagination"] = $pagination;
        $config["base_url"] = base_url() . "public/search";
        $config["total_row"] = $pagination["total"];
        $config["per_page"] = $pagination["perpage"];

        $data["user"] = $this->user_data();
        $data["sticky"] = true;
        $this->render("public/favourite", $data);
    }

    public function contact(){
        $data["user"] = $this->user_data();
        $data["sticky"] = true;
        $this->render("public/contact", $data);
    }

    /*
     * Callback function to check file value and type during validation
     */
    public function file_check($str)
    {
        $allowed_mime_types = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain');
        if (isset($_FILES['file']['name']) && $_FILES['file']['name'] != "") {
            $mime = get_mime_by_extension($_FILES['file']['name']);
            $fileAr = explode('.', $_FILES['file']['name']);
            $ext = end($fileAr);
            if (($ext == 'csv') && in_array($mime, $allowed_mime_types)) {
                return true;
            } else {
                $this->form_validation->set_message('file_check', 'Please select only CSV file to upload.');
                return false;
            }
        } else {
            $this->form_validation->set_message('file_check', 'Please select a CSV file to upload.');
            return false;
        }
    }
}
