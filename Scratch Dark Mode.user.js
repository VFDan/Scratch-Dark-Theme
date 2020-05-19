// ==UserScript==
// @name         Scratch Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.2.1
// @description  Gives the Scratch user interface a dark theme.
// @author       MiniCoder11 & VFDan (This version's scripting was written by MiniCoder11)
// @match        https://scratch.mit.edu/*
// @exclude      https://scratch.mit.edu/join
// @exclude      https://scratch.mit.edu/accounts/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

//Thanks to Scratch user 44D3A7HQ for the code off which we have based the main editor color scheme and styling. Their previous work is greatly appreciated.

(function() {
    'use strict';
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    //window.addEventListener('popstate', function (event) {
    //    alert("Hello!")
    //    reapplyStyling()
    //});


    function reapplyStyling() {

        var url = window.location.href

        if (url.includes("scratch.mit.edu/projects") && url.includes("editor")) {

            //Editor

            addGlobalStyle('.blocklyScrollbarHandle{ fill: #6481AA !important; }');

            addGlobalStyle('.valueReportBox{ color: #515151 !important; }');

            addGlobalStyle('.monitor_monitor-container_2J9gl, .scratchCommentTextarea{ color: #575757; }');

            addGlobalStyle('.gui_body-wrapper_-N0sA{ background-color: #121e2d !important; }');
            addGlobalStyle('.backpack_backpack-item_hwqzQ > div{ background-color: #2136518f !important; }');
            addGlobalStyle('.blocklySvg{ background-color: #18293e !important; }');
            addGlobalStyle('.asset-panel_wrapper_366X0 { background-color: #1d2e42; color: #FFFFFF; !important; }');

            addGlobalStyle('.scratchCategoryMenu, .blocklyToolboxDiv, .selector_wrapper_8_BHs{ background-color: #121e2d; color: #FFFFFF; !important; }');
            addGlobalStyle('.scratchCategoryMenuItem.categorySelected { background-color: #1c3048; color: #FFFFFF; !important; }');
            addGlobalStyle('.blocklyFlyoutCheckbox{ fill: #33547e; stroke: #33547e; !important; }');
            addGlobalStyle('.blocklyFlyoutCheckboxPath{ stroke: #33547e; }')
            addGlobalStyle('.project-title-input_title-field_en5Gd:hover{ background-color: #3a5984}');

            addGlobalStyle('.blocklyFlyoutBackground{ fill: #203651 !important; }');
            addGlobalStyle('.blocklyFlyoutLabelText{ fill: #FFFFFF !important; }');

            addGlobalStyle('.sprite-info_sprite-info_3EyZh { background-color: #1d2e42; color: #FFFFFF; !important; }');
            addGlobalStyle('.sprite-selector_sprite-selector_2KgCX { background-color: #19283c; color: #FFFFFF; !important; }');

            addGlobalStyle('.stage-selector_header_2GVr1 { background-color: #1d2e42; color: #FFFFFF; !important; }');
            addGlobalStyle('.stage-selector_stage-selector_3oWOr { background-color: #19283c; color: #FFFFFF; !important; }');

            addGlobalStyle('.path.blocklyPath.blocklyBlockBackground{ fill: #000000; !important; }');

            addGlobalStyle('.backpack_backpack-header_6ltCS { background: #19283c; color: #FFFFFF; !important; }');

            addGlobalStyle('.input_input-form_l9eYg { background-color: #293f5d; color: #FFFFFF; !important; }');

            addGlobalStyle('.Popover-body { background: #333333; color: #FFFFFF; border: 1px solid #292929; !important;}');
            addGlobalStyle('.Popover-tipShape { fill: #333333; stroke: #292929; !important;');

            addGlobalStyle('.gui_tab_27Unf.gui_is-selected_sHAiu { background-color: #254061 !important; }');
            addGlobalStyle('.gui_tab_27Unf { background-color: #1c3048;!important; }');
            addGlobalStyle('.gui_tab_27Unf:hover { background-color: #293f5d;!important; }');
            addGlobalStyle('.selector_new-buttons_2qHDd::before { background: linear-gradient(#fff0, #121e2d); }');

            addGlobalStyle('.blocklyWidgetDiv .goog-menuitem-highlight, .blocklyWidgetDiv .goog-menuitem-hover { background-color: #254061 !important; }');

            addGlobalStyle('.menu_menu_3k7QT{background-color: #19283c !important;}');
            addGlobalStyle('.library_filter-bar_1W0DW{background-color: #132031 !important;}');
            addGlobalStyle('.library-item_library-item_1DcMO, .library_library-scroll-grid_1jyXm { background: #1b2946; color: #fff; !important; }');
            addGlobalStyle('.blocklyWidgetDiv .goog-menu { background: #293f5d; color: #fff; border: none; border-radius: 12px; box-shadow: black 0px 0px 10px 0px !important; }');

            addGlobalStyle('.blocklyScrollbarHandle { fill: #333333AA; !important;');
            addGlobalStyle('.library-item_featured-extension-metadata_3D8E8 { color: #fff; }');
            addGlobalStyle('body, .sprite-selector-item_sprite-info_-I0i_, .gui_tab_27Unf { color: #fff !important; }');
            addGlobalStyle('.sprite-selector-item_sprite-selector-item_kQm-i:hover, .sprite-selector-item_sprite-selector-item_kQm-i.sprite-selector-item_is-selected_24tQj { background-color: #ffffff24 !important; }');

        }

        if (url.includes("scratch.mit.edu/projects") && !url.includes("editor")) {

            //Player
            addGlobalStyle('body, .stage_stage-wrapper-overlay_fmZuD{ background-color: #435b7d; color: #bbb !important}');
            addGlobalStyle('view, .preview .project-lower-container, .library_library-scroll-grid_1jyXm{ background-color: #172033 !important;}');
            addGlobalStyle('.inplace-textarea{ background-color: #2a364d !important; }');
            addGlobalStyle('.preview .project-description{ background-color: #2a364d !important; }');
            addGlobalStyle('.preview .project-description{ color: #cdcdcd !important; }');
            addGlobalStyle('.inplace-textarea{ color: #cdcdcd !important; }');
            addGlobalStyle('.inplace-input{ background-color: #2a364d !important; }');
            addGlobalStyle('.inplace-input{ color: #cdcdcd !important; }');
            addGlobalStyle('.preview .guiPlayer .project-info-alert, .extension-chip{ background-color: #1a2533 !important; }');

            addGlobalStyle('.comment .comment-body .comment-bubble{ background-color: #2a364d !important; }');
            addGlobalStyle('.comment .comment-body .comment-bubble::before{ background-color: #2a364d !important; }');
            addGlobalStyle('.comment .comment-body .comment-bubble{ color: #cdcdcd !important; }');
            addGlobalStyle('.preview .comments-header{ color: #cdcdcd !important; }');
            addGlobalStyle('.preview .comments-header h4{ color: #cdcdcd !important; }');
            addGlobalStyle('.compose-comment .compose-bottom-row .compose-limit{ color: #cdcdcd !important; }');
            addGlobalStyle('.comment .action-list{ color: #cdcdcd !important; }');
            addGlobalStyle('.replies.collapsed > .comment:last-of-type::after{ background: linear-gradient(rgba(29, 29, 29, 0), #172033); }');

        }

        //website

        addGlobalStyle('.banner-wrapper, .tips-getting-started, .gray-area, .tips-activity-guides, #view{ background-color: #253142 !important; }'); //Backdrop
        addGlobalStyle('#footer{ background-color: #212c3c !important; }'); //Footer
        addGlobalStyle('#navigation, .ttt-modal-header, .modal-content, .stage-header_stage-header-wrapper-overlay_5vfJa, .menu-bar_menu-bar_JcuHF, .modal_header_1h7ps{ background-color: #19283c !important; }');
        addGlobalStyle('body{ text-shadow: none !important; }'); //Removes text shadow for dark theme
        addGlobalStyle('*{ transition: color 0.25s, background-color 0.25s, background 0.25s, width 0.25s, height 0.25s; box-shadow 0.25s; background-size 0.25s !important; }');
        addGlobalStyle('.about .body{ background: #344562; border: none;}');
        addGlobalStyle('h1, h2, h3, h4, h5, h6, p{ color: #f1f1f1;}');
        addGlobalStyle('.modal-overlay{ background-color: #070c12de;}');
        addGlobalStyle('.ttt-tile{ background-color: #2c3c53;}');
        addGlobalStyle('#topnav ul.account-nav .logged-in-user .dropdown-menu, .dropdown, .dropdown.with-arrow::before{ box-shadow: none; background-color: #19283c !important; }');
        addGlobalStyle('.credits .supporters, .parents .title-banner.faq-banner, .developers .title-banner.faq-banner{ background-color: #2b3a4f !important; }');
        addGlobalStyle('.parents .title-banner.masthead, .developers .title-banner.masthead{ background-color: #2e3d51 !important; }');
        addGlobalStyle('.djangobb table, .djangobb input, .djangobb select, .djangobb optgroup, .djangobb textarea, .postmsg .postedit{ background-color: #2e3d51 !important; border-radius: 10px;}');
        addGlobalStyle('.nvtooltip{ background-color: #253142; border-radius: 10px;}');
        addGlobalStyle('.h-tabs > li.active{ background-color: #31425b; border-radius: 10px;}');
        addGlobalStyle('.iframeshim, .jqui-modal.ui-widget { background-color: #31425b; border-radius: 10px;}');
        addGlobalStyle('.ui-button .ui-button-text { color: black; border-radius: 10px;}');
        addGlobalStyle('.djangobb blockquote, .code { background-color: #31425b; border-radius:10px; }');
        addGlobalStyle('#topnav ul.account-nav .logged-in-user .dropdown-toggle { background-color: #31425b; }');
        addGlobalStyle('a.black, a.black:visited, input.link.black { color: #f1f1f1; }');

        addGlobalStyle('.button.small, button.small{ background: transparent !important; box-shadow: none;}');

        if (url == "https://scratch.mit.edu" || url == "https://scratch.mit.edu/") {

            addGlobalStyle('#view{ background-color: #253142 !important; }');
            addGlobalStyle('#footer{ background-color: #212c3c !important; }');
            addGlobalStyle('#navigation{ background-color: #19283c !important; }');
            addGlobalStyle('.box{ border: 0px; background-color: transparent;}');
            addGlobalStyle('.box.activity{ display: none}');
            addGlobalStyle('.box .box-header{ border-top: 0px; border-bottom: 0px; background-color: #31425b !important; }');
            addGlobalStyle('.box .box-content{ background-color: #31425b !important; border-radius: 0px 0px 10px 10px !important; }');
            addGlobalStyle('.news li:nth-child(2n){ border-top: 0px; border-bottom: 0px; !important; }');
            addGlobalStyle('.box .box-header h4, .box .box-header h5{ color: #FFFFFF !important; }');
            addGlobalStyle('.intro-banner .intro-container{ background-color: #253142 !important; }');
            addGlobalStyle('.intro-banner .intro-subnav{ background-color: #212c3c !important; }');
            addGlobalStyle('.intro-banner .intro-button, .button.white{ background-color: #31425b; }');
            addGlobalStyle('#donor{ background-color: #212c3c !important; }');
            addGlobalStyle('.dropdown, .dropdown.with-arrow::before, .dropdown, .dropdown.open, .dropdown.production.open{ background-color: #19283c !important; }');

            addGlobalStyle('body, p{ color: #c8c8c8 !important; }');
            addGlobalStyle('body{ text-shadow: none !important; }');

            addGlobalStyle('.activity-img{ padding: 0px; margin: 0px 13.25px 0px 0px; border-radius: 10px !important; }');
            addGlobalStyle('#navigation .link > a{ transition: all 0.25s !important; }');
            //addGlobalStyle('.box .box-content{ height: 270px; !important; }'); Whether or not this style should be left in may be debated.
            addGlobalStyle('.box .box-header h4, .box .box-header h5{ padding-top: 8px !important; }');

        }

        if (url.includes("scratch.mit.edu/search")) {

            addGlobalStyle('.outer #projectBox{ background-color: #253142; !important; }');
            addGlobalStyle('.outer .tab-background{ background-color: #31425b; !important; }');
            addGlobalStyle('.tabs{ background-color: #31425b; !important; }');
            addGlobalStyle('.tabs li:hover, .tabs-index li{ background-color: #2c3c53; !important; }');
            addGlobalStyle('.grid .thumbnail{ background-color: #2c3c53; !important; }');
            addGlobalStyle('.outer .title-banner.masthead{ background-color: #354864; !important; }');

        }

        //Messages and Explore

        if (url.includes("scratch.mit.edu/messages") || url.includes("scratch.mit.edu/explore")) {

            addGlobalStyle('.social-message{ margin: 10px; border: none; padding: 10px; background-color: #323c4c; border-radius: 12px !important; }');
            addGlobalStyle('.messages-social-list{ background-color: transparent; border: none !important; }');
            addGlobalStyle('.title-banner.mod-messages, .outer .title-banner.masthead{ background-color: #31425b !important; }');
            addGlobalStyle('.activity-li{ color: #9BA8BA !important; }');
            addGlobalStyle('body, h1, h2, h3, p{ color: #dbdbdb !important; }');
            addGlobalStyle('.comment-text::before, .comment-text::after, .comment-text{ border-color: #3c485b; background-color: #3c485b !important; }');
            addGlobalStyle('.outer #projectBox{ background-color: #253142 !important; }');
            addGlobalStyle('.tabs, .tab-background{ background-color: #31425b; !important; }');
            addGlobalStyle('.tabs li:hover{ background-color: #2c3c53; !important; }');
            addGlobalStyle('.grid .thumbnail{ background-color: #2c3c53; !important; }');

        }

        if (url.includes("scratch.mit.edu/studios") && url.includes("comments")) {

            addGlobalStyle('.button.small, button.small { background-color: #2d3c51 !important; border-radius: 2px; }');

        }

        if (url.includes("scratch.mit.edu/community_guidelines")) {

            addGlobalStyle('.box .box-content, .box .box-header{ background-color: #19283c !important; border-radius: 10px; }');
            addGlobalStyle('*{ border: none !important; }');
            addGlobalStyle('html, body{ color: #c6c6c6 !important; }');
            addGlobalStyle('.box{ background: transparent !important; }');

        }

        if (url.includes("scratch.mit.edu/users") || url.includes("scratch.mit.edu/statistics") || url.includes("scratch.mit.edu/mystuff") || url.includes("scratch.mit.edu/studios") || url.includes("scratch.mit.edu/cloudmonitor") || url.includes("scratch.mit.edu/discuss")) {

            addGlobalStyle('#topnav, .banner, #topnav .innerwrap{ display: block; position: fixed; top: 0; left: 0; z-index: 10; border-bottom: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 0 3px rgba(0, 0, 0, 0.25); background-color: #19283c; width: 100%; height: 50px; }');
            addGlobalStyle('#topnav .logo span{ background-image: url(https://scratch.mit.edu/images/logo_sm.png); display: block; margin: 0 6px 0 0; border: 0; background-repeat: no-repeat; background-position: center center; background-size: 95%; width: 81px; height: 50px !important; }');
            addGlobalStyle('#topnav ul.account-nav .messages .messages-icon{ background-image: url("/images/nav-notifications.png"); background-size: 50%; display: block; width: 42px; height: 35px; padding: 0; position: relative !important; }');
            addGlobalStyle('#topnav ul.account-nav .my-stuff .mystuff-icon{ background-image: url("https://scratch.mit.edu/images/mystuff.png"); background-size: 50%; display: block; width: 42px; height: 35px; padding: 0; position: relative !important; }');

            addGlobalStyle('html, body{ background-image: none; background-color: #253142 }');

            if (!url.includes("mystuff")) {

                addGlobalStyle('.empty-field, #profile-data .footer, #profile-box .doing, .box .box-head, .box, .box .box-content, .box .box-content .inner{ background-color: #31425b; border: none; border-radius: 10px }');
                addGlobalStyle('.blockpost div.box, .postfootleft p, .postfootright ul, .postfootright div, .blockpost .box-content, .postfootright, .postright, .postleft, .postfootleft, .blockpost label, .djangobb th, .tc2, .tc3{ background-color: #31425b !important; border: none; }');

            } else {

                addGlobalStyle('.button > span, button > span, .button > a, button > a{ background: #212b3a; border-radius: 10px;}');
                addGlobalStyle('.empty-field, #profile-data .footer, #profile-box .doing, .box .box-head, .box, .box .box-content, .box .box-content .inner{ box-shadow: none; background-color: transparent; border: none; border-radius: 10px; }');

            }

            addGlobalStyle('#profile-box #bio textarea, #profile-box #status textarea, #profile-box #bio p, #profile-box #status p, #profile-box, .header-text .profile-details, html, body, div, h1, h2, h3, h4, h5, h6, p{ color: #f1f1f1 }');
            addGlobalStyle('.arrow-left{ background-image: url("https://scratch.mit.edu/svgs/carousel/prev_ui-dark-gray.svg"); background-repeat: no-repeat; background-position: center; background-size: 80%; background-color: transparent; color: transparent; }');
            addGlobalStyle('.arrow-right{ background-image: url("https://scratch.mit.edu/svgs/carousel/next_ui-dark-gray.svg"); background-repeat: no-repeat; background-position: center; background-size: 80%; background-color: transparent; color: transparent; }');

            addGlobalStyle('.slider-carousel.horizontal .slider-carousel-control{ color: transparent }');
            addGlobalStyle('*{ color: #f1f1f1; border: none; box-shadow: none; text-shadow: none; }');
            addGlobalStyle('#profile-box .player{ border: none; border-radius: 10px; background-color: #3a5173 }');
            addGlobalStyle('.slider-carousel .thumb img, img{ border-radius: 10px; border: none; background-color: transparent; }');
            addGlobalStyle('.box{ margin-top: 15px; }');
            addGlobalStyle('.box-head{ padding: 18px 20px 0px 20px; }');
            addGlobalStyle('.media-item-content .media-thumb{ background-color: #475f8482; border-radius: 10px; }');
            addGlobalStyle('#comments .highlighted{ background-color: #f9f9f93d; border-radius: 10px;}');
            addGlobalStyle('#comments .comment .info .name a{ color: #f1f1f1;}');

            addGlobalStyle('#topnav form.search input, #topnav form.search input[type="text"]{ display: inline-block; margin-top: 5px; outline: none; border: 0; background-color: rgba(0, 0, 0, 0.1); height: 14px; }');

            addGlobalStyle('*{ font-family: helvetica, arial, sans-serif }');
            addGlobalStyle('*{ border: none !important; }');
            addGlobalStyle('#topnav ul.site-nav li a{ height: 50px; padding: 6.5px 15px; }');
            addGlobalStyle('#topnav ul.account-nav .logged-in-user .dropdown-toggle{ padding-top: 7.5px }');
            addGlobalStyle('#topnav ul.account-nav .my-stuff .mystuff-icon{ padding-top: 16px }');
            addGlobalStyle('#topnav ul.account-nav .messages .messages-icon{ padding-top: 16px }');
            addGlobalStyle('#topnav ul.account-nav .logged-in-user .dropdown-menu, .dropdown, .dropdown.with-arrow::before{ margin-top: 25px }');
            addGlobalStyle('#comments .comment{ background-color: #262f3c52; border-radius: 10px; padding: 10px; margin: 10px; }');
            addGlobalStyle('#comments #comment-form textarea{ margin: 0; padding: 10px; font-size: 1.1em; background-color: #323c4c; border-radius: 10px; box-shadow: none; color: #f1f1f1; }');
            addGlobalStyle('#comments #comment-form textarea:focus{ box-shadow: #2a3a51 0px 0px 0px 4px }');
            addGlobalStyle('.media-item-content{ padding: 10px 15px; position: relative; height: 83px; margin: 10px; background-color: #19212d; border-radius: 10px; }');
            addGlobalStyle('.box .box-content .action-bar.white .inner, .box .box-content .action-bar .inner{ background-color: transparent;}');
            addGlobalStyle('#comments .more-replies{ background-color: #31425b; box-shadow: 0 -25px 20px -10px #31425b;}');
            addGlobalStyle('.modal, .modal-footer{ background-color: #3e556d;}');
            addGlobalStyle('input, textarea, select{ color: #f1f1f1;}');
            addGlobalStyle('#footer{ box-shadow: none;}');
            addGlobalStyle('#explore-bar #explore-header, ul.curators li, #explore-bar #related-projects{ background: #253142 !important; border-radius: 10px;}');
            addGlobalStyle('.table-striped tbody > tr:nth-child(2n+1) > td, .table-striped tbody > tr:nth-child(2n+1) > th, .notification-feed li{ background-color: #253142; margin-bottom: 10px; border-radius: 10px;;}');
            addGlobalStyle('select{ color: black !important;}')
            addGlobalStyle('.djangobb blockquote{ background: #465975; border-radius: 10px;}')
            addGlobalStyle('.djangobb .markItUpEditor, .editable:hover, .editable.write, #comments .comment form textarea{ background: #465975 !important; border-radius: 10px; border: none !important; padding: 5px;}')
            addGlobalStyle('.editable textarea, span.small-text{ background: transparent !important;}');
            addGlobalStyle('.studio-selector-button{ background: #162a44 !important;}');
            addGlobalStyle('.postleft{ padding-right: 100% !important;}');
            addGlobalStyle('.blockpost div.box, .postfootleft p, .postfootright ul, .postfootright div, .blockpost .box-content, .postfootright, .postright, .postleft, .postfootleft, .blockpost label, .djangobb th, .tc2, .tc3{ box-shadow: none !important;}');

            addGlobalStyle('.v-tabs ul{ padding-top: 112px; padding-right: 20px }');
            addGlobalStyle('.v-tabs li.active, .v-tabs li.active a{ border-radius: 10px; background-color: #1b2431 !important; text-shadow: none; }');
            addGlobalStyle('.v-tabs li, .v-tabs li.active{ margin: 10px; border-radius: 10px; background-color: #1F2A3A !important;}');
            addGlobalStyle('.tabs-index li:hover a{ border-radius: 10px; background-color: #304157 !important;}');
        }


    }

    reapplyStyling()

    listen(window.location.href.length); //This solution was originally by Alburkerk at: https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript/52809105#52809105
    var oldLength = -1;
    function listen(currentLength) {
        if (currentLength != oldLength) {
            reapplyStyling()
        }

        oldLength = window.location.href.length;
        setTimeout(function () {listen(window.location.href.length);}, 1000);
    }


})();
