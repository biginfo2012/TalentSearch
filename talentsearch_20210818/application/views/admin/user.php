<br/>
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="d-flex flex-column-fluid">
        <div class="container">
            <div class="card card-custom">
                <div class="card-body">
                    <div class="mb-7">
                        <div class="row align-items-center">
                            <div class="col-lg-3 col-xl-3">
                                <div class="row align-items-center">
                                    <div class="col-md-12 my-2 my-md-0">
                                        <div class="input-icon">
                                            <input type="text" class="form-control" placeholder="検索..." id="kt_datatable_search_query" />
                                            <span>
                                                <i class="flaticon2-search-1 text-muted"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-xl-3 mt-5 mt-lg-0">
                                <button id="search_btn" class="btn btn-light-primary px-6 font-weight-bold">検索</button>
                            </div>

                            <div class="d-flex align-items-center">
                                <a  class="btn btn-light-primary font-weight-bolder btn-sm" id="new_btn">管理者を追加</a>
                            </div>
                        </div>
                    </div>
                    <div class="datatable datatable-bordered datatable-head-custom" id="events"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="kt_modal" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">詳細を編集</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i aria-hidden="true" class="ki ki-close"></i>
                </button>
            </div>
            <form class="form" id ="kt_form">
                <input type="hidden" name="id" id="id">
                <input type="hidden" name="type" id="type" value="2">
                <div class="modal-body">
                    <div class="form-group row">
                        <div class="col-md-12 input-group">
                            <label class="col-form-label text-right col-md-3">お名前</label>
                            <input type="text" class="form-control col-md-9" name="name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 input-group">
                            <label class="col-form-label text-right col-md-3">メールアドレス</label>
                            <input type="text" class="form-control col-md-9" name="email"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 input-group">
                            <label class="col-form-label text-right col-md-3">パスワード</label>
                            <input type="password" class="form-control col-md-9" name="password"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 input-group">
                            <label class="col-form-label text-right col-md-3">パスワードを認証する</label>
                            <input type="password" class="form-control col-md-9" name="cf_password"/>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary px-15 mr-2" data-dismiss="modal">閉じる</button>
                    <button type="submit" class="btn btn-primary px-15">保存</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!--end::Modal-->
<script src="<?= asset_url()?>scripts/user.js"></script>
<script>
    var HOST_URL = '<?= base_url()?>';
</script>