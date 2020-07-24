// ==UserScript==
// @name         Scratch Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.4.0
// @description  Gives the Scratch user interface a dark theme.
// @author       MiniCoder11 & VFDan
// @match        https://scratch.mit.edu/*
// @exclude      https://scratch.mit.edu/join
// @exclude      https://scratch.mit.edu/accounts/*
// @updateURL    https://github.com/VFDan/Scratch-Dark-Theme/raw/master/Scratch%20Dark%20Mode.user.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

//Thanks to Scratch user 44D3A7HQ for the code off which we have based the main editor color scheme and styling. Their previous work is greatly appreciated.

(function() {
    'use strict';

    function reapplyStyling() {

        var url = window.location.href

        if (url.includes("scratch.mit.edu/projects") && url.includes("editor")) {

            //Editor

            GM_addStyle('.blocklyScrollbarHandle{ fill: #6481AA !important; }');

            //Compatibility with Griffpatch's Scratch Tools
            GM_addStyle('div.s3devDDOut.vis{ background-color:  !important; }');
            GM_addStyle('.s3devInp:hover{ background-color: #254061 !important; }');
            GM_addStyle('#s3devHelpPop > div{ background-color: #283748; border-radius: 10px !important; }');

            GM_addStyle('.custom-procedures_body_SQBv6{ background-color: #18293e !important; }');
            GM_addStyle('.custom-procedures_option-card_BtHt3{ background-color: #122134 !important; }');

            GM_addStyle('.valueReportBox{ color: #515151 !important; }');

            GM_addStyle('.monitor_monitor-container_2J9gl, .scratchCommentTextarea{ color: #575757; }');

            GM_addStyle('.gui_body-wrapper_-N0sA{ background-color: #121e2d !important; }');
            GM_addStyle('.backpack_backpack-item_hwqzQ > div{ background-color: #2136518f !important; }');
            GM_addStyle('.blocklySvg{ background-color: #18293e !important; }');
            GM_addStyle('.asset-panel_wrapper_366X0 { background-color: #1d2e42; color: #FFFFFF; !important; }');

            GM_addStyle('.scratchCategoryMenu, .blocklyToolboxDiv, .selector_wrapper_8_BHs{ background-color: #121e2d; color: #FFFFFF; !important; }');
            GM_addStyle('.scratchCategoryMenuItem.categorySelected { background-color: #1c3048; color: #FFFFFF; !important; }');
            GM_addStyle('.blocklyFlyoutCheckbox{ fill: #33547e; stroke: #33547e; !important; }');
            GM_addStyle('.blocklyFlyoutCheckboxPath{ stroke: #33547e; }')
            GM_addStyle('.project-title-input_title-field_en5Gd:hover{ background-color: #3a5984}');

            GM_addStyle('.blocklyFlyoutBackground{ fill: #203651 !important; }');
            GM_addStyle('.blocklyFlyoutLabelText{ fill: #FFFFFF !important; }');

            GM_addStyle('.sprite-info_sprite-info_3EyZh { background-color: #1d2e42; color: #FFFFFF; !important; }');
            GM_addStyle('.sprite-selector_sprite-selector_2KgCX { background-color: #19283c; color: #FFFFFF; !important; }');

            GM_addStyle('.stage-selector_header_2GVr1 { background-color: #1d2e42; color: #FFFFFF; !important; }');
            GM_addStyle('.stage-selector_stage-selector_3oWOr { background-color: #19283c; color: #FFFFFF; !important; }');

            GM_addStyle('.path.blocklyPath.blocklyBlockBackground{ fill: #000000; !important; }');

            GM_addStyle('.backpack_backpack-header_6ltCS { background: #19283c; color: #FFFFFF; !important; }');

            GM_addStyle('.input_input-form_l9eYg { background-color: #293f5d; color: #FFFFFF; !important; }');

            GM_addStyle('.Popover-body { background: #333333; color: #FFFFFF; border: 1px solid #292929; !important;}');
            GM_addStyle('.Popover-tipShape { fill: #333333; stroke: #292929; !important;');

            GM_addStyle('.gui_tab_27Unf.gui_is-selected_sHAiu { background-color: #254061 !important; }');
            GM_addStyle('.gui_tab_27Unf { background-color: #1c3048;!important; }');
            GM_addStyle('.gui_tab_27Unf:hover { background-color: #293f5d;!important; }');
            GM_addStyle('.selector_new-buttons_2qHDd::before { background: linear-gradient(#fff0, #121e2d); }');

            GM_addStyle('.blocklyWidgetDiv .goog-menuitem-highlight, .blocklyWidgetDiv .goog-menuitem-hover { background-color: #254061 !important; }');

            GM_addStyle('.menu_menu_3k7QT{background-color: #19283c !important;}');
            GM_addStyle('.library_filter-bar_1W0DW{background-color: #132031 !important;}');
            GM_addStyle('.library-item_library-item_1DcMO, .library_library-scroll-grid_1jyXm { background: #1b2946; color: #fff; !important; }');
            GM_addStyle('.blocklyWidgetDiv .goog-menu { background: #293f5d; color: #fff; border: none; border-radius: 12px; box-shadow: black 0px 0px 10px 0px !important; }');

            GM_addStyle('.blocklyScrollbarHandle { fill: #333333AA; !important;');
            GM_addStyle('.library-item_featured-extension-metadata_3D8E8 { color: #fff; }');
            GM_addStyle('body, .sprite-selector-item_sprite-info_-I0i_, .gui_tab_27Unf { color: #fff !important; }');
            GM_addStyle('.sprite-selector-item_sprite-selector-item_kQm-i:hover, .sprite-selector-item_sprite-selector-item_kQm-i.sprite-selector-item_is-selected_24tQj { background-color: #ffffff24 !important; }');

        }

        if (url.includes("scratch.mit.edu/projects") && !url.includes("editor")) {

            //Player
            GM_addStyle('body, .stage_stage-wrapper-overlay_fmZuD{ background-color: #435b7d; color: #bbb !important}');
            GM_addStyle('view, .preview .project-lower-container, .library_library-scroll-grid_1jyXm{ background-color: #172033 !important;}');
            GM_addStyle('.inplace-textarea{ background-color: #2a364d !important; }');
            GM_addStyle('.preview .project-description{ background-color: #2a364d !important; }');
            GM_addStyle('.preview .project-description{ color: #cdcdcd !important; }');
            GM_addStyle('.inplace-textarea{ color: #cdcdcd !important; }');
            GM_addStyle('.inplace-input{ background-color: #2a364d !important; }');
            GM_addStyle('.inplace-input{ color: #cdcdcd !important; }');
            GM_addStyle('.preview .guiPlayer .project-info-alert, .extension-chip{ background-color: #1a2533 !important; }');

            GM_addStyle('.comment .comment-body .comment-bubble{ background-color: #2a364d !important; }');
            GM_addStyle('.comment .comment-body .comment-bubble::before{ background-color: #2a364d !important; }');
            GM_addStyle('.comment .comment-body .comment-bubble{ color: #cdcdcd !important; }');
            GM_addStyle('.preview .comments-header{ color: #cdcdcd !important; }');
            GM_addStyle('.preview .comments-header h4{ color: #cdcdcd !important; }');
            GM_addStyle('.compose-comment .compose-bottom-row .compose-limit{ color: #cdcdcd !important; }');
            GM_addStyle('.comment .action-list{ color: #cdcdcd !important; }');
            GM_addStyle('.replies.collapsed > .comment:last-of-type::after{ background: linear-gradient(rgba(29, 29, 29, 0), #172033); }');

        }

        //website

        GM_addStyle('.banner-wrapper, .tips-getting-started, .gray-area, .tips-activity-guides, #view{ background-color: #253142 !important; }'); //Backdrop
        GM_addStyle('#footer{ background-color: #212c3c !important; }'); //Footer
        GM_addStyle('#navigation, .ttt-modal-header, .modal-content, .stage-header_stage-header-wrapper-overlay_5vfJa, .menu-bar_menu-bar_JcuHF, .modal_header_1h7ps{ background-color: #19283c !important; }');
        GM_addStyle('body{ text-shadow: none !important; }'); //Removes text shadow for dark theme
        GM_addStyle('*{ transition: color 0.25s, background-color 0.25s, background 0.25s, width 0.25s, height 0.25s; box-shadow 0.25s; background-size 0.25s !important; }');
        GM_addStyle('.about .body{ background: #344562; border: none;}');
        GM_addStyle('h1, h2, h3, h4, h5, h6, p{ color: #f1f1f1;}');
        GM_addStyle('.modal-overlay{ background-color: #070c12de;}');
        GM_addStyle('.ttt-tile{ background-color: #2c3c53;}');
        GM_addStyle('#topnav ul.account-nav .logged-in-user .dropdown-menu, .dropdown, .dropdown.with-arrow::before{ box-shadow: none; background-color: #19283c !important; }');
        GM_addStyle('.credits .supporters, .parents .title-banner.faq-banner, .developers .title-banner.faq-banner{ background-color: #2b3a4f !important; }');
        GM_addStyle('.parents .title-banner.masthead, .developers .title-banner.masthead{ background-color: #2e3d51 !important; }');
        GM_addStyle('.djangobb table, .djangobb input, .djangobb select, .djangobb optgroup, .djangobb textarea, .postmsg .postedit{ background-color: #2e3d51 !important; border-radius: 10px;}');
        GM_addStyle('.nvtooltip{ background-color: #253142; border-radius: 10px;}');
        GM_addStyle('.h-tabs > li.active{ background-color: #31425b; border-radius: 10px;}');
        GM_addStyle('.iframeshim, .jqui-modal.ui-widget { background-color: #31425b; border-radius: 10px;}');
        GM_addStyle('.ui-button .ui-button-text { color: black; border-radius: 10px;}');
        GM_addStyle('.djangobb blockquote, .code { background-color: #31425b; border-radius:10px; }');
        GM_addStyle('#topnav ul.account-nav .logged-in-user .dropdown-toggle { background-color: #31425b; }');
        GM_addStyle('a.black, a.black:visited, input.link.black { color: #f1f1f1; }');

        GM_addStyle('.button.small, button.small{ background: transparent !important; box-shadow: none;}');
        GM_addStyle('.info-tooltip{ background-color: #253142;}');

        if (url == "https://scratch.mit.edu" || url == "https://scratch.mit.edu/") {

            GM_addStyle('#view{ background-color: #253142 !important; }');
            GM_addStyle('#footer{ background-color: #212c3c !important; }');
            GM_addStyle('#navigation{ background-color: #19283c !important; }');
            GM_addStyle('.box{ border: 0px; background-color: transparent;}');
            GM_addStyle('.box.activity{ display: none}');
            GM_addStyle('.box .box-header{ border-top: 0px; border-bottom: 0px; background-color: #31425b !important; }');
            GM_addStyle('.box .box-content{ background-color: #31425b !important; border-radius: 0px 0px 10px 10px !important; }');
            GM_addStyle('.news li:nth-child(2n){ border-top: 0px; border-bottom: 0px; !important; }');
            GM_addStyle('.box .box-header h4, .box .box-header h5{ color: #FFFFFF !important; }');
            GM_addStyle('.intro-banner .intro-container{ background-color: #253142 !important; }');
            GM_addStyle('.intro-banner .intro-subnav{ background-color: #212c3c !important; }');
            GM_addStyle('.intro-banner .intro-button, .button.white{ background-color: #31425b; }');
            GM_addStyle('#donor{ background-color: #212c3c !important; }');
            GM_addStyle('.dropdown, .dropdown.with-arrow::before, .dropdown, .dropdown.open, .dropdown.production.open{ background-color: #19283c !important; }');

            GM_addStyle('body, p{ color: #c8c8c8 !important; }');
            GM_addStyle('body{ text-shadow: none !important; }');

            GM_addStyle('.activity-img{ padding: 0px; margin: 0px 13.25px 0px 0px; border-radius: 10px !important; }');
            GM_addStyle('#navigation .link > a{ transition: all 0.25s !important; }');
            //GM_addStyle('.box .box-content{ height: 270px; !important; }'); Whether or not this style should be left in may be debated.
            GM_addStyle('.box .box-header h4, .box .box-header h5{ padding-top: 8px !important; }');

        }

        if (url.includes("scratch.mit.edu/search")) {

            GM_addStyle('.outer #projectBox{ background-color: #253142; !important; }');
            GM_addStyle('.outer .tab-background{ background-color: #31425b; !important; }');
            GM_addStyle('.tabs{ background-color: #31425b; !important; }');
            GM_addStyle('.tabs li:hover, .tabs-index li{ background-color: #2c3c53; !important; }');
            GM_addStyle('.grid .thumbnail{ background-color: #2c3c53; !important; }');
            GM_addStyle('.outer .title-banner.masthead{ background-color: #354864; !important; }');

        }

        //Messages and Explore

        if (url.includes("scratch.mit.edu/messages") || url.includes("scratch.mit.edu/explore")) {

            GM_addStyle('.social-message{ margin: 10px; border: none; padding: 10px; background-color: #323c4c; border-radius: 12px !important; }');
            GM_addStyle('.messages-social-list{ background-color: transparent; border: none !important; }');
            GM_addStyle('.title-banner.mod-messages, .outer .title-banner.masthead{ background-color: #31425b !important; }');
            GM_addStyle('.activity-li{ color: #9BA8BA !important; }');
            GM_addStyle('body, h1, h2, h3, p{ color: #dbdbdb !important; }');
            GM_addStyle('.comment-text::before, .comment-text::after, .comment-text{ border-color: #3c485b; background-color: #3c485b !important; }');
            GM_addStyle('.outer #projectBox{ background-color: #253142 !important; }');
            GM_addStyle('.tabs, .tab-background{ background-color: #31425b; !important; }');
            GM_addStyle('.tabs li:hover{ background-color: #2c3c53; !important; }');
            GM_addStyle('.grid .thumbnail{ background-color: #2c3c53; !important; }');

        }

        if (url.includes("scratch.mit.edu/studios") && url.includes("comments")) {

            GM_addStyle('.button.small, button.small { background-color: #2d3c51 !important; border-radius: 2px; }');

        }

        if (url.includes("scratch.mit.edu/community_guidelines")) {

            GM_addStyle('.box .box-content, .box .box-header{ background-color: #19283c !important; border-radius: 10px; }');
            GM_addStyle('*{ border: none !important; }');
            GM_addStyle('html, body{ color: #c6c6c6 !important; }');
            GM_addStyle('.box{ background: transparent !important; }');

        }

        if (url.includes("scratch.mit.edu/users") || url.includes("scratch.mit.edu/accounts") || url.includes("scratch.mit.edu/statistics") || url.includes("scratch.mit.edu/mystuff") || url.includes("scratch.mit.edu/studios") || url.includes("scratch.mit.edu/cloudmonitor") || url.includes("scratch.mit.edu/discuss")) {

            GM_addStyle('#topnav, .banner, #topnav .innerwrap{ display: block; position: fixed; top: 0; left: 0; z-index: 10; border-bottom: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 0 3px rgba(0, 0, 0, 0.25); background-color: #19283c; width: 100%; height: 50px; }');
            GM_addStyle('#topnav .logo span{ background-image: url(https://scratch.mit.edu/images/logo_sm.png); display: block; margin: 0 6px 0 0; border: 0; background-repeat: no-repeat; background-position: center center; background-size: 95%; width: 81px; height: 50px !important; }');
            GM_addStyle('#topnav ul.account-nav .messages .messages-icon{ background-image: url("/images/nav-notifications.png"); background-size: 50%; display: block; width: 42px; height: 35px; padding: 0; position: relative !important; }');
            GM_addStyle('#topnav ul.account-nav .my-stuff .mystuff-icon{ background-image: url("https://scratch.mit.edu/images/mystuff.png"); background-size: 50%; display: block; width: 42px; height: 35px; padding: 0; position: relative !important; }');

            GM_addStyle('.button.grey, button{ background-image: none; }');
            GM_addStyle('#topnav ul.account-nav .logged-in-user .dropdown-menu, .dropdown, .dropdown.with-arrow::before{ background-color: #31425b !important; }');

            GM_addStyle('html, body{ background-image: none; background-color: #253142 }');
            GM_addStyle('input, textarea, select, #topnav ul.account-nav .sign-in form input{ color: #464646; }');
            GM_addStyle('#topnav ul.account-nav .sign-in .popover, #topnav ul.account-nav .sign-in .popover .arrow::after{ background-color: #415573; }');

            if (!url.includes("mystuff")) {

                GM_addStyle('.empty-field, #profile-data .footer, #profile-box .doing, .box .box-head, .box, .box .box-content, .box .box-content .inner{ background-color: #31425b; border: none; border-radius: 10px }');
                GM_addStyle('.blockpost div.box, .postfootleft p, .postfootright ul, .postfootright div, .blockpost .box-content, .postfootright, .postright, .postleft, .postfootleft, .blockpost label, .djangobb th, .tc2, .tc3{ background-color: #31425b !important; border: none; }');

            } else {

                GM_addStyle('.button > span, button > span, .button > a, button > a{ background: #212b3a; border-radius: 10px;}');
                GM_addStyle('.empty-field, #profile-data .footer, #profile-box .doing, .box .box-head, .box, .box .box-content, .box .box-content .inner{ box-shadow: none; background-color: transparent; border: none; border-radius: 10px; }');

            }

            GM_addStyle('#profile-box #bio textarea, #profile-box #status textarea, #profile-box #bio p, #profile-box #status p, #profile-box, .header-text .profile-details, html, body, div, h1, h2, h3, h4, h5, h6, p{ color: #f1f1f1 }');
            GM_addStyle('.arrow-left{ background-image: url("https://scratch.mit.edu/svgs/carousel/prev_ui-dark-gray.svg"); background-repeat: no-repeat; background-position: center; background-size: 80%; background-color: transparent; color: transparent; }');
            GM_addStyle('.arrow-right{ background-image: url("https://scratch.mit.edu/svgs/carousel/next_ui-dark-gray.svg"); background-repeat: no-repeat; background-position: center; background-size: 80%; background-color: transparent; color: transparent; }');

            GM_addStyle('.slider-carousel.horizontal .slider-carousel-control{ color: transparent }');
            GM_addStyle('*{ color: #f1f1f1; border: none; box-shadow: none; text-shadow: none; }');
            GM_addStyle('#profile-box .player{ border: none; border-radius: 10px; background-color: #3a5173 }');
            GM_addStyle('.slider-carousel .thumb img, img{ border-radius: 10px; border: none; background-color: transparent; }');
            GM_addStyle('.box{ margin-top: 15px; }');
            GM_addStyle('.box-head{ padding: 18px 20px 0px 20px; }');
            GM_addStyle('.media-item-content .media-thumb{ background-color: #475f8482; border-radius: 10px; }');
            GM_addStyle('#comments .highlighted{ background-color: #f9f9f93d; border-radius: 10px;}');
            GM_addStyle('#comments .comment .info .name a{ color: #f1f1f1;}');

            GM_addStyle('#topnav form.search input, #topnav form.search input[type="text"]{ display: inline-block; margin-top: 5px; outline: none; border: 0; background-color: rgba(0, 0, 0, 0.1); height: 14px; }');

            GM_addStyle('*{ font-family: helvetica, arial, sans-serif }');
            GM_addStyle('*{ border: none !important; }');
            GM_addStyle('#topnav ul.site-nav li a{ height: 50px; padding: 6.5px 15px; }');
            GM_addStyle('#topnav ul.account-nav .logged-in-user .dropdown-toggle{ padding-top: 7.5px }');
            GM_addStyle('#topnav ul.account-nav .my-stuff .mystuff-icon{ padding-top: 16px }');
            GM_addStyle('#topnav ul.account-nav .messages .messages-icon{ padding-top: 16px }');
            GM_addStyle('#topnav ul.account-nav .logged-in-user .dropdown-menu, .dropdown, .dropdown.with-arrow::before{ margin-top: 25px }');
            GM_addStyle('#comments .comment{ background-color: #262f3c52; border-radius: 10px; padding: 10px; margin: 10px; }');
            GM_addStyle('#comments #comment-form textarea{ margin: 0; padding: 10px; font-size: 1.1em; background-color: #323c4c; border-radius: 10px; box-shadow: none; color: #f1f1f1; }');
            GM_addStyle('#comments #comment-form textarea:focus{ box-shadow: #2a3a51 0px 0px 0px 4px }');
            GM_addStyle('.media-item-content{ padding: 10px 15px; position: relative; height: 83px; margin: 10px; background-color: #19212d; border-radius: 10px; }');
            GM_addStyle('.box .box-content .action-bar.white .inner, .box .box-content .action-bar .inner{ background-color: transparent;}');
            GM_addStyle('#comments .more-replies{ background-color: #31425b; box-shadow: 0 -25px 20px -10px #31425b;}');
            GM_addStyle('.modal, .modal-footer{ background-color: #3e556d;}');
            GM_addStyle('input, textarea, select{ color: #f1f1f1;}');
            GM_addStyle('#footer{ box-shadow: none;}');
            GM_addStyle('#explore-bar #explore-header, ul.curators li, #explore-bar #related-projects{ background: #253142 !important; border-radius: 10px;}');
            GM_addStyle('.table-striped tbody > tr:nth-child(2n+1) > td, .table-striped tbody > tr:nth-child(2n+1) > th, .notification-feed li{ background-color: #253142; margin-bottom: 10px; border-radius: 10px;;}');
            GM_addStyle('select{ color: black !important;}')
            GM_addStyle('.djangobb blockquote{ background: #465975; border-radius: 10px;}')
            GM_addStyle('.djangobb .markItUpEditor, .editable:hover, .editable.write, #comments .comment form textarea{ background: #465975 !important; border-radius: 10px; border: none !important; padding: 5px;}')
            GM_addStyle('.editable textarea, span.small-text{ background: transparent !important;}');
            GM_addStyle('.studio-selector-button{ background: #162a44 !important;}');
            GM_addStyle('.postleft{ padding-right: 100% !important;}');
            GM_addStyle('.blockpost div.box, .postfootleft p, .postfootright ul, .postfootright div, .blockpost .box-content, .postfootright, .postright, .postleft, .postfootleft, .blockpost label, .djangobb th, .tc2, .tc3{ box-shadow: none !important;}');

            GM_addStyle('.v-tabs ul{ padding-top: 112px; padding-right: 20px }');
            GM_addStyle('.v-tabs li.active, .v-tabs li.active a{ border-radius: 10px; background-color: #1b2431 !important; text-shadow: none; }');
            GM_addStyle('.v-tabs li, .v-tabs li.active{ margin: 10px; border-radius: 10px; background-color: #1F2A3A !important;}');
            GM_addStyle('.tabs-index li:hover a{ border-radius: 10px; background-color: #304157 !important;}');
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
