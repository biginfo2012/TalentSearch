<!-- Navigation -->
<nav id="dark" class="transparent regular" style="position: absolute">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="nav-ui n_" style="margin-right: 90px !important; margin-top: 10px;">
                    <div>
                        <?php if($user) { ?>
                        <ul>
                            <li class="nav-item dropdown dropdown-authentication">
                                <a class="" href="#">
                                    <span style="font-size: 16px;"><?php echo ($user["type"] == 2 ? '管理者' : $user['name']);?></span>
                                </a>
                                <ul class="dropdown mob-show-1">
                                    <li class="nav-col">
                                        <ul>
                                            <li class="sub-nav-header">
                                                <ul>
                                                    <?php if($user["type"] == 2) { ?>
                                                        <li>
                                                            <a class="dropdown-item" href="<?=base_url()?>admin/user"><i class="dropdown-icon zmdi zmdi-account"></i><span>ユーザー管理</span></a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="<?=base_url()?>admin/talent"><i class="dropdown-icon zmdi zmdi-account"></i><span>才能</span></a>
                                                        </li>
                                                    <?php } else{ ?>
                                                        <li>
                                                            <a class="dropdown-item" href="<?=base_url()?>talents/edit"><i class="dropdown-icon zmdi zmdi-power"></i><span>編集スキル</span></a>
                                                        </li>
                                                    <?php } ?>
                                                    <div class="dropdown-divider"></div>
                                                    <li><a class="dropdown-item" href="<?=base_url()?>welcome/signout"><i class="dropdown-icon zmdi zmdi-power"></i><span>ログアウト</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX" style="margin-top:20px;">
                                    <?php if($user["type"] == 2) { ?>
                                        <a class="dropdown-item" href="<?=base_url()?>admin/user"><i class="dropdown-icon zmdi zmdi-account"></i><span>ユーザー管理</span></a>
                                        <a class="dropdown-item" href="<?=base_url()?>admin/talent"><i class="dropdown-icon zmdi zmdi-account"></i><span>才能</span></a>
                                    <?php } else{ ?>
                                        <a class="dropdown-item" href="<?=base_url()?>talents/edit"><i class="dropdown-icon zmdi zmdi-power"></i><span>編集スキル</span></a>
                                    <?php } ?>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="<?=base_url()?>welcome/signout"><i class="dropdown-icon zmdi zmdi-power"></i><span>ログアウト</span></a>
                                </div>
                            </li>
<!--                            <li><a href="#">Contact</a>-->
<!--                                <ul class="dropdown mob-show-1">-->
<!--                                    <li class="nav-col">-->
<!--                                        <ul>-->
<!--                                            <li class="sub-nav-header">-->
<!--                                                <ul>-->
<!--                                                    <li><a href="contact-locations.html">Contact Maps</a></li>-->
<!--                                                    <li><a href="contact-minimal.html">Contact Minimal</a></li>-->
<!--                                                    <li><a href="contact-simple.html">Contact Simple</a></li>-->
<!--                                                </ul>-->
<!--                                            </li>-->
<!--                                        </ul>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </li>-->
                        </ul>
                        <?php }else { ?>
                            <a class="btn_access btn hidden-xs start-project" name="signin"><span>ログイン</span></a>
                            <a class="btn_access green btn hidden-xs start-project" name="signup"><span>会員登録</span></a>
                        <?php } ?>
<!--                        <a href="#" class="btn hidden-xs start-project"><span>Download this Theme</span></a>-->
<!--                        <a href="#" class="search">-->
<!--                            <img class="white-icon" src="img/search.svg" alt="">-->
<!--                            <img class="dark-icon" src="img/search-dark.svg" alt="">-->
<!--                        </a>-->
<!--                        <div id="menu-icon"><span></span></div>-->
                    </div>
                </div>
                <div class="logo-holder n_">
                    <div>
                        <a href="<?=base_url()?>">
                            <img alt="" class="logo lazy" src="<?=asset_url()?>img/logo.png" style="display: inline-block; margin-top: 0px; margin-right: 20px;" width="150" height="40">
<!--                            <img class="logo" src="img/logo-light.svg" alt="">-->
<!--                            <img class="logo alt" src="img/logo-dark.svg" alt="">-->
                        </a>
                    </div>
                </div>
                <div class="nav-content n_">
                    <ul>
                        <li>
                            <a href="<?=($sticky) ? "javascript:void(0);" : base_url()."talents/search"?>">検索</a>
                        </li>
                        <li>
                            <a href="<?=base_url().'talents/contact'?>">お問い合わせ</a>
                        </li>
                        <li>
                            <a href="<?=base_url()."talents/favourite"?>">お気に入りリスト</a>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</nav>
	<header class="header_in clearfix nomargin d-none">
		<div class="row">
			<div id="logo" class="col-md-3">
				<a href="<?=base_url()?>">
                    <img alt="" class="lazy" src="<?=asset_url()?>img/logo.png" style="display: inline-block; margin-top: 15px; margin-left: 20px;" width="150" height="40">
				</a>
            </div>
            <div class="col-md-6">
                <ul id="top_menu" class="nomargin">
                    <li class="logouttop-usermenu__item logouttop-usermenu__item--search"><a href="<?=($sticky) ? "javascript:void(0);" : base_url()."talents/search"?>">検索</a></li>
                    <li class="logouttop-usermenu__item logouttop-usermenu__item--contact"><a href="<?=base_url()?>">お問い合わせ</a></li>
                    <li class="logouttop-usermenu__item logouttop-usermenu__item--favourite"><a href="<?=base_url()."talents/favourite"?>">お気に入りリスト</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <ul id="top_menu" style="float:right; padding-top: 20px; padding-right: 15px;">

                </ul>
            </div>
		</div>
    </header>

    <div class="modal fade" id="login_modal" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document" style="margin: 10.75rem auto;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">詳細を編集</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="login_form">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="メールアドレス">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" id="password" value="" placeholder="パスワード">
                        </div>
                        <a name="login" class="btn btn_1 full-width">ログイン</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="signup_modal" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document" style="margin: 10.75rem auto;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">詳細を編集</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="signup_form">
                        <div class="form-group">
                            <input type="hidden" name="type" value="1">
                            <input type="email" class="form-control" name="name" id="name" placeholder="お名前">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="メールアドレス">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" id="password" value="" placeholder="パスワード">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="cf_password" id="cf_password" value="" placeholder="パスワードを認証する">
                        </div>
                        <a name="save" class="btn_1 full-width">登 録</a>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="<?=asset_url()?>scripts/header.js"></script>

    <!-- /Sign In Modal -->
<!--header class="header clearfix element_to_stick">
    <div class="container-fluid container-header">
        <div id="logo">
            <a href="<?=base_url()?>">
                <img src="<?=asset_url()?>img/logo.svg" width="140" height="35" alt="" class="logo_normal">
                <img src="<?=asset_url()?>img/logo_sticky.svg" width="120" height="35" alt="" class="logo_sticky">
            </a>
        </div>
        <div class="logouttop-right">
            <ul class="logouttop-usermenu">
                <li class="logouttop-usermenu__item logouttop-usermenu__item--search"><a href="/client/home/search-top">検索</a></li>
                <li class="logouttop-usermenu__item logouttop-usermenu__item--contact"><a href="/contact/">問い合わせ</a></li>
                <li class="logouttop-usermenu__item logouttop-usermenu__item--favourite"><a href="https://guide.cloudcasting.jp" target="_blank">お気に入りリスト</a></li>
            </ul>
            <div class="logouttop-signmenu">
            <?php if(!empty($user)) { ?>
                <ul id="top_menu">
                    <?php if($user["type"] == 2) { ?>
                        <li><a href="<?=base_url()?>admin/user" class="btn_access">管理者</a></li>
                    <?php } else{ ?>
                        <li><a href="<?=base_url()?>talents/edit" class="btn_access">編集スキル</a></li>
                    <?php } ?>
                    <li><a href="<?=base_url()?>welcome/signout" class="btn_access red">ログアウト</a></li>
                </ul>
            <?php }else { ?>
                <ul id="top_menu">
                    <li><a class="btn_access btn" name="signin">ログイン</a></li>
                    <li><a class="btn_access btn green" name="signup">会員登録</a></li>
                </ul>
            <?php } ?>
            </div>
        </div>
    </div>
</header-->
