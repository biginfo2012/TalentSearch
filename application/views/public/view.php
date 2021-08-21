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

                                            <h3 class="profile-username text-center"><?= $talent["name"]?></h3>

                                            <p class="text-muted text-center"><?=$talent["province"] . " " . $talent["district_num"] . " " . $talent["building_name"] ?></p>
                                            <p class="text-muted text-center"><?=number_format($talent["it_fw"], 0, '.', ',');?> <?=$talent['eg_rate'];?></p>

                                            <ul class="list-group list-group-unbordered mb-3 mt-10">
                                                <li class="list-group-item">
                                                    <b>キャスト名</b> <a class="float-right"><?=empty($talent["name"])?'&nbsp;':$talent["name"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>生年月日</b> <a class="float-right"><?=empty($talent["birthday"])?'&nbsp;':$talent["birthday"];?>(<?=calcAge($talent["birthday"])?> 歳)</a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>性別</b> <a class="float-right"><?=$talent["gender"]== 1 ? '男性' : ($talent["gender"]== 2 ? '女性' : 'その他')?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>在住都道府県</b> <a class="float-right"><?=empty($talent["address"])?'&nbsp;':$talent["address"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>活動拠点</b> <a class="float-right"><?=empty($talent["activity_base"])?'&nbsp;':$talent["activity_base"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>郵便番号</b> <a class="float-right"><?=empty($talent["post_code"])?'&nbsp;':$talent["post_code"];?></a>
                                                </li>
                                                <li class="list-group-item">
                                                    <b>身長</b> <a class="float-right"><?=empty($talent["tall"])?'--- ':$talent["tall"];?>cm</a>
                                                </li>
                                            </ul>

                                        </div>
                                        <!-- /.card-body -->
                                    </div>
                                    <!-- /.card -->
                                </div>
                                <!-- /.col -->
                                <div class="col-md-9">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h3 class="card-title text-center">
                                                <?= empty($talent["name"])?'':$talent["name"].'さんに関するお問い合わせ';?>
                                            </h3>
                                        </div>
                                        <div class="card-body">
                                            <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="custom-content-below-sns-tab" data-toggle="pill" href="#custom-content-below-sns" role="tab" aria-controls="custom-content-below-sns" aria-selected="true">SNS情報</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="custom-content-below-post-tab" data-toggle="pill" href="#custom-content-below-post" role="tab" aria-controls="custom-content-below-post" aria-selected="false">投稿実績</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="custom-content-below-detail-tab" data-toggle="pill" href="#custom-content-below-detail" role="tab" aria-controls="custom-content-below-detail" aria-selected="false">詳細プロフィール
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="custom-content-below-tabContent">
                                                <div class="tab-pane fade show active" id="custom-content-below-sns" role="tabpanel" aria-labelledby="custom-content-below-sns-tab">
                                                    <div id="reviews">
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <figure><img src="<?=asset_url()?>logos/sort_icon_instagram.svg"alt=""></figure>
                                                                    <h5>Instagram</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content">
                                                                    <div class="clearfix add_bottom_15">
                                                                        <span class="rating"><?=number_format($talent["it_fw"], 0, '.', ',')?></span>
                                                                        <a><em><?=$talent["it_url"]?></em></a>
                                                                    </div>
                                                                    <h4></h4>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <!-- /review_card -->
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <figure><img src="<?=asset_url()?>logos/sort_icon_twitter.svg" alt=""></figure>
                                                                    <h5>Twitter</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content">
                                                                    <div class="clearfix add_bottom_15">
                                                                        <span class="rating"><?=number_format($talent["tw_fw"], 0, '.', ',')?></span>
                                                                        <a><em><?=$talent["tw_url"]?></em></a>
                                                                    </div>
                                                                    <h4></h4>
                                                                    <p></p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <figure><img src="<?=asset_url()?>logos/sort_icon_youtube.svg" alt=""></figure>
                                                                    <h5>Yutube</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content">
                                                                    <div class="clearfix add_bottom_15">
                                                                        <span class="rating"><?=number_format($talent["yt_fw"], 0, '.', ',')?> </span>
                                                                        <a><em><?=$talent["yt_url"]?></em></a>
                                                                    </div>
                                                                    <h4></h4>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                        <div class="review_card">
                                                            <div class="row">
                                                                <div class="col-md-2 user_info">
                                                                    <figure><img src="<?=asset_url()?>logos/sort_icon_tiktok.svg"alt=""></figure>
                                                                    <h5>TikTok</h5>
                                                                </div>
                                                                <div class="col-md-10 review_content">
                                                                    <div class="clearfix add_bottom_15">
                                                                        <span class="rating"><?=number_format($talent["tt_fw"], 0, '.', ',')?> </span>
                                                                        <a><em><?=$talent["tt_url"]?></em></a>

                                                                    </div>
                                                                    <h4></h4>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                            <!-- /row -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="custom-content-below-post" role="tabpanel" aria-labelledby="custom-content-below-post-tab">
                                                    投稿実績
                                                </div>
                                                <div class="tab-pane fade" id="custom-content-below-detail" role="tabpanel" aria-labelledby="custom-content-below-detail-tab">
                                                    <div class="wrapper_indent">
                                                        <!-- p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit.</p>
                                                        <h6>Most requested services</h6> -->
                                                        <div class="row">
                                                            <div class="services_list clearfix col-lg-6">
                                                                <ul>
                                                                    <li>プロフィール名 <strong><?=empty($talent["profile_name"])?'&nbsp;':$talent["profile_name"];?></strong></li>
                                                                    <li>キャスト名 <strong><?=empty($talent["name"])?'&nbsp;':$talent["name"];?></strong></strong></li>
                                                                    <li>メールアドレス <strong><?=empty($talent["email"])?'&nbsp;':$talent["email"];?></strong></strong></li>
                                                                    <li>電話番号 <strong><?=empty($talent["tel_number"])?'&nbsp;':$talent["tel_number"];?></strong></strong></li>
                                                                    <li>生年月日<strong><?=empty($talent["birthday"])?'&nbsp;':$talent["birthday"];?></strong></strong></li>
                                                                    <li>性別<strong> <?=$talent["gender"]==2 ? '女性': '男性'?></strong></li>
                                                                </ul>
                                                            </div>
                                                            <div class="services_list clearfix col-lg-6">
                                                                <ul>
                                                                    <li>年齢<strong><?=empty($talent["age"])?'&nbsp;':calcAge($talent["birthday"]);?></strong></strong></li>
                                                                    <li>在住都道府県<strong><?=empty($talent["address"])?'&nbsp;':$talent["address"];?></strong></strong></li>
                                                                    <li>活動拠点<strong><?=empty($talent["activity_base"])?'&nbsp;':$talent["activity_base"];?></strong></strong></li>
                                                                    <li>職業<strong><?=empty($talent["belonging"])?'&nbsp;':$talent["belonging"];?></strong></strong></li>
                                                                    <li>郵便番号<strong><?=empty($talent["post_code"])?'&nbsp;':$talent["post_code"];?></strong></strong></li>
                                                                    <li>身長<strong><?=empty($talent["tall"])?'--- ':$talent["tall"];?>cm</strong></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

    <script src="<?=asset_url()?>scripts/view.js"></script>
</body>
</html>