<?php foreach ($talents as $index => $item) { ?>
    <li>
        <div class="t-box box01">
            <input class="js-sort-check js-sort-check-142271" type="checkbox" data-group-list-id="<?=$item["id"]?>">
            <div><img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="influencer image"></div>
            <?=empty($item["name"]) ? '名前ない' : $item["name"]?>
        </div>
        <div class="t-box box02 value-n">
            <p>
                <?=number_format($item["it_fw"], 0, '.', ',')?><span class="unit">人</span>
            </p>
        </div>
        <div class="t-box box03">
            <form>
                <span class="sort-btn js-sort-button-submit" data-talent-id="<?=$item["id"]?>" data-campaign-id="<?=$campaign["id"]?>" data-type="top"><img src="<?=asset_url()?>img/arrow_top.svg"></span>
            </form>
            <form>
                <span class="sort-btn js-sort-button-submit" data-talent-id="<?=$item["id"]?>" data-campaign-id="<?=$campaign["id"]?>" data-type="up"><img src="<?=asset_url()?>img/arrow_up.svg"></span>
            </form>
            <form>
                <span class="sort-btn js-sort-button-submit" data-talent-id="<?=$item["id"]?>" data-campaign-id="<?=$campaign["id"]?>" data-type="down"><img src="<?=asset_url()?>img/arrow_downs.svg"></span>
            </form>
            <form>
                <span class="sort-btn js-sort-button-submit" data-talent-id="<?=$item["id"]?>" data-campaign-id="<?=$campaign["id"]?>" data-type="bottom"><img src="<?=asset_url()?>img/arrow_bottom.svg"></span>
            </form>
        </div>
    </li>
<?php } ?>