<body>
<main class="bg_color">
    <div class="contents">
        <div class="main influencer_group price">
            <div class="wrap-mc">

                <div class="c-box">
                    <div class="ch-box">
                        <h2><?=$campaign["campaign_name"]?></h2>
                    </div>
                    <div class="cb-box">
                        <div class="p-wrap">
                            <div class="wp-box">
                                <h5>外部参照ページで価格を表示する</h5>
                                <div class="p-box">
                                    <p><input class="js-update-is-display-price" data-campaign-id="<?=$campaign["id"]?>" data-price-type="net" type="checkbox" id="net" <?= isset($campaign["net_price"]) && $campaign["net_price"] === '1' ? 'checked=""' : ''?>><label for="net">NET</label></p>
                                    <p><input class="js-update-is-display-price" data-campaign-id="<?=$campaign["id"]?>" data-price-type="gross" type="checkbox" id="gross" <?= isset($campaign["gross_price"]) && $campaign["gross_price"] === '1' ? 'checked=""' : ''?>><label for="gross">GROSS</label></p>
                                </div>
                            </div>
                            <div class="bb-box">
                                <a href="<?=base_url()."talents/campaignpreview/".$campaign['id']?>" class="pre-btn" target="_blank">プレビュー</a>
                                <a href="<?=base_url()."talents/viewcampaign/".$campaign['id']?>" class="b-btn">編集画面へ戻る</a>
                            </div>
                        </div>
                        <div class="in-box">
                            <div class="iin-box" style="display: flex; align-items: center;">
                                <div class="t-box box01">名前</div>
                                <div class="t-box box02" style="font-size: 10px; text-align: left; padding-left: 10px; padding-right: 10px;">フォロワー数 / YouTubeチャンネル登録者数</div>
                                <div class="t-box box03">NET</div>
                                <div class="t-box box04">GROSS</div>
                            </div>
                        </div>
                        <ul class="l-box">
                            <?php foreach ($talents as $index => $item) { ?>
                            <li>
                                <div class="t-box box01">
                                    <div><img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="influencer image"></div>
                                    <?=empty($item["name"]) ? '名前ない' : $item["name"]?>
                                </div>
                                <div class="t-box box02 value-n">
                                    <p>
                                        <?=number_format($item["it_fw"], 0, '.', ',')?><span class="unit">人</span>
                                    </p>
                                </div>
                                <div class="t-box box03 value-n">
                                    <p><span class="unit">￥</span></p>
                                    <input type="number" min="0" max="2147483647" data-price-type="net" data-campaign-id="<?=$campaign["id"]?>" data-talent-id="<?=$item["id"]?>" class="js-update-price" name="net_price" value="<?=$tcampaign[$index]["net_price"]?>">
                                </div>
                                <div class="t-box box04 value-n">
                                    <p><span class="unit">￥</span></p>
                                    <input type="number" min="0" max="2147483647" data-price-type="gross" data-campaign-id="<?=$campaign["id"]?>" data-talent-id="<?=$item["id"]?>" class="js-update-price" name="gross_price" value="<?=$tcampaign[$index]["gross_price"]?>">
                                </div>
                            </li>
                            <?php } ?>
                        </ul>
                        <div class="total">
                            <div class="t-box box01">合計</div>
                            <div class="t-box box02 value-n"><p><?=$sum_fw?><span class="unit">人</span></p></div>
                            <div class="t-box box03 value-n"><p><span class="js-total-net-price"><span class="unit">￥</span><span id="net_price"><?=$sum_net_price?></span></span></p></div>
                            <div class="t-box box04 value-n"><p><span class="js-total-gross-price"><span class="unit">￥</span><span id="gross_price"><?=$sum_gross_price?></span></span></p></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
<script src="<?=asset_url()?>scripts/campaignprice.js"></script>
<link href="<?=asset_url()?>/css/campaign.css" rel="stylesheet" type="text/css" />

</body>
</html>