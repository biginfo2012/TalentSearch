(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    var indexPage = function() {

        var initUI = function(){
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
                        toastr.success(data.msg);
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
                        toastr.success(data.msg);
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

    jQuery(document).ready(function() {
        indexPage.init();
        $('.candidate').click(function () {
            event.preventDefault();
            if( $(this).parent().parent().next().is(":hidden")){
                $(this).parent().parent().next().show();
            }
            else{
                $(this).parent().parent().next().hide();
            }
        })


    });

    /******/ })()
;
