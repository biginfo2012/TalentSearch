arrows = {
    leftArrow: '<i class="la la-angle-right"></i>',
    rightArrow: '<i class="la la-angle-left"></i>'
}
var datatable;
/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
    var __webpack_exports__ = {};
    /*!****************************************************************!*\
      !*** ../demo1/src/js/pages/crud/ktdatatable/base/data-ajax.js ***!
      \****************************************************************/

// Class definition

    var KTDatatableRemoteAjaxDemo = function() {
        // Private functions
        var initUI = function(){
            $('input[name=account_type]').click(function () {
                let type = $('input[name="account_type"]:checked').val();
                console.log(type);
                if(type === 'Instagram'){
                    $('#instagram_part').show();
                    $('#twitter_part').hide();
                    $('#youtube_part').hide();
                    $('#tiktok_part').hide();
                }
                if(type === 'Twitter'){
                    $('#twitter_part').show();
                    $('#instagram_part').hide();
                    $('#youtube_part').hide();
                    $('#tiktok_part').hide();
                }
                if(type === 'Youtube'){
                    $('#youtube_part').show();
                    $('#instagram_part').hide();
                    $('#twitter_part').hide();
                    $('#tiktok_part').hide();
                }
                if(type === 'TikTok'){
                    $('#tiktok_part').show();
                    $('#instagram_part').hide();
                    $('#twitter_part').hide();
                    $('#youtube_part').hide();
                }

            })
            $("input[name=mobile]").inputmask("mask", {
                "mask": "999-9999-9999"
            });
            $("input[name=post_code]").inputmask("mask", {
                "mask": "999-9999"
            });
            $('input[name=birthday]').datepicker({
                rtl: KTUtil.isRTL(),
                orientation: "bottom left",
                todayHighlight: true,
                templates: arrows,
                format: "yyyy-mm-dd"
            });
            $('input[name=post_day]').datepicker({
                rtl: KTUtil.isRTL(),
                orientation: "bottom left",
                todayHighlight: true,
                templates: arrows,
                format: "yyyy-mm-dd"
            });
            $('#kt_select2_3').select2({
                placeholder: '',
                "language": {
                    "noResults": function(){
                        return "結果が見つかりません";
                    }
                },
            });
            $('#kt_select2_4').select2({
                placeholder: '',
                "language": {
                    "noResults": function(){
                        return "結果が見つかりません";
                    }
                },
            });
            $('[name=talent_id]').change(function () {
                for(var i = 0; i < talents.length; i++){
                    if(talents[i]['id'] == $(this).val()){
                        if(talents[i]['name'] === ""){
                            $('#name').val("名前ない");
                        }
                        else{
                            $('#name').val(talents[i]['name']);
                        }
                        if(talents[i]['gender'] == "1"){
                            $('#gender').val("男性");
                        }
                        else{
                            $('#gender').val("女性");
                        }
                        $('#email').val(talents[i]['email']);
                        $('#occupation').val(talents[i]['occupation']);
                        $('#belonging').val(talents[i]['belonging']);
                        $('#activity_base').val(talents[i]['activity_base']);
                        let upload_url = $('#upload_url').val();
                        let url = 'url(' + upload_url + talents[i]['it_img'] + ')';
                        $('#it_img').css('background-image', url);
                        console.log(url);
                    }
                }
            })
            if($('#insite').val() !== ""){
                let insite = JSON.parse($('#insite').val());
                $('[name=talent_id]').val(insite['talent_id']).trigger('change')
                let type = insite['type'];
                if(type === 'Instagram'){
                    $("#instagram").prop("checked", true).trigger("click");

                }
                if(type === 'Twitter'){
                    $("#twitter").prop("checked", true).trigger("click");
                }
                if(type === 'Youtube'){
                    $("#youtube").prop("checked", true).trigger("click");
                }
                if(type === 'TikTok'){
                    $("#tiktok").prop("checked", true).trigger("click");
                }
            }
            $('#kt_select2_5').select2({
                placeholder: '',
                "language": {
                    "noResults": function(){
                        return "結果が見つかりません";
                    }
                },
            });
            $('#kt_select2_10').select2({
                placeholder: '',
                minimumResultsForSearch: Infinity
            });
            // ClassicEditor
            //     .create( document.querySelector( '#kt-ckeditor-1' ),{
            //         language: 'jp'
            //     } )
            //     .then( editor => {
            //         console.log( editor );
            //     } )
            //     .catch( error => {
            //         console.error( error );
            //     } );
            // ClassicEditor
            //     .create( document.querySelector( '#kt-ckeditor-2' ) ,{
            //         language: 'jp'
            //     } )
            //     .then( editor => {
            //         console.log( editor );
            //     } )
            //     .catch( error => {
            //         console.error( error );
            //     } );
        }
        let talents = JSON.parse($('#talents').val());
        var temp = function (id){
            var validation_it;
            validation_it = FormValidation.formValidation(
                KTUtil.getById('kt_instagram_form'),
                {
                    fields: {
                        client_name: {
                            validators: {
                                notEmpty: {
                                    message: 'クライアント名が必要です'
                                }
                            }
                        },
                        subject_name: {
                            validators: {
                                notEmpty: {
                                    message: '案件名が必須です'
                                }
                            }
                        },
                        genre: {
                            validators: {
                                notEmpty: {
                                    message: 'ジャンルは必須です'
                                }
                            }
                        },
                        post_url: {
                            validators: {
                                notEmpty: {
                                    message: '投稿URLは必須です'
                                }
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: '依頼金額は必須です'
                                }
                            }
                        },
                        post_day: {
                            validators: {
                                notEmpty: {
                                    message: '投稿日は必須です'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap()
                    }
                }
            );
            var validation_tw;
            validation_tw = FormValidation.formValidation(
                KTUtil.getById('kt_twitter_form'),
                {
                    fields: {
                        client_name: {
                            validators: {
                                notEmpty: {
                                    message: 'クライアント名が必要です'
                                }
                            }
                        },
                        subject_name: {
                            validators: {
                                notEmpty: {
                                    message: '案件名が必須です'
                                }
                            }
                        },
                        genre: {
                            validators: {
                                notEmpty: {
                                    message: 'ジャンルは必須です'
                                }
                            }
                        },
                        post_url: {
                            validators: {
                                notEmpty: {
                                    message: '投稿URLは必須です'
                                }
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: '依頼金額は必須です'
                                }
                            }
                        },
                        post_day: {
                            validators: {
                                notEmpty: {
                                    message: '投稿日は必須です'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap()
                    }
                }
            );
            var validation_yt;
            validation_yt = FormValidation.formValidation(
                KTUtil.getById('kt_youtube_form'),
                {
                    fields: {
                        client_name: {
                            validators: {
                                notEmpty: {
                                    message: 'クライアント名が必要です'
                                }
                            }
                        },
                        subject_name: {
                            validators: {
                                notEmpty: {
                                    message: '案件名が必須です'
                                }
                            }
                        },
                        genre: {
                            validators: {
                                notEmpty: {
                                    message: 'ジャンルは必須です'
                                }
                            }
                        },
                        post_url: {
                            validators: {
                                notEmpty: {
                                    message: '投稿URLは必須です'
                                }
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: '依頼金額は必須です'
                                }
                            }
                        },
                        post_day: {
                            validators: {
                                notEmpty: {
                                    message: '投稿日は必須です'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap()
                    }
                }
            );
            var validation_tt;
            validation_tt = FormValidation.formValidation(
                KTUtil.getById('kt_tiktok_form'),
                {
                    fields: {
                        client_name: {
                            validators: {
                                notEmpty: {
                                    message: 'クライアント名が必要です'
                                }
                            }
                        },
                        subject_name: {
                            validators: {
                                notEmpty: {
                                    message: '案件名が必須です'
                                }
                            }
                        },
                        genre: {
                            validators: {
                                notEmpty: {
                                    message: 'ジャンルは必須です'
                                }
                            }
                        },
                        post_url: {
                            validators: {
                                notEmpty: {
                                    message: '投稿URLは必須です'
                                }
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: '依頼金額は必須です'
                                }
                            }
                        },
                        post_day: {
                            validators: {
                                notEmpty: {
                                    message: '投稿日は必須です'
                                }
                            }
                        }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation
                        bootstrap: new FormValidation.plugins.Bootstrap()
                    }
                }
            );

            $("button[name=save]").on('click', function (event) {
                event.preventDefault();
                let type = $('input[name="account_type"]:checked').val();
                let talent_id = $('#kt_select2_4').val();
                let id = $('#insite_id').val();
                console.log(talent_id);
                if(talent_id !== ''){
                    if(type === 'Instagram'){
                        validation_it.validate().then(function(status) {
                            if (status == 'Valid') {
                                var paramObj = new FormData($("form")[0]);
                                paramObj.append('type',type);
                                paramObj.append('talent_id',talent_id);
                                paramObj.append('id',id);
                                $.ajax({
                                    url: HOST_URL + "admin/insite/save",
                                    type: 'post',
                                    data: paramObj,
                                    contentType: false,
                                    processData: false,
                                    success: function(response){
                                        var data = JSON.parse(response);
                                        if(data.success == true){
                                            toastr.success(data.msg);
                                        }else{
                                            toastr.error(data.msg)
                                        }
                                    },
                                });
                            }else{
                                return;
                            }
                        });
                    }
                    if(type === 'Twitter'){
                        validation_tw.validate().then(function(status) {
                            if (status == 'Valid') {
                                var paramObj = new FormData($("form")[1]);
                                paramObj.append('type',type);
                                paramObj.append('talent_id',talent_id);
                                paramObj.append('id',id);
                                $.ajax({
                                    url: HOST_URL + "admin/insite/save",
                                    type: 'post',
                                    data: paramObj,
                                    contentType: false,
                                    processData: false,
                                    success: function(response){
                                        var data = JSON.parse(response);
                                        if(data.success == true){
                                            toastr.success(data.msg);
                                        }else{
                                            toastr.error(data.msg)
                                        }
                                    },
                                });
                            }else{
                                return;
                            }
                        });
                    }
                    if(type === 'Youtube'){
                        validation_yt.validate().then(function(status) {
                            if (status == 'Valid') {
                                var paramObj = new FormData($("form")[2]);
                                paramObj.append('type',type);
                                paramObj.append('talent_id',talent_id);
                                paramObj.append('id',id);
                                $.ajax({
                                    url: HOST_URL + "admin/insite/save",
                                    type: 'post',
                                    data: paramObj,
                                    contentType: false,
                                    processData: false,
                                    success: function(response){
                                        var data = JSON.parse(response);
                                        if(data.success == true){
                                            toastr.success(data.msg);
                                        }else{
                                            toastr.error(data.msg)
                                        }
                                    },
                                });
                            }else{
                                return;
                            }
                        });
                    }
                    if(type === 'TikTok'){
                        validation_tt.validate().then(function(status) {
                            if (status == 'Valid') {
                                var paramObj = new FormData($("form")[3]);
                                paramObj.append('type',type);
                                paramObj.append('talent_id',talent_id);
                                paramObj.append('id',id);
                                $.ajax({
                                    url: HOST_URL + "admin/insite/save",
                                    type: 'post',
                                    data: paramObj,
                                    contentType: false,
                                    processData: false,
                                    success: function(response){
                                        var data = JSON.parse(response);
                                        if(data.success == true){
                                            toastr.success(data.msg);
                                        }else{
                                            toastr.error(data.msg)
                                        }
                                    },
                                });
                            }else{
                                return;
                            }
                        });
                    }
                }
                else{
                    toastr.error("インフルエンサーを選択してください。");
                }

            });
        }
        return {
            // public functions
            init: function() {
                initUI();
                temp();
            },
        };
    }();

    jQuery(document).ready(function() {
        KTDatatableRemoteAjaxDemo.init();
    });

    /******/ })()
;
//# sourceMappingURL=data-ajax.js.map