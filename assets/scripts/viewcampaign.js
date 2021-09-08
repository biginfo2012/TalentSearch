(() => { // webpackBootstrap
    "use strict";
    var __webpack_exports__ = {};

    var indexPage = function() {

        var initUI = function(){

            $("a[name=search]").on('click', function(){
                $("#search").submit();
            });

            $("#search").on('click', function(event){
                $('#form_keyword').val($('#keyword').val());
                //$('#kt_search_form').submit();
                userList()
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
        userList()
        $('#keyword').keypress(function(ev) {
            if (ev.keyCode === 13) {
                onClickSearch();
            }
        });

        $('#all_check').click(function () {
            console.log($(this)[0].checked)
            if($(this)[0].checked){
                let con = confirm("全て追加します。 いいですか？\n" +
                    "この操作はキャンセルできません。")
                if(con){
                    $('input:checkbox').not(this).prop('checked', this.checked);
                    let campaign_id = $('#campaign_id').val();
                    $.ajax({
                        url: HOST_URL + "talents/addalltalent",
                        type: 'post',
                        data: {
                            'campaign_id' : campaign_id,
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
                }
                else{
                    $(this)[0].checked = false;
                }
            }
            else{
                $('input:checkbox').not(this).prop('checked', this.checked);
                let campaign_id = $('#campaign_id').val();
                $.ajax({
                    url: HOST_URL + "talents/delalltalent",
                    type: 'post',
                    data: {
                        'campaign_id' : campaign_id,
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
            }
        })
        $(document).on('click','input:checkbox',function () {
            console.log($(this)[0].checked);
            if($(this).attr('id') !== 'all_check'){
                console.log($(this)[0].checked);
                if($(this)[0].checked){
                    let campaign_id = $('#campaign_id').val();
                    let talent_id = $(this).data('talent-id');

                    $.ajax({
                        url: HOST_URL + "talents/addtalent",
                        type: 'post',
                        data: {
                            'campaign_id' : campaign_id,
                            'talent_id' : talent_id
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
                }
                else{
                    let campaign_id = $('#campaign_id').val();
                    let talent_id = $(this).data('talent-id');

                    $.ajax({
                        url: HOST_URL + "talents/deltalent",
                        type: 'post',
                        data: {
                            'campaign_id' : campaign_id,
                            'talent_id' : talent_id
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
                }
            }
        })

        $('.media_link').click(function () {
            window.location.href = $(this).find('a.media-link').attr('href')
        })
        // Hide dropdown menu on click outside

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