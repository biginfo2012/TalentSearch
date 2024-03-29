<body>
	<main class="bg_color">
		<div class="filters_full" style="padding-bottom: 15px; top:72px">
            <div class="ql-blank" style="height:70px;"></div>
		    <div class="container clearfix">
                <form method="post" action="<?=base_url()?>talents/search" id="kt_search_form">
                    <input type="hidden" id="page" name="pagination[page]" value="<?=$pagination["page"]?>">
                    <input type="hidden" id="sort" name="sort" value="<?=isset($query["sort"])?$query["sort"]:''?>">
                    <input type="hidden" id="desc" name="desc" value="<?=isset($query["desc"])?$query["desc"]:''?>">
                    <input type="hidden" id="per_page" name="per_page" value="<?=$pagination["perpage"]?>">

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["level"]["1"])||!empty($query["level"]["2"])||!empty($query["level"]["3"])||!empty($query["level"]["4"])? 'set' :'' ?>" content-name="content-level"><span>ランク</span></a>
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
<!--                            <div class="form-group">-->
<!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
<!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["age_from"])||!empty($query["age_to"])? 'set' :'' ?>" content-name="content-year"><span>年齢</span></a>
                        <div class="dropdown-searchcontent content-year" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="開始年齢" value="<?=isset($query['age_from'])?$query['age_from']:''?>" name="age_from">
                                    <label class="col-form-label text-center">&nbsp;歳 〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="終了年齢" value="<?=isset($query['age_to'])?$query['age_to']:''?>" name="age_to">
                                    <label class="col-form-label text-center">&nbsp;歳</label>
                                </div>
                            </div>
<!--                            <div class="form-group">-->
<!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
<!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["gender"]["1"])||!empty($query["gender"]["2"])||!empty($query["gender"]["3"])? 'set' :'' ?>" content-name="content-gender"><span>性別</span></a>
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
<!--                            <div class="form-group">-->
<!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
<!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn <?=!empty($query["insite"]) ? 'set' :'' ?>" content-name="content-insite">インサイト</a>
                        <div class="dropdown-searchcontent content-insite" style="position: fixed; left: 0; top: 60px; bottom: 0; overflow-y: scroll;">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Instagram</b>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均依頼金額</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg_money_from'])?$query['instagram_avg_money_from']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg_money_to'])?$query['instagram_avg_money_to']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リーチ数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リーチ数" value="<?=isset($query['instagram_avg_money_from'])?$query['instagram_avg_money_from']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リーチ数" value="<?=isset($query['instagram_avg_money_from'])?$query['instagram_avg_money_from']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均インプレッション</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="インプレッション" value="<?=isset($query['instagram_avg_money_from'])?$query['instagram_avg_money_from']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="インプレッション" value="<?=isset($query['instagram_avg_money_from'])?$query['instagram_avg_money_from']:''?>" name="instagram_avg_money_from">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リーチ率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リーチ率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リーチ率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均いいね数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均コメント数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="コメント数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="コメント数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均シェア数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="シェア数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="シェア数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均お気に入り保存数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="お気に入り保存数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="お気に入り保存数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均エンゲージメント率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リンククリック数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リンククリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リンククリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リンククリック率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リンククリック率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リンククリック率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CV数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CVR</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Youtube</b>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均依頼金額</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均再生回数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="再生回数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="再生回数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均コメント回数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="コメント回数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="コメント回数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均高評価数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="高評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="高評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均低評価数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="低評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="低評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均低評価数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="低評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="低評価数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CV数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CVR</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Twitter</b>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均依頼金額</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均インプレッション数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="インプレッション数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="インプレッション数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均エンゲージメント総数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント総数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント総数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均エンゲージメント率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均メディアへのエンゲージメント</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="メディアへのエンゲージメント" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="メディアへのエンゲージメント" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均いいね数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リツイート数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リツイート数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リツイート数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均返信数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="返信数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="返信数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均詳細のクリック数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="詳細のクリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="詳細のクリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle">
                                                <label class="mt-1 mb-0">平均ハッシュタグのクリック数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="ハッシュタグのクリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="ハッシュタグのクリック数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均リーチ率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="リーチ率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="リーチ率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CV数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CVR</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>TikTok</b>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均依頼金額</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均再生数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="再生数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="再生数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均いいね数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="いいね数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均コメント数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="コメント数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="コメント数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均シェア数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="シェア数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="シェア数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均エンゲージメント率</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CV数</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CV数" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-3 input-group middle mb-2">
                                                <label class="mt-3 mb-0">平均CVR</label>
                                            </div>
                                            <div class="col-9 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="CVR" value="<?=isset($query['instagram_avg'])?$query['instagram_avg']:''?>" name="instagram_avg">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-detail">詳細条件</a>
                        <div class="dropdown-searchcontent content-detail" style="position: fixed; left: 0; top: 60px; bottom: 0; overflow-y: scroll;">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>活動拠点</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <?php foreach ($this->talent->activity_bases as $key => $value) {?>
                                                    <label class="btn btn-outline-success mb-1 <?= isset($active[$key]) && $active[$key] == 1?'active':''?>" name="active[<?= $key?>]"> <?= $value?>
                                                    </label>
                                                    <input type="hidden" name="active[<?= $key?>]" value="<?=isset($active[$key]) && $active[$key] == 1?'1':''?>"/>
                                                <?php }?>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>媒体ごとの依頼金額</b>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Instagram</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_money_from'])?$query['instagram_money_from']:''?>" name="instagram_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['instagram_money_to'])?$query['instagram_money_to']:''?>" name="instagram_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Youtube</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['youtube_money_from'])?$query['youtube_money_from']:''?>" name="youtube_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['youtube_money_to'])?$query['youtube_money_to']:''?>" name="youtube_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">TikTok</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['tiktok_money_from'])?$query['tiktok_money_from']:''?>" name="tiktok_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['tiktok_money_to'])?$query['tiktok_money_to']:''?>" name="tiktok_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Twitter</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['twitter_money_from'])?$query['twitter_money_from']:''?>" name="twitter_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['twitter_money_to'])?$query['twitter_money_to']:''?>" name="twitter_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Blog</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['blog_money_from'])?$query['blog_money_from']:''?>" name="blog_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['blog_money_to'])?$query['blog_money_to']:''?>" name="blog_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">WEAR</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['wear_money_from'])?$query['wear_money_from']:''?>" name="wear_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['wear_money_to'])?$query['wear_money_to']:''?>" name="wear_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Weibo</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['weibo_money_from'])?$query['weibo_money_from']:''?>" name="weibo_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['weibo_money_to'])?$query['weibo_money_to']:''?>" name="weibo_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">WeChat</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['wechat_money_from'])?$query['wechat_money_from']:''?>" name="wechat_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['wechat_money_to'])?$query['wechat_money_to']:''?>" name="wechat_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">RED</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['red_money_from'])?$query['red_money_from']:''?>" name="red_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['red_money_to'])?$query['red_money_to']:''?>" name="red_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">抖音</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['keyin_money_from'])?$query['keyin_money_from']:''?>" name="keyin_money_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="依頼金額" value="<?=isset($query['keyin_money_to'])?$query['keyin_money_to']:''?>" name="keyin_money_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>媒体ごとのフォロワー数</b>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Blog</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['blog_fw_from'])?$query['blog_fw_from']:''?>" name="blog_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['blog_fw_to'])?$query['blog_fw_to']:''?>" name="blog_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">WEAR</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['wear_fw_from'])?$query['wear_fw_from']:''?>" name="wear_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['wear_fw_to'])?$query['wear_fw_to']:''?>" name="wear_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">Weibo</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['weibo_fw_from'])?$query['weibo_fw_from']:''?>" name="weibo_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['weibo_fw_to'])?$query['weibo_fw_to']:''?>" name="weibo_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">WeChat</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['wechat_fw_from'])?$query['wechat_fw_from']:''?>" name="wechat_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['wechat_fw_to'])?$query['wechat_fw_to']:''?>" name="wechat_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">RED</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['red_fw_from'])?$query['red_fw_from']:''?>" name="red_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['red_fw_to'])?$query['red_fw_to']:''?>" name="red_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                            <div class="col-2 input-group middle mb-2">
                                                <label class="mt-3 mb-0">抖音</label>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['keyin_fw_from'])?$query['keyin_fw_from']:''?>" name="keyin_fw_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['keyin_fw_to'])?$query['keyin_fw_to']:''?>" name="keyin_fw_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>関係値</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <?php foreach ($this->talent->relationship as $key => $value) {?>
                                                    <label class="btn btn-outline-success <?= isset($relationship[$key]) && $relationship[$key] == 1?'active':''?>" name="relationship[<?= $key?>]"> <?= $value?>
                                                    </label>
                                                    <input type="hidden" name="relationship[<?= $key?>]" value="<?=isset($relationship[$key]) && $relationship[$key] == 1?'1':''?>"/>
                                                <?php }?>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>身長</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="身長" value="<?=isset($query['height_from'])?$query['height_from']:''?>" name="height_from">
                                                <label class="col-form-label text-center">&nbsp;cm〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="身長" value="<?=isset($query['height_to'])?$query['height_to']:''?>" name=height_to">
                                                <label class="col-form-label text-center">&nbsp;cm</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>スリーサイズ</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="スリーサイズ" value="<?=isset($query['threesize_from'])?$query['threesize_from']:''?>" name="threesize_from">
                                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="スリーサイズ" value="<?=isset($query['threesize_to'])?$query['threesize_to']:''?>" name="threesize_to">
                                                <label class="col-form-label text-center">&nbsp;</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>契約書</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <label class="btn btn-outline-success <?=isset($query["contract"]["1"]) && $query["contract"]["1"] == 1?'active':''?>" name="contract[1]"> ○
                                                </label>
                                                <label class="btn btn-outline-success <?=isset($query["contract"]["2"]) && $query["contract"]["2"] == 1?'active':''?>" name="contract[2]"> △
                                                </label>
                                                <label class="btn btn-outline-success <?=isset($query["contract"]["3"]) && $query["contract"]["3"] == 1?'active':''?>" name="contract[3]"> ×
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>顔出し</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <label class="btn btn-outline-success <?=isset($query["appearance"]["1"]) && $query["appearance"]["1"] == 1?'active':''?>" name="appearance[1]"> ◯
                                                </label>
                                                <label class="btn btn-outline-success <?=isset($query["appearance"]["2"]) && $query["appearance"]["2"] == 1?'active':''?>" name="appearance[2]"> ×
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>担当者名</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <?php foreach ($this->talent->charge_name as $key => $value) {?>
                                                    <label class="btn btn-outline-success <?= isset($charge_name[$key]) && $charge_name[$key] == 1?'active':''?>" name="charge_name[<?= $key?>]"> <?= $value?>
                                                    </label>
                                                    <input type="hidden" name="charge_name[<?= $key?>]" value="<?=isset($charge_name[$key]) && $charge_name[$key] == 1?'1':''?>"/>
                                                <?php }?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>職業</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <?php foreach ($this->talent->belonging as $key => $value) {?>
                                                    <label class="btn btn-outline-success mb-1 <?= isset($belonging[$key]) && $belonging[$key] == 1?'active':''?>" name="belonging[<?= $key?>]"> <?= $value?>
                                                    </label>
                                                    <input type="hidden" name="belonging[<?= $key?>]" value="<?=isset($belonging[$key]) && $belonging[$key] == 1?'1':''?>"/>
                                                <?php }?>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>所属事務所</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <input type="text" class="form-control" size="4" placeholder="所属事務所" value="<?=isset($query['company_name'])?$query['company_name']:''?>" name="company_name">
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Instagram男性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['instagram_man_from'])?$query['instagram_man_from']:''?>" name="instagram_man_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['instagram_man_to'])?$query['instagram_man_to']:''?>" name="instagram_man_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Instagram女性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['instagram_wman_from'])?$query['instagram_wman_from']:''?>" name="instagram_wman_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['instagram_wman_to'])?$query['instagram_wman_to']:''?>" name="instagram_wman_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Instagram平均エンゲージメント率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="平均エンゲージメント率" value="<?=isset($query['instagram_engage_rate_from'])?$query['instagram_engage_rate_from']:''?>" name="instagram_engage_rate_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="平均エンゲージメント率" value="<?=isset($query['instagram_engage_rate_to'])?$query['instagram_engage_rate_to']:''?>" name="instagram_engage_rate_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Youtube登録者男性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['youtube_man_from'])?$query['youtube_man_from']:''?>" name="youtube_man_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['youtube_man_to'])?$query['youtube_man_to']:''?>" name="youtube_man_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Youtube登録者女性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['youtube_wman_from'])?$query['youtube_wman_from']:''?>" name="youtube_wman_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['youtube_wman_to'])?$query['youtube_wman_to']:''?>" name="youtube_wman_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>Youtube登録者年齢層</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="登録者年齢層" value="<?=isset($query['youtube_age_from'])?$query['youtube_age_from']:''?>" name="youtube_age_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="登録者年齢層" value="<?=isset($query['youtube_age_to'])?$query['youtube_age_to']:''?>" name="youtube_age_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>TikTokフォロワー男性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['tiktok_man_from'])?$query['tiktok_man_from']:''?>" name="tiktok_man_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="男性比率" value="<?=isset($query['tiktok_man_to'])?$query['tiktok_man_to']:''?>" name="tiktok_man_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>TikTokフォロワー女性比率</b>
                                            </div>
                                            <div class="col-10 input-group middle mb-2">
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['tiktok_wman_from'])?$query['tiktok_wman_from']:''?>" name="tiktok_wman_from">
                                                <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                                <input type="text" class="form-control" size="4" placeholder="女性比率" value="<?=isset($query['tiktok_wman_to'])?$query['tiktok_wman_to']:''?>" name="tiktok_wman_to">
                                                <label class="col-form-label text-center">&nbsp;%</label>
                                            </div>
                                        </div>
                                        <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                            <div class="col-12 mb-3">
                                                <b>投稿ジャンル</b>
                                            </div>
                                            <div class="btn-group-toggle col-12" data-toggle="buttons">
                                                <?php foreach ($this->talent->genre as $key => $value) {?>
                                                    <label class="btn btn-outline-success mb-1 <?= isset($genre[$key]) && $genre[$key] == 1?'active':''?>" name="genre[<?= $key?>]"> <?= $value?>
                                                    </label>
                                                    <input type="hidden" name="genre[<?= $key?>]" value="<?=isset($genre[$key]) && $genre[$key] == 1?'1':''?>"/>
                                                <?php }?>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <figure class="dropdown-searchbtn mb-0" content-name="content-instagram" style="background: none; padding: 0">
                            <img src="<?=asset_url()?>logos/instagram.png" alt="" style="height: 40px;">
                        </figure>
                        <div class="dropdown-searchcontent content-instagram" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['instagram_fw_from'])?$query['instagram_fw_from']:''?>" name="instagram_fw_from">
                                    <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['instagram_fw_to'])?$query['instagram_fw_to']:''?>" name="instagram_fw_to">
                                    <label class="col-form-label text-center">&nbsp;</label>
                                </div>
                            </div>
                            <!--                            <div class="form-group">-->
                            <!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
                            <!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <figure class="dropdown-searchbtn mb-0" content-name="content-youtube" style="background: none; padding: 0">
                            <img src="<?=asset_url()?>logos/youtube.png" alt="" style="height: 40px;">
                        </figure>
                        <div class="dropdown-searchcontent content-youtube" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['youtube_fw_from'])?$query['youtube_fw_from']:''?>" name="youtube_fw_from">
                                    <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['youtube_fw_to'])?$query['youtube_fw_to']:''?>" name="youtube_fw_to">
                                    <label class="col-form-label text-center">&nbsp;</label>
                                </div>
                            </div>
                            <!--                            <div class="form-group">-->
                            <!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
                            <!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <figure class="dropdown-searchbtn mb-0" content-name="content-tictok" style="background: none; padding: 0">
                            <img src="<?=asset_url()?>logos/tiktok.png" alt="" style="height: 40px;">
                        </figure>
                        <div class="dropdown-searchcontent content-tictok" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['tiktok_fw_from'])?$query['tiktok_fw_from']:''?>" name="tiktok_fw_from">
                                    <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['tiktok_fw_to'])?$query['tiktok_fw_to']:''?>" name="tiktok_fw_to">
                                    <label class="col-form-label text-center">&nbsp;</label>
                                </div>
                            </div>
                            <!--                            <div class="form-group">-->
                            <!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
                            <!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <figure class="dropdown-searchbtn mb-0" content-name="content-twitter" style="background: none; padding: 0">
                            <img src="<?=asset_url()?>logos/twitter.png" alt="" style="height: 40px;">
                        </figure>
                        <div class="dropdown-searchcontent content-twitter" style="width:280px;">
                            <div class="form-group justify-content-center row" style="margin-top: 25px;">
                                <div class="col-10 input-group middle">
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['twitter_fw_from'])?$query['twitter_fw_from']:''?>" name="twitter_fw_from">
                                    <label class="col-form-label text-center">&nbsp;歳 〜&nbsp;</label>
                                    <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="<?=isset($query['twitter_fw_to'])?$query['twitter_fw_to']:''?>" name="twitter_fw_to">
                                    <label class="col-form-label text-center">&nbsp;歳</label>
                                </div>
                            </div>
                            <!--                            <div class="form-group">-->
                            <!--                                <button type="button" class="search_bar btn btn-success mr-3 mb-3" style="float: right;" onclick="javascript:onClickSearch();">適用</button>-->
                            <!--                            </div>-->
                        </div>
                    </div>

                    <div class="dropdown-search">
                        <a class="btn btn-success btn-outline-secondary" onclick="javascript:onClickSearch();">適用</a>
                    </div>
                    <div class="dropdown-search">
                        <a class="btn btn-warning btn-outline-secondary" onclick="javascript:onClickClear();">クリア</a>
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
		
		<div class="content d-flex flex-column flex-column-fluid isotope-wrapper" id="kt_content" style="padding-top: 140px">
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
                                                        <h3><?=empty($item["profile_name"]) ? '名前ない' : $item["profile_name"]?></h3>
                                                        <p style="color: <?=$item["gender"]== 1 ? '#3699ff' : ($item["gender"]== 2 ? '#f9316c' : 'black')?>;"><?=$item["gender"]== 1 ? '男性' : ($item["gender"]== 2 ? '女性' : 'その他')?> <?=calcAge($item['birthday'])?>歳</p>
                                                        <p>フォロワー数: <?=number_format($item["it_fw"], 0, '.', ',')?></p>
                                                        <p>活動拠点: <?=$item["activity_base"]?></p>
                                                    </span>
                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                        <h3>&nbsp;</h3>
                                                        <p>ID: <?=$item["user_id"]?></p>
                                                        <p style="color: #3699ff;">男性比率: <?= $item["it_male_ratio"]?>%</p>
                                                        <p>関係値: <?=$item["relationship"]?></p>
                                                    </span>
                                                    <span class="text-muted font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                                        <h3>&nbsp;</h3>
                                                        <p>担当者名: <?=$item["charge_name"]?></p>
                                                        <p style="color: #f9316c;">女性比率: <?= $item["it_female_ratio"]?>%</p>
                                                        <p>所属事務所: <?=$item["belonging"]?></p>
                                                    </span>
                                                </div>
                                                <!--end::Contacts-->
                                            </div>
											<!--begin::User-->
											<!--begin::Actions-->
											<?php if($user) { ?>
												<div class="my-lg-0 my-1">
                                                    <span class="text-muted font-weight-bold">
                                                        <h3 style="font-weight: bold; text-align: right; color: <?= ($item["level"] === '1') ? '#ca1d2a' : (($item["level"] === '2') ? '#1BC5BD' : (($item["level"] === '3') ? '#00b0ec' : '#FFA800'))?>"><?=empty($item["level"])? '': "ランク: ".$this->talent->level[$item["level"] - 1]?></h3>
                                                    </span>
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
                                        <p>職業: <?=$item["occupation"]?></p>
                                        <p>契約書: <?=$item["contract"]?></p>
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
                                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1 media_link">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['it_url'])?'javascript:void(0);':$item['it_url']?>">
											    <i class="flaticon-instagram-logo icon-2x font-weight-bold" style="color: #f9316c"></i>
                                            </a>
										</span>
                                        <div class="d-flex flex-column flex-lg-fill"><span class="font-weight-bolder font-size-sm">Instagram</span>
                                            <span class="font-weight-bolder font-size-h5"><?=$item["it_fw"]? number_format($item["it_fw"],0,".",","):'0'?></span>
                                        </div>
                                    </div>
                                    <!--end: Item-->
                                    <!--begin: Item-->
                                    <div class="d-flex align-items-center flex-lg-fill mr-5 my-1 media_link">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['tw_url'])?'javascript:void(0);':$item['tw_url']?>">
											    <i class="flaticon-twitter-logo-button icon-2x font-weight-bold" style="color: #00b0ec"></i>
                                            </a>
										</span>
                                        <div class="d-flex flex-column">
                                            <span class="font-weight-bolder font-size-sm">Twitter</span>
                                            <span class="font-weight-bolder font-size-h5"><?=$item["tw_fw"]? number_format($item["tw_fw"],0,".",","):'0'?></span>
                                        </div>
                                    </div>
                                    <!--end: Item-->
									<!--begin: Item-->
									<div class="d-flex align-items-center flex-lg-fill mr-5 my-1 media_link">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['yt_url'])?'javascript:void(0);':$item['yt_url']?>">
											    <i class="flaticon-youtube icon-2x font-weight-bold" style="color: #ca1d2a"></i>
                                            </a>
										</span>
										<div class="d-flex flex-column text-dark-75">
											<span class="font-weight-bolder font-size-sm">Youtube</span>
											<span class="font-weight-bolder font-size-h5"><?=$item["yt_fw"]? number_format($item["yt_fw"],0,".",","):'0'?></span>
										</div>
									</div>
									<!--end: Item-->
									<!--begin: Item-->
									<div class="d-flex align-items-center flex-lg-fill mr-5 my-1 media_link">
										<span class="mr-4">
                                            <a class="media-link" href="<?=empty($item['tt_url'])?'javascript:void(0);':$item['tt_url']?>">
											    <i class="flaticon-facebook-logo-button icon-2x font-weight-bold" style="color: #1a121f"></i>
                                            </a>
										</span>
										<div class="d-flex flex-column text-dark-75">
											<span class="font-weight-bolder font-size-sm">TikTok</span>
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
	<!-- /container -->
		
	</main>
	<!-- /main -->

	<div id="toTop"></div><!-- Back to top button -->
	
	<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
    <!-- Search Modal -->
	
    <script src="<?=asset_url()?>scripts/search.js"></script>
    <style type="text/css">
        header{
            position: absolute !important;
        }
        .ql-blank{
            height: 0 !important;
        }
        .filters_full{
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .top{
            top : 72px;
            position : absolute !important;
        }
        .top-72{
            top : 0px !important;
            position : fixed !important;
        }
        .btn-group-toggle>label:hover{
            background-color: #81fff8 !important;
            border-color: #81fff8 !important;
        }
        .media_link{
            cursor: pointer;
        }
        .media_link:hover{
            color: #3699FF !important;
        }
    </style>

</body>
</html>