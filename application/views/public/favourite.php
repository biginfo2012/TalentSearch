<body>
<main class="bg_color">
    <div class="filters_full" style="padding-bottom: 0;">
        <div class="ql-blank" style="height:70px;"></div>
        <div class="container clearfix">
            <form method="post" action="<?=base_url()?>talents/search" id="kt_search_form">
                <input type="hidden" id="page" name="pagination[page]" value="<?=$pagination["page"]?>">
                <input type="hidden" id="sort" name="sort" value="<?=isset($query["sort"])?$query["sort"]:''?>">
                <input type="hidden" id="desc" name="desc" value="<?=isset($query["desc"])?$query["desc"]:''?>">
                <input type="hidden" id="per_page" name="per_page" value="<?=$pagination["perpage"]?>">
            </form>
        </div>
        <!-- /filters -->
        <div class="collapse" id="collapseSearch">
            <div class="search_bar_list">
                <input type="text" class="form-control" placeholder="Search again...">
            </div>
        </div>
        <!-- /collapseSearch -->
    </div>

    <!-- <div class="card-footer collapse justify-content-center">

    </div> -->
    <section class="dark1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
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
                </div>
            </div>
            <div class="row">
                <div class="subheader py-2 subheader-transparen isotope-itemt col-12" id="kt_subheader" style="">
                    <div class="container d-flex align-items-end justify-content-between flex-wrap flex-sm-nowrap" style="padding-left: 0px;">
                        <!--begin::Info-->
                        <div class="d-flex align-items-center flex-wrap mr-1">
                            <!--begin::Heading-->
                            <div class="d-flex flex-column">
                                <!--begin::Breadcrumb-->
                                <div class="d-flex align-items-center font-weight-bold my-2">
                                    <!--begin::Item-->
                                    <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                    <a class="text-white text-hover-white opacity-75 hover-opacity-100"><h1 style=""><?= $pagination["total"]?></h1></a>
                                    <!--end::Item-->
                                    <!--begin::Item-->
                                    <span class="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                    <a class="text-white text-hover-white opacity-75 hover-opacity-100" style="">人が該当しました</a>

                                </div>
                                <!--end::Breadcrumb-->
                            </div>
                            <!--end::Heading-->
                        </div>
                        <!--end::Info-->
                    </div>
                </div>
            </div>
            <!--begin::Pagination-->

            <!--end::Pagination-->
            <div class="row m-space">
                <?php foreach ($talents as $item) { ?>
                    <div class="col-md-4">
                        <div class="blog-item">

                            <div class="thumb1">
                                <a href="<?=base_url()?>talents/view/<?=$item["id"]?>">
                                    <img src="<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>" alt="">
                                </a>
                            </div>
                            <div class="article">
                                <span class="tag"><?=empty($item["level"])? '': "ランク: ".$this->talent->level[$item["level"] - 1]?></span>
                                <a href="#">
                                    <p>フォロワー数: <?=number_format($item["it_fw"], 0, '.', ',')?></p>
                                    <h3><?=empty($item["per_page"]) ? '名前ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>#21069;ない' : $item["name"]?></h3>></h3> </div>
                    </div>
                <?php }
                if($pagination['total'] <= 0) { ?>
                    <div class="card card-custom">
                        <div class="card-body">
                            <a class="text-white text-hover-white opacity-75 hover-opacity-100" style="color:black !important;">検索結果がありません。</a>
                        </div>
                    </div>
                <?php }?>

            </div>
        </div>
    </section>
    <!-- /container -->

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->

<script src="<?=asset_url()?>scripts/search.js"></script>
<style type="text/css">
    nav#dark{
        background: #0d1422 !important;
    }
    .bookmark {
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        padding: 13px 17px;
        border-bottom: 1px solid #eeeeee;
        border-left: 1px solid #eeeeee;
        border-radius: 0 5px 0 5px;
        box-shadow: none;
    }

    .bookmark {
        font-size: 11px;
        background-color: #ffffff;
        box-shadow: 0 0 1px rgb(0 0 0 / 40%);
        border-radius: 5px;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    a {
        text-decoration: none;
        color: #444444;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    .bookmark p {
        display: table;
        color: #aaaaaa;
        font-size: 12px;
        line-height: 1;
        letter-spacing: .1rem;
    }

    .bookmark p {
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    .bookmark p i {
        font-size: 14px;
        padding-right: 14px;
    }
    .bookmark p i {
        position: relative;
        padding-right: 15px;
    }
    .bookmark p span {
        display: table-cell;
        padding-left: 4px;
        vertical-align: middle;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    .bookmark p i:before {
        margin-top: -6px;
        margin-left: -6px;
        font-size: 12px;
        color: #dddddd;
    }
    .bookmark p i:before {
        position: absolute;
        content: "\e838";
        left: 50%;
        top: 50%;
        margin-top: -6px;
        margin-left: -6px;
        font-size: 12px;
        font-weight: normal;
        z-index: 99;
        pointer-events: none;
        color: #dddddd;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }

</style>

</body>
</html>