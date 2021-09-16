var ICON_SUITE = ICON_SUITE || {};
$(function () {
    $(".js-influencer-search-button").click(function () {
        return "none" === $("#client_search_form").css("display") ? ($(".side").addClass("open-side-search"), $("#client_search_form").slideDown(300, "swing")) : ($(".side").removeClass("open-side-search"), $("#client_search_form").slideUp(300, "swing")), !1
    })
});