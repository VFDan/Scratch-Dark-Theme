// ==UserScript==
// @name         Scratch Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Gives the Scratch user interface a dark theme.
// @author       MiniCoder11 & VFDan
// @match        https://scratch.mit.edu/*
// @exclude      https://scratch.mit.edu/studios/*
// @exclude      https://scratch.mit.edu/users/*
// @exclude      https://scratch.mit.edu/mystuff/*
// @exclude      https://scratch.mit.edu/discuss/*
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
    //editor
    addGlobalStyle('.gui_body-wrapper_-N0sA{ background-color: #292929 !important; }');
    addGlobalStyle('.blocklySvg{ background-color: #292929 !important; }');
    addGlobalStyle('.asset-panel_wrapper_366X0 { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.scratchCategoryMenu { background-color: #292929; color: #FFFFFF; !important; }');
    addGlobalStyle('.scratchCategoryMenuItem.categorySelected { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.blocklyToolboxDiv{ background-color: #292929 !important; }');

    addGlobalStyle('.blocklyFlyoutBackground{ fill: #333333 !important; }');
    addGlobalStyle('.blocklyFlyoutLabelText{ fill: #FFFFFF !important; }');

    addGlobalStyle('.sprite-info_sprite-info_3EyZh { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.sprite-selector_sprite-selector_2KgCX { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.stage-selector_header_2GVr1 { background-color: #333333; color: #FFFFFF; !important; }');
    addGlobalStyle('.stage-selector_stage-selector_3oWOr { background-color: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.path.blocklyPath.blocklyBlockBackground{ fill: #000000; !important; }');

    addGlobalStyle('.backpack_backpack-header_6ltCS { background: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.input_input-form_l9eYg { background-color: #292929; color: #FFFFFF; !important; }');

    addGlobalStyle('.Popover-body { background: #333333; color: #FFFFFF; border: 1px solid #292929; !important;}');
    addGlobalStyle('.Popover-tipShape { fill: #333333; stroke: #292929; !important;');

    addGlobalStyle('.gui_tab_27Unf.gui_is-selected_sHAiu { background-color: #333333;!important; }');
    addGlobalStyle('.gui_tab_27Unf { background-color: #292929;!important; }');

    addGlobalStyle('.selector_wrapper_8_BHs { background: #333333; color: #FFFFFF; !important; }');

    addGlobalStyle('.blocklyScrollbarHandle { fill: #333333AA; !important;');

    //player
    addGlobalStyle('.inplace-textarea{ background-color: #333333 !important; }');
    addGlobalStyle('.preview .project-description{ background-color: #333333 !important; }');
    addGlobalStyle('.preview .project-description{ color: #FFFFFF !important; }');
    addGlobalStyle('.inplace-textarea{ color: #FFFFFF !important; }');
    addGlobalStyle('.inplace-input{ background-color: #333333 !important; }');
    addGlobalStyle('.inplace-input{ color: #FFFFFF !important; }');

    addGlobalStyle('.comment .comment-body .comment-bubble{ background-color: #333333 !important; }');
    addGlobalStyle('.comment .comment-body .comment-bubble::before{ background-color: #333333 !important; }');
    addGlobalStyle('.comment .comment-body .comment-bubble{ color: #FFFFFF !important; }');
    addGlobalStyle('.preview .project-lower-container{ background-color: #292929 !important; }');
    addGlobalStyle('.preview .comments-header{ color: #FFFFFF !important; }');
    addGlobalStyle('.preview .comments-header h4{ color: #FFFFFF !important; }');
    addGlobalStyle('.compose-comment .compose-bottom-row .compose-limit{ color: #FFFFFF !important; }');
    addGlobalStyle('.comment .action-list{ color: #FFFFFF !important; }');
    addGlobalStyle('.replies.collapsed > .comment:last-of-type::after{ background: linear-gradient(rgba(29, 29, 29, 0), #292929); }');

    //website
    addGlobalStyle('#view{ background-color: #253142 !important; }');
    addGlobalStyle('#footer{ background-color: #212c3c !important; }');
    addGlobalStyle('#navigation{ background-color: #19283c !important; }');

    addGlobalStyle('.box{ border: 0px}');
    addGlobalStyle('.box{ background-color: #333333 !important; }');
    addGlobalStyle('.box .box-header{ border-top: 0px; border-bottom: 0px; background-color: #31425b !important; }');
    addGlobalStyle('.box .box-content{ background-color: #31425b !important; border-radius: 0px 0px 10px 10px !important; }');
    addGlobalStyle('.activity-li{ color: #9BA8BA !important; }');
    addGlobalStyle('.news li:nth-child(2n){ border-top: 0px; border-bottom: 0px; !important; }');
    addGlobalStyle('.box .box-header h4, .box .box-header h5{ color: #FFFFFF !important; }');
    addGlobalStyle('.intro-banner .intro-container{ background-color: #253142 !important; }');
    addGlobalStyle('.intro-banner .intro-subnav{ background-color: #212c3c !important; }');
    addGlobalStyle('.intro-banner .intro-button{ background-color: #31425b !important; }'); //h1, h2, h3, h4, h5, p
    addGlobalStyle('#donor{ background-color: #212c3c !important; }');

    addGlobalStyle('#body{ color: #FFFFFF !important; }');
    addGlobalStyle('#body{ text-shadow: none !important; }');


})();
