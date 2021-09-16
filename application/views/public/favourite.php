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
                                            <div class="clipboard-btn" data-clipboard-target="#public_url_<?=$item['id']?>" title="クリップボードにURLをコピーします"><span class="fa fa-fw fa-copy" aria-hidden="true" style="margin-top: 3px;"></span></div>
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
                                            <div class="clipboard-btn" data-clipboard-target="#public_edit_url_<?=$item['id']?>" title="クリップボードにURLをコピーします"><span class="fa fa-fw fa-copy" aria-hidden="true" style="margin-top: 3px;"></span></div>
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
<link href="<?=asset_url()?>/css/campaign.css" rel="stylesheet" type="text/css"/>

</body>
</html>