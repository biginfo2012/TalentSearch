(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    var indexPage = function() {

        var initUI = function(){
            $(document).on("change", ".js-update-is-display-price", function(e) {
                let campaign_id = $(this).data('campaign-id');
                let price_type = $(this).data('price-type');
                let comment = $(this)[0].checked;
                let value;
                if(comment){
                    value = 1;
                }
                else{
                    value = 0;
                }
                console.log(comment);

                $.ajax({
                    url: HOST_URL + "talents/changeprice",
                    type: 'post',
                    data: {
                        'campaign_id' : campaign_id,
                        'price_type' : price_type,
                        'value' : value
                    },
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    console.log(data)
                    if(data.success){
                        toastr.success(data.msg);
                    }else{
                        toastr.error(data.msg);
                    }
                });
            })
            $(document).on("change", ".js-update-price", function(e) {
                let campaign_id = $(this).data('campaign-id');
                let price_type = $(this).data('price-type');
                let talent_id = $(this).data('talent-id');
                let value = $(this).val();
                if(value !== ""){
                    $.ajax({
                        url: HOST_URL + "talents/updateprice",
                        type: 'post',
                        data: {
                            'campaign_id' : campaign_id,
                            'price_type' : price_type,
                            'talent_id' : talent_id,
                            'value' : value
                        },
                        dataType: "json",
                        encode: true,
                    }).done(function (response) {
                        var data = response;
                        console.log(data)
                        if(data.success){
                            toastr.success(data.msg);
                            let net = data.net_price;
                            let gross = data.gross_price;
                            $('#net_price').text(net);
                            $('#gross_price').text(gross);
                        }else{
                            toastr.error(data.msg);
                        }
                    });
                }

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

    userList()
}

function userList() {
    var lData = new FormData($("#kt_search_form")[0]);
    $.ajax({
        url: HOST_URL + "talents/userlist",
        type: 'post',
        data: lData,
        contentType: false,
        processData: false,
    }).done(function (response) {
        $('#search_list').html(response);
        //console.log(response)
    });

}
function talentList() {
    var lData = new FormData($("#kt_search_form")[0]);
    $.ajax({
        url: HOST_URL + "talents/talentlist",
        type: 'post',
        data: lData,
        contentType: false,
        processData: false,
    }).done(function (response) {
        $('#talent_list').html(response);
        console.log($('#cnt_talent').val());
        console.log($('#sum_fw').val());
        $('#group_list_influencer_count').text($('#cnt_talent').val())
        $('#group_list_total_fan_count').text($('#sum_fw').val())

        //console.log(response)
    });

}

function goPage(page){
    $('#page').val(page);
    $('#form_keyword').val($('#keyword').val());
    //$('#kt_search_form').submit();
    userList()
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
    userList()
    //$('#kt_search_form').submit();
}