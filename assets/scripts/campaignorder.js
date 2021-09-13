(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    var indexPage = function() {

        var initUI = function(){
            $(document).on("click", ".js-sort-button-submit", function(e) {
                let campaign_id = $(this).data('campaign-id');
                let type = $(this).data('type');
                let talent_id = $(this).data('talent-id');

                $.ajax({
                    url: HOST_URL + "talents/changeorder",
                    type: 'post',
                    data: {
                        'campaign_id' : campaign_id,
                        'type' : type,
                        'talent_id' : talent_id
                    },
                    dataType: "json",
                    encode: true,
                }).done(function (response) {
                    var data = response;
                    console.log(data)
                    if(data.success){
                        toastr.success(data.msg);
                        talentList();
                    }else{
                        toastr.error(data.msg);
                    }
                });
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
        talentList();

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
        url: HOST_URL + "talents/talentorderlist",
        type: 'post',
        data: lData,
        contentType: false,
        processData: false,
    }).done(function (response) {
        $('#talentorder').html(response);
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