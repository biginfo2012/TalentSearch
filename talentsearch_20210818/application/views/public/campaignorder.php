<body>
<main class="bg_color">
    <div class="contents">
        <div class="main influencer_group sort">
            <div class="wrap-mc">

                <div class="c-box">
                    <div class="ch-box">
                        <h2><?=$campaign["campaign_name"]?></h2>
                    </div>
                    <div class="cb-box">
                        <div class="p-wrap">
                            <div class="bb-box">
                                <a href="<?=base_url()."talents/campaignpreview/".$campaign['id']?>" class="pre-btn" target="_blank">プレビュー</a>
                                <a href="<?=base_url()."talents/viewcampaign/".$campaign['id']?>" class="b-btn">編集画面へ戻る</a>
                                <a href="#" class="b-btn js-sort-multi js-sort-multi-top" data-group-id="1551" data-sort-process="top" data-page="" style="display: none;">すべて最上へ</a>
                                <a href="#" class="b-btn js-sort-multi js-sort-multi-bottom" data-group-id="1551" data-sort-process="bottom" data-page="" style="display: none;">すべて最下へ</a>
                            </div>
                        </div>
                        <div class="in-box">
                            <div class="iin-box" style="display: flex; align-items: center;">
                                <div class="t-box box01">
                                    <span class="sort-check-box" title="すべてのチェックを外す" rel="tooltip"><input class="js-sort-check-all-clear" type="checkbox"></span>
                                    <span>名前</span>
                                </div>
                                <div class="t-box box02" style="font-size: 10px; text-align: left; padding-left: 10px; padding-right: 10px;">フォロワー数 / YouTubeチャンネル登録者数</div>
                                <div class="t-box box03">並べ替え</div>
                            </div>
                        </div>
                        <form method="post" id="kt_search_form">
                            <input type="hidden" name="campaign_id" value="<?=$campaign["id"]?>">
                        </form>
                        <ul class="l-box" id="talentorder">

                        </ul>

                    </div>
                </div>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
<script src="<?=asset_url()?>scripts/campaignorder.js"></script>
<link href="<?=asset_url()?>/css/campaign.css" rel="stylesheet" type="text/css" />

</body>
</html>