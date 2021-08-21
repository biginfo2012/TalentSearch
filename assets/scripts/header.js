(() => { // webpackBootstrap
"use strict";
var __webpack_exports__ = {};

var indexPage = function() {
    var initUI = function(){
        $("a[name=signin]").on("click", function(){
            $("#email").val('');
            $("#password").val('');

            $("#email").focus();
            $("#login_modal").modal('show');
        });
        $("a[name=signup]").on("click", function(){
            $("#signup_modal").modal('show');
        });
        $("a[name=save]").on('click', function(event){
            var loginData = new FormData($("#signup_form")[0]);
            if(loginData.password != loginData.cf_password){
                toastr.error("不一致のパスワード");
                return;
            }
            $.ajax({
                url: HOST_URL + "welcome/signup",
                type: 'post',
                data: loginData,
                contentType: false,
                processData: false,
            }).done(function (response) {
                var data = JSON.parse(response);
                if(data.success){
                    toastr.success(data.msg);
                    $("#signup_modal").modal("hide"); 
                }else{
                    toastr.error(data.msg);
                }
            });
            event.preventDefault();
        });
        $("a[name=login]").on('click', function(event){
            var loginData = new FormData($("#login_form")[0]);
            $.ajax({
                url: HOST_URL + "welcome/signin",
                type: 'post',
                data: loginData,
                contentType: false,
                processData: false,
            }).done(function (response) {
                var data = JSON.parse(response);
                if(data.success){
                    window.location = HOST_URL;
                }else{
                    toastr.error(data.msg);
                }
            });
            event.preventDefault();
        });
    }
    return {
        // public functions
        init: function() {
            initUI();
        },
    };
}();

jQuery(document).ready(function() {
    indexPage.init();

    $('#email').keypress(function(ev) {
        if (ev.keyCode === 13) {
            $('#password').focus();
        }
    });
    $('#password').keypress(function(ev) {
        if (ev.keyCode === 13) {
            var loginData = new FormData($("#login_form")[0]);
            $.ajax({
                url: HOST_URL + "welcome/signin",
                type: 'post',
                data: loginData,
                contentType: false,
                processData: false,
            }).done(function (response) {
                var data = JSON.parse(response);
                if(data.success){
                    window.location = HOST_URL;
                }else{
                    toastr.error(data.msg);
                }
            });
        }
    });
});

/******/ })()
;
//# sourceMappingURL=data-ajax.js.map
