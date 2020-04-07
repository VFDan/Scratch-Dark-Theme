// ==UserScript==
// @name         Scratch Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.9.4
// @description  Gives the Scratch user interface a dark theme.
// @author       MiniCoder11 & VFDan (This version's scripting was written by MiniCoder11)
// @match        https://scratch.mit.edu/*
// @exclude      https://scratch.mit.edu/join
// @exclude      https://scratch.mit.edu/accounts/*
// @grant        none
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

    const url = window.location.href

    if (url.includes("scratch.mit.edu/projects") && url.includes("editor")) {

        //Editor

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
        //addGlobalStyle('.preview .project-lower-container{ background-color: # !important; }');
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
    addGlobalStyle('*{ transition: all 0.25s !important; }');
    addGlobalStyle('.about .body{ background: #344562; border: none;}');
    addGlobalStyle('h1, h2, h3, h4, h5, h6, p{ color: #f1f1f1;}');
    addGlobalStyle('.modal-overlay{ background-color: #070c12de;}');
    addGlobalStyle('.ttt-tile{ background-color: #2c3c53;}');
    addGlobalStyle('.dropdown, .dropdown.with-arrow::before{ background-color: #19283c !important; }');

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
        addGlobalStyle('.tabs li:hover{ background-color: #2c3c53; !important; }');
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
        document.querySelector('.select select').style = 'background-color: #19283c';
        addGlobalStyle('option {background-color: #253142!important}');
    }

})();
