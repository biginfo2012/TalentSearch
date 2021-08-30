
<body>
    <main>
        <div id="carousel-home">
            <div class="owl-carousel owl-theme">
                <div class="owl-slide cover" style="background-image: url(<?=asset_url()?>img/slides/slide_home_1.jpg);background-size: cover;background-position: top; height: 100vh;">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-12 static">
                                    <div class="slide-text text-center white">
                                        <h2 class="owl-slide-animated owl-slide-title">インフルエンサーと企業を繋げるプラットフォーム</h2>
                                        <P><br/></P>
                                        <div class="owl-slide-animated owl-slide-cta">
                                            <a class="btn_1" href="<?=base_url()?>talents/search" role="button">検索ページへ</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="icon_drag_mobile"></div>
        </div>
        <!--/carousel-->
        <section class="dark1">
            <div class="container margin_60_40">
                <div class="main_title center">
                    <!--span><em></em></span-->
                    <br/>
                    <h2>インフルエンサーフリーワード検索</h2>
                    <p>お好きなワードで検索してください。</p>
                </div>
                <!-- <div class=""> -->
                <form method="post" id="search" action="<?=base_url()?>talents/search" method="post">
                    <div class="container-fluid col-md-11 center">
                        <div class="row no-gutters custom-search-input">
                            <div class="form-group" style="width:100%;">
                                <input class="form-control" type="text" name="keyword" placeholder="インフルエンサー検索">
                            </div>
                        </div>
                    </div>
                </form>
                <!-- </div> -->
                <!-- /row -->
                <p class="text-center add_top_30"><a name="search" class="btn_1 medium">検索 (<?=$result_count?> 件)</a></p>
                <br/>
            </div>
        </section>

        <!-- /bg_gray -->
        <div class="container margin_60_40" style="background: #eaeff3;">
            <div class="row">
                <div class="col-12">
                    <div class="main_title version_2">
                        <h2>注目のキャスト</h2>
                        <a name="search" href="<?=base_url()?>talents/search">すべて表示</a>
                    </div>
                </div>

                <?php
                $index = 1;
                foreach ($talents as $item) {
                    if($index++ > 6)
                        break;
                ?>
                <div class="col-md-6">
                    <div class="list_home">
                        <ul>
                            <li>
                                <a href="<?=base_url()?>talents/view/<?=$item["id"]?>" class="blog-item">
                                    <figure style="left: 10px;">
                                        <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="" class="lazy">
                                    </figure>
                                    <br/>
                                    <?php if($item['level'] == 1) { ?>
                                        <div class="score"><strong>S</strong></div>
                                    <?php } else if($item['level'] == 2) { ?>
                                        <div class="score"><strong>A</strong></div>
                                    <?php } else if($item['level'] == 3) { ?>
                                        <div class="score"><strong>B</strong></div>
                                    <?php } else if($item['level'] == 4) { ?>
                                        <div class="score"><strong>C</strong></div>
                                    <?php } ?>

                                    <em></em>
                                    <h3><?= $item["profile_name"]?></h3>
                                    <br/>
                                    <p><?=$item["gender"]== 1 ? '男性' : ($item["gender"]== 2 ? '女性' : 'その他')?> <?=calcAge($item['birthday'])?>歳</p>
                                    <p>フォロワー数: <?=number_format($item["it_fw"], 0, '.', ',')?></p>
                                    <p>男性比率: <?= $item["it_male_ratio"]?>%</p>
                                    <p>女性比率: <?= $item["it_female_ratio"]?>%</p>
                                    <p>依頼金額: <?=$item["amount"]?></p>
                                    <?php if(!empty($item["note"])) echo "<p>".$item["note"]."</p>"; ?>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <?php }?>
            </div>
        </div>
        <!-- /container -->

        <section class="dark1">
            <div class="container margin_60_40">
                <div class="main_title center add_bottom_10">
                    <span><em></em></span>
                    <h2>ご依頼の流れ</h2>
                </div>
                <div class="row justify-content-md-center how_2">
                    <div class="col-lg-5 text-center">
                        <figure>
                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="<?=asset_url()?>img/web_wireframe.svg" alt="" class="img-fluid lazy" width="360" height="380">
                        </figure>
                    </div>
                    <div class="col-lg-5">
                       <ul>
                            <li>
                                <h3><span>#01.</span> 会員登録</h3>
                                <p>まずは無料会員登録をお願いいたします。</p>
                            </li>
                            <li>
                                <h3><span>#02.</span> インフルエンサーを選定</h3>
                                <p>10,000人以上のインフルエンサーの中からマッチするインフルエンサーを簡単に絞り込むことができます。</p>
                            </li>
                            <li>
                                <h3><span>#03.</span> お仕事依頼</h3>
                                <p>お仕事を引き受け可能かインフルエンサーに相談します。</p>
                            </li>
                        </ul>
                        <p class="add_top_30"><a name="search" class="btn_1">インフルエンサーを探す</a></p>
                    </div>
                    <!-- /row -->
                </div>
            </div>
            <!-- /container -->
        </section>
        <!-- /bg_gray -->

        <div class="call_section version_2 lazy" data-bg="url(<?=asset_url()?>img/bg_call_section.jpg)">
            <div class="container clearfix">
                <div class="col-lg-5 col-md-6 float-right wow">
                    <div class="box_1">
                        <div class="ribbon_promo"><span>相談無料</span></div>
                        <h3>コンシェルジュに依頼</h3>
                        <p>インフルエンサーの選定からご希望の企業様はこちらからご連絡ください。インフルエンサーマーケティングの全行程を丸投げ可能です。</p>
                        <a class="btn_1">相談する</a>
                    </div>
                </div>
            </div>
        </div>
        <!--/call_section-->

    </main>

    <div id="toTop"></div><!-- Back to top button -->
    
    <div class="layer"></div><!-- Opacity Mask Menu Mobile -->

    <script src="<?=asset_url()?>scripts/index.js"></script>