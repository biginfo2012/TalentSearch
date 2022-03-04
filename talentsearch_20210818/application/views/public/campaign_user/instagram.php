<?php foreach ($talents as $item) { ?>
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
                    <a href="<?=base_url()?>talents/view/<?=$item["id"]?>" target="_blank"><img src="/assets/images/common/icon.jpg" alt=""></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/cheeserland/" target="_blank"><img src="/assets/images/common/logo_instagram.png" alt=""></a>
                </li>
                <li>
                    <img class="icon-disable" src="/assets/images/common/logo_youtube.png" alt="">
                </li>
                <li>
                    <img class="icon-disable" src="/assets/images/common/logo_twitter.png" alt="">
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
            <span class="txt-number"><span class="percentage">¥</span>295,000</span>
        </td>
        <td class="comment"><span></span></td>
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