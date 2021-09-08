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
                        <a class="account-list-left-link" href="https://www.instagram.com/blackpinkofficial/" target="_blank"><span class="instagram"></span></a>
                    </li>
                    <li>
                        <span class="twitter disable"></span>
                    </li>
                    <li>
                        <a class="account-list-left-link" href="https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A" target="_blank"><span class="youtube"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    </li>
<?php }?>
<div class="card card-custom">
    <div class="card-body py-7">
        <!--begin::Pagination-->
        <?php if($pagination['total'] > 0) { ?>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <div class="d-flex flex-wrap mr-3">
                    <a href="javascript:goPage(1)" class="btn btn-icon btn-sm btn-light-success mr-2 my-1">
                        <i class="ki ki-bold-double-arrow-back icon-xs"></i>
                    </a>
                    <?php if(($pagination["page"]-1) == 0) {?>
                        <a class="btn btn-icon btn-sm btn-light-default mr-2 my-1">
                            <i class="ki ki-bold-arrow-back icon-xs"></i>
                        </a>
                    <?php }else { ?>
                        <a href="javascript:goPage('<?= $pagination["page"]-1?>')" class="btn btn-icon btn-sm btn-light-success mr-2 my-1">
                            <i class="ki ki-bold-arrow-back icon-xs"></i>
                        </a>
                    <?php } ?>
                    <?php for($i = $pagination["start_page"]; $i < $pagination["end_page"] ; $i ++) { if($i <= $pagination["total_page"]) {?>
                        <a href="javascript:goPage('<?=$i ?>')" class="btn btn-icon btn-sm border-0 btn-hover-success mr-2 my-1 <?=$i == $pagination["page"]? 'active': ''?>"><?= $i?></a>
                    <?php } } ?>
                    <?php if(($pagination["page"]+1) > $pagination["total_page"]) {?>
                        <a class="btn btn-icon btn-sm btn-light-default mr-2 my-1">
                            <i class="ki ki-bold-arrow-next icon-xs"></i>
                        </a>
                    <?php }else { ?>
                        <a href="javascript:goPage('<?= $pagination["page"]+1?>')" class="btn btn-icon btn-sm btn-light-success mr-2 my-1">
                            <i class="ki ki-bold-arrow-next icon-xs"></i>
                        </a>
                    <?php } ?>
                    <a href="javascript:goPage('<?= $pagination["total_page"]?>')" class="btn btn-icon btn-sm btn-light-success mr-2 my-1">
                        <i class="ki ki-bold-double-arrow-next icon-xs"></i>
                    </a>
                </div>

                <div class="d-flex flex-wrap mr-3">
                    <div class="form-group">
                        <select class="form-control" id="perpage" onchange="javascript:onClickSearch();">
                            <option value="10" <?=($pagination["perpage"] == 10)?"selected":"";?>>10</option>
                            <option value="20" <?=($pagination["perpage"] == 20)?"selected":"";?>>20</option>
                            <option value="50" <?=($pagination["perpage"] == 50)?"selected":"";?>>50</option>
                            <option value="100" <?=($pagination["perpage"] == 100)?"selected":"";?>>100</option>
                        </select>
                    </div>
                </div>
            </div>
        <?php } ?>
        <!--end:: Pagination-->
    </div>
</div>