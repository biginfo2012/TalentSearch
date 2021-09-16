<?php foreach ($talents as $item) { ?>
    <li class="js-scroll-item-selector">
        <div class="wrap-influencer-detail columns">
            <div class="w-bookmark js-add-group-list">
                <input class="js-add-group-list-checkbox" type="checkbox" data-talent-id="<?=$item["id"]?>" <?php foreach ($tcampaign as $ttem) {
                    if($item['id'] === $ttem["talent_id"]) {echo 'checked=""';}
                }?>>
            </div>
            <div class=" level name thumb">
                <a href="<?=base_url()?>talents/view/<?=$item["id"]?>" class="level" target="_blank">
                    <div class="thumb_resize">
                        <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="influencer image" style="width: auto; height: 100%; max-width: none;">
                    </div>
                    <p class="level-item"><?=empty($item["name"]) ? '名前ない' : $item["name"]?></p>
                </a>
            </div>
            <div class=" level fans value-n">
                <p class="level-item"><?=number_format($item["it_fw"], 0, '.', ',')?><span class="unit">人</span></p>
                <input type="hidden" name="group_list_influencer_fan_count" value="40543287">
            </div>
            <div class=" level glengagement value-n">
                <p class="level-item">
                    <?=$item["eg_rate"]?><span class="unit">%</span>
                </p>
            </div>
            <div class="level networks">
                <ul class="level-item">
                    <li>
                        <?php if(empty($item['it_url'])) { ?>
                            <span class="instagram disable"></span>
                        <?php } else { ?>
                            <a class="account-list-left-link" href="<?=$item["it_url"]?>" target="_blank"><span class="instagram"></span></a>
                        <?php } ?>
                    </li>
                    <li>
                        <?php if(empty($item['tw_url'])) { ?>
                            <span class="twitter disable"></span>
                        <?php } else { ?>
                            <a class="account-list-left-link" href="<?=$item["tw_url"]?>" target="_blank"><span class="twitter"></span></a>
                        <?php } ?>
                    </li>
                    <li>
                        <?php if(empty($item['yt_url'])) { ?>
                            <span class="youtube disable"></span>
                        <?php } else { ?>
                            <a class="account-list-left-link" href="<?=$item["yt_url"]?>" target="_blank"><span class="youtube"></span></a>
                        <?php } ?>
                    </li>
                </ul>
            </div>
        </div>
    </li>
<?php }?>