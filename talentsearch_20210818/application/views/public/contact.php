<body>

<!-- Main Container -->
<div class="web-in" style="margin-top: 300px;background: #eef0f8;">

    <!-- Header -->
    <header id="sp2" class="center dark1" style="z-index: 0;">
        <div class="header-in">
            <div class="caption">
                <h1>CONTACT</h1>
            </div>
        </div>
    </header>

    <!-- Contact -->
    <div class="c_main ab_main form" >
        <div class="row">
            <div class="c_main_in ab_main_in mt360 pb-0" style="background: white">
                <div class="form_main row form_contact" id="contact_part">
                    <div id="mw_wp_form_mw-wp-form-259" class="mw_wp_form mw_wp_form_input w-100">
                        <form method="post" id="contact_form"><h3 class="medium">お問い合わせフォーム</h3>
                            <h3 class="medium confirm_medium">入力内容確認</h3>
                            <div class="box_gray">
                                <p>下記のフォームよりお気軽にご相談ください。<br>
                                    お客様からいただいた大切な個人情報は、弊社で管理のみに使用し、適切に取り扱います。</p>
                                <p>必要事項をご入力のうえ、「入力内容を確認する」ボタンを押してください。</p>
                            </div>
                            <div class="box_gray confirm_box_gray ">内容をご確認のうえ、「送信する」ボタンを押してください。</div>

                            <dl class="">
                                <dt>会社名</dt>
                                <dd>
                                    <span></span>
                                    <input type="text" name="company_name" size="60" value="">
                                    <span>例：株式会社ハーマンドット</span>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt>ご担当者名<span class="cr-require">必須</span></dt>
                                <dd>
                                    <span></span>
                                    <input type="text" name="charger" size="60" value="" required>
                                    <span>例：山田 太郎</span>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt>電話番号</dt>
                                <dd>
                                    <span></span>
                                    <input type="text" name="tel" size="60" value="">
                                    <span>例：090-1234-5678</span>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt>メールアドレス<span class="cr-require">必須</span></dt>
                                <dd>
                                    <span></span>
                                    <input type="email" id="contact_email" name="email" size="60" value=""
                                           data-conv-half-alphanumeric="true" required>
                                    <span>例：info@hermandot.co.jp</span>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt>御社URL</dt>
                                <dd>
                                    <span></span>
                                    <input type="text" name="url" size="60" value="">
                                    <span>例：https://hermandot.co.jp/cms</span>
                                </dd>
                            </dl>
                            <dl class="">
                                <dt class="act">お問い合わせ内容<span class="cr-require">必須</span></dt>
                                <dd>
                                    <span></span>
                                    <textarea name="content" cols="50" rows="5" required></textarea>
                                </dd>
                            </dl>
                            <div class="btn_wrap">
                                <div class="confirm">
                                    <p>
                                        <button type="submit" id="submit_btn" name="submitConfirm" value="confirm" class="btn g_btn">
                                            入力内容を確認する
                                        </button>
                                    </p>
                                    <p class="effect slideUp delay_06 active">※折り返し弊社からご連絡いたします。</p>
                                </div>
                                <div class="back" style="display: none">
                                    <button type="submit" name="submitBack" value="back" class="btn g_btn btn_back">戻る</button>
                                </div>
                                <div class="submitsend" style="display:none;">
                                    <button type="submit" name="mwform_bsubmit-329" id="send_btn" value="send" class="submitsend btn g_btn wpcf7-submit">送信する</button>
                                </div>
                            </div>
                        </form>
                        <!-- end .mw_wp_form -->
                    </div>
                </div>
                <div class="row" id="complete_part" style="max-width: 822px; margin: 0 auto; display: none">
                    <div class="c_main_in ab_main_in c_main_in_complete" style="margin: 0 auto; text-align: center; font-size: 1.4rem; line-height: 50px; padding: 50px 0; box-shadow: none;">
                        <p><span style="color: #B70F0F; font-weight: bold; font-size: 2rem; display: block; margin-bottom: 20px;">お問い合わせいただき、ありがとうございます。</span><br>自動送信メールにて、お申し込みの方へメールが送信されました。<br>ご確認頂けますようお願い申し上げます。<br>なお、一両日経過してもメールが届かない場合には、<br>ご入力時のメールアドレスが間違っている場合がありますので、<br>誠に恐縮ですが、再度のご連絡をよろしくお願いいたします。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact -->
</div>
<style type="text/css">
    header>div.row{
        display: flex;
        flex-wrap: wrap;
        margin-right: -12.5px;
        margin-left: -12.5px;
        max-width: unset;
    }
    nav#dark {
        background: #0d1422 !important;
    }
    body .web-in, html .web-in {
        height: auto;
        min-height: auto;
        width: 100%;
    }

    .form {
        padding-bottom: 100px;
        position: relative;
        z-index: 2;
    }

    .c_main {
        min-height: 300px;
        margin: 0 auto;
        width: 100%;
        position: relative;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        transform: translateZ(0);
    }

    .c_main:before {
        top: 840px;
    }

    .c_main:before {
        content: '';
        width: 320px;
        height: 760px;
        background: url(../images/bg_triangle.png) no-repeat;
        -moz-background-size: contain;
        background-size: contain;
        display: block;
        position: absolute;
        right: 0;
        bottom: -40px;
        z-index: -1;
    }

    .row {
        max-width: 822px;
        margin: 0 auto;
    }

    .ab_main_in {
        padding: 60px 0;
        background: #fff;
        -moz-box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
        box-shadow: 0px 0px 6px rgb(0 0 0 / 16%);
    }

    .mt360 {
        margin-top: -282px;
    }
    .c_main_in {
        background: #eee;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 0 6px rgb(0 0 0 / 40%);
        margin-top: -180px;
        width: 100%;
    }
    .c_main .row {
        position: relative;
    }
    .form_main {
        background-color: #fff;
    }
    .ab_main_in h3 {
        font-size: 3rem;
        line-height: 44px;
        font-weight: 500;
        text-align: center;
    }
    .medium {
        font-family: 'source-han-serif-japanese', serif;
        font-weight: 500 !important;
        font-style: normal;
        font-size: 28px;
        letter-spacing: 4px;
    }
    .form_contact .confirm_medium, .form_contact .confirm_box_gray {
        display: none;
    }
    .form_main .box_gray {
        background-color: #EEEEEE;
        color: #666666;
        font-size: 1.2rem;
        -moz-border-radius: 8px;
        border-radius: 8px;
        text-align: center;
        padding: 50px;
        width: 800px;
        margin: 0 auto 60px;
    }
    .form_main .box_gray p:not(:last-child) {
        margin-bottom: 30px;
    }
    .form_main form dl {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding: 30px 30px;
        margin-bottom: 0;
        border-top: 1px solid #D3D2D2;
        justify-content: space-between;
    }
    .form_main form dl dt {
        font-size: 1.4rem;
        color: #646263;
        padding: 0 !important;
        font-weight: 400;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: flex-start;
        -webkit-align-items: flex-start;
        -moz-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        background: none;
        width: -webkit-calc(100% - 560px);
        width: -moz-calc(100% - 560px);
        width: calc(100% - 560px);
        position: relative;
    }
    .form_main form dl dd {
        width: 540px;
        position: relative;
        font-size: 1.4rem;
        margin-bottom: 0;
    }
    .form_main form dl dd input[type="text"], .form_main form dl dd input[type="number"], .form_main form dl dd input[type="email"], .form_main form dl dd input[type="url"] {
        -moz-border-radius: 5px;
        border-radius: 5px;
        width: 550px;
        height: 45px;
        padding: 6px 10px;
        outline: none;
        font-size: 1.8rem;
        word-break: keep-all;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid #BDBCBC;
        background-color: #F4F4F4;
    }
    span.cr-require {
        background: #ba1b1b;
        /* line-height: 22px; */
        font-size: 13px;
        width: 40px;
        text-align: center;
        border-radius: 5px;
        padding: 0;
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0;
        margin: auto;
    }
    .form_main form .btn_wrap {
        margin-top: 20px;
        background-image: -webkit-linear-gradient(left, #a39fc9, #80a7c3);
        background-image: -moz-linear-gradient(left, #a39fc9, #80a7c3);
        background-image: linear-gradient(to right, #a39fc9, #80a7c3);
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
    }
    .form_main form .btn_wrap p {
        font-size: 1.4rem;
        color: #FFFFFF;
        margin-top: 30px;
        width: 100%;
    }
    .form_main form .btn_wrap .g_btn {
        width: 340px;
        height: 80px;
    }
    a.g_btn, button.g_btn {
        width: 240px;
        min-height: 60px;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -moz-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.6rem;
        color: #00246E;
        border: 1px solid #00246E;
        position: relative;
        text-decoration: none;
        background-color: #fff;
        font-weight: bold;
        cursor: pointer;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        transform: translateZ(0);
        overflow: hidden;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    a.g_btn:hover::before, button.g_btn:hover::before {
        opacity: 1;
        width: 116%;
    }
    a.g_btn::before, button.g_btn::before {
        content: '';
        width: 0%;
        height: 100%;
        display: block;
        background: #00246E;
        position: absolute;
        -webkit-transform: skewX(
                -20deg
        );
        -moz-transform: skewX(-20deg);
        -ms-transform: skewX(-20deg);
        transform: skewX(
                -20deg
        );
        left: -10%;
        opacity: 1;
        top: 0;
        z-index: -1;
        -webkit-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
        -moz-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
        transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    }
    a.g_btn:hover::after, button.g_btn:hover::after {
        opacity: 1;
        width: 120%;
    }
    a.g_btn::after, button.g_btn::after {
        content: '';
        width: 0%;
        height: 100%;
        display: block;
        background: #cbd0d3;
        position: absolute;
        -webkit-transform: skewX(
                -20deg
        );
        -moz-transform: skewX(-20deg);
        -ms-transform: skewX(-20deg);
        transform: skewX(
                -20deg
        );
        left: -10%;
        opacity: 0;
        top: 0;
        z-index: -15;
        -webkit-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
        -moz-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
        transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    }
    a.g_btn:hover, button.g_btn:hover {
        opacity: 1;
        color: #fff;
    }
    .form_main form .btn_wrap p {
        font-size: 1.4rem;
        color: #FFFFFF;
        margin-top: 30px;
        width: 100%;
    }

    .slideUp.active {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .slideUp {
        -webkit-transform: translate3d(0, 50px, 0);
        -moz-transform: translate3d(0, 50px, 0);
        transform: translate3d(0, 50px, 0);
        opacity: 0;
    }
    .delay_06 {
        -webkit-transition: all 1s ease 0.6s;
        -moz-transition: all 1s ease 0.6s;
        transition: all 1s ease 0.6s;
    }
    .effect {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
    }
</style>
<script type="text/javascript">
    $('#submit_btn').click(function () {
        if($('[name=charger]').val() !== "" && $('#contact_email').val() !== "" && $('[name=content]').val() !== ""){
            event.preventDefault();
            $('input').each(function () {
                let val = $(this).val();
                if(val !== ""){
                    $(this).prev().text(val);
                }
                $(this).attr('type', 'hidden');
                $(this).next().hide();
            })

            let val = $('[name=content]').val();
            $('[name=content]').prev().text(val);
            $('[name=content]').hide()
            $('.confirm').hide();
            $('.back').show();
            $('.submitsend').show();
            window.scrollTo(0, 0);
        }
    })
    $('.back').click(function () {
        event.preventDefault();
        $('input').each(function () {
            $(this).attr('type', 'text');
            $(this).prev().empty()
            $(this).next().show();
        })
        $('[name=content]').prev().empty();
        $('[name=content]').show()
        $('.confirm').show();
        $('.back').hide();
        $('.submitsend').hide();
    })
    $('#send_btn').click(function () {
        event.preventDefault();
        $(this)[0].disabled = true;
        let paramObj = new FormData($("#contact_form")[0]);
        $.ajax({
            url: HOST_URL + "talents/sendcontact",
            type: 'post',
            data: paramObj,
            contentType: false,
            processData: false,
            success: function(response){
                console.log(response);
                var data = JSON.parse(response);
                if(data.success === true){
                    //toastr.success('メールを転送しました');
                    window.scrollTo(0, 0);
                    $('#contact_part').hide();
                    $('#complete_part').show();
                }else{
                    $(this)[0].disabled = false;
                }
            },
        });

    })
    $(window).on("load", function () {
        $(".web-in").addClass("fade-in")
    })
</script>
</body>
</html>