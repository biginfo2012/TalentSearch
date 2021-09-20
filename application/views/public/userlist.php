<div class="row">
    <div class="subheader py-2 subheader-transparen isotope-itemt col-12" id="kt_subheader" style="color: black;">
        <div class="container d-flex align-items-end justify-content-between flex-wrap flex-sm-nowrap" style="padding-left: 0px;">
            <!--begin::Info-->
            <div class="d-flex align-items-center flex-wrap mr-1">
                <!--begin::Heading-->
                <div class="d-flex flex-column">
                    <!--begin::Breadcrumb-->
                    <div class="d-flex align-items-center font-weight-bold my-2">
                        <!--begin::Item-->
                        <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                        <a class="text-white text-hover-white opacity-75 hover-opacity-100"><h1 style="color:black;"><?= $pagination["total"]?></h1></a>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                        <a class="text-white text-hover-white opacity-75 hover-opacity-100" style="color:black !important;">人が該当しました</a>

                    </div>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Heading-->
            </div>
            <!--end::Info-->
        </div>
        <div class="container d-flex align-items-end justify-content-between flex-wrap flex-sm-nowrap" style="padding-right: 0px;">
            <div class="d-flex align-items-end flex-wrap social"></div>
            <div class="d-flex align-items-end flex-wrap social">
                <!--div onclick ="javascript:sortBy('follow', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                                        <div class="symbol symbol-50 symbol-light flex-shrink-0">
                                            <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'follow'?'active':''?>">
                                                <img src="<?=asset_url()?>logos/sort_icon_recommend.svg" alt="" class="h-50">
                                            </div>
                                        </div>
                                    </div-->
                <div onclick ="javascript:sortBy('level', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                    <div class="symbol symbol-50 symbol-light flex-shrink-0 ">
                        <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'level'?'active':''?> media-search">
                            <img src="<?=asset_url()?>logos/sort_icon_abc.svg" alt="" class="h-50">
                        </div>
                    </div>
                </div>
                <div onclick ="javascript:sortBy('instagram', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                    <div class="symbol symbol-50 symbol-light flex-shrink-0">
                        <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'instagram'?'active':''?> media-search">
                            <img src="<?=asset_url()?>logos/sort_icon_instagram.svg" alt="" class="h-50">
                        </div>
                    </div>
                </div>
                <div onclick ="javascript:sortBy('twitter', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                    <div class="symbol symbol-50 symbol-light flex-shrink-0">
                        <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'twitter'?'active':''?> media-search">
                            <img src="<?=asset_url()?>logos/sort_icon_twitter.svg" alt="" class="h-50">
                        </div>
                    </div>
                </div>
                <div onclick ="javascript:sortBy('youtube', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                    <div class="symbol symbol-50 symbol-light flex-shrink-0">
                        <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'youtube'?'active':''?> media-search">
                            <img src="<?=asset_url()?>logos/sort_icon_youtube.svg" alt="" class="h-50">
                        </div>
                    </div>
                </div>
                <div onclick ="javascript:sortBy('tiktok', this);" class="d-flex align-items-center flex-lg-fill ml-3 mr-3 my-1">
                    <div class="symbol symbol-50 symbol-light flex-shrink-0">
                        <div class="symbol-label <?=isset($query["sort"]) && $query["sort"] == 'tiktok'?'active':''?> media-search">
                            <img src="<?=asset_url()?>logos/sort_icon_tiktok.svg" alt="" class="h-50">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--begin::Pagination-->
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

<!--begin::Pagination-->
<div class="card card-custom">
    <div class="card-body">
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
            </div>
        <?php } ?>
        <!--end:: Pagination-->
    </div>
</div>
<!--end::Pagination-->
