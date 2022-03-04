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
            //$data["created_at"] = date("Y-m-d");
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
            $pagination["perpage"] = 10;
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
        $data["comments"] = $this->comment->getDataByParam(array("talent_id" => $id));
        $data['insites'] = $this->insite->getDataByParam(array('talent_id' => $id));
        $data['instagram'] = $this->insite->getDataByParam(['talent_id' => $id, 'type' => 'Instagram']);
        $data['twitter'] = $this->insite->getDataByParam(['talent_id' => $id, 'type' => 'Twitter']);
        $data['youtube'] = $this->insite->getDataByParam(['talent_id' => $id, 'type' => 'Youtube']);
        $data['tiktok'] = $this->insite->getDataByParam(['talent_id' => $id, 'type' => 'TikTok']);
        $data['it_price'] = 0;
        $data['it_reach'] = 0;
        $data['it_cvr'] = 0;
        $data['it_cv'] = 0;
        foreach ($data['instagram'] as $item){
            $data['it_price'] += (int)$item['price'];
            $data['it_reach'] += $item['reach_rate'];
            $data['it_cvr'] += $item['cvr'];
            $data['it_cv'] += $item['cv'];
        }
        if(count($data['instagram']) !== 0){
            $data['it_price'] /= 3;
            $data['it_reach'] /= 3;
            $data['it_cvr'] += 3;
            $data['it_cv'] += 3;
        }
        $data['tw_price'] = 0;
        $data['tw_reach'] = 0;
        $data['tw_cvr'] = 0;
        $data['tw_cv'] = 0;
        foreach ($data['twitter'] as $item){
            $data['tw_price'] += (int)$item['price'];
            $data['tw_reach'] += $item['reach_rate'];
            $data['tw_cvr'] += $item['cvr'];
            $data['tw_cv'] += $item['cv'];
        }
        if(count($data['twitter']) !== 0){
            $data['tw_price'] /= 3;
            $data['tw_reach'] /= 3;
            $data['tw_cvr'] += 3;
            $data['tw_cv'] += 3;
        }
        $data['yt_price'] = 0;
        $data['yt_reach'] = 0;
        $data['yt_cvr'] = 0;
        $data['yt_cv'] = 0;
        foreach ($data['youtube'] as $item){
            $data['yt_price'] += (int)$item['price'];
            $data['yt_reach'] += $item['reach_rate'];
            $data['yt_cvr'] += $item['cvr'];
            $data['yt_cv'] += $item['cv'];
        }
        if(count($data['youtube']) !== 0){
            $data['yt_price'] /= 3;
            $data['yt_reach'] /= 3;
            $data['yt_cvr'] += 3;
            $data['yt_cv'] += 3;
        }
        $data['tt_price'] = 0;
        $data['tt_reach'] = 0;
        $data['tt_cvr'] = 0;
        $data['tt_cv'] = 0;
        foreach ($data['tiktok'] as $item){
            $data['tt_price'] += (int)$item['price'];
            $data['tt_reach'] += $item['reach_rate'];
            $data['tt_cvr'] += $item['cvr'];
            $data['tt_cv'] += $item['cv'];
        }
        if(count($data['tiktok']) !== 0){
            $data['tt_price'] /= 3;
            $data['tt_reach'] /= 3;
            $data['tt_cvr'] += 3;
            $data['tt_cv'] += 3;
        }
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

    public function addcampaign(){
        $p_data = $this->input->post();
        $campaign["campaign_name"] = $p_data['title'];
        $campaign["type"] = $p_data['account_type'];
        $this->campaign->setData($campaign);
        return $this->favourite();
    }
    public function viewcampaign($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["all"] = $this->campaign->getAll();
        $talents = $this->talent->getAll();
        $data['talents_cnt'] = count($talents);

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
        $data["pagination"] = $pagination;
        $this->render("public/viewcampaign", $data);
    }
    public function publicedit($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);

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
        $data["pagination"] = $pagination;
        $this->render("public/viewcampaign", $data);
    }
    public function userlist(){
        $filter = $this->input->post();

        $campaign_id = $filter['campaign_id'];
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $campaign_id));
//        print_r($data["tcampaign"]);
//        die();
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
        if (isset($filter["threesize_from"])) {
            $filter["query"]["threesize_from"] = $filter["threesize_from"];
            $data["threesize_from"] = $filter["query"]["threesize_from"];
        }
        if (isset($filter["threesize_to"])) {
            $filter["query"]["threesize_to"] = $filter["threesize_to"];
            $data["threesize_to"] = $filter["query"]["threesize_to"];
        }
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

//        $keyword_search = $filter['keyword_search'];
//        if($keyword_search === 'keyword'){
//            if (isset($filter['keyword'])) {
//                $filter["query"]["keyword"] = $filter['keyword'];
//            } else {
//                $filter["query"]["keyword"] = "";
//            }
//        }
//        if (!isset($filter["pagination"])) {
//            $pagination["page"] = 1;
//        } else {
//            $pagination = $filter["pagination"];
//        }
//
//        if (isset($filter["per_page"]) && !empty($filter["per_page"])) {
//            $pagination["perpage"] = $filter["per_page"];
//        } else {
//            $pagination["perpage"] = 10;
//        }
//        $limit["start"] = ($pagination["page"] - 1) * $pagination["perpage"];
//        $limit["end"] = $pagination["perpage"];
//        $data["talents"] = $this->talent->search($filter["query"]);
//        foreach ($data["talents"] as $index => $talent) {
//            if(isset($filter['is_pr_only'])){
//                if(!isset($talent['pr_point']) && $talent['pr_point'] !== ""){
//                    unset($data['talents'][$index]);
//                    continue;
//                }
//
//            }
//            if(isset($filter['is_favorite_only'])){
//                $favourite = $this->favourite->getDataByParam(array('talent_id' => $talent['id']));
//                if(count($favourite) === 0){
//                    unset($data['talents'][$index]);
//                    continue;
//                }
//            }
//            if(isset($filter['prefecture_code']) && $filter['prefecture_code'] !== ''){
//                print_r(strpos($talent['province'], $filter['prefecture_code']));
//                if(strpos($talent['province'], $filter['prefecture_code']) !== 0){
//                    unset($data['talents'][$index]);
//                    continue;
//                }
//            }
//            if(isset($filter['search_campaign_id']) && $filter['search_campaign_id'] !== ''){
//                $tcampaign = $this->tcampaign->getDataByParam(array('campaign_id' => $filter['search_campaign_id']));
//                $exist = false;
//                foreach ($tcampaign as $item){
//                    if($talent['id'] === $item['talent_id']){
//                        $exist = true;
//                    }
//                }
//                if(!$exist){
//                    unset($data['talents'][$index]);
//                    continue;
//                }
//            }
//        }
//        if (!isset($filter["query"])) {
//            $pagination["total"] = count($data['talents']);
//        } else {
//            $pagination["total"] = count($data['talents']);
//        }
//        if ($pagination["total"] % $pagination["perpage"] == 0) {
//            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"]);
//        } else {
//            $pagination["total_page"] = (int)($pagination["total"] / $pagination["perpage"] + 1);
//        }
//        $pagination["pages"] = ceil($pagination["total"] / $pagination["perpage"]);
//        if (($pagination["page"] % 5) == 0) {
//            $pagination["start_page"] = ((int)$pagination["page"] / 5 - 1) * 5 + 1;
//        } else {
//            $pagination["start_page"] = ((int)($pagination["page"] / 5)) * 5 + 1;
//            // $pagination["start_page"] = ($pagination["page"]/5 + 1) * 5;
//        }
//
//        $pagination["end_page"] = $pagination["start_page"] + 5;
//        $data["pagination"] = $pagination;
        return $this->load->view('public/userlist', $data);
        //$this->renderAlone("public/userlist", $data);
    }
    public function campaignpreview($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $data["campaign"]["id"]));
        $tcampaign_arr = array();
        //$campaign_info = array();
        $data['cnt_talent'] = count($data["tcampaign"]);
        $data['sum_fw'] = 0;
        $data['sum_yt'] = 0;
        $data['sum_tw'] = 0;
        $data['avg_male_ratio'] = 0;

        if(isset($data["tcampaign"])){
            usort($data["tcampaign"], function($a, $b) {return $a['order'] > $b['order'];});
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                $data['sum_fw'] += $tmp["it_fw"];
                $data['sum_yt'] += $tmp["yt_fw"];
                $data['sum_tw'] += $tmp["tw_fw"];
                $data['avg_male_ratio'] += (int)($tmp["it_male_ratio"]);
                array_push($tcampaign_arr, $tmp);
            }
        }
        if($data['cnt_talent'] !== 0){
            $data['avg_male_ratio'] = (int)($data['avg_male_ratio']/$data['cnt_talent']);
        }
        $data['avg_female_ratio'] = 100 - $data['avg_male_ratio'];
        $data["talents"] = $tcampaign_arr;

        $this->render("public/campaignpreview", $data);
    }
    public function campaignorder($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);
        $this->render("public/campaignorder", $data);
    }
    public function campaignprice($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $data["campaign"]["id"]));
        $tcampaign_arr = array();
        $net_arr = array();
        $gross_arr = array();
        //$campaign_info = array();
        $data['cnt_talent'] = count($data["tcampaign"]);
        $data['sum_fw'] = 0;
        $data['sum_net_price'] = 0;
        $data['sum_gross_price'] = 0;

        if(isset($data["tcampaign"])){
            usort($data["tcampaign"], function($a, $b) {return $a['order'] > $b['order'];});
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                $data['sum_fw'] += $tmp["it_fw"];
                $data['sum_net_price'] += $ttem["net_price"];
                $data['sum_gross_price'] += $ttem["gross_price"];
                array_push($tcampaign_arr, $tmp);
            }
        }

        $data["talents"] = $tcampaign_arr;

        $this->render("public/campaignprice", $data);
    }
    public function changeprice(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['campaign_id'];
        $price_type = $p_data['price_type'];
        $value = $p_data['value'];
        if($price_type === 'net'){
            $data['id'] = $campaign_id;
            $data['net_price'] = $value;
            $this->campaign->updateData($data);
        }
        else{
            $data['id'] = $campaign_id;
            $data['gross_price'] = $value;
            $this->campaign->updateData($data);
        }
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function updateprice(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['campaign_id'];
        $price_type = $p_data['price_type'];
        $talent_id = $p_data['talent_id'];
        $tcampaign = $this->tcampaign->getDatabyParam(['campaign_id' => $campaign_id, 'talent_id' => $talent_id]);
        $id = $tcampaign[0]['id'];
        $value = $p_data['value'];
        if($price_type === 'net'){
            $data['id'] = $id;
            $data['net_price'] = $value;
            $this->tcampaign->updateData($data);
        }
        else{
            $data['id'] = $id;
            $data['gross_price'] = $value;
            $this->tcampaign->updateData($data);
        }
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $campaign_id));
        $data['sum_net_price'] = 0;
        $data['sum_gross_price'] = 0;

        if(isset($data["tcampaign"])){
            foreach ($data["tcampaign"] as $ttem){
                $data['sum_net_price'] += $ttem["net_price"];
                $data['sum_gross_price'] += $ttem["gross_price"];
            }
        }
        $this->json(array("success" => true, "msg" => "成 功!", "net_price" => $data['sum_net_price'], "gross_price" => $data['sum_gross_price']));
    }
    public function campaignsort(){
        $p_data = $this->input->post();
        $id = $p_data['id'];
        $type = $p_data['type'];
        $sort_type = $p_data['sort_type'];
        $data["campaign"] = $this->campaign->getDataById($id);
        $filter["query"] = array();


        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $data["campaign"]["id"]));
        $tcampaign_arr = array();
        //$campaign_info = array();

        if(isset($data["tcampaign"])){
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                array_push($tcampaign_arr, $tmp);
            }
        }
        if($type === 'instagram'){
            if ($sort_type === 'fw_cnt') {
                usort($tcampaign_arr, function($a, $b) {return $a['it_fw'] < $b['it_fw'];});
            }
            if ($sort_type === 'eg_rate') {
                usort($tcampaign_arr, function($a, $b) {return $a['eg_rate'] < $b['eg_rate'];});
            }
        }
        if($type === 'youtube'){
            if ($sort_type === 'fw_cnt') {
                usort($tcampaign_arr, function($a, $b) {return $a['yt_fw'] < $b['yt_fw'];});
            }
        }
        if($type === 'twitter'){
            if ($sort_type === 'fw_cnt') {
                usort($tcampaign_arr, function($a, $b) {return $a['tw_fw'] < $b['tw_fw'];});
            }
            if ($sort_type === 'eg_rate') {
                usort($tcampaign_arr, function($a, $b) {return $a['eg_rate'] < $b['eg_rate'];});
            }
        }

        $data["talents"] = $tcampaign_arr;
        if($type === 'instagram'){
            return $this->load->view('public/campaign_user/instagram', $data);
        }
        if($type === 'youtube'){
            return $this->load->view('public/campaign_user/youtube', $data);
        }
        if($type === 'twitter'){
            return $this->load->view('public/campaign_user/twitter', $data);
        }

    }
    public function talentlist(){
        $p_data = $this->input->post();
        $id = $p_data['campaign_id'];
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $data["campaign"]["id"]));
        $tcampaign_arr = array();
        $comment_arr = array();
        //$campaign_info = array();
        $data['sum_fw'] = 0;
        $data['cnt_talent'] = count($data["tcampaign"]);
        if(isset($data["tcampaign"])){
            usort($data["tcampaign"], function($a, $b) {return $a['order'] > $b['order'];});
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                $data['sum_fw'] += $tmp["it_fw"];
                array_push($tcampaign_arr, $tmp);
                array_push($comment_arr, $ttem['comment']);
            }
        }
        $data['sum_fw'] = number_format($data['sum_fw']);
        $data["comment"] = $comment_arr;
        $data["talents"] = $tcampaign_arr;
        $data["campaign_id"] = $id;
        return $this->load->view('public/talentlist', $data);

    }
    public function talentorderlist(){
        $p_data = $this->input->post();
        $id = $p_data['campaign_id'];
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $data["campaign"]["id"]));
        $tcampaign_arr = array();

        if(isset($data["tcampaign"])){
            usort($data["tcampaign"], function($a, $b) {return $a['order'] > $b['order'];});
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                array_push($tcampaign_arr, $tmp);
            }
        }
        $data["talents"] = $tcampaign_arr;
        return $this->load->view('public/talentorderlist', $data);

    }
    public function addtalentsns(){
        $p_data = $this->input->post();
        $tcampaign['campaign_id'] = $p_data['campaign_id'];
        $sns_type = $p_data['sns_type'];
        $sns_id = $p_data['sns_id'];
        $talents = $this->talent->getAll();
        $talent_id = null;
        foreach ($talents as $item){
            if($sns_type === 'instagram'){
                if(strpos($item->it_url, $sns_id)){
                    $talent_id = $item->id;
                }
            }
            if($sns_type === 'youtube'){
                if(strpos($item->yt_url, $sns_id)){
                    $talent_id = $item->id;
                }
            }
            if($sns_type === 'twitter'){
                if(strpos($item->tw_url, $sns_id)){
                    $talent_id = $item->id;
                }
            }
        }
        if($talent_id === null){
            $this->json(array("success" => false, "msg" => "入力されたのアカウントのユーザーIDはシステムに未登録です!"));
        }
        else{
            $al_data = $this->tcampaign->getDataByParam(["campaign_id" => $p_data['campaign_id'], "talent_id" => $talent_id]);
            if(count($al_data) > 0){
                $this->json(array("success" => false, "msg" => "対象のアカウントは既にリストに追加済です!"));
            }
            else{
                $data = $this->tcampaign->getDataByParam(array("campaign_id" => $p_data['campaign_id']));
                if(isset($data)){
                    usort($data, function($a, $b) {return $a['order'] < $b['order'];});
                    $order = $data[0]['order'] + 1;
                }
                else{
                    $order = 1;
                }
                $tcampaign['talent_id'] = $talent_id;
                $tcampaign['order'] = $order;
                $this->tcampaign->setData($tcampaign);
                $this->json(array("success" => true, "msg" => "成 功!"));
            }

        }
    }
    public function changeorder(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['campaign_id'];
        $talent_id = $p_data['talent_id'];
        $type = $p_data['type'];
        $data = $this->tcampaign->getDataByParam(array("campaign_id" => $campaign_id));
        $tdata = $this->tcampaign->getDataByParam(["campaign_id" => $campaign_id, "talent_id" => $talent_id]);
        $id = $tdata[0]['id'];
        if(isset($data)){

            if($type === 'top'){
                usort($data, function($a, $b) {return $a['order'] > $b['order'];});
                $order = $data[0]['order'] - 1;
//                print_r($order);
//                die();
                $tcampaign['id'] = $id;
                $tcampaign['order'] = $order;
                $this->tcampaign->updateData($tcampaign);
            }
            if($type === 'bottom'){
                usort($data, function($a, $b) {return $a['order'] < $b['order'];});
                $order = $data[0]['order'] + 1;
                $tcampaign['id'] = $id;
                $tcampaign['order'] = $order;
                $this->tcampaign->updateData($tcampaign);
            }
            if($type === 'up'){
                usort($data, function($a, $b) {return $a['order'] > $b['order'];});
                $i = 0;
                foreach ($data as $index => $item){
                    if($item['id'] === $id){
                        $i = $index;
                    }
                }
                if($i !== 0){
                    $tcampaign['id'] = $id;
                    $tcampaign['order'] = $data[$i - 1]['order'];
                    $this->tcampaign->updateData($tcampaign);

                    $tcampaign1['id'] = $data[$i - 1]['id'];
                    $tcampaign1['order'] = $data[$i]['order'];
                    $this->tcampaign->updateData($tcampaign1);
                }


            }
            if($type === 'down'){
                usort($data, function($a, $b) {return $a['order'] < $b['order'];});
                $i = 0;
                foreach ($data as $index => $item){
                    if($item['id'] === $id){
                        $i = $index;
                    }
                }
                if($i !== 0){
                    $tcampaign['id'] = $id;
                    $tcampaign['order'] = $data[$i - 1]['order'];
                    $this->tcampaign->updateData($tcampaign);

                    $tcampaign1['id'] = $data[$i - 1]['id'];
                    $tcampaign1['order'] = $data[$i]['order'];
                    $this->tcampaign->updateData($tcampaign1);
                }
            }
        }

        $this->json(array("success" => true, "msg" => "成 功!"));


    }
    public function addtalentcomment(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['campaign_id'];
        $talent_id = $p_data['talent_id'];
        $comment = $p_data['comment'];
        $tcampaign = $this->tcampaign->getDatabyParam(['campaign_id' => $campaign_id, 'talent_id' => $talent_id]);
        $id = $tcampaign[0]['id'];
        $data['id'] = $id;
        $data['comment'] = $comment;
        $this->tcampaign->updateData($data);
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function publicviewcampaign(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['id'];
        $campaign['id'] = $campaign_id;
        $campaign['public_view_date'] = date("Y-m-d", strtotime("+1 months"));
        $this->campaign->updateData($campaign);
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function publiceditcampaign(){
        $p_data = $this->input->post();
        $campaign_id = $p_data['id'];
        $campaign['id'] = $campaign_id;
        $campaign['public_edit_date'] = date("Y-m-d", strtotime("+1 months"));
        $this->campaign->updateData($campaign);
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function publicview($id){
        $data["user"] = $this->user_data();
        $data["campaign"] = $this->campaign->getDataById($id);
        $data["tcampaign"] = $this->tcampaign->getDataByParam(array("campaign_id" => $id));
        $tcampaign_arr = array();
        //$campaign_info = array();
        $data['cnt_talent'] = count($data["tcampaign"]);
        $data['sum_fw'] = 0;
        $data['sum_yt'] = 0;
        $data['sum_tw'] = 0;
        $data['avg_male_ratio'] = 0;

        if(isset($data["tcampaign"])){
            usort($data["tcampaign"], function($a, $b) {return $a['order'] > $b['order'];});
            foreach ($data["tcampaign"] as $ttem){
                $tmp = $this->talent->getDataById($ttem["talent_id"]);
                $data['sum_fw'] += $tmp["it_fw"];
                $data['sum_yt'] += $tmp["yt_fw"];
                $data['sum_tw'] += $tmp["tw_fw"];
                $data['avg_male_ratio'] += (int)($tmp["it_male_ratio"]);
                array_push($tcampaign_arr, $tmp);
            }
        }
        if($data['cnt_talent'] !== 0){
            $data['avg_male_ratio'] = (int)($data['avg_male_ratio']/$data['cnt_talent']);
        }
        $data['avg_female_ratio'] = 100 - $data['avg_male_ratio'];
        $data["talents"] = $tcampaign_arr;

        $this->render("public/campaignpreview", $data);
    }
    public function modifycampaign(){
        $data["user"] = $this->user_data();
        $p_data = $this->input->post();
        $campaign['id'] = $p_data['campaign_id'];
        $campaign['campaign_name'] = $p_data['campaign_name'];
        $campaign['campaign_company'] = $p_data['campaign_company'];
        $campaign['campaign_belong'] = $p_data['campaign_belong'];
        $campaign['campaign_comment'] = $p_data['campaign_comment'];
        $this->campaign->updateData($campaign);

        $this->json(array("success" => true, "msg" => "成 功!"));
    }

    public function addtalent(){
        $p_data = $this->input->post();
        $tcampaign['talent_id'] = $p_data['talent_id'];
        $tcampaign['campaign_id'] = $p_data['campaign_id'];
        $data = $this->tcampaign->getDataByParam(array("campaign_id" => $p_data['campaign_id']));
        if(isset($data)){
            usort($data, function($a, $b) {return $a['order'] < $b['order'];});
            $order = $data[0]['order'] + 1;
        }
        else{
            $order = 1;
        }
        $tcampaign['order'] = $order;
        $this->tcampaign->setData($tcampaign);
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function addalltalent(){
        $p_data = $this->input->post();
        $tcampaign['campaign_id'] = $p_data['campaign_id'];
        $this->tcampaign->deleteByParam(array("campaign_id" => $p_data['campaign_id']));
        $talents = $this->talent->search();
        foreach ($talents as $index => $item){
            $tcampaign = array();
            $tcampaign['campaign_id'] = $p_data['campaign_id'];
            $tcampaign['talent_id'] = $item['id'];
            $tcampaign['order'] = $index + 1;
            $this->tcampaign->setData($tcampaign);
        }
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function delalltalent(){
        $p_data = $this->input->post();
        $tcampaign['campaign_id'] = $p_data['campaign_id'];
        $this->tcampaign->deleteByParam(array("campaign_id" => $p_data['campaign_id']));
        $this->json(array("success" => true, "msg" => "成 功!"));
    }
    public function deltalent(){
        $p_data = $this->input->post();
        $data = $this->tcampaign->getOneByParam(["talent_id" => $p_data['talent_id'], "campaign_id" => $p_data['campaign_id']]);
        $this->tcampaign->unsetDataById($data['id']);
        $this->json(array("success" => true, "msg" => "成 功!"));
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
    public function deletecampaign()
    {
        $p_data = $this->input->post();
        $id = $p_data['id'];
        $data = $this->campaign->getOneByParam(array("id" => $id));
        $this->tcampaign->deleteByParam(array("campaign_id" => $id));
        $this->campaign->unsetDataById($data['id']);
        $this->json(array("success" => true, "msg" => "成 功!"));
        //$this->load->view("public/view", $data);
    }
    public function copycampaign()
    {
        $p_data = $this->input->post();
        $id = $p_data['id'];
        $data = $this->campaign->getOneByParam(array("id" => $id));
        $campaign["campaign_name"] = $data['campaign_name'];
        $campaign["type"] = $data['type'];
        $campaign["campaign_company"] = $data['campaign_company'];
        $campaign["campaign_belong"] = $data['campaign_belong'];
        $campaign["campaign_comment"] = $data['campaign_comment'];
        $t_data = $this->tcampaign->getDataByParam(array("campaign_id" => $id));

        $campaign_id = $this->campaign->setData($campaign);
        foreach ($t_data as $item){
            $tcampaign["talent_id"] = $item["talent_id"];
            $tcampaign["order"] = $item["order"];
            $tcampaign["campaign_id"] = $campaign_id;
            $this->tcampaign->setData($tcampaign);
        }
        $this->json(array("success" => true, "msg" => "成 功!"));
        //$this->load->view("public/view", $data);
    }

    public function commentpost(){
        $p_data = $this->input->post();
        $comment["talent_id"] = $p_data["talent_id"];
        $comment["comment"] = $p_data["comment"];
        $comment["created_at"] = date("Y-m-d H:i:s");
        $this->comment->setData($comment);
        $this->json(array("success" => true, "msg" => "成 功!"));
    }

    public function csvImport()
    {
        $data = $this->input->post();
        // If import request is submitted
        //if($data['csv']){
        $id = $data['id'];

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
//            print_r($csvData);
//            die();

            // Insert/update CSV data into database
            if (!empty($csvData)) {
                $temp = "";
                foreach ($csvData as $row) {
//                    print_r($row);
//                    die();
//                    $rowCount++;
                    //$talents["level"] = $row[' '];
                    $temp = $temp . " " . $row["ID"];
                    $temp = $temp . " " . $row["プロフィール表示名"];
                    $temp = $temp . " " . $row["フォロワー数"];
                    $temp = $temp . " " . $row["InstagramプロフィールURL"];
                    $temp = $temp . " " . $row["依頼金額"];
                    $temp = $temp . " " . $row["注意"];
                    $temp = $temp . " " . $row["IGfw男性比率"];
                    $temp = $temp . " " . $row["IGfw女性比率"];
                    $temp = $temp . " " . $row["年齢"];
                    $temp = $temp . " " . $row["活動拠点"];
                    $temp = $temp . " " . $row["ご職業"];
                    $temp = $temp . " " . $row["投稿ジャンル（複数選択可）"];
                    $temp = $temp . " " . $row["契約書"];
                    $talents["user_id"] = $row["ID"];
                    $talents["profile_name"] = $row["プロフィール表示名"];
                    $talents["it_fw"] = $row["フォロワー数"];
                    $talents["it_url"] = $row["InstagramプロフィールURL"];
                    $talents["amount"] = $row["依頼金額"];
                    $talents["note"] = $row["注意"];
                    $talents["it_male_ratio"] = $row["IGfw男性比率"];
                    $talents["it_female_ratio"] = $row["IGfw女性比率"];
                    $talents["age"] = $row["年齢"];
                    $talents["activity_base"] = $row["活動拠点"];
                    $talents["occupation"] = $row["ご職業"];
                    $talents["genre"] = $row["投稿ジャンル（複数選択可）"];
                    $talents["contract"] = $row["契約書"];
                    $talents["acq_record"] = $row["獲得実績"];
                    $temp = $temp . " " . $row["獲得実績"];
                    $talents["pr_point"] = $row["PRポイント"];
                    $temp = $temp . " " . $row["PRポイント"];
                    if($row["性別"] === "女性"){
                        $talents["gender"] = 2;
                    }
                    else{
                        $talents["gender"] = 1;
                    }
                    $temp = $temp . " " . $row["性別"];
                    $talents["eg_rate"] = $row["平均EG率(%)"];
                    $temp = $temp . " " . $row["平均EG率(%)"];
                    $talents["app_post"] = $row["投稿での顔出し"];
                    $temp = $temp . " " . $row["投稿での顔出し"];
                    $talents["charge_name"] = $row["担当者名"];
                    $temp = $temp . " " . $row["担当者名"];
                    $talents["belonging"] = $row["所属"];
                    $temp = $temp . " " . $row["所属"];
                    $talents["post_result"] = $row["投稿実績"];
                    $temp = $temp . " " . $row["投稿実績"];
                    $talents["tw_fw"] = $row["twitterフォロワー"];
                    $temp = $temp . " " . $row["twitterフォロワー"];
                    $talents["tw_url"] = $row["Twitterアカウント URL"];
                    $temp = $temp . " " . $row["Twitterアカウント URL"];
                    $talents["fb_fw"] = $row["FBfw"];
                    $temp = $temp . " " . $row["FBfw"];
                    $talents["fb_url"] = $row["Facebookアカウント URL"];
                    $temp = $temp . " " . $row["Facebookアカウント URL"];
                    $talents["yt_fw"] = $row["youtube登録者数"];
                    $temp = $temp . " " . $row["youtube登録者数"];
                    $talents["yt_url"] = $row["YouTubeチャンネル URL"];
                    $temp = $temp . " " . $row["YouTubeチャンネル URL"];
                    $talents["yt_female_ratio"] = $row["女性比率"];
                    $temp = $temp . " " . $row["女性比率"];
                    $talents["yt_male_ratio"] = $row["男性比率"];
                    $temp = $temp . " " . $row["男性比率"];
                    $talents["age_13"] = $row["13歳〜17歳"];
                    $temp = $temp . " " . $row["13歳〜17歳"];
                    $talents["age_18"] = $row["18歳〜24歳"];
                    $temp = $temp . " " . $row["18歳〜24歳"];
                    $talents["age_25"] = $row["25歳〜34歳"];
                    $temp = $temp . " " . $row["25歳〜34歳"];
                    $talents["age_35"] = $row["35歳〜44歳"];
                    $temp = $temp . " " . $row["35歳〜44歳"];
                    $talents["age_45"] = $row["45歳〜54歳"];
                    $temp = $temp . " " . $row["45歳〜54歳"];
                    $talents["age_55"] = $row["55歳〜64歳"];
                    $temp = $temp . " " . $row["55歳〜64歳"];
                    $talents["age_65"] = $row["65歳以上"];
                    $temp = $temp . " " . $row["65歳以上"];
                    $talents["tt_fw"] = $row["TikTokfw数"];
                    $temp = $temp . " " . $row["TikTokfw数"];
                    $talents["tt_url"] = $row["TikTokアカウント URL"];
                    $temp = $temp . " " . $row["TikTokアカウント URL"];
                    $talents["blog_fw"] = $row["Blogfw数"];
                    $temp = $temp . " " . $row["Blogfw数"];
                    $talents["blog_url"] = $row["ブログ URL"];
                    $temp = $temp . " " . $row["ブログ URL"];
                    $talents["wear_fw"] = $row["wearfw数"];
                    $temp = $temp . " " . $row["wearfw数"];
                    $talents["wear_url"] = $row["wearURL"];
                    $temp = $temp . " " . $row["wearURL"];
                    $talents["sns_url"] = $row["その他のSNS URL"];
                    $temp = $temp . " " . $row["その他のSNS URL"];
                    $talents["tel_number"] = $row["電話番号"];
                    $temp = $temp . " " . $row["電話番号"];
                    $talents["zip_code"] = $row["郵便番号"];
                    $temp = $temp . " " . $row["郵便番号"];
                    $talents["province"] = $row["都道府県"];
                    $temp = $temp . " " . $row["都道府県"];
                    $talents["district_num"] = $row["市区町村・番地"];
                    $temp = $temp . " " . $row["市区町村・番地"];
                    $talents["building_name"] = $row["マンション・ビル名"];
                    $temp = $temp . " " . $row["マンション・ビル名"];
                    $talents["post"] = $row["宛名"];
                    $temp = $temp . " " . $row["宛名"];
                    $talents["bank_name"] = $row["銀行名"];
                    $temp = $temp . " " . $row["銀行名"];
                    $talents["branch_name"] = $row["支店名"];
                    $temp = $temp . " " . $row["支店名"];
                    $talents["account_type"] = $row["口座種別"];
                    $temp = $temp . " " . $row["口座種別"];
                    $talents["account_number"] = $row["口座番号"];
                    $temp = $temp . " " . $row["口座番号"];
                    $talents["account_kana"] = $row["口座名義(カタカナまたは英数字) "];
                    $temp = $temp . " " . $row["口座名義(カタカナまたは英数字) "];
                    $talents["name"] = $row["お名前"];
                    $temp = $temp . " " . $row["お名前"];
                    $talents["birthday"] = $row["生年月日"];
                    $temp = $temp . " " . $row["生年月日"];
                    $talents["email"] = $row["メールアドレス"];
                    $temp = $temp . " " . $row["メールアドレス"];
                    $talents["line_id"] = $row["LINE ID"];
                    $temp = $temp . " " . $row["LINE ID"];
                    $talents["timestampp"] = $row["タイムスタンプ"];
                    $temp = $temp . " " . $row["タイムスタンプ"];

                    $talents["level"] = $row["ランク"];
                    $temp = $temp . " " . $row["ランク"];
                    $talents["threesize"] = $row["スリーサイズ"];
                    $temp = $temp . " " . $row["スリーサイズ"];

                    $talents["height"] = $row["身長"];
                    $temp = $temp . " " . $row["身長"];
                    $talents["shoe_size"] = $row["靴のサイズ"];
                    $temp = $temp . " " . $row["靴のサイズ"];
                    $talents["married"] = $row["未婚既婚"];
                    $temp = $temp . " " . $row["未婚既婚"];
                    $talents["intro"] = $row["自己紹介"];
                    $temp = $temp . " " . $row["自己紹介"];
                    $talents["performance_result"] = $row["出演実績"];
                    $temp = $temp . " " . $row["出演実績"];
                    $talents["timestampp"] = $row["タイムスタンプ"];
                    $temp = $temp . " " . $row["タイムスタンプ"];
                    $talent_id = $this->talent->setData($talents);
                    $context['id'] = $talent_id;
                    $context['content'] = $temp;
                    $this->context->setData($context);

                }
            }
        } else {
            //$this->session->set_userdata('error_msg', 'Error on file upload, please try again.');
        }
//            }else{
//                $this->session->set_userdata('error_msg', 'Invalid file, please select only CSV file.');
//            }
        //}
        return redirect('talents/view/' . $id);
        //$this->json(array("success" => true, "msg" => "成 功!"));
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
        if (isset($filter["search_keyword"])) {
            $filter["query"]["keyword"] = $filter["search_keyword"];
            $data["keyword"] = $filter["search_keyword"];
        }

        $data["campaign"] = $this->campaign->campaign($filter["query"], $limit);
        $data["tcampaign"] = array();
        $data["campaign_info"] = array();
        foreach ($data["campaign"] as $item){
            $tcampaign = $this->tcampaign->getDataByParam(array("campaign_id" => $item["id"]));
            $tcampaign_arr = array();
            $campaign_info = array();
            $campaign_info['cnt_talent'] = count($tcampaign);
            $campaign_info['sum_fw'] = 0;

            if(isset($tcampaign)){
                usort($tcampaign, function($a, $b) {return $a['order'] > $b['order'];});
                foreach ($tcampaign as $ttem){
                    $tmp = $this->talent->getDataById($ttem["talent_id"]);
                    $campaign_info['sum_fw'] += $tmp["it_fw"];
                    array_push($tcampaign_arr, $tmp);
                }
            }
            $data["tcampaign"][$item["id"]] = $tcampaign_arr;
            $data["campaign_info"][$item["id"]] = $campaign_info;
        }

        if (!isset($filter["query"])) {
            $pagination["total"] = $this->campaign->camp_count();
        } else {
            $pagination["total"] = $this->campaign->camp_count($filter["query"]);
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
//        print_r($data["campaign_info"]);
//        die();
        $data["pagination"] = $pagination;
        $config["base_url"] = base_url() . "public/search";
        $config["total_row"] = $pagination["total"];
        $config["per_page"] = $pagination["perpage"];

        $data["user"] = $this->user_data();

        $this->render("public/favourite", $data);
    }

    public function contact(){
        $data["user"] = $this->user_data();
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

    public function copy(){
        $data = $this->input->post();
        $talent_id = $data["talent_id"];
        $tData = $this->talent->getDataById($talent_id);
        $file_name = 'student_details_on_'.date('Ymd').'.csv';
        header("Content-Description: File Transfer");
        header("Content-Disposition: attachment; filename=$file_name");
        header("Content-Type: application/csv;");

        // get data

        // file creation
        $file = fopen('php://output', 'w');

        $header = array("お名前","メールアドレス", "性別", "宛名", "電話番号", "口座名義", "郵便番号", "生年月日", "口座種別", "都道府県", "市区町村・番地", "マンション・ビル名", "フォロワー数",
                        "InstagramプロフィールURL", "依頼金額", "担当者名", "口座番号", "IGfw男性比率", "IGfw女性比率", "LINE ID", "ご職業", "投稿ジャンル", "活動拠点", "PRポイント", "プロフィール表示名",
                        "平均EG率(%)", "投稿での顔出し", "所属", "投稿実績", "twitterフォロワー", "Twitterアカウント URL", "FBfw", "Facebookアカウント URL", "youtube登録者数", "YouTubeチャンネル URL",
                        "女性比率", "男性比率", "獲得実績", "TikTokfw数", "TikTokアカウント URL", "ブログ URL", "Blogfw数", "wearfw数", "wearURL", "Weibofw数", "WeChatfw数", "REDfw数",
                        "抖音fw数", "関係値", "スリーサイズ", "その他のSNS", "銀行名", "支店名", "注意");
        fputcsv($file, $header);
        $vData = array();
        if(isset($data["name"]) && $data["name"] === 'on'){
            $vData["お名前"] = $tData['name'];
        }
        if(isset($data["email"]) && $data["email"] === 'on'){
            $vData["メールアドレス"] = $tData['email'];
        }
        if(isset($data["gender"]) && $data["gender"] === 'on'){
            if($tData['gender'] === 1){
                $vData["性別"] = "男性";
            }
            else{
                $vData["性別"] = "女性";
            }
        }
        if(isset($data["post"]) && $data["post"] === 'on'){
            $vData["宛名"] = $tData['post'];
        }
        if(isset($data["tel_number"]) && $data["tel_number"] === 'on'){
            $vData["電話番号"] = $tData['tel_number'];
        }
        if(isset($data["account_kana"]) && $data["account_kana"] === 'on'){
            $vData["口座名義"] = $tData['account_kana'];
        }
        if(isset($data["zip_code"]) && $data["zip_code"] === 'on'){
            $vData["郵便番号"] = $tData['zip_code'];
        }
        if(isset($data["birthday"]) && $data["birthday"] === 'on'){
            $vData["生年月日"] = $tData['birthday'];
        }
        if(isset($data["account_type"]) && $data["account_type"] === 'on'){
            $vData["口座種別"] = $tData['account_type'];
        }
        if(isset($data["province"]) && $data["province"] === 'on'){
            $vData["都道府県"] = $tData['province'];
        }
        if(isset($data["district_num"]) && $data["district_num"] === 'on'){
            $vData["市区町村・番地"] = $tData['district_num'];
        }
        if(isset($data["building_name"]) && $data["building_name"] === 'on'){
            $vData["マンション・ビル名"] = $tData['building_name'];
        }
        if(isset($data["it_fw"]) && $data["it_fw"] === 'on'){
            $vData["フォロワー数"] = $tData['it_fw'];
        }
        if(isset($data["it_url"]) && $data["it_url"] === 'on'){
            $vData["InstagramプロフィールURL"] = $tData['it_url'];
        }
        if(isset($data["amount"]) && $data["amount"] === 'on'){
            $vData["依頼金額"] = $tData['amount'];
        }
        if(isset($data["charge_name"]) && $data["charge_name"] === 'on'){
            $vData["担当者名"] = $tData['charge_name'];
        }
        if(isset($data["account_number"]) && $data["account_number"] === 'on'){
            $vData["口座番号"] = $tData['account_number'];
        }
        if(isset($data["it_male_ratio"]) && $data["it_male_ratio"] === 'on'){
            $vData["IGfw男性比率"] = $tData['it_male_ratio'];
        }
        if(isset($data["it_female_ratio"]) && $data["it_female_ratio"] === 'on'){
            $vData["IGfw女性比率"] = $tData['it_female_ratio'];
        }
        if(isset($data["age"]) && $data["age"] === 'on'){
            $vData["年齢"] = $tData['age'];
        }
        if(isset($data["line_id"]) && $data["line_id"] === 'on'){
            $vData["LINE ID"] = $tData['line_id'];
        }
        if(isset($data["occupation"]) && $data["occupation"] === 'on'){
            $vData["ご職業"] = $tData['occupation'];
        }
        if(isset($data["genre"]) && $data["genre"] === 'on'){
            $vData["投稿ジャンル"] = $tData['genre'];
        }
        if(isset($data["activity_base"]) && $data["activity_base"] === 'on'){
            $vData["活動拠点"] = $tData['activity_base'];
        }
        if(isset($data["pr_point"]) && $data["pr_point"] === 'on'){
            $vData["PRポイント"] = $tData['pr_point'];
        }
        if(isset($data["profile_name"]) && $data["profile_name"] === 'on'){
            $vData["プロフィール表示名"] = $tData['profile_name'];
        }
        if(isset($data["eg_rate"]) && $data["eg_rate"] === 'on'){
            $vData["平均EG率(%)"] = $tData['eg_rate'];
        }
        if(isset($data["app_post"]) && $data["app_post"] === 'on'){
            $vData["投稿での顔出し"] = $tData['app_post'];
        }
        if(isset($data["belonging"]) && $data["belonging"] === 'on'){
            $vData["所属"] = $tData['belonging'];
        }
        if(isset($data["post_result"]) && $data["post_result"] === 'on'){
            $vData["投稿実績"] = $tData['post_result'];
        }
        if(isset($data["tw_fw"]) && $data["tw_fw"] === 'on'){
            $vData["twitterフォロワー"] = $tData['tw_fw'];
        }
        if(isset($data["tw_url"]) && $data["tw_url"] === 'on'){
            $vData["Twitterアカウント URL"] = $tData['tw_url'];
        }
        if(isset($data["fb_fw"]) && $data["fb_fw"] === 'on'){
            $vData["FBfw"] = $tData['fb_fw'];
        }
        if(isset($data["fb_url"]) && $data["fb_url"] === 'on'){
            $vData["Facebookアカウント URL"] = $tData['fb_url'];
        }
        if(isset($data["yt_fw"]) && $data["yt_fw"] === 'on'){
            $vData["youtube登録者数"] = $tData['yt_fw'];
        }
        if(isset($data["yt_url"]) && $data["yt_url"] === 'on'){
            $vData["YouTubeチャンネル URL"] = $tData['yt_url'];
        }
        if(isset($data["yt_female_ratio"]) && $data["yt_female_ratio"] === 'on'){
            $vData["女性比率"] = $tData['yt_female_ratio'];
        }
        if(isset($data["yt_male_ratio"]) && $data["yt_male_ratio"] === 'on'){
            $vData["男性比率"] = $tData['yt_male_ratio'];
        }
        if(isset($data["acq_record"]) && $data["acq_record"] === 'on'){
            $vData["獲得実績"] = $tData['acq_record'];
        }
        if(isset($data["tt_fw"]) && $data["tt_fw"] === 'on'){
            $vData["TikTokfw数"] = $tData['tt_fw'];
        }
        if(isset($data["tt_url"]) && $data["tt_url"] === 'on'){
            $vData["TikTokアカウント URL"] = $tData['tt_url'];
        }
        if(isset($data["blog_url"]) && $data["blog_url"] === 'on'){
            $vData["ブログ URL"] = $tData['blog_url'];
        }
        if(isset($data["blog_fw"]) && $data["blog_fw"] === 'on'){
            $vData["Blogfw数"] = $tData['blog_fw'];
        }
        if(isset($data["wear_fw"]) && $data["wear_fw"] === 'on'){
            $vData["wearfw数"] = $tData['wear_fw'];
        }
        if(isset($data["wear_url"]) && $data["wear_url"] === 'on'){
            $vData["wearURL"] = $tData['wear_url'];
        }
        if(isset($data["weibo_fw"]) && $data["weibo_fw"] === 'on'){
            $vData["Weibofw数"] = $tData['weibo_fw'];
        }
        if(isset($data["wechat_fw"]) && $data["wechat_fw"] === 'on'){
            $vData["WeChatfw数"] = $tData['wechat_fw'];
        }
        if(isset($data["red_fw"]) && $data["red_fw"] === 'on'){
            $vData["REDfw数"] = $tData['red_fw'];
        }
        if(isset($data["keyin_fw"]) && $data["keyin_fw"] === 'on'){
            $vData["抖音fw数"] = $tData['keyin_fw'];
        }
        if(isset($data["relationship"]) && $data["relationship"] === 'on'){
            $vData["関係値"] = $tData['relationship'];
        }
        if(isset($data["threesize"]) && $data["threesize"] === 'on'){
            $vData["スリーサイズ"] = $tData['threesize'];
        }
        if(isset($data["sns_url"]) && $data["sns_url"] === 'on'){
            $vData["その他のSNS"] = $tData['sns_url'];
        }
        if(isset($data["bank_name"]) && $data["bank_name"] === 'on'){
            $vData["銀行名"] = $tData['bank_name'];
        }
        if(isset($data["branch_name"]) && $data["branch_name"] === 'on'){
            $vData["支店名"] = $tData['branch_name'];
        }
        if(isset($data["note"]) && $data["note"] === 'on'){
            $vData["注意"] = $tData['note'];
        }


        fputcsv($file, $vData);
//        print_r($vData);
//        die();
//        foreach ($student_data->result_array() as $key => $value)
//        {
//            fputcsv($file, $value);
//        }
        fclose($file);
        exit;



    }

    public function sendcontact(){
        $p_data = $this->input->post();
        $config = Array(
            'protocol' => 'ssmtp',
            'smtp_host' => 'ssl://ssmtp.gmail.com',
            'smtp_port' => 465,
            'smtp_user' => 'info@hermandot.co.jp',
            'smtp_pass' => 'wlhtuftxwxdbakqx',
            'mailtype'  => 'html',
            'charset'   => 'utf-8'
        );
        $htmlcontent = '<p>' . $p_data['charger'] . '様<br><br>'

        . 'この度は弊社サイトにお問い合わせをいただきまして、誠にありがとうございます。<br>
下記の内容で承りましたので、後日担当者よりご連絡いたします。<br><br><br>


■お問い合わせ内容-----------------------------------<br><br>

【 会社名 】' . $p_data['company_name'] . '<br>
【 ご担当者名 】' . $p_data['charger'] . '<br>
【 電話番号 】' . $p_data['tel'] . '<br>
【 メールアドレス 】' . $p_data['email'] . '<br>
【 会社URL 】' . $p_data['url'] . '<br>

【 お問い合わせ内容 】' . $p_data['content'] . '<br><br>

-------------------------------------------------<br><br><br>


https://smartaicasting.jp<br><br>

※本メールは自動送信しております。<br>
※何かご不明な点がございましたら、遠慮なくお問い合せを頂きますようお願い致します。<br>
※万が一7営業日以上経っても連絡がない場合は、再度お問合せをお願い致します。</p>
';
        $this->load->library('email');
        //$this->load->library('email', $config);
        $this->email->initialize($config);
        $this->email->set_mailtype("html");
        $this->email->to($p_data['email']);
        $this->email->from('info@hermandot.co.jp', 'SMART AI CASTING');
        $this->email->subject('お問い合わせ');
        $this->email->message($htmlcontent);
        $this->email->set_newline("\r\n");

// Set to, from, message, etc.

        $result = $this->email->send();

        $htmlcontent2 = '<p>SMART AI CASTING WEBサイトより、<br>
お問い合わせを受け付けました。<br><br><br>


■お問い合わせ内容-----------------------------------<br><br>

【 会社名 】' . $p_data['company_name'] . '<br>
【 ご担当者名 】' . $p_data['charger'] . '<br>
【 電話番号 】' . $p_data['tel'] . '<br>
【 メールアドレス 】' . $p_data['email'] . '<br>
【 会社URL 】' . $p_data['url'] . '<br>

【 お問い合わせ内容 】' . $p_data['content'] . '<br><br>

-------------------------------------------------お問い合わせ内容▲<br><br><br>


送信日時：' . date('Y/m/d H:i:s') . '<br><br>

ホスト名：g70.222-224-229.ppp.wakwak.ne.jp</p>
';
        $this->email->to('info@hermandot.co.jp');
        $this->email->from('info@hermandot.co.jp', 'SMART AI CASTING');
        $this->email->subject('お問い合わせ');
        $this->email->message($htmlcontent2);
        $this->email->set_newline("\r\n");

        $result2 = $this->email->send();

        if($result === true && $result2 === true){
            $this->json(array("success" => true, "msg" => "成 功!"));
        }
        else if($result2 === true){

        }
        else{
            $this->json(array("error" => true, "msg" => "成 功!"));
        }
    }
}
