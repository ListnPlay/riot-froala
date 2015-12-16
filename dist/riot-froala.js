(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';
if (!global.riot) {
    global.riot = require('riot');
}

var riotFroala = require('./riot-froala');

exports = module.exports = riotFroala;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./riot-froala":19,"riot":18}],2:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.fr-element,.fr-element:focus{outline:0 solid transparent}.fr-element{background:0 0;color:#000;position:relative;z-index:2;text-align:initial;-webkit-user-select:auto}.fr-element img{max-width:calc(100% - (2 * 5px))}.fr-element.fr-disabled{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.fr-element [contenteditable=false]{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.fr-box.fr-basic .fr-element{padding:10px}iframe.fr-iframe{width:100%;border:0;position:relative;display:block;z-index:2;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fr-wrapper{position:relative;overflow:auto;z-index:1}.fr-wrapper .fr-placeholder{position:absolute;font-size:12px;color:#aaa;z-index:1;display:none;top:0;left:0}.fr-wrapper.show-placeholder .fr-placeholder{display:block}.fr-wrapper ::selection{background:#b5d6fd;color:#000}.fr-wrapper ::-moz-selection{background:#b5d6fd;color:#000}.fr-box.fr-rtl .fr-wrapper .fr-placeholder{right:0;left:auto}.fr-box.fr-basic .fr-wrapper{background:#fff;border:0;border-top:0}.fr-box.fr-basic .fr-wrapper .fr-placeholder{top:10px;left:10px}.fr-box.fr-basic.fr-rtl .fr-wrapper .fr-placeholder{right:10px;left:auto}.fr-box.fr-basic.fr-top .fr-wrapper{border-top:0;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.fr-box.fr-basic.fr-bottom .fr-wrapper{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;border-bottom:0;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.fr-tooltip{position:absolute;top:0;left:0;padding:0 8px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#222;color:#fff;font-size:11px;line-height:22px;font-family:Arial,Helvetica,sans-serif;-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\";left:-3000px;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;z-index:9997}.fr-tooltip.fr-visible{-webkit-opacity:1;-moz-opacity:1;opacity:1;-ms-filter:\"alpha(Opacity=0)\"}.fr-toolbar{color:#222;background:#fff;position:relative;z-index:4;font-family:Arial,Helvetica,sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:0 2px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);text-align:left;border:0;border-top:5px solid #222}.fr-toolbar::after{clear:both;display:block;content:\"\"}.fr-toolbar.fr-rtl{text-align:right}.fr-toolbar.fr-inline{display:none}.fr-toolbar.fr-inline.fr-desktop{white-space:nowrap;position:absolute;margin-top:10px}.fr-toolbar.fr-inline.fr-desktop .fr-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #222;position:absolute;top:-9px;left:50%;margin-left:-5px;display:inline-block}.fr-toolbar.fr-inline.fr-desktop.fr-above{margin-top:-10px;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-bottom:5px solid #222;border-top:0}.fr-toolbar.fr-inline.fr-desktop.fr-above .fr-arrow{top:auto;bottom:-9px;border-bottom:0;border-top-color:inherit;border-top-style:solid;border-top-width:5px}.fr-toolbar.fr-inline.fr-mobile{left:0;right:0;width:auto!important}.fr-toolbar.fr-top{top:0;border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.fr-toolbar.fr-bottom{bottom:0;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.fr-separator{background:#ebebeb;display:block;vertical-align:top;float:left}.fr-separator+.fr-separator{display:none}.fr-separator.fr-vs{height:33px;width:1px;margin:2px}.fr-separator.fr-hs{clear:both;height:1px;width:calc(100% - (2 * 2px));margin:0 2px}.fr-separator.fr-hidden{display:none!important}.fr-rtl .fr-separator{float:right}.fr-toolbar.fr-inline .fr-separator.fr-hs{float:none}.fr-toolbar.fr-inline .fr-separator.fr-vs{float:none;display:inline-block}.fr-toolbar .fr-command.fr-btn,.fr-popup .fr-command.fr-btn{background:0 0;color:#222;-moz-outline:0;outline:0;border:0;line-height:1;cursor:pointer;text-align:left;margin:0 2px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;z-index:2;position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;text-decoration:none;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;float:left;padding:0}.fr-toolbar .fr-command.fr-btn i,.fr-popup .fr-command.fr-btn i{font-size:15px;width:15px;margin:11px 11.5px;text-align:center;float:none}.fr-toolbar .fr-command.fr-btn span,.fr-popup .fr-command.fr-btn span{font-size:14px;display:block;line-height:14px;margin:11px 11.5px;min-width:15px;float:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;height:15px}.fr-toolbar .fr-command.fr-btn img,.fr-popup .fr-command.fr-btn img{margin:11px 11.5px;width:15px}.fr-toolbar .fr-command.fr-btn.fr-active,.fr-popup .fr-command.fr-btn.fr-active{color:#1e88e5;background:0 0}.fr-toolbar .fr-command.fr-btn.fr-dropdown,.fr-popup .fr-command.fr-btn.fr-dropdown{width:auto}.fr-toolbar .fr-command.fr-btn.fr-dropdown i,.fr-popup .fr-command.fr-btn.fr-dropdown i,.fr-toolbar .fr-command.fr-btn.fr-dropdown span,.fr-popup .fr-command.fr-btn.fr-dropdown span,.fr-toolbar .fr-command.fr-btn.fr-dropdown img,.fr-popup .fr-command.fr-btn.fr-dropdown img{margin-left:7.5px;margin-right:15.5px}.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active,.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active{color:#222;background:#d6d6d6}.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover,.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover,.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus,.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus{background:#d6d6d6!important;color:#222!important}.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus::after,.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus::after{border-top-color:#222!important}.fr-toolbar .fr-command.fr-btn.fr-dropdown::after,.fr-popup .fr-command.fr-btn.fr-dropdown::after{position:absolute;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #222;right:3.75px;top:16.5px;content:\"\"}.fr-toolbar .fr-command.fr-btn.fr-disabled,.fr-popup .fr-command.fr-btn.fr-disabled{color:#bdbdbd;cursor:default}.fr-toolbar .fr-command.fr-btn.fr-disabled::after,.fr-popup .fr-command.fr-btn.fr-disabled::after{border-top-color:#bdbdbd!important}.fr-toolbar .fr-command.fr-btn.fr-hidden,.fr-popup .fr-command.fr-btn.fr-hidden{display:none}.fr-toolbar.fr-disabled .fr-btn,.fr-popup.fr-disabled .fr-btn,.fr-toolbar.fr-disabled .fr-btn.fr-active,.fr-popup.fr-disabled .fr-btn.fr-active{color:#bdbdbd}.fr-toolbar.fr-disabled .fr-btn.fr-dropdown::after,.fr-popup.fr-disabled .fr-btn.fr-dropdown::after,.fr-toolbar.fr-disabled .fr-btn.fr-active.fr-dropdown::after,.fr-popup.fr-disabled .fr-btn.fr-active.fr-dropdown::after{border-top-color:#bdbdbd}.fr-toolbar.fr-rtl .fr-command.fr-btn,.fr-popup.fr-rtl .fr-command.fr-btn{float:right}.fr-toolbar.fr-inline .fr-command.fr-btn{float:none}.fr-desktop .fr-command:hover,.fr-desktop .fr-command:focus{color:#222;background:#ebebeb}.fr-desktop .fr-command:hover::after,.fr-desktop .fr-command:focus::after{border-top-color:#222!important}.fr-desktop .fr-command.fr-selected{color:#222;background:#d6d6d6}.fr-desktop .fr-command.fr-active:hover,.fr-desktop .fr-command.fr-active:focus{color:#1e88e5;background:#ebebeb}.fr-desktop .fr-command.fr-active.fr-selected{color:#1e88e5;background:#d6d6d6}.fr-desktop .fr-command.fr-disabled:hover,.fr-desktop .fr-command.fr-disabled:focus,.fr-desktop .fr-command.fr-disabled.fr-selected{background:0 0}.fr-desktop.fr-disabled .fr-command:hover,.fr-desktop.fr-disabled .fr-command:focus,.fr-desktop.fr-disabled .fr-command.fr-selected{background:0 0}.fr-toolbar.fr-mobile .fr-command.fr-blink,.fr-popup.fr-mobile .fr-command.fr-blink{background:0 0}.fr-command.fr-btn+.fr-dropdown-menu{display:inline-block;position:absolute;right:auto;bottom:auto;height:auto;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);z-index:3;-webkit-overflow-scrolling:touch;overflow:hidden;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper{background:#fff;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);padding:0;margin:auto;display:inline-block;text-align:left;position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:max-height .2s ease 0s;-moz-transition:max-height .2s ease 0s;-ms-transition:max-height .2s ease 0s;-o-transition:max-height .2s ease 0s;margin-top:0;float:left;max-height:0;height:0;margin-top:0!important}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content{overflow:auto;position:relative;max-height:275px}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list{list-style-type:none;margin:0;padding:0}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li{padding:0;margin:0;font-size:15px}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a{padding:0 24px;line-height:200%;display:block;cursor:pointer;white-space:nowrap;color:inherit;text-decoration:none}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-active{background:#d6d6d6}.fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-disabled{color:#bdbdbd;cursor:default}.fr-command.fr-btn.fr-active+.fr-dropdown-menu{display:inline-block}.fr-command.fr-btn.fr-active+.fr-dropdown-menu .fr-dropdown-wrapper{height:auto;max-height:275px}.fr-bottom>.fr-command.fr-btn+.fr-dropdown-menu{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.fr-toolbar.fr-rtl .fr-dropdown-wrapper,.fr-popup.fr-rtl .fr-dropdown-wrapper{text-align:right!important}.fr-popup{position:absolute;display:none;color:#222;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-top:10px;z-index:9995;text-align:left;border:0;border-top:5px solid #222}.fr-popup.fr-above{margin-top:-10px;border-top:0;border-bottom:5px solid #222;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.fr-popup.fr-active{display:block}.fr-popup.fr-hidden{-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\"}.fr-popup .fr-hs{display:block!important}.fr-popup .fr-input-line{position:relative;padding:8px 0}.fr-popup .fr-input-line input[type=text],.fr-popup .fr-input-line textarea{width:100%;margin:0 0 1px;border:0;border-bottom:solid 1px #bdbdbd;color:#222;font-size:14px;padding:6px 0 2px;background:rgba(0,0,0,0);position:relative;z-index:2}.fr-popup .fr-input-line input[type=text]:focus,.fr-popup .fr-input-line textarea:focus{border-bottom:solid 2px #1e88e5;margin-bottom:0}.fr-popup .fr-input-line input+span,.fr-popup .fr-input-line textarea+span{position:absolute;top:0;left:0;font-size:12px;color:rgba(0,0,0,0);-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s;z-index:1}.fr-popup .fr-input-line input.fr-not-empty:focus+span,.fr-popup .fr-input-line textarea.fr-not-empty:focus+span{color:#1e88e5}.fr-popup .fr-input-line input.fr-not-empty+span,.fr-popup .fr-input-line textarea.fr-not-empty+span{color:gray}.fr-popup input,.fr-popup textarea{user-select:text;-o-user-select:text;-moz-user-select:text;-khtml-user-select:text;-webkit-user-select:text;-ms-user-select:text;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;outline:0}.fr-popup textarea{resize:none}.fr-popup .fr-buttons{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);padding:0 2px;white-space:nowrap;line-height:0;border-bottom:0}.fr-popup .fr-buttons::after{clear:both;display:block;content:\"\"}.fr-popup .fr-buttons .fr-btn{display:inline-block;float:none}.fr-popup .fr-buttons .fr-btn i{float:left}.fr-popup .fr-buttons .fr-separator{display:inline-block;float:none}.fr-popup .fr-layer{width:225px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:10px;display:none}@media (min-width:768px){.fr-popup .fr-layer{width:300px}}.fr-popup .fr-layer.fr-active{display:inline-block}.fr-popup .fr-action-buttons{z-index:7;height:36px;text-align:right}.fr-popup .fr-action-buttons button.fr-command{height:36px;line-height:1;color:#1e88e5;padding:10px;cursor:pointer;text-decoration:none;border:0;background:0 0;font-size:16px;outline:0;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.fr-popup .fr-action-buttons button.fr-command+button{margin-left:24px}.fr-popup .fr-action-buttons button.fr-command:hover,.fr-popup .fr-action-buttons button.fr-command:focus{background:#ebebeb;color:#1e88e5}.fr-popup .fr-action-buttons button.fr-command:active{background:#d6d6d6;color:#1e88e5}.fr-popup .fr-action-buttons button::-moz-focus-inner{border:0}.fr-popup .fr-checkbox{position:relative;display:inline-block;width:16px;height:16px;line-height:1;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;vertical-align:middle}.fr-popup .fr-checkbox svg{margin-left:2px;margin-top:2px;display:none;width:10px;height:10px}.fr-popup .fr-checkbox span{border:solid 1px #222;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;width:16px;height:16px;display:inline-block;position:relative;z-index:1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background .2s ease 0s,border-color .2s ease 0s;-moz-transition:background .2s ease 0s,border-color .2s ease 0s;-ms-transition:background .2s ease 0s,border-color .2s ease 0s;-o-transition:background .2s ease 0s,border-color .2s ease 0s}.fr-popup .fr-checkbox input{position:absolute;z-index:2;-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\";border:0 none;cursor:pointer;height:16px;margin:0;padding:0;width:16px;top:1px;left:1px}.fr-popup .fr-checkbox input:checked+span{background:#1e88e5;border-color:#1e88e5}.fr-popup .fr-checkbox input:checked+span svg{display:block}.fr-popup .fr-checkbox input:focus+span{border-color:#1e88e5}.fr-popup .fr-checkbox-line{font-size:14px;line-height:1.4px;margin-top:10px}.fr-popup .fr-checkbox-line label{cursor:pointer;margin:0 5px;vertical-align:middle}.fr-popup.fr-rtl{direction:rtl;text-align:right}.fr-popup.fr-rtl .fr-action-buttons{text-align:left}.fr-popup.fr-rtl .fr-input-line input+span,.fr-popup.fr-rtl .fr-input-line textarea+span{left:auto;right:0}.fr-popup.fr-desktop .fr-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #222;position:absolute;top:-9px;left:50%;margin-left:-5px;display:inline-block}.fr-popup.fr-desktop.fr-above .fr-arrow{top:auto;bottom:-9px;border-bottom:0;border-top-color:inherit;border-top-style:solid;border-top-width:5px}.fr-text-edit-layer{width:250px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block!important}.fr-visibility-helper{display:none;margin-left:0!important}@media (min-width:768px){.fr-visibility-helper{margin-left:1px!important}}@media (min-width:992px){.fr-visibility-helper{margin-left:2px!important}}@media (min-width:1200px){.fr-visibility-helper{margin-left:3px!important}}.fr-opacity-0{-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\"}.fr-box{position:relative}.fr-sticky{position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky}.fr-sticky-off{position:relative}.fr-sticky-on{position:fixed}.fr-sticky-on.fr-sticky-ios{position:absolute;left:0;right:0;width:auto!important}.fr-sticky-dummy{display:none}.fr-sticky-on+.fr-sticky-dummy{display:block}"; (require("./../../node_modules/cssify"))(css); module.exports = css;
},{"./../../node_modules/cssify":16}],3:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.fr-file-upload-layer{border:dashed 2px #bdbdbd;padding:25px 0;position:relative;font-size:14px;letter-spacing:1px;line-height:140%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;text-align:center}.fr-file-upload-layer:hover{background:#ebebeb}.fr-file-upload-layer.fr-drop{background:#ebebeb;border-color:#1e88e5}.fr-file-upload-layer .fr-form{-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\";position:absolute;top:0;bottom:0;left:0;right:0;z-index:9999;overflow:hidden;margin:0!important;padding:0!important;width:100%!important}.fr-file-upload-layer .fr-form input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;width:500%;height:100%;margin:0;font-size:400px}.fr-file-progress-bar-layer{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fr-file-progress-bar-layer>h3{font-size:16px;margin:10px 0;font-weight:400}.fr-file-progress-bar-layer>div.fr-action-buttons{display:none}.fr-file-progress-bar-layer>div.fr-loader{background:#bcdbf7;height:10px;width:100%;margin-top:20px;overflow:hidden;position:relative}.fr-file-progress-bar-layer>div.fr-loader span{display:block;height:100%;width:0;background:#1e88e5;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.fr-file-progress-bar-layer>div.fr-loader.fr-indeterminate span{width:30%!important;position:absolute;top:0;-webkit-animation:loading 2s linear infinite;-moz-animation:loading 2s linear infinite;-o-animation:loading 2s linear infinite;animation:loading 2s linear infinite}.fr-file-progress-bar-layer.fr-error>div.fr-loader{display:none}.fr-file-progress-bar-layer.fr-error>div.fr-action-buttons{display:block}@keyframes loading{from{left:-25%}to{left:100%}}@-webkit-keyframes loading{from{left:-25%}to{left:100%}}@-moz-keyframes loading{from{left:-25%}to{left:100%}}@-o-keyframes loading{from{left:-25%}to{left:100%}}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],4:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.fr-image-resizer{position:absolute;border:solid 1px #1e88e5;display:none;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.fr-image-resizer.fr-active{display:block}.fr-image-resizer .fr-handler{display:block;position:absolute;background:#1e88e5;border:solid 1px #fff;z-index:4;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fr-image-resizer .fr-handler.fr-hnw{cursor:nw-resize}.fr-image-resizer .fr-handler.fr-hne{cursor:ne-resize}.fr-image-resizer .fr-handler.fr-hsw{cursor:sw-resize}.fr-image-resizer .fr-handler.fr-hse{cursor:se-resize}.fr-image-resizer .fr-handler{width:12px;height:12px}.fr-image-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.fr-image-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.fr-image-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.fr-image-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.fr-image-resizer .fr-handler{width:10px;height:10px}.fr-image-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.fr-image-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.fr-image-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.fr-image-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.fr-image-overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:9999;display:none}.fr-image-upload-layer{border:dashed 2px #bdbdbd;padding:25px 0;position:relative;font-size:14px;letter-spacing:1px;line-height:140%;text-align:center}.fr-image-upload-layer:hover{background:#ebebeb}.fr-image-upload-layer.fr-drop{background:#ebebeb;border-color:#1e88e5}.fr-image-upload-layer .fr-form{-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\";position:absolute;top:0;bottom:0;left:0;right:0;z-index:9999;overflow:hidden;margin:0!important;padding:0!important;width:100%!important}.fr-image-upload-layer .fr-form input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;width:500%;height:100%;margin:0;font-size:400px}.fr-image-progress-bar-layer>h3{font-size:16px;margin:10px 0;font-weight:400}.fr-image-progress-bar-layer>div.fr-action-buttons{display:none}.fr-image-progress-bar-layer>div.fr-loader{background:#bcdbf7;height:10px;width:100%;margin-top:20px;overflow:hidden;position:relative}.fr-image-progress-bar-layer>div.fr-loader span{display:block;height:100%;width:0;background:#1e88e5;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.fr-image-progress-bar-layer>div.fr-loader.fr-indeterminate span{width:30%!important;position:absolute;top:0;-webkit-animation:loading 2s linear infinite;-moz-animation:loading 2s linear infinite;-o-animation:loading 2s linear infinite;animation:loading 2s linear infinite}.fr-image-progress-bar-layer.fr-error>div.fr-loader{display:none}.fr-image-progress-bar-layer.fr-error>div.fr-action-buttons{display:block}.fr-image-size-layer .fr-image-group .fr-input-line{width:calc(50% - 5px);display:inline-block}.fr-image-size-layer .fr-image-group .fr-input-line+.fr-input-line{margin-left:10px}@keyframes loading{from{left:-25%}to{left:100%}}@-webkit-keyframes loading{from{left:-25%}to{left:100%}}@-moz-keyframes loading{from{left:-25%}to{left:100%}}@-o-keyframes loading{from{left:-25%}to{left:100%}}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],5:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.fr-element .fr-video{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.fr-element .fr-video::after{position:absolute;content:'';z-index:1;top:0;left:0;right:0;bottom:0;cursor:pointer;display:block;background:rgba(0,0,0,0)}.fr-element .fr-video.fr-active>*{z-index:2;position:relative}.fr-element .fr-video>*{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;max-width:100%;border:0}.fr-box .fr-video-resizer{position:absolute;border:solid 1px #1e88e5;display:none;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.fr-box .fr-video-resizer.fr-active{display:block}.fr-box .fr-video-resizer .fr-handler{display:block;position:absolute;background:#1e88e5;border:solid 1px #fff;z-index:4;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fr-box .fr-video-resizer .fr-handler.fr-hnw{cursor:nw-resize}.fr-box .fr-video-resizer .fr-handler.fr-hne{cursor:ne-resize}.fr-box .fr-video-resizer .fr-handler.fr-hsw{cursor:sw-resize}.fr-box .fr-video-resizer .fr-handler.fr-hse{cursor:se-resize}.fr-box .fr-video-resizer .fr-handler{width:12px;height:12px}.fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.fr-box .fr-video-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.fr-box .fr-video-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.fr-box .fr-video-resizer .fr-handler{width:10px;height:10px}.fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.fr-box .fr-video-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.fr-box .fr-video-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.fr-video-size-layer .fr-video-group .fr-input-line{width:calc(50% - 5px);display:inline-block}.fr-video-size-layer .fr-video-group .fr-input-line+.fr-input-line{margin-left:10px}.fr-video-overlay{position:fixed;top:0;left:0;bottom:0;right:0;z-index:9999;display:none}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],6:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.dark-theme .fr-view table td,.dark-theme .fr-view table th{border:1px solid #ddd}.dark-theme .fr-view blockquote{border-left:solid 2px #5e35b1;color:#5e35b1}.dark-theme .fr-view blockquote blockquote{border-color:#00bcd4;color:#00bcd4}.dark-theme .fr-view blockquote blockquote blockquote{border-color:#43a047;color:#43a047}.dark-theme img.fr-dib{margin-top:5px;margin-bottom:5px}.dark-theme img.fr-dib.fr-fil{margin:5px auto 5px 0;left:5px}.dark-theme img.fr-dib.fr-fir{margin:5px 0 5px auto;right:5px}.dark-theme img.fr-dii{margin-top:5px;margin-bottom:5px}.dark-theme img.fr-dii.fr-fil{margin:5px 10px 5px 0;left:5px}.dark-theme img.fr-dii.fr-fir{margin:5px 0 5px 10px;right:5px}.dark-theme .fr-tooltip{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#222;color:#fff;font-size:11px;line-height:22px;font-family:Arial,Helvetica,sans-serif;-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s}.dark-theme .fr-element{color:#000}.dark-theme.fr-box.fr-basic .fr-element{padding:10px}.dark-theme .fr-wrapper .fr-placeholder{font-size:12px;color:#aaa}.dark-theme .fr-wrapper ::selection{background:#b5d6fd;color:#000}.dark-theme .fr-wrapper ::-moz-selection{background:#b5d6fd;color:#000}.dark-theme.fr-box.fr-basic .fr-wrapper{background:#fff;border:0;border-top:0}.dark-theme.fr-box.fr-basic .fr-wrapper .fr-placeholder{top:10px;left:10px}.dark-theme.fr-box.fr-basic.fr-top .fr-wrapper{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme.fr-box.fr-basic.fr-bottom .fr-wrapper{-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme.fr-toolbar .fr-command.fr-btn,.dark-theme.fr-popup .fr-command.fr-btn{color:#fff;margin:0 2px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.dark-theme.fr-toolbar .fr-command.fr-btn i,.dark-theme.fr-popup .fr-command.fr-btn i{font-size:15px;width:15px;margin:11px 11.5px}.dark-theme.fr-toolbar .fr-command.fr-btn span,.dark-theme.fr-popup .fr-command.fr-btn span{font-size:14px;line-height:14px;margin:11px 11.5px;min-width:15px;height:15px}.dark-theme.fr-toolbar .fr-command.fr-btn img,.dark-theme.fr-popup .fr-command.fr-btn img{margin:11px 11.5px;width:15px}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-active,.dark-theme.fr-popup .fr-command.fr-btn.fr-active{color:#42a5f5;background:0 0}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown i,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown i,.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown span,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown span,.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown img,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown img{margin-left:7.5px;margin-right:15.5px}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active{color:#fff;background:#2e2e2e}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover,.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus{background:#2e2e2e!important;color:#fff!important}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus::after,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus::after{border-top-color:#fff!important}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown::after,.dark-theme.fr-popup .fr-command.fr-btn.fr-dropdown::after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #fff;right:3.75px;top:16.5px}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-disabled,.dark-theme.fr-popup .fr-command.fr-btn.fr-disabled{color:gray}.dark-theme.fr-toolbar .fr-command.fr-btn.fr-disabled::after,.dark-theme.fr-popup .fr-command.fr-btn.fr-disabled::after{border-top-color:gray}.dark-theme.fr-toolbar.fr-disabled .fr-btn,.dark-theme.fr-popup.fr-disabled .fr-btn,.dark-theme.fr-toolbar.fr-disabled .fr-btn.fr-active,.dark-theme.fr-popup.fr-disabled .fr-btn.fr-active{color:gray}.dark-theme.fr-toolbar.fr-disabled .fr-btn.fr-dropdown::after,.dark-theme.fr-popup.fr-disabled .fr-btn.fr-dropdown::after,.dark-theme.fr-toolbar.fr-disabled .fr-btn.fr-active.fr-dropdown::after,.dark-theme.fr-popup.fr-disabled .fr-btn.fr-active.fr-dropdown::after{border-top-color:gray}.dark-theme.fr-desktop .fr-command:hover,.dark-theme.fr-desktop .fr-command:focus{color:#fff;background:#3d3d3d}.dark-theme.fr-desktop .fr-command:hover::after,.dark-theme.fr-desktop .fr-command:focus::after{border-top-color:#fff!important}.dark-theme.fr-desktop .fr-command.fr-selected{color:#fff;background:#2e2e2e}.dark-theme.fr-desktop .fr-command.fr-active:hover,.dark-theme.fr-desktop .fr-command.fr-active:focus{color:#42a5f5;background:#3d3d3d}.dark-theme.fr-desktop .fr-command.fr-active.fr-selected{color:#42a5f5;background:#2e2e2e}.dark-theme.fr-desktop .fr-command.fr-disabled:hover,.dark-theme.fr-desktop .fr-command.fr-disabled:focus,.dark-theme.fr-desktop .fr-command.fr-disabled.fr-selected{background:0 0}.dark-theme.fr-toolbar.fr-mobile .fr-command.fr-blink,.dark-theme.fr-popup.fr-mobile .fr-command.fr-blink{background:0 0}.dark-theme .fr-command.fr-btn+.fr-dropdown-menu{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper{background:#353535;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-webkit-transition:max-height .2s ease 0s;-moz-transition:max-height .2s ease 0s;-ms-transition:max-height .2s ease 0s;-o-transition:max-height .2s ease 0s}.dark-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content{max-height:275px}.dark-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-active{background:#2e2e2e}.dark-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-disabled{color:gray}.dark-theme .fr-command.fr-btn.fr-active+.fr-dropdown-menu .fr-dropdown-wrapper{max-height:275px}.dark-theme .fr-bottom>.fr-command.fr-btn+.fr-dropdown-menu{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme.fr-popup{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#fff;background:#353535;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;border:0;border-top:5px solid #222}.dark-theme.fr-popup.fr-above{border-bottom:5px solid #222;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-popup .fr-input-line input[type=text],.dark-theme.fr-popup .fr-input-line textarea{color:#fff;border-bottom:solid 1px #bdbdbd}.dark-theme.fr-popup .fr-input-line input[type=text]:focus,.dark-theme.fr-popup .fr-input-line textarea:focus{border-bottom:solid 2px #42a5f5}.dark-theme.fr-popup .fr-input-line input+span,.dark-theme.fr-popup .fr-input-line textarea+span{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.dark-theme.fr-popup .fr-input-line input.fr-not-empty:focus+span,.dark-theme.fr-popup .fr-input-line textarea.fr-not-empty:focus+span{color:#42a5f5}.dark-theme.fr-popup .fr-input-line input.fr-not-empty+span,.dark-theme.fr-popup .fr-input-line textarea.fr-not-empty+span{color:gray}.dark-theme.fr-popup .fr-buttons{padding:0 2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-bottom:0}.dark-theme.fr-popup .fr-layer{width:225px}@media (min-width:768px){.dark-theme.fr-popup .fr-layer{width:300px}}.dark-theme.fr-popup .fr-action-buttons button.fr-command{color:#42a5f5;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.dark-theme.fr-popup .fr-action-buttons button.fr-command:hover,.dark-theme.fr-popup .fr-action-buttons button.fr-command:focus{background:#3d3d3d;color:#42a5f5}.dark-theme.fr-popup .fr-action-buttons button.fr-command:active{background:#2e2e2e;color:#42a5f5}.dark-theme.fr-popup .fr-checkbox span{border:solid 1px #fff;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-transition:background .2s ease 0s,border-color .2s ease 0s;-moz-transition:background .2s ease 0s,border-color .2s ease 0s;-ms-transition:background .2s ease 0s,border-color .2s ease 0s;-o-transition:background .2s ease 0s,border-color .2s ease 0s}.dark-theme.fr-popup .fr-checkbox input:checked+span{background:#42a5f5;border-color:#42a5f5}.dark-theme.fr-popup .fr-checkbox input:focus+span{border-color:#42a5f5}.dark-theme.fr-popup.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #222;top:-9px;margin-left:-5px}.dark-theme.fr-popup.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.dark-theme.fr-toolbar{color:#fff;background:#353535;font-family:Arial,Helvetica,sans-serif;padding:0 2px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border:0;border-top:5px solid #222}.dark-theme.fr-toolbar.fr-inline.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #222;top:-9px;margin-left:-5px}.dark-theme.fr-toolbar.fr-inline.fr-desktop.fr-above{border-bottom:5px solid #222;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-toolbar.fr-inline.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.dark-theme.fr-toolbar.fr-top{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-toolbar.fr-bottom{border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme .fr-separator{background:#595959}.dark-theme .fr-separator.fr-vs{height:33px;width:1px;margin:2px}.dark-theme .fr-separator.fr-hs{height:1px;width:calc(100% - (2 * 2px));margin:0 2px}.dark-theme.fr-box .fr-counter{color:#aaa;background:#fff;border-top:solid 1px #595959;border-left:solid 1px #595959;border-radius:2px 0 0;-moz-border-radius:2px 0 0;-webkit-border-radius:2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme.fr-box.fr-rtl .fr-counter{border-right:solid 1px #595959;border-radius:0 2px 0 0;-moz-border-radius:0 2px 0 0;-webkit-border-radius:0 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme textarea.fr-code{background:#fff;color:#000}.dark-theme .fr-box.fr-code-view.fr-inline{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch{background:#fff;color:#fff;padding:11px 11.5px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch i{font-size:15px;width:15px}.dark-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch.fr-desktop:hover{background:#3d3d3d}.dark-theme.fr-popup .fr-colors-tabs{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-popup .fr-colors-tabs .fr-colors-tab{color:#fff}.dark-theme.fr-popup .fr-colors-tabs .fr-colors-tab:hover{color:#42a5f5}.dark-theme.fr-popup .fr-colors-tabs .fr-colors-tab[data-param1=background]::after{background:#42a5f5;-webkit-transition:transform .2s ease 0s;-moz-transition:transform .2s ease 0s;-ms-transition:transform .2s ease 0s;-o-transition:transform .2s ease 0s}.dark-theme.fr-popup .fr-colors-tabs .fr-colors-tab.fr-selected-tab{color:#42a5f5}.dark-theme.fr-popup .fr-color-set>span.fr-selected-color::after{color:#fff}.dark-theme.fr-popup .fr-color-set>span:hover,.dark-theme.fr-popup .fr-color-set>span.fr-selected-color{outline:1px solid #fff}.dark-theme .fr-file-upload-layer{border:dashed 2px gray}.dark-theme .fr-file-upload-layer:hover{background:#3d3d3d}.dark-theme .fr-file-upload-layer.fr-drop{background:#3d3d3d;border-color:#42a5f5}.dark-theme .fr-file-progress-bar-layer>div.fr-loader{background:#c6e4fc}.dark-theme .fr-file-progress-bar-layer>div.fr-loader span{background:#42a5f5;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.dark-theme .fr-image-resizer{border:solid 1px #42a5f5}.dark-theme .fr-image-resizer .fr-handler{background:#42a5f5;border:solid 1px #fff}.dark-theme .fr-image-resizer .fr-handler{width:12px;height:12px}.dark-theme .fr-image-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.dark-theme .fr-image-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.dark-theme .fr-image-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.dark-theme .fr-image-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.dark-theme .fr-image-resizer .fr-handler{width:10px;height:10px}.dark-theme .fr-image-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.dark-theme .fr-image-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.dark-theme .fr-image-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.dark-theme .fr-image-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.dark-theme .fr-image-upload-layer{border:dashed 2px gray}.dark-theme .fr-image-upload-layer:hover{background:#3d3d3d}.dark-theme .fr-image-upload-layer.fr-drop{background:#3d3d3d;border-color:#42a5f5}.dark-theme .fr-image-progress-bar-layer>div.fr-loader{background:#c6e4fc}.dark-theme .fr-image-progress-bar-layer>div.fr-loader span{background:#42a5f5;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.dark-theme .fr-line-breaker{border-top:1px solid #42a5f5}.dark-theme .fr-line-breaker a{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);height:24px;width:24px;top:-12px;background:#42a5f5;color:#000;-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s}.dark-theme .fr-line-breaker a:hover{background:#222;color:#fff}.dark-theme .fr-line-breaker a i{line-height:24px}.dark-theme table td.fr-selected-cell,.dark-theme table th.fr-selected-cell{border:1px double #42a5f5}.dark-theme .fr-table-resizer div{border-right:1px solid #42a5f5}.dark-theme.fr-popup .fr-table-size .fr-select-table-size>span>span{border:1px solid #ddd}.dark-theme.fr-popup .fr-table-size .fr-select-table-size>span:hover>span,.dark-theme.fr-popup .fr-table-size .fr-select-table-size>span.hover>span{background:rgba(66,165,245,.3);border:solid 1px #42a5f5}.dark-theme.fr-popup .fr-table-colors>span.fr-selected-color::after{color:#fff}.dark-theme.fr-popup .fr-table-colors>span:hover,.dark-theme.fr-popup .fr-table-colors>span.fr-selected-color{outline:1px solid #fff}.dark-theme .fr-box .fr-video-resizer{border:solid 1px #42a5f5}.dark-theme .fr-box .fr-video-resizer .fr-handler{background:#42a5f5;border:solid 1px #fff}.dark-theme .fr-box .fr-video-resizer .fr-handler{width:12px;height:12px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.dark-theme .fr-box .fr-video-resizer .fr-handler{width:10px;height:10px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.dark-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.dark-theme.fr-modal .fr-modal-wrapper{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;background:#fff;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);-moz-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);border:0;border-top:5px solid #222}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title{background:#353535;-webkit-transition:height .2s ease 0s;-moz-transition:height .2s ease 0s;-ms-transition:height .2s ease 0s;-o-transition:height .2s ease 0s;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-bottom:0}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line h4{color:#fff}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i{color:#fff}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-more{-webkit-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-moz-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-ms-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-o-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-close{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;color:#42a5f5;-webkit-transition:opacity .2s ease 0s,background .2s ease 0s;-moz-transition:opacity .2s ease 0s,background .2s ease 0s;-ms-transition:opacity .2s ease 0s,background .2s ease 0s;-o-transition:opacity .2s ease 0s,background .2s ease 0s}.dark-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#2e2e2e}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::after{-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;background:#000}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::before{color:#fff}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-empty{background:#aaa}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container img{-webkit-transition:opacity .2s ease 0s,filter .2s ease 0s;-moz-transition:opacity .2s ease 0s,filter .2s ease 0s;-ms-transition:opacity .2s ease 0s,filter .2s ease 0s;-o-transition:opacity .2s ease 0s,filter .2s ease 0s}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img,.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img{background:#b8312f;color:#fff}.dark-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{background:#353535;color:#42a5f5}.dark-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i:hover{background:#3d3d3d}.dark-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a:hover{background:#3d3d3d}.dark-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#2e2e2e}.dark-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img:hover{background:#bf4644;color:#fff}.dark-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img:hover{background:#3d3d3d}.dark-theme.fr-overlay{background:#000}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],7:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.gray-theme .fr-view table td,.gray-theme .fr-view table th{border:1px solid #ddd}.gray-theme .fr-view blockquote{border-left:solid 2px #5e35b1;color:#5e35b1}.gray-theme .fr-view blockquote blockquote{border-color:#00bcd4;color:#00bcd4}.gray-theme .fr-view blockquote blockquote blockquote{border-color:#43a047;color:#43a047}.gray-theme img.fr-dib{margin-top:5px;margin-bottom:5px}.gray-theme img.fr-dib.fr-fil{margin:5px auto 5px 0;left:5px}.gray-theme img.fr-dib.fr-fir{margin:5px 0 5px auto;right:5px}.gray-theme img.fr-dii{margin-top:5px;margin-bottom:5px}.gray-theme img.fr-dii.fr-fil{margin:5px 10px 5px 0;left:5px}.gray-theme img.fr-dii.fr-fir{margin:5px 0 5px 10px;right:5px}.gray-theme .fr-tooltip{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#222;color:#fff;font-size:11px;line-height:22px;font-family:Arial,Helvetica,sans-serif;-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s}.gray-theme .fr-element{color:#000}.gray-theme.fr-box.fr-basic .fr-element{padding:10px}.gray-theme .fr-wrapper .fr-placeholder{font-size:12px;color:#aaa}.gray-theme .fr-wrapper ::selection{background:#b5d6fd;color:#000}.gray-theme .fr-wrapper ::-moz-selection{background:#b5d6fd;color:#000}.gray-theme.fr-box.fr-basic .fr-wrapper{background:#fff;border:0;border-top:0}.gray-theme.fr-box.fr-basic .fr-wrapper .fr-placeholder{top:10px;left:10px}.gray-theme.fr-box.fr-basic.fr-top .fr-wrapper{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme.fr-box.fr-basic.fr-bottom .fr-wrapper{-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme.fr-toolbar .fr-command.fr-btn,.gray-theme.fr-popup .fr-command.fr-btn{color:#37474f;margin:0 2px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.gray-theme.fr-toolbar .fr-command.fr-btn i,.gray-theme.fr-popup .fr-command.fr-btn i{font-size:15px;width:15px;margin:11px 11.5px}.gray-theme.fr-toolbar .fr-command.fr-btn span,.gray-theme.fr-popup .fr-command.fr-btn span{font-size:14px;line-height:14px;margin:11px 11.5px;min-width:15px;height:15px}.gray-theme.fr-toolbar .fr-command.fr-btn img,.gray-theme.fr-popup .fr-command.fr-btn img{margin:11px 11.5px;width:15px}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-active,.gray-theme.fr-popup .fr-command.fr-btn.fr-active{color:#0097a7;background:0 0}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown i,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown i,.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown span,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown span,.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown img,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown img{margin-left:7.5px;margin-right:15.5px}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active{color:#37474f;background:#d6d6d6}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover,.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus{background:#d6d6d6!important;color:#37474f!important}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus::after,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus::after{border-top-color:#37474f!important}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown::after,.gray-theme.fr-popup .fr-command.fr-btn.fr-dropdown::after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #37474f;right:3.75px;top:16.5px}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-disabled,.gray-theme.fr-popup .fr-command.fr-btn.fr-disabled{color:#b7bdc0}.gray-theme.fr-toolbar .fr-command.fr-btn.fr-disabled::after,.gray-theme.fr-popup .fr-command.fr-btn.fr-disabled::after{border-top-color:#b7bdc0}.gray-theme.fr-toolbar.fr-disabled .fr-btn,.gray-theme.fr-popup.fr-disabled .fr-btn,.gray-theme.fr-toolbar.fr-disabled .fr-btn.fr-active,.gray-theme.fr-popup.fr-disabled .fr-btn.fr-active{color:#b7bdc0}.gray-theme.fr-toolbar.fr-disabled .fr-btn.fr-dropdown::after,.gray-theme.fr-popup.fr-disabled .fr-btn.fr-dropdown::after,.gray-theme.fr-toolbar.fr-disabled .fr-btn.fr-active.fr-dropdown::after,.gray-theme.fr-popup.fr-disabled .fr-btn.fr-active.fr-dropdown::after{border-top-color:#b7bdc0}.gray-theme.fr-desktop .fr-command:hover,.gray-theme.fr-desktop .fr-command:focus{color:#37474f;background:#e6e6e6}.gray-theme.fr-desktop .fr-command:hover::after,.gray-theme.fr-desktop .fr-command:focus::after{border-top-color:#37474f!important}.gray-theme.fr-desktop .fr-command.fr-selected{color:#37474f;background:#d6d6d6}.gray-theme.fr-desktop .fr-command.fr-active:hover,.gray-theme.fr-desktop .fr-command.fr-active:focus{color:#0097a7;background:#e6e6e6}.gray-theme.fr-desktop .fr-command.fr-active.fr-selected{color:#0097a7;background:#d6d6d6}.gray-theme.fr-desktop .fr-command.fr-disabled:hover,.gray-theme.fr-desktop .fr-command.fr-disabled:focus,.gray-theme.fr-desktop .fr-command.fr-disabled.fr-selected{background:0 0}.gray-theme.fr-toolbar.fr-mobile .fr-command.fr-blink,.gray-theme.fr-popup.fr-mobile .fr-command.fr-blink{background:0 0}.gray-theme .fr-command.fr-btn+.fr-dropdown-menu{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper{background:#f5f5f5;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-webkit-transition:max-height .2s ease 0s;-moz-transition:max-height .2s ease 0s;-ms-transition:max-height .2s ease 0s;-o-transition:max-height .2s ease 0s}.gray-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content{max-height:275px}.gray-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-active{background:#d6d6d6}.gray-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-disabled{color:#b7bdc0}.gray-theme .fr-command.fr-btn.fr-active+.fr-dropdown-menu .fr-dropdown-wrapper{max-height:275px}.gray-theme .fr-bottom>.fr-command.fr-btn+.fr-dropdown-menu{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme.fr-popup{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#37474f;background:#f5f5f5;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;border:0;border-top:5px solid #bdbdbd}.gray-theme.fr-popup.fr-above{border-bottom:5px solid #bdbdbd;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-popup .fr-input-line input[type=text],.gray-theme.fr-popup .fr-input-line textarea{color:#37474f;border-bottom:solid 1px #bdbdbd}.gray-theme.fr-popup .fr-input-line input[type=text]:focus,.gray-theme.fr-popup .fr-input-line textarea:focus{border-bottom:solid 2px #0097a7}.gray-theme.fr-popup .fr-input-line input+span,.gray-theme.fr-popup .fr-input-line textarea+span{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.gray-theme.fr-popup .fr-input-line input.fr-not-empty:focus+span,.gray-theme.fr-popup .fr-input-line textarea.fr-not-empty:focus+span{color:#0097a7}.gray-theme.fr-popup .fr-input-line input.fr-not-empty+span,.gray-theme.fr-popup .fr-input-line textarea.fr-not-empty+span{color:gray}.gray-theme.fr-popup .fr-buttons{padding:0 2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-bottom:0}.gray-theme.fr-popup .fr-layer{width:225px}@media (min-width:768px){.gray-theme.fr-popup .fr-layer{width:300px}}.gray-theme.fr-popup .fr-action-buttons button.fr-command{color:#0097a7;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.gray-theme.fr-popup .fr-action-buttons button.fr-command:hover,.gray-theme.fr-popup .fr-action-buttons button.fr-command:focus{background:#e6e6e6;color:#0097a7}.gray-theme.fr-popup .fr-action-buttons button.fr-command:active{background:#d6d6d6;color:#0097a7}.gray-theme.fr-popup .fr-checkbox span{border:solid 1px #37474f;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-transition:background .2s ease 0s,border-color .2s ease 0s;-moz-transition:background .2s ease 0s,border-color .2s ease 0s;-ms-transition:background .2s ease 0s,border-color .2s ease 0s;-o-transition:background .2s ease 0s,border-color .2s ease 0s}.gray-theme.fr-popup .fr-checkbox input:checked+span{background:#0097a7;border-color:#0097a7}.gray-theme.fr-popup .fr-checkbox input:focus+span{border-color:#0097a7}.gray-theme.fr-popup.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #bdbdbd;top:-9px;margin-left:-5px}.gray-theme.fr-popup.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.gray-theme.fr-toolbar{color:#37474f;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;padding:0 2px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border:0;border-top:5px solid #bdbdbd}.gray-theme.fr-toolbar.fr-inline.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #bdbdbd;top:-9px;margin-left:-5px}.gray-theme.fr-toolbar.fr-inline.fr-desktop.fr-above{border-bottom:5px solid #bdbdbd;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-toolbar.fr-inline.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.gray-theme.fr-toolbar.fr-top{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-toolbar.fr-bottom{border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme .fr-separator{background:#ebebeb}.gray-theme .fr-separator.fr-vs{height:33px;width:1px;margin:2px}.gray-theme .fr-separator.fr-hs{height:1px;width:calc(100% - (2 * 2px));margin:0 2px}.gray-theme.fr-box .fr-counter{color:#ccc;background:#fff;border-top:solid 1px #ebebeb;border-left:solid 1px #ebebeb;border-radius:2px 0 0;-moz-border-radius:2px 0 0;-webkit-border-radius:2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme.fr-box.fr-rtl .fr-counter{border-right:solid 1px #ebebeb;border-radius:0 2px 0 0;-moz-border-radius:0 2px 0 0;-webkit-border-radius:0 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme textarea.fr-code{background:#fff;color:#000}.gray-theme .fr-box.fr-code-view.fr-inline{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch{background:#fff;color:#37474f;padding:11px 11.5px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch i{font-size:15px;width:15px}.gray-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch.fr-desktop:hover{background:#e6e6e6}.gray-theme.fr-popup .fr-colors-tabs{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-popup .fr-colors-tabs .fr-colors-tab{color:#37474f}.gray-theme.fr-popup .fr-colors-tabs .fr-colors-tab:hover{color:#0097a7}.gray-theme.fr-popup .fr-colors-tabs .fr-colors-tab[data-param1=background]::after{background:#0097a7;-webkit-transition:transform .2s ease 0s;-moz-transition:transform .2s ease 0s;-ms-transition:transform .2s ease 0s;-o-transition:transform .2s ease 0s}.gray-theme.fr-popup .fr-colors-tabs .fr-colors-tab.fr-selected-tab{color:#0097a7}.gray-theme.fr-popup .fr-color-set>span.fr-selected-color::after{color:#fff}.gray-theme.fr-popup .fr-color-set>span:hover,.gray-theme.fr-popup .fr-color-set>span.fr-selected-color{outline:1px solid #37474f}.gray-theme .fr-file-upload-layer{border:dashed 2px #b7bdc0}.gray-theme .fr-file-upload-layer:hover{background:#e6e6e6}.gray-theme .fr-file-upload-layer.fr-drop{background:#e6e6e6;border-color:#0097a7}.gray-theme .fr-file-progress-bar-layer>div.fr-loader{background:#b3e0e5}.gray-theme .fr-file-progress-bar-layer>div.fr-loader span{background:#0097a7;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.gray-theme .fr-image-resizer{border:solid 1px #0097a7}.gray-theme .fr-image-resizer .fr-handler{background:#0097a7;border:solid 1px #fff}.gray-theme .fr-image-resizer .fr-handler{width:12px;height:12px}.gray-theme .fr-image-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.gray-theme .fr-image-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.gray-theme .fr-image-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.gray-theme .fr-image-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.gray-theme .fr-image-resizer .fr-handler{width:10px;height:10px}.gray-theme .fr-image-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.gray-theme .fr-image-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.gray-theme .fr-image-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.gray-theme .fr-image-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.gray-theme .fr-image-upload-layer{border:dashed 2px #b7bdc0}.gray-theme .fr-image-upload-layer:hover{background:#e6e6e6}.gray-theme .fr-image-upload-layer.fr-drop{background:#e6e6e6;border-color:#0097a7}.gray-theme .fr-image-progress-bar-layer>div.fr-loader{background:#b3e0e5}.gray-theme .fr-image-progress-bar-layer>div.fr-loader span{background:#0097a7;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.gray-theme .fr-line-breaker{border-top:1px solid #0097a7}.gray-theme .fr-line-breaker a{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);height:24px;width:24px;top:-12px;background:#0097a7;color:#fff;-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s}.gray-theme .fr-line-breaker a:hover{background:#bdbdbd;color:#000}.gray-theme .fr-line-breaker a i{line-height:24px}.gray-theme table td.fr-selected-cell,.gray-theme table th.fr-selected-cell{border:1px double #0097a7}.gray-theme .fr-table-resizer div{border-right:1px solid #0097a7}.gray-theme.fr-popup .fr-table-size .fr-select-table-size>span>span{border:1px solid #ddd}.gray-theme.fr-popup .fr-table-size .fr-select-table-size>span:hover>span,.gray-theme.fr-popup .fr-table-size .fr-select-table-size>span.hover>span{background:rgba(0,151,167,.3);border:solid 1px #0097a7}.gray-theme.fr-popup .fr-table-colors>span.fr-selected-color::after{color:#fff}.gray-theme.fr-popup .fr-table-colors>span:hover,.gray-theme.fr-popup .fr-table-colors>span.fr-selected-color{outline:1px solid #37474f}.gray-theme .fr-box .fr-video-resizer{border:solid 1px #0097a7}.gray-theme .fr-box .fr-video-resizer .fr-handler{background:#0097a7;border:solid 1px #fff}.gray-theme .fr-box .fr-video-resizer .fr-handler{width:12px;height:12px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.gray-theme .fr-box .fr-video-resizer .fr-handler{width:10px;height:10px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.gray-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.gray-theme.fr-modal .fr-modal-wrapper{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;background:#fff;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);-moz-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);border:0;border-top:5px solid #bdbdbd}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title{background:#f5f5f5;-webkit-transition:height .2s ease 0s;-moz-transition:height .2s ease 0s;-ms-transition:height .2s ease 0s;-o-transition:height .2s ease 0s;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-bottom:0}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line h4{color:#37474f}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i{color:#37474f}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-more{-webkit-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-moz-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-ms-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-o-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-close{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;color:#0097a7;-webkit-transition:opacity .2s ease 0s,background .2s ease 0s;-moz-transition:opacity .2s ease 0s,background .2s ease 0s;-ms-transition:opacity .2s ease 0s,background .2s ease 0s;-o-transition:opacity .2s ease 0s,background .2s ease 0s}.gray-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d6d6d6}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::after{-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;background:#000}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::before{color:#fff}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-empty{background:#ccc}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container img{-webkit-transition:opacity .2s ease 0s,filter .2s ease 0s;-moz-transition:opacity .2s ease 0s,filter .2s ease 0s;-ms-transition:opacity .2s ease 0s,filter .2s ease 0s;-o-transition:opacity .2s ease 0s,filter .2s ease 0s}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img,.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img{background:#b8312f;color:#fff}.gray-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{background:#f5f5f5;color:#0097a7}.gray-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i:hover{background:#e6e6e6}.gray-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a:hover{background:#e6e6e6}.gray-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d6d6d6}.gray-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img:hover{background:#bf4644;color:#fff}.gray-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img:hover{background:#e6e6e6}.gray-theme.fr-overlay{background:#000}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],8:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.red-theme .fr-view table td,.red-theme .fr-view table th{border:1px solid #ddd}.red-theme .fr-view blockquote{border-left:solid 2px #5e35b1;color:#5e35b1}.red-theme .fr-view blockquote blockquote{border-color:#00bcd4;color:#00bcd4}.red-theme .fr-view blockquote blockquote blockquote{border-color:#43a047;color:#43a047}.red-theme img.fr-dib{margin-top:5px;margin-bottom:5px}.red-theme img.fr-dib.fr-fil{margin:5px auto 5px 0;left:5px}.red-theme img.fr-dib.fr-fir{margin:5px 0 5px auto;right:5px}.red-theme img.fr-dii{margin-top:5px;margin-bottom:5px}.red-theme img.fr-dii.fr-fil{margin:5px 10px 5px 0;left:5px}.red-theme img.fr-dii.fr-fir{margin:5px 0 5px 10px;right:5px}.red-theme .fr-tooltip{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background:#222;color:#fff;font-size:11px;line-height:22px;font-family:Arial,Helvetica,sans-serif;-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s}.red-theme .fr-element{color:#000}.red-theme.fr-box.fr-basic .fr-element{padding:10px}.red-theme .fr-wrapper .fr-placeholder{font-size:12px;color:#aaa}.red-theme .fr-wrapper ::selection{background:#b5d6fd;color:#000}.red-theme .fr-wrapper ::-moz-selection{background:#b5d6fd;color:#000}.red-theme.fr-box.fr-basic .fr-wrapper{background:#fff;border:solid 1px #671b1a;border-top:0}.red-theme.fr-box.fr-basic .fr-wrapper .fr-placeholder{top:10px;left:10px}.red-theme.fr-box.fr-basic.fr-top .fr-wrapper{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme.fr-box.fr-basic.fr-bottom .fr-wrapper{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme.fr-toolbar .fr-command.fr-btn,.red-theme.fr-popup .fr-command.fr-btn{color:#fff;margin:0 2px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.red-theme.fr-toolbar .fr-command.fr-btn i,.red-theme.fr-popup .fr-command.fr-btn i{font-size:15px;width:15px;margin:11px 11.5px}.red-theme.fr-toolbar .fr-command.fr-btn span,.red-theme.fr-popup .fr-command.fr-btn span{font-size:14px;line-height:14px;margin:11px 11.5px;min-width:15px;height:15px}.red-theme.fr-toolbar .fr-command.fr-btn img,.red-theme.fr-popup .fr-command.fr-btn img{margin:11px 11.5px;width:15px}.red-theme.fr-toolbar .fr-command.fr-btn.fr-active,.red-theme.fr-popup .fr-command.fr-btn.fr-active{color:#ffca28;background:0 0}.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown i,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown i,.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown span,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown span,.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown img,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown img{margin-left:7.5px;margin-right:15.5px}.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active{color:#fff;background:#d48382}.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover,.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus{background:#d48382!important;color:#fff!important}.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus::after,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus::after{border-top-color:#fff!important}.red-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown::after,.red-theme.fr-popup .fr-command.fr-btn.fr-dropdown::after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #fff;right:3.75px;top:16.5px}.red-theme.fr-toolbar .fr-command.fr-btn.fr-disabled,.red-theme.fr-popup .fr-command.fr-btn.fr-disabled{color:#edc9c9}.red-theme.fr-toolbar .fr-command.fr-btn.fr-disabled::after,.red-theme.fr-popup .fr-command.fr-btn.fr-disabled::after{border-top-color:#edc9c9}.red-theme.fr-toolbar.fr-disabled .fr-btn,.red-theme.fr-popup.fr-disabled .fr-btn,.red-theme.fr-toolbar.fr-disabled .fr-btn.fr-active,.red-theme.fr-popup.fr-disabled .fr-btn.fr-active{color:#edc9c9}.red-theme.fr-toolbar.fr-disabled .fr-btn.fr-dropdown::after,.red-theme.fr-popup.fr-disabled .fr-btn.fr-dropdown::after,.red-theme.fr-toolbar.fr-disabled .fr-btn.fr-active.fr-dropdown::after,.red-theme.fr-popup.fr-disabled .fr-btn.fr-active.fr-dropdown::after{border-top-color:#edc9c9}.red-theme.fr-desktop .fr-command:hover,.red-theme.fr-desktop .fr-command:focus{color:#fff;background:#c65a59}.red-theme.fr-desktop .fr-command:hover::after,.red-theme.fr-desktop .fr-command:focus::after{border-top-color:#fff!important}.red-theme.fr-desktop .fr-command.fr-selected{color:#fff;background:#d48382}.red-theme.fr-desktop .fr-command.fr-active:hover,.red-theme.fr-desktop .fr-command.fr-active:focus{color:#ffca28;background:#c65a59}.red-theme.fr-desktop .fr-command.fr-active.fr-selected{color:#ffca28;background:#d48382}.red-theme.fr-desktop .fr-command.fr-disabled:hover,.red-theme.fr-desktop .fr-command.fr-disabled:focus,.red-theme.fr-desktop .fr-command.fr-disabled.fr-selected{background:0 0}.red-theme.fr-toolbar.fr-mobile .fr-command.fr-blink,.red-theme.fr-popup.fr-mobile .fr-command.fr-blink{background:0 0}.red-theme .fr-command.fr-btn+.fr-dropdown-menu{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper{background:#b8312f;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;-webkit-transition:max-height .2s ease 0s;-moz-transition:max-height .2s ease 0s;-ms-transition:max-height .2s ease 0s;-o-transition:max-height .2s ease 0s}.red-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content{max-height:275px}.red-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-active{background:#d48382}.red-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-disabled{color:#edc9c9}.red-theme .fr-command.fr-btn.fr-active+.fr-dropdown-menu .fr-dropdown-wrapper{max-height:275px}.red-theme .fr-bottom>.fr-command.fr-btn+.fr-dropdown-menu{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme.fr-popup{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;color:#fff;background:#b8312f;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;border:solid 1px #671b1a;border-top:5px solid #671b1a}.red-theme.fr-popup.fr-above{border-bottom:5px solid #671b1a;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-popup .fr-input-line input[type=text],.red-theme.fr-popup .fr-input-line textarea{color:#fff;border-bottom:solid 1px #bdbdbd}.red-theme.fr-popup .fr-input-line input[type=text]:focus,.red-theme.fr-popup .fr-input-line textarea:focus{border-bottom:solid 2px #ffca28}.red-theme.fr-popup .fr-input-line input+span,.red-theme.fr-popup .fr-input-line textarea+span{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.red-theme.fr-popup .fr-input-line input.fr-not-empty:focus+span,.red-theme.fr-popup .fr-input-line textarea.fr-not-empty:focus+span{color:#ffca28}.red-theme.fr-popup .fr-input-line input.fr-not-empty+span,.red-theme.fr-popup .fr-input-line textarea.fr-not-empty+span{color:gray}.red-theme.fr-popup .fr-buttons{padding:0 2px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border-bottom:solid 1px #671b1a}.red-theme.fr-popup .fr-layer{width:225px}@media (min-width:768px){.red-theme.fr-popup .fr-layer{width:300px}}.red-theme.fr-popup .fr-action-buttons button.fr-command{color:#ffca28;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.red-theme.fr-popup .fr-action-buttons button.fr-command:hover,.red-theme.fr-popup .fr-action-buttons button.fr-command:focus{background:#c65a59;color:#ffca28}.red-theme.fr-popup .fr-action-buttons button.fr-command:active{background:#d48382;color:#ffca28}.red-theme.fr-popup .fr-checkbox span{border:solid 1px #fff;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-transition:background .2s ease 0s,border-color .2s ease 0s;-moz-transition:background .2s ease 0s,border-color .2s ease 0s;-ms-transition:background .2s ease 0s,border-color .2s ease 0s;-o-transition:background .2s ease 0s,border-color .2s ease 0s}.red-theme.fr-popup .fr-checkbox input:checked+span{background:#ffca28;border-color:#ffca28}.red-theme.fr-popup .fr-checkbox input:focus+span{border-color:#ffca28}.red-theme.fr-popup.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #671b1a;top:-9px;margin-left:-5px}.red-theme.fr-popup.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.red-theme.fr-toolbar{color:#fff;background:#b8312f;font-family:Arial,Helvetica,sans-serif;padding:0 2px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:solid 1px #671b1a;border-top:5px solid #671b1a}.red-theme.fr-toolbar.fr-inline.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #671b1a;top:-9px;margin-left:-5px}.red-theme.fr-toolbar.fr-inline.fr-desktop.fr-above{border-bottom:5px solid #671b1a;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-toolbar.fr-inline.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.red-theme.fr-toolbar.fr-top{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-toolbar.fr-bottom{border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme .fr-separator{background:rgba(255,255,255,.3)}.red-theme .fr-separator.fr-vs{height:33px;width:1px;margin:2px}.red-theme .fr-separator.fr-hs{height:1px;width:calc(100% - (2 * 2px));margin:0 2px}.red-theme.fr-box .fr-counter{color:#ccc;background:#fff;border-top:solid 1px rgba(255,255,255,.3);border-left:solid 1px rgba(255,255,255,.3);border-radius:2px 0 0;-moz-border-radius:2px 0 0;-webkit-border-radius:2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme.fr-box.fr-rtl .fr-counter{border-right:solid 1px rgba(255,255,255,.3);border-radius:0 2px 0 0;-moz-border-radius:0 2px 0 0;-webkit-border-radius:0 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme textarea.fr-code{background:#fff;color:#000}.red-theme .fr-box.fr-code-view.fr-inline{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch{background:#fff;color:#fff;padding:11px 11.5px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch i{font-size:15px;width:15px}.red-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch.fr-desktop:hover{background:#c65a59}.red-theme.fr-popup .fr-colors-tabs{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-popup .fr-colors-tabs .fr-colors-tab{color:#fff}.red-theme.fr-popup .fr-colors-tabs .fr-colors-tab:hover{color:#ffca28}.red-theme.fr-popup .fr-colors-tabs .fr-colors-tab[data-param1=background]::after{background:#ffca28;-webkit-transition:transform .2s ease 0s;-moz-transition:transform .2s ease 0s;-ms-transition:transform .2s ease 0s;-o-transition:transform .2s ease 0s}.red-theme.fr-popup .fr-colors-tabs .fr-colors-tab.fr-selected-tab{color:#ffca28}.red-theme.fr-popup .fr-color-set>span.fr-selected-color::after{color:#fff}.red-theme.fr-popup .fr-color-set>span:hover,.red-theme.fr-popup .fr-color-set>span.fr-selected-color{outline:1px solid #fff}.red-theme .fr-file-upload-layer{border:dashed 2px #edc9c9}.red-theme .fr-file-upload-layer:hover{background:#c65a59}.red-theme .fr-file-upload-layer.fr-drop{background:#c65a59;border-color:#ffca28}.red-theme .fr-file-progress-bar-layer>div.fr-loader{background:#ffefbf}.red-theme .fr-file-progress-bar-layer>div.fr-loader span{background:#ffca28;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.red-theme .fr-image-resizer{border:solid 1px #ffca28}.red-theme .fr-image-resizer .fr-handler{background:#ffca28;border:solid 1px #fff}.red-theme .fr-image-resizer .fr-handler{width:12px;height:12px}.red-theme .fr-image-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.red-theme .fr-image-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.red-theme .fr-image-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.red-theme .fr-image-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.red-theme .fr-image-resizer .fr-handler{width:10px;height:10px}.red-theme .fr-image-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.red-theme .fr-image-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.red-theme .fr-image-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.red-theme .fr-image-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.red-theme .fr-image-upload-layer{border:dashed 2px #edc9c9}.red-theme .fr-image-upload-layer:hover{background:#c65a59}.red-theme .fr-image-upload-layer.fr-drop{background:#c65a59;border-color:#ffca28}.red-theme .fr-image-progress-bar-layer>div.fr-loader{background:#ffefbf}.red-theme .fr-image-progress-bar-layer>div.fr-loader span{background:#ffca28;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.red-theme .fr-line-breaker{border-top:1px solid #ffca28}.red-theme .fr-line-breaker a{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;height:24px;width:24px;top:-12px;background:#ffca28;color:#000;-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s}.red-theme .fr-line-breaker a:hover{background:#671b1a;color:#fff}.red-theme .fr-line-breaker a i{line-height:24px}.red-theme table td.fr-selected-cell,.red-theme table th.fr-selected-cell{border:1px double #ffca28}.red-theme .fr-table-resizer div{border-right:1px solid #ffca28}.red-theme.fr-popup .fr-table-size .fr-select-table-size>span>span{border:1px solid #ddd}.red-theme.fr-popup .fr-table-size .fr-select-table-size>span:hover>span,.red-theme.fr-popup .fr-table-size .fr-select-table-size>span.hover>span{background:rgba(255,202,40,.3);border:solid 1px #ffca28}.red-theme.fr-popup .fr-table-colors>span.fr-selected-color::after{color:#fff}.red-theme.fr-popup .fr-table-colors>span:hover,.red-theme.fr-popup .fr-table-colors>span.fr-selected-color{outline:1px solid #fff}.red-theme .fr-box .fr-video-resizer{border:solid 1px #ffca28}.red-theme .fr-box .fr-video-resizer .fr-handler{background:#ffca28;border:solid 1px #fff}.red-theme .fr-box .fr-video-resizer .fr-handler{width:12px;height:12px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.red-theme .fr-box .fr-video-resizer .fr-handler{width:10px;height:10px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.red-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.red-theme.fr-modal .fr-modal-wrapper{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;background:#fff;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:solid 1px #671b1a;border-top:5px solid #671b1a}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title{background:#b8312f;-webkit-transition:height .2s ease 0s;-moz-transition:height .2s ease 0s;-ms-transition:height .2s ease 0s;-o-transition:height .2s ease 0s;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border-bottom:solid 1px #671b1a}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line h4{color:#fff}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i{color:#fff}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-more{-webkit-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-moz-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-ms-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-o-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-close{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;color:#ffca28;-webkit-transition:opacity .2s ease 0s,background .2s ease 0s;-moz-transition:opacity .2s ease 0s,background .2s ease 0s;-ms-transition:opacity .2s ease 0s,background .2s ease 0s;-o-transition:opacity .2s ease 0s,background .2s ease 0s}.red-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d48382}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::after{-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;background:#000}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::before{color:#fff}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-empty{background:#ccc}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container img{-webkit-transition:opacity .2s ease 0s,filter .2s ease 0s;-moz-transition:opacity .2s ease 0s,filter .2s ease 0s;-ms-transition:opacity .2s ease 0s,filter .2s ease 0s;-o-transition:opacity .2s ease 0s,filter .2s ease 0s}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img,.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img{background:#b8312f;color:#fff}.red-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{background:#b8312f;color:#ffca28}.red-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i:hover{background:#c65a59}.red-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a:hover{background:#c65a59}.red-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d48382}.red-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img:hover{background:#bf4644;color:#fff}.red-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img:hover{background:#c65a59}.red-theme.fr-overlay{background:#000}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],9:[function(require,module,exports){
var css = "/*!\n * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)\n * License https://froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */\n\n.clearfix::after{clear:both;display:block;content:\"\"}.royal-theme .fr-view table td,.royal-theme .fr-view table th{border:1px solid #ddd}.royal-theme .fr-view blockquote{border-left:solid 2px #5e35b1;color:#5e35b1}.royal-theme .fr-view blockquote blockquote{border-color:#00bcd4;color:#00bcd4}.royal-theme .fr-view blockquote blockquote blockquote{border-color:#43a047;color:#43a047}.royal-theme img.fr-dib{margin-top:5px;margin-bottom:5px}.royal-theme img.fr-dib.fr-fil{margin:5px auto 5px 0;left:5px}.royal-theme img.fr-dib.fr-fir{margin:5px 0 5px auto;right:5px}.royal-theme img.fr-dii{margin-top:5px;margin-bottom:5px}.royal-theme img.fr-dii.fr-fil{margin:5px 10px 5px 0;left:5px}.royal-theme img.fr-dii.fr-fir{margin:5px 0 5px 10px;right:5px}.royal-theme .fr-tooltip{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#222;color:#fff;font-size:11px;line-height:22px;font-family:Arial,Helvetica,sans-serif;-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s}.royal-theme .fr-element{color:#000}.royal-theme.fr-box.fr-basic .fr-element{padding:10px}.royal-theme .fr-wrapper .fr-placeholder{font-size:12px;color:#aaa}.royal-theme .fr-wrapper ::selection{background:#b5d6fd;color:#000}.royal-theme .fr-wrapper ::-moz-selection{background:#b5d6fd;color:#000}.royal-theme.fr-box.fr-basic .fr-wrapper{background:#fff;border:0;border-top:0}.royal-theme.fr-box.fr-basic .fr-wrapper .fr-placeholder{top:10px;left:10px}.royal-theme.fr-box.fr-basic.fr-top .fr-wrapper{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme.fr-box.fr-basic.fr-bottom .fr-wrapper{-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme.fr-toolbar .fr-command.fr-btn,.royal-theme.fr-popup .fr-command.fr-btn{color:#553982;margin:0 2px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.royal-theme.fr-toolbar .fr-command.fr-btn i,.royal-theme.fr-popup .fr-command.fr-btn i{font-size:15px;width:15px;margin:11px 11.5px}.royal-theme.fr-toolbar .fr-command.fr-btn span,.royal-theme.fr-popup .fr-command.fr-btn span{font-size:14px;line-height:14px;margin:11px 11.5px;min-width:15px;height:15px}.royal-theme.fr-toolbar .fr-command.fr-btn img,.royal-theme.fr-popup .fr-command.fr-btn img{margin:11px 11.5px;width:15px}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-active,.royal-theme.fr-popup .fr-command.fr-btn.fr-active{color:#fff;background:#9365b8}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown i,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown i,.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown span,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown span,.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown img,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown img{margin-left:7.5px;margin-right:15.5px}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active{color:#553982;background:#d6d6d6}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover,.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus{background:#d6d6d6!important;color:#553982!important}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:hover::after,.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown.fr-active:focus::after,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown.fr-active:focus::after{border-top-color:#553982!important}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-dropdown::after,.royal-theme.fr-popup .fr-command.fr-btn.fr-dropdown::after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #553982;right:3.75px;top:16.5px}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-disabled,.royal-theme.fr-popup .fr-command.fr-btn.fr-disabled{color:#b7bdc0}.royal-theme.fr-toolbar .fr-command.fr-btn.fr-disabled::after,.royal-theme.fr-popup .fr-command.fr-btn.fr-disabled::after{border-top-color:#b7bdc0}.royal-theme.fr-toolbar.fr-disabled .fr-btn,.royal-theme.fr-popup.fr-disabled .fr-btn,.royal-theme.fr-toolbar.fr-disabled .fr-btn.fr-active,.royal-theme.fr-popup.fr-disabled .fr-btn.fr-active{color:#b7bdc0}.royal-theme.fr-toolbar.fr-disabled .fr-btn.fr-dropdown::after,.royal-theme.fr-popup.fr-disabled .fr-btn.fr-dropdown::after,.royal-theme.fr-toolbar.fr-disabled .fr-btn.fr-active.fr-dropdown::after,.royal-theme.fr-popup.fr-disabled .fr-btn.fr-active.fr-dropdown::after{border-top-color:#b7bdc0}.royal-theme.fr-desktop .fr-command:hover,.royal-theme.fr-desktop .fr-command:focus{color:#553982;background:#e6e6e6}.royal-theme.fr-desktop .fr-command:hover::after,.royal-theme.fr-desktop .fr-command:focus::after{border-top-color:#553982!important}.royal-theme.fr-desktop .fr-command.fr-selected{color:#553982;background:#d6d6d6}.royal-theme.fr-desktop .fr-command.fr-active:hover,.royal-theme.fr-desktop .fr-command.fr-active:focus{color:#553982;background:#e6e6e6}.royal-theme.fr-desktop .fr-command.fr-active.fr-selected{color:#553982;background:#d6d6d6}.royal-theme.fr-desktop .fr-command.fr-disabled:hover,.royal-theme.fr-desktop .fr-command.fr-disabled:focus,.royal-theme.fr-desktop .fr-command.fr-disabled.fr-selected{background:0 0}.royal-theme.fr-toolbar.fr-mobile .fr-command.fr-blink,.royal-theme.fr-popup.fr-mobile .fr-command.fr-blink{background:#9365b8}.royal-theme .fr-command.fr-btn+.fr-dropdown-menu{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper{background:#fff;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-webkit-transition:max-height .2s ease 0s;-moz-transition:max-height .2s ease 0s;-ms-transition:max-height .2s ease 0s;-o-transition:max-height .2s ease 0s}.royal-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content{max-height:275px}.royal-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-active{background:#d6d6d6}.royal-theme .fr-command.fr-btn+.fr-dropdown-menu .fr-dropdown-wrapper .fr-dropdown-content ul.fr-dropdown-list li a.fr-disabled{color:#b7bdc0}.royal-theme .fr-command.fr-btn.fr-active+.fr-dropdown-menu .fr-dropdown-wrapper{max-height:275px}.royal-theme .fr-bottom>.fr-command.fr-btn+.fr-dropdown-menu{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme.fr-popup{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);color:#553982;background:#fff;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:Arial,Helvetica,sans-serif;border:0;border-top:5px solid #553982}.royal-theme.fr-popup.fr-above{border-bottom:5px solid #553982;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-popup .fr-input-line input[type=text],.royal-theme.fr-popup .fr-input-line textarea{color:#553982;border-bottom:solid 1px #bdbdbd}.royal-theme.fr-popup .fr-input-line input[type=text]:focus,.royal-theme.fr-popup .fr-input-line textarea:focus{border-bottom:solid 2px #553982}.royal-theme.fr-popup .fr-input-line input+span,.royal-theme.fr-popup .fr-input-line textarea+span{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.royal-theme.fr-popup .fr-input-line input.fr-not-empty:focus+span,.royal-theme.fr-popup .fr-input-line textarea.fr-not-empty:focus+span{color:#553982}.royal-theme.fr-popup .fr-input-line input.fr-not-empty+span,.royal-theme.fr-popup .fr-input-line textarea.fr-not-empty+span{color:gray}.royal-theme.fr-popup .fr-buttons{padding:0 2px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-bottom:0}.royal-theme.fr-popup .fr-layer{width:225px}@media (min-width:768px){.royal-theme.fr-popup .fr-layer{width:300px}}.royal-theme.fr-popup .fr-action-buttons button.fr-command{color:#553982;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s}.royal-theme.fr-popup .fr-action-buttons button.fr-command:hover,.royal-theme.fr-popup .fr-action-buttons button.fr-command:focus{background:#e6e6e6;color:#553982}.royal-theme.fr-popup .fr-action-buttons button.fr-command:active{background:#d6d6d6;color:#553982}.royal-theme.fr-popup .fr-checkbox span{border:solid 1px #553982;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-transition:background .2s ease 0s,border-color .2s ease 0s;-moz-transition:background .2s ease 0s,border-color .2s ease 0s;-ms-transition:background .2s ease 0s,border-color .2s ease 0s;-o-transition:background .2s ease 0s,border-color .2s ease 0s}.royal-theme.fr-popup .fr-checkbox input:checked+span{background:#553982;border-color:#553982}.royal-theme.fr-popup .fr-checkbox input:focus+span{border-color:#553982}.royal-theme.fr-popup.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #553982;top:-9px;margin-left:-5px}.royal-theme.fr-popup.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.royal-theme.fr-toolbar{color:#553982;background:#fff;font-family:Arial,Helvetica,sans-serif;padding:0 2px;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border:0;border-top:5px solid #553982}.royal-theme.fr-toolbar.fr-inline.fr-desktop .fr-arrow{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #553982;top:-9px;margin-left:-5px}.royal-theme.fr-toolbar.fr-inline.fr-desktop.fr-above{border-bottom:5px solid #553982;-webkit-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 -1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-toolbar.fr-inline.fr-desktop.fr-above .fr-arrow{bottom:-9px;border-top-width:5px}.royal-theme.fr-toolbar.fr-top{border-radius:2px 2px 0 0;-moz-border-radius:2px 2px 0 0;-webkit-border-radius:2px 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-toolbar.fr-bottom{border-radius:0 0 2px 2px;-moz-border-radius:0 0 2px 2px;-webkit-border-radius:0 0 2px 2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme .fr-separator{background:#ebebeb}.royal-theme .fr-separator.fr-vs{height:33px;width:1px;margin:2px}.royal-theme .fr-separator.fr-hs{height:1px;width:calc(100% - (2 * 2px));margin:0 2px}.royal-theme.fr-box .fr-counter{color:#ccc;background:#fff;border-top:solid 1px #ebebeb;border-left:solid 1px #ebebeb;border-radius:2px 0 0;-moz-border-radius:2px 0 0;-webkit-border-radius:2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme.fr-box.fr-rtl .fr-counter{border-right:solid 1px #ebebeb;border-radius:0 2px 0 0;-moz-border-radius:0 2px 0 0;-webkit-border-radius:0 2px 0 0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme textarea.fr-code{background:#fff;color:#000}.royal-theme .fr-box.fr-code-view.fr-inline{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch{background:#fff;color:#553982;padding:11px 11.5px;-webkit-transition:background .2s ease 0s;-moz-transition:background .2s ease 0s;-ms-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch i{font-size:15px;width:15px}.royal-theme.fr-box.fr-inline .fr-command.fr-btn.html-switch.fr-desktop:hover{background:#e6e6e6}.royal-theme.fr-popup .fr-colors-tabs{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-popup .fr-colors-tabs .fr-colors-tab{color:#553982}.royal-theme.fr-popup .fr-colors-tabs .fr-colors-tab:hover{color:#553982}.royal-theme.fr-popup .fr-colors-tabs .fr-colors-tab[data-param1=background]::after{background:#553982;-webkit-transition:transform .2s ease 0s;-moz-transition:transform .2s ease 0s;-ms-transition:transform .2s ease 0s;-o-transition:transform .2s ease 0s}.royal-theme.fr-popup .fr-colors-tabs .fr-colors-tab.fr-selected-tab{color:#553982}.royal-theme.fr-popup .fr-color-set>span.fr-selected-color::after{color:#fff}.royal-theme.fr-popup .fr-color-set>span:hover,.royal-theme.fr-popup .fr-color-set>span.fr-selected-color{outline:1px solid #553982}.royal-theme .fr-file-upload-layer{border:dashed 2px #b7bdc0}.royal-theme .fr-file-upload-layer:hover{background:#e6e6e6}.royal-theme .fr-file-upload-layer.fr-drop{background:#e6e6e6;border-color:#553982}.royal-theme .fr-file-progress-bar-layer>div.fr-loader{background:#ccc4da}.royal-theme .fr-file-progress-bar-layer>div.fr-loader span{background:#553982;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.royal-theme .fr-image-resizer{border:solid 1px #553982}.royal-theme .fr-image-resizer .fr-handler{background:#553982;border:solid 1px #fff}.royal-theme .fr-image-resizer .fr-handler{width:12px;height:12px}.royal-theme .fr-image-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.royal-theme .fr-image-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.royal-theme .fr-image-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.royal-theme .fr-image-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.royal-theme .fr-image-resizer .fr-handler{width:10px;height:10px}.royal-theme .fr-image-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.royal-theme .fr-image-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.royal-theme .fr-image-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.royal-theme .fr-image-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.royal-theme .fr-image-upload-layer{border:dashed 2px #b7bdc0}.royal-theme .fr-image-upload-layer:hover{background:#e6e6e6}.royal-theme .fr-image-upload-layer.fr-drop{background:#e6e6e6;border-color:#553982}.royal-theme .fr-image-progress-bar-layer>div.fr-loader{background:#ccc4da}.royal-theme .fr-image-progress-bar-layer>div.fr-loader span{background:#553982;-webkit-transition:width .2s ease 0s;-moz-transition:width .2s ease 0s;-ms-transition:width .2s ease 0s;-o-transition:width .2s ease 0s}.royal-theme .fr-line-breaker{border-top:1px solid #553982}.royal-theme .fr-line-breaker a{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);height:24px;width:24px;top:-12px;background:#553982;color:#fff;-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s}.royal-theme .fr-line-breaker a:hover{background:#553982;color:#fff}.royal-theme .fr-line-breaker a i{line-height:24px}.royal-theme table td.fr-selected-cell,.royal-theme table th.fr-selected-cell{border:1px double #553982}.royal-theme .fr-table-resizer div{border-right:1px solid #553982}.royal-theme.fr-popup .fr-table-size .fr-select-table-size>span>span{border:1px solid #ddd}.royal-theme.fr-popup .fr-table-size .fr-select-table-size>span:hover>span,.royal-theme.fr-popup .fr-table-size .fr-select-table-size>span.hover>span{background:rgba(85,57,130,.3);border:solid 1px #553982}.royal-theme.fr-popup .fr-table-colors>span.fr-selected-color::after{color:#fff}.royal-theme.fr-popup .fr-table-colors>span:hover,.royal-theme.fr-popup .fr-table-colors>span.fr-selected-color{outline:1px solid #553982}.royal-theme .fr-box .fr-video-resizer{border:solid 1px #553982}.royal-theme .fr-box .fr-video-resizer .fr-handler{background:#553982;border:solid 1px #fff}.royal-theme .fr-box .fr-video-resizer .fr-handler{width:12px;height:12px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-6px;top:-6px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-6px;top:-6px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-6px;bottom:-6px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-6px;bottom:-6px}@media (min-width:1200px){.royal-theme .fr-box .fr-video-resizer .fr-handler{width:10px;height:10px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hnw{left:-5px;top:-5px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hne{right:-5px;top:-5px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hsw{left:-5px;bottom:-5px}.royal-theme .fr-box .fr-video-resizer .fr-handler.fr-hse{right:-5px;bottom:-5px}}.royal-theme.fr-modal .fr-modal-wrapper{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;background:#fff;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);-moz-box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);border:0;border-top:5px solid #553982}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title{background:#fff;-webkit-transition:height .2s ease 0s;-moz-transition:height .2s ease 0s;-ms-transition:height .2s ease 0s;-o-transition:height .2s ease 0s;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);-moz-box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);border-bottom:0}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line h4{color:#553982}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i{color:#553982}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-more{-webkit-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-moz-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-ms-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s;-o-transition:padding .2s ease 0s,width .2s ease 0s,opacity .2s ease 0s}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i.fr-modal-close{-webkit-transition:color .2s ease 0s;-moz-transition:color .2s ease 0s;-ms-transition:color .2s ease 0s;-o-transition:color .2s ease 0s}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;color:#553982;-webkit-transition:opacity .2s ease 0s,background .2s ease 0s;-moz-transition:opacity .2s ease 0s,background .2s ease 0s;-ms-transition:opacity .2s ease 0s,background .2s ease 0s;-o-transition:opacity .2s ease 0s,background .2s ease 0s}.royal-theme.fr-modal .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d6d6d6}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::after{-webkit-transition:opacity .2s ease 0s;-moz-transition:opacity .2s ease 0s;-ms-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;background:#000}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-image-deleting::before{color:#fff}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container.fr-empty{background:#ccc}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container img{-webkit-transition:opacity .2s ease 0s,filter .2s ease 0s;-moz-transition:opacity .2s ease 0s,filter .2s ease 0s;-ms-transition:opacity .2s ease 0s,filter .2s ease 0s;-o-transition:opacity .2s ease 0s,filter .2s ease 0s}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img,.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{-webkit-transition:background .2s ease 0s,color .2s ease 0s;-moz-transition:background .2s ease 0s,color .2s ease 0s;-ms-transition:background .2s ease 0s,color .2s ease 0s;-o-transition:background .2s ease 0s,color .2s ease 0s;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);-moz-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img{background:#b8312f;color:#fff}.royal-theme.fr-modal .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img{background:#fff;color:#553982}.royal-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-title-line i:hover{background:#e6e6e6}.royal-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a:hover{background:#e6e6e6}.royal-theme.fr-modal.fr-desktop .fr-modal-wrapper .fr-modal-title .fr-modal-tags a.fr-selected-tag{background:#d6d6d6}.royal-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-delete-img:hover{background:#bf4644;color:#fff}.royal-theme.fr-modal.fr-desktop .fr-modal-wrapper div.fr-scroller div.fr-image-list div.fr-image-container .fr-insert-img:hover{background:#e6e6e6}.royal-theme.fr-overlay{background:#000}"; (require("./../../../node_modules/cssify"))(css); module.exports = css;
},{"./../../../node_modules/cssify":16}],10:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";var b=function(c,d){this.opts=a.extend({},b.DEFAULTS,a(c).data(),"object"==typeof d&&d),this.$original_element=a(c),this.$original_element.data("froala.editor",this),this.id=++a.FroalaEditor.ID,this.original_document=c.ownerDocument,this.original_window="defaultView"in this.original_document?this.original_document.defaultView:this.original_document.parentWindow;var e=a(this.original_window).scrollTop();this.$original_element.on("froala.doInit",a.proxy(function(){this.$original_element.off("froala.doInit"),this.document=this.$el.get(0).ownerDocument,this.window="defaultView"in this.document?this.document.defaultView:this.document.parentWindow,this.$document=a(this.document),this.$window=a(this.window),this.opts.initOnClick?(this.load(a.FroalaEditor.MODULES),this.$el.on("mousedown.init dragenter.init focus.init",a.proxy(function(b){if(1===b.which){this.$el.off("mousedown.init dragenter.init focus.init"),this.load(a.FroalaEditor.MODULES),this.load(a.FroalaEditor.PLUGINS);var c=b.originalEvent&&b.originalEvent.originalTarget;c&&"IMG"==c.tagName&&a(c).trigger("mousedown"),"undefined"==typeof this.ul&&this.destroy(),this.events.trigger("initialized")}},this))):(this.load(a.FroalaEditor.MODULES),this.load(a.FroalaEditor.PLUGINS),a(this.original_window).scrollTop(e),"undefined"==typeof this.ul&&this.destroy(),this.events.trigger("initialized"))},this)),this._init()};b.DEFAULTS={initOnClick:!1},b.MODULES={},b.PLUGINS={},b.VERSION="2.0.5",b.INSTANCES=[],b.ID=0,b.prototype._init=function(){var b=this.$original_element.prop("tagName"),c=a.proxy(function(){this._original_html=this._original_html||this.$original_element.html(),this.$box=this.$box||this.$original_element,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=a('<iframe src="about:blank" frameBorder="0">'),this.$wp=a("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document,this.$original_element.trigger("froala.doInit")):(this.$el=a("<div></div>"),this.$wp=a("<div></div>").append(this.$el),this.$box.html(this.$wp),this.$original_element.trigger("froala.doInit"))},this),d=a.proxy(function(){this.$box=a("<div>"),this.$original_element.before(this.$box).hide(),this._original_html=this.$original_element.val(),this.$original_element.parents("form").on("submit."+this.id,a.proxy(function(){this.events.trigger("form.submit")},this)),c()},this),e=a.proxy(function(){this.$el=this.$original_element,this.$el.attr("contenteditable",!0).css("outline","none"),this.opts.multiLine=!1,this.$original_element.trigger("froala.doInit")},this),f=a.proxy(function(){this.$el=this.$original_element,this.$original_element.trigger("froala.doInit")},this),g=a.proxy(function(){this.$el=this.$original_element,this.$original_element.trigger("froala.doInit")},this);this.opts.editInPopup?g():"TEXTAREA"==b?d():"A"==b?e():"IMG"==b?f():"BUTTON"==b?(this.opts.editInPopup=!0,g()):("DIV"!==b&&(this.opts.enter=a.FroalaEditor.ENTER_BR),c())},b.prototype.load=function(a){for(var b in a)if(!this[b]&&(this[b]=new a[b](this),this[b]._init&&(this[b]._init(),this.opts.initOnClick&&"core"==b)))return!1},b.prototype.destroy=function(){this.events.trigger("destroy"),this.$original_element.parents("form").off("submit."+this.id),this.$original_element.removeData("froala.editor")},a.fn.froalaEditor=function(c){for(var d=[],e=0;e<arguments.length;e++)d.push(arguments[e]);if("string"==typeof c){var f=[];return this.each(function(){var b=a(this),e=b.data("froala.editor");if(e){var g,h;if(c.indexOf(".")>0&&e[c.split(".")[0]]?(e[c.split(".")[0]]&&(g=e[c.split(".")[0]]),h=c.split(".")[1]):(g=e,h=c.split(".")[0]),!g[h])return a.error("Method "+c+" does not exist in Froala Editor.");var i=g[h].apply(e,d.slice(1));void 0===i?f.push(this):0===f.length&&f.push(i)}}),1==f.length?f[0]:f}return"object"!=typeof c&&c?void 0:this.each(function(){var d=a(this).data("froala.editor");d||new b(this,c)})},a.fn.froalaEditor.Constructor=b,a.FroalaEditor=b,a.FroalaEditor.MODULES.node=function(b){function c(b){return b&&"IFRAME"!=b.tagName?a(b).contents():[]}function d(b){return b?b.nodeType!=Node.ELEMENT_NODE?!1:a.FroalaEditor.BLOCK_TAGS.indexOf(b.tagName.toLowerCase())>=0:!1}function e(b,e){if(a(b).find("table").length>0)return!1;var f=c(b);1==f.length&&d(f[0])&&(f=c(f[0]));for(var g=!1,h=0;h<f.length;h++){var i=f[h];if(!e||!a(i).hasClass("fr-marker")){if(!("BR"==i.tagName||i.textContent&&0==i.textContent.replace(/\u200B/gi,"").length)||1==g)return!1;"BR"==i.tagName&&(g=!0)}}return!0}function f(c){for(;c&&c.parentNode!==b.$el.get(0)&&(!c.parentNode||!a(c.parentNode).hasClass("fr-inner"));)if(c=c.parentNode,d(c))return c;return null}function g(c,e,f){if("undefined"==typeof e&&(e=[]),"undefined"==typeof f&&(f=!0),e.push(b.$el.get(0)),e.indexOf(c.parentNode)>=0||c.parentNode&&a(c.parentNode).hasClass("fr-inner")||c.parentNode&&a.FroalaEditor.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName)>=0&&f)return null;for(;e.indexOf(c.parentNode)<0&&c.parentNode&&!a(c.parentNode).hasClass("fr-inner")&&(a.FroalaEditor.SIMPLE_ENTER_TAGS.indexOf(c.parentNode.tagName)<0||!f)&&(!d(c)||!d(c.parentNode)||!f);)c=c.parentNode;return c}function h(a){var b={},c=a.attributes;if(c)for(var d=0;d<c.length;d++){var e=c[d];b[e.nodeName]=e.value}return b}function i(a){for(var b="",c=h(a),d=Object.keys(c).sort(),e=0;e<d.length;e++){var f=d[e],g=c[f];b+=g.indexOf('"')<0?" "+f+'="'+g+'"':" "+f+"='"+g+"'"}return b}function j(a){for(var b=a.attributes,c=0;c<b.length;c++){var d=b[c];a.removeAttribute(d.nodeName)}}function k(a){return"<"+a.tagName.toLowerCase()+i(a)+">"}function l(a){return"</"+a.tagName.toLowerCase()+">"}function m(b,c){"undefined"==typeof c&&(c=!0);for(var d=b.previousSibling;d&&c&&a(d).hasClass("fr-marker");)d=d.previousSibling;return d?d.nodeType==Node.TEXT_NODE&&""===d.textContent?m(d):!1:!0}function n(b){return b&&a.FroalaEditor.VOID_ELEMENTS.indexOf((b.tagName||"").toLowerCase())>=0}function o(a){return a?["UL","OL"].indexOf(a.tagName)>=0:!1}function p(a){return a===b.$el.get(0)}function q(a){return a===b.document.activeElement&&(!b.document.hasFocus||b.document.hasFocus())&&!!(p(a)||a.type||a.href||~a.tabIndex)}function r(a){return!a.getAttribute||"false"!=a.getAttribute("contenteditable")}return{isBlock:d,isEmpty:e,blockParent:f,deepestParent:g,rawAttributes:h,attributes:i,clearAttributes:j,openTagString:k,closeTagString:l,isFirstSibling:m,isList:o,isElement:p,contents:c,isVoid:n,hasFocus:q,isEditable:r}},a.extend(a.FroalaEditor.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","fr-.*","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowComments:!0,fullPage:!1}),a.FroalaEditor.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},a.FroalaEditor.MODULES.clean=function(b){function c(a){if(a.className&&a.className.indexOf("fr-marker")>=0)return!1;var d,e=b.node.contents(a),f=[];for(d=0;d<e.length;d++)e[d].className&&e[d].className.indexOf("fr-marker")>=0&&f.push(e[d]);if(e.length-f.length==1&&0===a.textContent.replace(/\u200b/g,"").length){for(d=0;d<f.length;d++)a.parentNode.insertBefore(f[d].cloneNode(!0),a);return a.parentNode.removeChild(a),!1}for(d=0;d<e.length;d++)e[d].nodeType==Node.ELEMENT_NODE?e[d].textContent.replace(/\u200b/g,"").length!=e[d].textContent.length&&c(e[d]):e[d].nodeType==Node.TEXT_NODE&&(e[d].textContent=e[d].textContent.replace(/\u200b/g,""))}function d(a){if(a.nodeType==Node.COMMENT_NODE)return"<!--"+a.nodeValue+"-->";if(a.nodeType==Node.TEXT_NODE)return a.textContent.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\u00A0/g,"&nbsp;");if(a.nodeType!=Node.ELEMENT_NODE)return a.outerHTML;if(a.nodeType==Node.ELEMENT_NODE&&["STYLE","SCRIPT"].indexOf(a.tagName)>=0)return a.outerHTML;if("IFRAME"==a.tagName)return a.outerHTML;var c=a.childNodes;if(0===c.length)return a.outerHTML;for(var e="",f=0;f<c.length;f++)e+=d(c[f]);return b.node.openTagString(a)+e+b.node.closeTagString(a)}function e(a){return x=[],a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(a){return x.push(a),"<!--[FROALA.EDITOR.SCRIPT "+(x.length-1)+"]-->"}),a=a.replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-src="')}function f(a){return a=a.replace(/<!--\[FROALA\.EDITOR\.SCRIPT ([\d]*)]-->/gi,function(a,b){return x[parseInt(b,10)]}),b.opts.htmlRemoveTags.indexOf("script")>=0&&(a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")),a=a.replace(/<img((?:[\w\W]*?)) data-src="/g,'<img$1 src="')}function g(a){var b;for(b in a)b.match(w)||delete a[b];for(var c="",d=Object.keys(a).sort(),e=0;e<d.length;e++)b=d[e],c+=a[b].indexOf('"')<0?" "+b+'="'+a[b]+'"':" "+b+"='"+a[b]+"'";return c}function h(a,c,d){if(b.opts.fullPage){var e=b.html.extractDoctype(d),f=g(b.html.extractNodeAttrs(d,"html"));c=null==c?b.html.extractNode(d,"head")||"<title></title>":c;var h=g(b.html.extractNodeAttrs(d,"head")),i=g(b.html.extractNodeAttrs(d,"body"));return e+"<html"+f+"><head"+h+">"+c+"</head><body"+i+">"+a+"</body></html>"}return a}function i(c,e){var f=a("<div>"+c+"</div>"),g="";if(f){for(var h=b.node.contents(f.get(0)),i=0;i<h.length;i++)e(h[i]);h=b.node.contents(f.get(0));for(var i=0;i<h.length;i++)g+=d(h[i])}return g}function j(a,c,d){a=e(a);var g=a,j=null;if(b.opts.fullPage){var g=(b.html.extractNode(a,"body")||a).replace(/\r|\n/g,"");d&&(j=(b.html.extractNode(a,"head")||"").replace(/\r|\n/g,""))}g=i(g,c),j&&(j=i(j,c));var k=h(g,j,a).replace(/\r|\n/g,"");return f(k)}function k(a){return a.replace(/\u200b/g,"").length==a.length?a:b.clean.exec(a,c)}function l(){var c=b.$el.find(Object.keys(a.FroalaEditor.HTML5Map).join(",")).filter(function(){return""===b.node.attributes(this)});c.length&&(b.selection.save(),c.each(function(){a(this).replaceWith("<"+a.FroalaEditor.HTML5Map[this.tagName]+">"+a(this).html()+"</"+a.FroalaEditor.HTML5Map[this.tagName]+">")}),b.selection.restore())}function m(c){if("PRE"==c.tagName&&o(c),c.nodeType==Node.ELEMENT_NODE&&(c.getAttribute("data-src")&&c.setAttribute("data-src",b.helpers.sanitizeURL(c.getAttribute("data-src"))),c.getAttribute("href")&&c.setAttribute("href",b.helpers.sanitizeURL(c.getAttribute("href"))),["TABLE","TBODY","TFOOT","TR"].indexOf(c.tagName)>=0&&(c.innerHTML=c.innerHTML.trim())),!b.opts.pasteAllowLocalImages&&c.nodeType==Node.ELEMENT_NODE&&"IMG"==c.tagName&&c.getAttribute("data-src")&&0==c.getAttribute("data-src").indexOf("file://"))return c.parentNode.removeChild(c),!1;if(c.nodeType==Node.ELEMENT_NODE&&a.FroalaEditor.HTML5Map[c.tagName]&&""===b.node.attributes(c)){var d=a.FroalaEditor.HTML5Map[c.tagName],e="<"+d+">"+c.innerHTML+"</"+d+">";c.insertAdjacentHTML("beforebegin",e),c=c.previousSibling,c.parentNode.removeChild(c.nextSibling)}if(b.opts.htmlAllowComments||c.nodeType!=Node.COMMENT_NODE)if(c.tagName&&c.tagName.match(v))c.parentNode.removeChild(c);else if(c.tagName&&!c.tagName.match(u))c.outerHTML=c.innerHTML;else{var f=c.attributes;if(f)for(var g=f.length-1;g>=0;g--){var h=f[g];h.nodeName.match(w)||c.removeAttribute(h.nodeName)}}else 0!==c.data.indexOf("[FROALA.EDITOR")&&c.parentNode.removeChild(c)}function n(a){for(var c=b.node.contents(a),d=0;d<c.length;d++)c[d].nodeType!=Node.TEXT_NODE&&n(c[d]);m(a)}function o(a){var b=a.innerHTML;b.indexOf("\n")>=0&&(a.innerHTML=b.replace(/\n/g,"<br>"))}function p(c,d,e,f){"undefined"==typeof d&&(d=[]),"undefined"==typeof e&&(e=[]),"undefined"==typeof f&&(f=!1),c=c.replace(/\u0009/g,"");var g,h=a.merge([],b.opts.htmlAllowedTags);for(g=0;g<d.length;g++)h.indexOf(d[g])>=0&&h.splice(h.indexOf(d[g]),1);var i=a.merge([],b.opts.htmlAllowedAttrs);for(g=0;g<e.length;g++)i.indexOf(e[g])>=0&&i.splice(i.indexOf(e[g]),1);return u=new RegExp("^"+h.join("$|^")+"$","gi"),w=new RegExp("^"+i.join("$|^")+"$","gi"),v=new RegExp("^"+b.opts.htmlRemoveTags.join("$|^")+"$","gi"),c=j(c,n,!0)}function q(){for(var c=b.$el.find("blockquote + blockquote"),d=0;d<c.length;d++){var e=a(c[d]);b.node.attributes(c[d])==b.node.attributes(e.prev().get(0))&&(e.prev().append(e.html()),e.remove())}}function r(){for(var c=b.$el.find("tr").filter(function(){return a(this).find("th").length>0}),d=0;d<c.length;d++){var e=a(c[d]).parents("table:first").find("thead");0===e.length&&(e=a("<thead>"),a(c[d]).parents("table:first").prepend(e),e.append(c[d]))}b.$el.find("table").filter(function(){for(var a=this.previousSibling;a&&a.nodeType==Node.TEXT_NODE&&0==a.textContent.length;)a=a.previousSibling;return a&&!b.node.isBlock(a)&&"BR"!=a.tagName?!0:!1}).before("<br>");var f=b.html.defaultTag();f&&b.$el.find("td > "+f+", th > "+f).each(function(){""===b.node.attributes(this)&&a(this).replaceWith(this.innerHTML+"<br>")})}function s(){for(var c=b.$el.find("ol + ol, ul + ul"),d=0;d<c.length;d++){var e=a(c[d]);b.node.attributes(c[d])==b.node.attributes(e.prev().get(0))&&(e.prev().append(e.html()),e.remove())}var f=[],g=function(){return!b.node.isList(this.parentNode)};do{if(f.length){var h=f.get(0),i=a("<ul></ul>").insertBefore(a(h));do{var j=h;h=h.nextSibling,i.append(a(j))}while(h&&"LI"==h.tagName)}f=b.$el.find("li").filter(g)}while(f.length>0);var k,l=function(b,c){var d=a(c);0===d.find("LI").length&&(k=!0,d.remove())};do k=!1,b.$el.find("li:empty").remove(),b.$el.find("ul, ol").each(l);while(k===!0);for(var m=b.$el.find("ol, ul").find("> ul, > ol"),n=0;n<m.length;n++){var o=m[n],p=o.previousSibling;p&&("LI"==p.tagName?a(p).append(o):a(o).wrap("<li></li>"))}b.$el.find("li > ul, li > ol").each(function(b,c){if(c.nextSibling){var d=c.nextSibling,e=a("<li>");a(c.parentNode).after(e);do{var f=d;d=d.nextSibling,e.append(f)}while(d)}}),b.$el.find("li > ul, li > ol").each(function(c,d){if(b.node.isFirstSibling(d))a(d).before("<br/>");else if(d.previousSibling&&"BR"==d.previousSibling.tagName){for(var e=d.previousSibling.previousSibling;e&&a(e).hasClass("fr-marker");)e=e.previousSibling;e&&"BR"!=e.tagName&&a(d.previousSibling).remove()}}),b.$el.find("li:empty").remove()}function t(){b.opts.fullPage&&a.merge(b.opts.htmlAllowedTags,["head","title","style","link","base","body","html"])}var u,v,w,x=[],x=[];return{_init:t,html:p,toHTML5:l,tables:r,lists:s,quotes:q,invisibleSpaces:k,exec:j}},a.FroalaEditor.XS=0,a.FroalaEditor.SM=1,a.FroalaEditor.MD=2,a.FroalaEditor.LG=3,a.FroalaEditor.MODULES.helpers=function(b){function c(){var a,b,c=-1;return"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,b=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=navigator.userAgent,b=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))),c}function d(){var a={};if(c()>0)a.msie=!0;else{var b=navigator.userAgent.toLowerCase(),d=/(edge)[ \/]([\w.]+)/.exec(b)||/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[],e={browser:d[1]||"",version:d[2]||"0"};d[1]&&(a[e.browser]=!0),parseInt(e.version,10)<9&&a.msie&&(a.oldMsie=!0),a.chrome?a.webkit=!0:a.webkit&&(a.safari=!0)}return a}function e(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!h()}function f(){return/(Android)/g.test(navigator.userAgent)&&!h()}function g(){return/(Blackberry)/g.test(navigator.userAgent)}function h(){return/(Windows Phone)/gi.test(navigator.userAgent)}function i(){return f()||e()||g()}function j(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}function k(a){return parseInt(a,10)||0}function l(){var b=a('<div class="fr-visibility-helper"></div>').appendTo("body"),c=k(b.css("margin-left"));return b.remove(),c}function m(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch}function n(a){if(!/^(https?:|ftps?:|)\/\//.test(a))return!1;a=String(a).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20");var b=/\(?(?:(https?:|ftps?:|)\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|(?:www.)?(?:[^\W\s]|\.|-)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;return b.test(a)}function o(a){if(/^(https?:|ftps?:|)\/\//.test(a)){if(!n(a))return""}else a=encodeURIComponent(a).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/g,"mailto:").replace(/file%3A/g,"file:").replace(/sms%3A/g,"sms:").replace(/tel%3A/g,"tel:").replace(/data%3Aimage/g,"data:image").replace(/webkit-fake-url%3A/g,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@");return a}function p(a){return a&&!a.propertyIsEnumerable("length")&&"object"==typeof a&&"number"==typeof a.length}function q(a){function b(a){return("0"+parseInt(a,10).toString(16)).slice(-2)}try{return a&&"transparent"!==a?/^#[0-9A-F]{6}$/i.test(a)?a:(a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),("#"+b(a[1])+b(a[2])+b(a[3])).toUpperCase()):""}catch(c){return null}}function r(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?"rgb("+parseInt(c[1],16)+", "+parseInt(c[2],16)+", "+parseInt(c[3],16)+")":""}function s(b){var c=(b.css("text-align")||"").replace(/-(.*)-/g,"");if(["left","right","justify","center"].indexOf(c)<0){if(!u){var d=a('<div dir="auto" style="text-align: initial; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>');a("body").append(d);var e=d.find("#s1").get(0).getBoundingClientRect().left,f=d.find("#s2").get(0).getBoundingClientRect().left;d.remove(),u=f>e?"left":"right"}c=u}return c}function t(){b.browser=d(),b.ie_version=c()}var u;return{_init:t,isIOS:e,isAndroid:f,isBlackberry:g,isWindowsPhone:h,isMobile:i,requestAnimationFrame:j,getPX:k,screenSize:l,isTouch:m,sanitizeURL:o,isArray:p,RGBToHex:q,HEXtoRGB:r,isURL:n,getAlignment:s}},a.FroalaEditor.MODULES.events=function(b){function c(a,c,d){a.on(c.split(" ").join("."+b.id+" ")+"."+b.id,d),r("destroy",function(){a.off(c.split(" ").join("."+b.id+" ")+"."+b.id)})}function d(){c(b.$el,"cut copy paste beforepaste",function(a){s(a.type,[a])})}function e(){c(b.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop",function(a){s(a.type,[a])})}function f(){c(b.$el,"keydown keypress keyup input",function(a){s(a.type,[a])})}function g(){c(b.$window,b._mousedown,function(a){s("window.mousedown",[a]),n()}),c(b.$window,b._mouseup,function(a){s("window.mouseup",[a])}),c(b.$window,"keydown keyup touchmove",function(a){s("window."+a.type,[a])})}function h(){c(b.$document,"drop",function(a){s("document.drop",[a])})}function i(c){if("undefined"==typeof c&&(c=!0),!b.$wp)return!1;if(!b.core.hasFocus()&&c)return b.$el.focus(),!1;if(!b.core.hasFocus()||b.$el.find(".fr-marker").length>0)return!1;var d=b.selection.info(b.$el.get(0));if(d.atStart&&b.selection.isCollapsed()&&null!=b.html.defaultTag()){var e=b.markers.insert();if(e&&!b.node.blockParent(e)){a(e).remove();var f=b.$el.find(b.html.blockTagsQuery()).get(0);f&&(a(f).prepend(a.FroalaEditor.MARKERS),b.selection.restore())}else e&&a(e).remove()}}function j(){c(b.$el,"focus",function(a){p()&&(i(!1),y===!1&&s(a.type,[a]))}),c(b.$el,"blur",function(a){p()&&y===!0&&s(a.type,[a])}),r("focus",function(){y=!0}),r("blur",function(){y=!1})}function k(){b.helpers.isMobile()?(b._mousedown="touchstart",b._mouseup="touchend",b._move="touchmove",b._mousemove="touchmove"):(b._mousedown="mousedown",b._mouseup="mouseup",b._move="",b._mousemove="mousemove")}function l(c){var d=a(c.currentTarget);return b.edit.isDisabled()||d.hasClass("fr-disabled")?(c.preventDefault(),!1):"mousedown"===c.type&&1!==c.which?!0:(b.helpers.isMobile()||c.preventDefault(),(b.helpers.isAndroid()||b.helpers.isWindowsPhone())&&0===d.parents(".fr-dropdown-menu").length&&(c.preventDefault(),c.stopPropagation()),d.addClass("fr-selected"),void b.events.trigger("commands.mousedown",[d]))}function m(c,d){var e=a(c.currentTarget);if(b.edit.isDisabled()||e.hasClass("fr-disabled"))return c.preventDefault(),!1;if("mouseup"===c.type&&1!==c.which)return!0;if(!e.hasClass("fr-selected"))return!0;if("touchmove"!=c.type){if(c.stopPropagation(),c.stopImmediatePropagation(),c.preventDefault(),!e.hasClass("fr-selected"))return a(".fr-selected").removeClass("fr-selected"),!1;if(a(".fr-selected").removeClass("fr-selected"),e.data("dragging")||e.attr("disabled"))return e.removeData("dragging"),!1;var f=e.data("timeout");f&&(clearTimeout(f),e.removeData("timeout")),d.apply(b,[c])}else e.data("timeout")||e.data("timeout",setTimeout(function(){e.data("dragging",!0)},100))}function n(){w=!0}function o(){w=!1}function p(){return w}function q(a,c,d){a.on(b._mousedown,c,function(a){l(a)}),a.on(b._mouseup+" "+b._move,c,function(a){m(a,d)}),a.on("mousedown click mouseup",c,function(a){a.stopPropagation()}),r("window.mouseup",function(){a.find(c).removeClass("fr-selected"),n()}),r("destroy",function(){a.off(b._mousedown,c),a.off(b._mouseup+" "+b._move)})}function r(a,b,c){"undefined"==typeof c&&(c=!1);var d=x[a]=x[a]||[];c?d.unshift(b):d.push(b)}function s(c,d,e){if(!b.edit.isDisabled()||e){var f,g=x[c];if(g)for(var h=0;h<g.length;h++)if(f=g[h].apply(b,d),f===!1)return!1;return f=b.$original_element.triggerHandler("froalaEditor."+c,a.merge([b],d||[])),f===!1?!1:f}}function t(c,d,e){if(!b.edit.isDisabled()||e){var f,g=x[c];if(g)for(var h=0;h<g.length;h++)f=g[h].apply(b,[d]),"undefined"!=typeof f&&(d=f);return f=b.$original_element.triggerHandler("froalaEditor."+c,a.merge([b],[d])),"undefined"!=typeof f&&(d=f),d}}function u(){for(var a in x)delete x[a]}function v(){k(),e(),g(),h(),f(),j(),n(),d(),r("destroy",u)}var w,x={},y=!1;return{_init:v,on:r,trigger:s,bindClick:q,disableBlur:o,enableBlur:n,blurActive:p,focus:i,chainTrigger:t}},a.FroalaEditor.INVISIBLE_SPACE="&#8203;",a.FroalaEditor.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>",a.FroalaEditor.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>",a.FroalaEditor.MARKERS=a.FroalaEditor.START_MARKER+a.FroalaEditor.END_MARKER,a.FroalaEditor.MODULES.markers=function(b){function c(c,d){return a('<span class="fr-marker" data-id="'+d+'" data-type="'+c+'" style="display: '+(b.browser.safari?"none":"inline-block")+'; line-height: 0;">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>",b.document)[0]}function d(d,e,f){try{var g=d.cloneRange();if(g.collapse(e),g.insertNode(c(e,f)),e===!0&&d.collapsed)for(var h=b.$el.find('span.fr-marker[data-type="true"][data-id="'+f+'"]').get(0).nextSibling;h&&h.nodeType===Node.TEXT_NODE&&0===h.textContent.length;)a(h).remove(),h=b.$el.find('span.fr-marker[data-type="true"][data-id="'+f+'"]').get(0).nextSibling;if(e===!0&&!d.collapsed){var e=b.$el.find('span.fr-marker[data-type="true"][data-id="'+f+'"]').get(0),h=e.nextSibling;if(h&&h.nodeType===Node.ELEMENT_NODE&&b.node.isBlock(h)){var i=[h];do h=i[0],i=b.node.contents(h);while(i[0]&&b.node.isBlock(i[0]));a(h).prepend(a(e))}}if(e===!1&&!d.collapsed){var e=b.$el.find('span.fr-marker[data-type="false"][data-id="'+f+'"]').get(0),h=e.previousSibling;if(h&&h.nodeType===Node.ELEMENT_NODE&&b.node.isBlock(h)){var i=[h];do h=i[i.length-1],i=b.node.contents(h);while(i[i.length-1]&&b.node.isBlock(i[i.length-1]));a(h).append(a(e))}e.parentNode&&["TD","TH"].indexOf(e.parentNode.tagName)>=0&&e.parentNode.previousSibling&&!e.previousSibling&&a(e.parentNode.previousSibling).append(e)}return e}catch(j){return null}}function e(){if(!b.$wp)return null;try{var c=b.selection.ranges(0),d=c.commonAncestorContainer;if(d!=b.$el.get(0)&&0==b.$el.find(d).length)return null;var e=c.cloneRange(),f=c.cloneRange();e.collapse(!0);var g=a('<span class="fr-marker" style="display: none; line-height: 0;">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>",b.document)[0];if(e.insertNode(g),g=b.$el.find("span.fr-marker").get(0)){for(var h=g.nextSibling;h&&h.nodeType===Node.TEXT_NODE&&0===h.textContent.length;)a(h).remove(),h=b.$el.find("span.fr-marker").get(0).nextSibling;return b.selection.clear(),b.selection.get().addRange(f),g}return null}catch(i){}}function f(a){var c=a.clientX,d=a.clientY;g();var f,h=null;if("undefined"!=typeof b.document.caretPositionFromPoint?(f=b.document.caretPositionFromPoint(c,d),h=b.document.createRange(),h.setStart(f.offsetNode,f.offset),h.setEnd(f.offsetNode,f.offset)):"undefined"!=typeof b.document.caretRangeFromPoint&&(f=b.document.caretRangeFromPoint(c,d),h=b.document.createRange(),h.setStart(f.startContainer,f.startOffset),h.setEnd(f.startContainer,f.startOffset)),null!==h&&"undefined"!=typeof b.window.getSelection){var i=b.window.getSelection();i.removeAllRanges(),i.addRange(h)}else if("undefined"!=typeof b.document.body.createTextRange)try{h=b.document.body.createTextRange(),h.moveToPoint(c,d);var j=h.duplicate();j.moveToPoint(c,d),h.setEndPoint("EndToEnd",j),h.select()}catch(k){}e()}function g(){b.$el.find(".fr-marker").remove()}return{place:d,insert:e,insertAtPoint:f,remove:g}},a.FroalaEditor.MODULES.selection=function(b){function c(){var a="";return b.window.getSelection?a=b.window.getSelection():b.document.getSelection?a=b.document.getSelection():b.document.selection&&(a=b.document.selection.createRange().text),a.toString()}function d(){var a="";return a=b.window.getSelection?b.window.getSelection():b.document.getSelection?b.document.getSelection():b.document.selection.createRange()}function e(a){var c=d(),e=[];if(c&&c.getRangeAt&&c.rangeCount)for(var e=[],f=0;f<c.rangeCount;f++)e.push(c.getRangeAt(f));else e=b.document.createRange?[b.document.createRange()]:[];return"undefined"!=typeof a?e[a]:e}function f(){var a=d();try{a.removeAllRanges?a.removeAllRanges():a.empty?a.empty():a.clear&&a.clear()}catch(b){}}function g(){var f=d();try{if(f.rangeCount){var g=e(0),h=g.startContainer;if(h.nodeType==Node.ELEMENT_NODE){var i=!1;if(h.childNodes.length>0&&h.childNodes[g.startOffset]){for(var j=h.childNodes[g.startOffset];j&&j.nodeType==Node.TEXT_NODE&&0==j.textContent.length;)j=j.nextSibling;j&&j.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(h=j,i=!0)}else if(!g.collapsed&&h.nextSibling&&h.nextSibling.nodeType==Node.ELEMENT_NODE){var j=h.nextSibling;j&&j.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(h=j,i=!0)}!i&&h.childNodes.length>0&&a(h.childNodes[0]).text().replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(h.childNodes[0].tagName)<0&&(h=h.childNodes[0])}for(;h.nodeType!=Node.ELEMENT_NODE&&h.parentNode;)h=h.parentNode;for(var k=h;k&&"HTML"!=k.tagName;){if(k==b.$el.get(0))return h;k=a(k).parent()[0]}}}catch(l){}return b.$el.get(0)}function h(){var f=d();try{if(f.rangeCount){var g=e(0),h=g.endContainer;if(h.nodeType==Node.ELEMENT_NODE){var i=!1;if(h.childNodes.length>0&&h.childNodes[g.endOffset]&&a(h.childNodes[g.endOffset]).text()===c())h=h.childNodes[g.endOffset],i=!0;else if(!g.collapsed&&h.previousSibling&&h.previousSibling.nodeType==Node.ELEMENT_NODE){var j=h.previousSibling;j&&j.textContent.replace(/\u200B/g,"")===c().replace(/\u200B/g,"")&&(h=j,i=!0)}!i&&h.childNodes.length>0&&a(h.childNodes[h.childNodes.length-1]).text()===c()&&["BR","IMG","HR"].indexOf(h.childNodes[h.childNodes.length-1].tagName)<0&&(h=h.childNodes[h.childNodes.length-1])}for(h.nodeType==Node.TEXT_NODE&&0==g.endOffset&&h.previousSibling&&h.previousSibling.nodeType==Node.ELEMENT_NODE&&(h=h.previousSibling);h.nodeType!=Node.ELEMENT_NODE&&h.parentNode;)h=h.parentNode;for(var k=h;k&&"HTML"!=k.tagName;){if(k==b.$el.get(0))return h;k=a(k).parent()[0]}}}catch(l){}return b.$el.get(0)}function i(a,b){var c=a;return c.nodeType==Node.ELEMENT_NODE&&c.childNodes.length>0&&c.childNodes[b]&&(c=c.childNodes[b]),c.nodeType==Node.TEXT_NODE&&(c=c.parentNode),c}function j(){var c=[],f=d();if(t()&&f.rangeCount)for(var g=e(),h=0;h<g.length;h++){var j=g[h],k=i(j.startContainer,j.startOffset),l=i(j.endContainer,j.endOffset);b.node.isBlock(k)&&c.indexOf(k)<0&&c.push(k);var m=b.node.blockParent(k);m&&c.indexOf(m)<0&&c.push(m);for(var n=[],o=k;o!==l&&o!==b.$el.get(0);)n.indexOf(o)<0&&o.children&&o.children.length?(n.push(o),o=o.children[0]):o.nextSibling?o=o.nextSibling:o.parentNode&&(o=o.parentNode,n.push(o)),b.node.isBlock(o)&&n.indexOf(o)<0&&c.indexOf(o)<0&&c.push(o);b.node.isBlock(l)&&c.indexOf(l)<0&&c.push(l);var m=b.node.blockParent(l);m&&c.indexOf(m)<0&&c.push(m)}for(var h=c.length-1;h>0;h--)a(c[h]).find(c).length&&"LI"!=c[h].tagName&&c.splice(h,1);return c}function k(){if(b.$wp){b.markers.remove();for(var a=e(),c=[],d=0;d<a.length;d++)if(a[d].startContainer!==b.document){var f=a[d],g=f.collapsed,h=b.markers.place(f,!0,d),i=b.markers.place(f,!1,d);if(b.browser.safari&&!g){var f=b.document.createRange();f.setStartAfter(h),f.setEndBefore(i),c.push(f)}}if(b.browser.safari&&c.length){b.selection.clear();for(var d=0;d<c.length;d++)b.selection.get().addRange(c[d])}}}function l(){var c=b.$el.find('.fr-marker[data-type="true"]');if(!b.$wp)return c.remove(),!1;if(0===c.length)return!1;b.core.hasFocus()||b.browser.msie||b.$el.focus(),f();for(var e=d(),g=0;g<c.length;g++){
var h=a(c[g]).data("id"),i=c[g],j=b.document.createRange(),k=b.$el.find('.fr-marker[data-type="false"][data-id="'+h+'"]'),l=null;if(k.length>0){k=k[0];try{for(var n=!1,o=i.nextSibling;o&&o.nodeType==Node.TEXT_NODE&&0==o.textContent.length;){var p=o;o=o.nextSibling,a(p).remove()}for(var q=k.nextSibling;q&&q.nodeType==Node.TEXT_NODE&&0==q.textContent.length;){var p=q;q=q.nextSibling,a(p).remove()}if(i.nextSibling==k||k.nextSibling==i){for(var r=i.nextSibling==k?i:k,s=r==i?k:i,t=r.previousSibling;t&&t.nodeType==Node.TEXT_NODE&&0==t.length;){var p=t;t=t.previousSibling,a(p).remove()}if(t&&t.nodeType==Node.TEXT_NODE)for(;t&&t.previousSibling&&t.previousSibling.nodeType==Node.TEXT_NODE;)t.previousSibling.textContent=t.previousSibling.textContent+t.textContent,t=t.previousSibling,a(t.nextSibling).remove();for(var u=s.nextSibling;u&&u.nodeType==Node.TEXT_NODE&&0==u.length;){var p=u;u=u.nextSibling,a(p).remove()}if(u&&u.nodeType==Node.TEXT_NODE)for(;u&&u.nextSibling&&u.nextSibling.nodeType==Node.TEXT_NODE;)u.nextSibling.textContent=u.textContent+u.nextSibling.textContent,u=u.nextSibling,a(u.previousSibling).remove();if(t&&b.node.isVoid(t)&&(t=null),u&&b.node.isVoid(u)&&(u=null),t&&u&&t.nodeType==Node.TEXT_NODE&&u.nodeType==Node.TEXT_NODE){a(i).remove(),a(k).remove();var v=t.textContent.length;t.textContent=t.textContent+u.textContent,a(u).remove(),b.html.normalizeSpaces(t),j.setStart(t,v),j.setEnd(t,v),n=!0}else!t&&u&&u.nodeType==Node.TEXT_NODE?(a(i).remove(),a(k).remove(),b.html.normalizeSpaces(u),l=a(b.document.createTextNode("​")),a(u).before(l),j.setStart(u,0),j.setEnd(u,0),n=!0):!u&&t&&t.nodeType==Node.TEXT_NODE&&(a(i).remove(),a(k).remove(),b.html.normalizeSpaces(t),l=a(b.document.createTextNode("​")),a(t).after(l),j.setStart(t,t.textContent.length),j.setEnd(t,t.textContent.length),n=!0)}if(!n){var w,x;b.browser.chrome&&i.nextSibling==k?(w=m(k,j,!0)||j.setStartAfter(k),x=m(i,j,!1)||j.setEndBefore(i)):(i.previousSibling==k&&(i=k,k=i.nextSibling),k.nextSibling&&"BR"===k.nextSibling.tagName||!k.nextSibling&&b.node.isBlock(i.previousSibling)||i.previousSibling&&"BR"==i.previousSibling.tagName||(i.style.display="inline",k.style.display="inline",l=a(b.document.createTextNode("​"))),w=m(i,j,!0)||a(i).before(l)&&j.setStartBefore(i),x=m(k,j,!1)||a(k).after(l)&&j.setEndAfter(k)),"function"==typeof w&&w(),"function"==typeof x&&x()}}catch(y){}}l&&l.remove(),e.addRange(j)}b.markers.remove()}function m(c,d,e){var f=c.previousSibling,g=c.nextSibling;if(f&&g&&f.nodeType==Node.TEXT_NODE&&g.nodeType==Node.TEXT_NODE){var h=f.textContent.length;return e?(g.textContent=f.textContent+g.textContent,a(f).remove(),a(c).remove(),b.html.normalizeSpaces(g),function(){d.setStart(g,h)}):(f.textContent=f.textContent+g.textContent,a(g).remove(),a(c).remove(),b.html.normalizeSpaces(f),function(){d.setEnd(f,h)})}return!1}function n(){return!0}function o(){for(var a=e(),b=0;b<a.length;b++)if(!a[b].collapsed)return!1;return!0}function p(a){var c,d,e=!1,f=!1;if(b.window.getSelection){var g=b.window.getSelection();g.rangeCount&&(c=g.getRangeAt(0),d=c.cloneRange(),d.selectNodeContents(a),d.setEnd(c.startContainer,c.startOffset),e=""===d.toString(),d.selectNodeContents(a),d.setStart(c.endContainer,c.endOffset),f=""===d.toString())}else b.document.selection&&"Control"!=b.document.selection.type&&(c=b.document.selection.createRange(),d=c.duplicate(),d.moveToElementText(a),d.setEndPoint("EndToStart",c),e=""===d.text,d.moveToElementText(a),d.setEndPoint("StartToEnd",c),f=""===d.text);return{atStart:e,atEnd:f}}function q(){if(o())return!1;b.$el.find("td").prepend('<span class="fr-mk">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>"),b.$el.find("img").append('<span class="fr-mk">'+a.FroalaEditor.INVISIBLE_SPACE+"</span>");var c=!1,d=p(b.$el.get(0));return d.atStart&&d.atEnd&&(c=!0),b.$el.find(".fr-mk").remove(),c}function r(c,d){"undefined"==typeof d&&(d=!0);var e=a(c).html();e&&e.replace(/\u200b/g,"").length!=e.length&&a(c).html(e.replace(/\u200b/g,""));for(var f=b.node.contents(c),g=0;g<f.length;g++)f[g].nodeType!=Node.ELEMENT_NODE?a(f[g]).remove():(r(f[g],0==g),0==g&&(d=!1));c.nodeType==Node.TEXT_NODE?a(c).replaceWith('<span data-first="true" data-text="true"></span>'):d&&a(c).attr("data-first",!0)}function s(c,d){var e=b.node.contents(c.get(0));["TD","TH"].indexOf(c.get(0).tagName)>=0&&1==c.find(".fr-marker").length&&a(e[0]).hasClass("fr-marker")&&c.attr("data-del-cell",!0);for(var f=0;f<e.length;f++){var g=e[f];a(g).hasClass("fr-marker")?d=(d+1)%2:d?a(g).find(".fr-marker").length>0?d=s(a(g),d):["TD","TH"].indexOf(g.tagName)<0&&!a(g).hasClass("fr-inner")?!b.opts.keepFormatOnDelete||d>1||b.$el.find("[data-first]").length>0?a(g).remove():r(g):a(g).hasClass("fr-inner")?0==a(g).find(".fr-inner").length?a(g).html("<br>"):a(g).find(".fr-inner").filter(function(){return 0==a(this).find("fr-inner").length}).html("<br>"):(a(g).empty(),a(g).attr("data-del-cell",!0)):a(g).find(".fr-marker").length>0&&(d=s(a(g),d))}return d}function t(){try{if(!b.$wp)return!1;for(var a=e(0),c=a.commonAncestorContainer;c&&!b.node.isElement(c);)c=c.parentNode;return b.node.isElement(c)?!0:!1}catch(d){return!1}}function u(){k();for(var c=function(b){for(var c=b.previousSibling;c&&c.nodeType==Node.TEXT_NODE&&0==c.textContent.length;){var d=c,c=c.previousSibling;a(d).remove()}return c},d=function(b){for(var c=b.nextSibling;c&&c.nodeType==Node.TEXT_NODE&&0==c.textContent.length;){var d=c,c=c.nextSibling;a(d).remove()}return c},e=b.$el.find('.fr-marker[data-type="true"]'),f=0;f<e.length;f++)for(var g=e[f];!c(g)&&!b.node.isBlock(g.parentNode);)a(g.parentNode).before(g);for(var h=b.$el.find('.fr-marker[data-type="false"]'),f=0;f<h.length;f++)for(var i=h[f];!d(i)&&!b.node.isBlock(i.parentNode);)a(i.parentNode).after(i);if(n()){s(b.$el,0);var j=b.$el.find('[data-first="true"]');if(j.length)b.$el.find(".fr-marker").remove(),j.append(a.FroalaEditor.INVISIBLE_SPACE+a.FroalaEditor.MARKERS).removeAttr("data-first"),j.attr("data-text")&&j.replaceWith(j.html());else{b.$el.find("table").filter(function(){var b=a(this).find("[data-del-cell]").length>0&&a(this).find("[data-del-cell]").length==a(this).find("td, th").length;return b}).remove(),b.$el.find("[data-del-cell]").removeAttr("data-del-cell");for(var e=b.$el.find('.fr-marker[data-type="true"]'),f=0;f<e.length;f++){var m=e[f],o=m.nextSibling,p=b.$el.find('.fr-marker[data-type="false"][data-id="'+a(m).data("id")+'"]').get(0);if(p){if(o&&o==p);else if(m){var q=b.node.blockParent(m),r=b.node.blockParent(p);if(a(m).after(p),q==r);else if(null==q){var t=b.node.deepestParent(m);t?(a(t).after(a(r).html()),a(r).remove()):0==a(r).parentsUntil(b.$el,"table").length&&(a(m).next().after(a(r).html()),a(r).remove())}else if(null==r&&0==a(q).parentsUntil(b.$el,"table").length){for(var o=q;!o.nextSibling&&o.parentNode!=b.$el.get(0);)o=o.parentNode;for(o=o.nextSibling;o&&"BR"!=o.tagName;){var u=o.nextSibling;a(q).append(o),o=u}}else 0==a(q).parentsUntil(b.$el,"table").length&&0==a(r).parentsUntil(b.$el,"table").length&&(a(q).append(a(r).html()),a(r).remove())}}else p=a(m).clone().attr("data-type",!1),a(m).after(p)}}}b.opts.keepFormatOnDelete||b.html.fillEmptyBlocks(!0),b.html.cleanEmptyTags(!0),b.clean.lists(),b.html.normalizeSpaces(),l()}function v(c){if(a(c).find(".fr-marker").length>0)return!1;for(var d=b.node.contents(c);d.length&&b.node.isBlock(d[0]);)c=d[0],d=b.node.contents(c);a(c).prepend(a.FroalaEditor.MARKERS)}function w(c){if(a(c).find(".fr-marker").length>0)return!1;for(var d=b.node.contents(c);d.length&&b.node.isBlock(d[d.length-1]);)c=d[d.length-1],d=b.node.contents(c);a(c).append(a.FroalaEditor.MARKERS)}function x(c){for(var d=c.previousSibling;d&&d.nodeType==Node.TEXT_NODE&&0==d.textContent.length;)d=d.previousSibling;return d?(b.node.isBlock(d)?w(d):"BR"==d.tagName?a(d).before(a.FroalaEditor.MARKERS):a(d).after(a.FroalaEditor.MARKERS),!0):!1}function y(c){for(var d=c.nextSibling;d&&d.nodeType==Node.TEXT_NODE&&0==d.textContent.length;)d=d.nextSibling;return d?(b.node.isBlock(d)?v(d):a(d).before(a.FroalaEditor.MARKERS),!0):!1}return{text:c,get:d,ranges:e,clear:f,element:g,endElement:h,save:k,restore:l,isCollapsed:o,isFull:q,inEditor:t,remove:u,blocks:j,info:p,setAtEnd:w,setAtStart:v,setBefore:x,setAfter:y,rangeElement:i}},a.FroalaEditor.UNICODE_NBSP=String.fromCharCode(160),a.FroalaEditor.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],a.FroalaEditor.BLOCK_TAGS=["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote","ul","ol","li","table","td","th","thead","tfoot","tbody","tr","hr"],a.extend(a.FroalaEditor.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script"],htmlSimpleAmpersand:!1}),a.FroalaEditor.MODULES.html=function(b){function c(){return b.opts.enter==a.FroalaEditor.ENTER_P?"p":b.opts.enter==a.FroalaEditor.ENTER_DIV?"div":b.opts.enter==a.FroalaEditor.ENTER_BR?null:void 0}function d(c){"undefined"==typeof c&&(c=!1);var d,g,h=[];if(c)for(d=b.$el.find(f()),g=0;g<d.length;g++){for(var i=b.node.contents(d[g]),j=!1,k=0;k<i.length;k++)if(i[k].nodeType!=Node.COMMENT_NODE&&(i[k].nodeType==Node.ELEMENT_NODE&&a.FroalaEditor.VOID_ELEMENTS.indexOf(i[k].tagName.toLowerCase())>=0||i[k].textContent&&i[k].textContent.replace(/\u200B/g,"").length>0)){j=!0;break}j||0!==a(d[g]).find(f()).length||h.push(d[g])}else for(d=b.$el.find(e()),g=0;g<d.length;g++)0===a(d[g]).find(f()).length&&h.push(d[g]);return a(a.makeArray(h))}function e(){return a.FroalaEditor.BLOCK_TAGS.join(":empty, ")+":empty"}function f(){return a.FroalaEditor.BLOCK_TAGS.join(", ")}function g(){var c=a.merge(["TD","TH"],a.FroalaEditor.VOID_ELEMENTS);c=a.merge(c,b.opts.htmlAllowedEmptyTags);var d,e;do{e=!1,d=b.$el.find("*:empty").not(c.join(", ")+", .fr-marker");for(var f=0;f<d.length;f++)0===d[f].attributes.length&&(a(d[f]).remove(),e=!0);d=b.$el.find("*:empty").not(c.join(", ")+", .fr-marker")}while(d.length&&e)}function h(d,e){var f=c();if(e&&(f='div class="fr-temp-div"'),f)for(var g=b.node.contents(d.get(0)),h=null,i=0;i<g.length;i++){var j=g[i];if(j.nodeType==Node.ELEMENT_NODE&&b.node.isBlock(j))h=null;else if(j.nodeType!=Node.ELEMENT_NODE&&j.nodeType!=Node.TEXT_NODE)h=null;else if(j.nodeType==Node.ELEMENT_NODE&&"BR"==j.tagName)if(null==h)e?a(j).replaceWith("<"+f+' data-empty="true"><br></div>'):a(j).replaceWith("<"+f+"><br></"+f+">");else{a(j).remove();for(var k=b.node.contents(h),l=!1,m=0;m<k.length;m++)if(!a(k[m]).hasClass("fr-marker")&&(k[m].nodeType!=Node.TEXT_NODE||0!==k[m].textContent.replace(/ /g,"").length)){l=!0;break}l===!1&&(h.append("<br>"),h.data("empty",!0)),h=null}else j.nodeType==Node.TEXT_NODE&&0==a(j).text().trim().length?a(j).remove():(null==h&&(h=a("<"+f+">"),a(j).before(h)),j.nodeType==Node.TEXT_NODE&&a(j).text().trim().length>0?(h.append(a(j).clone()),a(j).remove()):h.append(a(j)))}}function i(c,d,e){return b.$wp?("undefined"==typeof c&&(c=!1),"undefined"==typeof d&&(d=!1),"undefined"==typeof e&&(e=!1),h(b.$el,c),b.$el.find(".fr-inner").each(function(){h(a(this),c)}),d&&b.$el.find("td, th").each(function(){h(a(this),c)}),void(e&&b.$el.find("blockquote").each(function(){h(a(this),c)}))):!1}function j(){b.$el.find("div.fr-temp-div").each(function(){a(this).data("empty")||"LI"==this.parentNode.tagName?a(this).replaceWith(a(this).html()):a(this).replaceWith(a(this).html()+"<br>")}),b.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""==a(this).attr("class")}).removeAttr("class")}function k(a){d(a).not("hr").append("<br/>")}function l(){return b.$el.find(f())}function m(a){"undefined"==typeof a&&(a=b.$el.get(0));for(var c=b.node.contents(a),d=c.length-1;d>=0;d--)if(c[d].nodeType==Node.TEXT_NODE&&b.node.isBlock(a)){for(var e=-1;e!=c[d].textContent.length;)e=c[d].textContent.length,c[d].textContent=c[d].textContent.replace(/(?!^)  (?!$)/g," ");c[d].textContent=c[d].textContent.replace(/^  /g," "),c[d].textContent=c[d].textContent.replace(/  $/g," "),b.node.isBlock(a)&&(c[d].previousSibling||(c[d].textContent=c[d].textContent.replace(/^ */,"")),c[d].nextSibling||(c[d].textContent=c[d].textContent.replace(/ *$/,"")))}else m(c[d])}function n(a){return a&&(b.node.isBlock(a)||["STYLE","SCRIPT","HEAD","BR","HR"].indexOf(a.tagName)>=0||a.nodeType==Node.COMMENT_NODE)}function o(c){if("undefined"==typeof c&&(c=b.$el.get(0)),c.nodeType==Node.ELEMENT_NODE&&["STYLE","SCRIPT","HEAD"].indexOf(c.tagName)<0)for(var d=b.node.contents(c),e=d.length-1;e>=0;e--)a(d[e]).hasClass("fr-marker")||o(d[e]);else if(c.nodeType==Node.TEXT_NODE&&c.textContent.length>0){var f=c.previousSibling,g=c.nextSibling;if(n(f)&&n(g)&&0===c.textContent.trim().length)a(c).remove();else{var h=c.textContent;h=h.replace(new RegExp(a.FroalaEditor.UNICODE_NBSP,"g")," ");for(var i="",j=0;j<h.length;j++)i+=32!=h.charCodeAt(j)||0!==j&&32!=i.charCodeAt(j-1)?h[j]:a.FroalaEditor.UNICODE_NBSP;c.nextSibling||(i=i.replace(/ $/,a.FroalaEditor.UNICODE_NBSP)),c.previousSibling&&!b.node.isVoid(c.previousSibling)&&(i=i.replace(/^\u00A0([^ $])/," $1")),i=i.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2"),c.textContent!=i&&(c.textContent=i)}}}function p(a,b,c){var d=new RegExp(b,"gi"),e=d.exec(a);return e?e[c]:null}function q(a,b){var c=a.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i);return c?b.implementation.createDocumentType(c[1],c[3],c[4]):b.implementation.createDocumentType("html")}function r(a){var b=a.doctype,c="<!DOCTYPE html>";return b&&(c="<!DOCTYPE "+b.name+(b.publicId?' PUBLIC "'+b.publicId+'"':"")+(!b.publicId&&b.systemId?" SYSTEM":"")+(b.systemId?' "'+b.systemId+'"':"")+">"),c}function s(){i(),m(),g(),o(),k(!0),b.clean.quotes(),b.clean.lists(),b.clean.tables(),b.clean.toHTML5(),b.clean.quotes(),b.placeholder.refresh(),b.selection.restore(),t()}function t(){b.core.isEmpty()&&(null!=c()?0===b.$el.find(f()).length&&(b.core.hasFocus()?(b.$el.html("<"+c()+">"+a.FroalaEditor.MARKERS+"<br/></"+c()+">"),b.selection.restore()):b.$el.html("<"+c()+"><br/></"+c()+">")):0===b.$el.find("*:not(.fr-marker):not(br)").length&&(b.core.hasFocus()?(b.$el.html(a.FroalaEditor.MARKERS+"<br/>"),b.selection.restore()):b.$el.html("<br/>")))}function u(a,b){return p(a,"<"+b+"[^>]*?>([\\w\\W]*)</"+b+">",1)}function v(c,d){var e=a("<div "+(p(c,"<"+d+"([^>]*?)>",1)||"")+">");return b.node.rawAttributes(e.get(0))}function w(a){return p(a,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>"}function x(a){var c=b.clean.html(a,[],[],b.opts.fullPage);if(c=c.replace(/\r|\n/g,""),b.opts.fullPage){var d=(u(c,"body")||c).replace(/\r|\n/g,""),e=v(c,"body"),f=u(c,"head")||"<title></title>",g=v(c,"head"),h=w(c),i=v(c,"html");b.$el.html(d),b.node.clearAttributes(b.$el.get(0)),b.$el.attr(e),b.$head.html(f),b.node.clearAttributes(b.$head.get(0)),b.$head.attr(g),b.node.clearAttributes(b.$html.get(0)),b.$html.attr(i),b.iframe_document.doctype.parentNode.replaceChild(q(h,b.iframe_document),b.iframe_document.doctype)}else b.$el.html(c);b.edit.on(),b.core.injectStyle(b.opts.iframeStyle),s(),b.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),b.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")}),b.events.trigger("html.set")}function y(a,c){var d="";b.events.trigger("html.beforeGet");var e,f=[];if(!b.opts.useClasses&&!c){for(e=0;e<b.document.styleSheets.length;e++){var g;try{g=b.document.styleSheets[e].cssRules}catch(h){}if(g)for(var i=0,j=g.length;j>i;i++){var k=b.opts.iframe?"body ":".fr-view ";if(g[i].selectorText&&0===g[i].selectorText.indexOf(k)&&g[i].style.cssText.length>0)for(var l=g[i].selectorText.replace(k,"").replace(/::/g,":"),m=b.$el.get(0).querySelectorAll(l),n=0;n<m.length;n++)!m[n].getAttribute("fr-original-style")&&m[n].getAttribute("style")&&(m[n].setAttribute("fr-original-style",m[n].getAttribute("style")),f.push(m[n])),m[n].style.cssText+=g[i].style.cssText}}for(e=0;e<f.length;e++)f[e].getAttribute("class")&&(f[e].setAttribute("fr-original-class",f[e].getAttribute("class")),f[e].removeAttribute("class"))}if(b.core.isEmpty()?b.opts.fullPage&&(d=r(b.iframe_document),d+="<html"+b.node.attributes(b.$html.get(0))+">"+b.$html.html()+"</html>"):("undefined"==typeof a&&(a=!1),b.opts.fullPage?(d=r(b.iframe_document),d+="<html"+b.node.attributes(b.$html.get(0))+">"+b.$html.html()+"</html>"):d=b.$el.html()),!b.opts.useClasses&&!c)for(e=0;e<f.length;e++)f[e].getAttribute("fr-original-class")&&(f[e].setAttribute("class",f[e].getAttribute("fr-original-class")),f[e].removeAttribute("fr-original-class")),f[e].setAttribute("style",f[e].getAttribute("fr-original-style")),f[e].removeAttribute("fr-original-style");d=d.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(a){return a.replace(/<br>/g,"\n")}),b.opts.fullPage&&(d=d.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,""),d=d.replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,""),d=d.replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>"),d=d.replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>"),d=d.replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>"),d=d.replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>'),d=d.replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),b.opts.htmlSimpleAmpersand&&(d=d.replace(/\&amp;/gi,"&")),b.events.trigger("html.afterGet"),a||(d=d.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),d=b.clean.invisibleSpaces(d);var o=b.events.chainTrigger("html.get",d);return"string"==typeof o&&(d=o),d}function z(){var c=function(c,d){for(;d&&(d.nodeType==Node.TEXT_NODE||!b.node.isBlock(d));)d&&d.nodeType!=Node.TEXT_NODE&&a(c).wrapInner(b.node.openTagString(d)+b.node.closeTagString(d)),d=d.parentNode;d&&c.innerHTML==d.innerHTML&&(c.innerHTML=d.outerHTML)},d=function(){var c,d=null;return b.window.getSelection?(c=b.window.getSelection(),c&&c.rangeCount&&(d=c.getRangeAt(0).commonAncestorContainer,d.nodeType!=Node.ELEMENT_NODE&&(d=d.parentNode))):(c=b.document.selection)&&"Control"!=c.type&&(d=c.createRange().parentElement()),null!=d&&(a.inArray(b.$el.get(0),a(d).parents())>=0||d==b.$el.get(0))?d:null},e="";if("undefined"!=typeof b.window.getSelection){b.browser.mozilla&&(b.selection.save(),b.$el.find('.fr-marker[data-type="false"]').length>1&&(b.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),b.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),b.$el.find(".fr-marker").not('[data-id="0"]').remove()),b.selection.restore());for(var f=b.selection.ranges(),g=0;g<f.length;g++){var h=document.createElement("div");h.appendChild(f[g].cloneContents()),c(h,d()),e+=h.innerHTML}}else"undefined"!=typeof b.document.selection&&"Text"==b.document.selection.type&&(e=b.document.selection.createRange().htmlText);return e}function A(b){var c=a("<div>").html(b);return c.find(f()).length>0}function B(a){var c=b.document.createElement("div");return c.innerHTML=a,b.selection.setAtEnd(c),c.innerHTML}function C(a){return a.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&apos;")}function D(c,d){""!==b.selection.text()&&b.selection.remove();var e;if(e=d?c:b.clean.html(c),c.indexOf('class="fr-marker"')<0&&(e=B(e)),b.core.isEmpty())b.$el.html(e);else{b.markers.insert();var f,g=b.$el.find(".fr-marker").get(0);if(A(e)&&(f=b.node.deepestParent(g)))if(b.node.isBlock(f)&&b.node.isEmpty(f))a(f).replaceWith(e);else{var h=g,i="",j="";do h=h.parentNode,i+=b.node.closeTagString(h),j=b.node.openTagString(h)+j;while(h!=f);a(g).replaceWith('<span id="fr-break"></span>');var k=b.node.openTagString(f)+a(f).html()+b.node.closeTagString(f);k=k.replace(/<span id="fr-break"><\/span>/g,i+e+j),a(f).replaceWith(k)}else a(g).replaceWith(e)}s(),b.events.trigger("html.inserted")}function E(c){var d=null;"undefined"==typeof c&&(d=b.selection.element());var e,f;do{f=!1,e=b.$el.find("*").not(d).not(".fr-marker");for(var g=0;g<e.length;g++){var h=e.get(g),i=h.textContent;0===a(h).find("*").length&&1===i.length&&8203==i.charCodeAt(0)&&(a(h).remove(),f=!0)}}while(f)}function F(){var a=function(){E(),b.placeholder&&b.placeholder.refresh()};b.events.on("mouseup",a),b.events.on("keydown",a),b.events.on("contentChanged",t)}return{defaultTag:c,emptyBlocks:d,emptyBlockTagsQuery:e,blockTagsQuery:f,fillEmptyBlocks:k,cleanEmptyTags:g,cleanWhiteTags:E,normalizeSpaces:o,cleanBlankSpaces:m,blocks:l,getDoctype:r,set:x,get:y,getSelected:z,insert:D,wrap:i,unwrap:j,escapeEntities:C,checkIfEmpty:t,extractNode:u,extractNodeAttrs:v,extractDoctype:w,_init:F}},a.extend(a.FroalaEditor.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),a.FroalaEditor.MODULES.size=function(a){function b(){a.opts.height&&a.$el.css("minHeight",a.opts.height-a.helpers.getPX(a.$el.css("padding-top"))-a.helpers.getPX(a.$el.css("padding-bottom"))),a.$iframe.height(a.$el.outerHeight(!0))}function c(){a.opts.height&&(a.$wp.height(a.opts.height),a.$el.css("minHeight",a.opts.height-a.helpers.getPX(a.$el.css("padding-top"))-a.helpers.getPX(a.$el.css("padding-bottom")))),a.opts.heightMin&&a.$el.css("minHeight",a.opts.heightMin),a.opts.heightMax&&a.$wp.css("maxHeight",a.opts.heightMax),a.opts.width&&a.$box.width(a.opts.width)}function d(){return a.$wp?(c(),void(a.opts.iframe&&(a.events.on("keyup",b),a.events.on("commands.after",b),a.events.on("html.set",b),a.events.on("init",b),a.events.on("initialized",b)))):!1}return{_init:d,syncIframe:b,refresh:c}},a.extend(a.FroalaEditor.DEFAULTS,{language:null}),a.FroalaEditor.LANGUAGE={},a.FroalaEditor.MODULES.language=function(b){function c(a){return e&&e.translation[a]?e.translation[a]:a}function d(){a.FroalaEditor.LANGUAGE&&(e=a.FroalaEditor.LANGUAGE[b.opts.language]),e&&e.direction&&(b.opts.direction=e.direction)}var e;return{_init:d,translate:c}},a.extend(a.FroalaEditor.DEFAULTS,{placeholderText:"Type something",placeholderFontFamily:"Arial, Helvetica, sans-serif"}),a.FroalaEditor.MODULES.placeholder=function(b){function c(){var c=0,d=b.node.contents(b.$el.get(0));d.length&&d[0].nodeType==Node.ELEMENT_NODE?(c=b.helpers.getPX(a(d[0]).css("margin-top")),b.$placeholder.css("font-size",a(d[0]).css("font-size")),b.$placeholder.css("line-height",a(d[0]).css("line-height"))):(b.$placeholder.css("font-size",b.$el.css("font-size")),b.$placeholder.css("line-height",b.$el.css("line-height"))),b.$wp.addClass("show-placeholder"),b.$placeholder.css("margin-top",c).text(b.language.translate(b.opts.placeholderText||b.$original_element.attr("placeholder")||""))}function d(){b.$wp.removeClass("show-placeholder")}function e(){return b.$wp.hasClass("show-placeholder")}function f(){return b.$wp?void(b.core.isEmpty()?c():d()):!1}function g(){return b.$wp?(b.$placeholder=a('<span class="fr-placeholder"></span>'),b.$wp.append(b.$placeholder),b.events.on("init",f),b.events.on("input",f),b.events.on("keydown",f),b.events.on("keyup",f),void b.events.on("contentChanged",f)):!1}return{_init:g,show:c,hide:d,refresh:f,isVisible:e}},a.FroalaEditor.MODULES.edit=function(a){function b(){a.browser.mozilla&&(a.document.execCommand("enableObjectResizing",!1,"false"),a.document.execCommand("enableInlineTableEditing",!1,"false"))}function c(){a.$wp&&(a.$el.attr("contenteditable",!0),a.$el.removeClass("fr-disabled"),a.$tb&&a.$tb.removeClass("fr-disabled"),b()),f=!1}function d(){a.$wp&&(a.$el.attr("contenteditable",!1),a.$el.addClass("fr-disabled"),a.$tb.addClass("fr-disabled")),f=!0}function e(){return f}var f=!1;return{on:c,off:d,disableDesign:b,isDisabled:e}},a.extend(a.FroalaEditor.DEFAULTS,{editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeStyle:'html{margin: 0px;}body{padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px}body:after{content:"";clear:both;display:block}',direction:"auto",zIndex:1,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1}),a.FroalaEditor.MODULES.core=function(b){function c(a){b.opts.iframe&&b.$head.append('<style data-fr-style="true">'+a+"</style>")}function d(){b.opts.iframe||b.$el.addClass("fr-element fr-view")}function e(){if(b.$box.addClass("fr-box"+(b.opts.editorClass?" "+b.opts.editorClass:"")),b.$wp.addClass("fr-wrapper"),d(),b.opts.iframe){b.$iframe.addClass("fr-iframe");for(var a=0;a<b.original_document.styleSheets.length;a++){var c;try{c=b.original_document.styleSheets[a].cssRules}catch(e){}if(c)for(var f=0,g=c.length;g>f;f++)c[f].selectorText&&0===c[f].selectorText.indexOf(".fr-view")&&c[f].style.cssText.length>0&&(b.opts.iframeStyle+=c[f].selectorText.replace(/\.fr-view/g,"body")+"{"+c[f].style.cssText+"}")}}"auto"!=b.opts.direction&&b.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),b.$el.attr("dir",b.opts.direction),b.$wp.attr("dir",b.opts.direction),b.opts.zIndex>1&&b.$box.css("z-index",b.opts.zIndex),b.$box&&b.opts.theme&&b.$box.addClass(b.opts.theme+"-theme")}function f(){return b.node.isEmpty(b.$el.get(0))}function g(){b.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!b.window.FormData,progress:"upload"in new XMLHttpRequest}}function h(a,c){var d=new XMLHttpRequest;d.open(c,a,!0),b.opts.requestWithCORS&&(d.withCredentials=!0);for(var e in b.opts.requestHeaders)d.setRequestHeader(e,b.opts.requestHeaders[e]);return d}function i(){"TEXTAREA"==b.$original_element.get(0).tagName&&b.$original_element.val(b.html.get()),b.$wp&&("TEXTAREA"==b.$original_element.get(0).tagName?(b.$box.replaceWith(b.$original_element),b.$original_element.show()):(b.$el.off("contextmenu.rightClick"),b.$wp.replaceWith(b.html.get()),b.$box.removeClass("fr-view fr-ltr fr-box "+(b.opts.editorClass||"")),b.opts.theme&&b.$box.addClass(b.opts.theme+"-theme")))}function j(){return b.node.hasFocus(b.$el.get(0))}function k(){if(a.FroalaEditor.INSTANCES.push(b),g(),b.$wp){e(),b.html.set(b._original_html),b.$el.attr("spellcheck",b.opts.spellcheck),b.helpers.isMobile()&&(b.$el.attr("autocomplete",b.opts.spellcheck?"on":"off"),b.$el.attr("autocorrect",b.opts.spellcheck?"on":"off"),b.$el.attr("autocapitalize",b.opts.spellcheck?"on":"off")),b.opts.disableRightClick&&b.$el.on("contextmenu.rightClick",function(a){return 2==a.button?!1:void 0});try{b.document.execCommand("styleWithCSS",!1,!1)}catch(c){}}b.events.trigger("init"),b.events.on("destroy",i),"TEXTAREA"==b.$original_element.get(0).tagName&&(b.events.on("contentChanged",function(){b.$original_element.val(b.html.get())}),b.events.on("form.submit",function(){b.$original_element.val(b.html.get())}),b.$original_element.val(b.html.get()))}return{_init:k,isEmpty:f,getXHR:h,injectStyle:c,hasFocus:j}},a.FroalaEditor.COMMANDS={bold:{title:"Bold"},italic:{title:"Italic"},underline:{title:"Underline"},strikeThrough:{title:"Strikethrough"},subscript:{title:"Subscript"},superscript:{title:"Superscript"},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},a.FroalaEditor.RegisterCommand=function(b,c){a.FroalaEditor.COMMANDS[b]=c},a.FroalaEditor.MODULES.commands=function(b){function c(c,d){if(b.events.trigger("commands.before",a.merge([c],d||[]))!==!1){var e=a.FroalaEditor.COMMANDS[c]&&a.FroalaEditor.COMMANDS[c].callback||k[c],f=!0;a.FroalaEditor.COMMANDS[c]&&"undefined"!=typeof a.FroalaEditor.COMMANDS[c].focus&&(f=a.FroalaEditor.COMMANDS[c].focus),b.core.hasFocus()||!f||b.popups.areVisible()||b.events.focus(!0),a.FroalaEditor.COMMANDS[c]&&a.FroalaEditor.COMMANDS[c].undo!==!1&&b.undo.saveStep(),e&&e.apply(b,a.merge([c],d||[])),b.events.trigger("commands.after",a.merge([c],d||[])),a.FroalaEditor.COMMANDS[c]&&a.FroalaEditor.COMMANDS[c].undo!==!1&&b.undo.saveStep()}}function d(c,d){if(b.selection.isCollapsed()&&b.document.queryCommandState(c)===!1){b.markers.insert();var e=b.$el.find(".fr-marker");e.replaceWith("<"+d+">"+a.FroalaEditor.INVISIBLE_SPACE+a.FroalaEditor.MARKERS+"</"+d+">"),b.selection.restore()}else{var f=b.selection.element();if(b.selection.isCollapsed()&&b.document.queryCommandState(c)===!0&&f.tagName==d.toUpperCase()&&0===(f.textContent||"").replace(/\u200B/g,"").length)a(f).replaceWith(a.FroalaEditor.MARKERS),b.selection.restore();else{var g=b.$el.find("span"),h=!1;b.document.queryCommandState(c)===!1&&(b.selection.save(),h=!0),b.document.execCommand(c,!1,!1),h&&b.selection.restore();var i=b.$el.find("span[style]").not(g).filter(function(){return a(this).attr("style").indexOf("font-weight: normal")>=0});i.length&&(b.selection.save(),i.each(function(){a(this).replaceWith(a(this).html())}),b.selection.restore()),b.clean.toHTML5()}}}function e(c){b.selection.save(),b.html.wrap(!0,!0),b.selection.restore();for(var d=b.selection.blocks(),e=0;e<d.length;e++)if("LI"!=d[e].tagName&&"LI"!=d[e].parentNode.tagName){var f=a(d[e]),g="rtl"==b.opts.direction||"rtl"==f.css("direction")?"margin-right":"margin-left",h=b.helpers.getPX(f.css(g));f.css(g,Math.max(h+20*c,0)||""),f.removeClass("fr-temp-div")}b.selection.save(),b.html.unwrap(),b.selection.restore()}function f(){var c=function(a){return a.attr("style").indexOf("font-size")>=0};b.$el.find("[style]").each(function(){var b=a(this);c(b)&&(b.attr("data-font-size",b.css("font-size")),b.css("font-size",""))})}function g(){b.$el.find("[data-font-size]").each(function(){var b=a(this);b.css("font-size",b.attr("data-font-size")),b.removeAttr("data-font-size")})}function h(){b.$el.find("span").each(function(){""===b.node.attributes(this)&&a(this).replaceWith(a(this).html())})}function i(c,d){if(b.selection.isCollapsed()){b.markers.insert();var e=b.$el.find(".fr-marker");e.replaceWith('<span style="'+c+": "+d+';">'+a.FroalaEditor.INVISIBLE_SPACE+a.FroalaEditor.MARKERS+"</span>"),b.selection.restore()}else{f(),b.document.execCommand("fontSize",!1,4),b.selection.save(),g();for(var i,j=function(b){var d=a(b);d.css(c,""),""===d.attr("style")&&d.replaceWith(d.html())},k=function(){return 0===a(this).attr("style").indexOf(c+":")||a(this).attr("style").indexOf(";"+c+":")>=0||a(this).attr("style").indexOf("; "+c+":")>=0};b.$el.find("font").length>0;){var l=b.$el.find("font:first"),m=a('<span class="fr-just" style="'+c+": "+d+';">'+l.html()+"</span>");l.replaceWith(m);var n=m.find("span");for(i=n.length-1;i>=0;i--)j(n[i]);var o=m.parentsUntil(b.$el,"span:first").filter(k);if(o.length){var p="",q="",r="",s="",t=m.get(0);do t=t.parentNode,p+=b.node.closeTagString(t),q=b.node.openTagString(t)+q,o.get(0)!=t&&(r+=b.node.closeTagString(t),s=b.node.openTagString(t)+s);while(o.get(0)!=t);var u=p+'<span class="fr-just" style="'+c+": "+d+';">'+s+m.html()+r+"</span>"+q;m.replaceWith('<span id="fr-break"></span>');var v=o.get(0).outerHTML;o.replaceWith(v.replace(/<span id="fr-break"><\/span>/g,u))}}b.html.cleanEmptyTags(),h();var w=b.$el.find(".fr-just + .fr-just");for(i=0;i<w.length;i++){var x=a(w[i]);x.prepend(x.prev().html()),x.prev().remove()}b.$el.find(".fr-marker + .fr-just").each(function(){a(this).prepend(a(this).prev())}),b.$el.find(".fr-just + .fr-marker").each(function(){a(this).append(a(this).next())}),b.$el.find(".fr-just").removeAttr("class"),b.selection.restore()}}function j(a){return function(){c(a)}}var k={bold:function(){d("bold","strong")},subscript:function(){d("subscript","sub")},superscript:function(){d("superscript","sup")},italic:function(){d("italic","em")},strikeThrough:function(){d("strikeThrough","s")},underline:function(){d("underline","u")},undo:function(){b.undo.run()},redo:function(){b.undo.redo()},indent:function(){e(1)},outdent:function(){
e(-1)},show:function(){b.opts.toolbarInline&&b.toolbar.showInline(null,!0)},insertHR:function(){b.selection.remove(),b.html.insert('<hr id="fr-just">');var a=b.$el.find("hr#fr-just");a.removeAttr("id"),b.selection.setAfter(a.get(0))||b.selection.setBefore(a.get(0)),b.selection.restore()},clearFormatting:function(){b.document.execCommand("removeFormat",!1,!1),b.document.execCommand("unlink",!1,!1)},selectAll:function(){b.document.execCommand("selectAll",!1,!1)}},l={};for(var m in k)l[m]=j(m);return a.extend(l,{exec:c,applyProperty:i})},a.FroalaEditor.MODULES.cursorLists=function(b){function c(a){for(var b=a;"LI"!=b.tagName;)b=b.parentNode;return b}function d(a){for(var c=a;!b.node.isList(c);)c=c.parentNode;return c}function e(e){var f,g=c(e),h=g.nextSibling,i=g.previousSibling,j=b.html.defaultTag();if(b.node.isEmpty(g,!0)&&h){for(var k="",l="",m=e.parentNode;!b.node.isList(m)&&m.parentNode&&"LI"!==m.parentNode.tagName;)k=b.node.openTagString(m)+k,l+=b.node.closeTagString(m),m=m.parentNode;k=b.node.openTagString(m)+k,l+=b.node.closeTagString(m);var n="";for(n=m.parentNode&&"LI"==m.parentNode.tagName?l+"<li>"+a.FroalaEditor.MARKERS+"<br>"+k:j?l+"<"+j+">"+a.FroalaEditor.MARKERS+"<br></"+j+">"+k:l+a.FroalaEditor.MARKERS+"<br>"+k,a(g).html('<span id="fr-break"></span>');["UL","OL"].indexOf(m.tagName)<0||m.parentNode&&"LI"===m.parentNode.tagName;)m=m.parentNode;var o=b.node.openTagString(m)+a(m).html()+b.node.closeTagString(m);o=o.replace(/<span id="fr-break"><\/span>/g,n),a(m).replaceWith(o),b.$el.find("li:empty").remove()}else i&&h||!b.node.isEmpty(g,!0)?(a(g).before("<li><br></li>"),a(e).remove()):i?(f=d(g),f.parentNode&&"LI"==f.parentNode.tagName?a(f.parentNode).after("<li>"+a.FroalaEditor.MARKERS+"<br></li>"):j?a(f).after("<"+j+">"+a.FroalaEditor.MARKERS+"<br></"+j+">"):a(f).after(a.FroalaEditor.MARKERS+"<br>"),a(g).remove()):(f=d(g),f.parentNode&&"LI"==f.parentNode.tagName?a(f.parentNode).before("<li>"+a.FroalaEditor.MARKERS+"<br></li>"):j?a(f).before("<"+j+">"+a.FroalaEditor.MARKERS+"<br></"+j+">"):a(f).before(a.FroalaEditor.MARKERS+"<br>"),a(g).remove())}function f(d){for(var e=c(d),f="",g=d,h="",i="";g!=e;){g=g.parentNode;var j="A"==g.tagName&&b.cursor.isAtEnd(d,g)?"fr-to-remove":"";h=b.node.openTagString(a(g).clone().addClass(j).get(0))+h,i=b.node.closeTagString(g)+i}f=i+f+h+a.FroalaEditor.MARKERS,a(d).replaceWith('<span id="fr-break"></span>');var k=b.node.openTagString(e)+a(e).html()+b.node.closeTagString(e);k=k.replace(/<span id="fr-break"><\/span>/g,f),a(e).replaceWith(k)}function g(d){for(var e=c(d),f=a.FroalaEditor.MARKERS,g=d;g!=e;){g=g.parentNode;var h="A"==g.tagName&&b.cursor.isAtEnd(d,g)?"fr-to-remove":"";f=b.node.openTagString(a(g).clone().addClass(h).get(0))+f+b.node.closeTagString(g)}a(d).remove(),a(e).after(f)}function h(e){var f=c(e),g=f.previousSibling;if(g){g=a(g).find(b.html.blockTagsQuery()).get(-1)||g,a(e).replaceWith(a.FroalaEditor.MARKERS);var h=b.node.contents(g);h.length&&"BR"==h[h.length-1].tagName&&a(h[h.length-1]).remove(),a(f).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==f&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))});for(var i,j=b.node.contents(f)[0];j&&!b.node.isList(j);)i=j.nextSibling,a(g).append(j),j=i;for(g=f.previousSibling;j;)i=j.nextSibling,a(g).append(j),j=i;a(f).remove()}else{var k=d(f);if(a(e).replaceWith(a.FroalaEditor.MARKERS),k.parentNode&&"LI"==k.parentNode.tagName){var l=k.previousSibling;b.node.isBlock(l)?(a(f).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==f&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))}),a(l).append(a(f).html())):a(k).before(a(f).html())}else{var m=b.html.defaultTag();m&&0===a(f).find(b.html.blockTagsQuery()).length?a(k).before("<"+m+">"+a(f).html()+"</"+m+">"):a(k).before(a(f).html())}a(f).remove(),0===a(k).find("li").length&&a(k).remove()}}function i(d){var e,f=c(d),g=f.nextSibling;if(g){e=b.node.contents(g),e.length&&"BR"==e[0].tagName&&a(e[0]).remove(),a(g).find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==g&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))});for(var h,i=d,j=b.node.contents(g)[0];j&&!b.node.isList(j);)h=j.nextSibling,a(i).after(j),i=j,j=h;for(;j;)h=j.nextSibling,a(f).append(j),j=h;a(d).replaceWith(a.FroalaEditor.MARKERS),a(g).remove()}else{for(var k=f;!k.nextSibling&&k!=b.$el.get(0);)k=k.parentNode;if(k==b.$el.get(0))return!1;if(k=k.nextSibling,b.node.isBlock(k))a.FroalaEditor.NO_DELETE_TAGS.indexOf(k.tagName)<0&&(a(d).replaceWith(a.FroalaEditor.MARKERS),e=b.node.contents(f),e.length&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),a(f).append(a(k).html()),a(k).remove());else for(e=b.node.contents(f),e.length&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),a(d).replaceWith(a.FroalaEditor.MARKERS);k&&!b.node.isBlock(k)&&"BR"!=k.tagName;)a(f).append(a(k)),k=k.nextSibling}}return{_startEnter:e,_middleEnter:f,_endEnter:g,_backspace:h,_del:i}},a.FroalaEditor.NO_DELETE_TAGS=["TH","TD","TABLE"],a.FroalaEditor.SIMPLE_ENTER_TAGS=["TH","TD","LI"],a.FroalaEditor.MODULES.cursor=function(b){function c(a){return b.node.isBlock(a)?!0:a.nextSibling?!1:c(a.parentNode)}function d(a){return b.node.isBlock(a)?!0:a.previousSibling?!1:d(a.parentNode)}function e(a,c){return a?a==b.$wp.get(0)?!1:a.previousSibling?!1:a.parentNode==c?!0:e(a.parentNode,c):!1}function f(a,c){return a?a==b.$wp.get(0)?!1:a.nextSibling?!1:a.parentNode==c?!0:f(a.parentNode,c):!1}function g(c){return a(c).parentsUntil(b.$el,"LI").length>0&&0===a(c).parentsUntil("LI","TABLE").length}function h(c){var d=a(c).parentsUntil(b.$el,"BLOCKQUOTE").length>0,e=b.node.deepestParent(c,[],!d);if(e&&"BLOCKQUOTE"==e.tagName){var f=b.node.deepestParent(c,[a(c).parentsUntil(b.$el,"BLOCKQUOTE").get(0)]);f&&f.previousSibling&&(e=f)}if(null!==e){var g,h=e.previousSibling;if(b.node.isBlock(e)&&b.node.isEditable(e)&&h&&a.FroalaEditor.NO_DELETE_TAGS.indexOf(h.tagName)<0&&b.node.isEditable(h))if(b.node.isBlock(h))if(b.node.isEmpty(h)&&!b.node.isList(h))a(h).remove();else{if(b.node.isList(h)&&(h=a(h).find("li:last").get(0)),g=b.node.contents(h),g.length&&"BR"==g[g.length-1].tagName&&a(g[g.length-1]).remove(),"BLOCKQUOTE"==h.tagName&&"BLOCKQUOTE"!=e.tagName)for(g=b.node.contents(h);g.length&&b.node.isBlock(g[g.length-1]);)h=g[g.length-1],g=b.node.contents(h);else if("BLOCKQUOTE"!=h.tagName&&"BLOCKQUOTE"==e.tagName)for(g=b.node.contents(e);g.length&&b.node.isBlock(g[0]);)e=g[0],g=b.node.contents(e);a(c).replaceWith(a.FroalaEditor.MARKERS),a(h).append(e.innerHTML),a(e).remove()}else a(c).replaceWith(a.FroalaEditor.MARKERS),"BLOCKQUOTE"==e.tagName&&h.nodeType==Node.ELEMENT_NODE?a(h).remove():(a(h).after(b.node.isEmpty(e)?"":a(e).html()),a(e).remove(),"BR"==h.tagName&&a(h).remove())}}function i(c){for(var d=c;!d.previousSibling;)d=d.parentNode;d=d.previousSibling;var e;if(b.node.isBlock(d)){if(a.FroalaEditor.NO_DELETE_TAGS.indexOf(d.tagName)<0)if(b.node.isEmpty(d)&&!b.node.isList(d))a(d).remove(),a(c).replaceWith(a.FroalaEditor.MARKERS);else{for(b.node.isList(d)&&(d=a(d).find("li:last").get(0)),e=b.node.contents(d),e&&"BR"==e[e.length-1].tagName&&a(e[e.length-1]).remove(),e=b.node.contents(d);e&&b.node.isBlock(e[e.length-1]);)d=e[e.length-1],e=b.node.contents(d);a(d).append(a.FroalaEditor.MARKERS);for(var f=c;!f.previousSibling;)f=f.parentNode;for(;f&&"BR"!==f.tagName&&!b.node.isBlock(f);){var g=f;f=f.nextSibling,a(d).append(g)}f&&"BR"==f.tagName&&a(f).remove(),a(c).remove()}}else{for(e=b.node.contents(d);d.nodeType!=Node.TEXT_NODE&&e.length&&!a(d).is("[contenteditable='false']");)d=e[e.length-1],e=b.node.contents(d);if(d.nodeType==Node.TEXT_NODE){if(b.helpers.isIOS())return!0;a(d).after(a.FroalaEditor.MARKERS);var h=d.textContent,i=h.length-1;if(b.opts.tabSpaces&&h.length>=b.opts.tabSpaces){var j=h.substr(h.length-b.opts.tabSpaces,h.length-1);0==j.replace(/ /g,"").replace(new RegExp(a.FroalaEditor.UNICODE_NBSP,"g"),"").length&&(i=h.length-b.opts.tabSpaces)}d.textContent=h.substring(0,i),d.textContent.length&&55357==d.textContent.charCodeAt(d.textContent.length-1)&&(d.textContent=d.textContent.substr(0,d.textContent.length-1))}else b.events.trigger("node.remove",[a(d)])!==!1&&(a(d).after(a.FroalaEditor.MARKERS),a(d).remove())}}function j(){var f=!1,j=b.markers.insert();if(!j)return!1;b.$el.get(0).normalize();var k=j.previousSibling;if(k){var l=k.textContent;l&&l.length&&8203==l.charCodeAt(l.length-1)&&(1==l.length?a(k).remove():(k.textContent=k.textContent.substr(0,l.length-1),k.textContent.length&&55357==k.textContent.charCodeAt(k.textContent.length-1)&&(k.textContent=k.textContent.substr(0,k.textContent.length-1))))}return c(j)?f=i(j):d(j)?g(j)&&e(j,a(j).parents("li:first").get(0))?b.cursorLists._backspace(j):h(j):f=i(j),a(j).remove(),b.$el.find("blockquote:empty").remove(),b.html.fillEmptyBlocks(!0),b.html.cleanEmptyTags(!0),b.clean.quotes(),b.clean.lists(),b.html.normalizeSpaces(),b.selection.restore(),f}function k(c){var d=a(c).parentsUntil(b.$el,"BLOCKQUOTE").length>0,e=b.node.deepestParent(c,[],!d);if(e&&"BLOCKQUOTE"==e.tagName){var f=b.node.deepestParent(c,[a(c).parentsUntil(b.$el,"BLOCKQUOTE").get(0)]);f&&f.nextSibling&&(e=f)}if(null!==e){var g,h=e.nextSibling;if(b.node.isBlock(e)&&b.node.isEditable(e)&&h&&a.FroalaEditor.NO_DELETE_TAGS.indexOf(h.tagName)<0)if(b.node.isBlock(h)&&b.node.isEditable(h))if(b.node.isList(h))if(b.node.isEmpty(e,!0))a(e).remove(),a(h).find("li:first").prepend(a.FroalaEditor.MARKERS);else{var i=a(h).find("li:first");"BLOCKQUOTE"==e.tagName&&(g=b.node.contents(e),g.length&&b.node.isBlock(g[g.length-1])&&(e=g[g.length-1])),0===i.find("ul, ol").length&&(a(c).replaceWith(a.FroalaEditor.MARKERS),i.find(b.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==i.get(0)&&a(this).replaceWith(a(this).html()+(b.node.isEmpty(this)?"":"<br>"))}),a(e).append(b.node.contents(i.get(0))),i.remove(),0===a(h).find("li").length&&a(h).remove())}else{if(g=b.node.contents(h),g.length&&"BR"==g[0].tagName&&a(g[0]).remove(),"BLOCKQUOTE"!=h.tagName&&"BLOCKQUOTE"==e.tagName)for(g=b.node.contents(e);g.length&&b.node.isBlock(g[g.length-1]);)e=g[g.length-1],g=b.node.contents(e);else if("BLOCKQUOTE"==h.tagName&&"BLOCKQUOTE"!=e.tagName)for(g=b.node.contents(h);g.length&&b.node.isBlock(g[0]);)h=g[0],g=b.node.contents(h);a(c).replaceWith(a.FroalaEditor.MARKERS),a(e).append(h.innerHTML),a(h).remove()}else{for(a(c).replaceWith(a.FroalaEditor.MARKERS);h&&"BR"!==h.tagName&&!b.node.isBlock(h)&&b.node.isEditable(h);){var j=h;h=h.nextSibling,a(e).append(j)}h&&"BR"==h.tagName&&b.node.isEditable(h)&&a(h).remove()}}}function l(d){for(var e=d;!e.nextSibling;)e=e.parentNode;if(e=e.nextSibling,"BR"==e.tagName&&b.node.isEditable(e))if(e.nextSibling){if(b.node.isBlock(e.nextSibling)&&b.node.isEditable(e.nextSibling)){if(!(a.FroalaEditor.NO_DELETE_TAGS.indexOf(e.nextSibling.tagName)<0))return;e=e.nextSibling,a(e.previousSibling).remove()}}else if(c(e)){if(g(d))b.cursorLists._del(d);else{var f=b.node.deepestParent(e);f&&(a(e).remove(),k(d))}return}var h;if(!b.node.isBlock(e)&&b.node.isEditable(e)){for(h=b.node.contents(e);e.nodeType!=Node.TEXT_NODE&&h.length&&b.node.isEditable(e);)e=h[0],h=b.node.contents(e);e.nodeType==Node.TEXT_NODE?(a(e).before(a.FroalaEditor.MARKERS),e.textContent.length&&55357==e.textContent.charCodeAt(0)?e.textContent=e.textContent.substring(2,e.textContent.length):e.textContent=e.textContent.substring(1,e.textContent.length)):b.events.trigger("node.remove",[a(e)])!==!1&&(a(e).before(a.FroalaEditor.MARKERS),a(e).remove()),a(d).remove()}else if(a.FroalaEditor.NO_DELETE_TAGS.indexOf(e.tagName)<0)if(b.node.isList(e))d.previousSibling?(a(e).find("li:first").prepend(d),b.cursorLists._backspace(d)):(a(e).find("li:first").prepend(a.FroalaEditor.MARKERS),a(d).remove());else if(h=b.node.contents(e),h&&"BR"==h[0].tagName&&a(h[0]).remove(),h&&"BLOCKQUOTE"==e.tagName){var i=h[0];for(a(d).before(a.FroalaEditor.MARKERS);i&&"BR"!=i.tagName;){var j=i;i=i.nextSibling,a(d).before(j)}i&&"BR"==i.tagName&&a(i).remove()}else a(d).after(a(e).html()).after(a.FroalaEditor.MARKERS),a(e).remove()}function m(){var e=b.markers.insert();if(!e)return!1;if(b.$el.get(0).normalize(),c(e))if(g(e))if(0===a(e).parents("li:first").find("ul, ol").length)b.cursorLists._del(e);else{var f=a(e).parents("li:first").find("ul:first, ol:first").find("li:first");f=f.find(b.html.blockTagsQuery()).get(-1)||f,f.prepend(e),b.cursorLists._backspace(e)}else k(e);else l(d(e)?e:e);a(e).remove(),b.$el.find("blockquote:empty").remove(),b.html.fillEmptyBlocks(!0),b.html.cleanEmptyTags(!0),b.clean.quotes(),b.clean.lists(),b.html.normalizeSpaces(),b.selection.restore()}function n(){b.$el.find(".fr-to-remove").each(function(){for(var c=b.node.contents(this),d=0;d<c.length;d++)c[d].nodeType==Node.TEXT_NODE&&(c[d].textContent=c[d].textContent.replace(/\u200B/g,""));a(this).replaceWith(this.innerHTML)})}function o(c,d,e){var g,h=b.node.deepestParent(c,[],!e);if(h&&"BLOCKQUOTE"==h.tagName)return f(c,h)?(g=b.html.defaultTag(),g?a(h).after("<"+g+">"+a.FroalaEditor.MARKERS+"<br></"+g+">"):a(h).after(a.FroalaEditor.MARKERS+"<br>"),a(c).remove(),!1):(q(c,d,e),!1);if(null==h)a(c).replaceWith("<br/>"+a.FroalaEditor.MARKERS+"<br/>");else{var i=c,j="";(!b.node.isBlock(h)||d)&&(j="<br/>");var k="",l="";g=b.html.defaultTag();var m="",n="";g&&b.node.isBlock(h)&&(m="<"+g+">",n="</"+g+">");do if(i=i.parentNode,!d||i!=h||d&&!b.node.isBlock(h))if(k+=b.node.closeTagString(i),i==h&&b.node.isBlock(h))l=m+l;else{var o="A"==i.tagName&&f(c,i)?"fr-to-remove":"";l=b.node.openTagString(a(i).clone().addClass(o).get(0))+l}while(i!=h);j=k+j+l+(c.parentNode==h&&b.node.isBlock(h)?"":a.FroalaEditor.INVISIBLE_SPACE)+a.FroalaEditor.MARKERS,b.node.isBlock(h)&&!a(h).find("*:last").is("br")&&a(h).append("<br/>"),a(c).after('<span id="fr-break"></span>'),a(c).remove(),h.nextSibling&&!b.node.isBlock(h.nextSibling)||b.node.isBlock(h)||a(h).after("<br>");var p;p=!d&&b.node.isBlock(h)?b.node.openTagString(h)+a(h).html()+n:b.node.openTagString(h)+a(h).html()+b.node.closeTagString(h),p=p.replace(/<span id="fr-break"><\/span>/g,j),a(h).replaceWith(p)}}function p(c,d,g){var h=b.node.deepestParent(c,[],!g);if(h&&"BLOCKQUOTE"==h.tagName){if(e(c,h)){var i=b.html.defaultTag();return i?a(h).before("<"+i+">"+a.FroalaEditor.MARKERS+"<br></"+i+">"):a(h).before(a.FroalaEditor.MARKERS+"<br>"),a(c).remove(),!1}f(c,h)?o(c,d,!0):q(c,d,!0)}if(null==h)a(c).replaceWith("<br>"+a.FroalaEditor.MARKERS);else{if(b.node.isBlock(h))if(d)a(c).remove(),a(h).prepend("<br>"+a.FroalaEditor.MARKERS);else{if(b.node.isEmpty(h,!0))return o(c,d,g);a(h).before(b.node.openTagString(h)+"<br>"+b.node.closeTagString(h))}else a(h).before("<br>");a(c).remove()}}function q(c,d,g){var h=b.node.deepestParent(c,[],!g);if(null==h)(!c.nextSibling||b.node.isBlock(c.nextSibling))&&a(c).after("<br>"),a(c).replaceWith("<br>"+a.FroalaEditor.MARKERS);else{var i=c,j="";"PRE"==h.tagName&&(d=!0),(!b.node.isBlock(h)||d)&&(j="<br>");var k="",l="";do{var m=i;if(i=i.parentNode,"BLOCKQUOTE"==h.tagName&&b.node.isEmpty(m)&&!a(m).hasClass("fr-marker")&&a(m).find(c).length>0&&a(m).after(c),("BLOCKQUOTE"!=h.tagName||!f(c,i)&&!e(c,i))&&(!d||i!=h||d&&!b.node.isBlock(h))){k+=b.node.closeTagString(i);var n="A"==i.tagName&&f(c,i)?"fr-to-remove":"";l=b.node.openTagString(a(i).clone().addClass(n).get(0))+l}}while(i!=h);var o=h==c.parentNode&&b.node.isBlock(h)||c.nextSibling;if("BLOCKQUOTE"==h.tagName){c.previousSibling&&b.node.isBlock(c.previousSibling)&&c.nextSibling&&"BR"==c.nextSibling.tagName&&(a(c.nextSibling).after(c),c.nextSibling&&"BR"==c.nextSibling.tagName&&a(c.nextSibling).remove());var p=b.html.defaultTag();j=k+j+(p?"<"+p+">":"")+a.FroalaEditor.MARKERS+"<br>"+(p?"</"+p+">":"")+l}else j=k+j+l+(o?"":a.FroalaEditor.INVISIBLE_SPACE)+a.FroalaEditor.MARKERS;a(c).replaceWith('<span id="fr-break"></span>');var q=b.node.openTagString(h)+a(h).html()+b.node.closeTagString(h);q=q.replace(/<span id="fr-break"><\/span>/g,j),a(h).replaceWith(q)}}function r(e){var f=b.markers.insert();if(!f)return!1;b.$el.get(0).normalize();var h=!1;a(f).parentsUntil(b.$el,"BLOCKQUOTE").length>0&&(e=!1,h=!0),a(f).parentsUntil(b.$el,"TD, TH").length&&(h=!1),c(f)?!g(f)||e||h?o(f,e,h):b.cursorLists._endEnter(f):d(f)?!g(f)||e||h?p(f,e,h):b.cursorLists._startEnter(f):!g(f)||e||h?q(f,e,h):b.cursorLists._middleEnter(f),n(),b.html.fillEmptyBlocks(!0),b.html.cleanEmptyTags(!0),b.clean.lists(),b.html.normalizeSpaces(),b.selection.restore()}return{enter:r,backspace:j,del:m,isAtEnd:f}},a.FroalaEditor.MODULES.data=function(a){function b(a){return a}function c(a){if(!a)return a;for(var c="",f=b("charCodeAt"),g=b("fromCharCode"),h=l.indexOf(a[0]),i=1;i<a.length-2;i++){for(var j=d(++h),k=a[f](i),m="";/[0-9-]/.test(a[i+1]);)m+=a[++i];m=parseInt(m,10)||0,k=e(k,j,m),k^=h-1&31,c+=String[g](k)}return c}function d(a){for(var b=a.toString(),c=0,d=0;d<b.length;d++)c+=parseInt(b.charAt(d),10);return c>10?c%9+1:c}function e(a,b,c){for(var d=Math.abs(c);d-- >0;)a-=b;return 0>c&&(a+=123),a}function f(a){return a&&"none"==a.css("display")?(a.remove(),!0):!1}function g(){return f(j)||f(k)}function h(){return a.$box?(a.$box.append(n(b(n("kTDD4spmKD1klaMB1C7A5RA1G3RA10YA5qhrjuvnmE1D3FD2bcG-7noHE6B2JB4C3xXA8WF6F-10RG2C3G3B-21zZE3C3H3xCA16NC4DC1f1hOF1MB3B-21whzQH5UA2WB10kc1C2F4D3XC2YD4D1C4F3GF2eJ2lfcD-13HF1IE1TC11TC7WE4TA4d1A2YA6XA4d1A3yCG2qmB-13GF4A1B1KH1HD2fzfbeQC3TD9VE4wd1H2A20A2B-22ujB3nBG2A13jBC10D3C2HD5D1H1KB11uD-16uWF2D4A3F-7C9D-17c1E4D4B3d1D2CA6B2B-13qlwzJF2NC2C-13E-11ND1A3xqUA8UE6bsrrF-7C-22ia1D2CF2H1E2akCD2OE1HH1dlKA6PA5jcyfzB-22cXB4f1C3qvdiC4gjGG2H2gklC3D-16wJC1UG4dgaWE2D5G4g1I2H3B7vkqrxH1H2EC9C3E4gdgzKF1OA1A5PF5C4WWC3VA6XA4e1E3YA2YA5HE4oGH4F2H2IB10D3D2NC5G1B1qWA9PD6PG5fQA13A10XA4C4A3e1H2BA17kC-22cmOB1lmoA2fyhcptwWA3RA8A-13xB-11nf1I3f1B7GB3aD3pavFC10D5gLF2OG1LSB2D9E7fQC1F4F3wpSB5XD3NkklhhaE-11naKA9BnIA6D1F5bQA3A10c1QC6Kjkvitc2B6BE3AF3E2DA6A4JD2IC1jgA-64MB11D6C4==")))),j=a.$box.find("> div:last"),k=j.find("> a"),void("rtl"==a.opts.direction&&j.css("left","auto").css("right",0))):!1}function i(){var c=a.opts.key||[""];"string"==typeof c&&(c=[c]),a.ul=!0;for(var d=0;d<c.length;d++){var e=n(c[d])||"";if(!(e!==n(b(n("mcVRDoB1BGILD7YFe1BTXBA7B6==")))&&e.indexOf(m,e.length-m.length)<0&&[n("9qqG-7amjlwq=="),n("KA3B3C2A6D1D5H5H1A3==")].indexOf(m)<0)){a.ul=!1;break}}a.ul===!0&&h(),a.events.on("contentChanged",function(){a.ul===!0&&g()&&h()})}var j,k,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=function(){for(var a=0,b=document.domain,c=b.split("."),d="_gd"+(new Date).getTime();a<c.length-1&&-1==document.cookie.indexOf(d+"="+d);)b=c.slice(-1-++a).join("."),document.cookie=d+"="+d+";domain="+b+";";return document.cookie=d+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+b+";",b}(),n=b(c);return{_init:i}},a.FroalaEditor.ENTER_P=0,a.FroalaEditor.ENTER_DIV=1,a.FroalaEditor.ENTER_BR=2,a.FroalaEditor.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221},a.extend(a.FroalaEditor.DEFAULTS,{enter:a.FroalaEditor.ENTER_P,multiLine:!0,tabSpaces:0}),a.FroalaEditor.MODULES.keys=function(b){function c(){b.helpers.isIOS()&&(b.events.disableBlur(),b.selection.save(),b.$el.blur(),b.selection.restore(),b.events.enableBlur())}function d(a){a.preventDefault(),a.stopPropagation(),b.opts.multiLine&&(b.selection.isCollapsed()||b.selection.remove(),b.cursor.enter()),c()}function e(a){a.preventDefault(),a.stopPropagation(),b.opts.multiLine&&(b.selection.isCollapsed()||b.selection.remove(),b.cursor.enter(!0))}function f(a){b.selection.isCollapsed()?b.cursor.backspace()||(a.preventDefault(),a.stopPropagation(),x=!1):(a.preventDefault(),a.stopPropagation(),b.selection.remove(),b.html.fillEmptyBlocks(!0),x=!1),b.placeholder.refresh()}function g(a){a.preventDefault(),a.stopPropagation(),""===b.selection.text()?b.cursor.del():b.selection.remove(),b.placeholder.refresh()}function h(c){if(b.browser.mozilla){c.preventDefault(),c.stopPropagation(),b.selection.isCollapsed()||b.selection.remove(),b.markers.insert();var d=b.$el.find(".fr-marker").get(0),e=d.previousSibling;e&&e.nodeType==Node.TEXT_NODE&&1==e.textContent.length&&160==e.textContent.charCodeAt(0)?a(e).after(" "):a(d).before("&nbsp;"),a(d).replaceWith(a.FroalaEditor.MARKERS),b.selection.restore()}}function i(){if(b.browser.mozilla&&b.selection.isCollapsed()&&!A){var a=b.selection.ranges(0),c=a.startContainer,d=a.startOffset;c&&c.nodeType==Node.TEXT_NODE&&d<=c.textContent.length&&d>0&&32==c.textContent.charCodeAt(d-1)&&(b.selection.save(),b.html.normalizeSpaces(),b.selection.restore())}}function j(){b.selection.isFull()&&setTimeout(function(){var c=b.html.defaultTag();c?b.$el.html("<"+c+">"+a.FroalaEditor.MARKERS+"<br/></"+c+">"):b.$el.html(a.FroalaEditor.MARKERS+"<br/>"),b.selection.restore(),b.placeholder.refresh(),b.button.bulkRefresh(),b.undo.saveStep()},0)}function k(a){if(b.opts.tabSpaces>0)if(b.selection.isCollapsed()){a.preventDefault(),a.stopPropagation();for(var c="",d=0;d<b.opts.tabSpaces;d++)c+="&nbsp;";b.html.insert(c),b.placeholder.refresh()}else a.preventDefault(),a.stopPropagation(),a.shiftKey?b.commands.outdent():b.commands.indent()}function l(a){A=!1}function m(){return A}function n(c){b.events.disableBlur(),x=!0;var i=c.which;if(229===i)return A=!0,!0;A=!1;var j=s(i)&&!r(c),l=i==a.FroalaEditor.KEYCODE.BACKSPACE||i==a.FroalaEditor.KEYCODE.DELETE;if(b.selection.isFull()&&!b.opts.keepFormatOnDelete||l&&b.placeholder.isVisible()&&b.opts.keepFormatOnDelete){if(j||l){var m=b.html.defaultTag();m?b.$el.html("<"+m+">"+a.FroalaEditor.MARKERS+"<br/></"+m+">"):b.$el.html(a.FroalaEditor.MARKERS+"<br/>")}b.selection.restore()}i==a.FroalaEditor.KEYCODE.ENTER?c.shiftKey?e(c):d(c):i!=a.FroalaEditor.KEYCODE.BACKSPACE||r(c)?i!=a.FroalaEditor.KEYCODE.DELETE||r(c)?i==a.FroalaEditor.KEYCODE.SPACE?h(c):i==a.FroalaEditor.KEYCODE.TAB?k(c):r(c)||!s(c.which)||b.selection.isCollapsed()||b.selection.remove():g(c):f(c),b.events.enableBlur()}function o(c){for(var d=0;d<c.length;d++)c[d].nodeType==Node.TEXT_NODE&&/\u200B/gi.test(c[d].textContent)?(c[d].textContent=c[d].textContent.replace(/\u200B/gi,""),0===c[d].textContent.length&&a(c[d]).remove()):c[d].nodeType==Node.ELEMENT_NODE&&"IFRAME"!=c[d].nodeType&&o(b.node.contents(c[d]))}function p(){var c;b.opts.height||b.opts.heightMax?(c=b.position.getBoundingRect().top,b.opts.iframe&&(c+=b.$iframe.offset().top),c>b.$wp.offset().top-a(b.original_window).scrollTop()+b.$wp.height()-20&&b.$wp.scrollTop(c+b.$wp.scrollTop()-(b.$wp.height()+b.$wp.offset().top)+a(b.original_window).scrollTop()+20)):(c=b.position.getBoundingRect().top,b.opts.iframe&&(c+=b.$iframe.offset().top),c>b.original_window.innerHeight-20&&a(b.original_window).scrollTop(c+a(b.original_window).scrollTop()-b.original_window.innerHeight+20),c=b.position.getBoundingRect().top,b.opts.iframe&&(c+=b.$iframe.offset().top),c<b.$tb.height()+20&&a(b.original_window).scrollTop(c+a(b.original_window).scrollTop()-b.$tb.height()-20))}function q(c){if(A)return!1;if(!b.selection.isCollapsed())return!1;!c||c.which!=a.FroalaEditor.KEYCODE.ENTER&&c.which!=a.FroalaEditor.KEYCODE.BACKSPACE||c.which==a.FroalaEditor.KEYCODE.BACKSPACE&&x||p();for(var d=b.$el.find(b.html.blockTagsQuery()).andSelf().not("TD, TH").find(" > br"),e=0;e<d.length;e++){var f=d[e],g=f.previousSibling,h=f.nextSibling,i=b.node.blockParent(f)||b.$el.get(0);g&&i&&"BR"!=g.tagName&&!b.node.isBlock(g)&&!h&&a(i).text().replace(/\u200B/g,"").length>0&&a(g).text().length>0&&(b.selection.save(),a(f).remove(),b.selection.restore())}var j=function(b){if(!b)return!1;var c=a(b).html();return c=c.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""),c&&/\u200B/.test(c)&&c.replace(/\u200B/gi,"").length>0?!0:!1},k=b.selection.element();j(k)&&0===a(k).find("li").length&&!a(k).hasClass("fr-marker")&&"IFRAME"!=k.tagName&&(b.selection.save(),o(b.node.contents(k)),b.selection.restore())}function r(a){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(a.metaKey&&!a.altKey)return!0}else if(a.ctrlKey&&!a.altKey)return!0;return!1}function s(c){if(c>=a.FroalaEditor.KEYCODE.ZERO&&c<=a.FroalaEditor.KEYCODE.NINE)return!0;if(c>=a.FroalaEditor.KEYCODE.NUM_ZERO&&c<=a.FroalaEditor.KEYCODE.NUM_MULTIPLY)return!0;if(c>=a.FroalaEditor.KEYCODE.A&&c<=a.FroalaEditor.KEYCODE.Z)return!0;if(b.browser.webkit&&0===c)return!0;switch(c){case a.FroalaEditor.KEYCODE.SPACE:case a.FroalaEditor.KEYCODE.QUESTION_MARK:case a.FroalaEditor.KEYCODE.NUM_PLUS:case a.FroalaEditor.KEYCODE.NUM_MINUS:case a.FroalaEditor.KEYCODE.NUM_PERIOD:case a.FroalaEditor.KEYCODE.NUM_DIVISION:case a.FroalaEditor.KEYCODE.SEMICOLON:case a.FroalaEditor.KEYCODE.FF_SEMICOLON:case a.FroalaEditor.KEYCODE.DASH:case a.FroalaEditor.KEYCODE.EQUALS:case a.FroalaEditor.KEYCODE.FF_EQUALS:case a.FroalaEditor.KEYCODE.COMMA:case a.FroalaEditor.KEYCODE.PERIOD:case a.FroalaEditor.KEYCODE.SLASH:case a.FroalaEditor.KEYCODE.APOSTROPHE:case a.FroalaEditor.KEYCODE.SINGLE_QUOTE:case a.FroalaEditor.KEYCODE.OPEN_SQUARE_BRACKET:case a.FroalaEditor.KEYCODE.BACKSLASH:case a.FroalaEditor.KEYCODE.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}function t(a){var c=a.which;return r(a)||c>=37&&40>=c?!0:(y||(z=b.snapshot.get()),clearTimeout(y),void(y=setTimeout(function(){y=null,b.undo.saveStep()},500)))}function u(a){return r(a)?!0:void(z&&y&&(b.undo.saveStep(z),z=null))}function v(){y&&(clearTimeout(y),b.undo.saveStep(),z=null)}function w(){if(b.events.on("keydown",t),b.events.on("input",i),b.events.on("keyup",u),b.events.on("keypress",l),b.events.on("keydown",n),b.events.on("keyup",q),b.events.on("html.inserted",q),b.events.on("cut",j),b.$el.get(0).msGetInputContext)try{b.$el.get(0).msGetInputContext().addEventListener("MSCandidateWindowShow",function(){A=!0}),b.$el.get(0).msGetInputContext().addEventListener("MSCandidateWindowHide",function(){A=!1,q()})}catch(a){}}var x,y,z,A=!1;return{_init:w,ctrlKey:r,isCharacter:s,forceUndo:v,isIME:m}},a.extend(a.FroalaEditor.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col"],pasteDeniedAttrs:["class","id","style"],pasteAllowLocalImages:!1}),a.FroalaEditor.MODULES.paste=function(b){function c(c){l=b.html.getSelected(),m=a("<div>").html(l).text(),"cut"==c.type&&(b.undo.saveStep(),setTimeout(function(){b.html.wrap(),b.events.focus(),b.undo.saveStep()},0))}function d(a){if(a.originalEvent&&(a=a.originalEvent),b.events.trigger("paste.before",[a])===!1)return!1;if(n=b.$window.scrollTop(),a&&a.clipboardData&&a.clipboardData.getData){var c="",d=a.clipboardData.types;if(b.helpers.isArray(d))for(var f=0;f<d.length;f++)c+=d[f]+";";else c=d;if(o="",/text\/html/.test(c)?o=a.clipboardData.getData("text/html"):/text\/rtf/.test(c)&&b.browser.safari?o=a.clipboardData.getData("text/rtf"):/text\/plain/.test(c)&&!this.browser.mozilla&&(o=b.html.escapeEntities(a.clipboardData.getData("text/plain")).replace(/\n/g,"<br>")),""!==o)return h(),a.preventDefault&&(a.stopPropagation(),a.preventDefault()),!1;o=null}e()}function e(){b.selection.save(),b.events.disableBlur(),o=null,p?p.html(""):(p=a('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; z-index: 9999; line-height: 140%;" tabindex="-1"></div>'),b.$box.after(p)),p.focus(),b.window.setTimeout(h,1)}function f(c){c=c.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>"),c=c.replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>"),c=c.replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>"),c=c.replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>"),c=c.replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),c=c.replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),c=c.replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>"),c=c.replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>"),c=c.replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span"),c=c.replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,""),c=c.replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,""),c=c.replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," "),c=c.replace(/<!--[\s\S]*?-->/gi,""),c=c.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");for(var d=["style","script","applet","embed","noframes","noscript"],e=0;e<d.length;e++){var f=new RegExp("<"+d[e]+".*?"+d[e]+"(.*?)>","gi");c=c.replace(f,"")}c=c.replace(/&nbsp;/gi," "),c=c.replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>"),c=c.replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");var g;do g=c,c=c.replace(/<[^\/>][^>]*><\/[^>]+>/gi,"");while(c!=g);c=c.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>'),c=c.replace(/<lilevel1([^>]*)>/gi,"<li$1>"),c=b.clean.html(c,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs),c=c.replace(/<a>(.[^<]+)<\/a>/gi,"$1");var h=a("<div>").html(c);return h.find("li[data-indent]").each(function(b,c){var d=a(c);if(d.prev("li").length>0){var e=d.prev("li").find("> ul, > ol");0===e.length&&(e=a("ul"),d.prev("li").append(e)),e.append(c)}else d.removeAttr("data-indent")}),c=h.html()}function g(c){var d=a("<div>").html(c);d.find("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote").each(function(c,d){a(d).replaceWith("<"+(b.html.defaultTag()||"DIV")+">"+a(d).html()+"</"+(b.html.defaultTag()||"DIV")+">")}),a(d.find("*").not("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br").get().reverse()).each(function(){a(this).replaceWith(a(this).html())});var e=function(c){for(var d=b.node.contents(c),f=0;f<d.length;f++)3!=d[f].nodeType&&1!=d[f].nodeType?a(d[f]).remove():e(d[f])};return e(d.get(0)),d.html()}function h(){b.keys.forceUndo();var c=b.snapshot.get();null===o&&(o=p.html(),b.selection.restore(),b.events.enableBlur());var d=b.events.chainTrigger("paste.beforeCleanup",o);if("string"==typeof d&&(o=d),o.indexOf("<body")>=0&&(o=o.replace(/[.\s\S\w\W<>]*<body[^>]*>([.\s\S\w\W<>]*)<\/body>[.\s\S\w\W<>]*/g,"$1")),o.match(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/gi)?(o=o.replace(/^\n*/g,"").replace(/^ /g,""),0===o.indexOf("<colgroup>")&&(o="<table>"+o+"</table>"),o=f(o),o=j(o)):(b.opts.htmlAllowComments=!1,o=b.clean.html(o,b.opts.pasteDeniedTags,b.opts.pasteDeniedAttrs),b.opts.htmlAllowComments=!0,o=j(o),o=o.replace(/\r|\n|\t/g,""),m&&a("<div>").html(o).text().replace(/(\u00A0)/gi," ").replace(/\r|\n/gi,"")==m.replace(/(\u00A0)/gi," ").replace(/\r|\n/gi,"")&&(o=l),o=o.replace(/^ */g,"").replace(/ *$/g,"")),b.opts.pastePlain&&(o=g(o)),d=b.events.chainTrigger("paste.afterCleanup",o),"string"==typeof d&&(o=d),""!==o){var e=a("<div>").html(o);b.html.cleanBlankSpaces(e.get(0)),b.html.normalizeSpaces(e.get(0)),o=e.html(),b.html.insert(o,!0)}i(),b.undo.saveStep(c),b.undo.saveStep()}function i(){b.events.trigger("paste.after")}function j(b){for(var c,d=a("<div>").html(b),e=d.find("*:empty:not(br, img, td, th)");e.length;){for(c=0;c<e.length;c++)a(e[c]).remove();e=d.find("*:empty:not(br, img, td, th)")}for(var f=d.find("> div:not([style]), td > div, th > div, li > div");f.length;){
var g=a(f[f.length-1]);g.replaceWith(g.html()+"<br>"),f=d.find("> div:not([style]), td > div, th > div, li > div")}for(f=d.find("div:not([style])");f.length;){for(c=0;c<f.length;c++){var h=a(f[c]),i=h.html().replace(/\u0009/gi,"").trim();h.replaceWith(i)}f=d.find("div:not([style])")}return d.html()}function k(){b.events.on("copy",c),b.events.on("cut",c),b.events.on("paste",d),b.events.on("beforepaste",d)}var l,m,n,o,p;return{_init:k}},a.FroalaEditor.MODULES.tooltip=function(b){function c(){b.$tooltip.removeClass("fr-visible").css("left","-3000px")}function d(c,d){if(c.data("title")||c.data("title",c.attr("title")),!c.data("title"))return!1;c.removeAttr("title"),b.$tooltip.text(c.data("title")),b.$tooltip.addClass("fr-visible");var e=c.offset().left+(c.outerWidth()-b.$tooltip.outerWidth())/2;0>e&&(e=0),e+b.$tooltip.outerWidth()>a(b.original_window).width()&&(e=a(b.original_window).width()-b.$tooltip.outerWidth()),b.$tooltip.css("left",e),"undefined"==typeof d&&(d=b.opts.toolbarBottom),b.$tooltip.css("top",d?c.offset().top-b.$tooltip.height():c.offset().top+c.outerHeight())}function e(e,f,g){b.helpers.isMobile()||(e.on("mouseenter",f,function(b){a(b.currentTarget).hasClass("fr-disabled")||d(a(b.currentTarget),g)}),e.on("mouseleave "+b._mousedown+" "+b._mouseup,f,function(a){c()})),b.events.on("destroy",function(){e.off("mouseleave "+b._mousedown+" "+b._mouseup,f),e.off("mouseenter",f)},!0)}function f(){b.helpers.isMobile()||(b.$tooltip=a('<div class="fr-tooltip"></div>'),b.opts.theme&&b.$tooltip.addClass(b.opts.theme+"-theme"),a(b.original_document).find("body").append(b.$tooltip),b.events.on("destroy",function(){b.$tooltip.html("").removeData().remove()},!0))}return{_init:f,hide:c,to:d,bind:e}},a.FroalaEditor.ICON_DEFAULT_TEMPLATE="font_awesome",a.FroalaEditor.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />"},a.FroalaEditor.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left"},redo:{NAME:"rotate-right"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},a.FroalaEditor.DefineIconTemplate=function(b,c){a.FroalaEditor.ICON_TEMPLATES[b]=c},a.FroalaEditor.DefineIcon=function(b,c){a.FroalaEditor.ICONS[b]=c},a.FroalaEditor.MODULES.icon=function(b){function c(b){var c=null,d=a.FroalaEditor.ICONS[b];if("undefined"!=typeof d){var e=d.template||a.FroalaEditor.ICON_DEFAULT_TEMPLATE;e&&(e=a.FroalaEditor.ICON_TEMPLATES[e])&&(c=e.replace(/\[([a-zA-Z]*)\]/g,function(a,c){return"NAME"==c?d[c]||b:d[c]}))}return c||b}return{create:c}},a.FroalaEditor.MODULES.button=function(b){function c(c){var d=a(c.currentTarget),e=d.next(),f=d.hasClass("fr-active"),g=(b.helpers.isMobile(),a(".fr-dropdown.fr-active").not(d));if(b.helpers.isIOS()&&0==b.$el.find(".fr-marker").length&&(b.selection.save(),b.selection.clear(),b.selection.restore()),!f){var h=d.data("cmd");e.find(".fr-command").removeClass("fr-active"),a.FroalaEditor.COMMANDS[h]&&a.FroalaEditor.COMMANDS[h].refreshOnShow&&a.FroalaEditor.COMMANDS[h].refreshOnShow.apply(b,[d,e]),e.css("left",d.offset().left-d.parent().offset().left-("rtl"==b.opts.direction?e.width()-d.outerWidth():0)),b.opts.toolbarBottom?e.css("bottom",b.$tb.height()-d.position().top):e.css("top",d.position().top+d.outerHeight())}d.addClass("fr-blink").toggleClass("fr-active"),setTimeout(function(){d.removeClass("fr-blink")},300),e.offset().left+e.outerWidth()>a(b.opts.scrollableContainer).offset().left+a(b.opts.scrollableContainer).outerWidth()&&e.css("margin-left",-(e.offset().left+e.outerWidth()-a(b.opts.scrollableContainer).offset().left-a(b.opts.scrollableContainer).outerWidth())),g.removeClass("fr-active")}function d(c){c.addClass("fr-blink"),setTimeout(function(){c.removeClass("fr-blink")},500);for(var d=c.data("cmd"),e=[];"undefined"!=typeof c.data("param"+(e.length+1));)e.push(c.data("param"+(e.length+1)));var f=a(".fr-dropdown.fr-active");f.length&&f.removeClass("fr-active"),b.commands.exec(d,e)}function e(b){var c=a(b.currentTarget);d(c)}function f(d){var f=a(d.currentTarget);0!=f.parents(".fr-popup").length||f.data("popup")||b.popups.hideAll(),f.hasClass("fr-dropdown")?c(d):(e(d),a.FroalaEditor.COMMANDS[f.data("cmd")]&&0!=a.FroalaEditor.COMMANDS[f.data("cmd")].refreshAfterCallback&&o())}function g(a){var b=a.find(".fr-dropdown.fr-active");b.length&&b.removeClass("fr-active")}function h(a){a.preventDefault(),a.stopPropagation()}function i(a){return a.stopPropagation(),b.opts.toolbarInline?!1:void 0}function j(c,d){b.events.bindClick(c,".fr-command:not(.fr-disabled)",f),c.on(b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu",h),c.on(b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu .fr-dropdown-wrapper",i);var e=c.get(0).ownerDocument,j="defaultView"in e?e.defaultView:e.parentWindow,k=function(d){(!d||d.type==b._mouseup&&d.target!=a("html").get(0)||"keydown"==d.type&&(b.keys.isCharacter(d.which)&&!b.keys.ctrlKey(d)||d.which==a.FroalaEditor.KEYCODE.ESC))&&g(c)};a(j).on(b._mouseup+".command"+b.id+" resize.command"+b.id+" keydown.command"+b.id,k),a.merge(q,c.find(".fr-btn").toArray()),b.tooltip.bind(c,".fr-btn, .fr-title",d),b.events.on("destroy",function(){c.off(b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu"),c.on(b._mousedown+" "+b._mouseup+" "+b._move,".fr-dropdown-menu .fr-dropdown-wrapper"),a(j).off(b._mouseup+".command"+b.id+" resize.command"+b.id+" keydown.command"+b.id)},!0)}function k(a,c){var d="";if(c.html)d+="function"==typeof c.html?c.html.call(b):c.html;else{var e=c.options;"function"==typeof e&&(e=e()),d+='<ul class="fr-dropdown-list">';for(var f in e)d+='<li><a class="fr-command" data-cmd="'+a+'" data-param1="'+f+'" title="'+e[f]+'">'+b.language.translate(e[f])+"</a></li>";d+="</ul>"}return d}function l(a,c,d){var e=c.displaySelection;"function"==typeof e&&(e=e(b));var f;if(e){var g="function"==typeof c.defaultSelection?c.defaultSelection(b):c.defaultSelection;f='<span style="width:'+(c.displaySelectionWidth||100)+'px">'+(g||b.language.translate(c.title))+"</span>"}else f=b.icon.create(c.icon||a);var h=c.popup?' data-popup="true"':"",i='<button type="button" tabindex="-1" title="'+(b.language.translate(c.title)||"")+'" class="fr-command fr-btn'+("dropdown"==c.type?" fr-dropdown":"")+(c.back?" fr-back":"")+(c.disabled?" fr-disabled":"")+(d?"":" fr-hidden")+'" data-cmd="'+a+'"'+h+">"+f+"</button>";if("dropdown"==c.type){var j='<div class="fr-dropdown-menu"><div class="fr-dropdown-wrapper"><div class="fr-dropdown-content" tabindex="-1">';j+=k(a,c),j+="</div></div></div>",i+=j}return i}function m(b,c){for(var d="",e=0;e<b.length;e++){var f=b[e],g=a.FroalaEditor.COMMANDS[f];if(g){var h="undefined"!=typeof c?c.indexOf(f)>=0:!0;d+=l(f,g,h)}else"|"==f?d+='<div class="fr-separator fr-vs"></div>':"-"==f&&(d+='<div class="fr-separator fr-hs"></div>')}return d}function n(c){var d,e=c.data("cmd");c.hasClass("fr-dropdown")?d=c.next():c.removeClass("fr-active"),a.FroalaEditor.COMMANDS[e]&&a.FroalaEditor.COMMANDS[e].refresh?a.FroalaEditor.COMMANDS[e].refresh.apply(b,[c,d]):b.refresh[e]?b.refresh[e](c,d):b.refresh["default"](c,e)}function o(){return 0==b.events.trigger("buttons.refresh")?!0:void setTimeout(function(){for(var c=b.selection.inEditor()&&b.core.hasFocus(),d=0;d<q.length;d++){var e=a(q[d]),f=e.data("cmd");0==e.parents(".fr-popup").length?c||a.FroalaEditor.COMMANDS[f]&&a.FroalaEditor.COMMANDS[f].forcedRefresh?n(e):e.hasClass("fr-dropdown")||e.removeClass("fr-active"):e.parents(".fr-popup").is(":visible")&&n(e)}},0)}function p(){b.events.on("mouseup",o),b.events.on("keyup",o),b.events.on("blur",o),b.events.on("focus",o),b.events.on("contentChanged",o)}var q=[];return{_init:p,buildList:m,bindCommands:j,refresh:n,bulkRefresh:o,exec:d}},a.FroalaEditor.MODULES.position=function(b){function c(){var c,d=b.selection.ranges(0);if(d&&d.collapsed&&b.selection.inEditor()){var e=!1;0==b.$el.find(".fr-marker").length&&(b.selection.save(),e=!0);var f=b.$el.find(".fr-marker:first");f.css("display","inline");var g=f.offset();f.css("display","none"),c={},c.left=g.left,c.width=0,c.height=parseInt(f.css("line-height"),10)||20,c.top=g.top-a(b.original_window).scrollTop(),c.right=1,c.bottom=1,c.ok=!0,e&&b.selection.restore()}else d&&(c=d.getBoundingClientRect());return c}function d(c,d,e){var f=c.outerHeight();if(!b.helpers.isMobile()&&b.$tb&&c.parent().get(0)!=b.$tb.get(0)){var g=(c.parent().height()-20-(b.opts.toolbarBottom?b.$tb.outerHeight():0),c.parent().offset().top),h=d-f-(e||0);c.parent().get(0)==a(b.opts.scrollableContainer).get(0)&&(g-=c.parent().position().top),g+d+f>a(b.original_document).outerHeight()&&c.parent().offset().top+h>0?(d=h,c.addClass("fr-above")):c.removeClass("fr-above")}return d}function e(c,d){var e=c.outerWidth();return c.parent().offset().left+d+e>a(b.opts.scrollableContainer).width()-10&&(d=a(b.opts.scrollableContainer).width()-e-10-c.parent().offset().left+a(b.opts.scrollableContainer).offset().left),c.parent().offset().left+d<a(b.opts.scrollableContainer).offset().left&&(d=10-c.parent().offset().left+a(b.opts.scrollableContainer).offset().left),d}function f(d){var e=c();d.css("top",0).css("left",0);var f=e.top+e.height,h=e.left+e.width/2-d.outerWidth()/2+a(b.original_window).scrollLeft();b.opts.iframe||(f+=a(b.original_window).scrollTop()),g(h,f,d,e.height)}function g(a,c,f,g){var h=f.data("container");h&&"BODY"!=h.get(0).tagName&&(a&&(a-=h.offset().left),c&&(c-=h.offset().top-h.scrollTop())),b.opts.iframe&&h&&b.$tb&&h.get(0)!=b.$tb.get(0)&&(a&&(a+=b.$iframe.offset().left),c&&(c+=b.$iframe.offset().top));var i=e(f,a);if(a){f.css("left",i);var j=f.find(".fr-arrow");j.data("margin-left")||j.data("margin-left",b.helpers.getPX(j.css("margin-left"))),j.css("margin-left",a-i+j.data("margin-left"))}c&&f.css("top",d(f,c,g))}function h(c){var d=a(c),e=d.parent(),f=d.is(".fr-sticky-on"),g=d.data("sticky-top"),h=d.data("sticky-scheduled");if("undefined"==typeof g&&(d.data("sticky-top",0),d.after('<div class="fr-sticky-dummy" style="height: '+d.outerHeight()+'px;"></div>'),d.data("sticky-dummy",d.next())),b.core.hasFocus()||b.$tb.find("input:visible:focus").length>0){var i=a(window).scrollTop(),j=Math.min(Math.max(i-e.offset().top,0),e.outerHeight()-d.outerHeight());j!=g&&j!=h&&(clearTimeout(d.data("sticky-timeout")),d.data("sticky-scheduled",j),d.outerHeight()<i-e.offset().top&&d.addClass("fr-opacity-0"),d.data("sticky-timeout",setTimeout(function(){var c=a(window).scrollTop(),f=Math.min(Math.max(c-e.offset().top,0),e.outerHeight()-d.outerHeight());f>0&&"BODY"==e.get(0).tagName&&(f+=e.position().top),f!=g&&(d.css("top",Math.max(f,0)),d.data("sticky-top",f),d.data("sticky-scheduled",f)),d.removeClass("fr-opacity-0"),b.$tb.hasClass("fr-inline")&&b.toolbar.show()},100))),f||(d.css("top",""),d.width(e.width()),d.addClass("fr-sticky-on"))}else clearTimeout(a(c).css("sticky-timeout")),d.css("top",""),d.css("position",""),d.width(""),d.data("sticky-top",0),d.removeClass("fr-sticky-on"),b.$tb.hasClass("fr-inline")&&b.toolbar.hide()}function i(c){if(c.offsetWidth){var d,e,f=a(c),g=f.outerHeight(),h=f.data("sticky-position"),i=a("body"==b.opts.scrollableContainer?b.original_window:b.opts.scrollableContainer).outerHeight(),j=0,k=0;"body"!==b.opts.scrollableContainer&&(j=a(b.opts.scrollableContainer).offset().top,k=a(b.original_window).outerHeight()-j-i);var l="body"==b.opts.scrollableContainer?a(b.original_window).scrollTop():j,m=f.is(".fr-sticky-on");f.data("sticky-parent")||f.data("sticky-parent",f.parent());var n=f.data("sticky-parent"),o=n.offset().top,p=n.outerHeight();if(f.data("sticky-offset")||(f.data("sticky-offset",!0),f.after('<div class="fr-sticky-dummy" style="height: '+g+'px;"></div>')),!h){var q="auto"!==f.css("top")||"auto"!==f.css("bottom");q||f.css("position","fixed"),h={top:"auto"!==f.css("top"),bottom:"auto"!==f.css("bottom")},q||f.css("position",""),f.data("sticky-position",h),f.data("top",f.css("top")),f.data("bottom",f.css("bottom"))}var r=function(){return l+d>o&&o+p-g>=l+d},s=function(){return l+i-e>o+g&&o+p>l+i-e};d=b.helpers.getPX(f.data("top")),e=b.helpers.getPX(f.data("bottom"));var t=h.top&&r(),u=h.bottom&&s();t||u?(f.css("width",n.width()+"px"),m||(f.addClass("fr-sticky-on"),f.removeClass("fr-sticky-off"),f.css("top")&&("auto"!=f.data("top")?f.css("top",b.helpers.getPX(f.data("top"))+j):f.data("top","auto")),f.css("bottom")&&("auto"!=f.data("bottom")?f.css("bottom",b.helpers.getPX(f.data("bottom"))+k):f.css("bottom","auto")))):f.hasClass("fr-sticky-off")||(f.width(""),f.removeClass("fr-sticky-on"),f.addClass("fr-sticky-off"),f.css("top")&&"auto"!=f.css("top")&&f.css("top",0),f.css("bottom")&&f.css("bottom",0))}}function j(){var a=document.createElement("test"),c=a.style;return c.cssText="position:"+["-webkit-","-moz-","-ms-","-o-",""].join("sticky; position:")+" sticky;",-1!==c.position.indexOf("sticky")&&!b.helpers.isIOS()&&!b.helpers.isAndroid()}function k(){if(!j())if(b._stickyElements=[],b.helpers.isIOS()){var c=function(){b.helpers.requestAnimationFrame()(c);for(var a=0;a<b._stickyElements.length;a++)h(b._stickyElements[a])};c(),a(b.original_window).on("scroll.sticky"+b.id,function(){if(b.core.hasFocus())for(var c=0;c<b._stickyElements.length;c++){var d=a(b._stickyElements[c]),e=d.parent(),f=a(window).scrollTop();d.outerHeight()<f-e.offset().top&&(d.addClass("fr-opacity-0"),d.data("sticky-top",-1),d.data("sticky-scheduled",-1))}})}else a("body"==b.opts.scrollableContainer?b.original_window:b.opts.scrollableContainer).on("scroll.sticky"+b.id,l),a(b.original_window).on("resize.sticky"+b.id,l),b.events.on("initialized",l),b.events.on("focus",l),a(b.original_window).on("resize","textarea",l)}function l(){for(var a=0;a<b._stickyElements.length;a++)i(b._stickyElements[a])}function m(a){a.addClass("fr-sticky"),b.helpers.isIOS()&&a.addClass("fr-sticky-ios"),j()||b._stickyElements.push(a.get(0))}function n(){a(b.original_window).off("scroll.sticky"+b.id),a(b.original_window).off("resize.sticky"+b.id)}function o(){k(),b.events.on("destroy",n,!0)}return{_init:o,forSelection:f,addSticky:m,refresh:l,at:g,getBoundingRect:c}},a.extend(a.FroalaEditor.DEFAULTS,{toolbarInline:!1,toolbarVisibleWithoutSelection:!0,toolbarSticky:!0,toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","fontFamily","fontSize","|","color","emoticons","inlineStyle","paragraphStyle","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertFile","insertTable","undo","redo","clearFormatting","selectAll","html"],toolbarButtonsXS:["bold","italic","fontFamily","fontSize","|","undo","redo"],toolbarButtonsSM:["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],toolbarButtonsMD:["fullscreen","bold","italic","underline","fontFamily","fontSize","color","paragraphStyle","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","insertHR","-","insertLink","insertImage","insertVideo","insertFile","insertTable","undo","redo","clearFormatting"],toolbarStickyOffset:0}),a.FroalaEditor.MODULES.toolbar=function(b){function c(a,b){for(var c=0;c<b.length;c++)"-"!=b[c]&&"|"!=b[c]&&a.indexOf(b[c])<0&&a.push(b[c])}function d(){var d=a.merge([],e());c(d,b.opts.toolbarButtonsXS||[]),c(d,b.opts.toolbarButtonsSM||[]),c(d,b.opts.toolbarButtonsMD||[]),c(d,b.opts.toolbarButtons);for(var f=d.length-1;f>=0;f--)"-"!=d[f]&&"|"!=d[f]&&d.indexOf(d[f])<f&&d.splice(f,1);var g=b.button.buildList(d,e());b.$tb.append(g),b.button.bindCommands(b.$tb)}function e(){var a=b.helpers.screenSize();return t[a]}function f(){var a=e();b.$tb.find(".fr-separator").remove(),b.$tb.find("> .fr-command").addClass("fr-hidden");for(var c=0;c<a.length;c++)if("|"==a[c]||"-"==a[c])b.$tb.append(b.button.buildList([a[c]]));else{var d=b.$tb.find('> .fr-command[data-cmd="'+a[c]+'"]'),f=null;d.next().hasClass("fr-dropdown-menu")&&(f=d.next()),d.removeClass("fr-hidden").appendTo(b.$tb),f&&f.appendTo(b.$tb)}}function g(){a(b.original_window).on("resize.buttons."+b.id,f),a(b.original_window).on("orientationchange.buttons."+b.id,f)}function h(c,d){b.helpers.isMobile()?b.toolbar.show():setTimeout(function(){if(c&&c.which==a.FroalaEditor.KEYCODE.ESC);else if(b.selection.inEditor()&&b.core.hasFocus()&&!b.popups.areVisible()&&(b.opts.toolbarVisibleWithoutSelection&&c&&"keyup"!=c.type||!b.selection.isCollapsed()&&!b.keys.isIME()||d)){if(0==b.events.trigger("toolbar.show"))return!1;b.helpers.isMobile()||b.position.forSelection(b.$tb),b.$tb.show()}},0)}function i(){return 0==b.events.trigger("toolbar.hide")?!1:void b.$tb.hide()}function j(){return 0==b.events.trigger("toolbar.show")?!1:void b.$tb.show()}function k(){b.events.on("window.mousedown",i),b.events.on("keydown",i),b.events.on("blur",i),b.events.on("window.mouseup",h),b.events.on("window.keyup",h),b.events.on("keydown",function(b){b&&b.which==a.FroalaEditor.KEYCODE.ESC&&i()}),b.$wp.on("scroll.toolbar",h),b.events.on("commands.after",h)}function l(){b.events.on("focus",h,!0),b.events.on("blur",i,!0)}function m(){b.opts.toolbarInline?(b.$box.addClass("fr-inline"),b.helpers.isMobile()?(b.helpers.isIOS()?(a("body").append(b.$tb),b.position.addSticky(b.$tb)):(b.$tb.addClass("fr-bottom"),b.$box.append(b.$tb),b.position.addSticky(b.$tb),b.opts.toolbarBottom=!0),b.$tb.addClass("fr-inline"),l(),b.opts.toolbarInline=!1):(a(b.opts.scrollableContainer).append(b.$tb),b.$tb.data("container",a(b.opts.scrollableContainer)),b.$tb.addClass("fr-inline"),b.$tb.prepend('<span class="fr-arrow"></span>'),k(),b.opts.toolbarBottom=!1)):(b.opts.toolbarBottom&&!b.helpers.isIOS()?(b.$box.append(b.$tb),b.$tb.addClass("fr-bottom"),b.$box.addClass("fr-bottom")):(b.opts.toolbarBottom=!1,b.$box.prepend(b.$tb),b.$tb.addClass("fr-top"),b.$box.addClass("fr-top")),b.$box.addClass("fr-basic"),b.$tb.addClass("fr-basic"),b.opts.toolbarSticky&&(b.opts.toolbarStickyOffset&&(b.opts.toolbarBottom?b.$tb.css("bottom",b.opts.toolbarStickyOffset):b.$tb.css("top",b.opts.toolbarStickyOffset)),b.position.addSticky(b.$tb)))}function n(){a(b.original_window).off("resize.buttons."+b.id),a(b.original_window).off("orientationchange.buttons."+b.id),b.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),b.$box.find(".fr-sticky-dummy").remove(),b.$tb.off(b._mousedown+" "+b._mouseup),b.$tb.html("").removeData().remove()}function o(){return b.$wp?(b.$tb=a('<div class="fr-toolbar"></div>'),b.opts.theme&&b.$tb.addClass(b.opts.theme+"-theme"),b.opts.zIndex>1&&b.$tb.css("z-index",b.opts.zIndex+1),"auto"!=b.opts.direction&&b.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),b.helpers.isMobile()?b.$tb.addClass("fr-mobile"):b.$tb.addClass("fr-desktop"),m(),r=b.$tb.get(0).ownerDocument,s="defaultView"in r?r.defaultView:r.parentWindow,d(),g(),b.$tb.on(b._mousedown+" "+b._mouseup,function(a){var b=a.originalEvent?a.originalEvent.target||a.originalEvent.originalTarget:null;return b&&"INPUT"!=b.tagName?(a.stopPropagation(),a.preventDefault(),!1):void 0}),void b.events.on("destroy",n,!0)):!1}function p(){!u&&b.$tb&&(b.$tb.find("> .fr-command").addClass("fr-disabled fr-no-refresh"),u=!0)}function q(){u&&b.$tb&&(b.$tb.find("> .fr-command").removeClass("fr-disabled fr-no-refresh"),u=!1),b.button.bulkRefresh()}var r,s,t=[];t[a.FroalaEditor.XS]=b.opts.toolbarButtonsXS||b.opts.toolbarButtons,t[a.FroalaEditor.SM]=b.opts.toolbarButtonsSM||b.opts.toolbarButtons,t[a.FroalaEditor.MD]=b.opts.toolbarButtonsMD||b.opts.toolbarButtons,t[a.FroalaEditor.LG]=b.opts.toolbarButtons;var u=!1;return{_init:o,hide:i,show:j,showInline:h,disable:p,enable:q}},a.FroalaEditor.SHORTCUTS_MAP={69:{cmd:"show"},66:{cmd:"bold"},73:{cmd:"italic"},85:{cmd:"underline"},83:{cmd:"strikeThrough"},221:{cmd:"indent"},219:{cmd:"outdent"},90:{cmd:"undo"},"-90":{cmd:"redo"}},a.extend(a.FroalaEditor.DEFAULTS,{shortcutsEnabled:["show","bold","italic","underline","strikeThrough","indent","outdent","undo","redo"]}),a.FroalaEditor.RegisterShortcut=function(b,c,d,e){a.FroalaEditor.SHORTCUTS_MAP[b*(e?-1:1)]={cmd:c,val:d},a.FroalaEditor.DEFAULTS.shortcutsEnabled.push(c)},a.FroalaEditor.MODULES.shortcuts=function(b){function c(c){var d=c.which;if(b.keys.ctrlKey(c)&&(c.shiftKey&&a.FroalaEditor.SHORTCUTS_MAP[-d]||!c.shiftKey&&a.FroalaEditor.SHORTCUTS_MAP[d])){var e=a.FroalaEditor.SHORTCUTS_MAP[d*(c.shiftKey?-1:1)].cmd;if(e&&b.opts.shortcutsEnabled.indexOf(e)>=0){var f,g=a.FroalaEditor.SHORTCUTS_MAP[d*(c.shiftKey?-1:1)].val;if(e&&!g?f=b.$tb.find('.fr-command[data-cmd="'+e+'"]'):e&&g&&(f=b.$tb.find('.fr-command[data-cmd="'+e+'"][data-param0="'+g+'"]')),f.length)return c.preventDefault(),c.stopPropagation(),"keydown"==c.type&&b.button.exec(f),!1;if(e&&b.commands[e])return c.preventDefault(),c.stopPropagation(),"keydown"==c.type&&b.commands[e](),!1}}}function d(){b.events.on("keydown",c,!0),b.events.on("keyup",c,!0)}return{_init:d}},a.FroalaEditor.MODULES.snapshot=function(a){function b(a){for(var b=a.parentNode.childNodes,c=0,d=null,e=0;e<b.length;e++){if(d){var f=b[e].nodeType===Node.TEXT_NODE&&""===b[e].textContent,g=d.nodeType===Node.TEXT_NODE&&b[e].nodeType===Node.TEXT_NODE;f||g||c++}if(b[e]==a)return c;d=b[e]}}function c(c){var d=[];if(!c.parentNode)return[];for(;!a.node.isElement(c);)d.push(b(c)),c=c.parentNode;return d.reverse()}function d(a,b){for(;a&&a.nodeType===Node.TEXT_NODE;){var c=a.previousSibling;c&&c.nodeType==Node.TEXT_NODE&&(b+=c.textContent.length),a=c}return b}function e(a){return{scLoc:c(a.startContainer),scOffset:d(a.startContainer,a.startOffset),ecLoc:c(a.endContainer),ecOffset:d(a.endContainer,a.endOffset)}}function f(){var b={};if(a.events.trigger("snapshot.before"),b.html=a.$el.html(),b.ranges=[],a.selection.inEditor()&&a.core.hasFocus())for(var c=a.selection.ranges(),d=0;d<c.length;d++)b.ranges.push(e(c[d]));return a.events.trigger("snapshot.after"),b}function g(b){for(var c=a.$el.get(0),d=0;d<b.length;d++)c=c.childNodes[b[d]];return c}function h(b,c){try{var d=g(c.scLoc),e=c.scOffset,f=g(c.ecLoc),h=c.ecOffset,i=a.document.createRange();i.setStart(d,e),i.setEnd(f,h),b.addRange(i)}catch(j){}}function i(b){a.$el.html()!=b.html&&a.$el.html(b.html);var c=a.selection.get();a.selection.clear(),a.events.focus(!0);for(var d=0;d<b.ranges.length;d++)h(c,b.ranges[d])}function j(a,b){return a.html!=b.html?!1:JSON.stringify(a.ranges)!=JSON.stringify(b.ranges)?!1:!0}return{get:f,restore:i,equal:j}},a.FroalaEditor.MODULES.undo=function(a){function b(b){var c=b.which,d=a.keys.ctrlKey(b);d&&(90==c&&b.shiftKey&&b.preventDefault(),90==c&&b.preventDefault())}function c(){return 0===a.undo_stack.length||a.undo_index<=1?!1:!0}function d(){return a.undo_index==a.undo_stack.length?!1:!0}function e(b){if(!a.undo_stack||a.undoing)return!1;for(;a.undo_stack.length>a.undo_index;)a.undo_stack.pop();"undefined"==typeof b?(b=a.snapshot.get(),a.undo_stack[a.undo_index-1]&&a.snapshot.equal(a.undo_stack[a.undo_index-1],b)||(a.undo_stack.push(b),a.undo_index++,b.html!=j&&(a.events.trigger("contentChanged"),j=b.html))):a.undo_index>0?a.undo_stack[a.undo_index-1]=b:(a.undo_stack.push(b),a.undo_index++)}function f(){if(a.undo_index>1){a.undoing=!0;var b=a.undo_stack[--a.undo_index-1];clearTimeout(a._content_changed_timer),a.snapshot.restore(b),a.popups.hideAll(),a.toolbar.enable(),a.events.trigger("contentChanged"),a.events.trigger("commands.undo"),a.undoing=!1}}function g(){if(a.undo_index<a.undo_stack.length){a.undoing=!0;var b=a.undo_stack[a.undo_index++];clearTimeout(a._content_changed_timer),a.snapshot.restore(b),a.popups.hideAll(),a.toolbar.enable(),a.events.trigger("contentChanged"),a.events.trigger("commands.redo"),a.undoing=!1}}function h(){a.undo_index=0,a.undo_stack=[]}function i(){h(),a.events.on("initialized",function(){j=a.html.get(!1,!0)}),a.events.on("keydown",b)}var j=null;return{_init:i,run:f,redo:g,canDo:c,canRedo:d,reset:h,saveStep:e}},a.FroalaEditor.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},a.FroalaEditor.RegisterTemplate=function(b,c){a.FroalaEditor.POPUP_TEMPLATES[b]=c},a.FroalaEditor.MODULES.popups=function(b){function c(a,b){t[a].data("container",b),b.append(t[a])}function d(d,e,h,i){if(g()&&b.$el.find(".fr-marker").length>0&&(b.events.disableBlur(),b.selection.restore()),m([d]),!t[d])return!1;var j=t[d].outerWidth(),k=(t[d].outerHeight(),f(d));t[d].addClass("fr-active").find("input, textarea").removeAttr("disabled");var l=t[d].data("container");b.opts.toolbarInline&&l&&b.$tb&&l.get(0)==b.$tb.get(0)&&(c(d,b.opts.toolbarInline?a(b.opts.scrollableContainer):b.$box),h&&(h=b.$tb.offset().top-b.helpers.getPX(b.$tb.css("margin-top"))),e&&(e=b.$tb.offset().left+b.$tb.width()/2),b.$tb.hasClass("fr-above")&&(h+=b.$tb.outerHeight()),i=0),l=t[d].data("container"),!b.opts.iframe||i||k||(e&&(e-=b.$iframe.offset().left),h&&(h-=b.$iframe.offset().top)),e&&(e-=j/2),b.opts.toolbarBottom&&l&&b.$tb&&l.get(0)==b.$tb.get(0)&&(t[d].addClass("fr-above"),h-=t[d].outerHeight()),b.position.at(e,h,t[d],i||0);var n=t[d].find("input:visible, textarea:visible").get(0);n&&(0==b.$el.find(".fr-marker").length&&b.core.hasFocus()&&b.selection.save(),b.events.disableBlur(),a(n).select().focus()),b.opts.toolbarInline&&!b.helpers.isMobile()&&b.toolbar.hide(),b.events.trigger("popups.show."+d)}function e(a,c){b.events.on("popups.show."+a,c)}function f(a){return t[a]&&t[a].hasClass("fr-active")||!1}function g(){for(var a in t)if(f(a))return!0;return!1}function h(a){t[a]&&t[a].hasClass("fr-active")&&(t[a].removeClass("fr-active fr-above"),b.events.trigger("popups.hide."+a),b.events.disableBlur(),t[a].find("input, textarea, button").filter(":focus").blur(),t[a].find("input, textarea").attr("disabled","disabled"))}function i(a,c){b.events.on("popups.hide."+a,c)}function j(a){return t[a]}function k(a,c){b.events.on("popups.refresh."+a,c)}function l(c){b.events.trigger("popups.refresh."+c);for(var d=t[c].find(".fr-command"),e=0;e<d.length;e++){var f=a(d[e]);0==f.parents(".fr-dropdown-menu").length&&b.button.refresh(f)}}function m(a){"undefined"==typeof a&&(a=[]);for(var b in t)a.indexOf(b)<0&&h(b)}function n(){u=!0}function o(){u=!1}function p(c,d){var e=a.FroalaEditor.POPUP_TEMPLATES[c];"function"==typeof e&&(e=e.apply(b));for(var f in d)e=e.replace("[_"+f.toUpperCase()+"_]",d[f]);return e}function q(c,d){var e=p(c,d),g=a('<div class="fr-popup'+(b.helpers.isMobile()?" fr-mobile":" fr-desktop")+(b.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+e+"</div>");b.opts.theme&&g.addClass(b.opts.theme+"-theme"),b.opts.zIndex>1&&b.$tb.css("z-index",b.opts.zIndex+2),"auto"!=b.opts.direction&&g.removeClass("fr-ltr fr-rtl").addClass("fr-"+b.opts.direction),g.find("input, textarea").attr("dir",b.opts.direction).attr("disabled","disabled");var i=a("body");return i.append(g),g.data("container",i),t[c]=g,b.button.bindCommands(g,!1),a(b.original_window).on("resize.popups"+b.id,function(){b.helpers.isMobile()||(b.events.disableBlur(),h(c),b.events.enableBlur())}),g.on(b._mousedown+" "+b._mouseup,function(a){var b=a.originalEvent?a.originalEvent.target||a.originalEvent.originalTarget:null;return b&&"INPUT"!=b.tagName?(a.preventDefault(),a.stopPropagation(),!1):void a.stopPropagation()}),g.on("focus","input, textarea, button, select",function(c){if(c.preventDefault(),c.stopPropagation(),setTimeout(function(){b.events.enableBlur()},0),b.helpers.isMobile()){var d=a(b.original_window).scrollTop();setTimeout(function(){a(b.original_window).scrollTop(d)},0)}}),g.on("keydown","input, textarea, button, select",function(d){var e=d.which;if(a.FroalaEditor.KEYCODE.TAB==e){d.preventDefault();var i=g.find("input, textarea, button, select").filter(":visible").not(":disabled").toArray();i.sort(function(b,c){return d.shiftKey?a(b).attr("tabIndex")<a(c).attr("tabIndex"):a(b).attr("tabIndex")>a(c).attr("tabIndex")}),b.events.disableBlur();var j=i.indexOf(this)+1;j==i.length&&(j=0),a(i[j]).focus()}if(a.FroalaEditor.KEYCODE.ENTER==e)g.find(".fr-submit:visible").length>0&&(d.preventDefault(),d.stopPropagation(),b.events.disableBlur(),b.button.exec(g.find(".fr-submit:visible:first")));else{if(a.FroalaEditor.KEYCODE.ESC==e)return d.preventDefault(),d.stopPropagation(),b.$el.find(".fr-marker")&&(b.events.disableBlur(),a(this).data("skip",!0),b.selection.restore(),b.events.enableBlur()),f(c)&&g.find(".fr-back:visible").length?b.button.exec(g.find(".fr-back:visible:first")):h(c),b.opts.toolbarInline&&b.toolbar.showInline(null,!0),!1;d.stopPropagation()}}),b.events.on("window.keydown",function(d){var e=d.which;if(a.FroalaEditor.KEYCODE.ESC==e){if(f(c)&&b.opts.toolbarInline)return d.stopPropagation(),f(c)&&g.find(".fr-back:visible").length?b.button.exec(g.find(".fr-back:visible:first")):(h(c),b.toolbar.showInline(null,!0)),!1;f(c)&&g.find(".fr-back:visible").length?b.button.exec(g.find(".fr-back:visible:first")):h(c)}}),b.$wp&&(b.events.on("keydown",function(d){b.keys.ctrlKey(d)||d.which==a.FroalaEditor.KEYCODE.ESC||(f(c)&&g.find(".fr-back:visible").length?b.button.exec(g.find(".fr-back:visible:first")):h(c))}),g.on("blur","input, textarea, button, select",function(c){document.activeElement!=this&&a(this).is(":visible")&&(b.events.blurActive()&&b.events.trigger("blur"),b.events.enableBlur())})),g.on("mousedown touchstart touch","*",function(a){["INPUT","TEXTAREA","BUTTON","SELECT","LABEL"].indexOf(a.currentTarget.tagName)>=0&&a.stopPropagation(),b.events.disableBlur()}),b.events.on("mouseup",function(a){g.is(":visible")&&u&&g.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length>0&&b.events.disableBlur()},!0),b.events.on("window.mouseup",function(a){g.is(":visible")&&u&&(a.stopPropagation(),b.markers.remove(),h(c))},!0),b.events.on("blur",function(a){m()}),g.on("keydown keyup change input","input, textarea",function(b){var c=a(this).next();0==c.length&&a(this).after("<span>"+a(this).attr("placeholder")+"</span>"),a(this).toggleClass("fr-not-empty",""!=a(this).val())}),b.$wp&&!b.helpers.isMobile()&&b.$wp.on("scroll.popup"+c,function(d){if(f(c)&&g.parent().get(0)==a(b.opts.scrollableContainer).get(0)){var e=g.offset().top-b.$wp.offset().top,h=(b.$wp.scrollTop(),b.$wp.outerHeight());e>h||0>e?g.addClass("fr-hidden"):g.removeClass("fr-hidden")}}),b.helpers.isIOS()&&g.on("touchend","label",function(){a("#"+a(this).attr("for")).prop("checked",function(a,b){return!b})}),g}function r(){for(var c in t){var d=t[c];d.off("mousedown mouseup touchstart touchend"),d.off("focus","input, textarea, button, select"),d.off("keydown","input, textarea, button, select"),d.off("blur","input, textarea, button, select"),d.off("keydown keyup change","input, textarea"),d.off(b._mousedown,"*"),d.html("").removeData().remove(),a(b.original_window).off("resize.popups"+b.id),b.$wp&&b.$wp.off("scroll.popup"+c)}}function s(){b.events.on("destroy",r,!0),b.events.on("window.mousedown",n),b.events.on("window.touchmove",o),b.events.on("mousedown",function(a){g()&&b.$el.find(".fr-marker").remove()}),b.events.on("window.mouseup",function(){u=!1})}var t={},u=!1;return{_init:s,create:q,get:j,show:d,hide:h,onHide:i,hideAll:m,setContainer:c,refresh:l,onRefresh:k,onShow:e,isVisible:f,areVisible:g}},a.FroalaEditor.MODULES.refresh=function(b){function c(a,c){try{b.document.queryCommandState(c)===!0&&a.addClass("fr-active")}catch(d){}}function d(a){a.toggleClass("fr-disabled",!b.undo.canDo())}function e(a){a.toggleClass("fr-disabled",!b.undo.canRedo())}function f(a){if(a.hasClass("fr-no-refresh"))return!1;for(var c=b.selection.blocks(),d=0;d<c.length;d++){if("LI"!=c[d].tagName||c[d].previousSibling)return a.removeClass("fr-disabled"),!0;a.addClass("fr-disabled")}}function g(c){if(c.hasClass("fr-no-refresh"))return!1;for(var d=b.selection.blocks(),e=0;e<d.length;e++){var f="rtl"==b.opts.direction||"rtl"==a(d[e]).css("direction")?"margin-right":"margin-left";if("LI"==d[e].tagName||"LI"==d[e].parentNode.tagName)return c.removeClass("fr-disabled"),
!0;if(b.helpers.getPX(a(d[e]).css(f))>0)return c.removeClass("fr-disabled"),!0}c.addClass("fr-disabled")}return{"default":c,undo:d,redo:e,outdent:g,indent:f}},a.extend(a.FroalaEditor.DEFAULTS,{editInPopup:!1}),a.FroalaEditor.MODULES.textEdit=function(b){function c(){var a='<div id="fr-text-edit-'+b.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+b.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+b.language.translate("Update")+"</button></div></div>",c={edit:a};b.popups.create("text.edit",c)}function d(){var c=b.popups.get("text.edit");c.find("input").val(b.$el.text()).trigger("change"),b.popups.setContainer("text.edit",a("body")),b.popups.show("text.edit",b.$el.offset().left+b.$el.outerWidth()/2,b.$el.offset().top+b.$el.outerHeight(),b.$el.outerHeight())}function e(){b.$el.on(b._mouseup,function(a){setTimeout(function(){d()},10)})}function f(){var a=b.popups.get("text.edit");b.$el.text(a.find("input").val()),b.events.trigger("contentChanged"),b.popups.hide("text.edit")}function g(){b.opts.editInPopup&&(c(),e())}return{_init:g,update:f}},a.FroalaEditor.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}})});
},{"jquery":17}],11:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.extend(a.FroalaEditor.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FroalaEditor.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUploadURL:"http://i.froala.com/upload",imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif","svg+xml"],imageResize:!0,imageResizeWithPercent:!1,imageMove:!0,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered"},imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0}),a.FroalaEditor.PLUGINS.image=function(b){function c(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val(""),ha&&c.val(ha.attr("src")),c.trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertImage"]'),c=b.popups.get("image.insert");if(c||(c=E()),r(),!c.hasClass("fr-active"))if(b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",b.$tb),a.is(":visible")){var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("image.insert",d,e,a.outerHeight())}else b.position.forSelection(c),b.popups.show("image.insert")}function e(){var c=b.popups.get("image.edit");c||(c=p()),b.popups.setContainer("image.edit",a(b.opts.scrollableContainer)),b.popups.refresh("image.edit");var d=ha.offset().left+ha.outerWidth()/2,e=ha.offset().top+ha.outerHeight();b.popups.show("image.edit",d,e,ha.outerHeight())}function f(){r()}function g(a){if(!a.hasClass("fr-dii")&&!a.hasClass("fr-dib")){var c=a.css("float");a.css("float","none"),"block"==a.css("display")?(a.css("float",c),0===parseInt(a.css("margin-left"),10)&&(a.attr("style")||"").indexOf("margin-right: auto")>=0?a.addClass("fr-fil"):0===parseInt(a.css("margin-right"),10)&&(a.attr("style")||"").indexOf("margin-left: auto")>=0&&a.addClass("fr-fir"),a.addClass("fr-dib")):(a.css("float",c),"left"==a.css("float")?a.addClass("fr-fil"):"right"==a.css("float")&&a.addClass("fr-fir"),a.addClass("fr-dii")),a.css("margin",""),a.css("float",""),a.css("display",""),a.css("z-index",""),a.css("position",""),a.css("overflow",""),a.css("vertical-align","")}a.attr("width")&&(a.css("width",a.width()),a.removeAttr("width")),b.opts.imageTextNear||a.removeClass("fr-dii").addClass("fr-dib")}function h(){for(var c="IMG"==b.$el.get(0).tagName?[b.$el.get(0)]:b.$el.get(0).querySelectorAll("img"),d=0;d<c.length;d++)g(a(c[d])),b.opts.iframe&&a(c[d]).on("load",b.size.syncIframe)}function i(){var c,d=Array.prototype.slice.call(b.$el.get(0).querySelectorAll("img")),e=[];for(c=0;c<d.length;c++)e.push(d[c].getAttribute("src"));if(ta)for(c=0;c<ta.length;c++)e.indexOf(ta[c].getAttribute("src"))<0&&b.events.trigger("image.removed",[a(ta[c])]);ta=d}function j(){ia||Q();var a=b.$wp?b.$wp.scrollTop()-(b.$wp.offset().top+1):-1,c=b.$wp?b.$wp.scrollLeft()-(b.$wp.offset().left+1):-1;b.$wp&&(c-=b.helpers.getPX(b.$wp.css("border-left-width"))),ia.css("top",b.opts.iframe?ha.offset().top-1:ha.offset().top+a).css("left",b.opts.iframe?ha.offset().left-1:ha.offset().left+c).css("width",ha.outerWidth()).css("height",ha.outerHeight()).addClass("fr-active")}function k(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function l(c){c.preventDefault(),c.stopPropagation(),ja=a(this),ja.data("start-x",c.pageX||c.originalEvent.touches[0].pageX),ka.show(),b.popups.hideAll()}function m(c){if(ja){c.preventDefault();var d=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null);if(!d)return!1;var e=ja.data("start-x");ja.data("start-x",d);var f=d-e,g=ha.width();if((ja.hasClass("fr-hnw")||ja.hasClass("fr-hsw"))&&(f=0-f),b.opts.imageResizeWithPercent){var h=ha.parentsUntil(b.$el,b.html.blockTagsQuery()).get(0);ha.css("width",((g+f)/a(h).outerWidth()*100).toFixed(2)+"%")}else ha.css("width",g+f);ha.css("height","").removeAttr("height"),j(),b.events.trigger("image.resize",[fa()])}}function n(a){ja&&(a&&a.stopPropagation(),ja=null,ka.hide(),j(),e(),b.undo.saveStep(),b.events.trigger("image.resizeEnd",[fa()]))}function o(a,c){b.edit.on(),t(b.language.translate("Something went wrong. Please try again.")),b.events.trigger("image.error",[{code:a,message:sa[a]},c])}function p(){var a="";b.opts.imageEditButtons.length>1&&(a+='<div class="fr-buttons">',a+=b.button.buildList(b.opts.imageEditButtons),a+="</div>");var c={buttons:a},d=b.popups.create("image.edit",c);return b.$wp&&(b.$wp.on("scroll.image-edit",function(){ha&&b.popups.isVisible("image.edit")&&e()}),b.events.on("destroy",function(){b.$wp.off("scroll.image-edit")})),d}function q(){var a=b.popups.get("image.insert");a&&(a.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),a.find(".fr-image-progress-bar-layer").addClass("fr-active"),a.find(".fr-buttons").hide(),s("Uploading",0))}function r(a){var c=b.popups.get("image.insert");c&&(c.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),c.find(".fr-image-progress-bar-layer").removeClass("fr-active"),c.find(".fr-buttons").show(),a&&b.popups.show("image.insert",null,null))}function s(a,c){var d=b.popups.get("image.insert");if(d){var e=d.find(".fr-image-progress-bar-layer");e.find("h3").text(a+(c?" "+c+"%":"")),e.removeClass("fr-error"),c?(e.find("div").removeClass("fr-indeterminate"),e.find("div > span").css("width",c+"%")):e.find("div").addClass("fr-indeterminate")}}function t(a){var c=b.popups.get("image.insert"),d=c.find(".fr-image-progress-bar-layer");d.addClass("fr-error"),d.find("h3").text(a)}function u(){var a=b.popups.get("image.insert"),c=a.find(".fr-image-by-url-layer input");c.val().length>0&&(q(),s("Loading image"),v(b.helpers.sanitizeURL(c.val()),!0,[],ha),c.val(""),c.blur())}function v(c,d,e,f,g){b.edit.off(),s("Loading image");var h=new Image;h.onload=function(){var d,h;if(f){d=f.clone(),f.replaceWith(d),d.off("load");for(var i=d.get(0).attributes,j=0;j<i.length;j++){var k=i[j];0===k.nodeName.indexOf("data-")&&d.removeAttr(k.nodeName)}if("undefined"!=typeof e)for(h in e)"link"!=h&&d.attr("data-"+h,e[h]);d.on("load",function(){b.popups.hide("image.insert"),d.trigger("click").trigger("touchend"),b.events.trigger("image.loaded",[d])}),d.attr("src",c),b.edit.on(),b.undo.saveStep(),b.events.trigger("image.replaced",[d,g])}else{var l="";if("undefined"!=typeof e)for(h in e)"link"!=h&&(l+=" data-"+h+'="'+e[h]+'"');var m=b.opts.imageDefaultWidth;m&&"auto"!=m&&(""+m).indexOf("px")<0&&(""+m).indexOf("%")<0&&(m+="px"),d=a('<img class="fr-di'+b.opts.imageDefaultDisplay[0]+("center"!=b.opts.imageDefaultAlign?" fr-fi"+b.opts.imageDefaultAlign[0]:"")+'" src="'+c+'"'+l+(m?' style="width: '+m+';"':"")+">"),d.on("load",function(){d.trigger("click").trigger("touchend"),b.events.trigger("image.loaded",[d])}),b.edit.on(),b.events.focus(!0),b.selection.restore(),b.selection.isCollapsed()||b.selection.remove(),b.markers.insert();var n=b.$el.find(".fr-marker");n.replaceWith(d),b.selection.clear(),b.undo.saveStep(),b.events.trigger("image.inserted",[d,g])}},h.onerror=function(){o(la)},h.src=c}function w(c){try{if(b.events.trigger("image.uploaded",[c],!0)===!1)return b.edit.on(),!1;var d=a.parseJSON(c);return d.link?d:(o(ma,c),!1)}catch(e){return o(oa,c),!1}}function x(c){try{var d=a(c).find("Location").text(),e=a(c).find("Key").text();return b.events.trigger("image.uploadedToS3",[d,e,c],!0)===!1?(b.edit.on(),!1):d}catch(f){return o(oa,c),!1}}function y(a){s("Loading image");var c=this.status,d=this.response,e=this.responseXML,f=this.responseText;try{if(b.opts.imageUploadToS3)if(201==c){var g=x(e);g&&v(g,!1,[],a,d||e)}else o(oa,d||e);else if(c>=200&&300>c){var h=w(f);h&&v(h.link,!1,h,a,d||f)}else o(na,d||f)}catch(i){o(oa,d||f)}}function z(){o(oa,this.response||this.responseText||this.responseXML)}function A(a){if(a.lengthComputable){var b=a.loaded/a.total*100|0;s("Uploading",b)}}function B(a){if(b.events.trigger("image.beforeUpload",[a])===!1)return!1;if("undefined"!=typeof a&&a.length>0){var c=a[0];if(c.size>b.opts.imageMaxSize)return o(pa),!1;if(b.opts.imageAllowedTypes.indexOf(c.type.replace(/image\//g,""))<0)return o(qa),!1;var d;if(b.drag_support.formdata&&(d=b.drag_support.formdata?new FormData:null),d){var e;if(b.opts.imageUploadToS3!==!1){d.append("key",b.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(c.name||"untitled")),d.append("success_action_status","201"),d.append("X-Requested-With","xhr"),d.append("Content-Type",c.type);for(e in b.opts.imageUploadToS3.params)d.append(e,b.opts.imageUploadToS3.params[e])}for(e in b.opts.imageUploadParams)d.append(e,b.opts.imageUploadParams[e]);d.append(b.opts.imageUploadParam,c);var f=b.opts.imageUploadURL;b.opts.imageUploadToS3&&(f="https://"+b.opts.imageUploadToS3.region+".amazonaws.com/"+b.opts.imageUploadToS3.bucket);var g=b.core.getXHR(f,b.opts.imageUploadMethod),h=ha;g.onload=function(){y.call(g,h)},g.onerror=z,g.upload.onprogress=A,q(),b.edit.off(),g.send(d)}}}function C(b){b.on("dragover dragenter",".fr-image-upload-layer",function(){return a(this).addClass("fr-drop"),!1}),b.on("dragleave dragend",".fr-image-upload-layer",function(){return a(this).removeClass("fr-drop"),!1}),b.on("drop",".fr-image-upload-layer",function(b){b.preventDefault(),b.stopPropagation(),a(this).removeClass("fr-drop");var c=b.originalEvent.dataTransfer;c&&c.files&&B(c.files)}),b.on("change",'.fr-image-upload-layer input[type="file"]',function(){this.files&&B(this.files),a(this).val(""),a(this).blur()})}function D(){b.$el.on(b._mousedown,"IMG"==b.$el.get(0).tagName?null:"img",function(c){b.selection.clear(),b.browser.msie&&(b.events.disableBlur(),b.$el.attr("contenteditable",!1)),b.opts.imageMove||c.preventDefault(),c.stopPropagation(),b.opts.imageMove&&(b.opts.toolbarInline&&b.toolbar.hide(),a(this).addClass("fr-img-move"))}),b.$el.on(b._mouseup,"IMG"==b.$el.get(0).tagName?null:"img",function(c){c.stopPropagation(),b.browser.msie&&(b.$el.attr("contenteditable",!0),b.events.enableBlur()),a(this).removeClass("fr-img-move")});var c=function(a){var c=b.$document.find("img.fr-img-move").get(0);return c?"undefined"!=typeof b.browser.msie||"undefined"!=typeof b.browser.edge:void a.preventDefault()},d=function(a){a.preventDefault()};b.events.on("dragenter",d,!0),b.events.on("dragover",c,!0),b.events.on("drop",function(c){for(var d,e,f=0;f<a.FroalaEditor.INSTANCES.length;f++)if(d=a.FroalaEditor.INSTANCES[f].$el.find("img.fr-img-move").get(0)){e=a.FroalaEditor.INSTANCES[f];break}if(d){c.preventDefault(),c.stopPropagation(),X(!0),e!=b&&e.image&&(e.image.exitEdit(!0),e.popups.hide("image.edit"));var g,h;"A"==d.parentNode.tagName&&0===d.parentNode.textContent.length?(h=a(d.parentNode),g=a(d.parentNode).clone(),g.find("img").removeClass("fr-img-move").on("load",W)):(h=a(d),g=a(d).clone(),g.removeClass("fr-img-move").on("load",W)),b.markers.insertAtPoint(c.originalEvent);var i=b.$el.find(".fr-marker");return i.replaceWith(g),h.remove(),b.undo.saveStep(),!1}X(!0),b.popups.hideAll();var j=c.originalEvent.dataTransfer;if(j&&j.files&&j.files.length&&(d=j.files[0],d&&d.type&&b.opts.imageAllowedTypes.indexOf(d.type.replace(/image\//g,""))>=0)){b.markers.insertAtPoint(c.originalEvent),b.markers.remove(),b.popups.hideAll();var k=b.popups.get("image.insert");return k||(k=E()),b.popups.setContainer("image.insert",a(b.opts.scrollableContainer)),b.popups.show("image.insert",c.originalEvent.pageX,c.originalEvent.pageY),q(),B(j.files),c.preventDefault(),c.stopPropagation(),!1}},!0),b.events.on("document.drop",function(a){b.$el.find("img.fr-img-move").length&&(a.preventDefault(),a.stopPropagation(),b.$el.find("img.fr-img-move").removeClass("fr-img-move"))}),b.events.on("mousedown",Y),b.events.on("window.mousedown",Y),b.events.on("window.touchmove",Z),b.events.on("mouseup",X),b.events.on("window.mouseup",X),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&X()}),b.events.on("image.hideResizer",function(){X(!0)}),b.events.on("commands.undo",function(){X(!0)}),b.events.on("commands.redo",function(){X(!0)}),b.events.on("destroy",function(){b.$el.off(b._mouseup,"img")},!0)}function E(){var a,d="";b.opts.imageInsertButtons.length>1&&(d='<div class="fr-buttons">'+b.button.buildList(b.opts.imageInsertButtons)+"</div>");var e=b.opts.imageInsertButtons.indexOf("imageUpload"),g=b.opts.imageInsertButtons.indexOf("imageByURL"),h="";e>=0&&(a=" fr-active",g>=0&&e>g&&(a=""),h='<div class="fr-image-upload-layer'+a+' fr-layer" id="fr-image-upload-layer-'+b.id+'"><strong>'+b.language.translate("Drop image")+"</strong><br>("+b.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/*" tabIndex="-1"></div></div>');var i="";g>=0&&(a=" fr-active",e>=0&&g>e&&(a=""),i='<div class="fr-image-by-url-layer'+a+' fr-layer" id="fr-image-by-url-layer-'+b.id+'"><div class="fr-input-line"><input type="text" placeholder="http://" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2">'+b.language.translate("Insert")+"</button></div></div>");var j='<div class="fr-image-progress-bar-layer fr-layer"><h3 class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-back" data-cmd="imageDismissError" tabIndex="2">OK</button></div></div>',k={buttons:d,upload_layer:h,by_url_layer:i,progress_bar:j},l=b.popups.create("image.insert",k);return b.popups.onRefresh("image.insert",c),b.popups.onHide("image.insert",f),b.$wp&&b.$wp.on("scroll.image-insert",function(){ha&&b.popups.isVisible("image.insert")&&da()}),b.events.on("destroy",function(){b.$wp&&b.$wp.off("scroll.image-insert"),l.off("dragover dragenter",".fr-image-upload-layer"),l.off("dragleave dragend",".fr-image-upload-layer"),l.off("drop",".fr-image-upload-layer"),l.off("change",'.fr-image-upload-layer input[type="file"]')}),C(l),l}function F(){if(ha){var a=b.popups.get("image.alt");a.find("input").val(ha.attr("alt")||"").trigger("change")}}function G(){var c=b.popups.get("image.alt");c||(c=H()),r(),b.popups.refresh("image.alt"),b.popups.setContainer("image.alt",a(b.opts.scrollableContainer));var d=ha.offset().left+ha.width()/2,e=ha.offset().top+ha.height();b.popups.show("image.alt",d,e,ha.outerHeight())}function H(){var a="";a='<div class="fr-buttons">'+b.button.buildList(b.opts.imageAltButtons)+"</div>";var c="";c='<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+b.id+'"><div class="fr-input-line"><input type="text" placeholder="'+b.language.translate("Alternate Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2">'+b.language.translate("Update")+"</button></div></div>";var d={buttons:a,alt_layer:c},e=b.popups.create("image.alt",d);return b.popups.onRefresh("image.alt",F),b.$wp&&(b.$wp.on("scroll.image-alt",function(){ha&&b.popups.isVisible("image.alt")&&G()}),b.events.on("destroy",function(){b.$wp.off("scroll.image-alt")})),e}function I(a){if(ha){var c=b.popups.get("image.alt");ha.attr("alt",a||c.find("input").val()||""),c.find("input").blur(),setTimeout(function(){ha.trigger("click").trigger("touchend")},b.helpers.isAndroid()?50:0)}}function J(){if(ha){var a=b.popups.get("image.size");a.find('input[name="width"]').val(ha.get(0).style.width).trigger("change"),a.find('input[name="height"]').val(ha.get(0).style.height).trigger("change")}}function K(){var c=b.popups.get("image.size");c||(c=L()),r(),b.popups.refresh("image.size"),b.popups.setContainer("image.size",a(b.opts.scrollableContainer));var d=ha.offset().left+ha.width()/2,e=ha.offset().top+ha.height();b.popups.show("image.size",d,e,ha.outerHeight())}function L(){var a="";a='<div class="fr-buttons">'+b.button.buildList(b.opts.imageSizeButtons)+"</div>";var c="";c='<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+b.id+'"><div class="fr-image-group"><div class="fr-input-line"><input type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2">'+b.language.translate("Update")+"</button></div></div>";var d={buttons:a,size_layer:c},e=b.popups.create("image.size",d);return b.popups.onRefresh("image.size",J),b.$wp&&(b.$wp.on("scroll.image-size",function(){ha&&b.popups.isVisible("image.size")&&K()}),b.events.on("destroy",function(){b.$wp.off("scroll.image-size")})),e}function M(a,c){if(ha){var d=b.popups.get("image.size");ha.css("width",a||d.find('input[name="width"]').val()),ha.css("height",c||d.find('input[name="height"]').val()),d.find("input").blur(),setTimeout(function(){ha.trigger("click").trigger("touchend")},b.helpers.isAndroid()?50:0)}}function N(a){var c,d,e=b.popups.get("image.insert");if(ha||b.opts.toolbarInline)ha&&(d=ha.offset().top+ha.outerHeight());else{var f=b.$tb.find('.fr-command[data-cmd="insertImage"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}!ha&&b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("image.insert",c,d,ha?ha.outerHeight():0)}function O(a){var c=b.popups.get("image.insert");c.find(".fr-image-upload-layer").hasClass("fr-active")&&a.addClass("fr-active")}function P(a){var c=b.popups.get("image.insert");c.find(".fr-image-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active")}function Q(){if(ia=a('<div class="fr-image-resizer"></div>'),(b.$wp||a(b.opts.scrollableContainer)).append(ia),ia.on("mousedown",function(a){a.stopPropagation()}),a(b.original_window).on("resize.image"+b.id,function(){b.helpers.isMobile()||X(!0)}),b.events.on("destroy",function(){ia.html("").removeData().remove(),a(b.original_window).off("resize.image"+b.id)},!0),b.opts.imageResize){ia.append(k("nw")+k("ne")+k("sw")+k("se"));var c=ia.get(0).ownerDocument;ia.on(b._mousedown+".imgresize"+b.id,".fr-handler",l),a(c).on(b._mousemove+".imgresize"+b.id,m),a(c.defaultView||c.parentWindow).on(b._mouseup+".imgresize"+b.id,n),ka=a('<div class="fr-image-overlay"></div>'),a(c).find("body").append(ka),ka.on("mouseleave",n),b.events.on("destroy",function(){ia.off(b._mousedown+".imgresize"+b.id),a(c).off(b._mousemove+".imgresize"+b.id),a(c.defaultView||c.parentWindow).off(b._mouseup+".imgresize"+b.id),ka.off("mouseleave").remove()},!0)}}function R(c){c=c||ha,c&&b.events.trigger("image.beforeRemove",[c])!==!1&&(b.popups.hideAll(),X(!0),c.get(0)==b.$el.get(0)?c.removeAttr("src"):("A"==c.get(0).parentNode.tagName?(b.selection.setBefore(c.get(0).parentNode)||b.selection.setAfter(c.get(0).parentNode),a(c.get(0).parentNode).remove()):(b.selection.setBefore(c.get(0))||b.selection.setAfter(c.get(0)),c.remove()),b.selection.restore(),b.html.fillEmptyBlocks(!0)),b.undo.saveStep())}function S(){D(),b.$el.on(b.helpers.isMobile()&&!b.helpers.isWindowsPhone()?"touchend":"click","IMG"==b.$el.get(0).tagName?null:"img",W),b.helpers.isMobile()&&(b.$el.on("touchstart","IMG"==b.$el.get(0).tagName?null:"img",function(){ua=!1}),b.$el.on("touchmove",function(){ua=!0})),b.events.on("keydown",function(c){var d=c.which;return!ha||d!=a.FroalaEditor.KEYCODE.BACKSPACE&&d!=a.FroalaEditor.KEYCODE.DELETE?ha&&d==a.FroalaEditor.KEYCODE.ESC?(X(!0),c.preventDefault(),!1):ha&&!b.keys.ctrlKey(c)?(c.preventDefault(),!1):void 0:(c.preventDefault(),R(),!1)},!0),b.events.on("paste.before",U),b.events.on("paste.beforeCleanup",V),b.events.on("paste.after",T),b.events.on("html.set",h),h(),b.opts.iframe&&b.events.on("image.loaded",b.size.syncIframe),b.$wp&&(i(),b.events.on("contentChanged",i)),a(b.original_window).on("orientationchange.image."+b.id,function(){setTimeout(function(){var a=fa();a&&a.trigger("click").trigger("touchend")},0)}),b.events.on("destroy",function(){b.$el.off("click touchstart touchend touchmove","img"),b.$el.off("load","img.fr-img-dirty"),b.$el.off("error","img.fr-img-dirty"),a(b.original_window).off("orientationchange.image."+b.id)},!0),b.events.on("node.remove",function(a){return"IMG"==a.get(0).tagName?(R(a),!1):void 0})}function T(){b.opts.imagePaste?b.$el.find("img[data-fr-image-pasted]").each(function(c,d){if(0===d.src.indexOf("data:")){if(b.events.trigger("image.beforePasteUpload",[d])===!1)return!1;var f=b.opts.imageDefaultWidth;"auto"!=f&&(f+=b.opts.imageResizeWithPercent?"%":"px"),a(d).css("width",f),a(d).addClass("fr-dib"),ha=a(d),j(),e(),da(),q(),b.edit.off();for(var g=atob(a(d).attr("src").split(",")[1]),h=[],i=0;i<g.length;i++)h.push(g.charCodeAt(i));var k=new Blob([new Uint8Array(h)],{type:"image/jpeg"});B([k]),a(d).removeAttr("data-fr-image-pasted")}else 0!==d.src.indexOf("http")?(b.selection.save(),a(d).remove(),b.selection.restore()):a(d).removeAttr("data-fr-image-pasted")}):b.$el.find("img[data-fr-image-pasted]").remove()}function U(a){if(a&&a.clipboardData&&a.clipboardData.items&&a.clipboardData.items[0]){var c=a.clipboardData.items[0].getAsFile();if(c){var d=new FileReader;return d.onload=function(a){var c=a.target.result;b.html.insert('<img data-fr-image-pasted="true" src="'+c+'" />'),b.events.trigger("paste.after")},d.readAsDataURL(c),!1}}}function V(a){return a=a.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function W(c){if(c&&"touchend"==c.type&&ua)return!0;if(b.edit.isDisabled())return c.stopPropagation(),c.preventDefault(),!1;b.toolbar.disable(),c.stopPropagation(),c.preventDefault(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),b.opts.iframe&&b.size.syncIframe(),ha=a(this),j(),e(),b.selection.clear(),b.button.bulkRefresh(),b.events.trigger("video.hideResizer");for(var d=0;d<a.FroalaEditor.INSTANCES.length;d++)a.FroalaEditor.INSTANCES[d]!=b&&a.FroalaEditor.INSTANCES[d].events.trigger("image.hideResizer")}function X(a){a===!0&&(va=!0),ha&&va&&(b.toolbar.enable(),ia.removeClass("fr-active"),b.popups.hide("image.edit"),ha=null),va=!1}function Y(){va=!0}function Z(){va=!1}function $(a){ha.removeClass("fr-fir fr-fil"),"left"==a?ha.addClass("fr-fil"):"right"==a&&ha.addClass("fr-fir"),j(),e()}function _(a){ha&&(ha.hasClass("fr-fil")?a.find("> i").attr("class","fa fa-align-left"):ha.hasClass("fr-fir")?a.find("> i").attr("class","fa fa-align-right"):a.find("> i").attr("class","fa fa-align-justify"))}function aa(a,b){if(ha){var c="justify";ha.hasClass("fr-fil")?c="left":ha.hasClass("fr-fir")&&(c="right"),b.find('.fr-command[data-param1="'+c+'"]').addClass("fr-active")}}function ba(a){ha.removeClass("fr-dii fr-dib"),"inline"==a?ha.addClass("fr-dii"):"block"==a&&ha.addClass("fr-dib"),j(),e()}function ca(a,b){var c="block";ha.hasClass("fr-dii")&&(c="inline"),b.find('.fr-command[data-param1="'+c+'"]').addClass("fr-active")}function da(){var c=b.popups.get("image.insert");c||(c=E()),b.popups.isVisible("image.insert")||(r(),b.popups.refresh("image.insert"),b.popups.setContainer("image.insert",a(b.opts.scrollableContainer)));var d=ha.offset().left+ha.width()/2,e=ha.offset().top+ha.height();b.popups.show("image.insert",d,e,ha.outerHeight())}function ea(){ha?ha.trigger("click").trigger("touchend"):(b.popups.hide("image.insert"),b.toolbar.showInline())}function fa(){return ha}function ga(a){if(!ha)return!1;if(!b.opts.imageMultipleStyles){var c=Object.keys(b.opts.imageStyles);c.splice(c.indexOf(a),1),ha.removeClass(c.join(" "))}ha.toggleClass(a),ha.trigger("click").trigger("touchend")}var ha,ia,ja,ka,la=1,ma=2,na=3,oa=4,pa=5,qa=6,ra=7,sa={};sa[la]="Image cannot be loaded from the passed link.",sa[ma]="No link in upload response.",sa[na]="Error during file upload.",sa[oa]="Parsing response failed.",sa[pa]="File is too large.",sa[qa]="Image file type is invalid.",sa[ra]="Files can be uploaded only to same domain in IE 8 and IE 9.";var ta,ua,va=!1;return{_init:S,showInsertPopup:d,showLayer:N,refreshUploadButton:O,refreshByURLButton:P,upload:B,insertByURL:u,align:$,refreshAlign:_,refreshAlignOnShow:aa,display:ba,refreshDisplayOnShow:ca,replace:da,back:ea,get:fa,insert:v,showProgressBar:q,remove:R,hideProgressBar:r,applyStyle:ga,showAltPopup:G,showSizePopup:K,setAlt:I,setSize:M,exitEdit:X}},a.FroalaEditor.DefineIcon("insertImage",{NAME:"image"}),a.FroalaEditor.RegisterShortcut(80,"insertImage"),a.FroalaEditor.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refershAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker")&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()}}),a.FroalaEditor.DefineIcon("imageUpload",{NAME:"upload"}),a.FroalaEditor.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,callback:function(){this.image.showLayer("image-upload")},refresh:function(a){this.image.refreshUploadButton(a)}}),a.FroalaEditor.DefineIcon("imageByURL",{NAME:"link"}),a.FroalaEditor.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,callback:function(){this.image.showLayer("image-by-url")},refresh:function(a){this.image.refreshByURLButton(a)}}),a.FroalaEditor.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(a){var b=this.image.get();b?a.text("Replace"):a.text(this.language.translate("Insert"))}}),a.FroalaEditor.DefineIcon("imageDisplay",{NAME:"star"}),a.FroalaEditor.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.image.display(b)},refresh:function(a){this.opts.imageTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.image.refreshDisplayOnShow(a,b)}}),a.FroalaEditor.DefineIcon("imageAlign",{NAME:"align-center"}),a.FroalaEditor.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",justify:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list">',c=a.FroalaEditor.COMMANDS.imageAlign.options;for(var d in c)b+='<li><a class="fr-command fr-title" data-cmd="imageAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'"><i class="fa fa-align-'+d+'"></i></a></li>';return b+="</ul>"},callback:function(a,b){this.image.align(b)},refresh:function(a){this.image.refreshAlign(a)},refreshOnShow:function(a,b){this.image.refreshAlignOnShow(a,b)}}),a.FroalaEditor.DefineIcon("imageReplace",{NAME:"exchange"}),a.FroalaEditor.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),a.FroalaEditor.DefineIcon("imageRemove",{NAME:"trash"}),a.FroalaEditor.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),a.FroalaEditor.DefineIcon("imageBack",{NAME:"arrow-left"}),a.FroalaEditor.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(a){var b=this.image.get();b||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FroalaEditor.RegisterCommand("imageDismissError",{title:"OK",callback:function(){this.image.hideProgressBar(!0)}}),a.FroalaEditor.DefineIcon("imageStyle",{NAME:"magic"}),a.FroalaEditor.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list">',b=this.opts.imageStyles;for(var c in b)a+='<li><a class="fr-command" data-cmd="imageStyle" data-param1="'+c+'">'+this.language.translate(b[c])+"</a></li>";return a+="</ul>"},callback:function(a,b){this.image.applyStyle(b)},refreshOnShow:function(b,c){var d=this.image.get();d&&c.find(".fr-command").each(function(){var b=a(this).data("param1");a(this).toggleClass("fr-active",d.hasClass(b))})}}),a.FroalaEditor.DefineIcon("imageAlt",{NAME:"info"}),a.FroalaEditor.RegisterCommand("imageAlt",{undo:!1,focus:!1,title:"Alternate Text",callback:function(){this.image.showAltPopup()}}),a.FroalaEditor.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),a.FroalaEditor.DefineIcon("imageSize",{NAME:"arrows-alt"}),a.FroalaEditor.RegisterCommand("imageSize",{undo:!1,focus:!1,title:"Change Size",callback:function(){this.image.showSizePopup()}}),a.FroalaEditor.RegisterCommand("imageSetSize",{undo:!0,focus:!1,callback:function(){this.image.setSize()}})});
},{"jquery":17}],12:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.extend(a.FroalaEditor.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),a.extend(a.FroalaEditor.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkList:[{text:"Froala",href:"https://froala.com",target:"_blank"},{text:"Google",href:"https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://facebook.com"}],linkText:!0}),a.FroalaEditor.PLUGINS.link=function(b){function c(){}function d(){var c=b.image?b.image.get():null;if(!c&&b.$wp){var d=b.selection.element(),e=b.selection.endElement();return"A"!=d.tagName&&(d=a(d).parents("a:first").get(0)),"A"!=e.tagName&&(e=a(e).parents("a:first").get(0)),e&&e==d?d:null}return"A"==b.$el.get(0).tagName&&b.core.hasFocus()?b.$el:c&&c.get(0).parentNode&&"A"==c.get(0).parentNode.tagName?c.get(0).parentNode:void 0}function e(){var a=b.image?b.image.get():null,c=[];if(a)"A"==a.get(0).parentNode.tagName&&c.push(a.get(0).parentNode);else{var d,e,f,g;if(b.window.getSelection){var h=b.window.getSelection();if(h.getRangeAt&&h.rangeCount){g=b.document.createRange();for(var i=0;i<h.rangeCount;++i)if(d=h.getRangeAt(i),e=d.commonAncestorContainer,e&&1!=e.nodeType&&(e=e.parentNode),e&&"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a");for(var j=0;j<f.length;++j)g.selectNodeContents(f[j]),g.compareBoundaryPoints(d.END_TO_START,d)<1&&g.compareBoundaryPoints(d.START_TO_END,d)>-1&&c.push(f[j])}}}else if(b.document.selection&&"Control"!=b.document.selection.type)if(d=b.document.selection.createRange(),e=d.parentElement(),"a"==e.nodeName.toLowerCase())c.push(e);else{f=e.getElementsByTagName("a"),g=b.document.body.createTextRange();for(var k=0;k<f.length;++k)g.moveToElementText(f[k]),g.compareEndPoints("StartToEnd",d)>-1&&g.compareEndPoints("EndToStart",d)<1&&c.push(f[k])}}return c}function f(c){setTimeout(function(){if(!c||c&&(1==c.which||"mouseup"!=c.type)){var e=d(),f=b.image?b.image.get():null;if(e&&!f){if(b.image){var h=b.node.contents(e);if(1==h.length&&"IMG"==h[0].tagName)return a(h[0]).trigger("click"),!1}c&&c.stopPropagation(),g(e)}else b.popups.hide("link.edit")}},b.helpers.isIOS()?100:0)}function g(c){var d=b.popups.get("link.edit");d||(d=i());var e=a(c);b.popups.isVisible("link.edit")||b.popups.refresh("link.edit"),b.popups.setContainer("link.edit",a(b.opts.scrollableContainer));var f=e.offset().left+a(c).outerWidth()/2,g=e.offset().top+e.outerHeight();b.popups.show("link.edit",f,g,e.outerHeight())}function h(){b.popups.hide("link.edit")}function i(){var a="";b.opts.linkEditButtons.length>1&&("A"==b.$el.get(0).tagName&&b.opts.linkEditButtons.indexOf("linkRemove")>=0&&b.opts.linkEditButtons.splice(b.opts.linkEditButtons.indexOf("linkRemove"),1),a='<div class="fr-buttons">'+b.button.buildList(b.opts.linkEditButtons)+"</div>");var c={buttons:a},e=b.popups.create("link.edit",c);return b.$wp&&b.$wp.on("scroll.link-edit",function(){d()&&b.popups.isVisible("link.edit")&&g(d())}),b.events.on("destroy",function(){b.$wp&&b.$wp.off("scroll.link-edit")}),e}function j(){}function k(){var c=b.popups.get("link.insert"),e=d();if(e){var f,g,h=a(e),i=c.find('input.fr-link-attr[type="text"]'),j=c.find('input.fr-link-attr[type="checkbox"]');for(f=0;f<i.length;f++)g=a(i[f]),g.val(h.attr(g.attr("name")||""));for(j.prop("checked",!1),f=0;f<j.length;f++)g=a(j[f]),h.attr(g.attr("name"))==g.data("checked")&&g.prop("checked",!0);c.find('input.fr-link-attr[type="text"][name="text"]').val(h.text())}else c.find('input.fr-link-attr[type="text"]').val(""),c.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),c.find('input.fr-link-attr[type="text"][name="text"]').val(b.selection.text());c.find("input.fr-link-attr").trigger("change");var k=b.image?b.image.get():null;k?c.find('.fr-link-attr[name="text"]').parent().hide():c.find('.fr-link-attr[name="text"]').parent().show()}function l(){var c=b.$tb.find('.fr-command[data-cmd="insertLink"]'),d=b.popups.get("link.insert");if(d||(d=m()),!d.hasClass("fr-active"))if(b.popups.refresh("link.insert"),b.popups.setContainer("link.insert",b.$tb||a(b.opts.scrollableContainer)),c.is(":visible")){var e=c.offset().left+c.outerWidth()/2,f=c.offset().top+(b.opts.toolbarBottom?10:c.outerHeight()-10);b.popups.show("link.insert",e,f,c.outerHeight())}else b.position.forSelection(d),b.popups.show("link.insert")}function m(){var a="";b.opts.linkInsertButtons.length>=1&&(a='<div class="fr-buttons">'+b.button.buildList(b.opts.linkInsertButtons)+"</div>");var c='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg>',e="",f=0;e='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+b.id+'">',e+='<div class="fr-input-line"><input name="href" type="text" class="fr-link-attr" placeholder="URL" tabIndex="'+ ++f+'"></div>',b.opts.linkText&&(e+='<div class="fr-input-line"><input name="text" type="text" class="fr-link-attr" placeholder="'+b.language.translate("Text")+'" tabIndex="'+ ++f+'"></div>');for(var g in b.opts.linkAttributes){var h=b.opts.linkAttributes[g];e+='<div class="fr-input-line"><input name="'+g+'" type="text" class="fr-link-attr" placeholder="'+b.language.translate(h)+'" tabIndex="'+ ++f+'"></div>'}b.opts.linkAlwaysBlank||(e+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+b.id+'" tabIndex="'+ ++f+'"><span>'+c+'</span></span><label for="fr-link-target-'+b.id+'">'+b.language.translate("Open in new tab")+"</label></div>"),e+='<div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="linkInsert" href="#" tabIndex="'+ ++f+'" type="button">'+b.language.translate("Insert")+"</button></div></div>";var i={buttons:a,input_layer:e},l=b.popups.create("link.insert",i);return b.popups.onRefresh("link.insert",k),b.popups.onHide("link.insert",j),b.$wp&&b.$wp.on("scroll.link-insert",function(){var a=b.image?b.image.get():null;a&&b.popups.isVisible("link.insert")&&v(),d&&b.popups.isVisible("link.insert")&&t()}),b.events.on("destroy",function(){b.$wp&&b.$wp.off("scroll.link-insert")}),l}function n(){var c=d(),e=b.image?b.image.get():null;return b.events.trigger("link.beforeRemove",[c])===!1?!1:void(e&&c?(e.unwrap(),e.trigger("click")):c&&(b.selection.save(),a(c).replaceWith(a(c).html()),b.selection.restore(),h()))}function o(){b.events.on("keyup",function(b){b.which!=a.FroalaEditor.KEYCODE.ESC&&f(b)}),b.events.on("window.mouseup",f)}function p(c){var d,e,f=b.opts.linkList[c],g=b.popups.get("link.insert"),h=g.find('input.fr-link-attr[type="text"]'),i=g.find('input.fr-link-attr[type="checkbox"]');for(e=0;e<h.length;e++)d=a(h[e]),f[d.attr("name")]?d.val(f[d.attr("name")]):d.val("");for(e=0;e<i.length;e++)d=a(i[e]),d.prop("checked",d.data("checked")==f[d.attr("name")])}function q(){var c,d,e=b.popups.get("link.insert"),f=e.find('input.fr-link-attr[type="text"]'),g=e.find('input.fr-link-attr[type="checkbox"]'),h=f.filter('[name="href"]').val(),i=f.filter('[name="text"]').val(),j={};for(d=0;d<f.length;d++)c=a(f[d]),["href","text"].indexOf(c.attr("name"))<0&&(j[c.attr("name")]=c.val());for(d=0;d<g.length;d++)c=a(g[d]),c.is(":checked")?j[c.attr("name")]=c.data("checked"):j[c.attr("name")]=c.data("unchecked");var k=a(b.original_window).scrollTop();s(h,i,j),a(b.original_window).scrollTop(k)}function r(){if(!b.selection.isCollapsed()){b.selection.save();for(var c=b.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();c.length;){var d=a(c.pop());d.removeClass("fr-unprocessed");var e=b.node.deepestParent(d.get(0));if(e){var f=d.get(0),g="",h="";do f=f.parentNode,b.node.isBlock(f)||(g+=b.node.closeTagString(f),h=b.node.openTagString(f)+h);while(f!=e);var i=b.node.openTagString(d.get(0))+d.html()+b.node.closeTagString(d.get(0));d.replaceWith('<span id="fr-break"></span>');var j=a(e).html();j=j.replace(/<span id="fr-break"><\/span>/g,g+i+h),a(e).html(j)}c=b.$el.find(".fr-marker.fr-unprocessed").toArray()}b.selection.restore()}}function s(c,g,h){"undefined"==typeof h&&(h={});var i=b.image?b.image.get():null;i||"A"==b.$el.get(0).tagName?"A"==b.$el.get(0).tagName&&b.$el.focus():(b.events.focus(!0),b.selection.restore());var j=c;if(b.opts.linkConvertEmailAddress){var k=/^[\w._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;k.test(c)&&0!==c.indexOf("mailto:")&&(c="mailto:"+c)}if(0===c.indexOf("tel:")||0===c.indexOf("sms:")||0===c.indexOf("mailto:")||0===c.indexOf("data:image")||""===b.opts.linkAutoPrefix||/^(https?:|ftps?:|)\/\//.test(c)||(c=b.opts.linkAutoPrefix+c),c=b.helpers.sanitizeURL(c),b.opts.linkAlwaysBlank&&(h.target="_blank"),b.opts.linkAlwaysNoFollow&&(h.rel="nofollow"),g=g||"",c===b.opts.linkAutoPrefix){var l=b.popups.get("link.insert");return l.find('input[name="href"]').addClass("fr-error"),b.events.trigger("link.bad",[j]),!1}var m,n=d();if(n){m=a(n);var o=b.node.rawAttributes(n);for(var p in o)"class"!=p&&"style"!=p&&m.removeAttr(p);m.attr("href",c),g.length>0&&m.text()!=g&&!i&&m.text(g),i||m.prepend(a.FroalaEditor.START_MARKER).append(a.FroalaEditor.END_MARKER),m.attr(h),i||b.selection.restore()}else{i?i.wrap('<a href="'+c+'"></a>'):(b.document.execCommand("unlink",!1,!1),b.selection.isCollapsed()?(g=0===g.length?j:g,b.html.insert('<a href="'+c+'">'+a.FroalaEditor.START_MARKER+g+a.FroalaEditor.END_MARKER+"</a>"),b.selection.restore()):g.length>0&&g!=b.selection.text()?(b.selection.remove(),b.html.insert('<a href="'+c+'">'+a.FroalaEditor.START_MARKER+g+a.FroalaEditor.END_MARKER+"</a>"),b.selection.restore()):(r(),b.document.execCommand("createLink",!1,c)));for(var q=e(),s=0;s<q.length;s++)m=a(q[s]),m.attr(h),m.removeAttr("_moz_dirty");1==q.length&&b.$wp&&!i?(a(q[0]).prepend(a.FroalaEditor.START_MARKER).append(a.FroalaEditor.END_MARKER),b.selection.restore()):b.popups.hide("link.insert")}i?(i.trigger("touchstart"),i.trigger(b.helpers.isMobile()?"touchend":"click")):(b.popups.get("link.insert"),f())}function t(){h();var c=d();if(c){var e=b.popups.get("link.insert");e||(e=m()),b.popups.isVisible("link.insert")||(b.popups.refresh("link.insert"),b.selection.save(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur())),b.popups.setContainer("link.insert",a(b.opts.scrollableContainer));var f=(b.image?b.image.get():null)||a(c),g=f.offset().left+f.outerWidth()/2,i=f.offset().top+f.outerHeight();b.popups.show("link.insert",g,i,f.outerHeight())}}function u(){var a=b.image?b.image.get():null;if(a)a.trigger("click").trigger("touchend");else{b.events.disableBlur(),b.selection.restore(),b.events.enableBlur();var c=d();c&&b.$wp?(b.selection.restore(),h(),f()):"A"==b.$el.get(0).tagName?(b.$el.focus(),f()):(b.popups.hide("link.insert"),b.toolbar.showInline())}}function v(){var c=b.image?b.image.get():null;if(c){var d=b.popups.get("link.insert");d||(d=m()),k(!0),b.popups.setContainer("link.insert",a(b.opts.scrollableContainer));var e=c.offset().left+c.outerWidth()/2,f=c.offset().top+c.outerHeight();b.popups.show("link.insert",e,f,c.outerHeight())}}function w(c){var e=d();if(!e)return!1;if(!b.opts.linkMultipleStyles){var f=Object.keys(b.opts.linkStyles);f.splice(f.indexOf(c),1),a(e).removeClass(f.join(" "))}a(e).toggleClass(c)}return{_init:o,callback:c,remove:n,showInsertPopup:l,usePredefined:p,insertCallback:q,insert:s,update:t,get:d,allSelected:e,back:u,imageLink:v,applyStyle:w}},a.FroalaEditor.DefineIcon("insertLink",{NAME:"link"}),a.FroalaEditor.RegisterShortcut(75,"insertLink"),a.FroalaEditor.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker")&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()}}),a.FroalaEditor.DefineIcon("linkOpen",{NAME:"external-link"}),a.FroalaEditor.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(a){var b=this.link.get();b?a.removeClass("fr-hidden"):a.addClass("fr-hidden")},callback:function(){var a=this.link.get();a&&this.original_window.open(a.href)}}),a.FroalaEditor.DefineIcon("linkEdit",{NAME:"edit"}),a.FroalaEditor.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,callback:function(){this.link.update()},refresh:function(a){var b=this.link.get();b?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FroalaEditor.DefineIcon("linkRemove",{NAME:"unlink"}),a.FroalaEditor.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(a){var b=this.link.get();b?a.removeClass("fr-hidden"):a.addClass("fr-hidden")}}),a.FroalaEditor.DefineIcon("linkBack",{NAME:"arrow-left"}),a.FroalaEditor.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(a){var b=this.link.get(),c=this.image?this.image.get():null;c||b||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FroalaEditor.DefineIcon("linkList",{NAME:"search"}),a.FroalaEditor.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var a='<ul class="fr-dropdown-list">',b=this.opts.linkList,c=0;c<b.length;c++)a+='<li><a class="fr-command" data-cmd="linkList" data-param1="'+c+'">'+(b[c].displayText||b[c].text)+"</a></li>";return a+="</ul>"},callback:function(a,b){this.link.usePredefined(b)}}),a.FroalaEditor.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(a){var b=this.link.get();b?a.text(this.language.translate("Update")):a.text(this.language.translate("Insert"))}}),a.FroalaEditor.DefineIcon("imageLink",{NAME:"link"}),a.FroalaEditor.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,callback:function(){this.link.imageLink()},refresh:function(a){var b,c=this.link.get();c?(b=a.prev(),b.hasClass("fr-separator")&&b.removeClass("fr-hidden"),a.addClass("fr-hidden")):(b=a.prev(),b.hasClass("fr-separator")&&b.addClass("fr-hidden"),a.removeClass("fr-hidden"))}}),a.FroalaEditor.DefineIcon("linkStyle",{NAME:"magic"}),a.FroalaEditor.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var a='<ul class="fr-dropdown-list">',b=this.opts.linkStyles;for(var c in b)a+='<li><a class="fr-command" data-cmd="linkStyle" data-param1="'+c+'">'+this.language.translate(b[c])+"</a></li>";return a+="</ul>"},callback:function(a,b){this.link.applyStyle(b)},refreshOnShow:function(b,c){var d=this.link.get();if(d){var e=a(d);c.find(".fr-command").each(function(){var b=a(this).data("param1");a(this).toggleClass("fr-active",e.hasClass(b))})}}})});
},{"jquery":17}],13:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.FroalaEditor.PLUGINS.lists=function(b){function c(a){return'<span class="fr-open-'+a.toLowerCase()+'"></span>'}function d(a){return'<span class="fr-close-'+a.toLowerCase()+'"></span>'}function e(b,c){for(var d=[],e=0;e<b.length;e++){var f=b[e].parentNode;"LI"==b[e].tagName&&f.tagName!=c&&d.indexOf(f)<0&&d.push(f)}for(e=d.length-1;e>=0;e--){var g=a(d[e]);g.replaceWith("<"+c.toLowerCase()+">"+g.html()+"</"+c.toLowerCase()+">")}}function f(c,d){e(c,d);for(var f=b.html.defaultTag(),g=0;g<c.length;g++)"LI"!=c[g].tagName&&(f&&c[g].tagName.toLowerCase()==f?a(c[g]).replaceWith("<"+d+"><li"+b.node.attributes(c[g])+">"+a(c[g]).html()+"</li></"+d+">"):a(c[g]).wrap("<"+d+"><li></li></"+d+">"));b.clean.lists()}function g(e){var f,g;for(f=e.length-1;f>=0;f--)for(g=f-1;g>=0;g--)if(a(e[g]).find(e[f]).length||e[g]==e[f]){e.splice(f,1);break}var h=[];for(f=0;f<e.length;f++){var i=a(e[f]),j=e[f].parentNode;i.before(d(j.tagName)),"LI"==j.parentNode.tagName?(i.before(d("LI")),i.after(c("LI"))):(b.node.isEmpty(i.get(0),!0)||0!==i.find(b.html.blockTagsQuery()).length||i.append("<br>"),i.append(c("LI")),i.prepend(d("LI"))),i.after(c(j.tagName)),"LI"==j.parentNode.tagName&&(j=j.parentNode.parentNode),h.indexOf(j)<0&&h.push(j)}for(f=0;f<h.length;f++){var k=a(h[f]),l=k.html();l=l.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>"),l=l.replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),k.replaceWith(b.node.openTagString(k.get(0))+l+b.node.closeTagString(k.get(0)))}b.$el.find("li:empty").remove(),b.$el.find("ul:empty, ol:empty").remove(),b.clean.lists(),b.html.wrap()}function h(a,b){for(var c=!0,d=0;d<a.length;d++){if("LI"!=a[d].tagName)return!1;a[d].parentNode.tagName!=b&&(c=!1)}return c}function i(a){b.selection.save(),b.html.wrap(!0,!0),b.selection.restore();for(var c=b.selection.blocks(),d=0;d<c.length;d++)"LI"!=c[d].tagName&&"LI"==c[d].parentNode.tagName&&(c[d]=c[d].parentNode);b.selection.save(),h(c,a)?g(c):f(c,a),b.html.unwrap(),b.selection.restore()}function j(c,d){var e=a(b.selection.element());if(e.get(0)!=b.$el.get(0)){var f=e.get(0);"LI"!=f.tagName&&(f=e.parents("li").get(0)),f&&f.parentNode.tagName==d&&b.$el.get(0).contains(f.parentNode)&&c.addClass("fr-active")}}function k(c){b.selection.save();for(var d=0;d<c.length;d++){var e=c[d].previousSibling;if(e){var f=a(c[d]).find("> ul, > ol").get(0);if(f){for(var g=a("<li>").prependTo(a(f)),h=b.node.contents(c[d])[0];h&&!b.node.isList(h);){var i=h.nextSibling;g.append(h),h=i}a(e).append(a(f)),a(c[d]).remove()}else{var j=a(e).find("> ul, > ol").get(0);if(j)a(j).append(a(c[d]));else{var k=a("<"+c[d].parentNode.tagName+">");a(e).append(k),k.append(a(c[d]))}}}}b.clean.lists(),b.selection.restore()}function l(a){b.selection.save(),g(a),b.selection.restore()}function m(a){if("indent"==a||"outdent"==a){for(var c=!1,d=b.selection.blocks(),e=[],f=0;f<d.length;f++)"LI"==d[f].tagName?(c=!0,e.push(d[f])):"LI"==d[f].parentNode.tagName&&(c=!0,e.push(d[f].parentNode));c&&("indent"==a?k(e):l(e))}}function n(){b.events.on("commands.after",m),b.events.on("keydown",function(c){if(c.which==a.FroalaEditor.KEYCODE.TAB){for(var d,e=b.selection.blocks(),f=[],g=0;g<e.length;g++)"LI"==e[g].tagName?(d=!0,f.push(e[g])):"LI"==e[g].parentNode.tagName&&(d=!0,f.push(e[g].parentNode));if(d)return c.preventDefault(),c.stopPropagation(),c.shiftKey?l(f):k(f),!1}},!0)}return{_init:n,format:i,refresh:j}},a.FroalaEditor.RegisterCommand("formatUL",{title:"Unordered List",refresh:function(a){this.lists.refresh(a,"UL")},callback:function(){this.lists.format("UL")}}),a.FroalaEditor.RegisterCommand("formatOL",{title:"Ordered List",refresh:function(a){this.lists.refresh(a,"OL")},callback:function(){this.lists.format("OL")}}),a.FroalaEditor.DefineIcon("formatUL",{NAME:"list-ul"}),a.FroalaEditor.DefineIcon("formatOL",{NAME:"list-ol"})});
},{"jquery":17}],14:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.extend(a.FroalaEditor.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1}),a.FroalaEditor.PLUGINS.paragraphFormat=function(b){function c(c,d){var e=b.html.defaultTag();if(d&&d.toLowerCase()!=e)if(c.find("ul, ol").length>0){var f=a("<"+d+">");c.prepend(f);for(var g=b.node.contents(c.get(0))[0];g&&["UL","OL"].indexOf(g.tagName)<0;){var h=g.nextSibling;f.append(g),g=h}}else c.html("<"+d+">"+c.html()+"</"+d+">")}function d(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div" data-empty="true"'),d.toLowerCase()==e?c.replaceWith(c.html()):c.replaceWith(a("<"+d+">").html(c.html()))}function e(c,d){var e=b.html.defaultTag();d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),d.toLowerCase()==e?(b.node.isEmpty(c.get(0),!0)||c.append("<br/>"),c.replaceWith(c.html())):c.replaceWith(a("<"+d+">").html(c.html()))}function f(c,d){d||(d='div class="fr-temp-div"'+(b.node.isEmpty(c.get(0),!0)?' data-empty="true"':"")),c.replaceWith(a("<"+d+" "+b.node.attributes(c.get(0))+">").html(c.html()))}function g(g){"N"==g&&(g=b.html.defaultTag()),b.selection.save(),b.html.wrap(!0,!0,!0),b.selection.restore();var h=b.selection.blocks();b.selection.save(),b.$el.find("pre").attr("skip",!0);for(var i=0;i<h.length;i++)if(h[i].tagName!=g){var j=a(h[i]);"LI"==h[i].tagName?c(j,g):"LI"==h[i].parentNode.tagName?d(j,g):["TD","TH"].indexOf(h[i].parentNode.tagName)>=0?e(j,g):f(j,g)}b.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){a(this).prev().append("<br>"+a(this).html()),a(this).remove()}),b.$el.find("pre").removeAttr("skip"),b.html.unwrap(),b.selection.restore()}function h(a,c){var d=b.selection.blocks();if(d.length){var e=d[0],f="N",g=b.html.defaultTag();e.tagName.toLowerCase()!=g&&e!=b.$el.get(0)&&(f=e.tagName),c.find('.fr-command[data-param1="'+f+'"]').addClass("fr-active")}else c.find('.fr-command[data-param1="N"]').addClass("fr-active")}function i(a,c){var d=b.selection.blocks();if(d.length){var e=d[0],f="N",g=b.html.defaultTag();e.tagName.toLowerCase()!=g&&e!=b.$el.get(0)&&(f=e.tagName),["LI","TD","TH"].indexOf(f)>=0&&(f="N"),a.find("> span").text(c.find('.fr-command[data-param1="'+f+'"]').text())}else a.find("> span").text(c.find('.fr-command[data-param1="N"]').text())}return{apply:g,refreshOnShow:h,refresh:i}},a.FroalaEditor.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(a){return a.opts.paragraphFormatSelection},defaultSelection:"Normal",displaySelectionWidth:100,html:function(){var a='<ul class="fr-dropdown-list">',b=this.opts.paragraphFormat;for(var c in b)a+="<li><"+c+' style="padding: 0 !important; margin: 0 !important;"><a class="fr-command" data-cmd="paragraphFormat" data-param1="'+c+'" title="'+this.language.translate(b[c])+'">'+this.language.translate(b[c])+"</a></"+c+"></li>";return a+="</ul>"},title:"Paragraph Format",callback:function(a,b){this.paragraphFormat.apply(b)},refresh:function(a,b){this.paragraphFormat.refresh(a,b)},refreshOnShow:function(a,b){this.paragraphFormat.refreshOnShow(a,b)}}),a.FroalaEditor.DefineIcon("paragraphFormat",{NAME:"paragraph"})});
},{"jquery":17}],15:[function(require,module,exports){
/*!
 * froala_editor v2.0.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){"use strict";a.extend(a.FroalaEditor.POPUP_TEMPLATES,{"video.insert":"[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_]","video.edit":"[_BUTTONS_]","video.size":"[_BUTTONS_][_SIZE_LAYER_]"}),a.extend(a.FroalaEditor.DEFAULTS,{videoInsertButtons:["videoBack","|","videoByURL","videoEmbed"],videoEditButtons:["videoDisplay","videoAlign","videoSize","videoRemove"],videoResize:!0,videoSizeButtons:["videoBack","|"],videoTextNear:!0,videoDefaultAlign:"center",videoDefaultDisplay:"block"}),a.FroalaEditor.VIDEO_PROVIDERS=[{test_regex:/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g,url_text:"//www.youtube.com/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com)\/(?:channels\/[A-z]+\/|groups\/[A-z]+\/videos\/)?(.+)/g,url_text:"//player.vimeo.com/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,url_text:"//www.dailymotion.com/embed/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.+(screen.yahoo.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>'},{test_regex:/^.+(rutube.ru)\/[^_&]+/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g,url_text:"//rutube.ru/play/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>'}],a.FroalaEditor.PLUGINS.video=function(b){function c(){var a=b.popups.get("video.insert"),c=a.find(".fr-video-by-url-layer input");c.val("").trigger("change");var d=a.find(".fr-video-embed-layer textarea");d.val("").trigger("change")}function d(){var a=b.$tb.find('.fr-command[data-cmd="insertVideo"]'),c=b.popups.get("video.insert");if(c||(c=f()),!c.hasClass("fr-active")){b.popups.refresh("video.insert"),b.popups.setContainer("video.insert",b.$tb);var d=a.offset().left+a.outerWidth()/2,e=a.offset().top+(b.opts.toolbarBottom?10:a.outerHeight()-10);b.popups.show("video.insert",d,e,a.outerHeight())}}function e(){var c=b.popups.get("video.edit");c||(c=y()),b.popups.setContainer("video.edit",a(b.opts.scrollableContainer)),b.popups.refresh("video.edit");var d=R.find("iframe, embed, video"),e=d.offset().left+d.outerWidth()/2,f=d.offset().top+d.outerHeight();b.popups.show("video.edit",e,f,d.outerHeight())}function f(){var a="";b.opts.videoInsertButtons.length>1&&(a='<div class="fr-buttons">'+b.button.buildList(b.opts.videoInsertButtons)+"</div>");var d="";b.opts.videoInsertButtons.indexOf("videoByURL")>=0&&(d='<div class="fr-video-by-url-layer fr-layer fr-active" id="fr-video-by-url-layer-'+b.id+'"><div class="fr-input-line"><input type="text" placeholder="http://" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2">'+b.language.translate("Insert")+"</button></div></div>");var e="";b.opts.videoInsertButtons.indexOf("videoEmbed")>=0&&(e='<div class="fr-video-embed-layer fr-layer" id="fr-video-embed-layer-'+b.id+'"><div class="fr-input-line"><textarea type="text" placeholder="'+b.language.translate("Embedded Code")+'" tabIndex="1" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2">'+b.language.translate("Insert")+"</button></div></div>");var f={buttons:a,by_url_layer:d,embed_layer:e},g=b.popups.create("video.insert",f);return b.popups.onRefresh("video.insert",c),b.popups.onHide("video.insert",j),g}function g(a){var c,d,e=b.popups.get("video.insert");if(!R&&!b.opts.toolbarInline){var f=b.$tb.find('.fr-command[data-cmd="insertVideo"]');c=f.offset().left+f.outerWidth()/2,d=f.offset().top+(b.opts.toolbarBottom?10:f.outerHeight()-10)}b.opts.toolbarInline&&(d=e.offset().top-b.helpers.getPX(e.css("margin-top")),e.hasClass("fr-above")&&(d+=e.outerHeight())),e.find(".fr-layer").removeClass("fr-active"),e.find(".fr-"+a+"-layer").addClass("fr-active"),b.popups.show("video.insert",c,d,0)}function h(a){var c=b.popups.get("video.insert");c.find(".fr-video-by-url-layer").hasClass("fr-active")&&a.addClass("fr-active")}function i(a){var c=b.popups.get("video.insert");c.find(".fr-video-embed-layer").hasClass("fr-active")&&a.addClass("fr-active")}function j(){}function k(a){b.events.focus(!0),b.selection.restore(),b.html.insert('<span contenteditable="false" class="fr-jiv fr-video fr-dv'+b.opts.videoDefaultDisplay[0]+("center"!=b.opts.videoDefaultAlign?" fr-fv"+b.opts.videoDefaultAlign[0]:"")+'">'+a+"</span>"),b.popups.hide("video.insert");var c=b.$el.find(".fr-jiv");c.removeClass("fr-jiv"),b.events.trigger("video.inserted",[c])}function l(c){if("undefined"==typeof c){var d=b.popups.get("video.insert");c=d.find('.fr-video-by-url-layer input[type="text"]').val()||""}var e=null;if(b.helpers.isURL(c))for(var f=0;f<a.FroalaEditor.VIDEO_PROVIDERS.length;f++){var g=a.FroalaEditor.VIDEO_PROVIDERS[f];if(g.test_regex.test(c)){e=c.replace(g.url_regex,g.url_text),e=g.html.replace(/\{url\}/,e);break}}e?k(e):b.events.trigger("video.linkError",[c])}function m(a){if("undefined"==typeof a){var c=b.popups.get("video.insert");a=c.find(".fr-video-embed-layer textarea").val()||""}0===a.length?b.events.trigger("video.codeError",[a]):k(a)}function n(c){c.preventDefault(),c.stopPropagation();var d=c.pageX||(c.originalEvent.touches?c.originalEvent.touches[0].pageX:null),e=c.pageY||(c.originalEvent.touches?c.originalEvent.touches[0].pageY:null);return d&&e?(P=a(this),P.data("start-x",d),P.data("start-y",e),O.show(),void b.popups.hideAll()):!1}function o(a){if(P){a.preventDefault();var b=a.pageX||(a.originalEvent.touches?a.originalEvent.touches[0].pageX:null),c=a.pageY||(a.originalEvent.touches?a.originalEvent.touches[0].pageY:null);if(!b||!c)return!1;var d=P.data("start-x"),e=P.data("start-y");P.data("start-x",b),P.data("start-y",c);var f=b-d,g=c-e,h=R.find("iframe, embed, video"),i=h.width(),j=h.height();(P.hasClass("fr-hnw")||P.hasClass("fr-hsw"))&&(f=0-f),(P.hasClass("fr-hnw")||P.hasClass("fr-hne"))&&(g=0-g),h.css("width",i+f),h.css("height",j+g),h.removeAttr("width"),h.removeAttr("height"),s()}}function p(a){P&&(a&&a.preventDefault(),P=null,O.hide(),s(),e())}function q(a){return'<div class="fr-handler fr-h'+a+'"></div>'}function r(){if(Q=a('<div class="fr-video-resizer"></div>'),b.$wp.append(Q),a(b.original_window).on("resize.video"+b.id,u),b.events.on("destroy",function(){Q.html("").removeData().remove(),a(b.original_window).off("resize.video"+b.id)},!0),b.opts.videoResize){Q.append(q("nw")+q("ne")+q("sw")+q("se"));var c=Q.get(0).ownerDocument;Q.on(b._mousedown+".vidresize"+b.id,".fr-handler",n),a(c).on(b._mousemove+".vidresize"+b.id,o),a(c.defaultView||c.parentWindow).on(b._mouseup+".vidresize"+b.id,p),O=a('<div class="fr-video-overlay"></div>'),a(c).find("body").append(O),O.on("mouseleave",p),b.events.on("destroy",function(){Q.off(b._mousedown+".vidresize"+b.id),a(c).off(b._mousemove+".vidresize"+b.id),a(c.defaultView||c.parentWindow).off(b._mouseup+".vidresize"+b.id),O.off("mouseleave").remove()},!0)}}function s(){Q||r();var a=R.find("iframe, embed, video");Q.css("top",(b.opts.iframe?a.offset().top-1:a.offset().top-b.$wp.offset().top-1)+b.$wp.scrollTop()).css("left",(b.opts.iframe?a.offset().left-1:a.offset().left-b.$wp.offset().left-1)+b.$wp.scrollLeft()).css("width",a.outerWidth()).css("height",a.height()).addClass("fr-active")}function t(c){return c&&"touchend"==c.type&&S?!0:(c.preventDefault(),c.stopPropagation(),b.edit.isDisabled()?!1:(c.stopPropagation(),b.toolbar.disable(),b.helpers.isMobile()&&(b.events.disableBlur(),b.$el.blur(),b.events.enableBlur()),R=a(this),a(this).addClass("fr-active"),b.opts.iframe&&b.size.syncIframe(),s(),e(),b.selection.clear(),b.button.bulkRefresh(),void b.events.trigger("image.hideResizer")))}function u(a){a===!0&&(T=!0),R&&T&&(Q.removeClass("fr-active"),b.toolbar.enable(),R.removeClass("fr-active"),R=null),T=!1}function v(){T=!0}function w(){T=!1}function x(){b.events.on("mousedown",v),b.events.on("window.mousedown",v),b.events.on("window.touchmove",w),b.events.on("mouseup",u),b.events.on("window.mouseup",u),b.events.on("commands.mousedown",function(a){a.parents(".fr-toolbar").length>0&&u()}),b.events.on("video.hideResizer",function(){u(!0)}),b.events.on("commands.undo",function(){u(!0)}),b.events.on("commands.redo",function(){u(!0)})}function y(){var a="";b.opts.videoEditButtons.length>1&&(a+='<div class="fr-buttons">',a+=b.button.buildList(b.opts.videoEditButtons),a+="</div>");var c={buttons:a},d=b.popups.create("video.edit",c);return b.$wp.on("scroll.video-edit",function(){R&&b.popups.isVisible("video.edit")&&e()}),b.events.on("destroy",function(){b.$wp.off("scroll.video-edit")}),d}function z(){if(R){var a=b.popups.get("video.size"),c=R.find("iframe, embed, video");a.find('input[name="width"]').val(c.get(0).style.width||c.attr("width")).trigger("change"),a.find('input[name="height"]').val(c.get(0).style.height||c.attr("height")).trigger("change")}}function A(){var c=b.popups.get("video.size");c||(c=B()),b.popups.refresh("video.size"),b.popups.setContainer("video.size",a(b.opts.scrollableContainer));var d=R.find("iframe, embed, video"),e=d.offset().left+d.width()/2,f=d.offset().top+d.height();b.popups.show("video.size",e,f,d.height())}function B(){var a="";a='<div class="fr-buttons">'+b.button.buildList(b.opts.videoSizeButtons)+"</div>";var c="";c='<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'+b.id+'"><div class="fr-video-group"><div class="fr-input-line"><input type="text" name="width" placeholder="'+b.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input type="text" name="height" placeholder="'+b.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2">'+b.language.translate("Update")+"</button></div></div>";var d={buttons:a,size_layer:c},e=b.popups.create("video.size",d);return b.popups.onRefresh("video.size",z),b.$wp.on("scroll.video-size",function(){R&&b.popups.isVisible("video.size")&&A()}),b.events.on("destroy",function(){b.$wp.off("scroll.video-size")}),e}function C(a){R.removeClass("fr-fvr fr-fvl"),"left"==a?R.addClass("fr-fvl"):"right"==a&&R.addClass("fr-fvr"),s(),e()}function D(a){R.hasClass("fr-fvl")?a.find("> i").attr("class","fa fa-align-left"):R.hasClass("fr-fvr")?a.find("> i").attr("class","fa fa-align-right"):a.find("> i").attr("class","fa fa-align-justify")}function E(a,b){var c="justify";R.hasClass("fr-fvl")?c="left":R.hasClass("fr-fvr")&&(c="right"),b.find('.fr-command[data-param1="'+c+'"]').addClass("fr-active")}function F(a){R.removeClass("fr-dvi fr-dvb"),"inline"==a?R.addClass("fr-dvi"):"block"==a&&R.addClass("fr-dvb"),s(),e()}function G(a,b){var c="block";R.hasClass("fr-dvi")&&(c="inline"),b.find('.fr-command[data-param1="'+c+'"]').addClass("fr-active")}function H(){if(R&&b.events.trigger("video.beforeRemove",[R])!==!1){var a=R;b.popups.hideAll(),u(!0),b.selection.setBefore(a.get(0))||b.selection.setAfter(a.get(0)),a.remove(),b.selection.restore(),b.html.fillEmptyBlocks(!0),b.events.trigger("video.removed",[a])}}function I(a){if(!a.hasClass("fr-dvi")&&!a.hasClass("fr-dvb")){var c=a.css("float");a.css("float","none"),"block"==a.css("display")?(a.css("float",c),0===parseInt(a.css("margin-left"),10)&&(a.attr("style")||"").indexOf("margin-right: auto")>=0?a.addClass("fr-fvl"):0===parseInt(a.css("margin-right"),10)&&(a.attr("style")||"").indexOf("margin-left: auto")>=0&&a.addClass("fr-fvr"),a.addClass("fr-dvb")):(a.css("float",c),"left"==a.css("float")?a.addClass("fr-fvl"):"right"==a.css("float")&&a.addClass("fr-fvr"),a.addClass("fr-dvi")),a.css("margin",""),a.css("float",""),a.css("display",""),a.css("z-index",""),a.css("position",""),a.css("overflow",""),a.css("vertical-align","")}b.opts.videoTextNear||a.removeClass("fr-dvi").addClass("fr-dvb")}function J(){b.$el.find("video").filter(function(){return 0===a(this).parents("span.fr-video").length}).wrap('<span class="fr-video" contenteditable="false"></span>'),b.$el.find("embed, iframe").filter(function(){if(b.browser.safari&&this.getAttribute("src")&&this.setAttribute("src",this.src),a(this).parents("span.fr-video").length>0)return!1;for(var c=a(this).attr("src"),d=0;d<a.FroalaEditor.VIDEO_PROVIDERS.length;d++){var e=a.FroalaEditor.VIDEO_PROVIDERS[d];if(e.test_regex.test(c))return!0}return!1}).map(function(){return 0===a(this).parents("object").length?this:a(this).parents("object").get(0)}).wrap('<span class="fr-video" contenteditable="false"></span>');for(var c=b.$el.find("span.fr-video"),d=0;d<c.length;d++)I(a(c[d]))}function K(){x(),b.helpers.isMobile()&&(b.$el.on("touchstart","span.fr-video",function(){S=!1}),b.$el.on("touchmove",function(){S=!0})),b.events.on("html.set",J),J(),b.$el.on("mousedown","span.fr-video",function(a){a.stopPropagation()}),b.$el.on("click touchend","span.fr-video",t),b.events.on("keydown",function(c){var d=c.which;return!R||d!=a.FroalaEditor.KEYCODE.BACKSPACE&&d!=a.FroalaEditor.KEYCODE.DELETE?R&&d==a.FroalaEditor.KEYCODE.ESC?(u(!0),c.preventDefault(),!1):R&&!b.keys.ctrlKey(c)?(c.preventDefault(),!1):void 0:(c.preventDefault(),H(),!1)},!0),b.events.on("keydown",function(){b.$el.find("span.fr-video:empty").remove()})}function L(){R?R.trigger("click"):(b.popups.hide("video.insert"),b.toolbar.showInline())}function M(a,c){if(R){var d=b.popups.get("video.size"),e=R.find("iframe, embed, video");e.css("width",a||d.find('input[name="width"]').val()),e.css("height",c||d.find('input[name="height"]').val()),e.get(0).style.width&&e.removeAttr("width"),e.get(0).style.height&&e.removeAttr("height"),d.find("input").blur(),setTimeout(function(){R.trigger("click")},b.helpers.isAndroid()?50:0)}}function N(){return R}var O,P,Q,R,S,T=!1;return{_init:K,showInsertPopup:d,showLayer:g,refreshByURLButton:h,refreshEmbedButton:i,insertByURL:l,insertEmbed:m,insert:k,align:C,refreshAlign:D,refreshAlignOnShow:E,display:F,refreshDisplayOnShow:G,remove:H,showSizePopup:A,back:L,setSize:M,get:N}},a.FroalaEditor.RegisterCommand("insertVideo",{title:"Insert Video",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("video.insert")?(this.$el.find(".fr-marker")&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("video.insert")):this.video.showInsertPopup()}}),a.FroalaEditor.DefineIcon("insertVideo",{NAME:"video-camera"}),a.FroalaEditor.DefineIcon("videoByURL",{NAME:"link"}),a.FroalaEditor.RegisterCommand("videoByURL",{title:"By URL",undo:!1,focus:!1,callback:function(){this.video.showLayer("video-by-url")},refresh:function(a){this.video.refreshByURLButton(a)}}),a.FroalaEditor.DefineIcon("videoEmbed",{NAME:"code"}),a.FroalaEditor.RegisterCommand("videoEmbed",{title:"Embedded Code",undo:!1,focus:!1,callback:function(){this.video.showLayer("video-embed")},refresh:function(a){this.video.refreshEmbedButton(a)}}),a.FroalaEditor.RegisterCommand("videoInsertByURL",{undo:!0,focus:!0,callback:function(){this.video.insertByURL()}}),a.FroalaEditor.RegisterCommand("videoInsertEmbed",{undo:!0,focus:!0,callback:function(){this.video.insertEmbed()}}),a.FroalaEditor.DefineIcon("videoDisplay",{NAME:"star"}),a.FroalaEditor.RegisterCommand("videoDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(a,b){this.video.display(b)},refresh:function(a){this.opts.videoTextNear||a.addClass("fr-hidden")},refreshOnShow:function(a,b){this.video.refreshDisplayOnShow(a,b)}}),a.FroalaEditor.DefineIcon("videoAlign",{NAME:"align-center"}),a.FroalaEditor.RegisterCommand("videoAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",justify:"None",right:"Align Right"},html:function(){var b='<ul class="fr-dropdown-list">',c=a.FroalaEditor.COMMANDS.videoAlign.options;for(var d in c)b+='<li><a class="fr-command fr-title" data-cmd="videoAlign" data-param1="'+d+'" title="'+this.language.translate(c[d])+'"><i class="fa fa-align-'+d+'"></i></a></li>';return b+="</ul>"},callback:function(a,b){this.video.align(b)},refresh:function(a){this.video.refreshAlign(a)},refreshOnShow:function(a,b){this.video.refreshAlignOnShow(a,b)}}),a.FroalaEditor.DefineIcon("videoRemove",{NAME:"trash"}),a.FroalaEditor.RegisterCommand("videoRemove",{title:"Remove",callback:function(){this.video.remove()}}),a.FroalaEditor.DefineIcon("videoSize",{NAME:"arrows-alt"}),a.FroalaEditor.RegisterCommand("videoSize",{undo:!1,focus:!1,title:"Change Size",callback:function(){this.video.showSizePopup()}}),a.FroalaEditor.DefineIcon("videoBack",{NAME:"arrow-left"}),a.FroalaEditor.RegisterCommand("videoBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.video.back()},refresh:function(a){var b=this.video.get();b||this.opts.toolbarInline?(a.removeClass("fr-hidden"),a.next(".fr-separator").removeClass("fr-hidden")):(a.addClass("fr-hidden"),a.next(".fr-separator").addClass("fr-hidden"))}}),a.FroalaEditor.RegisterCommand("videoSetSize",{undo:!0,focus:!1,callback:function(){this.video.setSize()}})});
},{"jquery":17}],16:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],17:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],18:[function(require,module,exports){
/* Riot v2.2.4, @license MIT, (c) 2015 Muut Inc. + contributors */

;(function(window, undefined) {
  'use strict';
var riot = { version: 'v2.2.4', settings: {} },
  //// be aware, internal usage

  // counter to give a unique id to all the Tag instances
  __uid = 0,

  // riot specific prefixes
  RIOT_PREFIX = 'riot-',
  RIOT_TAG = RIOT_PREFIX + 'tag',

  // for typeof == '' comparisons
  T_STRING = 'string',
  T_OBJECT = 'object',
  T_UNDEF  = 'undefined',
  T_FUNCTION = 'function',
  // special native tags that cannot be treated like the others
  SPECIAL_TAGS_REGEX = /^(?:opt(ion|group)|tbody|col|t[rhd])$/,
  RESERVED_WORDS_BLACKLIST = ['_item', '_id', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],

  // version# for IE 8-11, 0 for others
  IE_VERSION = (window && window.document || {}).documentMode | 0,

  // Array.isArray for IE8 is in the polyfills
  isArray = Array.isArray

riot.observable = function(el) {

  el = el || {}

  var callbacks = {},
      _id = 0

  el.on = function(events, fn) {
    if (isFunction(fn)) {
      if (typeof fn.id === T_UNDEF) fn._id = _id++

      events.replace(/\S+/g, function(name, pos) {
        (callbacks[name] = callbacks[name] || []).push(fn)
        fn.typed = pos > 0
      })
    }
    return el
  }

  el.off = function(events, fn) {
    if (events == '*') callbacks = {}
    else {
      events.replace(/\S+/g, function(name) {
        if (fn) {
          var arr = callbacks[name]
          for (var i = 0, cb; (cb = arr && arr[i]); ++i) {
            if (cb._id == fn._id) arr.splice(i--, 1)
          }
        } else {
          callbacks[name] = []
        }
      })
    }
    return el
  }

  // only single event supported
  el.one = function(name, fn) {
    function on() {
      el.off(name, on)
      fn.apply(el, arguments)
    }
    return el.on(name, on)
  }

  el.trigger = function(name) {
    var args = [].slice.call(arguments, 1),
        fns = callbacks[name] || []

    for (var i = 0, fn; (fn = fns[i]); ++i) {
      if (!fn.busy) {
        fn.busy = 1
        fn.apply(el, fn.typed ? [name].concat(args) : args)
        if (fns[i] !== fn) { i-- }
        fn.busy = 0
      }
    }

    if (callbacks.all && name != 'all') {
      el.trigger.apply(el, ['all', name].concat(args))
    }

    return el
  }

  return el

}
riot.mixin = (function() {
  var mixins = {}

  return function(name, mixin) {
    if (!mixin) return mixins[name]
    mixins[name] = mixin
  }

})()

;(function(riot, evt, win) {

  // browsers only
  if (!win) return

  var loc = win.location,
      fns = riot.observable(),
      started = false,
      current

  function hash() {
    return loc.href.split('#')[1] || ''   // why not loc.hash.splice(1) ?
  }

  function parser(path) {
    return path.split('/')
  }

  function emit(path) {
    if (path.type) path = hash()

    if (path != current) {
      fns.trigger.apply(null, ['H'].concat(parser(path)))
      current = path
    }
  }

  var r = riot.route = function(arg) {
    // string
    if (arg[0]) {
      loc.hash = arg
      emit(arg)

    // function
    } else {
      fns.on('H', arg)
    }
  }

  r.exec = function(fn) {
    fn.apply(null, parser(hash()))
  }

  r.parser = function(fn) {
    parser = fn
  }

  r.stop = function () {
    if (started) {
      if (win.removeEventListener) win.removeEventListener(evt, emit, false) //@IE8 - the if()
      else win.detachEvent('on' + evt, emit) //@IE8
      fns.off('*')
      started = false
    }
  }

  r.start = function () {
    if (!started) {
      if (win.addEventListener) win.addEventListener(evt, emit, false) //@IE8 - the if()
      else win.attachEvent('on' + evt, emit) //IE8
      started = true
    }
  }

  // autostart the router
  r.start()

})(riot, 'hashchange', window)
/*

//// How it works?


Three ways:

1. Expressions: tmpl('{ value }', data).
   Returns the result of evaluated expression as a raw object.

2. Templates: tmpl('Hi { name } { surname }', data).
   Returns a string with evaluated expressions.

3. Filters: tmpl('{ show: !done, highlight: active }', data).
   Returns a space separated list of trueish keys (mainly
   used for setting html classes), e.g. "show highlight".


// Template examples

tmpl('{ title || "Untitled" }', data)
tmpl('Results are { results ? "ready" : "loading" }', data)
tmpl('Today is { new Date() }', data)
tmpl('{ message.length > 140 && "Message is too long" }', data)
tmpl('This item got { Math.round(rating) } stars', data)
tmpl('<h1>{ title }</h1>{ body }', data)


// Falsy expressions in templates

In templates (as opposed to single expressions) all falsy values
except zero (undefined/null/false) will default to empty string:

tmpl('{ undefined } - { false } - { null } - { 0 }', {})
// will return: " - - - 0"

*/


var brackets = (function(orig) {

  var cachedBrackets,
      r,
      b,
      re = /[{}]/g

  return function(x) {

    // make sure we use the current setting
    var s = riot.settings.brackets || orig

    // recreate cached vars if needed
    if (cachedBrackets !== s) {
      cachedBrackets = s
      b = s.split(' ')
      r = b.map(function (e) { return e.replace(/(?=.)/g, '\\') })
    }

    // if regexp given, rewrite it with current brackets (only if differ from default)
    return x instanceof RegExp ? (
        s === orig ? x :
        new RegExp(x.source.replace(re, function(b) { return r[~~(b === '}')] }), x.global ? 'g' : '')
      ) :
      // else, get specific bracket
      b[x]
  }
})('{ }')


var tmpl = (function() {

  var cache = {},
      OGLOB = '"in d?d:' + (window ? 'window).' : 'global).'),
      reVars =
      /(['"\/])(?:[^\\]*?|\\.|.)*?\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function\s*\()|([A-Za-z_$]\w*)/g

  // build a template (or get it from cache), render with data
  return function(str, data) {
    return str && (cache[str] || (cache[str] = tmpl(str)))(data)
  }


  // create a template instance

  function tmpl(s, p) {

    if (s.indexOf(brackets(0)) < 0) {
      // return raw text
      s = s.replace(/\n|\r\n?/g, '\n')
      return function () { return s }
    }

    // temporarily convert \{ and \} to a non-character
    s = s
      .replace(brackets(/\\{/g), '\uFFF0')
      .replace(brackets(/\\}/g), '\uFFF1')

    // split string to expression and non-expresion parts
    p = split(s, extract(s, brackets(/{/), brackets(/}/)))

    // is it a single expression or a template? i.e. {x} or <b>{x}</b>
    s = (p.length === 2 && !p[0]) ?

      // if expression, evaluate it
      expr(p[1]) :

      // if template, evaluate all expressions in it
      '[' + p.map(function(s, i) {

        // is it an expression or a string (every second part is an expression)
        return i % 2 ?

          // evaluate the expressions
          expr(s, true) :

          // process string parts of the template:
          '"' + s

            // preserve new lines
            .replace(/\n|\r\n?/g, '\\n')

            // escape quotes
            .replace(/"/g, '\\"') +

          '"'

      }).join(',') + '].join("")'

    return new Function('d', 'return ' + s
      // bring escaped { and } back
      .replace(/\uFFF0/g, brackets(0))
      .replace(/\uFFF1/g, brackets(1)) + ';')

  }


  // parse { ... } expression

  function expr(s, n) {
    s = s

      // convert new lines to spaces
      .replace(/\n|\r\n?/g, ' ')

      // trim whitespace, brackets, strip comments
      .replace(brackets(/^[{ ]+|[ }]+$|\/\*.+?\*\//g), '')

    // is it an object literal? i.e. { key : value }
    return /^\s*[\w- "']+ *:/.test(s) ?

      // if object literal, return trueish keys
      // e.g.: { show: isOpen(), done: item.done } -> "show done"
      '[' +

          // extract key:val pairs, ignoring any nested objects
          extract(s,

              // name part: name:, "name":, 'name':, name :
              /["' ]*[\w- ]+["' ]*:/,

              // expression part: everything upto a comma followed by a name (see above) or end of line
              /,(?=["' ]*[\w- ]+["' ]*:)|}|$/
              ).map(function(pair) {

                // get key, val parts
                return pair.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/, function(_, k, v) {

                  // wrap all conditional parts to ignore errors
                  return v.replace(/[^&|=!><]+/g, wrap) + '?"' + k + '":"",'

                })

              }).join('') +

        '].join(" ").trim()' :

      // if js expression, evaluate as javascript
      wrap(s, n)

  }


  // execute js w/o breaking on errors or undefined vars

  function wrap(s, nonull) {
    s = s.trim()
    return !s ? '' : '(function(v){try{v=' +

      // prefix vars (name => data.name)
      s.replace(reVars, function(s, _, v) { return v ? '(("' + v + OGLOB + v + ')' : s }) +

      // default to empty string for falsy values except zero
      '}catch(e){}return ' + (nonull === true ? '!v&&v!==0?"":v' : 'v') + '}).call(d)'
  }


  // split string by an array of substrings

  function split(str, substrings) {
    var parts = []
    substrings.map(function(sub, i) {

      // push matched expression and part before it
      i = str.indexOf(sub)
      parts.push(str.slice(0, i), sub)
      str = str.slice(i + sub.length)
    })
    if (str) parts.push(str)

    // push the remaining part
    return parts
  }


  // match strings between opening and closing regexp, skipping any inner/nested matches

  function extract(str, open, close) {

    var start,
        level = 0,
        matches = [],
        re = new RegExp('(' + open.source + ')|(' + close.source + ')', 'g')

    str.replace(re, function(_, open, close, pos) {

      // if outer inner bracket, mark position
      if (!level && open) start = pos

      // in(de)crease bracket level
      level += open ? 1 : -1

      // if outer closing bracket, grab the match
      if (!level && close != null) matches.push(str.slice(start, pos + close.length))

    })

    return matches
  }

})()

/*
  lib/browser/tag/mkdom.js

  Includes hacks needed for the Internet Explorer version 9 and bellow

*/
// http://kangax.github.io/compat-table/es5/#ie8
// http://codeplanet.io/dropping-ie8/

var mkdom = (function (checkIE) {

  var rootEls = {
        'tr': 'tbody',
        'th': 'tr',
        'td': 'tr',
        'tbody': 'table',
        'col': 'colgroup'
      },
      GENERIC = 'div'

  checkIE = checkIE && checkIE < 10

  // creates any dom element in a div, table, or colgroup container
  function _mkdom(html) {

    var match = html && html.match(/^\s*<([-\w]+)/),
        tagName = match && match[1].toLowerCase(),
        rootTag = rootEls[tagName] || GENERIC,
        el = mkEl(rootTag)

    el.stub = true

    if (checkIE && tagName && (match = tagName.match(SPECIAL_TAGS_REGEX)))
      ie9elem(el, html, tagName, !!match[1])
    else
      el.innerHTML = html

    return el
  }

  // creates tr, th, td, option, optgroup element for IE8-9
  /* istanbul ignore next */
  function ie9elem(el, html, tagName, select) {

    var div = mkEl(GENERIC),
        tag = select ? 'select>' : 'table>',
        child

    div.innerHTML = '<' + tag + html + '</' + tag

    child = div.getElementsByTagName(tagName)[0]
    if (child)
      el.appendChild(child)

  }
  // end ie9elem()

  return _mkdom

})(IE_VERSION)

// { key, i in items} -> { key, i, items }
function loopKeys(expr) {
  var b0 = brackets(0),
      els = expr.trim().slice(b0.length).match(/^\s*(\S+?)\s*(?:,\s*(\S+))?\s+in\s+(.+)$/)
  return els ? { key: els[1], pos: els[2], val: b0 + els[3] } : { val: expr }
}

function mkitem(expr, key, val) {
  var item = {}
  item[expr.key] = key
  if (expr.pos) item[expr.pos] = val
  return item
}


/* Beware: heavy stuff */
function _each(dom, parent, expr) {

  remAttr(dom, 'each')

  var tagName = getTagName(dom),
      template = dom.outerHTML,
      hasImpl = !!tagImpl[tagName],
      impl = tagImpl[tagName] || {
        tmpl: template
      },
      root = dom.parentNode,
      placeholder = document.createComment('riot placeholder'),
      tags = [],
      child = getTag(dom),
      checksum

  root.insertBefore(placeholder, dom)

  expr = loopKeys(expr)

  // clean template code
  parent
    .one('premount', function () {
      if (root.stub) root = parent.root
      // remove the original DOM node
      dom.parentNode.removeChild(dom)
    })
    .on('update', function () {
      var items = tmpl(expr.val, parent)

      // object loop. any changes cause full redraw
      if (!isArray(items)) {

        checksum = items ? JSON.stringify(items) : ''

        items = !items ? [] :
          Object.keys(items).map(function (key) {
            return mkitem(expr, key, items[key])
          })
      }

      var frag = document.createDocumentFragment(),
          i = tags.length,
          j = items.length

      // unmount leftover items
      while (i > j) {
        tags[--i].unmount()
        tags.splice(i, 1)
      }

      for (i = 0; i < j; ++i) {
        var _item = !checksum && !!expr.key ? mkitem(expr, items[i], i) : items[i]

        if (!tags[i]) {
          // mount new
          (tags[i] = new Tag(impl, {
              parent: parent,
              isLoop: true,
              hasImpl: hasImpl,
              root: SPECIAL_TAGS_REGEX.test(tagName) ? root : dom.cloneNode(),
              item: _item
            }, dom.innerHTML)
          ).mount()

          frag.appendChild(tags[i].root)
        } else
          tags[i].update(_item)

        tags[i]._item = _item

      }

      root.insertBefore(frag, placeholder)

      if (child) parent.tags[tagName] = tags

    }).one('updated', function() {
      var keys = Object.keys(parent)// only set new values
      walk(root, function(node) {
        // only set element node and not isLoop
        if (node.nodeType == 1 && !node.isLoop && !node._looped) {
          node._visited = false // reset _visited for loop node
          node._looped = true // avoid set multiple each
          setNamed(node, parent, keys)
        }
      })
    })

}


function parseNamedElements(root, tag, childTags) {

  walk(root, function(dom) {
    if (dom.nodeType == 1) {
      dom.isLoop = dom.isLoop || (dom.parentNode && dom.parentNode.isLoop || dom.getAttribute('each')) ? 1 : 0

      // custom child tag
      var child = getTag(dom)

      if (child && !dom.isLoop) {
        childTags.push(initChildTag(child, dom, tag))
      }

      if (!dom.isLoop)
        setNamed(dom, tag, [])
    }

  })

}

function parseExpressions(root, tag, expressions) {

  function addExpr(dom, val, extra) {
    if (val.indexOf(brackets(0)) >= 0) {
      var expr = { dom: dom, expr: val }
      expressions.push(extend(expr, extra))
    }
  }

  walk(root, function(dom) {
    var type = dom.nodeType

    // text node
    if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
    if (type != 1) return

    /* element */

    // loop
    var attr = dom.getAttribute('each')

    if (attr) { _each(dom, tag, attr); return false }

    // attribute expressions
    each(dom.attributes, function(attr) {
      var name = attr.name,
        bool = name.split('__')[1]

      addExpr(dom, attr.value, { attr: bool || name, bool: bool })
      if (bool) { remAttr(dom, name); return false }

    })

    // skip custom tags
    if (getTag(dom)) return false

  })

}
function Tag(impl, conf, innerHTML) {

  var self = riot.observable(this),
      opts = inherit(conf.opts) || {},
      dom = mkdom(impl.tmpl),
      parent = conf.parent,
      isLoop = conf.isLoop,
      hasImpl = conf.hasImpl,
      item = cleanUpData(conf.item),
      expressions = [],
      childTags = [],
      root = conf.root,
      fn = impl.fn,
      tagName = root.tagName.toLowerCase(),
      attr = {},
      propsInSyncWithParent = []

  if (fn && root._tag) {
    root._tag.unmount(true)
  }

  // not yet mounted
  this.isMounted = false
  root.isLoop = isLoop

  // keep a reference to the tag just created
  // so we will be able to mount this tag multiple times
  root._tag = this

  // create a unique id to this tag
  // it could be handy to use it also to improve the virtual dom rendering speed
  this._id = __uid++

  extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item)

  // grab attributes
  each(root.attributes, function(el) {
    var val = el.value
    // remember attributes with expressions only
    if (brackets(/{.*}/).test(val)) attr[el.name] = val
  })

  if (dom.innerHTML && !/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(tagName))
    // replace all the yield tags with the tag inner html
    dom.innerHTML = replaceYield(dom.innerHTML, innerHTML)

  // options
  function updateOpts() {
    var ctx = hasImpl && isLoop ? self : parent || self

    // update opts from current DOM attributes
    each(root.attributes, function(el) {
      opts[el.name] = tmpl(el.value, ctx)
    })
    // recover those with expressions
    each(Object.keys(attr), function(name) {
      opts[name] = tmpl(attr[name], ctx)
    })
  }

  function normalizeData(data) {
    for (var key in item) {
      if (typeof self[key] !== T_UNDEF)
        self[key] = data[key]
    }
  }

  function inheritFromParent () {
    if (!self.parent || !isLoop) return
    each(Object.keys(self.parent), function(k) {
      // some properties must be always in sync with the parent tag
      var mustSync = !~RESERVED_WORDS_BLACKLIST.indexOf(k) && ~propsInSyncWithParent.indexOf(k)
      if (typeof self[k] === T_UNDEF || mustSync) {
        // track the property to keep in sync
        // so we can keep it updated
        if (!mustSync) propsInSyncWithParent.push(k)
        self[k] = self.parent[k]
      }
    })
  }

  this.update = function(data) {
    // make sure the data passed will not override
    // the component core methods
    data = cleanUpData(data)
    // inherit properties from the parent
    inheritFromParent()
    // normalize the tag properties in case an item object was initially passed
    if (data && typeof item === T_OBJECT) {
      normalizeData(data)
      item = data
    }
    extend(self, data)
    updateOpts()
    self.trigger('update', data)
    update(expressions, self)
    self.trigger('updated')
  }

  this.mixin = function() {
    each(arguments, function(mix) {
      mix = typeof mix === T_STRING ? riot.mixin(mix) : mix
      each(Object.keys(mix), function(key) {
        // bind methods to self
        if (key != 'init')
          self[key] = isFunction(mix[key]) ? mix[key].bind(self) : mix[key]
      })
      // init method will be called automatically
      if (mix.init) mix.init.bind(self)()
    })
  }

  this.mount = function() {

    updateOpts()

    // initialiation
    if (fn) fn.call(self, opts)

    // parse layout after init. fn may calculate args for nested custom tags
    parseExpressions(dom, self, expressions)

    // mount the child tags
    toggle(true)

    // update the root adding custom attributes coming from the compiler
    // it fixes also #1087
    if (impl.attrs || hasImpl) {
      walkAttributes(impl.attrs, function (k, v) { root.setAttribute(k, v) })
      parseExpressions(self.root, self, expressions)
    }

    if (!self.parent || isLoop) self.update(item)

    // internal use only, fixes #403
    self.trigger('premount')

    if (isLoop && !hasImpl) {
      // update the root attribute for the looped elements
      self.root = root = dom.firstChild

    } else {
      while (dom.firstChild) root.appendChild(dom.firstChild)
      if (root.stub) self.root = root = parent.root
    }
    // if it's not a child tag we can trigger its mount event
    if (!self.parent || self.parent.isMounted) {
      self.isMounted = true
      self.trigger('mount')
    }
    // otherwise we need to wait that the parent event gets triggered
    else self.parent.one('mount', function() {
      // avoid to trigger the `mount` event for the tags
      // not visible included in an if statement
      if (!isInStub(self.root)) {
        self.parent.isMounted = self.isMounted = true
        self.trigger('mount')
      }
    })
  }


  this.unmount = function(keepRootTag) {
    var el = root,
        p = el.parentNode,
        ptag

    if (p) {

      if (parent) {
        ptag = getImmediateCustomParentTag(parent)
        // remove this tag from the parent tags object
        // if there are multiple nested tags with same name..
        // remove this element form the array
        if (isArray(ptag.tags[tagName]))
          each(ptag.tags[tagName], function(tag, i) {
            if (tag._id == self._id)
              ptag.tags[tagName].splice(i, 1)
          })
        else
          // otherwise just delete the tag instance
          ptag.tags[tagName] = undefined
      }

      else
        while (el.firstChild) el.removeChild(el.firstChild)

      if (!keepRootTag)
        p.removeChild(el)
      else
        // the riot-tag attribute isn't needed anymore, remove it
        p.removeAttribute('riot-tag')
    }


    self.trigger('unmount')
    toggle()
    self.off('*')
    // somehow ie8 does not like `delete root._tag`
    root._tag = null

  }

  function toggle(isMount) {

    // mount/unmount children
    each(childTags, function(child) { child[isMount ? 'mount' : 'unmount']() })

    // listen/unlisten parent (events flow one way from parent to children)
    if (parent) {
      var evt = isMount ? 'on' : 'off'

      // the loop tags will be always in sync with the parent automatically
      if (isLoop)
        parent[evt]('unmount', self.unmount)
      else
        parent[evt]('update', self.update)[evt]('unmount', self.unmount)
    }
  }

  // named elements available for fn
  parseNamedElements(dom, this, childTags)


}

function setEventHandler(name, handler, dom, tag) {

  dom[name] = function(e) {

    var item = tag._item,
        ptag = tag.parent,
        el

    if (!item)
      while (ptag && !item) {
        item = ptag._item
        ptag = ptag.parent
      }

    // cross browser event fix
    e = e || window.event

    // ignore error on some browsers
    try {
      e.currentTarget = dom
      if (!e.target) e.target = e.srcElement
      if (!e.which) e.which = e.charCode || e.keyCode
    } catch (ignored) { /**/ }

    e.item = item

    // prevent default behaviour (by default)
    if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
      if (e.preventDefault) e.preventDefault()
      e.returnValue = false
    }

    if (!e.preventUpdate) {
      el = item ? getImmediateCustomParentTag(ptag) : tag
      el.update()
    }

  }

}

// used by if- attribute
function insertTo(root, node, before) {
  if (root) {
    root.insertBefore(before, node)
    root.removeChild(node)
  }
}

function update(expressions, tag) {

  each(expressions, function(expr, i) {

    var dom = expr.dom,
        attrName = expr.attr,
        value = tmpl(expr.expr, tag),
        parent = expr.dom.parentNode

    if (expr.bool)
      value = value ? attrName : false
    else if (value == null)
      value = ''

    // leave out riot- prefixes from strings inside textarea
    // fix #815: any value -> string
    if (parent && parent.tagName == 'TEXTAREA') value = ('' + value).replace(/riot-/g, '')

    // no change
    if (expr.value === value) return
    expr.value = value

    // text node
    if (!attrName) {
      dom.nodeValue = '' + value    // #815 related
      return
    }

    // remove original attribute
    remAttr(dom, attrName)
    // event handler
    if (isFunction(value)) {
      setEventHandler(attrName, value, dom, tag)

    // if- conditional
    } else if (attrName == 'if') {
      var stub = expr.stub,
          add = function() { insertTo(stub.parentNode, stub, dom) },
          remove = function() { insertTo(dom.parentNode, dom, stub) }

      // add to DOM
      if (value) {
        if (stub) {
          add()
          dom.inStub = false
          // avoid to trigger the mount event if the tags is not visible yet
          // maybe we can optimize this avoiding to mount the tag at all
          if (!isInStub(dom)) {
            walk(dom, function(el) {
              if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount')
            })
          }
        }
      // remove from DOM
      } else {
        stub = expr.stub = stub || document.createTextNode('')
        // if the parentNode is defined we can easily replace the tag
        if (dom.parentNode)
          remove()
        else
        // otherwise we need to wait the updated event
          (tag.parent || tag).one('updated', remove)

        dom.inStub = true
      }
    // show / hide
    } else if (/^(show|hide)$/.test(attrName)) {
      if (attrName == 'hide') value = !value
      dom.style.display = value ? '' : 'none'

    // field value
    } else if (attrName == 'value') {
      dom.value = value

    // <img src="{ expr }">
    } else if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
      if (value)
        dom.setAttribute(attrName.slice(RIOT_PREFIX.length), value)

    } else {
      if (expr.bool) {
        dom[attrName] = value
        if (!value) return
      }

      if (typeof value !== T_OBJECT) dom.setAttribute(attrName, value)

    }

  })

}
function each(els, fn) {
  for (var i = 0, len = (els || []).length, el; i < len; i++) {
    el = els[i]
    // return false -> remove current item during loop
    if (el != null && fn(el, i) === false) i--
  }
  return els
}

function isFunction(v) {
  return typeof v === T_FUNCTION || false   // avoid IE problems
}

function remAttr(dom, name) {
  dom.removeAttribute(name)
}

function getTag(dom) {
  return dom.tagName && tagImpl[dom.getAttribute(RIOT_TAG) || dom.tagName.toLowerCase()]
}

function initChildTag(child, dom, parent) {
  var tag = new Tag(child, { root: dom, parent: parent }, dom.innerHTML),
      tagName = getTagName(dom),
      ptag = getImmediateCustomParentTag(parent),
      cachedTag

  // fix for the parent attribute in the looped elements
  tag.parent = ptag

  cachedTag = ptag.tags[tagName]

  // if there are multiple children tags having the same name
  if (cachedTag) {
    // if the parent tags property is not yet an array
    // create it adding the first cached tag
    if (!isArray(cachedTag))
      ptag.tags[tagName] = [cachedTag]
    // add the new nested tag to the array
    if (!~ptag.tags[tagName].indexOf(tag))
      ptag.tags[tagName].push(tag)
  } else {
    ptag.tags[tagName] = tag
  }

  // empty the child node once we got its template
  // to avoid that its children get compiled multiple times
  dom.innerHTML = ''

  return tag
}

function getImmediateCustomParentTag(tag) {
  var ptag = tag
  while (!getTag(ptag.root)) {
    if (!ptag.parent) break
    ptag = ptag.parent
  }
  return ptag
}

function getTagName(dom) {
  var child = getTag(dom),
    namedTag = dom.getAttribute('name'),
    tagName = namedTag && namedTag.indexOf(brackets(0)) < 0 ? namedTag : child ? child.name : dom.tagName.toLowerCase()

  return tagName
}

function extend(src) {
  var obj, args = arguments
  for (var i = 1; i < args.length; ++i) {
    if ((obj = args[i])) {
      for (var key in obj) {      // eslint-disable-line guard-for-in
        src[key] = obj[key]
      }
    }
  }
  return src
}

// with this function we avoid that the current Tag methods get overridden
function cleanUpData(data) {
  if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION)) return data

  var o = {}
  for (var key in data) {
    if (!~RESERVED_WORDS_BLACKLIST.indexOf(key))
      o[key] = data[key]
  }
  return o
}

function walk(dom, fn) {
  if (dom) {
    if (fn(dom) === false) return
    else {
      dom = dom.firstChild

      while (dom) {
        walk(dom, fn)
        dom = dom.nextSibling
      }
    }
  }
}

// minimize risk: only zero or one _space_ between attr & value
function walkAttributes(html, fn) {
  var m,
      re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g

  while ((m = re.exec(html))) {
    fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
  }
}

function isInStub(dom) {
  while (dom) {
    if (dom.inStub) return true
    dom = dom.parentNode
  }
  return false
}

function mkEl(name) {
  return document.createElement(name)
}

function replaceYield(tmpl, innerHTML) {
  return tmpl.replace(/<(yield)\/?>(<\/\1>)?/gi, innerHTML || '')
}

function $$(selector, ctx) {
  return (ctx || document).querySelectorAll(selector)
}

function $(selector, ctx) {
  return (ctx || document).querySelector(selector)
}

function inherit(parent) {
  function Child() {}
  Child.prototype = parent
  return new Child()
}

function setNamed(dom, parent, keys) {
  if (dom._visited) return
  var p,
      v = dom.getAttribute('id') || dom.getAttribute('name')

  if (v) {
    if (keys.indexOf(v) < 0) {
      p = parent[v]
      if (!p)
        parent[v] = dom
      else if (isArray(p))
        p.push(dom)
      else
        parent[v] = [p, dom]
    }
    dom._visited = true
  }
}

// faster String startsWith alternative
function startsWith(src, str) {
  return src.slice(0, str.length) === str
}

/*
 Virtual dom is an array of custom tags on the document.
 Updates and unmounts propagate downwards from parent to children.
*/

var virtualDom = [],
    tagImpl = {},
    styleNode

function injectStyle(css) {

  if (riot.render) return // skip injection on the server

  if (!styleNode) {
    styleNode = mkEl('style')
    styleNode.setAttribute('type', 'text/css')
  }

  var head = document.head || document.getElementsByTagName('head')[0]

  if (styleNode.styleSheet)
    styleNode.styleSheet.cssText += css
  else
    styleNode.innerHTML += css

  if (!styleNode._rendered)
    if (styleNode.styleSheet) {
      document.body.appendChild(styleNode)
    } else {
      var rs = $('style[type=riot]')
      if (rs) {
        rs.parentNode.insertBefore(styleNode, rs)
        rs.parentNode.removeChild(rs)
      } else head.appendChild(styleNode)

    }

  styleNode._rendered = true

}

function mountTo(root, tagName, opts) {
  var tag = tagImpl[tagName],
      // cache the inner HTML to fix #855
      innerHTML = root._innerHTML = root._innerHTML || root.innerHTML

  // clear the inner html
  root.innerHTML = ''

  if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML)

  if (tag && tag.mount) {
    tag.mount()
    virtualDom.push(tag)
    return tag.on('unmount', function() {
      virtualDom.splice(virtualDom.indexOf(tag), 1)
    })
  }

}

riot.tag = function(name, html, css, attrs, fn) {
  if (isFunction(attrs)) {
    fn = attrs
    if (/^[\w\-]+\s?=/.test(css)) {
      attrs = css
      css = ''
    } else attrs = ''
  }
  if (css) {
    if (isFunction(css)) fn = css
    else injectStyle(css)
  }
  tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
  return name
}

riot.mount = function(selector, tagName, opts) {

  var els,
      allTags,
      tags = []

  // helper functions

  function addRiotTags(arr) {
    var list = ''
    each(arr, function (e) {
      list += ', *[' + RIOT_TAG + '="' + e.trim() + '"]'
    })
    return list
  }

  function selectAllTags() {
    var keys = Object.keys(tagImpl)
    return keys + addRiotTags(keys)
  }

  function pushTags(root) {
    var last
    if (root.tagName) {
      if (tagName && (!(last = root.getAttribute(RIOT_TAG)) || last != tagName))
        root.setAttribute(RIOT_TAG, tagName)

      var tag = mountTo(root,
        tagName || root.getAttribute(RIOT_TAG) || root.tagName.toLowerCase(), opts)

      if (tag) tags.push(tag)
    }
    else if (root.length) {
      each(root, pushTags)   // assume nodeList
    }
  }

  // ----- mount code -----

  if (typeof tagName === T_OBJECT) {
    opts = tagName
    tagName = 0
  }

  // crawl the DOM to find the tag
  if (typeof selector === T_STRING) {
    if (selector === '*')
      // select all the tags registered
      // and also the tags found with the riot-tag attribute set
      selector = allTags = selectAllTags()
    else
      // or just the ones named like the selector
      selector += addRiotTags(selector.split(','))

    els = $$(selector)
  }
  else
    // probably you have passed already a tag or a NodeList
    els = selector

  // select all the registered and mount them inside their root elements
  if (tagName === '*') {
    // get all custom tags
    tagName = allTags || selectAllTags()
    // if the root els it's just a single tag
    if (els.tagName)
      els = $$(tagName, els)
    else {
      // select all the children for all the different root elements
      var nodeList = []
      each(els, function (_el) {
        nodeList.push($$(tagName, _el))
      })
      els = nodeList
    }
    // get rid of the tagName
    tagName = 0
  }

  if (els.tagName)
    pushTags(els)
  else
    each(els, pushTags)

  return tags
}

// update everything
riot.update = function() {
  return each(virtualDom, function(tag) {
    tag.update()
  })
}

// @deprecated
riot.mountTo = riot.mount

  // share methods for other riot parts, e.g. compiler
  riot.util = { brackets: brackets, tmpl: tmpl }

  // support CommonJS, AMD & browser
  /* istanbul ignore next */
  if (typeof exports === T_OBJECT)
    module.exports = riot
  else if (typeof define === 'function' && define.amd)
    define(function() { return (window.riot = riot) })
  else
    window.riot = riot

})(typeof window != 'undefined' ? window : void 0);

},{}],19:[function(require,module,exports){
function parseBool(string) {
    return (string == "true");
}

riot.tag('riot-froala',' \
     <div id="riot-froala-edit"></div> \
 ',
    function(opts) {
        this.editor = null;
        this.initialized = false;
        var self = this;
        var useRelativeImageWidth = false;

        this.init = function() {
            var $ = require('jquery');

            require('./lib/js/froala_editor.min')($);
            require('./lib/css/froala_editor.min.css');

            // Plugins
            require('./lib/js/plugins/lists.min')($);
            require('./lib/js/plugins/video.min')($);
            require('./lib/js/plugins/image.min')($);
            require('./lib/js/plugins/link.min')($);
            require('./lib/js/plugins/paragraph_format.min')($);
            require('./lib/css/plugins/file.min.css');
            require('./lib/css/plugins/image.min.css');
            require('./lib/css/plugins/video.min.css');

            // Themes
            require('./lib/css/themes/dark.min.css');
            require('./lib/css/themes/gray.min.css');
            require('./lib/css/themes/red.min.css');
            require('./lib/css/themes/royal.min.css');

            // Options
            var options = {
                toolbarInline : opts['inline-mode'] || 'true',
                theme  : opts['theme'] || 'dark',
                placeholderText : opts['placeholder'] || 'Type something',
                enter: opts['paragraphy'] || 'true'
            }

            options.toolbarInline = parseBool(options.toolbarInline);
            options.enter = parseBool(options.enter);

            if (opts['key']) {
                options.key  = opts['key']
            }

            if (opts['shortcuts-available']) {
                options.shortcutsEnabled  = opts['shortcuts-available'].split(/\s+/);
            }
            if (opts['buttons']) {
                options.toolbarButtonsXS = options.toolbarButtonsSM = options.toolbarButtonsMD = options.toolbarButtons = opts['buttons'].split(/\s+/);
            }
            if (opts['block-tags']) {
                options.paragraphFormat = opts['block-tags'];
            }

            if (opts['width']) {
                options.width = opts['width'];
            }
            if (opts['height']) {
                options.height = opts['height'];
            }

            if (opts['link-classes']) {
                options.linkStyles = opts['link-classes'];
            }

            if (opts['default-image-width']) {
                options.imageDefaultWidth = opts['default-image-width'];
            }

            if (opts['image-upload-to-s3-details']) {
                options.imageUploadToS3 = opts['image-upload-to-s3-details'];
            }

            if (opts['use-relative-image-width'] && opts['use-relative-image-width'].toLowerCase() == 'true') {
                useRelativeImageWidth = true;
            }

            $(this.root).find('#riot-froala-edit').on('froalaEditor.initialized', function(e, editor) {
                self.editor = editor;
                self.initialized = true;

                if (opts['default-link-class']) {
                    // Set a default class value and hide the combo box

                    // the following doesn't work because the buttons popup is only created/added to the DOM after the first time it's displayed, and not once the editor is initialized
                    //$('.fr-popup .fr-buttons button.fr-command.fr-btn.fr-dropdown i.fa-magic').parent().addClass('fr-hidden');
                }
                if (opts['value']) {
                    editor.html.set(opts['value']);
                }
            });

            $(this.root).find('#riot-froala-edit').froalaEditor(options);

            $(this.root).find('#riot-froala-edit').on('froalaEditor.contentChanged', function (e, editor) {
                if (opts['value']) {
                    opts['value'] = self.getHTML();
                }
                if (opts['content-changed']) {
                    opts['content-changed'](e, editor);
                }
                if (!self.settingHTML && opts['content-input']) {
                    opts['content-input'](e, editor);
                }
                self.settingHTML = false;
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.afterRemoveImage', function (e, editor) {
                if (opts['content-changed']) {
                    opts['content-changed'](e, editor);
                }
                if (opts['content-input']) {
                    opts['content-input'](e, editor);
                }
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.image.resizeEnd', function (e, editor) {
                if (opts['content-changed']) {
                    opts['content-changed'](e, editor);
                }
                if (opts['content-input']) {
                    opts['content-input'](e, editor);
                }
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.image.beforeUpload', function (e, editor, images) {
                if (opts['before-upload-image']) {
                    opts['before-upload-image'](e, editor, images);
                }
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.focus', function (e, editor) {
                self.settingHTML = false;
            });
        }

        this.getHTML = function() {
            if (self.editor) {
                var editorHTML = self.editor.html.get();
                var virtualFroalaContentDiv = $('<div />').html(editorHTML);

                if (useRelativeImageWidth) {
                    // parse html into an actual element
                    var containerWidth = $(this.root).find('#riot-froala-edit .froala-view').width()

                    var virtualFroalaContentImageElements = virtualFroalaContentDiv.find('img');

                    // parse images and replace absolute width with relative
                    virtualFroalaContentImageElements.each(function () {
                        var absoluteWidthValue = $(this).attr('width');

                        if (typeof absoluteWidthValue !== typeof undefined && absoluteWidthValue !== false) {

                            if (!absoluteWidthValue.endsWith('%')) {
                                var relativeWidthValue = Math.round((absoluteWidthValue / containerWidth) * 100) + '%';
                                $(this).attr('width', relativeWidthValue);
                            }
                        }
                    });
                }

                if (opts['default-link-class']) {
                    var virtualFroalaContentHrefElements = virtualFroalaContentDiv.find('a');

                    // parse anchor tags and add default style
                    virtualFroalaContentHrefElements.each(function() {
                        $(this).addClass(opts['default-link-class']);
                    });
                }

                editorHTML = virtualFroalaContentDiv.html();
                return editorHTML;
            } else {
                return null;
            }
        }

        this.setHTML = function(string) {
            if (self.editor) {
                self.settingHTML = true;
                self.editor.html.set(string);
            }
        }

        this.getTextContentLength = function() {
            var el = document.createElement("div");
            el.innerHTML = self.getHTML();
            return el.textContent.length;
        }

        this.setBlockTags = function(blockTags) {
            opts['block-tags'] =  blockTags;
        }
        this.setLinkClasses = function(linkClasses) {
            opts['link-classes'] = linkClasses;
        }

        this.setImageUploadToS3Details = function(imageUploadToS3Details) {

            /*

             $('.selector').froalaEditor({
             imageUploadToS3: {
             bucket: 'editor',
             // Your bucket region.
             region: 'us-east-1',
             keyStart: 'uploads/',
             callback: function (url, key) {
             // The URL and Key returned from Amazon.
             console.log (url);
             console.log (key);
             },
             params: {
             acl: 'public-read', // ACL according to Amazon Documentation.
             AWSAccessKeyId: 'ACCESS_KEY', // Access Key from Amazon.
             policy: 'POLICY_STRING', // Policy string computed in the backend.
             signature: '', // Signature computed in the backend.
             }
             }
             });

             */

            opts['image-upload-to-s3-details'] = imageUploadToS3Details;
        }
    }
); 


},{"./lib/css/froala_editor.min.css":2,"./lib/css/plugins/file.min.css":3,"./lib/css/plugins/image.min.css":4,"./lib/css/plugins/video.min.css":5,"./lib/css/themes/dark.min.css":6,"./lib/css/themes/gray.min.css":7,"./lib/css/themes/red.min.css":8,"./lib/css/themes/royal.min.css":9,"./lib/js/froala_editor.min":10,"./lib/js/plugins/image.min":11,"./lib/js/plugins/link.min":12,"./lib/js/plugins/lists.min":13,"./lib/js/plugins/paragraph_format.min":14,"./lib/js/plugins/video.min":15,"jquery":17}]},{},[1]);
