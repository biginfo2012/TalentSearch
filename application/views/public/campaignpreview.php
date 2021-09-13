<body>
<main class="bg_color">
    <div class="contents">
        <div class="public_influencer">
            <div class="container">
                <div class="page-header">
                    <div class="txt-to">
                        <p>
                            <span><?=isset($campaign['campaign_company']) ? $campaign['campaign_company'] : ''?></span>&nbsp;&nbsp;
                            <span><?=isset($campaign['campaign_belong']) ? $campaign['campaign_belong'] : ''?></span>
                        </p>
                    </div>
                    <h1><?=isset($campaign['campaign_name']) ? $campaign['campaign_name'] : ''?><span></span></h1>
                    <p class="candidate js-total-fan-count total-fan-count-instagram_account ac-active">候補者人数：<span class="candidate-number"><?=$cnt_talent?></span>人 / 候補者合計フォロワー数：<span class="candidate-number"><?=$sum_fw?></span>人&nbsp;(<?=isset($campaign['type']) ? $campaign['type'] : ''?>)</p>
                    <p class="candidate js-total-fan-count total-fan-count-youtube_account ">候補者人数：<span class="candidate-number"><?=$cnt_talent?></span>人 / 候補者合計フォロワー数：<span class="candidate-number"><?=$sum_yt?></span>人&nbsp;(YouTube)</p>
                    <p class="candidate js-total-fan-count total-fan-count-twitter_account ">候補者人数：<span class="candidate-number"><?=$cnt_talent?></span>人 / 候補者合計フォロワー数：<span class="candidate-number"><?=$sum_tw?></span>人&nbsp;(Twitter)</p>
                    <p class="list-name"></p>
                    <div class="total-demographics-container js-total-demographics-container ac-active">
                        <div class="total-demographics js-total-demographics"></div>
                        <div class="total-demographics-button">
                            <button class="btn js-total-demographics-summary" id="chart_view" data-group-access-id="" data-group-id="2019">年齢・性別比率の集計データを表示する</button>
                            <span class="total-demographics-loading-icon" style="display: none;"><img src="/assets/images/common/loading.gif" width="30px"></span>
                            <p class="total-demographics-button-description">※リストの件数が多い場合、処理に時間かかる場合があります。</p>
                            <p class="total-demographics-button-description">※年齢・性別比率の集計機能はInstagramのみの提供になります。</p>
                        </div>
                    </div>
                    <div class="total-demographics-container js-total-demographics-container ac-active d-none">
                        <div class="total-demographics js-total-demographics">
                            <table class="table js-total-demographics-container-table ac-active">
                                <thead>
                                <tr>
                                    <th class="total-demographic-gender">性別比率</th>
                                    <th class="total-demographic-male">年齢比率<span class="icon-male">(男性)</span></th>
                                    <th class="total-demographic-female">年齢比率<span class="icon-male">(女性)</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="gender total-demographic-gender">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip icon-male"
                                                 style="width: <?=$avg_male_ratio?>%"><span class="demogra-number"><?=$avg_male_ratio?><span
                                                            class="percentage">%</span></span></div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip icon-female"
                                                 style="width: <?=$avg_female_ratio?>%"><span class="demogra-number"><?=$avg_female_ratio?><span
                                                            class="percentage">%</span></span></div>
                                        </div>
                                    </td>
                                    <td class="total-demographic-male">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning" style="width: 40px;">-12</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">13-19</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">20-24</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">25-29</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">30-34</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">35-49</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning" style="width: 40px;">50+</span>
                                        </div>
                                    </td>
                                    <td class="total-demographic-female">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning" style="width: 40px;">-12</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">13-19</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span
                                                            class="percentage">%</span></span></div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">20-24</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">25-29</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">30-34</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning"
                                                  style="width: 40px;">35-49</span></div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger js-bootstrap-tooltip"
                                                 role="progressbar" style="width: 0%"><span
                                                        class="demogra-number">0<span class="percentage">%</span></span>
                                            </div>
                                            <span class="pull-right label label-warning" style="width: 40px;">50+</span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="total-demographics-button">
                            <button class="btn js-total-demographics-summary btn-reset"
                                    data-group-access-id="eLCBgK05Ew" data-group-id="6105" disabled="">
                                年齢・性別比率の集計データを表示する
                            </button>
                            <span class="total-demographics-loading-icon" style="display: none;"><img
                                        src="/assets/images/common/loading.gif" width="30px"></span>
                            <p class="total-demographics-button-description">※リストの件数が多い場合、処理に時間かかる場合があります。</p>
                            <p class="total-demographics-button-description">※年齢・性別比率の集計機能はInstagramのみの提供になります。</p>
                        </div>
                    </div>
                </div>
                <div class="sort-btn-container" style="line-height: 2;">
                    <span class="sort-btn-label">表示順序：</span>
                    <a href="" class="btn js-sort-order-enable js-sort-order-fan-count" data-sort-type="fw_cnt">フォロワー数 / YouTubeチャンネル登録者数</a>
                    <a href="" class="btn js-sort-order-enable js-sort-order-view-count" style="display: none;" data-sort-type="view_cnt">再生数</a>
                    <a href="" class="btn js-sort-order-enable js-sort-order-engagement" data-sort-type="eg_cnt">エンゲージメント</a>
                    <a href="" class="btn js-sort-order-enable js-sort-order-engagement-pect" data-sort-type="eg_rate">エンゲージメント率</a>
                </div>
                <input type="hidden" id="tab" value="<?=isset($campaign['type']) ? $campaign['type'] : ''?>">
                <input type="hidden" id="campaign_id" value="<?=isset($campaign['id']) ? $campaign['id'] : ''?>">
                <ul class="tabs tabs-contents">
                    <li><a class="js-change-tab instagram is-active" data-account-type="instagram_account">Instagram</a></li>
                    <li><a class="js-change-tab youtube " data-account-type="youtube_account">YouTube</a></li>
                    <li><a class="js-change-tab twitter " data-account-type="twitter_account">Twitter</a></li>
                </ul>
                <table class="table table-instagram_account ac-active">
                    <thead>
                    <tr>
                        <th class="col01" colspan="2">インフルエンサー</th>
                        <th class="col02">エンゲージメント<i class="icon-help-c" rel="tooltip" title="エンゲージメント：直近1ヶ月のいいね! やコメント, リツイートなど、フォロワーのリアクションを足した値の平均。<br>（例：Instagramならいいね！とコメントの総和）"></i></th>
                        <th class="col04">価格</th>
                        <th class="col05">コメント</th>
                        <th class="col06">性別比率</th>
                        <th class="col07">年齢比率<br><span class="icon-male">(男性)</span></th>
                        <th class="col08">年齢比率<br><span class="icon-female">(女性)</span></th>
                    </tr>
                    </thead>
                    <tbody id="instagram_table">
                    <?php foreach ($talents as $index => $item) { ?>
                        <tr>
                            <td class="influencer-img">
                                <a href="<?=base_url()?>talents/view/<?=$item["id"]?>" class="level" target="_blank">
                                    <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="">
                                </a>
                                <p>
                                    <?=empty($item["name"]) ? '名前ない' : $item["name"]?>
                                </p>
                            </td>
                            <td class="sns-acount">
                                <ul>
                                    <li>
                                        <?php if(empty($item['it_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/instagram.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["it_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/instagram.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tw_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/twitter.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tw_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/twitter.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['yt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/youtube.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["yt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/youtube.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/tiktok.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/tiktok.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                </ul>
                            </td>
                            <td class="eng">
                                <span class="txt-des">フォロワー数</span>
                                <span class="txt-number"><?=number_format($item["it_fw"], 0, '.', ',')?></span>
                                <span class="txt-des">エンゲージメント</span>
                                <span class="txt-number"></span>
                                <span class="txt-des">エンゲージメント率</span>
                                <span class="txt-number"><?= $item["eg_rate"]?><span class="percentage">%</span></span>
                            </td>
                            <td class="s-price">
                                <?php if(isset($campaign['net_price']) && $campaign['net_price'] === '1') { ?>
                                    <span class="txt-des">NET</span>
                                    <span class="txt-number"><span class="percentage">¥</span><?=$tcampaign[$index]["net_price"]?></span>
                                <?php } ?>
                                <?php if(isset($campaign['gross_price']) && $campaign['gross_price'] === '1') { ?>
                                    <span class="txt-des">GROSS</span>
                                    <span class="txt-number"><span class="percentage">¥</span><?=$tcampaign[$index]["gross_price"]?></span>
                                <?php } ?>
                            </td>
                            <td class="comment"><span><?=$tcampaign[$index]["comment"]?></span></td>
                            <td class="gender">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip icon-male" style="width: <?= $item["it_male_ratio"]?>%">
                                        <span class="demogra-number"><?= $item["it_male_ratio"]?><span class="percentage">%</span></span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip icon-female" style="width: <?= $item["it_female_ratio"]?>%">
                                        <span class="demogra-number"><?= $item["it_female_ratio"]?><span class="percentage">%</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">0.0<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">~12</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">0.0<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">13~19</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">9<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">20~24</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">26<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">25~29</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">17<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">30~34</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">35<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">35~49</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">13<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">50+~</span>
                                </div>
                            </td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">3<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">~12</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">10<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">13~19</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">57<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">20~24</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">23<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">25~29</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">5<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">30~34</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0%">
                                        <span class="demogra-number">2<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">35~49</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger js-bootstrap-tooltip" role="progressbar" style="width: 0.0%">
                                        <span class="demogra-number">0.0<span class="percentage">%</span></span>
                                    </div>
                                    <span class="pull-right label label-warning" style="width: 40px;">50+~</span>
                                </div>
                            </td>
                        </tr>
                    <?php } ?>
                    </tbody>
                </table>
                <table class="table table-youtube_account ">
                    <thead>
                    <tr>
                        <th class="col01" colspan="2">インフルエンサー</th>
                        <th class="col02">登録者数<i class="icon-help-c" rel="tooltip" title="平均再生数：直近の動画投稿の平均再生数"></i></th>
                        <th class="col05">コメント</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($talents as $index => $item) { ?>
                        <tr>
                            <td class="influencer-img">
                                <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="">
                                <p>
                                    <?=empty($item["name"]) ? '名前ない' : $item["name"]?>
                                </p>
                            </td>
                            <td class="sns-acount">
                                <ul>
                                    <li>
                                        <?php if(empty($item['it_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/instagram.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["it_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/instagram.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tw_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/twitter.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tw_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/twitter.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['yt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/youtube.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["yt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/youtube.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/tiktok.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/tiktok.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                </ul>
                            </td>
                            <td class="eng">
                                <span class="txt-des">チャンネル登録者数</span>
                                <span class="txt-number"><?=number_format($item["yt_fw"], 0, '.', ',')?></span>
                                <span class="txt-des">平均再生数</span>
                                <span class="txt-number">0</span>
                            </td>
                            <td class="comment"><span><?=$tcampaign[$index]["comment"]?></span></td>
                        </tr>
                    <?php } ?>

                    </tbody>
                </table>
                <table class="table table-twitter_account ">
                    <thead>
                    <tr>
                        <th class="col01" colspan="2">インフルエンサー</th>
                        <th class="col02">エンゲージメント<i class="icon-help-c" rel="tooltip" title="エンゲージメント：直近1ヶ月のいいね! やコメント, リツイートなど、フォロワーのリアクションを足した値の平均。<br>（例：Instagramならいいね！とコメントの総和）"></i></th>
                        <th class="col05">コメント</th>
                        <th class="col06">性別比率</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($talents as $index => $item) { ?>
                        <tr>
                            <td class="influencer-img">
                                <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="">
                                <p>
                                    <?=empty($item["name"]) ? '名前ない' : $item["name"]?>
                                </p>
                            </td>
                            <td class="sns-acount">
                                <ul>
                                    <li>
                                        <?php if(empty($item['it_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/instagram.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["it_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/instagram.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tw_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/twitter.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tw_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/twitter.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['yt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/youtube.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["yt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/youtube.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                    <li>
                                        <?php if(empty($item['tt_url'])) { ?>
                                            <img class="icon-disable" src="<?=asset_url()?>logos/tiktok.png" alt="">
                                        <?php } else { ?>
                                            <a href="<?=$item["tt_url"]?>" target="_blank"><img src="<?=asset_url()?>logos/tiktok.png" alt=""></a>
                                        <?php } ?>
                                    </li>
                                </ul>
                            </td>
                            <td class="eng">
                                <span class="txt-des">フォロワー数</span>
                                <span class="txt-number"><?=number_format($item["tw_fw"], 0, '.', ',')?></span>
                                <span class="txt-des">エンゲージメント</span>
                                <span class="txt-number">-</span>
                                <span class="txt-des">エンゲージメント率</span>
                                <span class="txt-number"><?=$item["eg_rate"]?></span>
                            </td>
                            <td class="comment"><span><?=$tcampaign[$index]["comment"]?></span></td>
                            <td></td>
                        </tr>
                    <?php } ?>

                    </tbody>
                </table>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->

<script src="<?= asset_url() ?>scripts/favourite.js"></script>
<link href="<?=asset_url()?>/css/campaign.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
    $(".tabs-contents a").on("click", function() {
        $("table, .js-total-fan-count").removeClass("ac-active");
        var a = $(this).data("account-type");
        return $(".table-" + a).addClass("ac-active"),
            $(".total-fan-count-" + a).addClass("ac-active"),
            $(".tabs-contents a.is-active").removeClass("is-active"),
            $(this).addClass("is-active"),
            "instagram_account" !== a ? $(".js-total-demographics-container").removeClass("ac-active") : ($(".js-total-demographics-container").addClass("ac-active"),
                $(".js-total-demographics-container-table").addClass("ac-active")),
            "youtube_account" === a ? ($(".js-sort-order-view-count").show(),
                $(".js-sort-order-engagement").hide(),
                $(".js-sort-order-engagement-pect").hide()) : ($(".js-sort-order-view-count").hide(),
                $(".js-sort-order-engagement").show(),
                $(".js-sort-order-engagement-pect").show()),
            $(".js-sort-order-enable").removeClass("disabled"),
            !1
    })
        // $(".public_influencer .sort-btn-container a").on("click", function(a) {
        //     a.preventDefault();
        //     var t = $(this);
        //     if (!t.hasClass("disabled")) {
        //         var e = $("a.js-change-tab.is-active").data("account-type")
        //             , s = {
        //             instagram_account: "InstagramAccount",
        //             twitter_account: "TwitterAccount",
        //             youtube_account: "YoutubeAccount"
        //         }
        //             , o = t.attr("href").replace(/active_account_type=(InstagramAccount|TwitterAccount|YoutubeAccount)&/, "");
        //         location.href = o + "&active_account_type=" + s[e]
        //     }
        // }),

</script>

</body>
</html>