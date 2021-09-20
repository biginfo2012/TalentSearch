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
                    //toastr.success(data.msg);
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
    $(window).scroll(function() {
        // if($(window).scrollTop() + $(window).height() == $(document).height()) {
        //     alert("bottom!");
        // }
        if($(window).scrollTop() > 72) {
            $('.filters_full').addClass('top-72')
            $('.filters_full').removeClass('top');
        }
        if($(window).scrollTop() < 72) {
            $('.filters_full').addClass('top');
            $('.filters_full').removeClass('top-72');
        }
    });
    $('#keyword').keypress(function(ev) {
        if (ev.keyCode === 13) {
            onClickSearch();
        }
    });

    $('.media_link').click(function () {
        window.location.href = $(this).find('a.media-link').attr('href')
    })
    // Hide dropdown menu on click outside
    $(document).on("click", function(event){
        if(!$(event.target).closest(".dropdown-searchcontent").length && !$(event.target).closest(".dropdown-searchbtn").length){
            $('.dropdown-searchbtn').each(function () {
                if($(this).hasClass("active")) {
                    $(this).removeClass("active");
                }
            })
            $('.dropdown-searchcontent').each(function () {
                if($(this).hasClass("show")) {
                    $(this).removeClass("show");
                }
            })
        }
    });

    $('.dropdown-searchbtn').click(function(ev) {
        var contentName = this.getAttribute("content-name");
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $('.dropdown-searchcontent').each(function(){
            if($(this).hasClass(contentName)){
                if($('.'+contentName).hasClass("show")) {
                    $('.'+contentName).removeClass("show");
                    if($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    }
                } else {
                    $('.'+contentName).addClass("show");
                    if(!$(this).hasClass("active")) {
                        $(this).addClass("active");
                    }
                }
            }
            else{
                $(this).removeClass('show');
                if($(this).prev().hasClass("active")) {
                    $(this).prev().removeClass("active");
                }
            }
        })


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
            console.log(this.getAttribute("name"));
        } else {
            $("input[name='" + this.getAttribute("name") + "']").val('');
        }
    });

    $('#per_page').val($('#perpage').val());

    $('#kt_search_form').submit();
}

//# sourceMappingURL=data-ajax.js.map
function onClickClear(){
    $("form label").each(function() {
        if($(this).hasClass("active")) {
           $(this).removeClass('active');
        }
    });
    $("form input").each(function() {
        $(this).val('');
    });
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