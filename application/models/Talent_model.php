<?php
	defined('BASEPATH') or die('No direct access script allowed!');

    require_once(APPPATH.'core/BaseModel.php');

	class Talent_model extends BaseModel
	{
		var $table = 'talents';
        var $level = ["S", "A", "B", "C"];
		var $gender = ["男性", "女性", "その他"];
		//var $belonging = [ "学生", "会社員", "主婦・家事手伝い", "パート・アルバイト", "自営業", "その他" ];
		var $skills = [ "地上波番組", "雑誌・カタログ", "CM", "ファッションショー", "ドラマ・舞台", "ラジオ・MC", "ミス〇〇","サロンモデル", "撮影会", "ライブ/イベント","ライター", "モニター","エキストラ"];
		var $activity_bases = ["北海道","青森県","岩手県","東京", "宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県", "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
        var $relationship = ["繋がりなし", "応答なし", "応答あり(お断り)", "応答あり(可能)", "依頼あり"];
        var $charge_name = ["久留島", "齋藤", "永井", "浜辺", "小池", "星原", "柿沼", "その他"];
        var $belonging = ["モデル", "俳優女優", "グラビア", "タレント", "アイドル", "歌手", "インフルエンサー", "Youtuber", "レースクイーン","ママ","学生","会社員", "フリーター","経営者","フリーランス","ライター","クリエイター","アーティスト","ピアニスト","バイオリニスト","芸人","料理研究家","看護師","キャバ嬢","ブロガー","医者","歯科医師","歯科衛生士","薬剤師", "整体師","DJ","パーソナルトレーナー漫画家","デザイナー","秘書","管理栄養士","美容部員","ヨガインストラクター","イラストレーター","絵描き","ショップ店員","カメラマン","アナウンサー","ダンサー","ネイリスト","アイリスト","美容師","整理収納アドバイザー","パーソナルスタイリスト","通訳","大工","スイーツコンシェルジュ","カフェ店員","体操選手","プロバレエ選手","サッカー選手","野球選手", "プロサーファー", "プロゴルファー", "プロバスケット選手", "プロバレーボール選手"];
        var $genre = ["ファッション", "グルメ", "料理", "お弁当", "スイーツ", "カフェ", "メイク", "コスメ", "美容","ネイル","ヘアアレンジ","旅行", "海外","語学","ファミリー","子ども","フィットネス","ダイエット","トレーニング","スポーツ","ヨガ","アウトドア","キャンプ","キャバ嬢","インテリア","ガーデニング","暮らし","音楽","ダンス", "カップル","夫婦","デザイン","イラスト","海","風景","建築物","車","バイク","ガジェット","ゲーム","ノウハウ","グラビア","セルフィー","ペット（犬）","ペット（猫）","ペット（その他）"];

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

            if(isset($params["blog_fw_from"]) && !empty($params["blog_fw_from"])){
                $this->db->where("talents.blog_fw > '" . $params["blog_fw_from"] . "'");
                unset($params['blog_fw_from']);
            }
            if(isset($params["blog_fw_to"]) && !empty($params["blog_fw_to"])){
                $this->db->where("talents.blog_fw < '" . $params["blog_fw_to"] . "'");
                unset($params['blog_fw_to']);
            }
            if(isset($params["wear_fw_from"]) && !empty($params["wear_fw_from"])){
                $this->db->where("talents.wear_fw > '" . $params["wear_fw_from"] . "'");
                unset($params['wear_fw_from']);
            }
            if(isset($params["wear_fw_to"]) && !empty($params["wear_fw_to"])){
                $this->db->where("talents.wear_fw < '" . $params["wear_fw_to"] . "'");
                unset($params['wear_fw_to']);
            }
            if(isset($params["weibo_fw_from"]) && !empty($params["weibo_fw_from"])){
                $this->db->where("talents.weibo_fw > '" . $params["weibo_fw_from"] . "'");
                unset($params['weibo_fw_from']);
            }
            if(isset($params["weibo_fw_to"]) && !empty($params["weibo_fw_to"])){
                $this->db->where("talents.weibo_fw < '" . $params["weibo_fw_to"] . "'");
                unset($params['weibo_fw_to']);
            }
            if(isset($params["wechat_fw_from"]) && !empty($params["wechat_fw_from"])){
                $this->db->where("talents.wechat_fw > '" . $params["wechat_fw_from"] . "'");
                unset($params['wechat_fw_from']);
            }
            if(isset($params["wechat_fw_to"]) && !empty($params["wechat_fw_to"])){
                $this->db->where("talents.wechat_fw < '" . $params["wechat_fw_to"] . "'");
                unset($params['wechat_fw_to']);
            }
            if(isset($params["red_fw_from"]) && !empty($params["red_fw_from"])){
                $this->db->where("talents.red_fw > '" . $params["red_fw_from"] . "'");
                unset($params['red_fw_from']);
            }
            if(isset($params["red_fw_to"]) && !empty($params["red_fw_to"])){
                $this->db->where("talents.red_fw < '" . $params["red_fw_to"] . "'");
                unset($params['red_fw_to']);
            }
            if(isset($params["keyin_fw_from"]) && !empty($params["keyin_fw_from"])){
                $this->db->where("talents.keyin_fw > '" . $params["keyin_fw_from"] . "'");
                unset($params['keyin_fw_from']);
            }
            if(isset($params["keyin_fw_to"]) && !empty($params["keyin_fw_to"])){
                $this->db->where("talents.keyin_fw < '" . $params["keyin_fw_to"] . "'");
                unset($params['keyin_fw_to']);
            }
            if(isset($params["threesize_from"]) && !empty($params["threesize_from"])){
                $this->db->where("talents.threesize > '" . $params["threesize_from"] . "'");
                unset($params['threesize_from']);
            }
            if(isset($params["threesize_to"]) && !empty($params["threesize_to"])){
                $this->db->where("talents.threesize < '" . $params["threesize_to"] . "'");
                unset($params['threesize_to']);
            }
//            if(isset($params["company_name"]) && !empty($params["company_name"])){
//                $this->db->where("talents.content LIKE '%".$params["company_name"]."%'");
//                unset($params["keyword"]);
//            }

            if(isset($params["instagram_man_from"]) && !empty($params["instagram_man_from"])){
                $this->db->where("talents.it_male_ratio > '" . $params["instagram_man_from"] . "'");
                unset($params['instagram_man_from']);
            }
            if(isset($params["instagram_man_to"]) && !empty($params["instagram_man_to"])){
                $this->db->where("talents.it_male_ratio < '" . $params["instagram_man_to"] . "'");
                unset($params['instagram_man_to']);
            }
            if(isset($params["instagram_wman_from"]) && !empty($params["instagram_wman_from"])){
                $this->db->where("talents.it_female_ratio > '" . $params["instagram_wman_from"] . "'");
                unset($params['instagram_wman_from']);
            }
            if(isset($params["instagram_wman_to"]) && !empty($params["instagram_wman_to"])){
                $this->db->where("talents.it_female_ratio < '" . $params["instagram_wman_to"] . "'");
                unset($params['instagram_wman_to']);
            }
            if(isset($params["instagram_engage_rate_from"]) && !empty($params["instagram_engage_rate_from"])){
                $this->db->where("talents.eg_rate > '" . $params["instagram_engage_rate_from"] . "'");
                unset($params['instagram_engage_rate_from']);
            }
            if(isset($params["instagram_engage_rate_to"]) && !empty($params["instagram_engage_rate_to"])){
                $this->db->where("talents.eg_rate < '" . $params["instagram_engage_rate_to"] . "'");
                unset($params['instagram_engage_rate_to']);
            }
            if(isset($params["youtube_man_from"]) && !empty($params["youtube_man_from"])){
                $this->db->where("talents.yt_male_ratio > '" . $params["youtube_man_from"] . "'");
                unset($params['youtube_man_from']);
            }
            if(isset($params["youtube_man_to"]) && !empty($params["youtube_man_to"])){
                $this->db->where("talents.yt_male_ratio < '" . $params["youtube_man_to"] . "'");
                unset($params['youtube_man_to']);
            }
            if(isset($params["youtube_wman_from"]) && !empty($params["youtube_wman_from"])){
                $this->db->where("talents.yt_female_ratio > '" . $params["youtube_wman_from"] . "'");
                unset($params['youtube_wman_from']);
            }
            if(isset($params["youtube_wman_to"]) && !empty($params["youtube_wman_to"])){
                $this->db->where("talents.yt_female_ratio < '" . $params["youtube_wman_to"] . "'");
                unset($params['youtube_wman_to']);
            }
            if(isset($params["tiktok_man_from"]) && !empty($params["tiktok_man_from"])){
                $this->db->where("talents.tt_male_ratio > '" . $params["tiktok_man_from"] . "'");
                unset($params['tiktok_man_from']);
            }
            if(isset($params["tiktok_man_to"]) && !empty($params["tiktok_man_to"])){
                $this->db->where("talents.tt_male_ratio < '" . $params["tiktok_man_to"] . "'");
                unset($params['tiktok_man_to']);
            }
            if(isset($params["tiktok_wman_from"]) && !empty($params["tiktok_wman_from"])){
                $this->db->where("talents.tt_female_ratio > '" . $params["tiktok_wman_from"] . "'");
                unset($params['tiktok_wman_from']);
            }
            if(isset($params["tiktok_wman_to"]) && !empty($params["tiktok_wman_to"])){
                $this->db->where("talents.tt_female_ratio < '" . $params["tiktok_wman_to"] . "'");
                unset($params['tiktok_wman_to']);
            }
            if(isset($params["instagram_fw_from"]) && !empty($params["instagram_fw_from"])){
                $this->db->where("talents.it_fw > '" . $params["instagram_fw_from"] . "'");
                unset($params['blog_fw_from']);
            }
            if(isset($params["instagram_fw_to"]) && !empty($params["instagram_fw_to"])){
                $this->db->where("talents.it_fw < '" . $params["instagram_fw_to"] . "'");
                unset($params['instagram_fw_to']);
            }
            if(isset($params["youtube_fw_from"]) && !empty($params["youtube_fw_from"])){
                $this->db->where("talents.yt_fw > '" . $params["youtube_fw_from"] . "'");
                unset($params['youtube_fw_from']);
            }
            if(isset($params["youtube_fw_to"]) && !empty($params["youtube_fw_to"])){
                $this->db->where("talents.yt_fw < '" . $params["youtube_fw_to"] . "'");
                unset($params['youtube_fw_to']);
            }
            if(isset($params["tiktok_fw_from"]) && !empty($params["tiktok_fw_from"])){
                $this->db->where("talents.tk_fw > '" . $params["tiktok_fw_from"] . "'");
                unset($params['tiktok_fw_from']);
            }
            if(isset($params["tiktok_fw_to"]) && !empty($params["tiktok_fw_to"])){
                $this->db->where("talents.tk_fw < '" . $params["tiktok_fw_to"] . "'");
                unset($params['tiktok_fw_to']);
            }
            if(isset($params["twitter_fw_from"]) && !empty($params["twitter_fw_from"])){
                $this->db->where("talents.tw_fw > '" . $params["twitter_fw_from"] . "'");
                unset($params['twitter_fw_from']);
            }
            if(isset($params["twitter_fw_to"]) && !empty($params["twitter_fw_to"])){
                $this->db->where("talents.tw_fw < '" . $params["twitter_fw_to"] . "'");
                unset($params['twitter_fw_to']);
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
            if(isset($params["genre"])){
                if(array_sum($params["genre"]) > 0)
                    $this->db->group_start();
                foreach($params["genre"] as $key => $item){
                    if(empty($item))
                        continue;
                    $this->db->like("genre",$this->genre[$key]);
                }
                if(array_sum($params["genre"]) > 0)
                    $this->db->group_end();
                unset($params["genre"]);
            }
            if(isset($params["relationship"])){
                if(array_sum($params["relationship"]) > 0)
                    $this->db->group_start();
                foreach($params["relationship"] as $key => $item){
                    if(empty($item))
                        continue;
                    $this->db->like("relationship",$this->relationship[$key]);
                }
                if(array_sum($params["relationship"]) > 0)
                    $this->db->group_end();
                unset($params["relationship"]);
            }
            if(isset($params["charge_name"])){
                if(array_sum($params["charge_name"]) > 0)
                    $this->db->group_start();
                foreach($params["charge_name"] as $key => $item){
                    if(empty($item))
                        continue;
                    $this->db->like("charge_name",$this->charge_name[$key]);
                }
                if(array_sum($params["charge_name"]) > 0)
                    $this->db->group_end();
                unset($params["charge_name"]);
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

        public function favourite($filter = null, $limit = null){
            $this->db->join("context", "context.id = talents.id");
            $this->db->join("favourite", "favourite.talent_id = talents.id");
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
        public function fa_count($filter = null){
            $this->db->join("context", "context.id = talents.id");
            $this->db->join("favourite", "favourite.talent_id = talents.id");
            if($filter)
                $this->where($filter);
            return parent::counts($filter);
        }
	}