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
        $("a[name=search]").on('click', function(){
            $("#search").submit();
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
        $("#search").on('click', function(event){
            $('#form_keyword').val($('#keyword').val());
            $('#kt_search_form').submit();
        })
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
    $('#keyword').keypress(function(ev) {
        if (ev.keyCode === 13) {
            onClickSearch();
        }
    });

    $('.dropdown-searchbtn').click(function(ev) {
        var contentName = this.getAttribute("content-name");
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }

        if($('.'+contentName).hasClass("show")) {
            $('.'+contentName).removeClass("show");
        } else {
            $('.'+contentName).addClass("show");
        }
        $('.'+contentName).hasClass()
    });
});

/******/ })()
;
//# sourceMappingURL=data-ajax.js.map
function onClickSearch(){
    $("form label").each(function() {
        if($(this).hasClass("active")) {
            $("input[name='" + this.getAttribute("name") + "']").val('1');
        } else {
            $("input[name='" + this.getAttribute("name") + "']").val('');
        }
    });

    $('#per_page').val($('#perpage').val());

    $('#kt_search_form').submit();
}

function showSearch(){
    var isVisible = $('.card-footer').is( ":visible" );
    if(isVisible){
        $('.card-footer').collapse('hide');
    }else{
        $('.card-footer').collapse('show');
    }
}
function goPage(page){
    $('#page').val(page);
    $('#form_keyword').val($('#keyword').val());
    $('#kt_search_form').submit();
}

function setGender(value, el){
    var btnGender = $(el).find('div[name=genderType]');
    if(btnGender.hasClass("active")) {
        btnGender.removeClass("active");
    } else {
        btnGender.addClass("active");
    }

    $("#media_media").val(value);
}

function sortBy(value, el){
    $(".symbol-label").removeClass("active");
    $(el).find('.symbol-label').addClass("active");

    if($("#sort").val() == value){
        $("#desc").val($("#desc").val() == 'desc' ? 'asc' : 'desc');
    } else {
        $("#sort").val(value);
        $("#desc").val('desc');
    }

    $('#kt_search_form').submit();
}