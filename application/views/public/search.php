<body>
	<main class="bg_color">
		<div class="filters_full" style="padding-bottom: 15px;">
            <div class="ql-blank" style="height:70px;"></div>
		    <div class="container clearfix">
                <form method="post" action="<?=base_url()?>talents/search" id="kt_search_form">
                    <input type="hidden" id="page" name="pagination[page]" value="<?=$pagination["page"]?>">
                    <input type="hidden" id="sort" name="sort" value="<?=isset($query["sort"])?$query["sort"]:''?>">
                    <input type="hidden" id="desc" name="desc" value="<?=isset($query["desc"])?$query["desc"]:''?>">
                    <input type="hidden" id="per_page" name="per_page" value="<?=$pagination["perpage"]?>">

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["level"]["1"])||!empty($query["level"]["2"])||!empty($query["level"]["3"])||!empty($query["level"]["4"])? 'set' :'' ?>" content-name="content-level"><?=empty($query["level"]["label"])?'ランク':$query["level"]["label"]?></a>
                        <div class="dropdown-searchcontent content-level" style="width:200px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-success <?=isset($query["level"]["1"]) && $query["level"]["1"] == 1?'active':''?>" name="level[1]"> S
                                    </label>
                                    <label class="btn btn-outline-success <?=isset($query["level"]["2"]) && $query["level"]["2"] == 1?'active':''?>" name="level[2]"> A
                                    </label>
                                    <label class="btn btn-outline-success <?=isset($query["level"]["3"]) && $query["level"]["3"] == 1?'active':''?>" name="level[3]"> B
                                    </label>
                                    <label class="btn btn-outline-success <?=isset($query["level"]["4"]) && $query["level"]["4"] == 1?'active':''?>" name="level[4]"> C
                                    </label>
                                    <input type="hidden" name="level[1]" value="<?=isset($query["level"]["1"]) && $query["level"]["1"] == 1?'1':''?>"/>
                                    <input type="hidden" name="level[2]" value="<?=isset($query["level"]["2"]) && $query["level"]["2"] == 1?'1':''?>"/>
                                    <input type="hidden" name="level[3]" value="<?=isset($query["level"]["3"]) && $query["level"]["3"] == 1?'1':''?>"/>
                                    <input type="hidden" name="level[4]" value="<?=isset($query["level"]["3"]) && $query["level"]["4"] == 1?'1':''?>"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["age_from"])||!empty($query["age_to"])? 'set' :'' ?>" content-name="content-year"><?=empty($age_label)?'年齢':$age_label?></a>
                        <div class="dropdown-searchcontent content-year" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="開始年齢" value="<?=isset($query['age_from'])?$query['age_from']:''?>" name="age_from">
                                    <label class="col-form-label text-center">&nbsp;歳 〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="終了年齢" value="<?=isset($query['age_to'])?$query['age_to']:''?>" name="age_to">
                                    <label class="col-form-label text-center">&nbsp;歳</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["gender"]["1"])||!empty($query["gender"]["2"])||!empty($query["gender"]["3"])? 'set' :'' ?>" content-name="content-gender"><?=empty($query["gender"]["label"])?'性別':$query["gender"]["label"]?></a>
                        <div class="dropdown-searchcontent content-gender" style="width:200px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-success <?=isset($query["gender"]["1"]) && $query["gender"]["1"] == 1?'active':''?>" name="gender[1]"> 男性
                                    </label>
                                    <label class="btn btn-outline-success <?=isset($query["gender"]["2"]) && $query["gender"]["2"] == 1?'active':''?>" name="gender[2]"> 女性
                                    </label>
                                    <label class="btn btn-outline-success <?=isset($query["gender"]["3"]) && $query["gender"]["3"] == 1?'active':''?>" name="gender[3]"> その他
                                    </label>
                                    <input type="hidden" name="gender[1]" value="<?=isset($query["gender"]["1"]) && $query["gender"]["1"] == 1?'1':''?>"/>
                                    <input type="hidden" name="gender[2]" value="<?=isset($query["gender"]["2"]) && $query["gender"]["2"] == 1?'1':''?>"/>
                                    <input type="hidden" name="gender[3]" value="<?=isset($query["gender"]["3"]) && $query["gender"]["3"] == 1?'1':''?>"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>
                            </div>
                        </div>
                    </div>

                    <!--div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-active">活動拠点</a>
                        <div class="dropdown-searchcontent content-active" style="width:720px;">
                            <div class="form-group justify-content-center" style="margin-top: 25px;">
                                <div class="btn-group-toggle" data-toggle="buttons">
                                    <?php foreach ($this->talent->activity_bases as $key => $value) {?>
                                        <div class="col-lg-2 mt-2 my-2" style="float: left;">
                                            <label class="btn btn-outline-success <?= isset($active[$key]) && $active[$key] == 1?'active':''?>" name="active[<?= $key?>]"><?= $value?>
                                            </label>
                                            <input type="hidden" name="active[<?= $key?>]" value="<?=isset($active[$key]) && $active[$key] == 1?'1':''?>"/>
                                        </div>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-belonging">職業</a>
                        <div class="dropdown-searchcontent content-belonging" style="width:300px;">
                            <div class="form-group justify-content-center" style="margin-top: 25px;">
                                <div class="btn-group-toggle" data-toggle="buttons">
                                    <?php foreach ($this->talent->belonging as $key => $value) {?>
                                        <div class="mt-2 my-2" style="float: left;">
                                            <label class="btn btn-outline-success <?= isset($belonging[$key]) && $belonging[$key] == 1?'active':''?>" style="margin-left: 10px;" name="belonging[<?= $key?>]"><?= $value?>
                                            </label>
                                            <input type="hidden" name="belonging[<?= $key?>]" value="<?=isset($belonging[$key]) && $belonging[$key] == 1?'1':''?>"/>
                                        </div>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-skill">投稿ジャンル</a>
                        <div class="dropdown-searchcontent content-skill" style="width:420px;">
                            <div class="form-group justify-content-center" style="margin-top: 25px;">
                                <div class="btn-group-toggle" data-toggle="buttons">
                                    <?php foreach ($this->talent->skills as $key => $value) {?>
                                        <div class="mt-2 my-2" style="float: left;">
                                            <label class="btn btn-outline-success <?= isset($talent[$key]) && $talent[$key] == 1?'active':''?>" style="margin-left: 10px;" name="talent[<?= $key?>]"><?= $value?>
                                            </label>
                                            <input type="hidden" name="talent[<?= $key?>]" value="<?=isset($talent[$key]) && $talent[$key] == 1?'1':''?>"/>
                                        </div>
                                    <?php }?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="search_bar btn btn-success" style="margin-left: 50px;" onclick="javascript:onClickSearch();">検索</button-->

                    <div class="search_bar_list">
                        <input type="text" class="form-control" id="keyword" name="keyword" value="<?= $query["keyword"]?>" placeholder="検索...">
                    </div>

                    <a class="btn_search_mobile btn_filters" data-toggle="collapse" href="#collapseSearch"><i class="icon_search"></i></a>
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
		
		<div class="content d-flex flex-column flex-column-fluid isotope-wrapper" id="kt_content">
			<!--begin::Entry-->
			<div class="d-flex flex-column-fluid isotope-itemt">
				<!--begin::Container-->
				<div class="container">
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
                    <!--end::Pagination-->
					<!--begin::Card-->
					<?php foreach ($talents as $item) { ?>	
						<div class="card card-custom gutter-b">
							<div class="card-body">
								<!--begin::Top-->
								<div class="d-flex">
									<!--begin::Pic-->
									<div class="flex-shrink-0 mr-7">
                                        <a href="<?=base_url()?>talents/view/<?=$item["id"]?>">
                                            <div class="symbol symbol-50 symbol-lg-120" style="width: 120px;">
                                                <div class="talentimg-search" style="background-image: url('<?= empty($item['it_img']) ? upload_url(). 'default.jpg' : upload_url() . $item['it_img'] ?>'); height: 120px;"></div>
                                            </div>
                                        </a>
									</div>
									<!--end::Pic-->
									<!--begin: Info-->
									<div class="flex-grow-1">
										<!--begin::Title-->
										<div class="d-flex align-items-center justify-content-between flex-wrap mt-2">
											<!--begin::User-->
                                            <div class="mr-3">
                                                <!--begin::Contacts-->
                                                <div class="d-flex flex-wrap my-2">
                                                    <span  class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                        <h3><?=empty($item["name"]) ? '名前ない' : $item["name"]?></h3>
                                                        <p><?=$item["gender"]== 1 ? '男性' : ($item["gender"]== 2 ? '女性' : 'その他')?> <?=calcAge($item['birthday'])?>歳</p>
                                                        <p>フォロワー数: <?=number_format($item["it_fw"], 0, '.', ',')?></p>
                                                    </span>
                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                        <h3>&nbsp;</h3>
                                                        <p>&nbsp;</p>
                                                        <p>男性比率: <?= $item["it_male_ratio"]?>%</p>
                                                    </span>
                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                        <h3>&nbsp;</h3>
                                                        <p>&nbsp;</p>
                                                        <p>女性比率: <?= $item["it_female_ratio"]?>%</p>
                                                    </span>
                                                    <span class="text-muted font-weight-bold">
                                                        <h3>&nbsp;</h3>
                                                        <p>&nbsp;</p>
                                                        <p><?=empty($item["level"])? '': "ランク: ".$this->talent->level[$item["level"] - 1]?></p>
                                                    </span>
                                                </div>
                                                <!--end::Contacts-->
                                            </div>
											<!--begin::User-->
											<!--begin::Actions-->
											<?php if($user) { ?>
												<div class="my-lg-0 my-1">
													<a class="btn btn-sm btn-light-primary font-weight-bolder text-uppercase mr-2">フォローする</a>
													<a class="btn btn-sm btn-success font-weight-bolder text-uppercase">ブックマーク</a>
												</div>
											<?php } ?>
											<!--end::Actions-->
										</div>
										<!--end::Title-->
									</div>
									<!--end::Info-->
								</div>
								<!--end::Top-->
                                <!--begin::Content-->
                                <div class="d-flex align-items-center flex-wrap justify-content-between">
                                    <!--begin::Description-->
                                    <div class="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">

                                        <p>依頼金額: <?=$item["amount"]?></p>
                                        <?php if(!empty($item["note"])) echo "<p>".$item["note"]."</p>"; ?>
                                    </div>
                                    <!--end::Description-->
                                </div>
                                <!--end::Content-->
								<!--begin::Separator-->
								<div class="separator separator-solid"></div>
								<!--end::Separator-->
								<!--begin::Bottom-->
								<div class="d-flex align-items-center flex-wrap">
                                    <!--begin: Item-->
                                    <!--div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
										<span class="mr-4">
                                            <a class="media-link" href="javascript:void(0);">
											    <i class="flaticon-users-1 icon-2x text-muted font-weight-bold"></i>
                                            </a>
										</span>
                                        <div class="d-flex flex-column text-dark-75">
                                            <span class="font-weight-bolder font-size-sm">Follows</span>
                                            <span class="font-weight-bolder font-size-h5"><?=$item["it_fw"]? number_format($item["it_fw"],0,".",","):'0'?></span>
                                        </div>
                                    </div-->
                                    <!--end: Item-->
                                    <!--begin: Item-->
                                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['it_url'])?'javascript:void(0);':$item['it_url']?>">
											    <i class="flaticon-instagram-logo icon-2x text-muted font-weight-bold"></i>
                                            </a>
										</span>
                                        <div class="d-flex flex-column flex-lg-fill"><span class="font-weight-bolder font-size-sm">Instagram</span>
                                            <span class="font-weight-bolder font-size-h5"><?=$item["it_fw"]? number_format($item["it_fw"],0,".",","):'0'?></span>
                                        </div>
                                    </div>
                                    <!--end: Item-->
                                    <!--begin: Item-->
                                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['tw_url'])?'javascript:void(0);':$item['tw_url']?>">
											    <i class="flaticon-twitter-logo-button icon-2x text-muted font-weight-bold"></i>
                                            </a>
										</span>
                                        <div class="d-flex flex-column">
                                            <span class="font-weight-bolder font-size-sm">Twitter</span>
                                            <span class="font-weight-bolder font-size-h5"><?=$item["tw_fw"]? number_format($item["tw_fw"],0,".",","):'0'?></span>
                                        </div>
                                    </div>
                                    <!--end: Item-->
									<!--begin: Item-->
									<div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['yt_url'])?'javascript:void(0);':$item['yt_url']?>">
											    <i class="flaticon-youtube icon-2x text-muted font-weight-bold"></i>
                                            </a>
										</span>
										<div class="d-flex flex-column text-dark-75">
											<span class="font-weight-bolder font-size-sm">Youtube</span>
											<span class="font-weight-bolder font-size-h5"><?=$item["yt_fw"]? number_format($item["yt_fw"],0,".",","):'0'?></span>
										</div>
									</div>
									<!--end: Item-->
									<!--begin: Item-->
									<div class="d-flex align-items-center flex-lg-fill mr-5 my-1">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['tt_url'])?'javascript:void(0);':$item['tt_url']?>">
											    <i class="flaticon-facebook-logo-button icon-2x text-muted font-weight-bold"></i>
                                            </a>
										</span>
										<div class="d-flex flex-column text-dark-75">
											<span class="font-weight-bolder font-size-sm">TicTok</span>
											<span class="font-weight-bolder font-size-h5"><?=$item["tt_fw"]? number_format($item["tt_fw"],0,".",","):'0'?></span>
										</div>
									</div>
									<!--end: Item-->
									
								</div>
								<!--end::Bottom-->
							</div>
						</div>
					<?php }
					if($pagination['total'] <= 0) { ?>
                        <div class="card card-custom">
							<div class="card-body">
                                <a class="text-white text-hover-white opacity-75 hover-opacity-100" style="color:black !important;">検索結果がありません。</a>
                            </div>
                        </div>
                    <?php }?>

					<!--end::Card-->
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
				</div>
				<!--end::Container-->
			</div>
			<!--end::Entry-->
		</div>
	</div>
	<!-- /container -->
		
	</main>
	<!-- /main -->

	<div id="toTop"></div><!-- Back to top button -->
	
	<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
	
    <script src="<?=asset_url()?>scripts/search.js"></script>

</body>
</html>