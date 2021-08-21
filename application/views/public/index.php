
<body>
    <main>
        <div id="carousel-home">
            <div class="owl-carousel owl-theme">
                <div class="owl-slide cover" style="background-image: url(<?=asset_url()?>img/slides/slide_home_1.jpg);">
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
                <!--/owl-slide-->   
                <!--div class="owl-slide cover" style="background-image: url(<?=asset_url()?>img/slides/slide_home_2.jpg);">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-lg-7 static">
                                    <div class="slide-text white">
                                        <h2 class="owl-slide-animated owl-slide-title">確認済みの専門家のみ</h2>
                                        <p class="owl-slide-animated owl-slide-subtitle">
                                            +12.000人以上の信頼できる専門家がリストされています
                                        </p>
                                        <div class="owl-slide-animated owl-slide-cta"><a class="btn_1" role="button">続きを読む</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
                <div class="owl-slide cover" style="background-image: url(<?=asset_url()?>img/slides/slide_home_3.jpg);">
                    <div class="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                        <div class="container">
                            <div class="row justify-content-center justify-content-md-end">
                                <div class="col-lg-6 static">
                                    <div class="slide-text text-right white">
                                        <h2 class="owl-slide-animated owl-slide-title">あなたはプロですか？</h2>
                                        <p class="owl-slide-animated owl-slide-subtitle">
                                            Prozimに無料で参加して、より多くの可視性を手に入れましょう
                                        </p>
                                        <div class="owl-slide-animated owl-slide-cta">
                                            <a class="btn_1" role="button">続きを読む</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div-->
            </div>
            <div id="icon_drag_mobile"></div>
        </div>
        <!--/carousel-->

        <div class="bg_gray">
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
            <!-- /container -->
        </div>
        <!-- /bg_gray -->
        <div class="container margin_60_40">
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
                                <a href="<?=base_url()?>talents/view/<?=$item["id"]?>">
                                    <figure>
                                        <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="" class="lazy">
                                    </figure>
                                    <br/>
                                    <div class="score"><strong><?=$item['eg_rate']?></strong></div>
                                    <em></em>
                                    <h3><?= $item["name"]?></h3>
                                    <br/>
                                    <small><?=empty($item['activity_base']) ? '---' : $item['activity_base']?> / <?=empty($item['occupation'])? '---':$item['occupation']?> / <?=empty($item['genre'])?'---':$item['genre']?></small>
                                    <ul>
                                        <!--li><span class="ribbon off">+30%</span></li-->
                                        <li><?=$item['note']?></li>
                                    </ul>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <?php }?>
            </div>
        </div>
        <!-- /container -->

        <div class="bg_gray">
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
        </div>
        <!-- /bg_gray -->

        <div class="call_section version_2 lazy" data-bg="url(<?=asset_url()?>img/bg_call_section.jpg)">
            <div class="container clearfix">
                <div class="col-lg-5 col-md-6 float-right wow">
                    <div class="box_1">
                        <div class="ribbon_promo"><span>自由</span></div>
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