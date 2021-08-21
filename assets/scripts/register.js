arrows = {
    leftArrow: '<i class="la la-angle-right"></i>',
    rightArrow: '<i class="la la-angle-left"></i>'
}
var datatable;
/******/ (() => { // webpackBootstrap
/******/    "use strict";
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../demo1/src/js/pages/crud/ktdatatable/base/data-ajax.js ***!
  \****************************************************************/

// Class definition

var KTDatatableRemoteAjaxDemo = function() {
    // Private functions
    var initUI = function(){
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
    var temp = function (){
        var validation;
        validation = FormValidation.formValidation(
            KTUtil.getById('kt_login_signin_form'),
            {
                fields: {
                    name: {
                        validators: {
                            notEmpty: {
                                message: 'ユーザー名が必要です'
                            }
                        }
                    },
                    email: {
                        validators: {
                            notEmpty: {
                                message: 'メールアドレスは必須です'
                            },
                            emailAddress: {
                                message: 'メールアドレスを入力してください。'
                            }
                        }
                    },
                    post_code: {
                        validators: {
                            notEmpty: {
                                message: '郵便番号は必須です'
                            }
                        }
                    },
                    mobile: {
                        validators: {
                            notEmpty: {
                                message: '携帯電話は必須です'
                            }
                        }
                    },
                    nick_name: {
                        validators: {
                            notEmpty: {
                                message: 'ふりがなは必須です'
                            }
                        }
                    },
                    address: {
                        validators: {
                            notEmpty: {
                                message: '住所は必須です'
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
            validation.validate().then(function(status) {
                if (status == 'Valid') {
                    var paramObj = new FormData($("form")[0]);
                    var files = $('#avatar')[0].files;
                    paramObj.append("belonging",JSON.stringify($("select[name=belonging]").val()));
                    paramObj.append("talent",JSON.stringify($("select[name=talent]").val()));
                    // Check file selected or not
                    if(files.length > 0 ){
                        paramObj.append('file',files[0]);
                    }
                    $.ajax({
                        url: HOST_URL + "talents/save",
                        type: 'post',
                        data: paramObj,
                        contentType: false,
                        processData: false,
                        success: function(response){
                            var data = JSON.parse(response);
                            if(data.success == true){
                                toastr.success(data.msg);
                                $("#kt_select2_modal").modal('hide');
                            }else{
                                toastr.error(data.msg)
                            }
                        },
                    });
                }else{
                    return;
                }
            });
            
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