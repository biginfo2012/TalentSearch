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