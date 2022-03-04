<?php foreach ($talents as $index => $item) { ?>
<li>
    <div class="wrap-influencer-detail columns">
        <div class="w-bookmark js-add-group-list remove_talent" data-group-id="" >
            <input class="js-add-group-list-checkbox" type="checkbox" checked="" data-talent-id="<?=$item["id"]?>">
        </div>
        <div class=" level name thumb">
            <a href="<?=base_url()?>talents/view/<?=$item["id"]?>" class="level">
                <div class="thumb_resize">
                    <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="influencer image" style="width: auto; height: 100%; max-width: none;">
                </div>
                <p class="level-item"><?=empty($item["name"]) ? '名前ない' : $item["name"]?></p>
            </a>
        </div>
        <div class="level fans value-n">
            <p class="level-item"><?=number_format($item["it_fw"], 0, '.', ',')?><span class="unit">人</span></p>
            <input type="hidden" name="group_list_influencer_fan_count" value="<?=$item["it_fw"]?>">
        </div>
        <div class="level networks">
            <ul class="level-item">
                <li>
                    <?php if(empty($item['it_url'])) { ?>
                        <span class="instagram disable"></span>
                    <?php } else { ?>
                        <a class="account-list-right-link" href="<?=$item["it_url"]?>" target="_blank"><span class="instagram"></span></a>
                    <?php } ?>
                </li>
                <li>
                    <?php if(empty($item['tw_url'])) { ?>
                        <span class="twitter disable"></span>
                    <?php } else { ?>
                        <a class="account-list-right-link" href="<?=$item["tw_url"]?>" target="_blank"><span class="twitter"></span></a>
                    <?php } ?>
                </li>
                <li>
                    <?php if(empty($item['yt_url'])) { ?>
                        <span class="youtube disable"></span>
                    <?php } else { ?>
                        <a class="account-list-right-link" href="<?=$item["yt_url"]?>" target="_blank"><span class="youtube"></span></a>
                    <?php } ?>
                </li>
            </ul>
        </div>
        <div class="level comment">
            <form class="level-item form-inline" style="font-size: 0;">
                <div class="form-group">
                    <textarea class="form-control comment-area" rows="1" name="comment" placeholder="コメントを入力"><?=$comment[$index]?></textarea>
                </div>
                <button type="button" class="btn js-update-group-list-comment" data-campaign-id="<?=$campaign_id?>" data-talent-id="<?=$item["id"]?>">更新</button>
            </form>
        </div>
    </div>
</li>
<?php } ?>
<input type="hidden" id="cnt_talent" value="<?=$cnt_talent?>">
<input type="hidden" id="sum_fw" value="<?=$sum_fw?>">
