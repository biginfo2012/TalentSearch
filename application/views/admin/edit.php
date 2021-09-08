<br/>
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="d-flex flex-column-fluid">
        <div class="container">
            <div class="card card-custom gutter-b example example-compact">
                <div class="card-header" style="">
                    <div class="card-title">
                        <h3 class="card-label">才能を編集する
                        <i class="mr-2"></i>
                        <small class="">タレント情報の入力と更新</small></h3>
                    </div>
                    <div class="card-toolbar">
                        <div class="btn-group mr-3">
                            <a href="<?=base_url()?>admin/talent" class="btn btn-secondary font-weight-bolder">閉じる</a>
                        </div>
                        <div class="btn-group">
                            <button type="button" name="save" class="btn btn-primary font-weight-bolder">データ保存</button>
                        </div>
                    </div>
                </div>
                <form class="form" id="kt_login_signin_form" enctype="multipart/form-data" method="post">
                    <input type="hidden" name="id" value = "<?= isset($talent['id'])?$talent['id']:''?>">
                    <div class="card-body">
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <div class="image-input image-input-outline" id="kt_image_4">
                                    <div class="image-input-wrapper" style="background-image: url(<?= isset($talent)?upload_url().$talent["it_img"]:upload_url()."default.jpg" ?>); width: 300px; height: 300px;"></div>

                                    <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                        <i class="fa fa-pen icon-sm text-muted"></i>
                                        <input type="file" name="profile_avatar" id="avatar" accept=".png, .jpg, .jpeg"/>
                                        <input type="hidden" name="profile_avatar_remove"/>
                                    </label>

                                    <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                                    </span>

                                    <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                                        <i class="ki ki-bold-close icon-xs text-muted"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="form-group row">
                                    <div class="col-lg-6">
                                        <label>お名前:</label>
                                        <input type="text" name="name" value = "<?= isset($talent)?$talent['name']:'' ?>" class="form-control">
                                    </div>
                                    <div class="col-lg-6">
                                        <label>メールアドレス:</label>
                                        <input type="email" name="email"  value = "<?= isset($talent)?$talent['email']:'' ?>" class="form-control" >
                                    </div>
                                    
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-6">
                                        <label>性別:</label>
                                        <select class="form-control select2" id="kt_select2_10" name="gender">
                                            <option value="1" <?= isset($talent) && $talent['gender'] ==1 ?'selected':'' ?>>男性</option>
                                            <option value="2" <?= isset($talent) && $talent['gender'] ==2 ?'selected':'' ?>>女性</option>
                                        </select>
                                        <!-- <input type="text" name="gender"  value = "<?= isset($talent)?$talent['gender']:'' ?>" class="form-control"> -->
                                    </div>
                                    <div class="col-lg-6">
                                        <label>宛名:</label>
                                        <input type="text" name="post"  value = "<?= isset($talent)?$talent['post']:'' ?>" class="form-control" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-6">
                                        <label>電話番号:</label>
                                        <input type="text" name="tel_number"  value = "<?= isset($talent)?$talent['tel_number']:'' ?>" class="form-control">
                                    </div>
                                    <div class="col-lg-6">
                                        <label>口座名義:</label>
                                        <input type="text" name="account_kana"  value = "<?= isset($talent)?$talent['account_kana']:'' ?>" class="form-control" >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>郵便番号:</label>
                                <input type="text" name="zip_code"  value = "<?= isset($talent)?$talent['zip_code']:'' ?>" class="form-control" >
                            </div>
                            <div class="col-lg-4">
                                <label>生年月日:</label>
                                <input type="text" name="birthday" value = "<?= isset($talent)?$talent['birthday']:'' ?>" class="form-control" >
                            </div>
                            <div class="col-lg-4">
                                <label>口座種別:</label>
                                <input type="text" name="account_type"  value = "<?= isset($talent)?$talent['account_type']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>都道府県:</label>
                                <input type="text" name="province"  value="<?= isset($talent)?$talent['province']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>市区町村・番地:</label>
                                <input type="text" name="district_num"  value = "<?= isset($talent)?$talent['district_num']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>マンション・ビル名:</label>
                                <input type="text" name="building_name"  value = "<?= isset($talent)?$talent['building_name']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>フォロワー数:</label>
                                <input type="number" name="it_fw"  value = "<?= isset($talent)?$talent['it_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>InstagramプロフィールURL:</label>
                                <input type="text" name="it_url"  value = "<?= isset($talent)?$talent['it_url']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>依頼金額:</label>
                                <input type="number" name="amount"  value = "<?= isset($talent)?$talent['amount']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>担当者名:</label>
                                <input type="text" name="charge_name"  value = "<?= isset($talent)?$talent['charge_name']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>口座番号:</label>
                                <input type="number" name="account_number"  value = "<?= isset($talent)?$talent['account_number']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>IGfw男性比率:</label>
                                <input type="number" name="it_male_ratio"  value = "<?= isset($talent)?$talent['it_male_ratio']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>IGfw女性比率:</label>
                                <input type="number" name="it_female_ratio"  value = "<?= isset($talent)?$talent['it_female_ratio']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>年齢:</label>
                                <input type="number" name="age"  value = "<?= isset($talent)?$talent['age']:'' ?>" class="form-control">
                            </div>
                            <!--  select tag -->
                            <div class="col-lg-4">
                                <label>活動拠点:</label>
                                <input type="text" name="activity_base"  value = "<?= isset($talent)?$talent['activity_base']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <!-- select tag -->
                            <div class="col-lg-4">
                                <label>ご職業:</label>
                                <select class="form-control select2" id="kt_select2_3" name="occupation" multiple="multiple">
                                    <?php foreach( $this->talent->skills as $index =>$item) {?>
                                    <option value="<?= $item?>" <?= isset($talent["talent"]) && in_array($key, $talent["talent"])?'selected':''?>><?=$item?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <div class="col-lg-4">
                                <label>投稿ジャンル:</label>
                                <input type="text" name="genre"  value = "<?= isset($talent)?$talent['genre']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>LINE ID:</label>
                                <input type="text" name="line_id"  value = "<?= isset($talent)?$talent['line_id']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>PRポイント:</label>
                                <input type="number" name="pr_point"  value = "<?= isset($talent)?$talent['pr_point']:'' ?>" class="form-control">
                            </div>

                            <div class="col-lg-4">
                                <label>プロフィール表示名:</label>
                                <input type="text" name="profile_name"  value = "<?= isset($talent)?$talent['profile_name']:'' ?>"  class="form-control" >
                            </div>
                            
                            <div class="col-lg-4">
                                <label>平均EG率(%):</label>
                                <input type="number" name="eg_rate"  value = "<?= isset($talent)?$talent['eg_rate']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>投稿での顔出し:</label>
                                <input type="text" name="app_post"  value = "<?= isset($talent)?$talent['app_post']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>所属:</label>
                                <select class="form-control select2" id="kt_select2_4" name="belonging" multiple="multiple">
                                    <?php foreach( $this->talent->belonging as $index =>$item) {?>
                                    <option value="<?= $item?>" <?= isset($talent["belonging"]) && in_array($key, $talent["belonging"])?'selected':''?>><?=$item?></option>
                                    <?php }?>
                                </select>
                                <!-- <input type="text" name="belonging"  value = "<?= isset($talent)?$talent['belonging']:'' ?>" class="form-control"> -->
                            </div>
                            <div class="col-lg-4">
                                <label>投稿実績:</label>
                                <input type="text" name="post_result"  value = "<?= isset($talent)?$talent['post_result']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>twitterフォロワー:</label>
                                <input type="number" name="tw_fw"  value = "<?= isset($talent)?$talent['tw_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>Twitterアカウント URL:</label>
                                <input type="text" name="tw_url"  value = "<?= isset($talent)?$talent['tw_url']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>FBfw:</label>
                                <input type="number" name="fb_fw"  value = "<?= isset($talent)?$talent['fb_fw']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>Facebookアカウント URL:</label>
                                <input type="text" name="fb_url"  value = "<?= isset($talent)?$talent['fb_url']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>youtube登録者数:</label>
                                <input type="number" name="yt_fw"  value = "<?= isset($talent)?$talent['yt_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>YouTubeチャンネル URL:</label>
                                <input type="text" name="yt_url"  value = "<?= isset($talent)?$talent['yt_url']:'' ?>" class="form-control" >
                            </div>
                        </div><div class="form-group row">
                            <div class="col-lg-4">
                                <label>女性比率:</label>
                                <input type="number" name="yt_female_ratio"  value = "<?= isset($talent)?$talent['yt_female_ratio']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>男性比率:</label>
                                <input type="number" name="yt_male_ratio"  value = "<?= isset($talent)?$talent['yt_male_ratio']:'' ?>" class="form-control">
                            </div>
                            <!-- select option -->
                            <div class="col-lg-4">
                                <label>年齢層:</label>
                                <input type="text" name=""  value = "" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>TikTokfw数:</label>
                                <input type="number" name="tt_fw"  value = "<?= isset($talent)?$talent['tt_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>TikTokアカウント URL:</label>
                                <input type="text" name="tt_url"  value = "<?= isset($talent)?$talent['tt_url']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>ブログ URL:</label>
                                <input type="text" name="blog_url"  value = "<?= isset($talent)?$talent['blog_url']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>Blogfw数:</label>
                                <input type="number" name="blog_fw"  value = "<?= isset($talent)?$talent['blog_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>wearfw数:</label>
                                <input type="number" name="wear_fw"  value = "<?= isset($talent)?$talent['wear_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>wearURL:</label>
                                <input type="text" name="wear_url"  value = "<?= isset($talent)?$talent['wear_url']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>Weibofw数:</label>
                                <input type="number" name="weibo_fw"  value = "<?= isset($talent)?$talent['weibo_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>WeChatfw数:</label>
                                <input type="number" name="wechat_fw"  value = "<?= isset($talent)?$talent['wechat_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>REDfw数:</label>
                                <input type="text" name="red_fw"  value = "<?= isset($talent)?$talent['red_fw']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>抖音fw数:</label>
                                <input type="number" name="keyin_fw"  value = "<?= isset($talent)?$talent['keyin_fw']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>関係値:</label>
                                <select class="form-control select2" id="kt_select2_5" name="relationship" multiple="multiple">
                                    <?php foreach( $this->talent->relationship as $index =>$item) {?>
                                        <option value="<?= $item?>" <?= isset($talent["relationship"]) && in_array($key, $talent["relationship"])?'selected':''?>><?=$item?></option>
                                    <?php }?>
                                </select>
                            </div>
                            <div class="col-lg-4">
                                <label>スリーサイズ:</label>
                                <input type="number" name="threesize"  value = "<?= isset($talent)?$talent['threesize']:'' ?>" class="form-control" >
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label>その他のSNS:</label>
                                <input type="text" name="sns_url"  value = "<?= isset($talent)?$talent['sns_url']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>銀行名:</label>
                                <input type="text" name="bank_name"  value = "<?= isset($talent)?$talent['bank_name']:'' ?>" class="form-control">
                            </div>
                            <div class="col-lg-4">
                                <label>支店名:</label>
                                <input type="text" name="branch_name"  value = "<?= isset($talent)?$talent['branch_name']:'' ?>" class="form-control">
                            </div>
                        </div>
                        <div class="form-group row">
                            <!-- text editor -->
                            <div class="col-lg-6">
                                <label>注意:</label>
                                <!-- <input type="text" name="note"  value = "<?= isset($talent)?$talent['note']:'' ?>" class="form-control"> -->
                                <textarea name="note" id="kt-ckeditor-1" rows="10" style="width: 100%;"> <?= isset($talent)?$talent['note']:'' ?></textarea>
                            </div>
                            <!-- text editor -->
                            <div class="col-lg-6">
                                <label>獲得実績:</label>
                                <textarea name="acq_record" id="kt-ckeditor-2" rows="10" style="width: 100%;"> <?= isset($talent)?$talent['acq_record']:'' ?> </textarea>
                                <!-- <input type="text" name="acq_record"  value = "<?= isset($talent)?$talent['acq_record']:'' ?>" class="form-control"> -->
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-lg-10"></div>
                            <div class="col-lg-2" style="text-align: right;">
                                <button type="button" name="save" class="btn btn-primary font-weight-bolder">データ保存</button>
                            </div>
                        </div>
                    </div>
                </form>
                <!--end::Form-->
            </div>
        </div>
    </div>
</div>
<script src="<?= asset_url()?>plugins/custom/ckeditor/ckeditor-classic.bundle.js"></script>
<script src="<?= asset_url()?>scripts/edit.js"></script>
<script src="<?= asset_url()?>js/pages/crud/file-upload/image-input.js"></script>
<script>
    var HOST_URL = '<?= base_url()?>';
</script>