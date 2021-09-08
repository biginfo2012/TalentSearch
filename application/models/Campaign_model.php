<?php
defined('BASEPATH') or die('No direct access script allowed!');

require_once(APPPATH.'core/BaseModel.php');

class Campaign_model extends BaseModel
{
    var $table = 'campaign';
    public function where($params) {
        if(isset($params["keyword"]) && !empty($params["keyword"])) {
            $this->db->where("campaign.campaign_name LIKE '%" . $params["keyword"] . "%'");
            unset($params["keyword"]);
        }

        return parent::where($params);
    }
    public function campaign($filter = null, $limit = null){
        if($filter)
            $this->where($filter);
        if(isset($limit)){
            $this->db->limit($limit["end"], $limit["start"]);
        }
        $data = parent::getDataByParam($filter);
//print_r($this->db->last_query());die();
        return $data;
    }
    public function camp_count($filter = null){
        if($filter)
            $this->where($filter);
        return parent::counts($filter);
    }
}