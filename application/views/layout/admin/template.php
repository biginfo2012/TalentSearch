<!DOCTYPE html>
<html lang="en">
    <!--begin::Head-->
    <head><base href="../../">
        <meta charset="utf-8" />
        <title>インフルエンサー</title>
        <meta name="description" content="No aside layout examples" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="canonical" href="https://keenthemes.com/metronic" />
        <link href="<?=asset_url()?>plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>css/style.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>css/themes/layout/header/base/light.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>css/themes/layout/header/menu/light.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>css/themes/layout/brand/light.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>css/themes/layout/aside/dark.css" rel="stylesheet" type="text/css" />



        <!-- BASE CSS -->
        <link href="<?=asset_url()?>css/bootstrap_customized.min.css" rel="stylesheet">
        <link href="<?=asset_url()?>css/style.css" rel="stylesheet">
        <link href="<?=asset_url()?>css/toastr.min.css" rel="stylesheet">
        <script src="<?=asset_url()?>js/jquery.js"></script>

        <!-- SPECIFIC CSS -->
        <link href="<?=asset_url()?>css/listing.css" rel="stylesheet">
        <link href="<?=asset_url()?>css/home.css" rel="stylesheet">
        <link href="<?=asset_url()?>css/account.css" rel="stylesheet">
        <link href="<?=asset_url()?>css/custom.css" rel="stylesheet">

        <!-- YOUR CUSTOM CSS -->
        <link href="<?=asset_url()?>/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>/plugins/custom/prismjs/prismjs.bundle.css" rel="stylesheet" type="text/css" />
        <link href="<?=asset_url()?>/css/style.bundle.css" rel="stylesheet" type="text/css" />



        <script src="<?=asset_url()?>js/jquery.js"></script>
        <link rel="shortcut icon" href="<?=asset_url()?>img/favicon.ico" />
    </head>
    <body id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed page-loading">
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="d-flex flex-row flex-column-fluid page">
                <!--begin::Wrapper-->
                <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                    <?php
                        if (isset($header))
                        {
                            echo $header;
                        }

                        if (isset($content))
                        {
                            echo $content;
                        }
                        if (isset($footer))
                        {
                            echo $footer;
                        }
                    ?>
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Page-->
        </div>
        <!--end::Demo Panel-->
        <!--begin::Global Config(global config for global JS scripts)-->
        <script>var KTAppSettings = { "breakpoints": { "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1400 }, "colors": { "theme": { "base": { "white": "#ffffff", "primary": "#3699FF", "secondary": "#E5EAEE", "success": "#1BC5BD", "info": "#8950FC", "warning": "#FFA800", "danger": "#F64E60", "light": "#E4E6EF", "dark": "#181C32" }, "light": { "white": "#ffffff", "primary": "#E1F0FF", "secondary": "#EBEDF3", "success": "#C9F7F5", "info": "#EEE5FF", "warning": "#FFF4DE", "danger": "#FFE2E5", "light": "#F3F6F9", "dark": "#D6D6E0" }, "inverse": { "white": "#ffffff", "primary": "#ffffff", "secondary": "#3F4254", "success": "#ffffff", "info": "#ffffff", "warning": "#ffffff", "danger": "#ffffff", "light": "#464E5F", "dark": "#ffffff" } }, "gray": { "gray-100": "#F3F6F9", "gray-200": "#EBEDF3", "gray-300": "#E4E6EF", "gray-400": "#D1D3E0", "gray-500": "#B5B5C3", "gray-600": "#7E8299", "gray-700": "#5E6278", "gray-800": "#3F4254", "gray-900": "#181C32" } }, "font-family": "Poppins" };</script>
        <!--end::Global Config-->
        <!--begin::Global Theme Bundle(used by all pages)-->
    
        <script src="<?=asset_url()?>plugins/global/plugins.bundle.js"></script>
        <script src="<?=asset_url()?>plugins/custom/prismjs/prismjs.bundle.js"></script>
        <script src="<?=asset_url()?>js/scripts.bundle.js"></script>
        <!--end::Global Theme Bundle-->
        <!--begin::Page Vendors(used by this page)-->
        <script src="<?=asset_url()?>plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
        <script src="<?=asset_url()?>plugins/custom/gmaps/gmaps.js"></script>
        <!--end::Page Vendors-->
        <!--begin::Page Scripts(used by this page)-->
        <script src="<?=asset_url()?>js/pages/widgets.js"></script>
        <!--end::Page Scripts-->
    </body>
    <!--end::Body-->
</html>