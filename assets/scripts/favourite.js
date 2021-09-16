(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    var indexPage = function() {

        var initUI = function(){
            $(document).on("mouseenter", "[rel~=tooltip]", function () {
                var t = $(this), e = t.attr("title"), i = $('<div id="tooltip"></div>');
                if (!e || "" == e) return !1;
                t.removeAttr("title"), i.css("opacity", 0).html(e).appendTo("body");
                var n = function () {
                    $(window).width() < 1.5 * i.outerWidth() ? i.css("max-width", $(window).width() / 2) : i.css("max-width", 340);
                    var e = t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                        n = t.offset().top - i.outerHeight() - 20;
                    if (e < 0 ? (e = t.offset().left, i.addClass("left")) : i.removeClass("left"), e + i.outerWidth() > $(window).width() ? (e = t.offset().left - i.outerWidth() + t.outerWidth() / 2 + 20, i.addClass("right")) : i.removeClass("right"), n < 0) {
                        var n = t.offset().top + t.outerHeight();
                        i.addClass("top")
                    } else i.removeClass("top");
                    i.css({left: e, top: n}).animate({top: "+=10", opacity: 1}, 50)
                };
                n(), $(window).resize(n);
                var s = function () {
                    i.animate({top: "-=10", opacity: 0}, 50, function () {
                        $(this).remove()
                    }), t.attr("title", e)
                };
                t.bind("mouseleave", s), i.bind("click", s)
            });
            $(document).on("mouseenter", ".clipboard-btn", function () {
                var t = $(this), e = t.attr("title"), i = $('<div id="tooltip"></div>');
                if (!e || "" == e) return !1;
                t.removeAttr("title"), i.css("opacity", 0).html(e).appendTo("body");
                var n = function () {
                    $(window).width() < 1.5 * i.outerWidth() ? i.css("max-width", $(window).width() / 2) : i.css("max-width", 340);
                    var e = t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                        n = t.offset().top - i.outerHeight() - 20;
                    if (e < 0 ? (e = t.offset().left, i.addClass("left")) : i.removeClass("left"), e + i.outerWidth() > $(window).width() ? (e = t.offset().left - i.outerWidth() + t.outerWidth() / 2 + 20, i.addClass("right")) : i.removeClass("right"), n < 0) {
                        var n = t.offset().top + t.outerHeight();
                        i.addClass("top")
                    } else i.removeClass("top");
                    i.css({left: e, top: n}).animate({top: "+=10", opacity: 1}, 50)
                };
                n(), $(window).resize(n);
                var s = function () {
                    i.animate({top: "-=10", opacity: 0}, 50, function () {
                        $(this).remove()
                    }), t.attr("title", e)
                };
                t.bind("mouseleave", s), t.bind("click", s)
            });

            $(document).on("click", ".clipboard-btn", function () {
                var t = $(this), e = 'コピーしました', i = $('<div id="tooltip"></div>');
                if (!e || "" == e) return !1;
                t.removeAttr("title"), i.css("opacity", 0).html(e).appendTo("body");
                var n = function () {
                    $(window).width() < 1.5 * i.outerWidth() ? i.css("max-width", $(window).width() / 2) : i.css("max-width", 340);
                    var e = t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                        n = t.offset().top - i.outerHeight() - 20;
                    if (e < 0 ? (e = t.offset().left, i.addClass("left")) : i.removeClass("left"), e + i.outerWidth() > $(window).width() ? (e = t.offset().left - i.outerWidth() + t.outerWidth() / 2 + 20, i.addClass("right")) : i.removeClass("right"), n < 0) {
                        var n = t.offset().top + t.outerHeight();
                        i.addClass("top")
                    } else i.removeClass("top");
                    i.css({left: e, top: n}).animate({top: "+=10", opacity: 1}, 50)
                };
                n(), $(window).resize(n);
                var s = function () {
                    i.animate({top: "-=10", opacity: 0}, 50, function () {
                        $(this).remove()
                    }), t.attr("title", "クリップボードにURLをコピーします")
                };
                t.bind("mouseleave", s), i.bind("click", s)
            });


            $( '.clipboard-btn' ).click( function()
            {
                var clipboardText = "";
                clipboardText = $(this).prev().val();
                copyToClipboard( clipboardText );
            });
            $(".js-open-influencer-group-list").click(function(e) {
                return e.preventDefault(),
                    $(this).toggleClass("open-list"),
                    $(this).next("div").slideToggle(300, "swing"),
                    !1
            });
            $('.js-sort-order-enable').click(function (e) {
                e.preventDefault();

                $('.js-sort-order-enable').each(function(){
                    if($(this).hasClass('disabled')){
                        $(this).removeClass('disabled');
                    }
                })
                $(this).addClass('disabled');
                let sort_type = $(this).data('sort-type');

                let type = $('#tab').val();
                console.log(type);
                let id = $('#campaign_id').val();
                $.ajax({
                    url: HOST_URL + "talents/campaignsort",
                    type: 'post',
                    data: {'sort_type' : sort_type, 'type' : type, 'id' : id},
                    dataType: "json",
                    complete: function(r){
                        if(type === 'instagram'){
                            $('#instagram_table').html(r.responseText);
                        }
                        if(type === 'youtube'){
                            $('#youtube_table').html(r.responseText);
                        }
                        if(type === 'twitter'){
                            $('#twitter_table').html(r.responseText);
                        }
                    }
                }).done(function (response) {
                    // if(type === 'instagram'){
                    //     $('#instagram_table').html(response);
                    // }
                });


            })
            $('#chart_view').click(function () {
                $(this).parent().parent().next().removeClass('d-none');
                $(this).parent().parent().hide();
            })
            $('.js-generate-group-public-access-url').click(function () {
                let campaign_id = $(this).data('group-id');
                console.log(campaign_id)

                $.ajax({
                    url: HOST_URL + "talents/publicviewcampaign",
                    type: 'post',
                    data: {'id' : campaign_id},
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    console.log(data)
                    if(data.success){
                        ////toastr.success(data.msg);
                        window.location.reload();
                    }else{
                        toastr.error(data.msg);
                    }
                });
            })
            $('.js-generate-group-public-access-edit-url').click(function () {
                let campaign_id = $(this).data('group-id');
                console.log(campaign_id)

                $.ajax({
                    url: HOST_URL + "talents/publiceditcampaign",
                    type: 'post',
                    data: {'id' : campaign_id},
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    console.log(data)
                    if(data.success){
                       // //toastr.success(data.msg);
                        window.location.reload();
                    }else{
                        toastr.error(data.msg);
                    }
                });
            })
            $(".js-delete-group").on('click', function(event){
                let campaign_id = $(this).data('group-id');
                console.log(campaign_id)

                $.ajax({
                    url: HOST_URL + "talents/deletecampaign",
                    type: 'post',
                    data: {'id' : campaign_id},
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    console.log(data)
                    if(data.success){
                       // //toastr.success(data.msg);
                        window.location.reload();
                    }else{
                        toastr.error(data.msg);
                    }
                });
            });
            $(".js-copy-group").on('click', function(event){
                let campaign_id = $(this).data('group-id');

                $.ajax({
                    url: HOST_URL + "talents/copycampaign",
                    type: 'post',
                    data: {'id' : campaign_id},
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    if(data.success){
                       // //toastr.success(data.msg);
                        window.location.reload();
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

    function copyToClipboard(text) {

        var textArea = document.createElement( "textarea" );
        textArea.value = text;
        document.body.appendChild( textArea );
        textArea.select();

        try {
            var successful = document.execCommand( 'copy' );
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy',err);
        }
        document.body.removeChild( textArea );
    }

    jQuery(document).ready(function() {
        indexPage.init();
        // $('.candidate').click(function () {
        //     event.preventDefault();
        //     if( $(this).parent().parent().next().is(":hidden")){
        //         $(this).parent().parent().next().show();
        //     }
        //     else{
        //         $(this).parent().parent().next().hide();
        //     }
        // })


    });

    /******/ })()
;
