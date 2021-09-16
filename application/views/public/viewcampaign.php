<body>
<main class="bg_color">
    <div class="filters_full" style="padding-bottom: 15px; z-index: 115">
        <div class="ql-blank" style="height:70px;"></div>
        <div class="container clearfix pl-0">
            <form method="post" id="kt_search_form">
                <input type="hidden" id="campaign_id" name="campaign_id"
                       value="<?= isset($campaign['id']) ? $campaign['id'] : '' ?>">
<!--                <input type="hidden" id="page" name="pagination[page]" value="--><?//=$pagination["page"]?><!--">-->
<!--                <input type="hidden" id="sort" name="sort" value="--><?//=isset($query["sort"])?$query["sort"]:''?><!--">-->
<!--                <input type="hidden" id="desc" name="desc" value="--><?//=isset($query["desc"])?$query["desc"]:''?><!--">-->
<!--                <input type="hidden" id="per_page" name="per_page" value="--><?//=$pagination["perpage"]?><!--">-->

                <div class="dropdown-search">
                    <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-level"><span>ランク</span></a>
                    <div class="dropdown-searchcontent content-level" style="width:200px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-success" name="level[1]"> S
                                </label>
                                <label class="btn btn-outline-success" name="level[2]"> A
                                </label>
                                <label class="btn btn-outline-success" name="level[3]"> B
                                </label>
                                <label class="btn btn-outline-success" name="level[4]"> C
                                </label>
                                <input type="hidden" name="level[1]" value=""/>
                                <input type="hidden" name="level[2]" value=""/>
                                <input type="hidden" name="level[3]" value=""/>
                                <input type="hidden" name="level[4]" value=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <a class="btn btn-outline-secondary dropdown-searchbtn " content-name="content-year"><span>年齢</span></a>
                    <div class="dropdown-searchcontent content-year" style="width:280px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="col-10 input-group middle">
                                <input type="text" class="form-control" size="4" placeholder="開始年齢" value="" name="age_from">
                                <label class="col-form-label text-center">&nbsp;歳 〜&nbsp;</label>
                                <input type="text" class="form-control" size="4" placeholder="終了年齢" value="" name="age_to">
                                <label class="col-form-label text-center">&nbsp;歳</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-gender"><span>性別</span></a>
                    <div class="dropdown-searchcontent content-gender" style="width:200px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-success" name="gender[1]"> 男性
                                </label>
                                <label class="btn btn-outline-success" name="gender[2]"> 女性
                                </label>
                                <label class="btn btn-outline-success" name="gender[3]"> その他
                                </label>
                                <input type="hidden" name="gender[1]" value=""/>
                                <input type="hidden" name="gender[2]" value=""/>
                                <input type="hidden" name="gender[3]" value=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <a class="btn btn-outline-secondary dropdown-searchbtn" content-name="content-insite">インサイト</a>
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
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リーチ数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リーチ数" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リーチ数" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均インプレッション</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="インプレッション" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="インプレッション" value="" name="instagram_avg_money_from">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リーチ率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リーチ率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リーチ率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均いいね数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均コメント数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="コメント数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="コメント数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均シェア数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="シェア数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="シェア数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均お気に入り保存数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="お気に入り保存数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="お気に入り保存数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均エンゲージメント率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リンククリック数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リンククリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リンククリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リンククリック率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リンククリック率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リンククリック率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CV数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CVR</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
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
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均再生回数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="再生回数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="再生回数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均コメント回数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="コメント回数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="コメント回数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均高評価数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="高評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="高評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均低評価数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="低評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="低評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均低評価数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="低評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="低評価数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CV数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CVR</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
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
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均インプレッション数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="インプレッション数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="インプレッション数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均エンゲージメント総数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント総数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント総数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均エンゲージメント率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均メディアへのエンゲージメント</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="メディアへのエンゲージメント" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="メディアへのエンゲージメント" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均いいね数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リツイート数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リツイート数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リツイート数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均返信数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="返信数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="返信数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均詳細のクリック数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="詳細のクリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="詳細のクリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle">
                                            <label class="mt-1 mb-0">平均ハッシュタグのクリック数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="ハッシュタグのクリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="ハッシュタグのクリック数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均リーチ率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="リーチ率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="リーチ率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CV数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CVR</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
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
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均再生数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="再生数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="再生数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均いいね数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="いいね数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均コメント数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="コメント数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="コメント数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均シェア数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="シェア数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="シェア数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均エンゲージメント率</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="エンゲージメント率" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CV数</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CV数" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-3 input-group middle mb-2">
                                            <label class="mt-3 mb-0">平均CVR</label>
                                        </div>
                                        <div class="col-9 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="CVR" value="" name="instagram_avg">
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
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="instagram_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">Youtube</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="youtube_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="youtube_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">TikTok</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="tiktok_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="tiktok_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">Twitter</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="twitter_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="twitter_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">Blog</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="blog_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="blog_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">WEAR</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="wear_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="wear_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">Weibo</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="weibo_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="weibo_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">WeChat</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="wechat_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="wechat_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">RED</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="red_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="red_money_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">抖音</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="keyin_money_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="依頼金額" value="" name="keyin_money_to">
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
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="blog_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="blog_fw_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">WEAR</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="wear_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="wear_fw_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">Weibo</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="weibo_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="weibo_fw_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">WeChat</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="wechat_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="wechat_fw_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">RED</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="red_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="red_fw_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                        <div class="col-2 input-group middle mb-2">
                                            <label class="mt-3 mb-0">抖音</label>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="keyin_fw_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="keyin_fw_to">
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
                                            <input type="text" class="form-control" size="4" placeholder="身長" value="" name="height_from">
                                            <label class="col-form-label text-center">&nbsp;cm〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="身長" value="" name=height_to">
                                            <label class="col-form-label text-center">&nbsp;cm</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>スリーサイズ</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="スリーサイズ" value="" name="threesize_from">
                                            <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="スリーサイズ" value="" name="threesize_to">
                                            <label class="col-form-label text-center">&nbsp;</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>契約書</b>
                                        </div>
                                        <div class="btn-group-toggle col-12" data-toggle="buttons">
                                            <label class="btn btn-outline-success" name="contract[1]"> ○
                                            </label>
                                            <label class="btn btn-outline-success" name="contract[2]"> △
                                            </label>
                                            <label class="btn btn-outline-success" name="contract[3]"> ×
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>顔出し</b>
                                        </div>
                                        <div class="btn-group-toggle col-12" data-toggle="buttons">
                                            <label class="btn btn-outline-success" name="appearance[1]"> ◯
                                            </label>
                                            <label class="btn btn-outline-success" name="appearance[2]"> ×
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
                                                <label class="btn btn-outline-success mb-1" name="belonging[<?= $key?>]"> <?= $value?>
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
                                            <input type="text" class="form-control" size="4" placeholder="所属事務所" value="" name="company_name">
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Instagram男性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="instagram_man_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="instagram_man_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Instagram女性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="instagram_wman_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="instagram_wman_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Instagram平均エンゲージメント率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="平均エンゲージメント率" value="" name="instagram_engage_rate_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="平均エンゲージメント率" value="" name="instagram_engage_rate_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Youtube登録者男性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="youtube_man_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="youtube_man_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Youtube登録者女性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="youtube_wman_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="youtube_wman_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>Youtube登録者年齢層</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="登録者年齢層" value="" name="youtube_age_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="登録者年齢層" value="" name="youtube_age_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>TikTokフォロワー男性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="tiktok_man_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="男性比率" value="" name="tiktok_man_to">
                                            <label class="col-form-label text-center">&nbsp;%</label>
                                        </div>
                                    </div>
                                    <div class="form-group justify-content-start row" style="margin-top: 25px; margin-bottom: 10px">
                                        <div class="col-12 mb-3">
                                            <b>TikTokフォロワー女性比率</b>
                                        </div>
                                        <div class="col-10 input-group middle mb-2">
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="tiktok_wman_from">
                                            <label class="col-form-label text-center">&nbsp;%〜&nbsp;</label>
                                            <input type="text" class="form-control" size="4" placeholder="女性比率" value="" name="tiktok_wman_to">
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
                        <img src="<?=asset_url()?>logos/instagram.png" alt="" style="height: 40px;margin-bottom: -8px">
                    </figure>
                    <div class="dropdown-searchcontent content-instagram" style="width:280px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="col-10 input-group middle">
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="instagram_fw_from">
                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="instagram_fw_to">
                                <label class="col-form-label text-center">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <figure class="dropdown-searchbtn mb-0" content-name="content-youtube" style="background: none; padding: 0">
                        <img src="<?=asset_url()?>logos/youtube.png" alt="" style="height: 40px; margin-bottom: -8px">
                    </figure>
                    <div class="dropdown-searchcontent content-youtube" style="width:280px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="col-10 input-group middle">
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="youtube_fw_from">
                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="youtube_fw_to">
                                <label class="col-form-label text-center">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <figure class="dropdown-searchbtn mb-0" content-name="content-tictok" style="background: none; padding: 0">
                        <img src="<?=asset_url()?>logos/tiktok.png" alt="" style="height: 40px; margin-bottom: -8px">
                    </figure>
                    <div class="dropdown-searchcontent content-tictok" style="width:280px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="col-10 input-group middle">
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="tiktok_fw_from">
                                <label class="col-form-label text-center">&nbsp;〜&nbsp;</label>
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="tiktok_fw_to">
                                <label class="col-form-label text-center">&nbsp;</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <figure class="dropdown-searchbtn mb-0" content-name="content-twitter" style="background: none; padding: 0">
                        <img src="<?=asset_url()?>logos/twitter.png" alt="" style="height: 40px;margin-bottom: -8px">
                    </figure>
                    <div class="dropdown-searchcontent content-twitter" style="width:280px;">
                        <div class="form-group justify-content-center row" style="margin-top: 25px;">
                            <div class="col-10 input-group middle">
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="twitter_fw_from">
                                <label class="col-form-label text-center">&nbsp;歳 〜&nbsp;</label>
                                <input type="text" class="form-control" size="4" placeholder="フォロワー数" value="" name="twitter_fw_to">
                                <label class="col-form-label text-center">&nbsp;歳</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-search">
                    <a class="btn btn-success btn-outline-secondary" onclick="javascript:onClickSearch();">適用</a>
                </div>
                <div class="dropdown-search">
                    <a class="btn btn-warning btn-outline-secondary" onclick="javascript:onClickClear();">クリア</a>
                </div>
                <div class="search_bar_list" style="right: 250px; width: 250px">
                    <input type="text" class="form-control" id="keyword" name="keyword" value="" placeholder="検索...">
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
    <div class="contents">
        <div class="side open-side-search" style="top: 60px; display: none;">
            <div class="box-search">
                <div class="side-nav-account">
                    <div class="side-nav-feature">
                        <ul>
                            <li>
                                <a>
                                    <i class="icon-search"></i>
                                    <p><span>Search</span><span class="jp-txt">インフルエンサー検索</span></p>
                                </a>
                            </li>
<!--                            <li class="current-menu">-->
<!--                                <a href="#" class="js-influencer-search-button"><i-->
<!--                                            class="icon-list"></i>-->
<!--                                    <p><span>Campaign</span><span class="jp-txt">インフルエンサーリスト</span></p><i-->
<!--                                            class="icon-c-arrow c-down"></i>-->
<!--                                </a>-->
<!--                            </li>-->

                            <input type="hidden" id="default_search_params" name="default_search_params"
                                   value="">
                            <input type="hidden" id="search_params" name="search_params"
                                   value="">

                            <div id="client_search_form" style="display: block;">
                                <form id="kt_search_form1" action="" method="post">
<!--                                    <input type="hidden" id="page" name="pagination[page]" value="--><?//= $pagination["page"] ?><!--">-->
<!--                                    <input type="hidden" id="per_page" name="per_page" value="--><?//= $pagination["perpage"] ?><!--">-->
                                    <input type="hidden" id="campaign_id" name="campaign_id"
                                           value="<?= isset($campaign['id']) ? $campaign['id'] : '' ?>">
                                    <ul class="search-list influencer">
                                        <li class="side-nav-search">
                                            <ul>
                                                <li>
                                                    <label><input type="radio" id="keyword_search" name="keyword_search"
                                                                  value="keyword" checked="">キーワード検索</label>
                                                </li>
                                                <li class="js-instagram-image-label-radio" style="">
                                                    <label><input type="radio" id="keyword_search_instagram_image_label"
                                                                  name="keyword_search" value="instagram_image_label">クリエイティブで検索</label>
                                                </li>
                                                <li class="js-instagram-hash-tag-engagement-radio" style="">
                                                    <label><input type="radio" name="keyword_search"
                                                                  value="hash_tag_text">ハッシュタグのエンゲージで検索</label>
                                                </li>
                                            </ul>
                                            <p id="box-keyword"
                                               class="nav-item control has-addons search-btn js-box-keyword-search-box"
                                               style="display: none;">
                                                <a rel="tooltip" title="先頭に&quot;#&quot;をつけると、ハッシュタグによる検索が可能です"><input
                                                            class="input ui-autocomplete-input" type="text" id="keyword"
                                                            name="keyword" value="" placeholder="名前、#ハッシュタグ、フリーワードを入力"
                                                            autocomplete="off"></a>
                                            </p>
                                            <p id="box-instagram_image_label"
                                               class="nav-item control has-addons search-btn js-box-keyword-search-box"
                                               style="display: none;">
                                                <input class="input ui-autocomplete-input" type="text"
                                                       id="instagram_image_label" name="instagram_image_label" value=""
                                                       placeholder="クリエイティブのキーワードを入力" autocomplete="off">
                                            </p>
                                            <p id="box-hash_tag_text"
                                               class="nav-item control has-addons search-btn js-box-keyword-search-box"
                                               style="">
                                                <input class="input ui-autocomplete-input" type="text"
                                                       id="hash_tag_text" name="hash_tag_text" value=""
                                                       placeholder="#ハッシュタグを入力" autocomplete="off">
                                            </p>
                                        </li>
                                        <li class="side-nav-pr">
                                            <p><input type="checkbox" id="is_pr_only" name="is_pr_only" value="1"><label
                                                        for="is_pr_only">#PR実績あり</label></p>
                                        </li>
                                        <li class="side-nav-bookmark">
                                            <p><input type="checkbox" id="is_favorite_only" name="is_favorite_only"
                                                      value="1"><label for="is_favorite_only">お気に入りに絞る</label></p>
                                        </li>
                                        <li class="side-nav-celeblity">
                                            <p><input type="checkbox" id="is_exclude_talent" name="is_exclude_talent"
                                                      value="1"><label for="is_exclude_talent">芸能人を除く</label></p>
                                        </li>
                                        <li class="side-nav-networks">
                                            <ul>
                                                <li><input type="radio" name="account_type" value="Instagram"
                                                           id="button-instagram" checked=""><label
                                                            for="button-instagram">Instagram</label></li>
                                                <li><input type="radio" name="account_type" value="Twitter"
                                                           id="button-twitter"><label
                                                            for="button-twitter">Twitter</label></li>
                                                <li><input type="radio" name="account_type" value="Youtube"
                                                           id="button-youtube"><label
                                                            for="button-youtube">YouTube</label></li>
                                                <li><input type="radio" name="account_type" value="Account"
                                                           id="button-total"><label for="button-total">すべて</label></li>
                                            </ul>
                                        </li>
                                        <li class="side-nav-prefecture">
                                            <div class="select">
                                                <select id="prefecture_code" name="prefecture_code">
                                                    <option value="">関連地域を選択</option>
                                                    <option value="北海道">北海道</option>
                                                    <option value="青森">青森</option>
                                                    <option value="岩手">岩手</option>
                                                    <option value="宮城">宮城</option>
                                                    <option value="秋田">秋田</option>
                                                    <option value="山形">山形</option>
                                                    <option value="福島">福島</option>
                                                    <option value="茨城">茨城</option>
                                                    <option value="栃木">栃木</option>
                                                    <option value="群馬">群馬</option>
                                                    <option value="埼玉">埼玉</option>
                                                    <option value="千葉">千葉</option>
                                                    <option value="東京">東京</option>
                                                    <option value="神奈川">神奈川</option>
                                                    <option value="新潟">新潟</option>
                                                    <option value="富山">富山</option>
                                                    <option value="石川">石川</option>
                                                    <option value="福井">福井</option>
                                                    <option value="山梨">山梨</option>
                                                    <option value="長野">長野</option>
                                                    <option value="岐阜">岐阜</option>
                                                    <option value="静岡">静岡</option>
                                                    <option value="愛知">愛知</option>
                                                    <option value="三重">三重</option>
                                                    <option value="滋賀">滋賀</option>
                                                    <option value="京都">京都</option>
                                                    <option value="大阪">大阪</option>
                                                    <option value="兵庫">兵庫</option>
                                                    <option value="奈良">奈良</option>
                                                    <option value="和歌山">和歌山</option>
                                                    <option value="鳥取">鳥取</option>
                                                    <option value="島根">島根</option>
                                                    <option value="岡山">岡山</option>
                                                    <option value="広島">広島</option>
                                                    <option value="山口">山口</option>
                                                    <option value="徳島">徳島</option>
                                                    <option value="香川">香川</option>
                                                    <option value="愛媛">愛媛</option>
                                                    <option value="高知">高知</option>
                                                    <option value="福岡">福岡</option>
                                                    <option value="佐賀">佐賀</option>
                                                    <option value="長崎">長崎</option>
                                                    <option value="熊本">熊本</option>
                                                    <option value="大分">大分</option>
                                                    <option value="宮崎">宮崎</option>
                                                    <option value="鹿児島">鹿児島</option>
                                                    <option value="沖縄">沖縄</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li class="side-nav-campaignlist">
                                            <div class="select">
                                                <select id="search_group_id" name="search_campaign_id">
                                                    <option value="">キャンペーンリストを選択</option>
                                                    <?php foreach ($all as $item) { ?>
                                                        <option value="<?= $item->id ?>"><?= $item->campaign_name ?></option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </li>
                                        <li class="side-nav-brand">
                                            <div class="select">
                                                <select id="is_brand" name="is_brand">
                                                    <option value="">PRアカウント絞込</option>
                                                    <option value="true">PRアカウントに絞る</option>
                                                    <option value="false">PRアカウントを除く</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="side-nav-button columns">
                                        <div class="column is-one-third">
                                            <input type="button" value="リセット"
                                                   class="button is-primary btn-reset js-update-confirm-submit js-search-reset"
                                                   data-page-action="/client/influencer_group/6166">
                                        </div>
                                        <div class="column">
                                            <button class="button is-primary btn-search js-search-button js-update-confirm-submit search_btn">
                                                検索<span id="result_count" class="js-set-search-count">（<?= $talents_cnt ?>）</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="box-influencer">
                                        <h1>インフルエンサー</h1>
                                        <ul class="search-list i-search">
                                            <li class="side-nav-gender">
                                                <h2 class="icon-side-i-gender"><a title="インフルエンサーの性別を指定する。" rel="tooltip">性別<i class="icon-help-c" ></i></a></h2>
                                                <ul>
                                                    <li><input id="i_male" type="radio" name="i_gender" value="male" ><label for="i_male">&nbsp;男性</label></li>
                                                    <li><input id="i_female" type="radio" name="i_gender" value="female" ><label for="i_female">&nbsp;女性</label></li>
                                                    <li><input id="i_both" type="radio" name="i_gender" value="both" checked><label for="i_both">&nbsp;両方</label></li>
                                                </ul>
                                            </li>
                                            <li class="side-nav-age">
                                                <h2 class="icon-side-i-age"><a title="インフルエンサーの年齢を指定する。" rel="tooltip">年齢<i class="icon-help-c" ></i></a></h2>
                                                <input class="range-slider-i-age" type="hidden" id="i_age_range" name="i_age_range" value="0,50" >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="box-follower">
                                        <h1 style="font-size: 10px; line-height: 1.5;">フォロワー数<br>/ YouTubeチャンネル登録者数</h1>
                                        <ul class="search-list f-search" style="margin-top: 15px;">
                                            <li class="side-nav-fan">
                                                <input class="range-slider-fan-count" type="hidden" id="fan_count" name="fan_count" value="0,106000" >
                                                <input type="hidden" id="fan_count_min" name="fan_count_min" value="0" >
                                                <input type="hidden" id="fan_count_max" name="fan_count_max" value="0" >
                                            </li>
                                            <li class="side-nav-gender js-f-search-gender">
                                                <h2 class="icon-side-gender"><a title="フォロワーの性別を%で指定する。<br>（例：女性フォロワーが60%以上のインフルエンサー）" rel="tooltip">性別<i class="icon-help-c" ></i></a></h2>
                                                <ul>
                                                    <li><input id="male" type="radio" name="gender" value="male" class="js-enable-slider" ><label for="male">&nbsp;男性</label></li>
                                                    <li><input id="female" type="radio" name="gender" value="female" class="js-enable-slider" checked><label for="female">&nbsp;女性</label></li>
                                                    <li><input id="both" type="radio" name="gender" value="both" class="js-disable-slider" ><label for="both">&nbsp;両方</label></li>
                                                </ul>
                                                <input class="single-slider-gender-percentage" type="hidden" id="gender_percentage" name="gender_percentage" value="0" >
                                            </li>
                                            <li class="side-nav-age js-f-search-age">
                                                <h2 class="icon-side-age"><a title="フォロワーの年齢層を%で指定する。<br>（例：15~18歳のフォロワーが20%以上のインフルエンサー）" rel="tooltip">年齢<i class="icon-help-c" ></i></a></h2>
                                                <input class="range-slider-age" type="hidden" id="age_range" name="age_range" value="20,34">
                                                <input class="single-slider-age-percentage" type="hidden" id="age_percentage" name="age_percentage" value="0" >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="box-follower">
                                        <h1>カスタムタグ</h1>
                                        <div class="side-nav-tag-container">
                                            <input type="text" name="" class="js-tag-name-input-in-side-menu"
                                                   placeholder="カスタムタグを選択" autocomplete="on"
                                                   list="tag-datalist-in-side-menu">
                                            <div class="js-influencer-tags-in-side-menu"></div>
                                        </div>
                                        <datalist id="tag-datalist-in-side-menu"></datalist>
                                        <input type="hidden" id="tags" name="tags" value="">
                                    </div>

                                    <input type="hidden" id="is_new_search" name="is_new_search" value="true">
                                    <input type="hidden" id="sort_key" name="sort_key" value="">
                                    <input type="hidden" id="sort_order" name="sort_order" value="">
                                    <div class="side-nav-button columns">
                                        <div class="column is-one-third">
                                            <input type="button" value="リセット"
                                                   class="button is-primary btn-reset js-update-confirm-submit js-search-reset"
                                                   data-page-action="/client/influencer_group/6166">
                                        </div>
                                        <div class="column">
                                            <button class="button is-primary btn-search js-search-button js-update-confirm-submit search_btn">
                                                検索<span id="result_count" class="js-set-search-count">（<?= $talents_cnt ?>）</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <script type="text/javascript">
                                // $(function () {
                                //     mixpanel.track_forms("#search_form", "cl02_search", function () {
                                //         var arr = $("#").serializeArray();
                                //         var hash = {};
                                //         for (var i = 0; arr.length > i; i++) {
                                //             var name = arr[i].name;
                                //             if (name != 'fan_count' && name != 'is_new_search') {
                                //                 hash['$' + name] = arr[i].value;
                                //             }
                                //         }
                                //         return hash;
                                //     });
                                //
                                //     mixpanel.identify("2961");
                                // });
                            </script>

                            <li><a href="/client/account"><i class="icon-setting"></i>
                                    <p><span>Accout</span><span class="jp-txt">アカウント設定</span></p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="main influencer_group list" style="margin-right: 275px;">
            <div class="wrap-mc">
                <div class="page-header">
                    <form id="modify_form" class="form-inline w-100" method="post">
                        <div class="panel panel-default w-100">
                            <div class="panel-body">
                                <input type="hidden" name="campaign_id"
                                       value="<?= isset($campaign['id']) ? $campaign['id'] : '' ?>">
                                <div class="form-group">
                                    <h2>タイトル</h2>
                                    <input type="text" class="form-control" id="title" name="campaign_name"
                                           placeholder="キャンペーンのタイトル  例: 「○○ 新商品 PR施策」"
                                           value="<?= isset($campaign['campaign_name']) ? $campaign['campaign_name'] : '' ?>" required>
                                </div>
                                <div class="form-group">
                                    <h2>宛先企業名</h2>
                                    <input type="text" class="form-control" id="destination_company_name"
                                           name="campaign_company" placeholder="リスト提供先企業名  例: 「○○ 株式会社」"
                                           value="<?= isset($campaign['campaign_company']) ? $campaign['campaign_company'] : '' ?>">
                                </div>
                                <div class="form-group">
                                    <h2>宛先担当者名</h2>
                                    <input type="text" class="form-control" id="destination_name" name="campaign_belong"
                                           placeholder="担当者名  例: 「○○ 様」"
                                           value="<?= isset($campaign['campaign_belong']) ? $campaign['campaign_belong'] : '' ?>">
                                </div>
                                <div class="form-group">
                                    <h2>コメント</h2>
                                    <textarea class="form-control comment-area" id="comment" name="campaign_comment"
                                              placeholder="キャンペーンリストのコメント"
                                              rows="3"><?= isset($campaign['campaign_comment']) ? $campaign['campaign_comment'] : '' ?></textarea>
                                </div>
                                <input type="hidden" id="group_id" name="group_id" value="6105">
                                <button type="submit" class="btn btn-default" id="modify_btn">更新</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="wrap-body">
                    <section class="candidate-list">
                        <div class="wrap-group-list">
                            <div class="list-container">
                                <div class="subnav">
                                    <ul class="columns" style="display: flex; align-items: center;">
                                        <li class="name">
                                            <input type="checkbox" id="all_check"
                                                   class="bulk-add-btn js-update-confirm-submit js-bulk-add-group-list"
                                                   rel="tooltip" title="リストに追加する" data-group-id="2019"
                                                   data-search-count="65341">名前
                                        </li>
                                        <li class="fans"
                                            style="text-align: left; padding-left: 10px; padding-right: 10px;">
                                            <a class="js-sort-link js-update-confirm-submit"
                                               href="">
                                                <span style="font-size: 8px;">
                                                  フォロワー数
                                                  <br>/ YouTubeチャンネル登録者数
                                                </span>
                                            </a>
                                        </li>
                                        <li class="glengagement">
                                            <a class="js-sort-link js-update-confirm-submit" rel="tooltip"
                                               href=""
                                               title="エンゲージメント率。<br>フォロワー数 / YouTubeチャンネル登録者数に対するエンゲージメント数の割合。">
                                                エンゲージメント率
                                            </a>
                                        </li>
                                        <li class="networks">リンク</li>
                                    </ul>
                                </div>
                                <ul id="search_list" class="list-influencer">

                                </ul>
                                <div class="infinite-scroll-loading-container"></div>
                            </div>
                        </div>
                    </section>
                    <section class="search-list">
                        <div class="wrap-group-list">
                            <div class="page-header bulk-add">
                                <!--                                <form action="/client/influencer_group/6105/url_path_id_add" method="post">-->
                                <div class="panel panel-default">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="add_account_url_path_id"
                                               id="sns_id" placeholder="SNSのユーザーIDをから追加" value="">
                                    </div>
                                    <div class="form-group">
                                        <input type="radio" name="add_account_account_type" id="instagram"
                                               value="instagram" checked=""><label for="instagram">Instagram</label>
                                        <input type="radio" name="add_account_account_type" id="youtube"
                                               value="youtube"><label for="youtube">YouTube</label>
                                        <input type="radio" name="add_account_account_type" id="twitter"
                                               value="twitter"><label for="twitter">Twitter</label>
                                    </div>
                                    <div class="button-container">
                                        <div class="add-list">
                                            <input type="hidden" id="group_id" name="group_id" value="6105">
                                            <input type="hidden" id="open_con" name="open_con" value="false">
                                            <input type="submit" id="add_btn"
                                                   class="btn js-user-id-add-influencer-button js-update-confirm-submit"
                                                   value="追加">
                                        </div>
                                        <div class="preview">
                                            <a href="<?= base_url() . "talents/campaignpreview/" . $campaign['id'] ?>"
                                               class="btn" target="_blank">プレビュー</a>
                                        </div>
                                        <div class="sort">
                                            <a href="<?= base_url() . "talents/campaignorder/" . $campaign['id'] ?>"
                                               class="btn js-sort-edit-page-link-button js-update-confirm-submit"
                                               onclick="sessionStorage.removeItem('groupListSortIds');">並び順を変更する</a>
                                        </div>
                                        <div class="kakaku">
                                            <a href="<?= base_url() . "talents/campaignprice/" . $campaign['id'] ?>"
                                               class="btn js-price-edit-page-link-button js-update-confirm-submit">価格を入力する</a>
                                        </div>
                                    </div>
                                </div>
                                <!--                                </form>-->
                            </div>
                            <div class="list-container">
                                <div class="subnav">
                                    <ul class="columns" style="display: flex; align-items: center;">
                                        <li class="name">名前</li>
                                        <li class="fans"
                                            style="font-size: 8px; text-align: left; padding-left: 10px; padding-right: 10px;">
                                            フォロワー数 / YouTubeチャンネル登録者数
                                        </li>
                                        <li class="networks">リンク</li>
                                        <li class="comment">コメント</li>
                                    </ul>
                                </div>
                                <ul id="talent_list" class="list-influencer">

                                </ul>
                                <div class="pagenation-container">

                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="candidate-layer"></div>
                    <div class="box-candidate">
                        <div class="inner-candidate">
                            <p class="candidate">
                                登録数:&nbsp;<span id="group_list_influencer_count" class="candidate-number">10</span>人<br>
                                合計:&nbsp;<span id="group_list_total_fan_count"
                                               class="candidate-number">185,551,713</span>人
                            </p>
                        </div>
                    </div>
                    <div class="box-open-switch">
                        <a class="switch-con">
                            <div class="hamburger-box">
                                <div class="hamburger-inner"></div>
                            </div>
                            <p>
                                <span>Influencer List</span>
                                <span class="jp-txt">選択済みインフルエンサーリスト</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</main>
<!-- /main -->

<div id="toTop"></div><!-- Back to top button -->

<div class="layer"></div><!-- Opacity Mask Menu Mobile -->
<script src="<?= asset_url() ?>scripts/search-menu.js"></script>
<script src="<?= asset_url() ?>scripts/favourite.js"></script>
<script src="<?= asset_url() ?>scripts/viewcampaign.js"></script>

<link href="<?= asset_url() ?>/css/campaign.css" rel="stylesheet" type="text/css"/>
<style type="text/css">
    header{
        display: none !important;
    }
    .ql-blank{
        height: 0 !important;
    }
    .filters_full{
        position: fixed !important;
        width: 100%;
        z-index: 1;
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
<!--<script src="--><?//= asset_url() ?><!--js/application.js"></script>-->
<!--<script src="--><?//= asset_url() ?><!--scripts/client_influencer_group.js"></script>-->
<!--<script src="--><?//= asset_url() ?><!--scripts/slider_menu.js"></script>-->


<!--<script src="--><?//= asset_url() ?><!--scripts/clipboard.js"></script>-->
<!--<script src="--><?//= asset_url() ?><!--scripts/jquery.infinte.js"></script>-->
</body>
</html>