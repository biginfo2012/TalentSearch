<body>
<main class="bg_color">
    <div class="contents">
        <div class="main influencer_group list">
            <div class="wrap-mc">
                <div class="page-header">
                    <form class="form-inline w-100" action="<?=base_url()?>talents/modifycampaign" method="post">
                        <div class="panel panel-default w-100">
                            <div class="panel-body">
                                <input type="hidden" name="campaign_id" value="<?=isset($campaign['id']) ? $campaign['id'] : ''?>">
                                <div class="form-group">
                                    <h2>タイトル</h2>
                                    <input type="text" class="form-control" id="title" name="campaign_name" placeholder="キャンペーンのタイトル  例: 「○○ 新商品 PR施策」" value="<?=isset($campaign['campaign_name']) ? $campaign['campaign_name'] : ''?>">
                                </div>
                                <div class="form-group">
                                    <h2>宛先企業名</h2>
                                    <input type="text" class="form-control" id="destination_company_name" name="campaign_company" placeholder="リスト提供先企業名  例: 「○○ 株式会社」" value="<?=isset($campaign['campaign_company']) ? $campaign['campaign_company'] : ''?>">
                                </div>
                                <div class="form-group">
                                    <h2>宛先担当者名</h2>
                                    <input type="text" class="form-control" id="destination_name" name="campaign_belong" placeholder="担当者名  例: 「○○ 様」" value="<?=isset($campaign['campaign_belong']) ? $campaign['campaign_belong'] : ''?>">
                                </div>
                                <div class="form-group">
                                    <h2>コメント</h2>
                                    <textarea class="form-control comment-area" id="comment" name="campaign_comment" placeholder="キャンペーンリストのコメント" rows="3"><?=isset($campaign['campaign_comment']) ? $campaign['campaign_comment'] : ''?></textarea>
                                </div>
                                <input type="hidden" id="group_id" name="group_id" value="6105">
                                <button type="submit" class="btn btn-default">更新</button>
                            </div>
                        </div>
                    </form>
                    <form method="post" action="<?=base_url()?>talents/userlist" id="kt_search_form">
                        <input type="hidden" id="page" name="pagination[page]" value="<?=$pagination["page"]?>">
                        <input type="hidden" id="per_page" name="per_page" value="<?=$pagination["perpage"]?>">
                        <input type="hidden" id="campaign_id" name="campaign_id" value="<?=isset($campaign['id']) ? $campaign['id'] : ''?>">
                    </form>
                </div>
                <div class="wrap-body">
                    <section class="candidate-list">
                        <div class="wrap-group-list">
                            <div class="list-container">
                                <div class="subnav">
                                    <ul class="columns" style="display: flex; align-items: center;">
                                        <li class="name">
                                            <input type="checkbox" id="all_check" class="bulk-add-btn js-update-confirm-submit js-bulk-add-group-list" rel="tooltip" title="リストに追加する" data-group-id="2019" data-search-count="65341">名前
                                        </li>
                                        <li class="fans" style="text-align: left; padding-left: 10px; padding-right: 10px;">
                                            <a class="js-sort-link js-update-confirm-submit" href="/client/influencer_group/2019?is_new_search=true&amp;account_type=InstagramAccount&amp;sort_key=fan_count&amp;sort_order=desc">
                                                <span style="font-size: 8px;">
                                                  フォロワー数
                                                  <br>/ YouTubeチャンネル登録者数
                                                </span>
                                            </a>
                                        </li>
                                        <li class="glengagement">
                                            <a class="js-sort-link js-update-confirm-submit" rel="tooltip" href="/client/influencer_group/2019?is_new_search=true&amp;account_type=InstagramAccount&amp;sort_key=engagement_pect&amp;sort_order=desc" title="エンゲージメント率。<br>フォロワー数 / YouTubeチャンネル登録者数に対するエンゲージメント数の割合。">
                                                エンゲージメント率
                                            </a>
                                        </li>
                                        <li class="networks">リンク</li>
                                    </ul>
                                </div>
                                <ul id="search_list" class="list-influencer">

                                </ul>
                                <div class="infinite-scroll-loading-container"></div>
                            </div>
                        </div>
                    </section>
                    <section class="search-list">
                        <div class="wrap-group-list">
                            <div class="page-header bulk-add">
<!--                                <form action="/client/influencer_group/6105/url_path_id_add" method="post">-->
                                    <div class="panel panel-default">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="add_account_url_path_id" id="sns_id" placeholder="SNSのユーザーIDをから追加" value="">
                                        </div>
                                        <div class="form-group">
                                            <input type="radio" name="add_account_account_type" id="instagram" value="instagram" checked=""><label for="instagram">Instagram</label>
                                            <input type="radio" name="add_account_account_type" id="youtube" value="youtube"><label for="youtube">YouTube</label>
                                            <input type="radio" name="add_account_account_type" id="twitter" value="twitter"><label for="twitter">Twitter</label>
                                        </div>
                                        <div class="button-container">
                                            <div class="add-list">
                                                <input type="hidden" id="group_id" name="group_id" value="6105">
                                                <input type="hidden" id="open_con" name="open_con" value="false">
                                                <input type="submit" id="add_btn" class="btn js-user-id-add-influencer-button js-update-confirm-submit" value="追加">
                                            </div>
                                            <div class="preview">
                                                <a href="<?=base_url()."talents/campaignpreview/".$campaign['id']?>" class="btn" target="_blank">プレビュー</a>
                                            </div>
                                            <div class="sort">
                                                <a href="<?=base_url()."talents/campaignorder/".$campaign['id']?>" class="btn js-sort-edit-page-link-button js-update-confirm-submit" onclick="sessionStorage.removeItem('groupListSortIds');">並び順を変更する</a>
                                            </div>
                                            <div class="kakaku">
                                                <a href="<?=base_url()."talents/campaignprice/".$campaign['id']?>" class="btn js-price-edit-page-link-button js-update-confirm-submit">価格を入力する</a>
                                            </div>
                                        </div>
                                    </div>
<!--                                </form>-->
                            </div>
                            <div class="list-container">
                                <div class="subnav">
                                    <ul class="columns" style="display: flex; align-items: center;">
                                        <li class="name">名前</li>
                                        <li class="fans" style="font-size: 8px; text-align: left; padding-left: 10px; padding-right: 10px;">
                                            フォロワー数 / YouTubeチャンネル登録者数
                                        </li>
                                        <li class="networks">リンク</li>
                                        <li class="comment">コメント</li>
                                    </ul>
                                </div>
                                <ul id="talent_list" class="list-influencer">

                                </ul>
                                <div class="pagenation-container">

                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="candidate-layer"></div>
                    <div class="box-candidate">
                        <div class="inner-candidate">
                            <p class="candidate">
                                登録数:&nbsp;<span id="group_list_influencer_count" class="candidate-number">10</span>人<br>
                                合計:&nbsp;<span id="group_list_total_fan_count" class="candidate-number">185,551,713</span>人
                            </p>
                        </div>
                    </div>
                    <div class="box-open-switch">
                        <a class="switch-con">
                            <div class="hamburger-box">
                                <div class="hamburger-inner"></div>
                            </div>
                            <p>
                                <span>Influencer List</span>
                                <span class="jp-txt">選択済みインフルエンサーリスト</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->

<script src="<?= asset_url() ?>scripts/favourite.js"></script>
<script src="<?=asset_url()?>scripts/viewcampaign.js"></script>
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
<!--    .influencer_group .wrap-mc .search-area .btn-search {-->
<!--        font-size: 1.4rem;-->
<!--        font-weight: bold;-->
<!--        color: #fff;-->
<!--        padding: 6px 16px 6px;-->
<!--        border-radius: 4px;-->
<!--        background-color: #447db2;-->
<!--        border-style: none;-->
<!--    }-->
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
<!--    .influencer_group.list .wrap-mc .wrap-body .candidate-list .wrap-group-list .list-container {-->
<!--        border: 1px solid #eeeeee;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .list-container {-->
<!--        display: block;-->
<!--        border-radius: 6px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container {-->
<!--        display: block;-->
<!--        position: relative;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-body .candidate-list .wrap-group-list .list-container .subnav {-->
<!--        border-radius: 6px 6px 0 0;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .subnav {-->
<!--        padding: 8px;-->
<!--        border-radius: 0;-->
<!--    }-->
<!--    .contents .main .wrap-mc .subnav {-->
<!--        background-color: #39475d;-->
<!--        padding-top: 10px;-->
<!--        padding-bottom: 10px;-->
<!--        border-radius: 6px 6px 0 0;-->
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
<!--    .influencer_group.list .wrap-mc .wrap-group-list .name {-->
<!--        width: 33%;-->
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
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .subnav ul li .bulk-add-btn {-->
<!--        position: absolute;-->
<!--        width: 14px;-->
<!--        height: 14px;-->
<!--        left: 0;-->
<!--        top: 50%;-->
<!--        transform: translateY(-50%);-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .subnav ul li {-->
<!--        -webkit-box-flex: 1;-->
<!--        -ms-flex-positive: 1;-->
<!--        flex-grow: 1;-->
<!--        position: relative;-->
<!--    }-->
<!---->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .fans {-->
<!--        width: 22%;-->
<!--    }-->
<!--    .contents .main .wrap-mc .subnav ul li {-->
<!--        border-left: 1px solid #fff;-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: 600;-->
<!--        color: #ffffff;-->
<!--        text-align: center;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .fans {-->
<!--        width: 34%;-->
<!--        justify-content: flex-end;-->
<!--    }-->
<!--    .contents .main .wrap-mc .subnav ul li a {-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: 600;-->
<!--        color: #ffffff;-->
<!--        text-align: center;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .glengagement {-->
<!--        width: 25%;-->
<!--    }-->
<!--    .contents .main .wrap-mc .subnav ul li a {-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: 600;-->
<!--        color: #ffffff;-->
<!--        text-align: center;-->
<!--    }-->
<!--    #search_list {-->
<!--        position: relative;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .networks {-->
<!--        max-width: 100px;-->
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
<!--    .influencer_group.list .wrap-mc .wrap-group-list .list-container .list-influencer>li .w-bookmark {-->
<!--        padding-left: 8px;-->
<!--        -webkit-box-align: center;-->
<!--        -ms-flex-align: center;-->
<!--        align-items: center;-->
<!--        display: -webkit-box;-->
<!--        display: -ms-flexbox;-->
<!--        display: flex;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail>div {-->
<!--        -webkit-box-flex: 1;-->
<!--        -ms-flex-positive: 1;-->
<!--        flex-grow: 1;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li div.columns>div {-->
<!--        padding: 8px;-->
<!--    }-->
<!--    .w-bookmark {-->
<!--        position: absolute;-->
<!--        z-index: 100;-->
<!--        width: auto;-->
<!--        height: 100%;-->
<!--        top: 0;-->
<!--        left: 0;-->
<!--        padding-left: 10px;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .name {-->
<!--        width: 33%;-->
<!--    }-->
<!---->
<!--    ul {-->
<!--        list-style-type: none;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc .subnav ul li {-->
<!--        border-left: 1px solid #fff;-->
<!--        font-size: 1.3rem;-->
<!--        font-weight: 600;-->
<!--        color: #ffffff;-->
<!--        text-align: center;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .networks {-->
<!--        max-width: 100px;-->
<!--        width: 100%;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .list-container .list-influencer>li .thumb {-->
<!--        padding-left: 20px;-->
<!--    }-->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .thumb a {-->
<!--        color: #007ac7;-->
<!--    }-->
<!---->
<!--    .contents .main .wrap-mc ul.list-influencer li .level {-->
<!--        margin-bottom: 0;-->
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
<!--    input[type="checkbox"], input[type="radio"] {-->
<!--        vertical-align: baseline;-->
<!--    }-->
<!---->
<!--    .influencer_group .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail>div {-->
<!--        -webkit-box-flex: 1;-->
<!--        -ms-flex-positive: 1;-->
<!--        flex-grow: 1;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li div.columns>div {-->
<!--        padding: 8px;-->
<!--    }-->
<!--    .contents .main .wrap-mc ul.list-influencer li .level {-->
<!--        margin-bottom: 0;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .name {-->
<!--        width: 33%;-->
<!--    }-->
<!--    .level {-->
<!--        align-items: center;-->
<!--        justify-content: space-between;-->
<!--    }-->
<!--    .columns:not(.is-desktop) {-->
<!--        display: flex;-->
<!--    }-->
<!--    .level>.level-item:not(.is-narrow) {-->
<!--        flex-grow: 1;-->
<!--    }-->
<!--    .influencer_group.list .wrap-mc .wrap-group-list .list-container .list-influencer>li .wrap-influencer-detail .value-n p {-->
<!--        font-size: 1.9rem;-->
<!--    }-->
<!--    .value-n p {-->
<!--        font-size: 2.0rem;-->
<!--        font-weight: 600;-->
<!--        color: #003569;-->
<!--        text-align: right;-->
<!--    }-->
<!--</style>-->

</body>
</html>