
<header class="header_in clearfix nomargin">
    <div class="row">
        <div id="logo" class="col-md-3">
            <a href="<?=base_url()?>">
                <img alt="" class="lazy" src="<?=asset_url()?>img/logo.png" style="display: inline-block; margin-top: 15px; margin-left: 20px;" width="150" height="40">
            </a>
        </div>
        <div class="col-md-9">
            <ul id="top_menu" style="float:right; padding-top: 0px;">
                <?php if($user) { ?>
                    <li class="nav-item dropdown dropdown-authentication">
                        <a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span style="font-size: 16px;"><i class="zmdi zmdi-chevron-down"></i><?php echo ($user["type"] == 2 ? '管理者' : $user['name']);?></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX" style="margin-top:30px;">
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
                <?php }else { ?>
                    <li><a class="btn_access" name="signin">ログイン</a></li>
                    <li><a class="btn_access green" name="signup">会員登録</a></li>
                <?php } ?>
            </ul>
        </div>
    </div>
</header>

<script src="<?=asset_url()?>scripts/header.js"></script>