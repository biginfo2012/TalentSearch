<?php
	defined('BASEPATH') or die('No direct access script allowed!');

    require_once(APPPATH.'core/BaseModel.php');

	class Talent_model extends BaseModel
	{
		var $table = 'talents';
        var $level = ["S", "A", "B", "C"];
		var $gender = ["男性", "女性", "その他"];
		var $belonging = [ "学生", "会社員", "主婦・家事手伝い", "パート・アルバイト", "自営業", "その他" ];
		var $skills = [ "地上波番組", "雑誌・カタログ", "CM", "ファッションショー", "ドラマ・舞台", "ラジオ・MC", "ミス〇〇","サロンモデル", "撮影会", "ライブ/イベント","ライター", "モニター","エキストラ"];
		var $activity_bases = ["北海道","青森県","岩手県","東京都", "宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県", "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
        var $relationship = ["繋がりなし", "応答なし", "応答あり(お断り)", "応答あり(可能)", "依頼あり"];

		public function where($params) {
			if(isset($params["keyword"]) && !empty($params["keyword"])){
				$this->db->where("context.content LIKE '%".$params["keyword"]."%'");
				unset($params["keyword"]);
			}
			if(isset($params["age_from"]) && !empty($params["age_from"])){
			    $today = date('Y-m-d');
			    list($year, $month, $day) = explode('-', $today);
                $fromDate = date( 'Y-m-d', mktime(0, 0, 0, 1, 1, $year - $params["age_from"]));
				$this->db->where("talents.birthday < '" . $fromDate . "'");
				unset($params['age_from']);
			}
			if(isset($params["age_to"]) && !empty($params["age_to"])){
                $today = date('Y-m-d');
                list($year, $month, $day) = explode('-', $today);
                $toDate = date( 'Y-m-d', mktime(0, 0, 0, 1, 1, $year - $params["age_to"]));
				$this->db->where("talents.birthday > '" . $toDate . "'");
				unset($params['age_to']);
			}	
			if(isset($params["sort"])){
                if($params["sort"] == "follow")
                    $this->db->order_by("talents.it_fw", $params["desc"]);

                if($params["sort"] == "level")
                    $this->db->order_by("talents.level", $params["desc"]);

				if($params["sort"] == "youtube")
					$this->db->order_by("talents.yt_fw", $params["desc"]);

				if($params["sort"] == "instagram")
					$this->db->order_by("talents.it_fw", $params["desc"]);

				if($params["sort"] == "tiktok")
					$this->db->order_by("talents.tt_fw", $params["desc"]);

				if($params["sort"] == "twitter")
					$this->db->order_by("talents.tw_fw", $params["desc"]);


                unset($params["sort"]);
                unset($params["desc"]);
			} else {

            }
            if(isset($params["level"])){
                if(array_sum($params["level"]) > 0)
                    $this->db->group_start();
                foreach($params["level"] as $key => $item){
                    if(empty($item))
                        continue;
                    $this->db->or_where("level",$key);
                }
                if(array_sum($params["level"]) > 0)
                    $this->db->group_end();
                unset($params["level"]);
            }
            if(isset($params["gender"])){
                if(array_sum($params["gender"]) > 0)
                    $this->db->group_start();
                foreach($params["gender"] as $key => $item){
                    if(empty($item))
                        continue;
                    $this->db->or_where("gender",$key);
                }
                if(array_sum($params["gender"]) > 0)
                    $this->db->group_end();
                unset($params["gender"]);
            }
			if(isset($params["active"])){
				$actives = $params["active"];
				if(array_sum($actives) > 0)
				    $this->db->group_start();
				foreach($actives as $key => $item){
                    if(empty($item))
                        continue;
					$this->db->like("activity_base",$this->activity_bases[$key]);
				}
                if(array_sum($actives) > 0)
				    $this->db->group_end();
				unset($params["active"]);
			}
			if(isset($params["belonging"])){
                if(array_sum($params["belonging"]) > 0)
				    $this->db->group_start();
				foreach($params["belonging"] as $key => $item){
                    if(empty($item))
                        continue;
					$this->db->like("belonging",$this->belonging[$key]);
				}
                if(array_sum($params["belonging"]) > 0)
				    $this->db->group_end();
				unset($params["belonging"]);
			}
			if(isset($params["talent"])){
                if(array_sum($params["talent"]) > 0)
				    $this->db->group_start();
				foreach($params["talent"] as $key => $item){
				    if(empty($item))
				        continue;
					$this->db->like("talent",$this->skills[$key]);
				}
                if(array_sum($params["talent"]) > 0)
				    $this->db->group_end();
				unset($params["talent"]);
			}

			return parent::where($params);
		}
		public function search($filter = null, $limit = null){
			$this->db->join("context", "context.id = talents.id");
			if($filter)
				$this->where($filter);
			if(isset($limit)){
				$this->db->limit($limit["end"], $limit["start"]);
			}
			$data = parent::getDataByParam($filter);
//print_r($this->db->last_query());die();
			return $data;
		}

		public function count($filter = null){
			$this->db->join("context", "context.id = talents.id");
			if($filter)
				$this->where($filter);
			return parent::counts($filter);
		}
	}