function getSelectedTagsInSideMenu() {
    const e = [];
    return $(".selected-influencer-tags").each(function () {
        e.push($(this).text())
    }), e
}

var ICON_SUITE = ICON_SUITE || {};
$(function () {
    function e() {
        const e = getSelectedTagsInSideMenu(), a = [];
        for (const n of s) if (!e.find(e => e == n.name)) {
            const e = $("<p />").text(n.name).html();
            a.push(`<option label="${n.count}\u4ef6">${e}</option>`)
        }
        $("#tag-datalist-in-side-menu").html(a.join(""))
    }

    function a() {
        // $.ajax({
        //     url: `/client/tag/tag_list`, type: "GET", dataType: "JSON", timeout: 3e4, success(a) {
        //         s = a.tags, e()
        //     }
        // })
    }

    function n(e) {
        const a = $("<p />").text(e).html();
        $(".js-influencer-tags-in-side-menu").append(`\n      <div class="influencer-tag">\n        <span class="selected-influencer-tags">${a}</span><span class="js-remove-tag-button-in-side-menu"><i class="tag-delete-button"><i class="material-icons">highlight_off</i></i></span>\n      </div>`)
    }

    function t() {
        const a = $(".js-tag-name-input-in-side-menu").val();
        return a ? s.find(e => e.name == a) ? getSelectedTagsInSideMenu().find(e => e == a) ? void alert(`\u300c${a}\u300d\u306f\u65e2\u306b\u691c\u7d22\u6761\u4ef6\u306b\u5165\u3063\u3066\u3044\u307e\u3059`) : (n(a), $(".js-tag-name-input-in-side-menu").val(""), r(), void e()) : void alert("\u5b58\u5728\u3057\u306a\u3044\u30ab\u30b9\u30bf\u30e0\u30bf\u30b0\u3067\u3059") : void alert("\u30ab\u30b9\u30bf\u30e0\u30bf\u30b0\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")
    }

    function r() {
        ICON_SUITE.isSearchInputChanged = !0, $("#tags").val(getSelectedTagsInSideMenu().join("<sep>"))
    }

    let s = [];
    $(".js-influencer-tags-in-side-menu").on("click", ".js-remove-tag-button-in-side-menu", function () {
        $(this).parent().remove(), a(), r()
    }), $(".js-tag-name-input-in-side-menu").keypress(function (e) {
        if (13 == e.which) return !1
    }), $(".js-tag-name-input-in-side-menu").change(function () {
        t()
    });
    for (const e of $("#tags").val() ? $("#tags").val().split("<sep>") : []) n(e);
    a(), r(), ICON_SUITE.fanCountTrueValue = function (e, a) {
        return e == a ? 0 : e > 1e5 ? (e - 1e5) / 1e3 * 1e5 + 5e5 : e > 6e4 ? (e - 6e4) / 1e3 * 1e4 + 1e5 : e > 5e4 ? (e - 5e4) / 1e3 * 5e3 + 5e4 : e
    }, ICON_SUITE.getSearchFormParams = function () {
        return {
            account_type: $('input[name="account_type"]:checked').val(),
            age_range: $("#age_range").val(),
            prefecture_code: $("#prefecture_code").val(),
            category_id: $("#category_id").val(),
            search_group_id: $("#search_group_id").val(),
            i_gender: $('input[name="i_gender"]:checked').val(),
            i_age_range: $("#i_age_range").val(),
            fan_count: $("#fan_count").val(),
            fan_count_min: $("#fan_count_min").val(),
            fan_count_max: $("#fan_count_max").val(),
            gender: $('input[name="gender"]:checked').val(),
            gender_percentage: $("#gender_percentage").val(),
            age_percentage: $("#age_percentage").val(),
            age_range: $("#age_range").val(),
            keyword: $("#keyword").val(),
            url_path_id: $("#url_path_id").val(),
            instagram_image_label: $("#instagram_image_label").val(),
            hash_tag_text: $("#hash_tag_text").val(),
            is_pr_only: $("#is_pr_only:checked").val(),
            is_favorite_only: $("#is_favorite_only:checked").val(),
            is_exclude_talent: $("#is_exclude_talent:checked").val(),
            is_brand: $("#is_brand").val(),
            tags: getSelectedTagsInSideMenu().join("<sep>")
        }
    }, ICON_SUITE.countSearchResult = function () {
        params = ICON_SUITE.getSearchFormParams()
        //     $.ajax({
        //     url: "/client/search/result_count",
        //     type: "GET",
        //     dataType: "JSON",
        //     timeout: 3e4,
        //     data: params,
        //     success: function (e) {
        //         "success" === e.status ? $(".js-set-search-count").text("\uff08" + e.result_count + "\uff09") : (e.status, $(".js-set-search-count").text(""))
        //     },
        //     error: function () {
        //         $(".js-set-search-count").text("")
        //     }
        // })
    }, $('input[name="keyword_search"]').on("click", function () {
        var e = $('input[name="keyword_search"]:checked').val();
        $(".js-box-keyword-search-box input").val(""), $(".js-box-keyword-search-box").hide(), $("#box-" + e).show()
    }), $(".range-slider-i-age").jRange({
        from: 0,
        to: 50,
        step: 1,
        scale: [0, "50+"],
        format: "%s",
        width: 200,
        showLabels: !0,
        isRange: !0,
        snap: !1
    }), $(".range-slider-fan-count").jRange({
        from: 0,
        to: 106e3,
        step: 1e3,
        scale: [0, "1000000+"],
        format: function (e, a) {
            var n = ICON_SUITE.fanCountTrueValue(e, 106e3);
            return 0 == n ? "low" == a ? "0\u4eba" : "1000000+" : n.toFixed() + "\u4eba"
        },
        width: 200,
        isRange: !0,
        showLabels: !0,
        snap: !1,
        ondragend: function () {
            var e = $("#fan_count").val().split(",");
            $("#fan_count_min").val(ICON_SUITE.fanCountTrueValue(Number(e[0]), 106e3)), $("#fan_count_max").val(ICON_SUITE.fanCountTrueValue(Number(e[1]), 106e3))
        },
        onbarclicked: function () {
            var e = $("#fan_count").val().split(",");
            $("#fan_count_min").val(ICON_SUITE.fanCountTrueValue(Number(e[0]), 106e3)), $("#fan_count_max").val(ICON_SUITE.fanCountTrueValue(Number(e[1]), 106e3))
        }
    }), ICON_SUITE.changeRangeSliderAge = function () {
        ICON_SUITE.accountType = $('input[name="account_type"]:checked').val(), "YoutubeAccount" === ICON_SUITE.accountType ? ($(".js-f-search-gender").hide(), $(".js-f-search-age").hide()) : "TwitterAccount" === ICON_SUITE.accountType ? ($(".js-f-search-gender").show(), $(".js-f-search-age").hide(), $(".range-slider-age").jRange("toggleDisable"), $(".single-slider-age-percentage").jRange("toggleDisable")) : ($(".js-f-search-gender").show(), $(".js-f-search-age").show(), $(".range-slider-age").jRange("enable"), $(".single-slider-age-percentage").jRange("enable"))
    }, $('input[name="account_type"]:radio').change(function () {
        if (ICON_SUITE.changeRangeSliderAge(), ICON_SUITE.accountType = $('input[name="account_type"]:checked').val(), "YoutubeAccount" === ICON_SUITE.accountType || "TwitterAccount" === ICON_SUITE.accountType) {
            $(".js-instagram-image-label-radio").hide(), $(".js-instagram-hash-tag-engagement-radio").hide(), $("js-box-keyword-search-box").hide();
            "keyword" !== $('input[name="keyword_search"]:checked').val() && ($(".js-box-keyword-search-box input").val(""), $(".js-box-keyword-search-box").hide(), $("#box-keyword").show(), $("#keyword_search").prop("checked", !0))
        } else $(".js-instagram-image-label-radio").show(), $(".js-instagram-hash-tag-engagement-radio").show(), $("js-box-keyword-search-box").show()
    }), $(".range-slider-age").jRange({
        from: 4,
        to: 50,
        step: 1,
        scale: [4, "50+"],
        format: "%s",
        width: 200,
        showLabels: !0,
        isRange: !0,
        snap: !1
    }), $(".single-slider-gender-percentage").jRange({
        from: 0,
        to: 100,
        step: 5,
        scale: ["0%", "100%"],
        format: "%s%",
        width: 200,
        showLabels: !0,
        snap: !1
    }), $(".single-slider-age-percentage").jRange({
        from: 0,
        to: 100,
        step: 5,
        scale: ["0%", "100%"],
        format: "%s%",
        width: 200,
        showLabels: !0,
        snap: !1
    }), ICON_SUITE.changeRangeSliderAge(), $(".js-disable-slider").click(function () {
        $(".single-slider-gender-percentage").jRange("setValue", "0"), $(".single-slider-gender-percentage").jRange("toggleDisable")
    }), $(".js-enable-slider").click(function () {
        "0" == $(".single-slider-gender-percentage").jRange("getValue") && $(".single-slider-gender-percentage").jRange("setValue", "10"), $(".single-slider-gender-percentage").jRange("enable")
    }), $(".js-search-reset").click(function (e) {
        e.preventDefault();
        // var a = $(this).data("page-action");
        // $("<form/>", {action: a, method: "get"}).append($("<input/>", {
        //     type: "hidden",
        //     name: "reset",
        //     value: "true"
        // })).appendTo(document.body).submit()
    }), "both" == $('input[name="gender"]:checked').val() && ($(".single-slider-gender-percentage").jRange("setValue", "0"), $(".single-slider-gender-percentage").jRange("toggleDisable")), $("form").change(function () {
        ICON_SUITE.isSearchInputChanged = !0
    }), ICON_SUITE.isSearchInputChanged = !0, setInterval(function () {
        ICON_SUITE.isSearchInputChanged && (ICON_SUITE.countSearchResult(), ICON_SUITE.isSearchInputChanged = !1)
    }, 1e3), $("#keyword").autocomplete({
        source: function (e, a) {
            // $.ajax({
            //     url: "/client/search/keyword_suggest",
            //     type: "GET",
            //     cache: !1,
            //     dataType: "json",
            //     data: {keyword: e.term},
            //     success: function (e) {
            //         a(e.keywords)
            //     },
            //     error: function () {
            //         a([""])
            //     }
            // })
        }
    }), $("#instagram_image_label").autocomplete({
        source: function (e, a) {
            // $.ajax({
            //     url: "/client/search/instagram_image_label_suggest",
            //     type: "GET",
            //     cache: !1,
            //     dataType: "json",
            //     data: {instagram_image_label: e.term},
            //     success: function (e) {
            //         a(e.instagram_image_labels)
            //     },
            //     error: function () {
            //         a([""])
            //     }
            // })
        }
    }), $("#hash_tag_text").autocomplete({
        source: function (e, a) {
            // $.ajax({
            //     url: "/client/search/instagram_hash_tag_engagement_suggest",
            //     type: "GET",
            //     cache: !1,
            //     dataType: "json",
            //     data: {hash_tag_text: e.term},
            //     success: function (e) {
            //         a(e.instagram_hash_tags)
            //     },
            //     error: function () {
            //         a([""])
            //     }
            // })
        }
    }), ICON_SUITE.changeGenderColor = function () {
        var e = $('input[name="gender"]:checked').val();
        "male" === e ? ($(".side-nav-gender .pointer").css("background-color", "rgb(79, 193, 233)"), $(".side-nav-gender .selected-bar").css("background-color", "rgb(197, 234, 247)")) : "female" === e ? ($(".side-nav-gender .pointer").css("background-color", "rgb(234, 99, 155)"), $(".side-nav-gender .selected-bar").css("background-color", "rgb(245, 187, 211)")) : "both" === e && ($(".side-nav-gender .pointer").css("background-color", "rgb(63, 196, 177)"), $(".side-nav-gender .selected-bar").css("background-color", "rgb(63, 196, 177)"))
    }, $(window).on("load", function () {
        ICON_SUITE.changeGenderColor()
    }), $('input[name="gender"]').on("click", function () {
        ICON_SUITE.changeGenderColor()
    })
});