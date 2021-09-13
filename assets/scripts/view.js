(() => { // webpackBootstrap
"use strict";
var __webpack_exports__ = {};

var indexPage = function() {
        
    var initUI = function(){
        $("a[name=signin]").on("click", function(){
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
                    windows.reload();
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
    $("[name=copy]").on("click", function(){
        $("#copy_modal").modal('show');
    });
    $('#copy_btn').click(function () {
        var copyData = new FormData($("#copy_form")[0]);
        $.ajax({
            url: HOST_URL + "talents/copy",
            type: 'post',
            data: copyData,
            contentType: false,
            processData: false,
        }).done(function (response) {
            var a = $("<a />", {
                href: 'data:application/csv;charset=UTF-8,' + encodeURIComponent(response),
                "download":"filename.csv"
            });
            $("body").append(a);
            a[0].click();
            // var uri = 'data:application/csv;charset=UTF-8,' + encodeURIComponent(response);
            // window.open(uri, 'test.csv');
            // var data = JSON.parse(response);
            // if(data.success){
            //     toastr.success(data.msg);
            //     $("#signup_modal").modal("hide");
            // }else{
            //     toastr.error(data.msg);
            // }
        });

    })
    $('#comment_post').click(function () {
        let talent_id = $('#talent_id').val();
        let comment = $('#comment').val();
        if(comment === ""){
            toastr.error("コメントを入力してください。");
        }
        else{
            $.ajax({
                url: HOST_URL + "talents/commentpost",
                type: 'post',
                data: {'talent_id' : talent_id, 'comment' : comment},
                dataType: "json",
                encode: true,
            }).done(function (response) {
                var data = response;
                if(data.success){
                    toastr.success(data.msg);
                }else{
                    toastr.error(data.msg);
                }
            });
        }


    })
    $('#keyword').keypress(function(ev) {
        if (ev.keyCode === 13) {
            $('#form_keyword').val(!ev.target.value ? '' : ev.target.value);
            $('#kt_search_form').submit();
        }
    });
    $('#btn_submit').click(function () {
        document.send.submit();
    })
    $('.bookmark').click(function () {
        let id = $(this).data('influencer-id');
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $.ajax({
                url: HOST_URL + "talents/delFavourite/" + id,
                type: 'post',
                contentType: false,
                processData: false,
            }).done(function (response) {
                var data = JSON.parse(response);
                if(data.success){
                    toastr.success(data.msg);
                }else{
                    toastr.error(data.msg);
                }
            });
        }
        else{
            $(this).addClass('on')
            $.ajax({
                url: HOST_URL + "talents/addFavourite/" + id,
                type: 'post',
                contentType: false,
                processData: false,
            }).done(function (response) {
                var data = JSON.parse(response);
                if(data.success){
                    toastr.success(data.msg);
                }else{
                    toastr.error(data.msg);
                }
            });
        }
    })
});

/******/ })()
;
//# sourceMappingURL=data-ajax.js.map

