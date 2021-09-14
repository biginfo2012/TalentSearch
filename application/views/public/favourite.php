<body>
<main class="bg_color">
    <div class="contents">
        <div class="main influencer_group">
            <div class="wrap-mc">
                <div class="page-header">
                    <form class="form-inline w-100" action="<?=base_url()?>talents/addcampaign" method="post">
                        <div class="panel panel-default w-100">
                            <div class="form-group">
                                <input type="text" class="form-control" id="title" name="title"
                                       placeholder="キャンペーンリストタイトル" value="" required>
                            </div>
                            <div class="form-group">
                                <input type="radio" name="account_type" id="instagram" value="instagram"
                                       checked=""><label for="instagram">Instagram</label>
                                <input type="radio" name="account_type" id="youtube" value="youtube"><label
                                        for="youtube">YouTube</label>
                                <input type="radio" name="account_type" id="twitter" value="twitter"><label
                                        for="twitter">Twitter</label>
                                <i class="icon-help-c" rel="tooltip"
                                   title="キャンペーンに利用する主たるSNSを選択してください。選択したSNS以外のアカウントを使用しているインフルエンサーの追加も可能です"></i>
                            </div>
                            <button type="submit" class="btn">キャンペーンリスト作成</button>
                        </div>
                    </form>
                </div>
                <div class="search-area">
                    <form class="form-inline" action="<?=base_url()."talents/favourite"?>" method="post">
                        <input type="text" class="search-keyword" id="search_keyword" name="search_keyword"
                               placeholder="キーワードを入力 ( 部分一致 )" value="<?=isset($keyword) ? $keyword : ''?>">
                        <button type="submit" class="btn btn-search">検索</button>
                        <p class="search-keyword-description">※&nbsp;タイトル&nbsp;/&nbsp;宛先企業名&nbsp;/&nbsp;宛先担当者名</p>
                    </form>
                </div>
                <ul class="wrap-group-list pl-0">
                    <?php foreach ($campaign as $item) { ?>
                    <li>
                        <a class="list-ttl js-open-influencer-group-list" href="<?=base_url()."talents/viewcampaign/".$item['id']?>">
                            <div class="txt-flex">
                                <h2>
                                    <span>
                                       <img src="<?=asset_url()?>logos/<?=$item["type"]?>.png" alt="">
                                    </span>
                                    <span>
                                        <?php if(isset($item['campaign_belong']) || isset($item['campaign_company'])) { ?>
                                            <div class="txt-to">
                                              <p>
                                                <span><?= $item['campaign_company'] ?></span>&nbsp;&nbsp;
                                                <span><?= $item['campaign_belong'] ?></span>
                                              </p>
                                            </div>
                                        <?php } ?>

                                        <?=$item["campaign_name"]?>
                                    </span>
                                </h2>
                                <p class="candidate">登録数:<span class="candidate-number"><?php foreach ($campaign_info as $key => $ttem) {
                                            if($key == $item['id']){ echo $ttem["cnt_talent"];}
                                        }?></span>人 / 合計:<span
                                            class="candidate-number"><?php foreach ($campaign_info as $key => $ttem) {
                                            if($key == $item['id']){ echo $ttem["sum_fw"];}
                                        }?></span>人</p>
                            </div>
                        </a>
                        <div class="list-container">
                            <div class="form-inline">
                                <div class="pull-right">
                                    <a class="btn" href="<?=base_url()."talents/campaignpreview/".$item['id']?>" target="_blank">プレビュー</a>
                                    <a class="btn" href="<?=base_url()."talents/viewcampaign/".$item['id']?>">編集</a>
                                    <button class="btn js-copy-group" data-group-id="<?=$item['id']?>">コピー</button>
                                    <button class="btn js-delete-group" data-group-id="<?=$item['id']?>">削除</button>
                                </div>
                            </div>
                            <div class="form-inline">
                                <div class="pull-right">
                                    <?php if(!empty($item['public_view_date'])){ ?>
                                        <div class="input-group">
                                            <input type="text" class="public-access-url-text-box" id="public_url_<?=$item['id']?>" name="public_url" value="http://tokyoeropedia.mixh.jp<?=base_url()."talents/publicview/".$item['id']?>" readonly="">
                                            <div class="clipboard-btn" data-clipboard-target="#public_url_<?=$item['id']?>" rel="tooltip" title="クリップボードにURLをコピーします"><span class="fa fa-fw fa-copy" aria-hidden="true" style="margin-top: 3px;"></span></div>
                                            <a class="add-on-link-btn" href="http://tokyoeropedia.mixh.jp<?=base_url()."talents/publicview/".$item['id']?>" target="_blank">外部参照用URL&nbsp;(&nbsp;<?=$item['public_view_date']?>&nbsp;期限&nbsp;)</a>
                                        </div>
                                    <?php } else { ?>
                                        <a class="btn btn-multi js-generate-group-public-access-url" data-group-id="<?=$item['id']?>"
                                           data-clipboard-target="generate_url_5" rel="tooltip"
                                           title="外部参照URLを発行します。<br>URLを発行・共有することにより、<br>他者がリストを参照できるようになります。<br>(アカウント作成・ログイン不要)<br><br>アクセス可能な期間は発行から１ヶ月です。<br>(期限が切れた場合は再発行可能)">外部参照URLを再発行</a>
                                    <?php } ?>

                                    <?php if(!empty($item['public_edit_date'])) { ?>
                                        <div class="input-group">
                                            <input type="text" class="public-access-url-text-box" id="public_edit_url_<?=$item['id']?>" name="public_edit_url" value="http://tokyoeropedia.mixh.jp<?=base_url()."talents/publicedit/".$item['id']?>" readonly="">
                                            <div class="clipboard-btn" data-clipboard-target="#public_edit_url_<?=$item['id']?>" rel="tooltip" title="クリップボードにURLをコピーします"><span class="fa fa-fw fa-copy" aria-hidden="true" style="margin-top: 3px;"></span></div>
                                            <a class="add-on-link-btn-disabled">外部編集用URL&nbsp;(&nbsp;<?=$item['public_edit_date']?>&nbsp;期限&nbsp;)</a>
                                        </div>
                                    <?php } else { ?>
                                        <a class="btn btn-multi js-generate-group-public-access-edit-url"
                                           data-group-id="<?=$item['id']?>" data-clipboard-target="generate_edit_url_5" rel="tooltip"
                                           title="外部編集URLを発行します。<br>URLを発行・共有することにより、<br>他者がリストを編集できるようになります。<br>(アカウント作成・ログイン不要)<br><br>アクセス可能な期間は発行から１ヶ月です。<br>(期限が切れた場合は再発行可能)">外部編集URLを再発行</a>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="subnav">
                                <ul class="columns" style="display: flex; align-items: center;">
                                    <li class="name">名前</li>
                                    <li class="fans"
                                        style="font-size: 10px; text-align: left; padding-left: 10px; padding-right: 10px;">
                                        フォロワー数 / YouTubeチャンネル登録者数 (最大)
                                    </li>
                                    <li class="glengagement" rel="tooltip" href=""
                                        title="エンゲージメント率。<br>フォロワー数 / YouTubeチャンネル登録者数に対するエンゲージメント数の割合。">
                                        エンゲージメント率&nbsp;&nbsp;<i class="icon-help-c"></i>
                                    </li>
                                    <li class="networks">リンク</li>
                                </ul>
                            </div>
                            <ul class="list-influencer">
                                <?php foreach ($tcampaign as $key => $ttem) {
                                    if($key == $item['id']){
                                        foreach($ttem as $ittem){?>
                                        <li>
                                            <div class="wrap-influencer-detail columns">
                                                <div class=" level thumb name">
                                                    <a href="<?=base_url()?>talents/view/<?=$ittem["id"]?>" class="level" target="_blank">
                                                        <div class="thumb_resize">
                                                            <img src="<?= empty($ittem['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $ittem['it_img'] ?>" alt="influencer image" onerror="this.src='/assets/images/common/no_image.png';" style="width: auto; height: 100%; max-width: none;">
                                                        </div>
                                                        <p class="level-item"><?=empty($ittem["name"]) ? '名前ない' : $ittem["name"]?></p>
                                                    </a>
                                                </div>
                                                <div class="level fans value-n">
                                                    <p class="level-item" rel="tooltip" title="instagram:&nbsp;344,718<br/>">
                                                        <?=number_format($ittem["it_fw"], 0, '.', ',')?><span class="unit">人</span>
                                                    </p>
                                                </div>
                                                <div class="level glengagement value-n">
                                                    <p class="level-item">
                                                        <?=$ittem["eg_rate"]?><span class="unit">%</span>
                                                    </p>
                                                </div>
                                                <div class="level networks" style="width: 240px;">
                                                    <ul class="level-item" style="width: 240px;">
                                                        <li>
                                                            <?php if(empty($ittem['it_url'])) { ?>
                                                                <span class="instagram disable"></span>
                                                            <?php } else { ?>
                                                                <a href="<?=$ittem["it_url"]?>" target="_blank"><span class="instagram"></span></a>
                                                            <?php } ?>
                                                        </li>
                                                        <li>
                                                            <?php if(empty($ittem['tw_url'])) { ?>
                                                                <span class="twitter disable"></span>
                                                            <?php } else { ?>
                                                                <a href="<?=$ittem["tw_url"]?>" target="_blank"><span class="twitter"></span></a>
                                                            <?php } ?>
                                                        </li>
                                                        <li>
                                                            <?php if(empty($ittem['yt_url'])) { ?>
                                                                <span class="youtube disable"></span>
                                                            <?php } else { ?>
                                                                <a href="<?=$ittem["yt_url"]?>" target="_blank"><span class="youtube"></span></a>
                                                            <?php } ?>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <?php }?>
                                    <?php }?>
                                <?php }?>

                            </ul>
                        </div>
                    </li>
                    <?php }?>
                </ul>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->

<script src="<?= asset_url() ?>scripts/favourite.js"></script>
<link href="<?=asset_url()?>/css/campaign.css" rel="stylesheet" type="text/css" />
<!--<style type="text/css">-->
<!--    .contents {-->
<!--        background-color: #f6f6f6;-->
<!--        position: relative;-->
<!--        height: 100%;-->
<!--        padding-top: 61px;-->
<!--    }-->
<!--    .contents .main {-->
<!--        position: relative;-->
<!--        z-index: 88;-->
<!--    }-->
<!--    .contents .main .wrap-mc {-->
<!--        max-width: 1050px;-->
<!--        margin: 0 auto;-->
<!--        padding: 40px 30px 60px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc {-->
<!--        margin-top: 60px;-->
<!--        margin-bottom: 80px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header {-->
<!--        padding: 18px;-->
<!--        margin-bottom: 30px;-->
<!--        border: 1px solid #eeeeee;-->
<!--        background-color: #ffffff;-->
<!--        border-radius: 6px;-->
<!--        overflow: hidden;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel {-->
<!--        border-style: none;-->
<!--    }-->
<!---->
<!--    .panel {-->
<!--        border: 1px solid #d3d6db;-->
<!--        border-radius: 5px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group {-->
<!--        position: relative;-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--        margin-bottom: 6px;-->
<!--        font-size: 1.1rem;-->
<!--        font-weight: normal;-->
<!--        letter-spacing: .4;-->
<!--        color: #aaaaaa;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group .form-control {-->
<!--        vertical-align: top;-->
<!--        -webkit-box-align: center;-->
<!--        -ms-flex-align: center;-->
<!--        align-items: center;-->
<!--        border: 1px solid #d3d6db;-->
<!--        border-radius: 3px;-->
<!--        display: -webkit-inline-box;-->
<!--        display: -ms-inline-flexbox;-->
<!--        display: inline-flex;-->
<!--        font-size: 14px;-->
<!--        line-height: 1.6;-->
<!--        color: #222324;-->
<!--        width: 100%;-->
<!--        max-height: 400px;-->
<!--        height: auto;-->
<!--        padding: 6px 8px;-->
<!--        background-color: #f8f8f8;-->
<!--        position: relative;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group input {-->
<!--        margin-right: 6px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group input:checked+label {-->
<!--        font-weight: bold;-->
<!--        letter-spacing: 0;-->
<!--        color: #444444;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group .icon-help-c {-->
<!--        position: relative;-->
<!--        display: inline-block;-->
<!--        width: 14px;-->
<!--        height: 14px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel .form-group .icon-help-c:before {-->
<!--        position: absolute;-->
<!--        content: "\e8fd";-->
<!--        left: 50%;-->
<!--        top: 50%;-->
<!--        transform: translate(-50%, -50%);-->
<!--        font-size: 14px;-->
<!--        font-weight: normal;-->
<!--        z-index: 9;-->
<!--        color: #444444;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .page-header .panel button {-->
<!--        font-size: 1.2rem;-->
<!--        font-weight: bold;-->
<!--        color: #fff;-->
<!--        padding: 6px 16px 8px;-->
<!--        margin-top: 10px;-->
<!--        border-radius: 4px;-->
<!--        background-color: #447db2;-->
<!--        border-style: none;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .btn {-->
<!--        padding: 3px 10px;-->
<!--        margin-bottom: 0;-->
<!--        margin-right: 4px;-->
<!--        font-size: 1.2rem;-->
<!--        font-weight: bold;-->
<!--        line-height: 1.42857143;-->
<!--        color: #444444;-->
<!--        text-align: center;-->
<!--        vertical-align: middle;-->
<!--        cursor: pointer;-->
<!--        background-color: #eeeeee;-->
<!--        background-image: none;-->
<!--        border: 1px solid #dddddd;-->
<!--        border-radius: 4px;-->
<!--        -webkit-transition: all .2s ease-in-out;-->
<!--        transition: all .2s ease-in-out;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .search-area {-->
<!--        text-align: right;-->
<!--        margin-bottom: 8px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .search-area .search-keyword {-->
<!--        border: 1px solid #d3d6db;-->
<!--        border-radius: 3px;-->
<!--        font-size: 1.4rem;-->
<!--        line-height: 1.4;-->
<!--        width: 28%;-->
<!--        max-height: 400px;-->
<!--        height: auto;-->
<!--        padding: 6px 8px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .btn.btn-multi {-->
<!--        color: #fff;-->
<!--        background-color: #447db2;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .search-area .btn-search {-->
<!--        font-size: 1.4rem;-->
<!--        font-weight: bold;-->
<!--        color: #fff;-->
<!--        padding: 6px 16px 6px;-->
<!--        border-radius: 4px;-->
<!--        background-color: #447db2;-->
<!--        border-style: none;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .btn:hover {-->
<!--        background-color: #5b6980;-->
<!--        color: #ffffff;-->
<!--        border-color: #5b6980;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .form-inline .pull-right .btn:last-child {-->
<!--        margin-right: 0;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .search-area p.search-keyword-description {-->
<!--        font-size: 1.2rem;-->
<!--        margin-top: 3px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list>li {-->
<!--        background-color: #ffffff;-->
<!--        border-radius: 6px;-->
<!--        overflow: hidden;-->
<!--        margin-bottom: 8px;-->
<!--        border: 1px solid #eeeeee;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .subnav ul li {-->
<!--        -webkit-box-flex: 1;-->
<!--        -ms-flex-positive: 1;-->
<!--        flex-grow: 1;-->
<!--        position: relative;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc .subnav ul li:first-child {-->
<!--        border-style: none;-->
<!--    }-->
<!--    .contents .main .wrap-mc .subnav ul li {-->
<!--        border-left: 1px solid #fff;-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: 600;-->
<!--        color: #ffffff;-->
<!--        text-align: center;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .name {-->
<!--        width: 48%;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .fans {-->
<!--        width: 34%;-->
<!--        justify-content: flex-end;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .glengagement {-->
<!--        width: 25%;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .glengagement .icon-help-c {-->
<!--        position: relative !important;-->
<!--        top: auto !important;-->
<!--        left: auto !important;-->
<!--        margin-left: 2px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .networks {-->
<!--        max-width: 200px;-->
<!--        width: 100%;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li:nth-child(2n+1) {-->
<!--        background-color: #ffffff;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li {-->
<!--        position: relative;-->
<!--        -webkit-transition-duration: 0.2s;-->
<!--        transition-duration: 0.2s;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail {-->
<!--        position: relative;-->
<!--        padding: 8px;-->
<!--        -webkit-transform: translateZ(0);-->
<!--        transform: translateZ(0);-->
<!--        box-shadow: 0 0 1px transparent;-->
<!--        -webkit-backface-visibility: hidden;-->
<!--        backface-visibility: hidden;-->
<!--        -moz-osx-font-smoothing: grayscale;-->
<!--        -webkit-transition-duration: 0.2s;-->
<!--        transition-duration: 0.2s;-->
<!--        -webkit-transition-property: box-shadow;-->
<!--        transition-property: box-shadow;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc ul.list-influencer li div.columns {-->
<!--        position: relative;-->
<!--        -webkit-transform: translateZ(0);-->
<!--        transform: translateZ(0);-->
<!--        box-shadow: 0 0 1px transparent;-->
<!--        -webkit-backface-visibility: hidden;-->
<!--        backface-visibility: hidden;-->
<!--        -moz-osx-font-smoothing: grayscale;-->
<!--        -webkit-transition-duration: 0.2s;-->
<!--        transition-duration: 0.2s;-->
<!--        -webkit-transition-property: box-shadow;-->
<!--        transition-property: box-shadow;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail>div {-->
<!--        -webkit-box-flex: 1;-->
<!--        -ms-flex-positive: 1;-->
<!--        flex-grow: 1;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc ul.list-influencer li div.columns>div {-->
<!--        padding: 8px;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li .level {-->
<!--        margin-bottom: 0;-->
<!--    }-->
<!--    .level {-->
<!--        align-items: center;-->
<!--        justify-content: space-between;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .thumb a {-->
<!--        color: #007ac7;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .thumb .thumb_resize {-->
<!--        position: relative;-->
<!--        min-width: 40px;-->
<!--        max-width: 40px;-->
<!--        width: 100%;-->
<!--        height: 40px;-->
<!--        margin-right: 8px;-->
<!--        border-radius: 50%;-->
<!--        overflow: hidden;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .thumb img {-->
<!--        width: 100%;-->
<!--        height: auto;-->
<!--        position: absolute;-->
<!--        top: 50%;-->
<!--        left: 50%;-->
<!--        transform: translate(-50%, -50%);-->
<!--    }-->
<!---->
<!--    .level img {-->
<!--        display: inline-block;-->
<!--        vertical-align: top;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .name p {-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: normal;-->
<!--        word-break: break-all;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .fans {-->
<!--        width: 34%;-->
<!--        justify-content: flex-end;-->
<!--    }-->
<!--    .value-n p {-->
<!--        font-size: 2.0rem;-->
<!--        font-weight: 600;-->
<!--        color: #003569;-->
<!--        text-align: right;-->
<!--    }-->
<!--    .value-n .unit {-->
<!--        font-size: 1.2rem;-->
<!--        font-weight: 400;-->
<!--        margin-left: 3px;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li div.columns .networks {-->
<!--        flex-basis: 13%;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .glengagement {-->
<!--        width: 25%;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .fans {-->
<!--        width: 34%;-->
<!--        justify-content: flex-end;-->
<!--    }-->
<!--    .level {-->
<!--        display: flex;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .name {-->
<!--        width: 48%;-->
<!--    }-->
<!--    .columns:not(.is-desktop) {-->
<!--        display: flex;-->
<!--    }-->
<!--    ul {-->
<!--        list-style-type: none;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl {-->
<!--        display: inline-block;-->
<!--        width: 100%;-->
<!--        height: auto;-->
<!--        padding: 12px 12px 12px 10px;-->
<!--        position: relative;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex {-->
<!--        display: -webkit-box;-->
<!--        display: -ms-flexbox;-->
<!--        display: flex;-->
<!--        -webkit-box-pack: justify;-->
<!--        -ms-flex-pack: justify;-->
<!--        justify-content: space-between;-->
<!--        -webkit-box-align: end;-->
<!--        -ms-flex-align: end;-->
<!--        align-items: flex-end;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex h2 {-->
<!--        font-size: 2.0rem;-->
<!--        font-weight: bold;-->
<!--        line-height: 1.2;-->
<!--        letter-spacing: 0;-->
<!--        display: -webkit-box;-->
<!--        display: -ms-flexbox;-->
<!--        display: flex;-->
<!--        flex: 1;-->
<!--        -webkit-box-align: center;-->
<!--        -ms-flex-align: center;-->
<!--        align-items: center;-->
<!--        margin-right: 10px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex h2 span {-->
<!--        display: inline-block;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex h2 img {-->
<!--        max-width: 24px;-->
<!--        margin-right: 10px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-to {-->
<!--        margin-top: 3px;-->
<!--        margin-bottom: 5px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-to p {-->
<!--        font-size: 1.4rem;-->
<!--        font-weight: bold;-->
<!--        line-height: 1.2;-->
<!--        letter-spacing: 0;-->
<!--        color: #3c6a96;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex h2 span {-->
<!--        display: inline-block;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex .candidate {-->
<!--        font-size: 1.2rem;-->
<!--        font-weight: bold;-->
<!--        color: #888888;-->
<!--        text-decoration: underline;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-ttl .txt-flex .candidate .candidate-number {-->
<!--        color: #003569;-->
<!--        font-size: 1.6rem;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container {-->
<!--        display: none;-->
<!--        position: relative;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .form-inline {-->
<!--        margin-bottom: 10px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .form-inline .pull-right {-->
<!--        display: -webkit-box;-->
<!--        display: -ms-flexbox;-->
<!--        display: flex;-->
<!--        justify-content: flex-end;-->
<!--        padding-left: 12px;-->
<!--        padding-right: 12px;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .subnav {-->
<!--        padding: 8px;-->
<!--        border-radius: 0;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc .subnav {-->
<!--        background-color: #39475d;-->
<!--        padding-top: 10px;-->
<!--        padding-bottom: 10px;-->
<!--        border-radius: 6px 6px 0 0;-->
<!--    }-->
<!---->
<!--</style>-->
<script type="text/javascript">

</script>

</body>
</html>