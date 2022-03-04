var ICON_SUITE = ICON_SUITE || {};
ICON_SUITE.singleClickToken = !1,
    $(function() {
        var e = (new Clipboard(".clipboard-btn"),
            $(".alert-message-board"));
        "" !== e.text() && e.fadeIn(800).delay(1e3).fadeOut(800),
            $(".search-list,.box-open-switch").mouseenter(function() {
                $("body").hasClass("open-con") || $("body").addClass("active-search-list")
            }).mouseleave(function() {
                $("body").removeClass("active-search-list")
            }),
            $("#search_list").infinitescroll({
                loading: {
                    img: "/assets/images/common/loading.gif",
                    msgText: "",
                    finishedMsg: "",
                    selector: ".infinite-scroll-loading-container"
                },
                navSelector: "#search_list nav.pagination",
                nextSelector: "#search_list nav.pagination a[rel=next]",
                itemSelector: "#search_list li.js-scroll-item-selector",
                maxPage: $("#pager_max_page").val()
            }),
            $(".js-open-influencer-group-list").click(function(e) {
                return e.preventDefault(),
                    $(this).toggleClass("open-list"),
                    $(this).next("div").slideToggle(300, "swing"),
                    !1
            }),
            $(".switch-con").click(function() {
                var e = $("body");
                e.removeClass("active-search-list").toggleClass("open-con"),
                    $("#open_con").val(e.hasClass("open-con"))
            }),
        "true" === $("#open_con").val() && $("body").addClass("open-con"),
            $(document).on("click", ".js-generate-group-public-access-url", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                if (ICON_SUITE.singleClickToken = !0,
                    !confirm("\u5916\u90e8\u53c2\u7167\u7528\u306e\u30a2\u30af\u30bb\u30b9URL\u3092\u767a\u884c\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                var t = $(this)
                    , a = t.data("group-id");
                $.ajax({
                    url: "/client/influencer_group/public_url_generate",
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_id: a
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            t.replaceWith('<div class="input-group"><input type="text" class="public-access-url-text-box" id="public_url_' + a + '" name="public_url" value="' + e.public_access_url + '" readonly=""><div class="clipboard-btn" data-clipboard-target="#public_url_' + a + '" rel="tooltip" title="\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306bURL\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059"><span class="icon-copy" aria-hidden="true"></span></div><a class="add-on-link-btn" href="' + e.public_access_url + '" target="_blank">\u5916\u90e8\u53c2\u7167\u7528\u30da\u30fc\u30b8&nbsp;(&nbsp;' + e.access_date_limit + "&nbsp;\u671f\u9650&nbsp;)</a></div>")) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            alert(e.messages)) : (ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")
                    }
                })
            }),
            $(document).on("click", ".js-generate-group-public-access-edit-url", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                if (ICON_SUITE.singleClickToken = !0,
                    !confirm("\u5916\u90e8\u7de8\u96c6\u7528\u306e\u30a2\u30af\u30bb\u30b9URL\u3092\u767a\u884c\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                var t = $(this)
                    , a = t.data("group-id");
                $.ajax({
                    url: "/client/influencer_group/public_edit_url_generate",
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_id: a
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            t.replaceWith('<div class="input-group"><input type="text" class="public-access-url-text-box" id="public_edit_url_' + a + '" name="public_edit_url" value="' + e.public_access_edit_url + '" readonly=""><div class="clipboard-btn" data-clipboard-target="#public_edit_url_' + a + '" rel="tooltip" title="\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306bURL\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059"><span class="icon-copy" aria-hidden="true"></span></div><a class="add-on-link-btn-disabled">\u5916\u90e8\u7de8\u96c6\u7528URL&nbsp;(&nbsp;' + e.access_edit_date_limit + "&nbsp;\u671f\u9650&nbsp;)</a></div>")) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            alert(e.messages)) : (ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")
                    }
                })
            }),
            $(document).on("click", ".js-copy-group", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var t = $(this).data("group-id")
                    , a = $("input[name=authenticity_token]").val();
                $("<form/>", {
                    action: "/client/influencer_group/copy",
                    method: "post"
                }).append($("<input/>", {
                    type: "hidden",
                    name: "group_id",
                    value: t
                })).append($("<input/>", {
                    type: "hidden",
                    name: "authenticity_token",
                    value: a
                })).appendTo(document.body).submit()
            }),
            $(document).on("click", ".js-delete-group", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                if (ICON_SUITE.singleClickToken = !0,
                    !confirm("\u30b0\u30eb\u30fc\u30d7\u30ea\u30b9\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                var t = $(this)
                    , a = t.data("group-id")
                    , n = $("input[name=authenticity_token]").val();
                $("<form/>", {
                    action: "/client/influencer_group/delete",
                    method: "post"
                }).append($("<input/>", {
                    type: "hidden",
                    name: "group_id",
                    value: a
                })).append($("<input/>", {
                    type: "hidden",
                    name: "authenticity_token",
                    value: n
                })).appendTo(document.body).submit()
            }),
            $(document).on("click", ".js-set-multi-read", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                if (ICON_SUITE.singleClickToken = !0,
                    !confirm("\u30ea\u30b9\u30c8\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u30b0\u30eb\u30fc\u30d7\u306b\u5171\u6709\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                var t = $(this)
                    , a = t.data("group-id");
                $.ajax({
                    url: "/client/influencer_group/multi_read",
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_id: a
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            t.prop("disabled", !0),
                            t.text("\u53c2\u7167\u5171\u6709\u6e08")) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            alert(e.messages)) : (ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")
                    }
                })
            }),
            $(document).on("click", ".js-set-multi-edit", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                if (ICON_SUITE.singleClickToken = !0,
                    !confirm("\u30ea\u30b9\u30c8\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u30b0\u30eb\u30fc\u30d7\u3067\u7de8\u96c6\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                var t = $(this)
                    , a = t.data("group-id");
                $.ajax({
                    url: "/client/influencer_group/multi_edit",
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_id: a
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            t.prop("disabled", !0),
                            t.text("\u7de8\u96c6\u5171\u6709\u6e08"),
                            t.parents().find(".js-set-multi-read").prop("disabled", !0),
                            t.parents().find(".js-set-multi-read").text("\u53c2\u7167\u5171\u6709\u6e08")) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            alert(e.messages)) : (ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            alert("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002")
                    }
                })
            }),
            ICON_SUITE.update_list_influencer_and_fan_count_view = function() {
                var e = $("#group_id").val()
                    , t = "/client/influencer_group/" + e + "/total_fan_count";
                $.ajax({
                    url: t,
                    type: "GET",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {},
                    success: function(e) {
                        "success" === e.status ? ($("#group_list_influencer_count").text(e.group_list_count),
                            $("#group_list_total_fan_count").text(e.total_fan_count.toLocaleString())) : "error" === e.status ? ($(".alert-message-board").text(e.messages),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : ($(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                    }
                })
            }
            ,
            $(document).on("click", ".js-add-group-list-checkbox", function() {
                $(this).prop("checked", !$(this).is(":checked"))
            }),
            $(document).on("click", ".js-add-group-list", function() {
                if (ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var e = $(this)
                    , t = e.find(".js-add-group-list-checkbox")
                    , a = t.is(":checked");
                t.prop("checked", !a);
                var n = e.data("group-id")
                    , i = a ? "delete" : "add"
                    , s = "/client/influencer_group/" + n + "/" + i
                    , r = e.data("influencer-id");
                $.ajax({
                    url: s,
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        influencer_id: r
                    },
                    success: function(s) {
                        if ("success" === s.status) {
                            var o = $("#group_list")
                                , l = $("#search_list")
                                , c = e.parents("ul").attr("id");
                            if ("group_list" === c)
                                e.parents("li").remove(),
                                    l.find("div[data-influencer-id=" + r + "]").find(".js-add-group-list-checkbox").prop("checked", !1);
                            else if ("search_list" === c)
                                if ("add" === i) {
                                    var d = e.parents("li").clone();
                                    d.find(".glengagement").remove(),
                                        d.find(".percentage").remove(),
                                        d.find(".wrap-influencer-detail").append('<div class="level comment">  <form class="level-item form-inline" style="font-size: 0;">    <div class="form-group">      <textarea class="form-control comment-area" rows="1" name="comment" placeholder="\u30b3\u30e1\u30f3\u30c8\u3092\u5165\u529b" value=""></textarea>    </div>    <button type="button" class="btn js-update-group-list-comment" data-group-id="' + n + '" data-group-list-id="' + s.group_list_id + '">\u66f4\u65b0</button>  </form></div>'),
                                        o.append(d)
                                } else
                                    "delete" === i && o.find("div[data-influencer-id=" + r + "]").parents("li").remove();
                            ICON_SUITE.update_list_influencer_and_fan_count_view(),
                                ICON_SUITE.singleClickToken = !1
                        } else
                            "error" === s.status ? (ICON_SUITE.singleClickToken = !1,
                                t.prop("checked", a),
                                $(".alert-message-board").text(s.messages),
                                $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : (ICON_SUITE.singleClickToken = !1,
                                t.prop("checked", a),
                                $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                                $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            t.prop("checked", a),
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                    }
                })
            }),
            $(document).on("click", ".js-update-group-list-comment", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var t = $(this)
                    , a = t.parent("form")
                    , n = a.find("textarea[name=comment]").val()
                    , i = t.data("group-id")
                    , s = t.data("group-list-id")
                    , r = "/client/influencer_group/" + i + "/comment_update";
                $.ajax({
                    url: r,
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_list_id: s,
                        comment: n
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(1e3).fadeOut(800)) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text(e.messages),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                    }
                })
            }),
            ICON_SUITE.isGroupUpdateFormChanged = !1,
            $("#group_update_form").change(function() {
                ICON_SUITE.isGroupUpdateFormChanged = !0
            }),
            $(document).on("click", ".js-update-confirm-submit", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var t = $(this)
                    , a = $("#group_update_form")
                    , n = t.parents("form");
                $("#group_id").val();
                return ICON_SUITE.isGroupUpdateFormChanged && confirm("\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u60c5\u5831\u306e\u5909\u66f4\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4fdd\u5b58\u3057\u307e\u3059\u304b\uff1f\u30ad\u30e3\u30f3\u30bb\u30eb\u3092\u62bc\u4e0b\u3057\u305f\u5834\u5408\u3001\u5165\u529b\u3057\u305f\u60c5\u5831\u304c\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002") ? (t.hasClass("js-price-edit-page-link-button") ? $form = a.append($("<input/>", {
                    type: "hidden",
                    name: "page_to_price",
                    value: !0
                })) : t.hasClass("js-sort-edit-page-link-button") ? $form = a.append($("<input/>", {
                    type: "hidden",
                    name: "page_to_sort",
                    value: !0
                })) : $form = a.append($("<input/>", {
                    type: "hidden",
                    name: "page_to_list",
                    value: !0
                })),
                    t.hasClass("js-search-button") ? $form = $form.append($("<input/>", {
                        type: "hidden",
                        name: "search_params",
                        value: JSON.stringify(ICON_SUITE.getSearchFormParams())
                    })) : t.hasClass("js-search-reset") ? $form = $form.append($("<input/>", {
                        type: "hidden",
                        name: "search_params",
                        value: JSON.stringify({
                            reset: !0
                        })
                    })) : t.hasClass("js-user-id-add-influencer-button") && ($form = $form.append($("<input/>", {
                        type: "hidden",
                        name: "search_params",
                        value: JSON.stringify({
                            add_account_url_path_id: n.find("#add_account_url_path_id").val(),
                            add_account_account_type: n.find('input[name="add_account_account_type"]:checked').val()
                        })
                    }))),
                    void $form.submit()) : t.hasClass("js-price-edit-page-link-button") || t.hasClass("js-sort-edit-page-link-button") || t.hasClass("js-sort-link") ? void (location.href = t.attr("href")) : t.hasClass("js-bulk-add-group-list") ? ($(this).trigger("click"),
                    void (ICON_SUITE.singleClickToken = !1)) : t.hasClass("js-search-reset") ? void $(".js-search-reset").trigger("click") : void n.submit()
            }),
            $(document).on("click", ".js-bulk-add-group-list", function() {
                if (ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                const e = $(this)
                    , t = e.is(":checked");
                if (!t)
                    return ICON_SUITE.singleClickToken = !1;
                const a = e.data("search-count");
                if (!confirm("\u691c\u7d22\u7d50\u679c(" + a + "\u4ef6)\u3092\u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f\n\u203b\u3053\u306e\u64cd\u4f5c\u306f\u53d6\u308a\u6d88\u3057\u3067\u304d\u307e\u305b\u3093\u3002"))
                    return ICON_SUITE.singleClickToken = !1,
                        !1;
                displayFullLoading(),
                    e.prop("checked", t);
                const n = e.data("group-id")
                    , i = "/client/influencer_group/" + n + "/bulk_add";
                $.ajax({
                    url: i,
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    success: function(a) {
                        "success" === a.status ? (ICON_SUITE.singleClickToken = !1,
                            location.reload()) : "error" === a.status ? (ICON_SUITE.singleClickToken = !1,
                            removeFullLoading(),
                            e.prop("checked", !t),
                            $(".alert-message-board").text(a.messages),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : (ICON_SUITE.singleClickToken = !1,
                            removeFullLoading(),
                            e.prop("checked", !t),
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            removeFullLoading(),
                            e.prop("checked", !t),
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                    }
                })
            }),
            $(document).on("change", ".js-update-is-display-price", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var t = $(this)
                    , a = t.data("group-id")
                    , n = "/client/influencer_group/" + a + "/display_price_update"
                    , i = t.data("price-type")
                    , s = t.prop("checked");
                $.ajax({
                    url: n,
                    type: "POST",
                    dataType: "JSON",
                    timeout: 3e4,
                    data: {
                        group_id: a,
                        price_type: i,
                        is_display: s
                    },
                    success: function(e) {
                        "success" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(1e3).fadeOut(800)) : "error" === e.status ? (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text(e.messages),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : (ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                    },
                    error: function() {
                        ICON_SUITE.singleClickToken = !1,
                            $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                            $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                    }
                })
            }),
            $(document).on("change", ".js-update-price", function(e) {
                e.preventDefault();
                var t = $(this)
                    , a = t.data("price-type")
                    , n = t.data("group-id")
                    , i = t.data("group-list-id")
                    , s = "/client/influencer_group/" + n + "/price_update"
                    , r = "updatePriceSingleClickToken" + a + i
                    , o = "updatePriceWaitTimerId" + a + i
                    , l = "updatePriceWaitTimer" + a + i;
                if (ICON_SUITE[l] = 3,
                    ICON_SUITE[r])
                    return !1;
                ICON_SUITE[r] = !0,
                    clearInterval(ICON_SUITE[o]),
                    ICON_SUITE[o] = setInterval(function() {
                        if (ICON_SUITE[l] > 0)
                            ICON_SUITE[l]--;
                        else {
                            clearInterval(ICON_SUITE[o]);
                            var e = t.val();
                            $.ajax({
                                url: s,
                                type: "POST",
                                dataType: "JSON",
                                timeout: 3e4,
                                data: {
                                    group_id: n,
                                    group_list_id: i,
                                    price_type: a,
                                    price: e
                                },
                                success: function(e) {
                                    "success" === e.status ? ($(".js-total-" + a + "-price").text("\uffe5" + e.total_price.toLocaleString()),
                                        ICON_SUITE[r] = !1,
                                        $(".alert-message-board").text("\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"),
                                        $(".alert-message-board").fadeIn(800).delay(1e3).fadeOut(800)) : "error" === e.status ? (ICON_SUITE[r] = !1,
                                        $(".alert-message-board").text(e.messages),
                                        $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)) : (ICON_SUITE[r] = !1,
                                        $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                                        $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800))
                                },
                                error: function() {
                                    ICON_SUITE[r] = !1,
                                        $(".alert-message-board").text("\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u753b\u9762\u3092\u66f4\u65b0\u3057\u3066\u518d\u5ea6\u64cd\u4f5c\u3092\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),
                                        $(".alert-message-board").fadeIn(800).delay(2e3).fadeOut(800)
                                }
                            })
                        }
                    }, 400)
            }),
            $(document).on("click", ".js-sort-button-submit", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0,
                    $(this).parent("form").submit()
            }),
            $(document).on("click", ".js-sort-check-all-clear", function() {
                if (ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0,
                    $(".js-sort-check-all-clear").prop("checked", !1),
                    $(".js-sort-check").prop("checked", !1),
                    sessionStorage.removeItem("groupListSortIds"),
                    ICON_SUITE.update_multi_sort_button_text(),
                    ICON_SUITE.singleClickToken = !1
            }),
            $(document).on("click", ".js-sort-check", function() {
                if (ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var e = $(this)
                    , t = (e.find(".js-add-group-list-checkbox"),
                    e.is(":checked"))
                    , a = e.data("group-list-id")
                    , n = sessionStorage.groupListSortIds
                    , i = n ? n.split(",") : [];
                if (t)
                    i.push(a),
                        $(".js-sort-check-all-clear").prop("checked", !0);
                else {
                    var s = i.indexOf(a);
                    i.splice(s),
                    0 === i.length && $(".js-sort-check-all-clear").prop("checked", !1)
                }
                sessionStorage.groupListSortIds = i.join(","),
                    ICON_SUITE.update_multi_sort_button_text(),
                    ICON_SUITE.singleClickToken = !1
            }),
            ICON_SUITE.update_multi_sort_button_text = function() {
                var e = sessionStorage.groupListSortIds
                    , t = e ? e.split(",") : []
                    , a = t.length;
                0 === a ? $(".js-sort-multi").hide() : ($(".js-sort-multi").show(),
                    $(".js-sort-multi-top").text(a + "\u9805\u76ee\u3092\u6700\u4e0a\u3078"),
                    $(".js-sort-multi-bottom").text(a + "\u9805\u76ee\u6700\u4e0b\u3078"))
            }
            ,
            ICON_SUITE.update_multi_sort_button_text(),
            $(document).on("click", ".js-sort-multi", function(e) {
                if (e.preventDefault(),
                    ICON_SUITE.singleClickToken)
                    return !1;
                ICON_SUITE.singleClickToken = !0;
                var t = $(this)
                    , a = t.data("group-id")
                    , n = t.data("sort-process")
                    , i = t.data("page")
                    , s = "/client/influencer_group/sort/" + a + "/multi_" + n
                    , r = $("input[name=authenticity_token]").val()
                    , o = sessionStorage.groupListSortIds;
                sessionStorage.removeItem("groupListSortIds"),
                    $("<form/>", {
                        action: s,
                        method: "post"
                    }).append($("<input/>", {
                        type: "hidden",
                        name: "authenticity_token",
                        value: r
                    })).append($("<input/>", {
                        type: "hidden",
                        name: "influencer_group_list_ids",
                        value: o
                    })).append($("<input/>", {
                        type: "hidden",
                        name: "page",
                        value: i
                    })).appendTo(document.body).submit()
            }),
            ICON_SUITE.groupListIds = sessionStorage.groupListSortIds ? sessionStorage.groupListSortIds.split(",") : [],
            ICON_SUITE.groupListIds.forEach(function(e) {
                $(".js-sort-check-" + e).prop("checked", !0)
            }),
        ICON_SUITE.groupListIds.length > 0 && $(".js-sort-check-all-clear").prop("checked", !0)
    });
