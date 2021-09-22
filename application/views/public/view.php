    <!-- SPECIFIC CSS -->
    <link href="<?=asset_url()?>css/detail-page.css" rel="stylesheet">

<body>
	<main class="bg_color">
	    <div class="container margin_detail">
	        <div class="row">
	            <div class="col-xl-12 col-lg-12">
                    <div class="ql-blank" style="height:100px;"></div>
                    <!-- Main content -->

                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <!-- Profile Image -->
                                    <div class="card card-primary card-outline">
                                        <div class="card-body box-profile">
                                            <a class="bookmark js-bookmark-update <?= $favourite == 1 ? 'on' : '' ?>" data-influencer-id="<?=$talent["id"]?>"><p class="mb-0"><span>お気に入り</span></p></a>
                                            <div class="main_info_wrapper">
                                                <div class="main_info clearfix">
                                                    <div class="user_thumb" style="margin-left: 26px;">
                                                        <figure>
                                                            <img src="<?= empty($talent['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $talent['it_img'] ?>" alt="">
                                                        </figure>
                                                        <!-- <em class="online"><span></span>On line</em> -->
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 class="profile-username text-center"><?= $talent["profile_name"]?></h3>

                                            <p class="text-muted text-center"><?=$talent["province"] . " " . $talent["district_num"] . " " . $talent["building_name"] ?></p>
                                            <p class="text-muted text-center">Instagram: <?=number_format($talent["it_fw"], 0, '.', ',');?> <?=$talent['eg_rate'];?></p>
                                            <p class="text-muted text-center">YouTube: <?=number_format($talent["yt_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">TikTok: <?=number_format($talent["tt_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">Twitter: <?=number_format($talent["tw_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">Blog: <?=number_format($talent["blog_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">Wear: <?=number_format($talent["wear_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">Weibo: <?=number_format($talent["weibo_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">Wechat: <?=number_format($talent["wechat_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">RED: <?=number_format($talent["red_fw"], 0, '.', ',');?></p>
                                            <p class="text-muted text-center">抖音: <?=number_format($talent["keyin_fw"], 0, '.', ',');?></p>

                                            <ul class="list-group list-group-unbordered mb-3 mt-10">
                                                <li class="list-group-item">
                                                    <b>年齢</b> <a class="float-right"><?=calcAge($talent["birthday"])?> 歳</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>性別</b> <a class="float-right"><?=$talent["gender"]== 1 ? '男性' : ($talent["gender"]== 2 ? '女性' : 'その他')?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>活動拠点</b> <a class="float-right"><?=empty($talent["activity_base"])?'&nbsp;':$talent["activity_base"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>職業</b> <a class="float-right"><?=empty($talent["occupation"])?'&nbsp;':$talent["occupation"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>投稿ジャンル</b> <a class="float-right"><?=empty($talent["genre"])?'&nbsp;':$talent["genre"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>関係値</b> <a class="float-right"><?=empty($talent["relationship"])?'&nbsp;':$talent["relationship"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>ランク</b> <a class="float-right"><?=empty($talent["level"])? '': $this->talent->level[$talent["level"] - 1]?></a>
                                                </li>
                                            </ul>
                                            <button class="btn btn-success" name="copy">コピー</button>
                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                                <!-- /.col -->
                                <div class="col-md-9">
                                    <div class="card card-primary card-outline">
                                        <div class="card-body">
                                            <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active font-size-h3" id="custom-content-below-sns-tab" data-toggle="pill" href="#custom-content-below-sns" role="tab" aria-controls="custom-content-below-sns" aria-selected="true">SNS情報</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link font-size-h3" id="custom-content-below-post-tab" data-toggle="pill" href="#custom-content-below-post" role="tab" aria-controls="custom-content-below-post" aria-selected="false">投稿実績</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link font-size-h3" id="custom-content-below-detail-tab" data-toggle="pill" href="#custom-content-below-detail" role="tab" aria-controls="custom-content-below-detail" aria-selected="false">詳細プロフィール
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link font-size-h3" id="custom-content-below-detail-tab" data-toggle="pill" href="#custom-content-below-comment" role="tab" aria-controls="custom-content-below-comment" aria-selected="false">コメント
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="custom-content-below-tabContent">
                                                <div class="tab-pane fade show active" id="custom-content-below-sns" role="tabpanel" aria-labelledby="custom-content-below-sns-tab">
                                                    <div id="reviews">
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["it_url"]?>"><figure><img src="<?=asset_url()?>logos/instagram.png" alt=""></figure></a>

                                                                    <h5>Instagram</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["it_fw"], 0, '.', ',')?></p>
                                                                        <p>ストーリー依頼金額: </p>
                                                                        <p>フィード依頼金額: </p>
                                                                        <p>リール依頼金額: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>IGTV依頼金額: <?= $it_price ?></p>
                                                                        <p style="color: #3699ff;">男性比率: <?= $talent["it_male_ratio"]?>%</p>
                                                                        <p style="color: #f9316c;">女性比率: <?= $talent["it_female_ratio"]?>%</p>
                                                                        <p>年代層: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>エンゲージメント率: <?= $talent["eg_rate"]?></p>
                                                                        <p>リーチ率: <?= $it_reach ?></p>
                                                                        <p>CVR: <?= $it_cvr ?></p>
                                                                        <p>CTR: <?= $it_cv ?></p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <!-- /review_card -->
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["tw_url"]?>"><figure><img src="<?=asset_url()?>logos/twitter.png" alt=""></figure></a>
                                                                    <h5>Twitter</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["tw_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: <?= $tw_price ?></p>
                                                                        <p style="color: #3699ff;">男性比率: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: </p>
                                                                        <p>年代層: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>リーチ率: <?= $tw_reach ?></p>
                                                                        <p>CVR: <?= $tw_cvr ?></p>
                                                                        <p>CTR: <?= $tw_cv ?></p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["yt_url"]?>"><figure><img src="<?=asset_url()?>logos/youtube.png" alt=""></figure></a>
                                                                    <h5>Yutube</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>登録者数: <?=number_format($talent["yt_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: <?= $yt_price ?></p>
                                                                        <p style="color: #3699ff;">男性比率: <?= $talent["yt_male_ratio"]?>%</p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: <?= $talent["yt_female_ratio"]?>%</p>
                                                                        <p>年代層: </p>
                                                                        <p>平均再生回数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>案件再生回数: </p>
                                                                        <p>CVR: <?= $yt_price ?></p>
                                                                        <p>CTR: <?= $yt_price ?></p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["tt_url"]?>"><figure><img src="<?=asset_url()?>logos/tiktok.png"alt=""></figure></a>
                                                                    <h5>TikTok</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["tt_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: <?= $tt_price ?></p>
                                                                        <p style="color: #3699ff;">男性比率: <?= $talent["tt_male_rate"]?>%</p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: <?= $talent["tt_female_rate"]?>%</p>
                                                                        <p>年代層: </p>
                                                                        <p>平均再生回数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>案件再生回数: </p>
                                                                        <p>CVR: <?= $tt_price ?></p>
                                                                        <p>CTR: <?= $tt_price ?></p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["blog_url"]?>"><figure><img src="<?=asset_url()?>logos/blog.png"alt=""></figure></a>
                                                                    <h5>Blog</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>購読者数: <?=number_format($talent["tt_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: </p>
                                                                        <p style="color: #3699ff;">男性比率:</p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: </p>
                                                                        <p>年代層: </p>
                                                                        <p>CVR: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>CTR: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/weibo.png"alt=""></figure></a>
                                                                    <h5>Weibo</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["weibo_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: </p>
                                                                        <p style="color: #3699ff;">男性比率:</p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: </p>
                                                                        <p>年代層: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>リーチ率: </p>
                                                                        <p>CVR: </p>
                                                                        <p>CTR: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/wechat.png"alt=""></figure></a>
                                                                    <h5>Wechat</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["wechat_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: </p>
                                                                        <p style="color: #3699ff;">男性比率:</p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: </p>
                                                                        <p>年代層: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>リーチ率: </p>
                                                                        <p>CVR: </p>
                                                                        <p>CTR: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/tiktok.png"alt=""></figure></a>
                                                                    <h5>抖音</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>フォロワー数: <?=number_format($talent["keyin_fw"], 0, '.', ',')?></p>
                                                                        <p>依頼金額: </p>
                                                                        <p style="color: #3699ff;">男性比率: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p style="color: #f9316c;">女性比率: </p>
                                                                        <p>年代層: </p>
                                                                        <p>平均再生回数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>案件再生回数: </p>
                                                                        <p>CVR: </p>
                                                                        <p>CTR: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="custom-content-below-post" role="tabpanel" aria-labelledby="custom-content-below-post-tab">
                                                    <div id="">
                                                        <?php foreach ($insites as $item) {
                                                            if($item['type'] === 'Instagram') { ?>
                                                                <div class="review_card">
                                                                    <div class="row">
                                                                        <div class="col-md-1 user_info">
                                                                            <a><figure><img src="<?=asset_url()?>logos/instagram.png" alt=""></figure></a>

                                                                            <h5>Instagram</h5>
                                                                        </div>
                                                                        <div class="col-md-11 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: <?= $item["client_name"]?></p>
                                                                        <p>案件名: <?= $item["subject_name"]?></p>
                                                                        <p>ジャンル: <?= $item["genre"]?></p>
                                                                        <p>投稿タイプ: <?= $item["post_type"]?></p>
                                                                        <p>投稿URL/キャプチャ: <?= $item["post_url"]?></p>
                                                                        <p>依頼金額: <?= $item["price"]?></p>
                                                                        <p>投稿日: <?= $item["post_day"]?></p>
                                                                    </span>
                                                                            <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿時フォロワー数: <?= $item["post_fw"]?></p>
                                                                        <p>リーチ数: <?= $item["reach_cnt"]?></p>
                                                                        <p>インプレッション: <?= $item["impression"]?></p>
                                                                        <p>リーチ率: <?= $item["reach_rate"]?></p>
                                                                        <p>いいね数: <?= $item["fa_fw"]?></p>
                                                                        <p>コメント数: <?= $item["comment_cnt"]?></p>
                                                                        <p>シェア数: <?= $item["share_cnt"]?></p>
                                                                    </span>
                                                                            <span class="text-muted font-weight-bold mr-lg-8 mr-0 mb-lg-0 mb-2 ">
                                                                        <p>お気に入り保存数: <?= $item["fav_cnt"]?></p>
                                                                        <p>エンゲージメント率: <?= $item["eg_rate"]?></p>
                                                                        <p>リンククリック: <?= $item["link_click"]?></p>
                                                                        <p>クリック率: <?= $item["click_rate"]?></p>
                                                                        <p>CV数: <?= $item["cv"]?></p>
                                                                        <p>CVR: <?= $item["cvr"]?></p>
                                                                        <p>インサイトURL: <?= $item["url"]?></p>
                                                                    </span>
                                                                        </div>
                                                                    </div>
                                                                    <!-- /row -->
                                                                </div>
                                                            <?php } ?>
                                                            <?php if($item['type'] === 'Twitter') { ?>
                                                                <div class="review_card">
                                                                    <div class="row">
                                                                        <div class="col-md-1 user_info">
                                                                            <a><figure><img src="<?=asset_url()?>logos/twitter.png" alt=""></figure></a>
                                                                            <h5>Twitter</h5>
                                                                        </div>
                                                                        <div class="col-md-11 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: <?= $item["client_name"]?></p>
                                                                        <p>案件名: <?= $item["subject_name"]?></p>
                                                                        <p>ジャンル: <?= $item["genre"]?></p>
                                                                        <p>投稿URL/キャプチャ: <?= $item["post_url"]?></p>
                                                                        <p>依頼金額: <?= $item["price"]?></p>
                                                                        <p>投稿日: <?= $item["post_day"]?></p>
                                                                        <p>フォロワー数: <?= $item["post_fw"]?></p>
                                                                        <p>リーチ数: <?= $item["post_url"]?></p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">

                                                                        <p>インプレッション数: <?= $item["impression"]?></p>
                                                                        <p>エンゲージメント総数: <?= $item["eg_total"]?></p>
                                                                        <p>メディアへのエンゲージメント: <?= $item["eg_media"]?></p>
                                                                        <p>いいね数: <?= $item["fa_fw"]?></p>
                                                                        <p>リツイート: <?= $item["retweet"]?></p>
                                                                        <p>返信: <?= $item["reply"]?></p>
                                                                        <p>フォロー: <?= $item["follow"]?></p>
                                                                        <p>詳細のクリック数: <?= $item["detail_click"]?></p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-0 mb-lg-0 mb-2">

                                                                        <p>リンクのクリック数: <?= $item["link_click"]?></p>
                                                                        <p>ハッシュタグのクリック数: <?= $item["hash_click"]?></p>
                                                                        <p>プロフィールのクリック数: <?= $item["profile_click"]?></p>
                                                                        <p>リーチ率: <?= $item["reach_rate"]?></p>
                                                                        <p>エンゲージメント率: <?= $item["eg_rate"]?></p>
                                                                        <p>CV数: <?= $item["cv"]?></p>
                                                                        <p>CVR: <?= $item["cvr"]?></p>
                                                                        <p>ツイートアクティビティURL: <?= $item["url"]?></p>
                                                                    </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <?php } ?>
                                                            <?php if($item['type'] === 'Youtube') { ?>
                                                                <div class="review_card">
                                                                    <div class="row">
                                                                        <div class="col-md-1 user_info">
                                                                            <a><figure><img src="<?=asset_url()?>logos/youtube.png" alt=""></figure></a>
                                                                            <h5>Yutube</h5>
                                                                        </div>
                                                                        <div class="col-md-11 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: <?= $item["client_name"]?></p>
                                                                        <p>案件名: <?= $item["subject_name"]?></p>
                                                                        <p>ジャンル: <?= $item["genre"]?></p>
                                                                        <p>動画URL: <?= $item["post_url"]?></p>
                                                                        <p>依頼金額: <?= $item["price"]?></p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿日: <?= $item["post_day"]?></p>
                                                                        <p>投稿時登録者数: <?= $item["post_fw"]?></p>
                                                                        <p>再生回数: <?= $item["link_click"]?></p>
                                                                        <p>コメント数: <?= $item["comment_cnt"]?></p>
                                                                        <p>高評価数: <?= $item["high_rating_cnt"]?></p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-0 mb-lg-0 mb-2">
                                                                        <p>低評価数: <?= $item["low_rating_cnt"]?></p>
                                                                        <p>CV数: <?= $item["cv"]?></p>
                                                                        <p>CVR: <?= $item["cvr"]?></p>
                                                                        <p>アナリティクスデータURL: <?= $item["url"]?></p>
                                                                    </span>
                                                                        </div>
                                                                    </div>
                                                                    <!-- /row -->
                                                                </div>
                                                            <?php } ?>
                                                            <?php if($item['type'] === 'TikTok') { ?>
                                                                <div class="review_card">
                                                                    <div class="row">
                                                                        <div class="col-md-1 user_info">
                                                                            <a href="<?=$talent["tt_url"]?>"><figure><img src="<?=asset_url()?>logos/tiktok.png"alt=""></figure></a>
                                                                            <h5>TikTok</h5>
                                                                        </div>
                                                                        <div class="col-md-11 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: <?= $item["client_name"]?></p>
                                                                        <p>案件名: <?= $item["subject_name"]?></p>
                                                                        <p>ジャンル: <?= $item["genre"]?></p>
                                                                        <p>投稿URL: <?= $item["post_url"]?></p>
                                                                        <p>依頼金額: <?= $item["price"]?></p>
                                                                    </span>
                                                                            <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿日: <?= $item["post_day"]?></p>
                                                                        <p>フォロワー数: <?= $item["post_fw"]?></p>
                                                                        <p>再生数: <?= $item["link_click"]?></p>
                                                                        <p>いいね数: <?= $item["fa_fw"]?></p>
                                                                        <p>コメント数: <?= $item["comment_cnt"]?></p>
                                                                    </span>
                                                                            <span class="text-muted font-weight-bold mr-lg-8 mr-0 mb-lg-0 mb-2">
                                                                        <p>シェア数: <?= $item["share_cnt"]?></p>
                                                                        <p>エンゲージメント率: <?= $item["eg_rate"]?></p>
                                                                        <p>CV数: <?= $item["cv"]?></p>
                                                                        <p>CVR: <?= $item["cvr"]?></p>
                                                                                 <p>インサイトURL: <?= $item["url"]?></p>
                                                                    </span>
                                                                        </div>
                                                                    </div>
                                                                    <!-- /row -->
                                                                </div>
                                                            <?php } ?>
                                                        <?php }?>

                                                        <div class="review_card d-none">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href="<?=$talent["blog_url"]?>"><figure><img src="<?=asset_url()?>logos/blog.png"alt=""></figure></a>
                                                                    <h5>Blog</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: </p>
                                                                        <p>案件名: </p>
                                                                        <p>ジャンル: </p>
                                                                        <p>投稿タイプ: </p>
                                                                        <p>投稿URL/キャプチャ: </p>
                                                                        <p>依頼金額: </p>
                                                                        <p>投稿日: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿時フォロワー数: </p>
                                                                        <p>リーチ数: </p>
                                                                        <p>インプレッション: </p>
                                                                        <p>リーチ率: </p>
                                                                        <p>いいね数: </p>
                                                                        <p>コメント数: </p>
                                                                        <p>シェア数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>お気に入り保存数: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                        <p>リンククリック: </p>
                                                                        <p>クリック率: </p>
                                                                        <p>CV数: </p>
                                                                        <p>CVR: </p>
                                                                        <p>インサイトURL: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card d-none">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/weibo.png"alt=""></figure></a>
                                                                    <h5>Weibo</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: </p>
                                                                        <p>案件名: </p>
                                                                        <p>ジャンル: </p>
                                                                        <p>投稿タイプ: </p>
                                                                        <p>投稿URL/キャプチャ: </p>
                                                                        <p>依頼金額: </p>
                                                                        <p>投稿日: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿時フォロワー数: </p>
                                                                        <p>リーチ数: </p>
                                                                        <p>インプレッション: </p>
                                                                        <p>リーチ率: </p>
                                                                        <p>いいね数: </p>
                                                                        <p>コメント数: </p>
                                                                        <p>シェア数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>お気に入り保存数: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                        <p>リンククリック: </p>
                                                                        <p>クリック率: </p>
                                                                        <p>CV数: </p>
                                                                        <p>CVR: </p>
                                                                        <p>インサイトURL: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card d-none">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/wechat.png"alt=""></figure></a>
                                                                    <h5>Wechat</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: </p>
                                                                        <p>案件名: </p>
                                                                        <p>ジャンル: </p>
                                                                        <p>投稿タイプ: </p>
                                                                        <p>投稿URL/キャプチャ: </p>
                                                                        <p>依頼金額: </p>
                                                                        <p>投稿日: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿時フォロワー数: </p>
                                                                        <p>リーチ数: </p>
                                                                        <p>インプレッション: </p>
                                                                        <p>リーチ率: </p>
                                                                        <p>いいね数: </p>
                                                                        <p>コメント数: </p>
                                                                        <p>シェア数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>お気に入り保存数: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                        <p>リンククリック: </p>
                                                                        <p>クリック率: </p>
                                                                        <p>CV数: </p>
                                                                        <p>CVR: </p>
                                                                        <p>インサイトURL: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card d-none">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <a href=""><figure><img src="<?=asset_url()?>logos/tiktok.png"alt=""></figure></a>
                                                                    <h5>抖音</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content d-flex flex-wrap my-2">
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>クライアント名: </p>
                                                                        <p>案件名: </p>
                                                                        <p>ジャンル: </p>
                                                                        <p>投稿タイプ: </p>
                                                                        <p>投稿URL/キャプチャ: </p>
                                                                        <p>依頼金額: </p>
                                                                        <p>投稿日: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>投稿時フォロワー数: </p>
                                                                        <p>リーチ数: </p>
                                                                        <p>インプレッション: </p>
                                                                        <p>リーチ率: </p>
                                                                        <p>いいね数: </p>
                                                                        <p>コメント数: </p>
                                                                        <p>シェア数: </p>
                                                                    </span>
                                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                                        <p>お気に入り保存数: </p>
                                                                        <p>エンゲージメント率: </p>
                                                                        <p>リンククリック: </p>
                                                                        <p>クリック率: </p>
                                                                        <p>CV数: </p>
                                                                        <p>CVR: </p>
                                                                        <p>インサイトURL: </p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="custom-content-below-detail" role="tabpanel" aria-labelledby="custom-content-below-detail-tab">
                                                    <div class="wrapper_indent" style="padding-left: 0">
                                                        <!-- p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit.</p>
                                                        <h6>Most requested services</h6> -->
                                                        <div class="row">
                                                            <div class="services_list clearfix col-lg-4">
                                                                <p class="mt-4 font-size-h6">基本情報 </p>
                                                                <ul>
                                                                    <li>タイムスタンプ <strong><?=empty($talent["timestampp"])?'&nbsp;':$talent["timestampp"];?></strong></li>
                                                                    <li>ID <strong><?=empty($talent["user_id"])?'&nbsp;':$talent["user_id"];?></strong></li>
                                                                    <li>本名 <strong><?=empty($talent["name"])?'&nbsp;':$talent["name"];?></strong></li>
                                                                    <li>生年月日<strong><?=empty($talent["birthday"])?'&nbsp;':$talent["birthday"];?></strong></strong></li>
                                                                    <li>年齢<strong><?=empty($talent["age"])?'&nbsp;':calcAge($talent["birthday"]);?></strong></strong></li>
                                                                    <li>事務所<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></strong></li>
                                                                    <li>身長<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?>cm</strong></li>
                                                                    <li>スリーサイズ<strong><?=empty($talent["threesize"])?'--- ':$talent["threesize"];?></strong></li>
                                                                    <li>靴のサイズ<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></li>
                                                                    <li>未婚・既婚<strong>未婚</strong></li>
                                                                    <li>PRポイント<strong><?=empty($talent["pr_point"])?'--- ':$talent["pr_point"];?></strong></li>
                                                                </ul>
                                                            </div>
                                                            <div class="services_list clearfix col-lg-4">
                                                                <ul>
                                                                    <li>自己紹介<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></li>
                                                                    <li>出演実績<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></li>
                                                                    <li>ジャンル<strong><?=empty($talent["genre"])?'--- ':$talent["genre"];?></strong></li>
                                                                </ul>
                                                                <p class="mt-4 font-size-h6">補足情報 </p>
                                                                <ul>
                                                                    <li>担当者名 <strong><?=empty($talent["charge_name"])?'&nbsp;':$talent["charge_name"];?></strong></li>
                                                                    <li>投稿での顔出し <strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></li>
                                                                    <li>メールアドレス <strong><?=empty($talent["email"])?'&nbsp;':$talent["email"];?></strong></strong></li>
                                                                    <li>ラインID <strong><?=empty($talent["line_id"])?'&nbsp;':$talent["line_id"];?></strong></strong></li>
                                                                    <li>契約書 <strong><?=empty($talent["contract"])?'&nbsp;':$talent["contract"];?></strong></strong></li>
                                                                    <li>注意点 <strong><?=empty($talent["note"])?'&nbsp;':$talent["note"];?></strong></strong></li>
                                                                </ul>
                                                                <p class="mt-4 font-size-h6">発送先 </p>
                                                                <ul>
                                                                    <li>宛名 <strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?></strong></li>
                                                                </ul>
                                                            </div>
                                                            <div class="services_list clearfix col-lg-4">
                                                                <ul>
                                                                    <li>プロフィール名 <strong><?=empty($talent["profile_name"])?'&nbsp;':$talent["profile_name"];?></strong></li>
                                                                    <li>キャスト名 <strong><?=empty($talent["name"])?'&nbsp;':$talent["name"];?></strong></strong></li>
                                                                    <li>郵便番号<strong><?=empty($talent["post_code"])?'&nbsp;':$talent["post_code"];?></strong></strong></li>
                                                                    <li>住所<strong><?=empty($talent["province"])?'&nbsp;':$talent["province"];?></strong></strong></li>
                                                                    <li>電話番号 <strong><?=empty($talent["tel_number"])?'&nbsp;':$talent["tel_number"];?></strong></strong></li>
                                                                </ul>
                                                                <p class="mt-4 font-size-h6">発送先 </p>
                                                                <ul>
                                                                    <li>銀行名 <strong><?=empty($talent["bank_name"])?'&nbsp;':$talent["bank_name"];?></strong></strong></li>
                                                                    <li>支店名 <strong><?=empty($talent["branch_name"])?'&nbsp;':$talent["branch_name"];?></strong></strong></li>
                                                                    <li>口座種別 <strong><?=empty($talent["account_type"])?'&nbsp;':$talent["account_type"];?></strong></strong></li>
                                                                    <li>口座番号 <strong><?=empty($talent["account_number"])?'&nbsp;':$talent["account_number"];?></strong></strong></li>
                                                                    <li>口座名義 <strong><?=empty($talent["account_kana"])?'&nbsp;':$talent["account_kana"];?></strong></strong></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="custom-content-below-comment" role="tabpanel" aria-labelledby="custom-content-below-comment-tab">
                                                    <div id="">
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <?php foreach ($comments as $item) { ?>
                                                                    <div class="col-lg-12 mb-3" style="border: 1px #767676 solid; border-radius: 5px; padding-top: 10px;">
                                                                        <p> <?= $item["comment"]?></p>
                                                                        <p style="text-align: right;"><?= $item["created_at"]?></p>

                                                                    </div>
                                                                <?php }?>

                                                            </div>

                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <label>コメント:</label>
                                                                    <textarea name="acq_record" id="comment" rows="10" style="width: 100%;"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-lg-10"></div>
                                                                <div class="col-lg-2" style="text-align: right;">
                                                                    <button type="button" id="comment_post" class="btn btn-primary font-weight-bolder">提供</button>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <!-- /review_card -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.card -->
                                    </div>
                                    <div class="card card-primary card-outline mt-5">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4 col-lg-4">
                                                    <div class="form-group">
                                                        <form id="csv_form" enctype="multipart/form-data" action="<?=base_url()?>talents/csvImport" method="post" name="send">
                                                            <input name="id" value="<?=$talent["id"]?>" type="hidden">
                                                            <label class="form-label" style="display: block;margin-bottom: .375rem;font-weight: 600;font-size: 0.875rem;color: #5e7cac;">CSVファイル</label>
                                                            <button id="img_add" class="" onclick="openFile()" style="">ファイル選択</button>
                                                            <input type="file" class="d-none" id="form_csv_file" name="csv">
                                                            <label class="d-none" id="file_label"></label>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer text-left">
                                            <div class="d-flex">
                                                <button id="btn_submit" class="btn btn-primary mr-auto" data-toggle="modal" data-target="#messageModal" disabled="">インポート</button>
                                            </div>
                                        </div>
                                        <!-- /.card -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- /.row -->
                        </div><!-- /.container-fluid -->
                    </section>
                    <!-- /box_general -->
	            </div>
	        </div>
	        <!-- /row -->
	    </div>
	    <!-- /container -->
	</main>

	<div id="toTop"></div><!-- Back to top button -->
	
	<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
    <div class="modal fade" id="copy_modal" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document" style="margin: 10.75rem auto;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">詳細を編集</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="copy_form">
                        <input type="hidden" id="talent_id" name="talent_id" value="<?= $talent["id"]?>">
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="name" class="checkboxes">
                                <label>お名前:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="email" class="checkboxes">
                                <label>メールアドレス:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="gender" class="checkboxes">
                                <label>性別:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="post" class="checkboxes">
                                <label>宛名:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="tel_number" class="checkboxes">
                                <label>電話番号:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="account_kana" class="checkboxes">
                                <label>口座名義:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="zip_code" class="checkboxes">
                                <label>郵便番号:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="birthday" class="checkboxes">
                                <label>生年月日:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="account_type" class="checkboxes">
                                <label>口座種別:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="province" class="checkboxes">
                                <label>都道府県:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="district_num" class="checkboxes">
                                <label>市区町村・番地:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="building_name" class="checkboxes">
                                <label>マンション・ビル名:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="it_fw" class="checkboxes">
                                <label>フォロワー数:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="it_url" class="checkboxes">
                                <label>InstagramプロフィールURL:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="amount" class="checkboxes">
                                <label>依頼金額:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="charge_name" class="checkboxes">
                                <label>担当者名:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="account_number" class="checkboxes">
                                <label>口座番号:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="it_male_ratio" class="checkboxes">
                                <label>IGfw男性比率:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="it_female_ratio" class="checkboxes">
                                <label>IGfw女性比率:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="age" class="checkboxes">
                                <label>年齢:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="line_id" class="checkboxes">
                                <label>LINE ID:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="occupation" class="checkboxes">
                                <label>ご職業:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="genre" class="checkboxes">
                                <label>投稿ジャンル:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="activity_base" class="checkboxes">
                                <label>活動拠点:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="pr_point" class="checkboxes">
                                <label>PRポイント:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="profile_name" class="checkboxes">
                                <label>プロフィール表示名:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="eg_rate" class="checkboxes">
                                <label>平均EG率(%):</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="app_post" class="checkboxes">
                                <label>投稿での顔出し:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="belonging" class="checkboxes">
                                <label>所属:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="post_result" class="checkboxes">
                                <label>投稿実績:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="tw_fw" class="checkboxes">
                                <label>twitterフォロワー:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="tw_url" class="checkboxes">
                                <label>Twitterアカウント URL:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="fb_fw" class="checkboxes">
                                <label>FBfw:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="fb_url" class="checkboxes">
                                <label>Facebookアカウント URL:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="yt_fw" class="checkboxes">
                                <label>youtube登録者数:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="yt_url" class="checkboxes">
                                <label>YouTubeチャンネル URL:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="yt_female_ratio" class="checkboxes">
                                <label>女性比率:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="yt_male_ratio" class="checkboxes">
                                <label>男性比率:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="acq_record" class="checkboxes">
                                <label>獲得実績:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="tt_fw" class="checkboxes">
                                <label>TikTokfw数:</label>
                            </div>
                            <div class="col-lg-4 d-flex">
                                <input type="checkbox" name="tt_url" class="checkboxes">
                                <label>TikTokアカウント URL:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="blog_url" class="checkboxes">
                                <label>ブログ URL:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="blog_fw" class="checkboxes">
                                <label>Blogfw数:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="wear_fw" class="checkboxes">
                                <label>wearfw数:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="wear_url" class="checkboxes">
                                <label>wearURL:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="weibo_fw" class="checkboxes">
                                <label>Weibofw数:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="wechat_fw" class="checkboxes">
                                <label>WeChatfw数:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="red_fw" class="checkboxes">
                                <label>REDfw数:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="keyin_fw" class="checkboxes">
                                <label>抖音fw数:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="relationship" class="checkboxes">
                                <label>関係値:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="threesize" class="checkboxes">
                                <label>スリーサイズ:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="sns_url" class="checkboxes">
                                <label>その他のSNS:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="bank_name" class="checkboxes">
                                <label>銀行名:</label>
                            </div>
                            <div class="col-lg-4">
                                <input type="checkbox" name="branch_name" class="checkboxes">
                                <label>支店名:</label>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <input type="checkbox" name="note" class="checkboxes">
                                <label>注意:</label>
                            </div>

                        </div>
                        <a id="copy_btn" class="btn_1 full-width">コピー</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="<?=asset_url()?>scripts/view.js"></script>
    <style type="text/css">
        nav#dark {
            background: #0d1422 !important;
        }
        .bookmark {
            position: absolute;
            z-index: 100;
            top: 0;
            right: 0;
            padding: 13px 17px;
            border-bottom: 1px solid #eeeeee;
            border-left: 1px solid #eeeeee;
            border-radius: 0 5px 0 5px;
            box-shadow: none;
        }

        .bookmark {
            font-size: 11px;
            background-color: #ffffff;
            box-shadow: 0 0 1px rgb(0 0 0 / 40%);
            border-radius: 5px;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
        }
        .bookmark:hover {
            background-color: #e6b10f;
            box-shadow: none
        }
        .bookmark.on {
            background-color: #e6b10f;
        }
        a {
            text-decoration: none;
            color: #444444;
            -webkit-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
        }
        .bookmark p {
            display: table;
            color: #aaaaaa;
            font-size: 12px;
            line-height: 1;
            letter-spacing: .1rem;
        }
        .bookmark.on p {
            color: white;
        }

        .bookmark p {
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
        }
        .bookmark p i {
            font-size: 14px;
            padding-right: 14px;
        }
        .bookmark p i {
            position: relative;
            padding-right: 15px;
        }
        .bookmark p span {
            display: table-cell;
            padding-left: 4px;
            vertical-align: middle;
            -webkit-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
        }
        .bookmark p i:before {
            margin-top: -6px;
            margin-left: -6px;
            font-size: 12px;
            color: #dddddd;
        }
        /*.bookmark p i:before {*/
        /*    position: absolute;*/
        /*    left: 50%;*/
        /*    top: 50%;*/
        /*    margin-top: -6px;*/
        /*    margin-left: -6px;*/
        /*    font-size: 18px;*/
        /*    font-weight: normal;*/
        /*    z-index: 99;*/
        /*    pointer-events: none;*/
        /*    color: red;*/
        /*    -webkit-transition-duration: 0.3s;*/
        /*    transition-duration: 0.3s;*/
        /*}*/

    </style>
<script>
    function openFile() {
        event.preventDefault()
        $('#form_csv_file').trigger('click');
    }

    $("#form_csv_file").on("change", function(){
        if (this.files && this.files[0]) {

            let label1 = $('#file_label');
            label1.removeClass('d-none');

            label1[0].textContent = this.files[0].name;
            $("#form_csv_file")[0].files = this.files;
            console.log($("#form_csv_file")[0].files);
            $('#btn_submit')[0].disabled = false;

            // console.log($("#form_csv_file")[0].files)
            //input1[0].files = e.target.files;
        }
    })
    // $('#btn_submit').click(function () {
    //     event.preventDefault();
    //     var copyData = new FormData($("#csv_form")[0]);
    //     $.ajax({
    //         url: HOST_URL + "talents/csvImport",
    //         type: 'post',
    //         data: copyData,
    //         contentType: false,
    //         processData: false,
    //     }).done(function (response) {
    //         console.log(response);
    //     })
    //
    //
    // })
</script>
</body>
</html>