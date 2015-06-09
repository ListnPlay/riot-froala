(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "/*!\n * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)\n * License https://www.froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */[contenteditable],[contenteditable]:focus{outline:0 solid transparent}button{outline:0}.fr-visible{display:block!important}.f-non-selectable{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.f-non-selectable *{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.f-italic{font-style:italic!important}.f-spaced{letter-spacing:3px!important}.f-uppercase{text-transform:uppercase!important}.f-typewriter{font-family:'Lucida Console',monospace!important;line-height:160%!important;font-size:14px}.froala-box{position:relative}.froala-box:after{position:absolute;bottom:5px;right:7px;color:#CCC;content:attr(data-chars);font-size:15px;font-family:\"Times New Roman\",Georgia,Serif}.froala-box.f-rtl:after{left:7px;right:auto}.froala-box.fr-disabled .froala-wrapper{overflow:hidden}.froala-box.fr-disabled .froala-element{color:#999}.froala-box.fr-disabled .froala-element img{-webkit-opacity:.5;-moz-opacity:.5;opacity:.5;-ms-filter:\"alpha(Opacity=0)\"}.froala-box .froala-wrapper{overflow:auto}.froala-box .html-switch{position:absolute;right:1px;top:1px;z-index:1000;display:none;font-size:14px;line-height:160%;height:30px;background:#fff;color:#353535;cursor:pointer;-webkit-transition:background linear .1s;-moz-transition:background linear .1s;-ms-transition:background linear .1s;-o-transition:background linear .1s;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;-moz-outline:0;outline:0;border:0;width:40px}.froala-box .html-switch:hover{color:#fff;background:#2c82c9}.froala-box.fr-fullscreen{margin:0!important;position:fixed;top:0;left:0;bottom:0;right:0;z-index:3000}.froala-box.fr-fullscreen .froala-editor{width:100%!important;position:relative!important;left:0!important;right:0!important}.froala-box.fr-fullscreen .froala-editor.f-basic.f-scroll{border-bottom:0!important}.froala-box.fr-fullscreen .froala-element{padding-top:10px!important}.froala-box.f-html .html-switch{display:inline-block}.f-html ::selection{background:#6d90ba;color:#FFF}.f-html ::-moz-selection{background:#6d90ba;color:#FFF}::selection{background:#b5d6fd;color:#000}::-moz-selection{background:#b5d6fd;color:#000}.fr-hidden{display:none!important}body.fr-fullscreen{overflow:hidden}img.fr-fil{z-index:1;position:relative;margin:auto;overflow:auto;padding:10px 10px 10px 3px;float:left!important}img.fr-fil.fr-dib{float:none!important;margin-left:0!important}img.fr-fir{z-index:1;position:relative;margin:auto;overflow:auto;padding:10px 3px 10px 10px;float:right!important}img.fr-fir.fr-dib{float:none!important;margin-right:0!important}img.fr-fin{z-index:1;position:relative;margin:auto;overflow:auto;float:none}img.fr-fin.fr-dib{padding:10px 0}img.fr-dib{vertical-align:top;display:block}a.fr-file{position:relative}a.fr-file:before{position:relative;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:\"\\f0c6\";top:0;padding-right:3px}.froala-view table,table.fr-tag{border-collapse:collapse;empty-cells:show;width:100%;margin-bottom:10px;margin-top:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.froala-view table td,table.fr-tag td{border:solid 1px #ccc;padding:5px;vertical-align:top}.froala-view table th,table.fr-tag th{background:#e6e6e6;border:solid 1px #ccc;padding:5px;vertical-align:top}.froala-view pre,pre.fr-tag{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;border:solid 1px #ccc;background:#fcfcfc;padding:10px;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;font-family:\"Courier New\",Courier,monospace}.froala-view blockquote,blockquote.fr-tag{margin-left:20px;margin-right:0;margin-top:0;padding-left:20px;position:relative;font-style:italic;border-left:solid 5px #ccc}.froala-view hr,hr.fr-tag{height:0;border:0;border-top:solid 1px #ccc;clear:both}.fr-fvn{float:none;display:block!important;text-align:center!important}.fr-fvl{float:left;margin:10px 10px 10px 1px}.fr-fvr{float:right;margin:10px 1px 10px 10px}.fr-tnv{float:none!important;margin:auto;text-align:center;display:block!important}.fr-tnv.fr-fvl{text-align:left}.fr-tnv.fr-fvr{text-align:right}.froala-element{min-height:35px;overflow-y:auto;overflow-x:hidden;position:relative;word-wrap:break-word;vertical-align:top;cursor:text;z-index:2;-webkit-user-select:auto}.froala-element.f-image{overflow:visible}.froala-element .btn{user-select:text;-o-user-select:text;-moz-user-select:text;-khtml-user-select:text;-webkit-user-select:text;-ms-user-select:text}.froala-element [contenteditable=false],.froala-element [contenteditable=false] *{user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.froala-element+span.fr-placeholder{display:none}.froala-element.f-placeholder+span.fr-placeholder{color:#ccc;position:absolute;margin:0;left:0;right:0;top:2px;display:inline-block;cursor:text;padding-left:2px;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;z-index:1}.froala-element.f-basic.f-placeholder+span.fr-placeholder{margin:10px}.froala-element.not-msie pre,.froala-element.not-msie blockquote{overflow:hidden}.froala-element table>span,.froala-element table tr>span{display:none;visibility:hidden}.froala-element table th{font-weight:400}.froala-element a{cursor:pointer}.froala-element img{min-width:32px!important;min-height:32px!important;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.froala-element img.fr-fil,.froala-element img.fr-fir,.froala-element img.fr-fin{cursor:pointer;z-index:1;position:relative;margin:auto;overflow:auto}.froala-element:not(.ie8) img{max-width:100%!important}.froala-element td img{max-width:auto!important}.froala-element img::selection{color:#fff;background-color:transparent!important}.froala-element img::-moz-selection{color:#fff;background-color:transparent!important}.froala-element span.f-img-wrap{line-height:0;text-align:center;border:0;outline:0;max-width:100%!important;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.froala-element span.f-img-wrap.fr-fin.fr-dib{display:block}.froala-element span.f-img-wrap.fr-fir{float:right}.froala-element span.f-img-wrap.fr-fil{float:left}.froala-element span.f-img-wrap.fr-dib{display:block;text-align:center;float:none!important}.froala-element span.f-img-wrap.fr-dib.fr-fil:after,.froala-element span.f-img-wrap.fr-dib.fr-fir:after{content:\"\";display:block;clear:both}.froala-element span.f-img-editor{display:inline-block;position:relative;max-width:100%!important;text-align:center;padding:0;line-height:0;overflow:visible;z-index:2;border:0;outline:0;outline-color:transparent;border-color:transparent}.froala-element span.f-img-editor:after{content:\"\";display:block;clear:both}.froala-element span.f-img-editor:before{content:\"\";position:absolute;top:0;left:0;bottom:0;right:0;display:block;border:0!important;outline:solid 1px #2c82c9!important;z-index:1}.froala-element span.f-img-editor.fr-fil{margin:10px 10px 10px 3px;float:left}.froala-element span.f-img-editor.fr-fir{margin:10px 3px 10px 10px;float:right}.froala-element span.f-img-editor.fr-fin{float:none}.froala-element span.f-img-editor.fr-fin.fr-dib{margin:10px 0}.froala-element span.f-img-editor img{padding:0!important;margin:auto}.froala-element span.f-img-editor.fr-dib{display:inline-block}.froala-element span.f-img-handle{position:absolute;height:8px;width:8px;border:solid 1px #fff!important;background:#2c82c9;z-index:2;margin:auto}.froala-element span.f-img-handle.f-h-ne{top:-4px;left:auto;right:-4px;bottom:auto;cursor:ne-resize}.froala-element span.f-img-handle.f-h-se{top:auto;left:auto;right:-4px;bottom:-4px;cursor:se-resize}.froala-element span.f-img-handle.f-h-sw{top:auto;left:-4px;right:auto;bottom:-4px;cursor:sw-resize}.froala-element span.f-img-handle.f-h-nw{top:-4px;left:-4px;right:auto;bottom:auto;cursor:nw-resize}@media (max-width:991px){.froala-element span.f-img-handle{height:12px;width:12px}.froala-element span.f-img-handle.f-h-ne{top:-6px;right:-6px}.froala-element span.f-img-handle.f-h-se{right:-6px;bottom:-6px}.froala-element span.f-img-handle.f-h-sw{left:-6px;bottom:-6px}.froala-element span.f-img-handle.f-h-nw{top:-6px;left:-6px}}.froala-element .f-video-editor{display:inline-block;position:relative;line-height:0;cursor:pointer;padding:3px}.froala-element .f-video-editor>*{max-width:100%}.froala-box .froala-element .f-video-editor:after{position:absolute;content:'';z-index:1;top:0;left:0;right:0;bottom:0;cursor:pointer}.froala-box .froala-element .f-video-editor.active:after{border:solid 1px #252525}.froala-box .froala-element .f-video-editor.active>*{z-index:2;position:relative}.f-html:after{display:none}.f-html .froala-wrapper:after{clear:both;display:block;content:\"\"}.f-html .froala-element{background:#202020;color:#fff;font-family:'Courier New',Monospace;font-size:13px;overflow-y:auto;padding:0}.f-html .froala-element+.fr-placeholder{display:none!important}.f-html .froala-element:after{clear:both;display:block;content:\"\"}.f-html .froala-element.f-inline textarea{padding:10px 0 0 10px}.f-html .froala-element textarea{direction:ltr!important;text-align:left;width:100%;word-wrap:break-word;padding:0;background:0 0;border:0 transparent;color:#FFF;resize:none!important;line-height:140%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;min-height:100px;font-size:inherit;font-family:inherit;outline:0;margin:0}.froala-editor :not(input):not(textarea){user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.froala-editor{text-align:left;background:#fff;border:solid 1px #252525;border-top:solid 5px #252525;padding:0;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;font-size:15px;z-index:1000;font-family:Arial,Helvetica,sans-serif;line-height:140%}.froala-editor.f-inline{position:absolute}.froala-editor *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.froala-editor:not(.froala-modal):before{width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom-color:inherit;border-bottom-style:solid;border-bottom-width:6px;content:'';position:absolute;top:-10px;left:15px}.froala-editor.right-side:before{right:15px;left:auto}.froala-editor hr{border:0;border-top-width:1px;border-top-style:solid;border-top-color:#ccc;margin:0!important;height:0}.froala-editor span.f-sep{display:inline-block;width:0;height:35px;margin:0;border-right:solid 1px #ccc;float:left}.froala-editor button::-moz-focus-inner{border:0}.froala-editor i.for-text{font-style:normal;font-weight:700;padding-left:4px}.froala-editor .fr-dropdown{display:inline-block;position:relative;text-align:left;user-select:none;-o-user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none}.froala-editor .fr-dropdown .fr-trigger.active+.fr-dropdown-menu{display:block}.froala-editor .fr-dropdown .fr-trigger{padding-left:2px;width:38px;text-align:left}.froala-editor .fr-dropdown .fr-trigger i{margin-left:5px}.froala-editor .fr-dropdown .fr-dropdown-menu{display:none;position:absolute;background:#fff;text-align:left;left:0;top:35px;margin-top:0;padding:0;border:solid 1px #252525;z-index:1000;-webkit-overflow-scrolling:touch}.froala-editor .fr-dropdown .fr-dropdown-menu li{list-style-type:none;position:relative}.froala-editor .fr-dropdown .fr-dropdown-menu li button.fr-bttn{margin:5px}.froala-editor .fr-dropdown .fr-dropdown-menu li.active a{background:#444!important;color:#fff!important}.froala-editor .fr-dropdown .fr-dropdown-menu li a{padding:5px 25px;margin:0;display:block;text-decoration:none;outline:0;color:#444;white-space:nowrap;font-size:14px;line-height:130%}.froala-editor .fr-dropdown .fr-dropdown-menu li a:hover{background:#444!important;color:#fff!important}.froala-editor .fr-dropdown .fr-dropdown-menu hr{clear:both;height:0;border:0;display:block}.froala-editor .fr-dropdown .fr-dropdown-menu:after{clear:both;content:\"\";display:block}.froala-editor .fr-dropdown.fr-color-picker i{padding-left:3px}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu{padding:0;line-height:0;white-space:nowrap;text-align:left;direction:ltr!important}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu>div{white-space:nowrap;display:inline-block}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p{margin:0;font-size:13px;line-height:1;color:#444}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p span{float:left}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p span.fr-choose-color{padding:5px 10px;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-top:solid 4px transparent;border-bottom:solid 4px transparent;cursor:pointer;width:100%}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p span.fr-choose-color.fr-50{width:50%}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p span.fr-choose-color.active,.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p span.fr-choose-color:hover{border-bottom:solid 4px #2c82c9}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn{display:inline-block;float:right;padding:0;color:#444;-webkit-transition:color linear .1s;-moz-transition:color linear .1s;-ms-transition:color linear .1s;-o-transition:color linear .1s;cursor:pointer}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn:hover{color:#2c82c9}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p:after{content:\"\";display:block;clear:both}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn{display:inline-block;width:32px;height:32px;padding:0;border:0;outline:0;position:relative;z-index:100;line-height:16px!important;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active{border:0;outline:solid 1px #252525;z-index:101}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active:after{position:absolute;left:0;right:0;text-align:center;top:0;bottom:0;line-height:30px;content:\"\\f00c\";font-family:FontAwesome;font-weight:400;font-size:12px;color:#fff}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn i{font-size:13px}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .separator{height:8px}.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn:hover:not(:focus):not(:active){outline:solid 1px #252525;z-index:300}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-blockquote{font-style:italic}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-pre{font-family:\"Courier New\",Courier,monospace}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h1{font-size:36px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h2{font-size:30px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h3{font-size:24px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h4{font-size:18px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h5{font-size:14px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu li a.format-h6{font-size:12px;line-height:1.1;font-weight:400}.froala-editor .fr-dropdown .fr-dropdown-menu.f-font-sizes{max-height:200px;overflow-y:scroll}.froala-editor .fr-dropdown .fr-dropdown-menu.f-font-sizes a{padding:5px 7px!important;font-size:12px;line-height:160%}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>a{padding-left:10px;position:relative}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>a i{bottom:0;font-size:12px;height:10px;margin:auto;position:absolute;right:5px;top:0}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>a,.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>a{background:#444;color:#fff}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>div,.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>div,.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>ul,.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>ul{display:block!important}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul{display:none;position:absolute;left:100%;top:0;background:#fff;color:#444;border:solid 1px #252525;line-height:0;padding:0;margin:0}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul a{padding:5px 10px}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div{display:none;position:absolute;left:100%;top:0;background:#fff;color:#444;border:solid 1px #252525;line-height:0;padding:5px;white-space:nowrap}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>div.fr-t-info{line-height:140%;text-align:center;font-size:13px;padding-bottom:5px}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span{display:inline-block;padding:0 4px 4px 0;line-height:0;float:none}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span>span{display:inline-block;width:12px;height:12px;border:solid 1px #ccc}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span:hover>span,.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span.hover>span{background:rgba(61,142,185,.3);border:solid 1px #3d8eb9}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div .new-line{content:\"\";display:block;clear:both}.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>hr{border-top:solid 1px #252525}.froala-editor .fr-dropdown .fr-dropdown-menu.f-align a{padding:5px 0!important;width:40px;text-align:center;font-size:16px}.froala-editor button.fr-bttn:disabled,.froala-editor button.fr-trigger:disabled,.froala-box.fr-disabled button.fr-bttn,.froala-box.fr-disabled button.fr-trigger{color:#999!important;background:transparent!important;cursor:default}.froala-editor button.fr-bttn:disabled:after,.froala-editor button.fr-trigger:disabled:after,.froala-box.fr-disabled button.fr-bttn:after,.froala-box.fr-disabled button.fr-trigger:after{border-top-color:#999!important}.froala-editor button.fr-bttn,.froala-editor button.fr-trigger{padding:0;background:0 0;color:#353535;-moz-outline:0;outline:0;border:0;font-size:16px;line-height:35px;display:inline-block;cursor:pointer;width:40px;text-align:center;margin:0;-webkit-transition:background linear .1s;-moz-transition:background linear .1s;-ms-transition:background linear .1s;-o-transition:background linear .1s;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;z-index:2;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.froala-editor button.fr-bttn img,.froala-editor button.fr-trigger img{max-width:40px;max-height:35px;display:block}.froala-editor button.fr-bttn i,.froala-editor button.fr-trigger i{line-height:35px;-moz-outline:0;outline:0}.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover,.froala-editor .froala-popup button.fr-bttn:hover,.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover,.froala-editor .froala-popup button.fr-trigger:hover{background:#2c82c9;color:#fff}.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover:after,.froala-editor .froala-popup button.fr-bttn:hover:after,.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover:after,.froala-editor .froala-popup button.fr-trigger:hover:after{border-top-color:#fff}.froala-editor .fr-bttn.active{color:#2c82c9;background:0 0}.froala-editor .fr-trigger:after{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top-width:3px;border-top-style:solid;border-top-color:#353535;content:' ';position:absolute;top:15px;right:8px;color:inherit;cursor:pointer;z-index:3;zoom:1}.froala-editor .fr-trigger.active{color:#fff;background:#2c82c9}.froala-editor .fr-trigger.active:after{border-top-color:#fff!important}.froala-editor .froala-popup{font-size:13px;background:#fff}.froala-editor .froala-popup :not(input):not(textarea){-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.froala-editor .froala-popup h4{margin:0;font-size:14px;color:#444;padding:7px 7px 0}.froala-editor .froala-popup h4:after{content:\".\";display:block;clear:both;visibility:hidden;line-height:0;height:0}.froala-editor .froala-popup h4 span{float:left}.froala-editor .froala-popup h4 i{float:right;cursor:pointer;color:#ccc;-webkit-transition:all .2s ease-in;-moz-transition:all .2s ease-in;-ms-transition:all .2s ease-in;-o-transition:all .2s ease-in}.froala-editor .froala-popup h4 i.fa-external-link{float:left;margin-left:5px;margin-top:1px;color:#444}.froala-editor .froala-popup h4 i.fa-external-link:hover{color:#2c82c9}.froala-editor .froala-popup h4 i:hover{color:#444}.froala-editor .froala-popup div.f-popup-line{margin:0 7px;padding:10px 0;display:block;position:relative}.froala-editor .froala-popup div.f-popup-line.f-popup-toolbar{background:#fff}.froala-editor .froala-popup div.f-popup-line:after{content:\"\";display:block;clear:both}.froala-editor .froala-popup div.f-popup-line label{float:left;margin:5px 5px 0;line-height:120%;color:#444}.froala-editor .froala-popup div.f-popup-line input[type=text]{font-size:12px;width:250px;border:solid 1px #ccc;margin:0 5px!important;height:25px;line-height:21px;display:block;padding:2px;float:left;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;outline:0}.froala-editor .froala-popup div.f-popup-line input[type=text]:focus{border:solid 1px #54acd2}.froala-editor .froala-popup div.f-popup-line input[type=checkbox]{float:left;margin-right:0;margin-left:0;margin-top:5px}.froala-editor .froala-popup div.f-popup-line textarea{padding:5px;font-size:12px;margin:0;border:solid 1px #ccc;width:100%;height:50px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;-moz-resize:none;-webkit-resize:none;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;outline:0}.froala-editor .froala-popup div.f-popup-line textarea:focus{border:solid 1px #54acd2;outline:0}.froala-popup.froala-image-popup div.f-popup-line.drop-upload,.froala-popup.froala-file-popup div.f-popup-line.drop-upload{overflow:hidden;position:relative}.froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload,.froala-popup.froala-file-popup div.f-popup-line.drop-upload div.f-upload{border:dashed 2px #ccc;color:#444;font-weight:400;text-align:center;padding:10px 0;min-width:315px;position:relative;overflow:hidden}.froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload:hover,.froala-popup.froala-file-popup div.f-popup-line.drop-upload div.f-upload:hover{border:dashed 2px #353535}.froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload.f-hover,.froala-popup.froala-file-popup div.f-popup-line.drop-upload div.f-upload.f-hover{border:dashed 2px #61bd6d}.froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload strong,.froala-popup.froala-file-popup div.f-popup-line.drop-upload div.f-upload strong{font-size:14px}.froala-popup.froala-image-popup div.f-popup-line.drop-upload form,.froala-popup.froala-file-popup div.f-popup-line.drop-upload form{width:100%;height:100%;background:0 0;position:absolute;top:0;left:0;-webkit-opacity:0;-moz-opacity:0;opacity:0;-ms-filter:\"alpha(Opacity=0)\";cursor:pointer;overflow:hidden}.froala-popup.froala-image-popup div.f-popup-line.drop-upload form input,.froala-popup.froala-file-popup div.f-popup-line.drop-upload form input{background:0 0;display:inline-block;width:400%;margin-left:-300%;height:100%;cursor:pointer;font-size:1000px!important}.froala-popup.froala-image-popup div.f-popup-line.drop-upload form button,.froala-popup.froala-file-popup div.f-popup-line.drop-upload form button{background:0 0}.froala-popup.froala-image-popup div.f-popup-line button.f-browse,.froala-popup.froala-file-popup div.f-popup-line button.f-browse{display:none;margin:0 5px 0 -1px;padding:2px 7px;background:#475577;color:#fff;border:0;vertical-align:top}.froala-popup.froala-image-popup div.f-popup-line button.f-browse:hover,.froala-popup.froala-file-popup div.f-popup-line button.f-browse:hover{background:#353535;color:#fff}.froala-popup.froala-image-popup div.f-popup-line+div.f-popup-line,.froala-popup.froala-file-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc}.froala-popup.froala-image-popup div.f-popup-line input[type=text],.froala-popup.froala-file-popup div.f-popup-line input[type=text]{margin-right:0!important;width:160px}.froala-popup.froala-image-popup h4 span+span,.froala-popup.froala-file-popup h4 span+span{display:none}.froala-popup.froala-image-popup h4.uploading span,.froala-popup.froala-file-popup h4.uploading span{display:none}.froala-popup.froala-image-popup h4.uploading span+span,.froala-popup.froala-file-popup h4.uploading span+span{display:inline-block}.froala-popup.froala-image-popup h4.uploading i,.froala-popup.froala-file-popup h4.uploading i{display:none}.froala-popup.froala-image-popup p.f-progress,.froala-popup.froala-file-popup p.f-progress{width:100%;display:none;border:0;height:20px;margin:5px 0;width:250px}.froala-popup.froala-image-popup p.f-progress span,.froala-popup.froala-file-popup p.f-progress span{display:inline-block;height:100%;background-color:#61bd6d;text-align:center;color:#fff;line-height:20px}.froala-popup.froala-image-editor-popup div.f-popup-line{padding:0;margin:0}.froala-popup.froala-image-editor-popup div.f-popup-line input[type=text]{width:160px}.froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc;padding:5px}.froala-popup.froala-link-popup div.f-popup-line button{float:right}.froala-popup.froala-link-popup div.f-popup-line input[type=text]{margin-left:0!important;margin-right:0!important}.froala-popup.froala-link-popup div.f-popup-line input[type=text].f-bi{width:225px}.froala-popup.froala-link-popup div.f-popup-line input[type=text]:disabled{background:#fff;color:#999}.froala-popup.froala-link-popup div.f-popup-line input[type=text]:disabled.f-bi{color:inherit}.froala-popup.froala-link-popup div.f-popup-line input[type=text].fr-error{border-color:#b8312f}.froala-popup.froala-link-popup div.f-popup-line:not(.fr-hidden)+div.f-popup-line,.froala-popup.froala-link-popup div.f-popup-line+div.f-popup-line:last-child{padding-top:0}.froala-popup.froala-link-popup div.f-popup-line:not(.fr-hidden)+div.f-popup-line ul,.froala-popup.froala-link-popup div.f-popup-line+div.f-popup-line:last-child ul{top:25px}.froala-popup.froala-link-popup div.f-popup-line .f-browse-links{background:#475577;color:#fff;margin-left:-1px;border:0}.froala-popup.froala-link-popup div.f-popup-line .f-browse-links:hover{background:#353535;color:#fff}.froala-popup.froala-link-popup div.f-popup-line .f-browse-links:after{content:\"\";display:block;clear:both}.froala-popup.froala-link-popup div.f-popup-line ul{background:#fff;display:block;list-style-type:none;margin:0;padding:0;position:absolute;top:35px;left:0;right:0;border:solid 1px #ccc;border-top:0;display:none;max-height:100px;overflow-x:hidden;overflow-y:auto;z-index:2}.froala-popup.froala-link-popup div.f-popup-line ul li{padding:2px 5px;cursor:pointer;color:#444}.froala-popup.froala-link-popup div.f-popup-line ul li+li{border-top:solid 1px #ccc}.froala-popup.froala-link-popup div.f-popup-line ul li:hover{background:#444;color:#fff}.froala-popup.froala-video-popup div.f-popup-line{padding-bottom:0}.froala-popup.froala-video-popup p{margin:0;text-align:center;font-weight:700}.froala-popup.froala-video-popup p+div.f-popup-line{padding-top:2px;padding-bottom:7px}.froala-popup.froala-video-popup p.or{color:#444}.froala-popup.froala-video-editor-popup div.f-popup-line{padding:0;margin:0}.froala-popup.froala-text-popup div.f-popup-line input{margin-left:0!important}.froala-popup button.fr-p-bttn{border:0;color:#fff;padding:2px 5px;margin:0;font-size:12px;line-height:21px;font-weight:400;cursor:pointer;float:left;-webkit-transition:background linear .2s;-moz-transition:background linear .2s;-ms-transition:background linear .2s;-o-transition:background linear .2s;min-width:16px}.froala-popup button.fr-p-bttn.f-ok{background:#2c82c9;color:#fff}.froala-popup button.fr-p-bttn.f-unlink{background:#b8312f;color:#fff;margin:0 5px}.froala-popup button.fr-p-bttn.f-unlink:hover{background:#353535;color:#fff}.froala-popup button.fr-p-bttn:hover,.froala-popup button.fr-p-bttn:focus{background:#353535;color:#fff}.froala-modal{position:fixed;z-index:1001;overflow-x:auto;overflow-y:scroll;top:0;left:0;bottom:0;right:0;text-align:center;width:100%}.froala-modal .f-modal-wrapper{margin:50px auto;display:inline-block;background:#fff;min-width:300px;text-align:center;border:solid 1px #252525;border-top:solid 5px #252525}.froala-modal .f-modal-wrapper .f-preloader{margin:50px 0}.froala-modal .f-modal-wrapper h4{margin:0;font-size:18px;color:#444;margin:10px;text-align:left}.froala-modal .f-modal-wrapper h4:after{content:\".\";display:block;clear:both;visibility:hidden;line-height:0;height:0}.froala-modal .f-modal-wrapper h4 i{float:right;cursor:pointer;color:#ccc}.froala-modal .f-modal-wrapper h4 i:hover{color:#444}.froala-modal .f-modal-wrapper div.f-image-list{list-style-type:none;margin:10px;padding:0;column-count:3;-moz-column-count:3;-webkit-column-count:3;column-gap:10px;-moz-column-gap:10px;-webkit-column-gap:10px;width:600px}.froala-modal .f-modal-wrapper div.f-image-list div{position:relative;width:100%;display:inline-block;margin-bottom:10px}.froala-modal .f-modal-wrapper div.f-image-list div.f-img-deleting:after{position:absolute;-webkit-opacity:.75;-moz-opacity:.75;opacity:.75;-ms-filter:\"alpha(Opacity=0)\";background:#000;content:\"\";top:0;left:0;bottom:0;right:0;color:#FFF;z-index:2}.froala-modal .f-modal-wrapper div.f-image-list div.f-img-deleting:before{content:\"Deleting...\";color:#FFF;top:0;left:0;bottom:0;right:0;margin:auto;position:absolute;z-index:3;font-size:15px;height:20px}.froala-modal .f-modal-wrapper div.f-image-list div.f-empty{width:100%;height:200px;background:#ccc;position:relative;margin-bottom:10px}.froala-modal .f-modal-wrapper div.f-image-list div.f-empty:after{position:absolute;margin:auto;top:0;bottom:0;left:0;right:0;content:\"Loading..\";display:inline-block;height:20px}.froala-modal .f-modal-wrapper div.f-image-list div img{width:100%;vertical-align:middle}.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{display:none;bottom:0;left:0;background:#b8312f;color:#fff;font-family:Arial,Helvetica;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding:5px;position:absolute;-webkit-transition:background .2s;-moz-transition:background .2s;-ms-transition:background .2s;-o-transition:background .2s;cursor:pointer;margin:0;text-decoration:none}.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img:hover{background:#353535;color:#fff}.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{display:inline-block}.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) img{-webkit-opacity:.75;-moz-opacity:.75;opacity:.75;-ms-filter:\"alpha(Opacity=0)\"}.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) .f-delete-img{display:none}.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img{display:inline-block}.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img:hover{background:#353535;color:#fff}.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover img{-webkit-opacity:1;-moz-opacity:1;opacity:1;-ms-filter:\"alpha(Opacity=0)\"}.froala-overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#000;z-index:1000;-webkit-opacity:.5;-moz-opacity:.5;opacity:.5;-ms-filter:\"alpha(Opacity=0)\"}.froala-editor.f-rtl{direction:rtl;text-align:right}.froala-editor.f-rtl.f-basic .fr-bttn{float:right}.froala-editor.f-rtl.f-basic .f-sep{float:right}.froala-editor.f-rtl .fr-dropdown-menu{text-align:right!important;direction:rtl!important}.froala-editor.f-rtl .fr-dropdown-menu li.active:before{left:auto;right:5px}.froala-editor.f-rtl .fr-dropdown.fr-color-picker .fr-dropdown-menu p{text-align:right!important;direction:rtl!important}.froala-editor.f-rtl .fr-dropdown.fr-table .fr-dropdown-menu>li>a{padding:5px 10px 5px 25px}.froala-editor.f-rtl .fr-dropdown.fr-table .fr-dropdown-menu>li>a i{right:auto;left:5px}.froala-editor.f-rtl .fr-dropdown.fr-table .fr-dropdown-menu>li>a i:before{content:'\\f053'}.froala-editor.f-rtl .fr-dropdown.fr-table .fr-dropdown-menu>li>div,.froala-editor.f-rtl .fr-dropdown.fr-table .fr-dropdown-menu>li>ul{right:100%;left:auto}.froala-editor.f-rtl .froala-popup div.f-popup-line label,.froala-editor.f-rtl .froala-popup div.f-popup-line input{float:right!important}.froala-editor.f-rtl .froala-popup div.f-popup-line button{float:left!important}.froala-editor.f-rtl .froala-popup div.f-popup-line button.f-ok{margin-right:5px}.froala-editor.f-rtl .froala-popup div.f-popup-line button.fr-bttn{float:right!important}.froala-editor.f-rtl .froala-popup div.f-popup-line button.f-browse{float:right!important;margin:0 -1px 0 0}.froala-editor.f-rtl .froala-popup div.f-popup-line input[type=text]{margin-left:0!important}.froala-editor.f-rtl .froala-popup h4{direction:rtl!important}.froala-editor.f-rtl .froala-popup h4 span{float:right}.froala-editor.f-rtl .froala-popup h4 .f-external-link{float:right}.froala-editor.f-rtl .froala-popup h4 .f-external-link i{margin-right:5px;margin-left:1px}.froala-editor.f-rtl .froala-popup h4 i{float:left!important}.froala-modal.f-rtl .f-modal-wrapper{direction:rtl;text-align:right}.froala-modal.f-rtl .f-modal-wrapper h4 span{float:right!important}.froala-modal.f-rtl .f-modal-wrapper h4 i{float:left!important}.froala-modal.f-rtl .f-modal-wrapper a.f-delete-img{left:auto!important;right:0}.froala-element.f-rtl{direction:rtl;text-align:right}.froala-element.f-rtl:after{left:5px;right:auto}.froala-element.f-rtl+.fr-placeholder{left:auto;right:10px;direction:rtl;text-align:right;padding-right:3px}.froala-editor.f-basic{padding:0;z-index:999;width:100%;border-bottom:0!important;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.froala-editor.f-basic:before{display:none}.froala-editor.f-basic:after{content:\"\";display:block;clear:both}.froala-editor.f-basic .fr-bttn{margin:0;float:left}.froala-editor.f-basic.f-scroll{position:fixed;top:0;border-bottom-width:1px!important;border-bottom-style:solid!important;border-bottom-color:inherit!important}.froala-editor.f-basic.f-scroll-abs{position:absolute;left:0;right:0;border-bottom-width:1px!important;border-bottom-style:solid!important;border-bottom-color:inherit!important}.froala-editor.f-basic hr{display:none}.froala-wrapper.f-basic{border:solid 1px #252525;position:relative;background:#fff}.froala-element.f-basic{padding:10px}.froala-element.f-basic span.f-img-editor{left:0;right:0}.ie8 .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload{min-width:350px}.ie8 .froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{min-width:250px}.froala-element.ie8.f-placeholder:before{display:none}.froala-editor.ie8 button.fr-bttn,.froala-editor.ie8 button.fr-trigger{zoom:1;position:relative}.froala-editor.ie8 button.fr-bttn:hover,.froala-editor.ie8 button.fr-trigger:hover{background:#2c82c9;color:#fff}.froala-editor.ie8 button.fr-bttn:hover:after,.froala-editor.ie8 button.fr-trigger:hover:after{border-top-color:#fff;z-index:3}"; (require("./../node_modules/cssify"))(css); module.exports = css;
},{"./../node_modules/cssify":9}],2:[function(require,module,exports){
/*!
 * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
if ("undefined" == typeof jQuery) throw new Error("Froala requires jQuery");
! function(a) {
    "use strict";
    var b = function(c, d) {
        return this.options = a.extend({}, b.DEFAULTS, a(c).data(), "object" == typeof d && d), this.options.unsupportedAgents.test(navigator.userAgent) ? !1 : (this.valid_nodes = a.merge([], b.VALID_NODES), this.valid_nodes = a.merge(this.valid_nodes, a.map(Object.keys(this.options.blockTags), function(a) {
            return a.toUpperCase()
        })), this.browser = b.browser(), this.disabledList = [], this._id = ++b.count, this._events = {}, this.blurred = !0, this.$original_element = a(c), this.document = c.ownerDocument, this.window = "defaultView" in this.document ? this.document.defaultView : this.document.parentWindow, this.$document = a(this.document), this.$window = a(this.window), this.br = this.browser.msie && a.Editable.getIEversion() <= 10 ? "" : "<br/>", this.init(c), void a(c).on("editable.focus", a.proxy(function() {
            for (var b = 1; b <= a.Editable.count; b++) b != this._id && this.$window.trigger("blur." + b)
        }, this)))
    };
    b.initializers = [], b.count = 0, b.VALID_NODES = ["P", "DIV", "LI", "TD", "TH"], b.LANGS = [], b.INVISIBLE_SPACE = "&#x200b;", b.DEFAULTS = {
        allowComments: !0,
        allowScript: !1,
        allowStyle: !1,
        allowedAttrs: ["accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "background", "bgcolor", "border", "charset", "cellpadding", "cellspacing", "checked", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "data", "data-.*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "multiple", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "spellcheck", "style", "tabindex", "target", "title", "type", "translate", "usemap", "value", "valign", "width", "wrap"],
        allowedTags: ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "queue", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"],
        alwaysBlank: !1,
        alwaysVisible: !1,
        autosave: !1,
        autosaveInterval: 1e4,
        beautifyCode: !0,
        blockTags: {
            n: "Normal",
            blockquote: "Quote",
            pre: "Code",
            h1: "Heading 1",
            h2: "Heading 2",
            h3: "Heading 3",
            h4: "Heading 4",
            h5: "Heading 5",
            h6: "Heading 6"
        },
        buttons: ["bold", "italic", "underline", "strikeThrough", "fontSize", "fontFamily", "color", "sep", "formatBlock", "blockStyle", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "sep", "createLink", "insertImage", "insertVideo", "insertHorizontalRule", "undo", "redo", "html"],
        crossDomain: !0,
        convertMailAddresses: !0,
        customButtons: {},
        customDropdowns: {},
        customText: !1,
        defaultTag: "P",
        direction: "ltr",
        disableRightClick: !1,
        editInPopup: !1,
        editorClass: "",
        formatTags: ["p", "pre", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "div", "ul", "ol", "li", "table", "tbody", "thead", "tfoot", "tr", "th", "td", "body", "head", "html", "title", "meta", "link", "base", "script", "style"],
        headers: {},
        height: "auto",
        icons: {},
        inlineMode: !0,
        initOnClick: !1,
        fullPage: !1,
        language: "en_us",
        linkList: [],
        linkText: !1,
        linkClasses: {},
        linkAttributes: {},
        linkAutoPrefix: "",
        maxHeight: "auto",
        minHeight: "auto",
        multiLine: !0,
        noFollow: !0,
        paragraphy: !0,
        placeholder: "Type something",
        plainPaste: !1,
        preloaderSrc: "",
        saveURL: null,
        saveParam: "body",
        saveParams: {},
        saveRequestType: "POST",
        scrollableContainer: "body",
        simpleAmpersand: !1,
        shortcuts: !0,
        shortcutsAvailable: ["show", "bold", "italic", "underline", "createLink", "insertImage", "indent", "outdent", "html", "formatBlock n", "formatBlock h1", "formatBlock h2", "formatBlock h3", "formatBlock h4", "formatBlock h5", "formatBlock h6", "formatBlock blockquote", "formatBlock pre", "strikeThrough"],
        showNextToCursor: !1,
        spellcheck: !1,
        theme: null,
        toolbarFixed: !0,
        trackScroll: !1,
        unlinkButton: !0,
        useClasses: !0,
        tabSpaces: !0,
        typingTimer: 500,
        pastedImagesUploadRequestType: "POST",
        pastedImagesUploadURL: "http://i.froala.com/upload_base64",
        unsupportedAgents: /Opera Mini/i,
        useFrTag: !1,
        width: "auto",
        withCredentials: !1,
        zIndex: 2e3
    }, b.prototype.destroy = function() {
        this.sync(), this.options.useFrTag && this.addFrTag(), this.hide(), this.isHTML && this.html(), this.$bttn_wrapper && this.$bttn_wrapper.html("").removeData().remove(), this.$editor && this.$editor.html("").removeData().remove(), this.raiseEvent("destroy"), this.$popup_editor && this.$popup_editor.html("").removeData().remove(), this.$placeholder && this.$placeholder.html("").removeData().remove(), clearTimeout(this.ajaxInterval), clearTimeout(this.typingTimer), this.$element.off("mousedown mouseup click keydown keyup cut copy paste focus keypress touchstart touchend touch drop"), this.$element.off("mousedown mouseup click keydown keyup cut copy paste focus keypress touchstart touchend touch drop", "**"), this.$window.off("mouseup." + this._id), this.$window.off("keydown." + this._id), this.$window.off("keyup." + this._id), this.$window.off("blur." + this._id), this.$window.off("hide." + this._id), this.$window.off("scroll." + this._id), this.$window.off("resize." + this._id), this.$window.off("orientationchange." + this._id), this.$document.off("selectionchange." + this._id), this.$original_element.off("editable"), void 0 !== this.$upload_frame && this.$upload_frame.remove(), this.$textarea && (this.$box.remove(), this.$textarea.removeData("fa.editable"), this.$textarea.show());
        for (var a in this._events) delete this._events[a];
        this.$placeholder && this.$placeholder.remove(), this.isLink ? this.$element.removeData("fa.editable") : (this.$wrapper ? this.$wrapper.replaceWith(this.getHTML(!1, !1)) : this.$element.replaceWith(this.getHTML(!1, !1)), this.$box && !this.editableDisabled && (this.$box.removeClass("froala-box f-rtl"), this.$box.find(".html-switch").remove(), this.$box.removeData("fa.editable"), clearTimeout(this.typingTimer))), this.$lb && this.$lb.remove()
    }, b.prototype.triggerEvent = function(b, c, d, e) {
        void 0 === d && (d = !0), void 0 === e && (e = !1), d === !0 && (this.isResizing() || this.editableDisabled || this.imageMode || !e || this.cleanify(), this.sync());
        var f = !0;
        return c || (c = []), f = this.$original_element.triggerHandler("editable." + b, a.merge([this], c)), void 0 === f ? !0 : f
    }, b.prototype.syncStyle = function() {
        if (this.options.fullPage) {
            var a = this.$element.html().match(/\[style[^\]]*\].*\[\/style\]/gi);
            if (this.$document.find("head style[data-id]").remove(), a)
                for (var b = 0; b < a.length; b++) this.$document.find("head").append(a[b].replace(/\[/gi, "<").replace(/\]/gi, ">"))
        }
    }, b.prototype.sync = function() {
        if (!this.isHTML) {
            this.raiseEvent("sync"), this.disableImageResize(), this.isLink || this.isImage || this.checkPlaceholder();
            var a = this.getHTML();
            this.trackHTML !== a && null != this.trackHTML ? (this.refreshImageList(), this.refreshButtons(), this.trackHTML = a, this.$textarea && this.$textarea.val(a), this.doingRedo || this.saveUndoStep(), this.triggerEvent("contentChanged", [], !1)) : null == this.trackHTML && (this.trackHTML = a), this.syncStyle()
        }
    }, b.prototype.emptyElement = function(b) {
        if ("IMG" == b.tagName || a(b).find("img").length > 0) return !1;
        if (a(b).find("input, iframe, object").length > 0) return !1;
        for (var c = a(b).text(), d = 0; d < c.length; d++)
            if ("\n" !== c[d] && "\r" !== c[d] && "	" !== c[d] && 8203 != c[d].charCodeAt(0)) return !1;
        return !0
    }, b.prototype.initEvents = function() {
        this.mobile() ? (this.mousedown = "touchstart", this.mouseup = "touchend", this.move = "touchmove") : (this.mousedown = "mousedown", this.mouseup = "mouseup", this.move = "")
    }, b.prototype.initDisable = function() {
        this.$element.on("keypress keydown keyup", a.proxy(function(a) {
            return this.isDisabled ? (a.stopPropagation(), a.preventDefault(), !1) : void 0
        }, this))
    }, b.prototype.continueInit = function() {
        this.initDisable(), this.initEvents(), this.browserFixes(), this.handleEnter(), this.editableDisabled || (this.initUndoRedo(), this.enableTyping(), this.initShortcuts()), this.initTabs(), this.initEditor();
        for (var b = 0; b < a.Editable.initializers.length; b++) a.Editable.initializers[b].call(this);
        this.initOptions(), this.initEditorSelection(), this.initAjaxSaver(), this.setLanguage(), this.setCustomText(), this.editableDisabled || this.registerPaste(), this.refreshDisabledState(), this.refreshUndo(), this.refreshRedo(), this.initPopupSubmit(), this.initialized = !0, this.triggerEvent("initialized", [], !1, !1)
    }, b.prototype.initPopupSubmit = function() {
        this.$popup_editor.find(".froala-popup input").keydown(function(b) {
            var c = b.which;
            13 == c && (b.preventDefault(), b.stopPropagation(), a(this).blur(), a(this).parents(".froala-popup").find("button.f-submit").click())
        })
    }, b.prototype.lateInit = function() {
        this.saveSelectionByMarkers(), this.continueInit(), this.restoreSelectionByMarkers(), this.$element.focus(), this.hideOtherEditors()
    }, b.prototype.init = function(b) {
        this.options.paragraphy || (this.options.defaultTag = "DIV"), this.options.allowStyle && this.setAllowStyle(), this.options.allowScript && this.setAllowScript(), this.initElement(b), this.initElementStyle(), (!this.isLink || this.isImage) && (this.initImageEvents(), this.buildImageMove()), this.options.initOnClick ? (this.editableDisabled || (this.$element.attr("contenteditable", !0), this.$element.attr("spellcheck", !1)), this.$element.bind("mousedown.element focus.element", a.proxy(function(a) {
            return this.isLink || a.stopPropagation(), this.isDisabled ? !1 : (this.$element.unbind("mousedown.element focus.element"), this.browser.webkit && (this.initMouseUp = !1), void this.lateInit())
        }, this))) : this.continueInit()
    }, b.prototype.phone = function() {
        var a = !1;
        return function(b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), a
    }, b.prototype.mobile = function() {
        return this.phone() || this.android() || this.iOS() || this.blackberry()
    }, b.prototype.iOS = function() {
        return /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
    }, b.prototype.iOSVersion = function() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                b = [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)];
            if (b && b[0]) return b[0]
        }
        return 0
    }, b.prototype.iPad = function() {
        return /(iPad)/g.test(navigator.userAgent)
    }, b.prototype.iPhone = function() {
        return /(iPhone)/g.test(navigator.userAgent)
    }, b.prototype.iPod = function() {
        return /(iPod)/g.test(navigator.userAgent)
    }, b.prototype.android = function() {
        return /(Android)/g.test(navigator.userAgent)
    }, b.prototype.blackberry = function() {
        return /(Blackberry)/g.test(navigator.userAgent)
    }, b.prototype.initOnTextarea = function(b) {
        this.$textarea = a(b), void 0 !== this.$textarea.attr("placeholder") && "Type something" == this.options.placeholder && (this.options.placeholder = this.$textarea.attr("placeholder")), this.$element = a("<div>").html(this.clean(this.$textarea.val(), !0, !1)), this.$textarea.before(this.$element).hide(), this.$textarea.parents("form").bind("submit", a.proxy(function() {
            this.isHTML ? this.html() : this.sync()
        }, this)), this.addListener("destroy", a.proxy(function() {
            this.$textarea.parents("form").unbind("submit")
        }, this))
    }, b.prototype.initOnLink = function(b) {
        this.isLink = !0, this.options.linkText = !0, this.selectionDisabled = !0, this.editableDisabled = !0, this.options.buttons = [], this.$element = a(b), this.options.paragraphy = !1, this.options.countCharacters = !1, this.$box = this.$element
    }, b.prototype.initOnImage = function(b) {
        var c = a(b).css("float");
        "A" == a(b).parent().get(0).tagName && (b = a(b).parent()), this.isImage = !0, this.editableDisabled = !0, this.imageList = [], this.options.buttons = [], this.options.paragraphy = !1, this.options.imageMargin = "auto", a(b).wrap("<div>"), this.$element = a(b).parent(), this.$element.css("display", "inline-block"), this.$element.css("max-width", "100%"), this.$element.css("margin-left", "auto"), this.$element.css("margin-right", "auto"), this.$element.css("float", c), this.$element.addClass("f-image"), this.$box = a(b)
    }, b.prototype.initForPopup = function(b) {
        this.$element = a(b), this.$box = this.$element, this.editableDisabled = !0, this.options.countCharacters = !1, this.options.buttons = [], this.$element.on("click", a.proxy(function(a) {
            a.preventDefault()
        }, this))
    }, b.prototype.initOnDefault = function(b) {
        "DIV" != b.tagName && this.options.buttons.indexOf("formatBlock") >= 0 && this.disabledList.push("formatBlock"), this.$element = a(b)
    }, b.prototype.initElement = function(b) {
        if ("TEXTAREA" == b.tagName ? this.initOnTextarea(b) : "A" == b.tagName ? this.initOnLink(b) : "IMG" == b.tagName ? this.initOnImage(b) : this.options.editInPopup ? this.initForPopup(b) : this.initOnDefault(b), !this.editableDisabled) {
            this.$box = this.$element.addClass("froala-box"), this.$wrapper = a('<div class="froala-wrapper">'), this.$element = a("<div>");
            var c = this.$box.html();
            this.$box.html(this.$wrapper.html(this.$element)), this.$element.on("keyup", a.proxy(function() {
                this.$element.find("ul, ol").length > 1 && this.cleanupLists()
            }, this)), this.setHTML(c, !0)
        }
        this.$element.on("drop", a.proxy(function() {
            setTimeout(a.proxy(function() {
                a("html").click(), this.$element.find(".f-img-wrap").each(function(b, c) {
                    0 === a(c).find("img").length && a(c).remove()
                }), this.$element.find(this.options.defaultTag + ":empty").remove()
            }, this), 1)
        }, this))
    }, b.prototype.trim = function(a) {
        return a = String(a).replace(/^\s+|\s+$/g, ""), a = a.replace(/\u200B/gi, "")
    }, b.prototype.unwrapText = function() {
        this.options.paragraphy || this.$element.find(this.options.defaultTag).each(a.proxy(function(b, c) {
            if (0 === c.attributes.length) {
                var d = a(c).find("br:last");
                a(c).replaceWith(d.length && this.isLastSibling(d.get(0)) ? a(c).html() : a(c).html() + "<br/>")
            }
        }, this))
    }, b.prototype.wrapTextInElement = function(b, c) {
        void 0 === c && (c = !1);
        var d = [],
            e = ["SPAN", "A", "B", "I", "EM", "U", "S", "STRONG", "STRIKE", "FONT", "IMG", "SUB", "SUP", "BUTTON", "INPUT"],
            f = this;
        this.no_verify = !0;
        var g = function() {
                if (0 === d.length) return !1;
                var b = a("<" + f.options.defaultTag + ">"),
                    c = a(d[0]);
                if (1 == d.length && "f-marker" == c.attr("class")) return void(d = []);
                for (var e = 0; e < d.length; e++) {
                    var g = a(d[e]);
                    b.append(g.clone()), e == d.length - 1 ? g.replaceWith(b) : g.remove()
                }
                d = []
            },
            h = !1,
            i = !1,
            j = !1;
        b.contents().filter(function() {
            var b = a(this);
            if (b.hasClass("f-marker") || b.find(".f-marker").length) {
                var k = b;
                if (1 == b.find(".f-marker").length || b.hasClass("f-marker")) {
                    k = b.find(".f-marker").length ? a(b.find(".f-marker")[0]) : b;
                    var l = k.prev();
                    "true" === k.attr("data-type") ? l.length && a(l[0]).hasClass("f-marker") ? j = !0 : (h = !0, i = !1) : i = !0
                } else j = !0
            }
            this.nodeType == Node.TEXT_NODE && b.text().length > 0 || e.indexOf(this.tagName) >= 0 ? d.push(this) : this.nodeType == Node.TEXT_NODE && 0 === b.text().length && f.options.beautifyCode ? b.remove() : h || c || j ? ("BR" === this.tagName && (d.length > 0 ? b.remove() : d.push(this)), g(), i && (h = !1), j = !1) : d = []
        }), (h || c || j) && g(), b.find("> " + this.options.defaultTag).each(function(b, c) {
            0 === a(c).text().trim().length && 0 === a(c).find("img").length && 0 === a(c).find("br").length && a(c).append(this.br)
        }), b.find("div:empty:not([class])").remove(), b.is(":empty") && b.append(f.options.paragraphy === !0 ? "<" + this.options.defaultTag + ">" + this.br + "</" + this.options.defaultTag + ">" : this.br), this.no_verify = !1
    }, b.prototype.wrapText = function(b) {
        if (this.isImage || this.isLink) return !1;
        this.allow_div = !0, this.removeBlankSpans();
        for (var c = this.getSelectionElements(), d = 0; d < c.length; d++) {
            var e = a(c[d]);
            ["LI", "TH", "TD"].indexOf(e.get(0).tagName) >= 0 ? this.wrapTextInElement(e, !0) : this.parents(e, "li").length ? this.wrapTextInElement(a(this.parents(e, "li")[0]), b) : this.wrapTextInElement(this.$element, b)
        }
        this.allow_div = !1
    }, b.prototype.convertNewLines = function() {
        this.$element.find("pre").each(function(b, c) {
            var d = a(c),
                e = a(c).html();
            e.indexOf("\n") >= 0 && d.html(e.replace(/\n/g, "<br>"))
        })
    }, b.prototype.setHTML = function(b, c) {
        this.no_verify = !0, this.allow_div = !0, void 0 === c && (c = !0), b = this.clean(b, !0, !1), b = b.replace(/>\s+</g, "><"), this.$element.html(b), this.cleanAttrs(this.$element.get(0)), this.convertNewLines(), this.imageList = [], this.refreshImageList(), this.options.paragraphy && this.wrapText(!0), this.$element.find("li:empty").append(a.Editable.INVISIBLE_SPACE), this.cleanupLists(), this.cleanify(!1, !0, !1), c && (this.restoreSelectionByMarkers(), this.sync()), this.$element.find("span").attr("data-fr-verified", !0), this.initialized && (this.hide(), this.closeImageMode(), this.imageMode = !1), this.no_verify = !1, this.allow_div = !1
    }, b.prototype.beforePaste = function() {
        this.saveSelectionByMarkers(), this.clipboardHTML = null, this.scrollPosition = this.$window.scrollTop(), this.$pasteDiv ? this.$pasteDiv.html("") : (this.$pasteDiv = a('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; z-index: 4000; line-height: 140%;" tabindex="-1"></div>'), this.$box.after(this.$pasteDiv)), this.$pasteDiv.focus(), this.window.setTimeout(a.proxy(this.processPaste, this), 1)
    }, b.prototype.processPaste = function() {
        var c = this.clipboardHTML;
        null === this.clipboardHTML && (c = this.$pasteDiv.html(), this.restoreSelectionByMarkers(), this.$window.scrollTop(this.scrollPosition));
        var d, e = this.triggerEvent("onPaste", [c], !1);
        "string" == typeof e && (c = e), c = c.replace(/<img /gi, '<img data-fr-image-pasted="true" '), c.match(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/gi) ? (d = this.wordClean(c), d = this.clean(a("<div>").append(d).html(), !1, !0), d = this.removeEmptyTags(d)) : (d = this.clean(c, !1, !0), d = this.removeEmptyTags(d), b.copiedText && a("<div>").html(d).text().replace(/\u00A0/gi, " ") == b.copiedText.replace(/(\u00A0|\r|\n)/gi, " ") && (d = b.copiedHTML)), this.options.plainPaste && (d = this.plainPasteClean(d)), e = this.triggerEvent("afterPasteCleanup", [d], !1), "string" == typeof e && (d = e), "" !== d && (this.insertHTML(d, !0, !0), this.saveSelectionByMarkers(), this.removeBlankSpans(), this.$element.find(this.valid_nodes.join(":empty, ") + ":empty").remove(), this.restoreSelectionByMarkers(), this.$element.find("li[data-indent]").each(a.proxy(function(b, c) {
            this.indentLi ? (a(c).removeAttr("data-indent"), this.indentLi(a(c))) : a(c).removeAttr("data-indent")
        }, this)), this.$element.find("li").each(a.proxy(function(b, c) {
            this.wrapTextInElement(a(c), !0)
        }, this)), this.options.paragraphy && this.wrapText(!0), this.cleanupLists()), this.afterPaste()
    }, b.prototype.afterPaste = function() {
        this.uploadPastedImages(), this.checkPlaceholder(), this.pasting = !1, this.triggerEvent("afterPaste", [], !0, !1)
    }, b.prototype.getSelectedHTML = function() {
        function b(b, d) {
            for (; 3 == d.nodeType || c.valid_nodes.indexOf(d.tagName) < 0;) 3 != d.nodeType && a(b).wrapInner("<" + d.tagName + c.attrs(d) + "></" + d.tagName + ">"), d = d.parentNode
        }
        var c = this,
            d = "";
        if ("undefined" != typeof window.getSelection)
            for (var e = this.getRanges(), f = 0; f < e.length; f++) {
                var g = document.createElement("div");
                g.appendChild(e[f].cloneContents()), b(g, this.getSelectionParent()), d += g.innerHTML
            } else "undefined" != typeof document.selection && "Text" == document.selection.type && (d = document.selection.createRange().htmlText);
        return d
    }, b.prototype.registerPaste = function() {
        this.$element.on("copy cut", a.proxy(function() {
            this.isHTML || (b.copiedHTML = this.getSelectedHTML(), b.copiedText = a("<div>").html(b.copiedHTML).text())
        }, this)), this.$element.on("paste", a.proxy(function(b) {
            if (!this.isHTML) {
                if (b.originalEvent && (b = b.originalEvent), !this.triggerEvent("beforePaste", [], !1)) return !1;
                if (this.clipboardPaste(b)) return !1;
                this.clipboardHTML = "", this.pasting = !0, this.scrollPosition = this.$window.scrollTop();
                var c = !1;
                if (b && b.clipboardData && b.clipboardData.getData) {
                    var d = "",
                        e = b.clipboardData.types;
                    if (a.Editable.isArray(e))
                        for (var f = 0; f < e.length; f++) d += e[f] + ";";
                    else d = e;
                    if (/text\/html/.test(d) ? this.clipboardHTML = b.clipboardData.getData("text/html") : /text\/rtf/.test(d) && this.browser.safari ? this.clipboardHTML = b.clipboardData.getData("text/rtf") : /text\/plain/.test(d) && !this.browser.mozilla && (this.clipboardHTML = this.escapeEntities(b.clipboardData.getData("text/plain")).replace(/\n/g, "<br/>")), "" !== this.clipboardHTML ? c = !0 : this.clipboardHTML = null, c) return this.processPaste(), b.preventDefault && (b.stopPropagation(), b.preventDefault()), !1
                }
                this.beforePaste()
            }
        }, this))
    }, b.prototype.clipboardPaste = function(b) {
        if (b && b.clipboardData && b.clipboardData.items && b.clipboardData.items[0]) {
            var c = b.clipboardData.items[0].getAsFile();
            if (c) {
                var d = new FileReader;
                return d.onload = a.proxy(function(a) {
                    var b = a.target.result;
                    this.insertHTML('<img data-fr-image-pasted="true" src="' + b + '" />'), this.afterPaste()
                }, this), d.readAsDataURL(c), !0
            }
        }
        return !1
    }, b.prototype.uploadPastedImages = function() {
        this.options.imageUpload && this.$element.find("img[data-fr-image-pasted]").each(a.proxy(function(b, c) {
            if (this.options.pasteImage) {
                if (0 === c.src.indexOf("data:")) {
                    if (this.options.defaultImageWidth && a(c).attr("width", this.options.defaultImageWidth), this.options.pastedImagesUploadURL) {
                        if (!this.triggerEvent("beforeUploadPastedImage", [c], !1)) return !1;
                        setTimeout(a.proxy(function() {
                            this.showImageLoader(), this.$progress_bar.find("span").css("width", "100%").text("Please wait!"), this.showByCoordinates(a(c).offset().left + a(c).width() / 2, a(c).offset().top + a(c).height() + 10), this.isDisabled = !0
                        }, this), 10), a.ajax({
                            type: this.options.pastedImagesUploadRequestType,
                            url: this.options.pastedImagesUploadURL,
                            data: a.extend({
                                image: decodeURIComponent(c.src)
                            }, this.options.imageUploadParams),
                            crossDomain: this.options.crossDomain,
                            xhrFields: {
                                withCredentials: this.options.withCredentials
                            },
                            headers: this.options.headers,
                            dataType: "json"
                        }).done(a.proxy(function(b) {
                            try {
                                if (b.link) {
                                    var d = new Image;
                                    d.onerror = a.proxy(function() {
                                        a(c).remove(), this.hide(), this.throwImageError(1)
                                    }, this), d.onload = a.proxy(function() {
                                        c.src = b.link, this.hideImageLoader(), this.hide(), this.enable(), setTimeout(function() {
                                            a(c).trigger("touchend")
                                        }, 50), this.triggerEvent("afterUploadPastedImage", [a(c)])
                                    }, this), d.src = b.link
                                } else b.error ? (a(c).remove(), this.hide(), this.throwImageErrorWithMessage(b.error)) : (a(c).remove(), this.hide(), this.throwImageError(2))
                            } catch (e) {
                                a(c).remove(), this.hide(), this.throwImageError(4)
                            }
                        }, this)).fail(a.proxy(function() {
                            a(c).remove(), this.hide(), this.throwImageError(3)
                        }, this))
                    }
                } else 0 !== c.src.indexOf("http") && a(c).remove();
                a(c).removeAttr("data-fr-image-pasted")
            } else a(c).remove()
        }, this))
    }, b.prototype.disable = function() {
        this.isDisabled = !0, this.$element.blur(), this.$box.addClass("fr-disabled"), this.$element.attr("contenteditable", !1)
    }, b.prototype.enable = function() {
        this.isDisabled = !1, this.$box.removeClass("fr-disabled"), this.$element.attr("contenteditable", !0)
    }, b.prototype.wordClean = function(a) {
        a.indexOf("<body") >= 0 && (a = a.replace(/[.\s\S\w\W<>]*<body[^>]*>([.\s\S\w\W<>]*)<\/body>[.\s\S\w\W<>]*/g, "$1")), a = a.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li>$3</li></ul>"), a = a.replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li>$3</li></ol>"), a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li$3>$5</li>"), a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li$3>$5</li>"), a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>"), a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>"), a = a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ul>"), a = a.replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ol>"), a = a.replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi, "<span><span"), a = a.replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi, ""), a = a.replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi, ""), a = a.replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi, " "), a = a.replace(/<!--[\s\S]*?-->/gi, ""), a = a.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi, "");
        for (var b = ["style", "script", "applet", "embed", "noframes", "noscript"], c = 0; c < b.length; c++) {
            var d = new RegExp("<" + b[c] + ".*?" + b[c] + "(.*?)>", "gi");
            a = a.replace(d, "")
        }
        a = a.replace(/([\w\-]*)=("[^<>"]*"|'[^<>']*'|\w+)/gi, ""), a = a.replace(/&nbsp;/gi, " ");
        var e;
        do e = a, a = a.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ""); while (a != e);
        return a = a.replace(/<lilevel([^1])([^>]*)>/gi, '<li data-indent="true"$2>'), a = a.replace(/<lilevel1([^>]*)>/gi, "<li$1>"), a = this.clean(a), a = a.replace(/<a>(.[^<]+)<\/a>/gi, "$1")
    }, b.prototype.tabs = function(a) {
        for (var b = "", c = 0; a > c; c++) b += "  ";
        return b
    }, b.prototype.cleanTags = function(a, b) {
        void 0 === b && (b = !1);
        var c, d, e, f, g = [],
            h = [],
            i = !1,
            j = !1,
            k = this.options.formatTags;
        for (d = 0; d < a.length; d++)
            if (c = a.charAt(d), "<" == c) {
                var l = a.indexOf(">", d + 1);
                if (-1 !== l) {
                    var m = a.substring(d, l + 1),
                        n = this.tagName(m);
                    if (0 === n.indexOf("!--") && (l = a.indexOf("-->", d + 1), -1 !== l)) {
                        m = a.substring(d, l + 3), h.push(m), d = l + 2;
                        continue
                    }
                    if (0 === n.indexOf("!")) {
                        h.push(m), d = l;
                        continue
                    }
                    if ("head" == n && this.options.fullPage && (j = !0), j) {
                        h.push(m), d = l, "head" == n && this.isClosingTag(m) && (j = !1);
                        continue
                    }
                    if (this.options.allowedTags.indexOf(n) < 0 && (!this.options.fullPage || ["html", "head", "body", "!doctype"].indexOf(n) < 0)) {
                        d = l;
                        continue
                    }
                    var o = this.isClosingTag(m);
                    if ("pre" === n && (i = o ? !1 : !0), this.isSelfClosingTag(m)) h.push("br" === n && i ? "\n" : m);
                    else if (o)
                        for (e = !1, f = !0; e === !1 && void 0 !== f;) f = g.pop(), void 0 !== f && f.tag_name !== n ? h.splice(f.i, 1) : (e = !0, void 0 !== f && h.push(m));
                    else h.push(m), g.push({
                        tag_name: n,
                        i: h.length - 1
                    });
                    d = l
                }
            } else "\n" === c && this.options.beautifyCode ? b && i ? h.push("<br/>") : i ? h.push(c) : g.length > 0 && h.push(" ") : 9 != c.charCodeAt(0) && h.push(c);
        for (; g.length > 0;) f = g.pop(), h.splice(f.i, 1);
        var p = "\n";
        this.options.beautifyCode || (p = ""), a = "", g = 0;
        var q = !0;
        for (d = 0; d < h.length; d++) 1 == h[d].length ? q && " " === h[d] || (a += h[d], q = !1) : k.indexOf(this.tagName(h[d]).toLowerCase()) < 0 ? (a += h[d], "br" == this.tagName(h[d]) && (a += p)) : this.isSelfClosingTag(h[d]) ? k.indexOf(this.tagName(h[d]).toLowerCase()) >= 0 ? (a += this.tabs(g) + h[d] + p, q = !1) : a += h[d] : this.isClosingTag(h[d]) ? (g -= 1, 0 === g && (q = !0), a.length > 0 && a[a.length - 1] == p && (a += this.tabs(g)), a += h[d] + p) : (a += p + this.tabs(g) + h[d], g += 1, q = !1);
        return a[0] == p && (a = a.substring(1, a.length)), a[a.length - 1] == p && (a = a.substring(0, a.length - 1)), a
    }, b.prototype.cleanupLists = function() {
        this.$element.find("ul, ol").each(function(b, c) {
            var d = a(c);
            if (d.find(".close-ul, .open-ul, .close-ol, .open-ol, .open-li, .close-li").length > 0) {
                var e = "<" + c.tagName.toLowerCase() + ">" + d.html() + "</" + c.tagName.toLowerCase() + ">";
                e = e.replace(new RegExp('<span class="close-ul" data-fr-verified="true"></span>', "g"), "</ul>"), e = e.replace(new RegExp('<span class="open-ul" data-fr-verified="true"></span>', "g"), "<ul>"), e = e.replace(new RegExp('<span class="close-ol" data-fr-verified="true"></span>', "g"), "</ol>"), e = e.replace(new RegExp('<span class="open-ol" data-fr-verified="true"></span>', "g"), "<ol>"), e = e.replace(new RegExp('<span class="close-li" data-fr-verified="true"></span>', "g"), "</li>"), e = e.replace(new RegExp('<span class="open-li" data-fr-verified="true"></span>', "g"), "<li>"), d.replaceWith(e)
            }
        }), this.$element.find("li > td").remove(), this.$element.find("li td:empty").append(a.Editable.INVISIBLE_SPACE), this.$element.find(" > li").wrap("<ul>"), this.$element.find("ul, ol").each(a.proxy(function(b, c) {
            var d = a(c);
            0 === d.find(this.valid_nodes.join(",")).length && d.remove()
        }, this)), this.$element.find("li > ul, li > ol").each(a.proxy(function(b, c) {
            this.isFirstSibling(c) && a(c).before("<br/>")
        }, this)), this.$element.find("li:empty").remove();
        for (var b = this.$element.find("ol + ol, ul + ul"), c = 0; c < b.length; c++) {
            var d = a(b[c]);
            this.attrs(b[c]) == this.attrs(d.prev().get(0)) && (d.prev().append(d.html()), d.remove())
        }
        this.$element.find("li > td").remove(), this.$element.find("li td:empty").append(a.Editable.INVISIBLE_SPACE), this.$element.find("li > " + this.options.defaultTag).each(function(b, c) {
            0 === c.attributes.length && a(c).replaceWith(a(c).html())
        })
    }, b.prototype.escapeEntities = function(a) {
        return a.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&apos;")
    }, b.prototype.cleanNodeAttrs = function(a, b) {
        var c = a.attributes;
        if (c)
            for (var d = new RegExp("^" + b.join("$|^") + "$", "i"), e = 0; e < c.length; e++) {
                var f = c[e];
                d.test(f.nodeName) ? a.setAttribute(f.nodeName, this.escapeEntities(f.nodeValue)) : a.removeAttribute(f.nodeName)
            }
    }, b.prototype.cleanAttrs = function(a) {
        1 == a.nodeType && a.className.indexOf("f-marker") < 0 && a !== this.$element.get(0) && "IFRAME" != a.tagName && this.cleanNodeAttrs(a, this.options.allowedAttrs, !0);
        for (var b = a.childNodes, c = 0; c < b.length; c++) this.cleanAttrs(b[c])
    }, b.prototype.clean = function(c, d, e, f, g) {
        this.pasting && b.copiedText === a("<div>").html(c).text() && (e = !1, d = !0), g || (g = a.merge([], this.options.allowedAttrs)), f || (f = a.merge([], this.options.allowedTags)), d || g.indexOf("id") > -1 && g.splice(g.indexOf("id"), 1), this.options.fullPage && (c = c.replace(/<!DOCTYPE([^>]*?)>/i, "<!-- DOCTYPE$1 -->"), c = c.replace(/<html([^>]*?)>/i, "<!-- html$1 -->"), c = c.replace(/<\/html([^>]*?)>/i, "<!-- /html$1 -->"), c = c.replace(/<body([^>]*?)>/i, "<!-- body$1 -->"), c = c.replace(/<\/body([^>]*?)>/i, "<!-- /body$1 -->"), c = c.replace(/<head>([\w\W]*)<\/head>/i, function(a, b) {
            var c = 1;
            return b = b.replace(/(<style)/gi, function(a, b) {
                return b + " data-id=" + c++
            }), "<!-- head " + b.replace(/(>)([\s|\t]*)(<)/gi, "$1$3").replace(/</gi, "[").replace(/>/gi, "]") + " -->"
        })), this.options.allowComments ? (this.options.allowedTags.push("!--"), this.options.allowedTags.push("!")) : c = c.replace(/<!--.*?-->/gi, ""), this.options.allowScript || (c = c.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")), this.options.allowStyle || (c = c.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ""));
        var h = new RegExp("<\\/?((?!(?:" + f.join(" |") + " |" + f.join(">|") + ">|" + f.join("/>|") + "/>))\\w+)[^>]*?>", "gi");
        if (c = c.replace(h, ""), e) {
            var i = new RegExp("style=(\"[a-zA-Z0-9:;\\.\\s\\(\\)\\-\\,!\\/'%]*\"|'[a-zA-Z0-9:;\\.\\s\\(\\)\\-\\,!\\/\"%]*')", "gi");
            c = c.replace(i, ""), c = c.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
        }
        c = this.cleanTags(c, !0), c = c.replace(/(\r|\n)/gi, "");
        var j = new RegExp("<([^>]*)( src| href)=('[^']*'|\"[^\"]*\"|[^\\s>]+)([^>]*)>", "gi");
        if (c = c.replace(j, a.proxy(function(a, b, c, d, e) {
                return "<" + b + c + '="' + this.sanitizeURL(d.replace(/^["'](.*)["']\/?$/gi, "$1")) + '"' + e + ">"
            }, this)), !d) {
            var k = a("<div>").append(c);
            k.find('[class]:not([class^="fr-"])').each(function(b, c) {
                a(c).removeAttr("class")
            }), c = k.html()
        }
        return c
    }, b.prototype.removeBlankSpans = function() {
        this.no_verify = !0, this.$element.find("span").removeAttr("data-fr-verified"), this.$element.find("span").each(a.proxy(function(b, c) {
            0 === this.attrs(c).length && a(c).replaceWith(a(c).html())
        }, this)), this.$element.find("span").attr("data-fr-verified", !0), this.no_verify = !1
    }, b.prototype.plainPasteClean = function(b) {
        var c = a("<div>").html(b);
        c.find("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote").each(a.proxy(function(b, c) {
            a(c).replaceWith("<" + this.options.defaultTag + ">" + a(c).html() + "</" + this.options.defaultTag + ">")
        }, this)), a(c.find("*").not("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td").get().reverse()).each(function() {
            a(this).replaceWith(a(this).html())
        });
        var d = function(b) {
            for (var c = b.contents(), e = 0; e < c.length; e++) 3 != c[e].nodeType && 1 != c[e].nodeType ? a(c[e]).remove() : d(a(c[e]))
        };
        return d(c), c.html()
    }, b.prototype.removeEmptyTags = function(b) {
        for (var c, d = a("<div>").html(b), e = d.find("*:empty:not(br, img, td, th)"); e.length;) {
            for (c = 0; c < e.length; c++) a(e[c]).remove();
            e = d.find("*:empty:not(br, img, td, th)")
        }
        for (var f = d.find("> div, td > div, th > div, li > div"); f.length;) {
            var g = a(f[f.length - 1]);
            g.replaceWith(g.html() + "<br/>"), f = d.find("> div, td > div, th > div, li > div")
        }
        for (f = d.find("div"); f.length;) {
            for (c = 0; c < f.length; c++) {
                var h = a(f[c]),
                    i = h.html().replace(/\u0009/gi, "").trim();
                h.replaceWith(i)
            }
            f = d.find("div")
        }
        return d.html()
    }, b.prototype.initElementStyle = function() {
        this.editableDisabled || this.$element.attr("contenteditable", !0);
        var a = "froala-view froala-element " + this.options.editorClass;
        this.browser.msie && b.getIEversion() < 9 && (a += " ie8"), this.$element.css("outline", 0), this.browser.msie || (a += " not-msie"), this.$element.addClass(a)
    }, b.prototype.CJKclean = function(a) {
        var b = /[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi;
        return a.replace(b, "")
    }, b.prototype.enableTyping = function() {
        this.typingTimer = null, this.$element.on("keydown", "textarea, input", function(a) {
            a.stopPropagation()
        }), this.$element.on("keydown cut", a.proxy(function(b) {
            if (!this.isHTML) {
                if (!this.options.multiLine && 13 == b.which) return b.preventDefault(), b.stopPropagation(), !1;
                if ("keydown" === b.type && !this.triggerEvent("keydown", [b], !1)) return !1;
                clearTimeout(this.typingTimer), this.ajaxSave = !1, this.oldHTML = this.getHTML(!0, !1), this.typingTimer = setTimeout(a.proxy(function() {
                    var a = this.getHTML(!0, !1);
                    this.ime || this.CJKclean(a) === this.CJKclean(this.oldHTML) || this.CJKclean(a) !== a || this.sync()
                }, this), Math.max(this.options.typingTimer, 500))
            }
        }, this))
    }, b.prototype.removeMarkersByRegex = function(a) {
        return a.replace(/<span[^>]*? class\s*=\s*["']?f-marker["']?[^>]+>([\S\s][^\/])*<\/span>/gi, "")
    }, b.prototype.getImageHTML = function() {
        return JSON.stringify({
            src: this.$element.find("img").attr("src"),
            style: this.$element.find("img").attr("style"),
            alt: this.$element.find("img").attr("alt"),
            width: this.$element.find("img").attr("width"),
            link: this.$element.find("a").attr("href"),
            link_title: this.$element.find("a").attr("title"),
            link_target: this.$element.find("a").attr("target")
        })
    }, b.prototype.getLinkHTML = function() {
        return JSON.stringify({
            body: this.$element.html(),
            href: this.$element.attr("href"),
            title: this.$element.attr("title"),
            popout: this.$element.hasClass("popout"),
            nofollow: "nofollow" == this.$element.attr("ref"),
            blank: "_blank" == this.$element.attr("target"),
            cls: this.$element.attr("class") ? this.$element.attr("class").replace(/froala-element ?|not-msie ?|froala-view ?/gi, "").trim() : ""
        })
    }, b.prototype.addFrTag = function() {
        this.$element.find(this.valid_nodes.join(",") + ", table, ul, ol, img").addClass("fr-tag")
    }, b.prototype.removeFrTag = function() {
        this.$element.find(this.valid_nodes.join(",") + ", table, ul, ol, img").removeClass("fr-tag")
    }, b.prototype.getHTML = function(b, c, d) {
        if (void 0 === b && (b = !1), void 0 === c && (c = this.options.useFrTag), void 0 === d && (d = !0), this.$element.hasClass("f-placeholder") && !b) return "";
        if (this.isHTML) return this.$html_area.val();
        if (this.isImage) return this.getImageHTML();
        if (this.isLink) return this.getLinkHTML();
        this.$element.find("a").data("fr-link", !0), c && this.addFrTag(), this.$element.find(".f-img-editor > img").each(a.proxy(function(b, c) {
            a(c).removeClass("fr-fin fr-fil fr-fir fr-dib fr-dii").addClass(this.getImageClass(a(c).parent().attr("class")))
        }, this)), this.options.useClasses || this.$element.find("img").each(a.proxy(function(b, c) {
            var d = a(c);
            d.attr("data-style", this.getImageStyle(d))
        }, this)), this.$element.find("pre").each(a.proxy(function(b, c) {
            var d = a(c),
                e = d.html(),
                f = e.replace(/\&nbsp;/gi, " ");
            e != f && (this.saveSelectionByMarkers(), d.html(f), this.restoreSelectionByMarkers())
        }, this)), this.$element.find("pre br").addClass("fr-br"), this.$element.find('[class=""]').removeAttr("class"), this.cleanAttrs(this.$element.get(0));
        var e = this.$element.html();
        this.removeFrTag(), this.$element.find("pre br").removeAttr("class"), e = e.replace(/<a[^>]*?><\/a>/g, ""), b || (e = this.removeMarkersByRegex(e)), e = e.replace(/<span[^>]*? class\s*=\s*["']?f-img-handle[^>]+><\/span>/gi, ""), e = e.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*)<\/span>([\S\s]*)$/gi, "$1$2$3"), e = e.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*)<\/span>([\S\s]*)$/gi, "$1$2$3"), this.options.useClasses || (e = e.replace(/data-style/gi, "style"), e = e.replace(/(<img[^>]*)( class\s*=['"]?[a-zA-Z0-9- ]+['"]?)([^>]*\/?>)/gi, "$1$3")), this.options.simpleAmpersand && (e = e.replace(/\&amp;/gi, "&")), d && (e = e.replace(/ data-fr-verified="true"/gi, "")), this.options.beautifyCode && (e = e.replace(/\n/gi, "")), e = e.replace(/<br class="fr-br">/gi, "\n"), e = e.replace(/\u200B/gi, ""), this.options.fullPage && (e = e.replace(/<!-- DOCTYPE([^>]*?) -->/i, "<!DOCTYPE$1>"), e = e.replace(/<!-- html([^>]*?) -->/i, "<html$1>"), e = e.replace(/<!-- \/html([^>]*?) -->/i, "</html$1>"), e = e.replace(/<!-- body([^>]*?) -->/i, "<body$1>"), e = e.replace(/<!-- \/body([^>]*?) -->/i, "</body$1>"), e = e.replace(/<!-- head ([\w\W]*?) -->/i, function(a, b) {
            return "<head>" + b.replace(/\[/gi, "<").replace(/\]/gi, ">") + "</head>"
        }));
        var f = this.triggerEvent("getHTML", [e], !1);
        return "string" == typeof f ? f : e
    }, b.prototype.getText = function() {
        return this.$element.text()
    }, b.prototype.setDirty = function(a) {
        this.dirty = a, a || (clearTimeout(this.ajaxInterval), this.ajaxHTML = this.getHTML(!1, !1))
    }, b.prototype.initAjaxSaver = function() {
        this.ajaxHTML = this.getHTML(!1, !1), this.ajaxSave = !0, this.ajaxInterval = setInterval(a.proxy(function() {
            var a = this.getHTML(!1, !1);
            (this.ajaxHTML != a || this.dirty) && this.ajaxSave && (this.options.autosave && this.save(), this.dirty = !1, this.ajaxHTML = a), this.ajaxSave = !0
        }, this), Math.max(this.options.autosaveInterval, 100))
    }, b.prototype.disableBrowserUndo = function() {
        this.$element.keydown(a.proxy(function(a) {
            var b = a.which,
                c = (a.ctrlKey || a.metaKey) && !a.altKey;
            if (!this.isHTML && c) {
                if (90 == b && a.shiftKey) return a.preventDefault(), !1;
                if (90 == b) return a.preventDefault(), !1
            }
        }, this))
    }, b.prototype.shortcutEnabled = function(a) {
        return this.options.shortcutsAvailable.indexOf(a) >= 0
    }, b.prototype.shortcuts_map = {
        69: {
            cmd: "show",
            params: [null],
            id: "show"
        },
        66: {
            cmd: "exec",
            params: ["bold"],
            id: "bold"
        },
        73: {
            cmd: "exec",
            params: ["italic"],
            id: "italic"
        },
        85: {
            cmd: "exec",
            params: ["underline"],
            id: "underline"
        },
        83: {
            cmd: "exec",
            params: ["strikeThrough"],
            id: "strikeThrough"
        },
        75: {
            cmd: "exec",
            params: ["createLink"],
            id: "createLink"
        },
        80: {
            cmd: "exec",
            params: ["insertImage"],
            id: "insertImage"
        },
        221: {
            cmd: "exec",
            params: ["indent"],
            id: "indent"
        },
        219: {
            cmd: "exec",
            params: ["outdent"],
            id: "outdent"
        },
        72: {
            cmd: "exec",
            params: ["html"],
            id: "html"
        },
        48: {
            cmd: "exec",
            params: ["formatBlock", "n"],
            id: "formatBlock n"
        },
        49: {
            cmd: "exec",
            params: ["formatBlock", "h1"],
            id: "formatBlock h1"
        },
        50: {
            cmd: "exec",
            params: ["formatBlock", "h2"],
            id: "formatBlock h2"
        },
        51: {
            cmd: "exec",
            params: ["formatBlock", "h3"],
            id: "formatBlock h3"
        },
        52: {
            cmd: "exec",
            params: ["formatBlock", "h4"],
            id: "formatBlock h4"
        },
        53: {
            cmd: "exec",
            params: ["formatBlock", "h5"],
            id: "formatBlock h5"
        },
        54: {
            cmd: "exec",
            params: ["formatBlock", "h6"],
            id: "formatBlock h6"
        },
        222: {
            cmd: "exec",
            params: ["formatBlock", "blockquote"],
            id: "formatBlock blockquote"
        },
        220: {
            cmd: "exec",
            params: ["formatBlock", "pre"],
            id: "formatBlock pre"
        }
    }, b.prototype.ctrlKey = function(a) {
        if (-1 != navigator.userAgent.indexOf("Mac OS X")) {
            if (a.metaKey && !a.altKey) return !0
        } else if (a.ctrlKey && !a.altKey) return !0;
        return !1
    }, b.prototype.initShortcuts = function() {
        this.options.shortcuts && this.$element.on("keydown", a.proxy(function(a) {
            var b = a.which,
                c = this.ctrlKey(a);
            if (!this.isHTML && c) {
                if (this.shortcuts_map[b] && this.shortcutEnabled(this.shortcuts_map[b].id)) return this.execDefaultShortcut(this.shortcuts_map[b].cmd, this.shortcuts_map[b].params);
                if (90 == b && a.shiftKey) return a.preventDefault(), a.stopPropagation(), this.redo(), !1;
                if (90 == b) return a.preventDefault(), a.stopPropagation(), this.undo(), !1
            }
        }, this))
    }, b.prototype.initTabs = function() {
        this.$element.on("keydown", a.proxy(function(a) {
            var b = a.which;
            if (9 != b || a.shiftKey) 9 == b && a.shiftKey && (this.raiseEvent("shift+tab") ? this.options.tabSpaces ? a.preventDefault() : this.blur() : a.preventDefault());
            else if (this.raiseEvent("tab"))
                if (this.options.tabSpaces) {
                    a.preventDefault();
                    var c = "&nbsp;&nbsp;&nbsp;&nbsp;",
                        d = this.getSelectionElements()[0];
                    "PRE" === d.tagName && (c = "    "), this.insertHTML(c, !1)
                } else this.blur();
            else a.preventDefault()
        }, this))
    }, b.prototype.textEmpty = function(b) {
        var c = a(b).text().replace(/(\r\n|\n|\r|\t)/gm, "");
        return ("" === c || b === this.$element.get(0)) && 0 === a(b).find("br").length
    }, b.prototype.inEditor = function(a) {
        for (; a && "BODY" !== a.tagName;) {
            if (a === this.$element.get(0)) return !0;
            a = a.parentNode
        }
        return !1
    }, b.prototype.focus = function(b) {
        if (this.isDisabled) return !1;
        if (void 0 === b && (b = !0), "" !== this.text() && !this.$element.is(":focus")) return void(this.browser.msie || (this.clearSelection(), this.$element.focus()));
        if (!this.isHTML) {
            if (b && !this.pasting && this.$element.focus(), this.pasting && !this.$element.is(":focus") && this.$element.focus(), this.$element.hasClass("f-placeholder")) return void this.setSelection(this.$element.find(this.options.defaultTag).length > 0 ? this.$element.find(this.options.defaultTag)[0] : this.$element.get(0));
            var c = this.getRange();
            if ("" === this.text() && c && (0 === c.startOffset || c.startContainer === this.$element.get(0) || !this.inEditor(c.startContainer))) {
                var d, e, f = this.getSelectionElements();
                if (a.merge(["IMG", "BR"], this.valid_nodes).indexOf(this.getSelectionElement().tagName) < 0) return !1;
                if (c.startOffset > 0 && this.valid_nodes.indexOf(this.getSelectionElement().tagName) >= 0 && "BODY" != c.startContainer.tagName || c.startContainer && 3 === c.startContainer.nodeType) return;
                if (!this.options.paragraphy && f.length >= 1 && f[0] === this.$element.get(0)) {
                    var g = function(b) {
                        if (!b) return null;
                        if (3 == b.nodeType && b.textContent.length > 0) return b;
                        if (1 == b.nodeType && "BR" == b.tagName) return b;
                        for (var c = a(b).contents(), d = 0; d < c.length; d++) {
                            var e = g(c[d]);
                            if (null != e) return e
                        }
                        return null
                    };
                    if (0 === c.startOffset && this.$element.contents().length > 0 && 3 != this.$element.contents()[0].nodeType) {
                        var h = g(this.$element.get(0));
                        null != h && ("BR" == h.tagName ? this.$element.is(":focus") && (a(h).before(this.markers_html), this.restoreSelectionByMarkers()) : this.setSelection(h))
                    }
                    return !1
                }
                if (f.length >= 1 && f[0] !== this.$element.get(0))
                    for (d = 0; d < f.length; d++) {
                        if (e = f[d], !this.textEmpty(e) || this.browser.msie) return void this.setSelection(e);
                        if (this.textEmpty(e) && ["LI", "TD"].indexOf(e.tagName) >= 0) return
                    }
                if (c.startContainer === this.$element.get(0) && c.startOffset > 0 && !this.options.paragraphy) return void this.setSelection(this.$element.get(0), c.startOffset);
                for (f = this.$element.find(this.valid_nodes.join(",")), d = 0; d < f.length; d++)
                    if (e = f[d], !this.textEmpty(e) && 0 === a(e).find(this.valid_nodes.join(",")).length) return void this.setSelection(e);
                this.setSelection(this.$element.get(0))
            }
        }
    }, b.prototype.addMarkersAtEnd = function(b) {
        var c = b.find(this.valid_nodes.join(", "));
        0 === c.length && c.push(b.get(0));
        var d = c[c.length - 1];
        a(d).append(this.markers_html)
    }, b.prototype.setFocusAtEnd = function(a) {
        void 0 === a && (a = this.$element), this.addMarkersAtEnd(a), this.restoreSelectionByMarkers()
    }, b.prototype.breakHTML = function(b, c) {
        "undefined" == typeof c && (c = !0), this.removeMarkers(), 0 === this.$element.find("break").length && this.insertSimpleHTML("<break></break>");
        var d = this.parents(this.$element.find("break"), a.merge(["UL", "OL"], this.valid_nodes).join(","))[0];
        if (this.parents(a(d), "ul, ol").length && (d = this.parents(a(d), "ul, ol")[0]), void 0 === d && (d = this.$element.get(0)), ["UL", "OL"].indexOf(d.tagName) >= 0) {
            var e = a("<div>").html(b);
            e.find("> li").wrap("<" + d.tagName + ">"), b = e.html()
        }
        if (d == this.$element.get(0)) {
            if (this.$element.find("break").next().length) {
                this.insertSimpleHTML('<div id="inserted-div">' + b + "</div>");
                var f = this.$element.find("div#inserted-div");
                this.setFocusAtEnd(f), this.saveSelectionByMarkers(), f.replaceWith(f.contents()), this.restoreSelectionByMarkers()
            } else this.insertSimpleHTML(b), this.setFocusAtEnd();
            return this.$element.find("break").remove(), this.checkPlaceholder(), !0
        }
        if ("TD" === d.tagName) return this.$element.find("break").remove(), this.insertSimpleHTML(b), !0;
        var g = a("<div>").html(b);
        if (this.addMarkersAtEnd(g), b = g.html(), this.emptyElement(a(d))) return a(d).replaceWith(b), this.restoreSelectionByMarkers(), this.checkPlaceholder(), !0;
        this.$element.find("li").each(a.proxy(function(b, c) {
            this.emptyElement(c) && a(c).addClass("empty-li")
        }, this));
        for (var h, i, j = a("<div></div>").append(a(d).clone()).html(), k = [], l = {}, m = [], n = 0, o = 0; o < j.length; o++)
            if (i = j.charAt(o), "<" == i) {
                var p = j.indexOf(">", o + 1);
                if (-1 !== p) {
                    h = j.substring(o, p + 1);
                    var q = this.tagName(h);
                    if (o = p, "break" == q) {
                        if (!this.isClosingTag(h)) {
                            for (var r = !0, s = [], t = k.length - 1; t >= 0; t--) {
                                var u = this.tagName(k[t]);
                                if (!c && "LI" == u.toUpperCase()) {
                                    r = !1;
                                    break
                                }
                                m.push("</" + u + ">"), s.push(k[t])
                            }
                            m.push(b), r || m.push("</li><li>");
                            for (var v = 0; v < s.length; v++) m.push(s[v])
                        }
                    } else if (m.push(h), !this.isSelfClosingTag(h))
                        if (this.isClosingTag(h)) {
                            var w = l[q].pop();
                            k.splice(w, 1)
                        } else k.push(h), void 0 === l[q] && (l[q] = []), l[q].push(k.length - 1)
                }
            } else n++, m.push(i);
        a(d).replaceWith(m.join("")), this.$element.find("li").each(a.proxy(function(b, c) {
            var d = a(c);
            d.hasClass("empty-li") ? d.removeClass("empty-li") : this.emptyElement(c) && d.remove()
        }, this)), this.cleanupLists(), this.restoreSelectionByMarkers()
    }, b.prototype.insertSimpleHTML = function(a) {
        var b, c;
        if (this.no_verify = !0, this.window.getSelection) {
            if (b = this.window.getSelection(), b.getRangeAt && b.rangeCount) {
                c = b.getRangeAt(0), this.browser.webkit ? c.collapsed || document.execCommand("delete") : c.deleteContents(), this.$element.find(this.valid_nodes.join(":empty, ") + ":empty").remove();
                var d = this.document.createElement("div");
                d.innerHTML = a;
                for (var e, f, g = this.document.createDocumentFragment(); e = d.firstChild;) f = g.appendChild(e);
                c.insertNode(g), f && (c = c.cloneRange(), c.setStartAfter(f), c.collapse(!0), b.removeAllRanges(), b.addRange(c))
            }
        } else if ((b = this.document.selection) && "Control" != b.type) {
            var h = b.createRange();
            h.collapse(!0), b.createRange().pasteHTML(a)
        }
        this.no_verify = !1
    }, b.prototype.insertHTML = function(b, c, d) {
        if (void 0 === c && (c = !0), void 0 === d && (d = !1), !this.isHTML && c && this.focus(), this.removeMarkers(), this.insertSimpleHTML("<break></break>"), this.checkPlaceholder(!0), this.$element.hasClass("f-placeholder")) return this.$element.html(b), this.options.paragraphy && this.wrapText(!0), this.$element.find("p > br").each(function() {
            var b = this.parentNode;
            1 == a(b).contents().length && a(b).remove()
        }), this.$element.find("break").remove(), this.setFocusAtEnd(), this.checkPlaceholder(), this.convertNewLines(), !1;
        for (var e = a("<div>").append(b).find("*"), f = 0; f < e.length; f++)
            if (this.valid_nodes.indexOf(e[f].tagName) >= 0) return this.breakHTML(b), this.$element.find("break").remove(), this.convertNewLines(), !1;
        this.$element.find("break").remove(), this.insertSimpleHTML(b), this.convertNewLines()
    }, b.prototype.execDefaultShortcut = function(a, b) {
        return this[a].apply(this, b), !1
    }, b.prototype.initEditor = function() {
        var c = "froala-editor";
        this.mobile() && (c += " touch"), this.browser.msie && b.getIEversion() < 9 && (c += " ie8"), this.$editor = a('<div class="' + c + '" style="display: none;">');
        var d = this.$document.find(this.options.scrollableContainer);
        d.append(this.$editor), this.options.inlineMode ? this.initInlineEditor() : this.initBasicEditor()
    }, b.prototype.refreshToolbarPosition = function() {
        this.$window.scrollTop() > this.$box.offset().top && this.$window.scrollTop() < this.$box.offset().top + this.$box.outerHeight() - this.$editor.outerHeight() ? (this.$element.css("padding-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$placeholder.css("margin-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$editor.addClass("f-scroll").removeClass("f-scroll-abs").css("bottom", "").css("left", this.$box.offset().left + parseFloat(this.$box.css("padding-left"), 10) - this.$window.scrollLeft()).width(this.$box.width() - parseFloat(this.$editor.css("border-left-width"), 10) - parseFloat(this.$editor.css("border-right-width"), 10)), this.iOS() && (this.$element.is(":focus") ? this.$editor.css("top", this.$window.scrollTop()) : this.$editor.css("top", ""))) : this.$window.scrollTop() < this.$box.offset().top ? this.iOS() && this.$element.is(":focus") ? (this.$element.css("padding-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$placeholder.css("margin-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$editor.addClass("f-scroll").removeClass("f-scroll-abs").css("bottom", "").css("left", this.$box.offset().left + parseFloat(this.$box.css("padding-left"), 10) - this.$window.scrollLeft()).width(this.$box.width() - parseFloat(this.$editor.css("border-left-width"), 10) - parseFloat(this.$editor.css("border-right-width"), 10)), this.$editor.css("top", this.$box.offset().top)) : (this.$editor.removeClass("f-scroll f-scroll-abs").css("bottom", "").css("top", "").width(""), this.$element.css("padding-top", ""), this.$placeholder.css("margin-top", "")) : this.$window.scrollTop() > this.$box.offset().top + this.$box.outerHeight() - this.$editor.outerHeight() && !this.$editor.hasClass("f-scroll-abs") && (this.$element.css("padding-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$placeholder.css("margin-top", this.$editor.outerHeight() + this.$element.data("padding-top")), this.$editor.removeClass("f-scroll").addClass("f-scroll-abs"), this.$editor.css("bottom", 0).css("top", "").css("left", ""))
    }, b.prototype.toolbarTop = function() {
        this.options.toolbarFixed || this.options.inlineMode || (this.$element.data("padding-top", parseInt(this.$element.css("padding-top"), 10)), this.$window.on("scroll resize load", a.proxy(function() {
            this.refreshToolbarPosition()
        }, this)), this.iOS() && this.$element.on("focus blur", a.proxy(function() {
            this.refreshToolbarPosition()
        }, this)))
    }, b.prototype.initBasicEditor = function() {
        this.$element.addClass("f-basic"), this.$wrapper.addClass("f-basic"), this.$popup_editor = this.$editor.clone();
        var a = this.$document.find(this.options.scrollableContainer);
        this.$popup_editor.appendTo(a).addClass("f-inline"), this.$editor.addClass("f-basic").show(), this.$editor.insertBefore(this.$wrapper), this.toolbarTop()
    }, b.prototype.initInlineEditor = function() {
        this.$editor.addClass("f-inline"), this.$element.addClass("f-inline"), this.$popup_editor = this.$editor
    }, b.prototype.initDrag = function() {
        this.drag_support = {
            filereader: "undefined" != typeof FileReader,
            formdata: !!this.window.FormData,
            progress: "upload" in new XMLHttpRequest
        }
    }, b.prototype.initOptions = function() {
        this.setDimensions(), this.setSpellcheck(), this.setImageUploadURL(), this.setButtons(), this.setDirection(), this.setZIndex(), this.setTheme(), this.options.editInPopup && this.buildEditPopup(), this.editableDisabled || (this.setPlaceholder(), this.setPlaceholderEvents())
    }, b.prototype.setAllowStyle = function(a) {
        "undefined" == typeof a && (a = this.options.allowStyle), a ? this.options.allowedTags.push("style") : this.options.allowedTags.splice(this.options.allowedTags.indexOf("style"), 1)
    }, b.prototype.setAllowScript = function(a) {
        "undefined" == typeof a && (a = this.options.allowScript), a ? this.options.allowedTags.push("script") : this.options.allowedTags.splice(this.options.allowedTags.indexOf("script"), 1)
    }, b.prototype.isTouch = function() {
        return WYSIWYGModernizr.touch && void 0 !== this.window.Touch
    }, b.prototype.initEditorSelection = function() {
        this.$element.on("keyup", a.proxy(function(a) {
            return this.triggerEvent("keyup", [a], !1)
        }, this)), this.$element.on("focus", a.proxy(function() {
            this.blurred && (this.blurred = !1, this.pasting || "" !== this.text() || this.focus(!1), this.triggerEvent("focus", [], !1))
        }, this)), this.$element.on("mousedown touchstart", a.proxy(function() {
            return this.isDisabled ? !1 : void(this.isResizing() || (this.closeImageMode(), this.hide()))
        }, this)), this.options.disableRightClick && this.$element.contextmenu(a.proxy(function(a) {
            return a.preventDefault(), this.options.inlineMode && this.$element.focus(), !1
        }, this)), this.$element.on(this.mouseup, a.proxy(function(b) {
            if (this.isDisabled) return !1;
            if (!this.isResizing()) {
                var c = this.text();
                b.stopPropagation(), this.imageMode = !1, !("" !== c || this.options.alwaysVisible || this.options.editInPopup || (3 == b.which || 2 == b.button) && this.options.inlineMode && !this.isImage && this.options.disableRightClick) || this.link || this.imageMode ? this.options.inlineMode || this.refreshButtons() : setTimeout(a.proxy(function() {
                    c = this.text(), !("" !== c || this.options.alwaysVisible || this.options.editInPopup || (3 == b.which || 2 == b.button) && this.options.inlineMode && !this.isImage && this.options.disableRightClick) || this.link || this.imageMode || (this.show(b), this.options.editInPopup && this.showEditPopup())
                }, this), 0)
            }
            this.hideDropdowns(), this.hideOtherEditors()
        }, this)), this.$editor.on(this.mouseup, a.proxy(function(a) {
            return this.isDisabled ? !1 : void(this.isResizing() || (a.stopPropagation(), this.options.inlineMode === !1 && this.hide()))
        }, this)), this.$editor.on("mousedown", ".fr-dropdown-menu", a.proxy(function(a) {
            return this.isDisabled ? !1 : (a.stopPropagation(), void(this.noHide = !0))
        }, this)), this.$popup_editor.on("mousedown", ".fr-dropdown-menu", a.proxy(function(a) {
            return this.isDisabled ? !1 : (a.stopPropagation(), void(this.noHide = !0))
        }, this)), this.$popup_editor.on("mouseup", a.proxy(function(a) {
            return this.isDisabled ? !1 : void(this.isResizing() || a.stopPropagation())
        }, this)), this.$edit_popup_wrapper && this.$edit_popup_wrapper.on("mouseup", a.proxy(function(a) {
            return this.isDisabled ? !1 : void(this.isResizing() || a.stopPropagation())
        }, this)), this.setDocumentSelectionChangeEvent(), this.setWindowMouseUpEvent(), this.setWindowKeyDownEvent(), this.setWindowKeyUpEvent(), this.setWindowOrientationChangeEvent(), this.setWindowHideEvent(), this.setWindowBlurEvent(), this.options.trackScroll && this.setWindowScrollEvent(), this.setWindowResize()
    }, b.prototype.setWindowResize = function() {
        this.$window.on("resize." + this._id, a.proxy(function() {
            this.hide(), this.closeImageMode(), this.imageMode = !1
        }, this))
    }, b.prototype.blur = function(b) {
        this.blurred || this.pasting || (this.selectionDisabled = !0, this.triggerEvent("blur", []), b && 0 === a("*:focus").length && this.clearSelection(), this.isLink || this.isImage || (this.selectionDisabled = !1), this.blurred = !0)
    }, b.prototype.setWindowBlurEvent = function() {
        this.$window.on("blur." + this._id, a.proxy(function(a, b) {
            this.blur(b)
        }, this))
    }, b.prototype.setWindowHideEvent = function() {
        this.$window.on("hide." + this._id, a.proxy(function() {
            this.isResizing() ? this.$element.find(".f-img-handle").trigger("moveend") : this.hide(!1)
        }, this))
    }, b.prototype.setWindowOrientationChangeEvent = function() {
        this.$window.on("orientationchange." + this._id, a.proxy(function() {
            setTimeout(a.proxy(function() {
                this.hide()
            }, this), 10)
        }, this))
    }, b.prototype.setDocumentSelectionChangeEvent = function() {
        this.$document.on("selectionchange." + this._id, a.proxy(function(b) {
            return this.isDisabled ? !1 : void(this.isResizing() || this.isScrolling || (clearTimeout(this.selectionChangedTimeout), this.selectionChangedTimeout = setTimeout(a.proxy(function() {
                if (this.options.inlineMode && this.selectionInEditor() && this.link !== !0 && this.isTouch()) {
                    var a = this.text();
                    "" !== a ? (this.iPod() ? this.options.alwaysVisible && this.hide() : this.show(null), b.stopPropagation()) : this.options.alwaysVisible ? this.show(null) : (this.hide(), this.closeImageMode(), this.imageMode = !1)
                }
            }, this), 75)))
        }, this))
    }, b.prototype.setWindowMouseUpEvent = function() {
        this.$window.on(this.mouseup + "." + this._id, a.proxy(function() {
            return this.browser.webkit && !this.initMouseUp ? (this.initMouseUp = !0, !1) : (this.isResizing() || this.isScrolling || this.isDisabled || (this.$bttn_wrapper.find("button.fr-trigger").removeClass("active"), this.selectionInEditor() && "" !== this.text() && !this.isTouch() ? this.show(null) : this.$popup_editor.is(":visible") && (this.hide(), this.closeImageMode(), this.imageMode = !1), this.blur(!0)), void a("[data-down]").removeAttr("data-down"))
        }, this))
    }, b.prototype.setWindowKeyDownEvent = function() {
        this.$window.on("keydown." + this._id, a.proxy(function(b) {
            var c = b.which;
            if (27 == c && (this.focus(), this.restoreSelection(), this.hide(), this.closeImageMode(), this.imageMode = !1), this.imageMode) {
                if (13 == c) return this.$element.find(".f-img-editor").parents(".f-img-wrap").before("<br/>"), this.sync(), this.$element.find(".f-img-editor img").click(), !1;
                if (46 == c || 8 == c) return b.stopPropagation(), b.preventDefault(), setTimeout(a.proxy(function() {
                    this.removeImage(this.$element.find(".f-img-editor img"))
                }, this), 0), !1
            } else if (this.selectionInEditor()) {
                if (this.isDisabled) return !0;
                var d = (b.ctrlKey || b.metaKey) && !b.altKey;
                !d && this.$popup_editor.is(":visible") && this.$bttn_wrapper.is(":visible") && this.options.inlineMode && (this.hide(), this.closeImageMode(), this.imageMode = !1)
            }
        }, this))
    }, b.prototype.setWindowKeyUpEvent = function() {
        this.$window.on("keyup." + this._id, a.proxy(function() {
            return this.isDisabled ? !1 : void(this.selectionInEditor() && "" !== this.text() && !this.$popup_editor.is(":visible") && this.repositionEditor())
        }, this))
    }, b.prototype.setWindowScrollEvent = function() {
        a.merge(this.$window, a(this.options.scrollableContainer)).on("scroll." + this._id, a.proxy(function() {
            return this.isDisabled ? !1 : (clearTimeout(this.scrollTimer), this.isScrolling = !0, void(this.scrollTimer = setTimeout(a.proxy(function() {
                this.isScrolling = !1
            }, this), 2500)))
        }, this))
    }, b.prototype.setPlaceholder = function(b) {
        b && (this.options.placeholder = b), this.$textarea && this.$textarea.attr("placeholder", this.options.placeholder), this.$placeholder || (this.$placeholder = a('<span class="fr-placeholder" unselectable="on"></span>').bind("click", a.proxy(function() {
            this.focus()
        }, this)), this.$element.after(this.$placeholder)), this.$placeholder.text(this.options.placeholder)
    }, b.prototype.isEmpty = function() {
        var b = this.$element.text().replace(/(\r\n|\n|\r|\t|\u200B|\u0020)/gm, "");
        return "" === b && 0 === this.$element.find("img, table, iframe, input, textarea, hr, li, object").length && 0 === this.$element.find(this.options.defaultTag + " > br, br").length && 0 === this.$element.find(a.map(this.valid_nodes, a.proxy(function(a) {
            return this.options.defaultTag == a ? null : a
        }, this)).join(", ")).length
    }, b.prototype.checkPlaceholder = function(c) {
        if (this.isDisabled && !c) return !1;
        if (this.pasting && !c) return !1;
        if (this.$element.find("td:empty, th:empty").append(a.Editable.INVISIBLE_SPACE), this.$element.find(this.valid_nodes.join(":empty, ") + ":empty").append(this.br), !this.isHTML)
            if (this.isEmpty() && !this.fakeEmpty()) {
                var d, e = this.selectionInEditor() || this.$element.is(":focus");
                this.options.paragraphy ? (d = a("<" + this.options.defaultTag + ">" + this.br + "</" + this.options.defaultTag + ">"), this.$element.html(d), e && this.setSelection(d.get(0)), this.$element.addClass("f-placeholder")) : (0 !== this.$element.find("br").length || this.browser.msie && b.getIEversion() <= 10 || (this.$element.append(this.br), e && this.browser.msie && this.focus()), this.$element.addClass("f-placeholder"))
            } else !this.$element.find(this.options.defaultTag + ", li, td, th").length && this.options.paragraphy ? (this.wrapText(!0), this.$element.find(this.options.defaultTag).length && "" === this.text() ? this.setSelection(this.$element.find(this.options.defaultTag)[0], this.$element.find(this.options.defaultTag).text().length, null, this.$element.find(this.options.defaultTag).text().length) : this.$element.removeClass("f-placeholder")) : this.fakeEmpty() === !1 && (!this.options.paragraphy || this.$element.find(this.valid_nodes.join(",")).length >= 1) ? this.$element.removeClass("f-placeholder") : !this.options.paragraphy && this.$element.find(this.valid_nodes.join(",")).length >= 1 ? this.$element.removeClass("f-placeholder") : this.$element.addClass("f-placeholder");
        return !0
    }, b.prototype.fakeEmpty = function(a) {
        void 0 === a && (a = this.$element);
        var b = !0;
        this.options.paragraphy && (b = 1 == a.find(this.options.defaultTag).length ? !0 : !1);
        var c = a.text().replace(/(\r\n|\n|\r|\t|\u200B)/gm, "");
        return "" === c && b && 1 == a.find("br, li").length && 0 === a.find("img, table, iframe, input, textarea, hr, li").length
    }, b.prototype.setPlaceholderEvents = function() {
        this.browser.msie && b.getIEversion() < 9 || (this.$element.on("focus click", a.proxy(function(a) {
            return this.isDisabled ? !1 : void("" !== this.$element.text() || this.pasting || (this.$element.data("focused") || "click" !== a.type ? "focus" == a.type && this.focus(!1) : this.$element.focus(), this.$element.data("focused", !0)))
        }, this)), this.$element.on("keyup keydown input focus placeholderCheck", a.proxy(function() {
            return this.checkPlaceholder()
        }, this)), this.$element.trigger("placeholderCheck"))
    }, b.prototype.setDimensions = function(a, b, c, d) {
        a && (this.options.height = a), b && (this.options.width = b), c && (this.options.minHeight = c), d && (this.options.maxHeight = d), "auto" != this.options.height && (this.$wrapper.css("height", this.options.height), this.$element.css("minHeight", this.options.height - parseInt(this.$element.css("padding-top"), 10) - parseInt(this.$element.css("padding-bottom"), 10))), "auto" != this.options.minHeight && (this.$wrapper.css("minHeight", this.options.minHeight), this.$element.css("minHeight", this.options.minHeight)), "auto" != this.options.maxHeight && this.$wrapper.css("maxHeight", this.options.maxHeight), "auto" != this.options.width && this.$box.css("width", this.options.width)
    }, b.prototype.setDirection = function(a) {
        a && (this.options.direction = a), "ltr" != this.options.direction && "rtl" != this.options.direction && (this.options.direction = "ltr"), "rtl" == this.options.direction ? (this.$element.removeAttr("dir"), this.$box.addClass("f-rtl"), this.$element.addClass("f-rtl"), this.$editor.addClass("f-rtl"), this.$popup_editor.addClass("f-rtl"), this.$image_modal && this.$image_modal.addClass("f-rtl")) : (this.$element.attr("dir", "auto"), this.$box.removeClass("f-rtl"), this.$element.removeClass("f-rtl"), this.$editor.removeClass("f-rtl"), this.$popup_editor.removeClass("f-rtl"), this.$image_modal && this.$image_modal.removeClass("f-rtl"))
    }, b.prototype.setZIndex = function(a) {
        a && (this.options.zIndex = a), this.$editor.css("z-index", this.options.zIndex), this.$popup_editor.css("z-index", this.options.zIndex + 1), this.$overlay && this.$overlay.css("z-index", this.options.zIndex + 2), this.$image_modal && this.$image_modal.css("z-index", this.options.zIndex + 3)
    }, b.prototype.setTheme = function(a) {
        a && (this.options.theme = a), null != this.options.theme && (this.$editor.addClass(this.options.theme + "-theme"), this.$popup_editor.addClass(this.options.theme + "-theme"), this.$box && this.$box.addClass(this.options.theme + "-theme"), this.$image_modal && this.$image_modal.addClass(this.options.theme + "-theme"))
    }, b.prototype.setSpellcheck = function(a) {
        void 0 !== a && (this.options.spellcheck = a), this.$element.attr("spellcheck", this.options.spellcheck)
    }, b.prototype.customizeText = function(b) {
        if (b) {
            var c = this.$editor.find("[title]").add(this.$popup_editor.find("[title]"));
            this.$image_modal && (c = c.add(this.$image_modal.find("[title]"))), c.each(a.proxy(function(c, d) {
                for (var e in b) a(d).attr("title").toLowerCase() == e.toLowerCase() && a(d).attr("title", b[e])
            }, this)), c = this.$editor.find('[data-text="true"]').add(this.$popup_editor.find('[data-text="true"]')), this.$image_modal && (c = c.add(this.$image_modal.find('[data-text="true"]'))), c.each(a.proxy(function(c, d) {
                for (var e in b) a(d).text().toLowerCase() == e.toLowerCase() && a(d).text(b[e])
            }, this))
        }
    }, b.prototype.setLanguage = function(b) {
        void 0 !== b && (this.options.language = b), a.Editable.LANGS[this.options.language] && (this.customizeText(a.Editable.LANGS[this.options.language].translation), a.Editable.LANGS[this.options.language].direction && a.Editable.LANGS[this.options.language].direction != a.Editable.DEFAULTS.direction && this.setDirection(a.Editable.LANGS[this.options.language].direction), a.Editable.LANGS[this.options.language].translation[this.options.placeholder] && this.setPlaceholder(a.Editable.LANGS[this.options.language].translation[this.options.placeholder]))
    }, b.prototype.setCustomText = function(a) {
        a && (this.options.customText = a), this.options.customText && this.customizeText(this.options.customText)
    }, b.prototype.execHTML = function() {
        this.html()
    }, b.prototype.initHTMLArea = function() {
        this.$html_area = a('<textarea wrap="hard">').keydown(function(b) {
            var c = b.keyCode || b.which;
            if (9 == c) {
                b.preventDefault();
                var d = a(this).get(0).selectionStart,
                    e = a(this).get(0).selectionEnd;
                a(this).val(a(this).val().substring(0, d) + "	" + a(this).val().substring(e)), a(this).get(0).selectionStart = a(this).get(0).selectionEnd = d + 1
            }
        }).focus(a.proxy(function() {
            this.blurred && (this.blurred = !1, this.triggerEvent("focus", [], !1))
        }, this)).mouseup(a.proxy(function() {
            this.blurred && (this.blurred = !1, this.triggerEvent("focus", [], !1))
        }, this))
    }, b.prototype.command_dispatcher = {
        align: function(a) {
            var b = this.buildDropdownAlign(a),
                c = this.buildDropdownButton(a, b);
            return c
        },
        formatBlock: function(a) {
            var b = this.buildDropdownFormatBlock(a),
                c = this.buildDropdownButton(a, b);
            return c
        },
        html: function(b) {
            var c = this.buildDefaultButton(b);
            return this.options.inlineMode && this.$box.append(a(c).clone(!0).addClass("html-switch").attr("title", "Hide HTML").click(a.proxy(this.execHTML, this))), this.initHTMLArea(), c
        }
    }, b.prototype.setButtons = function(a) {
        a && (this.options.buttons = a), this.$editor.append('<div class="bttn-wrapper" id="bttn-wrapper-' + this._id + '">'), this.$bttn_wrapper = this.$editor.find("#bttn-wrapper-" + this._id), this.mobile() && this.$bttn_wrapper.addClass("touch");
        for (var c, d, e = "", f = 0; f < this.options.buttons.length; f++) {
            var g = this.options.buttons[f];
            if ("sep" != g) {
                var h = b.commands[g];
                if (void 0 !== h) {
                    h.cmd = g;
                    var i = this.command_dispatcher[h.cmd];
                    i ? e += i.apply(this, [h]) : h.seed ? (c = this.buildDefaultDropdown(h), d = this.buildDropdownButton(h, c), e += d) : (d = this.buildDefaultButton(h), e += d, this.bindRefreshListener(h))
                } else {
                    if (h = this.options.customButtons[g], void 0 === h) {
                        if (h = this.options.customDropdowns[g], void 0 === h) continue;
                        d = this.buildCustomDropdown(h, g), e += d, this.bindRefreshListener(h);
                        continue
                    }
                    d = this.buildCustomButton(h, g), e += d, this.bindRefreshListener(h)
                }
            } else e += this.options.inlineMode ? '<div class="f-clear"></div><hr/>' : '<span class="f-sep"></span>'
        }
        this.$bttn_wrapper.html(e), this.$bttn_wrapper.find('button[data-cmd="undo"], button[data-cmd="redo"]').prop("disabled", !0), this.bindButtonEvents()
    }, b.prototype.bindRefreshListener = function(b) {
        b.refresh && this.addListener("refresh", a.proxy(function() {
            b.refresh.apply(this, [b.cmd])
        }, this))
    }, b.prototype.buildDefaultButton = function(a) {
        var b = '<button tabIndex="-1" type="button" class="fr-bttn" title="' + a.title + '" data-cmd="' + a.cmd + '">';
        return b += void 0 === this.options.icons[a.cmd] ? this.addButtonIcon(a) : this.prepareIcon(this.options.icons[a.cmd], a.title), b += "</button>"
    }, b.prototype.prepareIcon = function(a, b) {
        switch (a.type) {
            case "font":
                return this.addButtonIcon({
                    icon: a.value
                });
            case "img":
                return this.addButtonIcon({
                    icon_img: a.value,
                    title: b
                });
            case "txt":
                return this.addButtonIcon({
                    icon_txt: a.value
                })
        }
    }, b.prototype.addButtonIcon = function(a) {
        return a.icon ? '<i class="' + a.icon + '"></i>' : a.icon_alt ? '<i class="for-text">' + a.icon_alt + "</i>" : a.icon_img ? '<img src="' + a.icon_img + '" alt="' + a.title + '"/>' : a.icon_txt ? "<i>" + a.icon_txt + "</i>" : a.title
    }, b.prototype.buildCustomButton = function(a, b) {
        this["call_" + b] = a.callback;
        var c = '<button tabIndex="-1" type="button" class="fr-bttn" data-callback="call_' + b + '" data-cmd="button_name" data-name="' + b + '" title="' + a.title + '">' + this.prepareIcon(a.icon, a.title) + "</button>";
        return c
    }, b.prototype.callDropdown = function(b, c) {
        this.$bttn_wrapper.on("click touch", '[data-name="' + b + '"]', a.proxy(function(a) {
            a.preventDefault(), a.stopPropagation(), c.apply(this)
        }, this))
    }, b.prototype.buildCustomDropdown = function(a, b) {
        var c = '<div class="fr-bttn fr-dropdown">';
        c += '<button tabIndex="-1" type="button" class="fr-trigger" title="' + a.title + '" data-name="' + b + '">' + this.prepareIcon(a.icon, a.title) + "</button>", c += '<ul class="fr-dropdown-menu">';
        var d = 0;
        for (var e in a.options) {
            this["call_" + b + d] = a.options[e];
            var f = '<li data-callback="call_' + b + d + '" data-cmd="' + b + d + '" data-name="' + b + d + '"><a href="#">' + e + "</a></li>";
            c += f, d++
        }
        return c += "</ul></div>"
    }, b.prototype.buildDropdownButton = function(a, b, c) {
        c = c || "";
        var d = '<div class="fr-bttn fr-dropdown ' + c + '">',
            e = "";
        e += void 0 === this.options.icons[a.cmd] ? this.addButtonIcon(a) : this.prepareIcon(this.options.icons[a.cmd], a.title);
        var f = '<button tabIndex="-1" type="button" data-name="' + a.cmd + '" class="fr-trigger" title="' + a.title + '">' + e + "</button>";
        return d += f, d += b, d += "</div>"
    }, b.prototype.buildDropdownAlign = function(a) {
        this.bindRefreshListener(a);
        for (var b = '<ul class="fr-dropdown-menu f-align">', c = 0; c < a.seed.length; c++) {
            var d = a.seed[c];
            b += '<li data-cmd="align" data-val="' + d.cmd + '" title="' + d.title + '"><a href="#"><i class="' + d.icon + '"></i></a></li>'
        }
        return b += "</ul>"
    }, b.prototype.buildDropdownFormatBlock = function(a) {
        var b = '<ul class="fr-dropdown-menu">';
        for (var c in this.options.blockTags) {
            var d = '<li data-cmd="' + a.cmd + '" data-val="' + c + '">';
            d += '<a href="#" data-text="true" class="format-' + c + '" title="' + this.options.blockTags[c] + '">' + this.options.blockTags[c] + "</a></li>", b += d
        }
        return b += "</ul>"
    }, b.prototype.buildDefaultDropdown = function(a) {
        for (var b = '<ul class="fr-dropdown-menu">', c = 0; c < a.seed.length; c++) {
            var d = a.seed[c],
                e = '<li data-namespace="' + a.namespace + '" data-cmd="' + (d.cmd || a.cmd) + '" data-val="' + d.value + '" data-param="' + (d.param || a.param) + '">';
            e += '<a href="#" data-text="true" class="' + d.value + '" title="' + d.title + '">' + d.title + "</a></li>", b += e
        }
        return b += "</ul>"
    }, b.prototype.createEditPopupHTML = function() {
        var a = '<div class="froala-popup froala-text-popup" style="display:none;">';
        return a += '<h4><span data-text="true">Edit text</span><i title="Cancel" class="fa fa-times" id="f-text-close-' + this._id + '"></i></h4></h4>', a += '<div class="f-popup-line"><input type="text" placeholder="http://www.example.com" class="f-lu" id="f-ti-' + this._id + '">', a += '<button data-text="true" type="button" class="f-ok" id="f-edit-popup-ok-' + this._id + '">OK</button>', a += "</div>", a += "</div>"
    }, b.prototype.buildEditPopup = function() {
        this.$edit_popup_wrapper = a(this.createEditPopupHTML()), this.$popup_editor.append(this.$edit_popup_wrapper), this.$edit_popup_wrapper.find("#f-ti-" + this._id).on("mouseup keydown", function(a) {
            a.stopPropagation()
        }), this.addListener("hidePopups", a.proxy(function() {
            this.$edit_popup_wrapper.hide()
        }, this)), this.$edit_popup_wrapper.on("click", "#f-edit-popup-ok-" + this._id, a.proxy(function() {
            this.$element.text(this.$edit_popup_wrapper.find("#f-ti-" + this._id).val()), this.sync(), this.hide()
        }, this)), this.$edit_popup_wrapper.on("click", "i#f-text-close-" + this._id, a.proxy(function() {
            this.hide()
        }, this))
    }, b.prototype.createCORSRequest = function(a, b) {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) {
            c.open(a, b, !0), this.options.withCredentials && (c.withCredentials = !0);
            for (var d in this.options.headers) c.setRequestHeader(d, this.options.headers[d])
        } else "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null;
        return c
    }, b.prototype.isEnabled = function(b) {
        return a.inArray(b, this.options.buttons) >= 0
    }, b.prototype.bindButtonEvents = function() {
        this.bindDropdownEvents(this.$bttn_wrapper), this.bindCommandEvents(this.$bttn_wrapper)
    }, b.prototype.bindDropdownEvents = function(c) {
        var d = this;
        c.on(this.mousedown, ".fr-dropdown .fr-trigger:not([disabled])", function(b) {
            return "mousedown" === b.type && 1 !== b.which ? !0 : ("LI" === this.tagName && "touchstart" === b.type && d.android() || d.iOS() || b.preventDefault(), void a(this).attr("data-down", !0))
        }), c.on(this.mouseup, ".fr-dropdown .fr-trigger:not([disabled])", function(e) {
            if (d.isDisabled) return !1;
            if (e.stopPropagation(), e.preventDefault(), !a(this).attr("data-down")) return a("[data-down]").removeAttr("data-down"), !1;
            a("[data-down]").removeAttr("data-down"), d.options.inlineMode === !1 && 0 === a(this).parents(".froala-popup").length && (d.hide(), d.closeImageMode(), d.imageMode = !1), a(this).toggleClass("active").trigger("blur");
            var f, g = a(this).attr("data-name");
            return b.commands[g] ? f = b.commands[g].refreshOnShow : d.options.customDropdowns[g] ? f = d.options.customDropdowns[g].refreshOnShow : b.image_commands[g] && (f = b.image_commands[g].refreshOnShow), f && f.call(d), c.find("button.fr-trigger").not(this).removeClass("active"), !1
        }), c.on(this.mouseup, ".fr-dropdown", function(a) {
            a.stopPropagation(), a.preventDefault()
        }), this.$element.on("mouseup", "img, a", a.proxy(function() {
            return this.isDisabled ? !1 : void c.find(".fr-dropdown .fr-trigger").removeClass("active")
        }, this)), c.on("click", "li[data-cmd] > a", function(a) {
            a.preventDefault()
        })
    }, b.prototype.bindCommandEvents = function(b) {
        var c = this;
        b.on(this.mousedown, "button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]", function(b) {
            return "mousedown" === b.type && 1 !== b.which ? !0 : ("LI" === this.tagName && "touchstart" === b.type && c.android() || c.iOS() || b.preventDefault(), void a(this).attr("data-down", !0))
        }), b.on(this.mouseup + " " + this.move, "button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]", a.proxy(function(b) {
            if (c.isDisabled) return !1;
            if ("mouseup" === b.type && 1 !== b.which) return !0;
            var d = b.currentTarget;
            if ("touchmove" != b.type) {
                if (b.stopPropagation(), b.preventDefault(), !a(d).attr("data-down")) return a("[data-down]").removeAttr("data-down"), !1;
                if (a("[data-down]").removeAttr("data-down"), a(d).data("dragging") || a(d).attr("disabled")) return a(d).removeData("dragging"), !1;
                var e = a(d).data("timeout");
                e && (clearTimeout(e), a(d).removeData("timeout"));
                var f = a(d).attr("data-callback");
                if (c.options.inlineMode === !1 && 0 === a(d).parents(".froala-popup").length && (c.hide(), c.closeImageMode(), c.imageMode = !1), f) a(d).parents(".fr-dropdown").find(".fr-trigger.active").removeClass("active"), c[f]();
                else {
                    var g = a(d).attr("data-namespace"),
                        h = a(d).attr("data-cmd"),
                        i = a(d).attr("data-val"),
                        j = a(d).attr("data-param");
                    g ? c["exec" + g](h, i, j) : (c.exec(h, i, j), c.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active"))
                }
                return !1
            }
            a(d).data("timeout") || a(d).data("timeout", setTimeout(function() {
                a(d).data("dragging", !0)
            }, 200))
        }, this))
    }, b.prototype.save = function() {
        if (!this.triggerEvent("beforeSave", [], !1)) return !1;
        if (this.options.saveURL) {
            var b = {};
            for (var c in this.options.saveParams) {
                var d = this.options.saveParams[c];
                b[c] = "function" == typeof d ? d.call(this) : d
            }
            var e = {};
            e[this.options.saveParam] = this.getHTML(), a.ajax({
                type: this.options.saveRequestType,
                url: this.options.saveURL,
                data: a.extend(e, b),
                crossDomain: this.options.crossDomain,
                xhrFields: {
                    withCredentials: this.options.withCredentials
                },
                headers: this.options.headers
            }).done(a.proxy(function(a) {
                this.triggerEvent("afterSave", [a])
            }, this)).fail(a.proxy(function() {
                this.triggerEvent("saveError", ["Save request failed on the server."])
            }, this))
        } else this.triggerEvent("saveError", ["Missing save URL."])
    }, b.prototype.isURL = function(a) {
        if (!/^(https?:|ftps?:|)\/\//.test(a)) return !1;
        a = String(a).replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/ /g, "%20");
        var b = /\(?(?:(https?:|ftps?:|)\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|(?:www.)?(?:[^\W\s]|\.|-)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;
        return b.test(a)
    }, b.prototype.sanitizeURL = function(a) {
        if (/^(https?:|ftps?:|)\/\//.test(a)) {
            if (!this.isURL(a)) return ""
        } else a = encodeURIComponent(a).replace(/%23/g, "#").replace(/%2F/g, "/").replace(/%25/g, "%").replace(/mailto%3A/g, "mailto:").replace(/tel%3A/g, "tel:").replace(/data%3Aimage/g, "data:image").replace(/webkit-fake-url%3A/g, "webkit-fake-url:").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&").replace(/&amp;/g, "&").replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@");
        return a
    }, b.prototype.parents = function(a, b) {
        return a.get(0) != this.$element.get(0) ? a.parentsUntil(this.$element, b) : []
    }, b.prototype.option = function(b, c) {
        if (void 0 === b) return this.options;
        if (b instanceof Object) this.options = a.extend({}, this.options, b), this.initOptions(), this.setCustomText(), this.setLanguage(), this.setAllowScript(), this.setAllowStyle();
        else {
            if (void 0 === c) return this.options[b];
            switch (this.options[b] = c, b) {
                case "direction":
                    this.setDirection();
                    break;
                case "height":
                case "width":
                case "minHeight":
                case "maxHeight":
                    this.setDimensions();
                    break;
                case "spellcheck":
                    this.setSpellcheck();
                    break;
                case "placeholder":
                    this.setPlaceholder();
                    break;
                case "customText":
                    this.setCustomText();
                    break;
                case "language":
                    this.setLanguage();
                    break;
                case "textNearImage":
                    this.setTextNearImage();
                    break;
                case "zIndex":
                    this.setZIndex();
                    break;
                case "theme":
                    this.setTheme();
                    break;
                case "allowScript":
                    this.setAllowScript();
                    break;
                case "allowStyle":
                    this.setAllowStyle()
            }
        }
    };
    var c = a.fn.editable;
    a.fn.editable = function(c) {
        for (var d = [], e = 0; e < arguments.length; e++) d.push(arguments[e]);
        if ("string" == typeof c) {
            var f = [];
            return this.each(function() {
                var b = a(this),
                    e = b.data("fa.editable");
                console.log(e);
                if (!e[c]) return a.error("Method " + c + " does not exist in Froala Editor.");
                var g = e[c].apply(e, d.slice(1));
                void 0 === g ? f.push(this) : 0 === f.length && f.push(g)
            }), 1 == f.length ? f[0] : f
        }
        return "object" != typeof c && c ? void 0 : this.each(function() {
            var d = this,
                e = a(d),
                f = e.data("fa.editable");
            f || e.data("fa.editable", f = new b(d, c))
        })
    }, a.fn.editable.Constructor = b, a.Editable = b, a.fn.editable.noConflict = function() {
        return a.fn.editable = c, this
    }
}(window.jQuery),
function(a) {
    a.Editable.prototype.initUndoRedo = function() {
        this.undoStack = [], this.undoIndex = 0, this.saveUndoStep(), this.disableBrowserUndo()
    }, a.Editable.prototype.undo = function() {
        if (this.no_verify = !0, this.undoIndex > 1) {
            clearTimeout(this.typingTimer), this.triggerEvent("beforeUndo", [], !1);
            var a = this.undoStack[--this.undoIndex - 1];
            this.restoreSnapshot(a), this.doingRedo = !0, this.triggerEvent("afterUndo", []), this.doingRedo = !1, "" !== this.text() ? this.repositionEditor() : this.hide(), this.$element.trigger("placeholderCheck"), this.focus(), this.refreshButtons()
        }
        this.no_verify = !1
    }, a.Editable.prototype.redo = function() {
        if (this.no_verify = !0, this.undoIndex < this.undoStack.length) {
            clearTimeout(this.typingTimer), this.triggerEvent("beforeRedo", [], !1);
            var a = this.undoStack[this.undoIndex++];
            this.restoreSnapshot(a), this.doingRedo = !0, this.triggerEvent("afterRedo", []), this.doingRedo = !1, "" !== this.text() ? this.repositionEditor() : this.hide(), this.$element.trigger("placeholderCheck"), this.focus(), this.refreshButtons()
        }
        this.no_verify = !1
    }, a.Editable.prototype.saveUndoStep = function() {
        if (!this.undoStack) return !1;
        for (; this.undoStack.length > this.undoIndex;) this.undoStack.pop();
        var a = this.getSnapshot();
        this.undoStack[this.undoIndex - 1] && this.identicSnapshots(this.undoStack[this.undoIndex - 1], a) || (this.undoStack.push(a), this.undoIndex++), this.refreshUndo(), this.refreshRedo()
    }, a.Editable.prototype.refreshUndo = function() {
        if (this.isEnabled("undo")) {
            if (void 0 === this.$editor) return;
            this.$bttn_wrapper.find('[data-cmd="undo"]').removeAttr("disabled"), (0 === this.undoStack.length || this.undoIndex <= 1 || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="undo"]').attr("disabled", !0)
        }
    }, a.Editable.prototype.refreshRedo = function() {
        if (this.isEnabled("redo")) {
            if (void 0 === this.$editor) return;
            this.$bttn_wrapper.find('[data-cmd="redo"]').removeAttr("disabled"), (this.undoIndex == this.undoStack.length || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="redo"]').prop("disabled", !0)
        }
    }, a.Editable.prototype.getNodeIndex = function(a) {
        for (var b = a.parentNode.childNodes, c = 0, d = null, e = 0; e < b.length; e++) {
            if (d) {
                var f = 3 === b[e].nodeType && "" === b[e].textContent,
                    g = 3 === d.nodeType && 3 === b[e].nodeType;
                f || g || c++
            }
            if (b[e] == a) return c;
            d = b[e]
        }
    }, a.Editable.prototype.getNodeLocation = function(a) {
        var b = [];
        if (!a.parentNode) return [];
        for (; a != this.$element.get(0);) b.push(this.getNodeIndex(a)), a = a.parentNode;
        return b.reverse()
    }, a.Editable.prototype.getNodeByLocation = function(a) {
        for (var b = this.$element.get(0), c = 0; c < a.length; c++) b = b.childNodes[a[c]];
        return b
    }, a.Editable.prototype.getRealNodeOffset = function(a, b) {
        for (; a && 3 === a.nodeType;) {
            var c = a.previousSibling;
            c && 3 == c.nodeType && (b += c.textContent.length), a = c
        }
        return b
    }, a.Editable.prototype.getRangeSnapshot = function(a) {
        return {
            scLoc: this.getNodeLocation(a.startContainer),
            scOffset: this.getRealNodeOffset(a.startContainer, a.startOffset),
            ecLoc: this.getNodeLocation(a.endContainer),
            ecOffset: this.getRealNodeOffset(a.endContainer, a.endOffset)
        }
    }, a.Editable.prototype.getSnapshot = function() {
        var a = {};
        if (a.html = this.$element.html(), a.ranges = [], this.selectionInEditor() && this.$element.is(":focus"))
            for (var b = this.getRanges(), c = 0; c < b.length; c++) a.ranges.push(this.getRangeSnapshot(b[c]));
        return a
    }, a.Editable.prototype.identicSnapshots = function(a, b) {
        return a.html != b.html ? !1 : JSON.stringify(a.ranges) != JSON.stringify(b.ranges) ? !1 : !0
    }, a.Editable.prototype.restoreRangeSnapshot = function(a, b) {
        try {
            var c = this.getNodeByLocation(a.scLoc),
                d = a.scOffset,
                e = this.getNodeByLocation(a.ecLoc),
                f = a.ecOffset,
                g = this.document.createRange();
            g.setStart(c, d), g.setEnd(e, f), b.addRange(g)
        } catch (h) {}
    }, a.Editable.prototype.restoreSnapshot = function(b) {
        this.$element.html() != b.html && this.$element.html(b.html);
        var c = this.getSelection();
        this.clearSelection(), this.$element.focus();
        for (var d = 0; d < b.ranges.length; d++) this.restoreRangeSnapshot(b.ranges[d], c);
        setTimeout(a.proxy(function() {
            this.$element.find(".f-img-wrap img").click()
        }, this), 0)
    }
}(jQuery),
function(a) {
    a.Editable.prototype.refreshButtons = function(b) {
        return this.initialized && (this.selectionInEditor() && !this.isHTML || this.browser.msie && a.Editable.getIEversion() < 9 || b) ? (this.$editor.find("button[data-cmd]").removeClass("active"), this.refreshDisabledState(), void this.raiseEvent("refresh")) : !1
    }, a.Editable.prototype.refreshDisabledState = function() {
        if (this.isHTML) return !1;
        if (this.$editor) {
            for (var b = 0; b < this.options.buttons.length; b++) {
                var c = this.options.buttons[b];
                if (void 0 !== a.Editable.commands[c]) {
                    var d = !1;
                    a.isFunction(a.Editable.commands[c].disabled) ? d = a.Editable.commands[c].disabled.apply(this) : void 0 !== a.Editable.commands[c].disabled && (d = !0), d ? (this.$editor.find('button[data-cmd="' + c + '"]').prop("disabled", !0), this.$editor.find('button[data-name="' + c + '"]').prop("disabled", !0)) : (this.$editor.find('button[data-cmd="' + c + '"]').removeAttr("disabled"), this.$editor.find('button[data-name="' + c + '"]').removeAttr("disabled"))
                }
            }
            this.refreshUndo(), this.refreshRedo()
        }
    }, a.Editable.prototype.refreshFormatBlocks = function() {
        var a = this.getSelectionElements()[0],
            b = a.tagName.toLowerCase();
        this.options.paragraphy && b === this.options.defaultTag.toLowerCase() && (b = "n"), this.$editor.find('.fr-bttn > button[data-name="formatBlock"] + ul li').removeClass("active"), this.$bttn_wrapper.find('.fr-bttn > button[data-name="formatBlock"] + ul li[data-val="' + b + '"]').addClass("active")
    }, a.Editable.prototype.refreshDefault = function(a) {
        try {
            this.document.queryCommandState(a) === !0 && this.$editor.find('[data-cmd="' + a + '"]').addClass("active")
        } catch (b) {}
    }, a.Editable.prototype.refreshAlign = function() {
        var b = a(this.getSelectionElements()[0]);
        this.$editor.find('.fr-dropdown > button[data-name="align"] + ul li').removeClass("active");
        var c, d = b.css("text-align");
        ["left", "right", "justify", "center"].indexOf(d) < 0 && (d = "left"), "left" == d ? c = "justifyLeft" : "right" == d ? c = "justifyRight" : "justify" == d ? c = "justifyFull" : "center" == d && (c = "justifyCenter"), this.$editor.find('.fr-dropdown > button[data-name="align"].fr-trigger i').attr("class", "fa fa-align-" + d), this.$editor.find('.fr-dropdown > button[data-name="align"] + ul li[data-val="' + c + '"]').addClass("active")
    }, a.Editable.prototype.refreshHTML = function() {
        this.isActive("html") ? this.$editor.find('[data-cmd="html"]').addClass("active") : this.$editor.find('[data-cmd="html"]').removeClass("active")
    }
}(jQuery),
function(a) {
    a.Editable.commands = {
        bold: {
            title: "Bold",
            icon: "fa fa-bold",
            shortcut: "(Ctrl + B)",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        italic: {
            title: "Italic",
            icon: "fa fa-italic",
            shortcut: "(Ctrl + I)",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        underline: {
            cmd: "underline",
            title: "Underline",
            icon: "fa fa-underline",
            shortcut: "(Ctrl + U)",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        strikeThrough: {
            title: "Strikethrough",
            icon: "fa fa-strikethrough",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        subscript: {
            title: "Subscript",
            icon: "fa fa-subscript",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        superscript: {
            title: "Superscript",
            icon: "fa fa-superscript",
            refresh: a.Editable.prototype.refreshDefault,
            undo: !0,
            callbackWithoutSelection: function(a) {
                this._startInDefault(a)
            }
        },
        formatBlock: {
            title: "Format Block",
            icon: "fa fa-paragraph",
            refreshOnShow: a.Editable.prototype.refreshFormatBlocks,
            callback: function(a, b) {
                this.formatBlock(b)
            },
            undo: !0
        },
        align: {
            title: "Alignment",
            icon: "fa fa-align-left",
            refresh: a.Editable.prototype.refreshAlign,
            refreshOnShow: a.Editable.prototype.refreshAlign,
            seed: [{
                cmd: "justifyLeft",
                title: "Align Left",
                icon: "fa fa-align-left"
            }, {
                cmd: "justifyCenter",
                title: "Align Center",
                icon: "fa fa-align-center"
            }, {
                cmd: "justifyRight",
                title: "Align Right",
                icon: "fa fa-align-right"
            }, {
                cmd: "justifyFull",
                title: "Justify",
                icon: "fa fa-align-justify"
            }],
            callback: function(a, b) {
                this.align(b)
            },
            undo: !0
        },
        outdent: {
            title: "Indent Less",
            icon: "fa fa-dedent",
            activeless: !0,
            shortcut: "(Ctrl + <)",
            callback: function() {
                this.outdent(!0)
            },
            undo: !0
        },
        indent: {
            title: "Indent More",
            icon: "fa fa-indent",
            activeless: !0,
            shortcut: "(Ctrl + >)",
            callback: function() {
                this.indent()
            },
            undo: !0
        },
        selectAll: {
            title: "Select All",
            icon: "fa fa-file-text",
            shortcut: "(Ctrl + A)",
            callback: function(a, b) {
                this.$element.focus(), this.execDefault(a, b)
            },
            undo: !1
        },
        createLink: {
            title: "Insert Link",
            icon: "fa fa-link",
            shortcut: "(Ctrl + K)",
            callback: function() {
                this.insertLink()
            },
            undo: !1
        },
        insertImage: {
            title: "Insert Image",
            icon: "fa fa-picture-o",
            activeless: !0,
            shortcut: "(Ctrl + P)",
            callback: function() {
                this.insertImage()
            },
            undo: !1
        },
        undo: {
            title: "Undo",
            icon: "fa fa-undo",
            activeless: !0,
            shortcut: "(Ctrl+Z)",
            refresh: a.Editable.prototype.refreshUndo,
            callback: function() {
                this.undo()
            },
            undo: !1
        },
        redo: {
            title: "Redo",
            icon: "fa fa-repeat",
            activeless: !0,
            shortcut: "(Shift+Ctrl+Z)",
            refresh: a.Editable.prototype.refreshRedo,
            callback: function() {
                this.redo()
            },
            undo: !1
        },
        html: {
            title: "Show HTML",
            icon: "fa fa-code",
            refresh: a.Editable.prototype.refreshHTML,
            callback: function() {
                this.html()
            },
            undo: !1
        },
        save: {
            title: "Save",
            icon: "fa fa-floppy-o",
            callback: function() {
                this.save()
            },
            undo: !1
        },
        insertHorizontalRule: {
            title: "Insert Horizontal Line",
            icon: "fa fa-minus",
            callback: function(a) {
                this.insertHR(a)
            },
            undo: !0
        },
        removeFormat: {
            title: "Clear formatting",
            icon: "fa fa-eraser",
            activeless: !0,
            callback: function() {
                this.removeFormat()
            },
            undo: !0
        }
    }, a.Editable.prototype.exec = function(b, c, d) {
        return !this.selectionInEditor() && a.Editable.commands[b].undo && this.focus(), this.selectionInEditor() && "" === this.text() && a.Editable.commands[b].callbackWithoutSelection ? (a.Editable.commands[b].callbackWithoutSelection.apply(this, [b, c, d]), !1) : void(a.Editable.commands[b].callback ? a.Editable.commands[b].callback.apply(this, [b, c, d]) : this.execDefault(b, c))
    }, a.Editable.prototype.html = function() {
        var a;
        this.isHTML ? (this.isHTML = !1, a = this.$html_area.val(), this.$box.removeClass("f-html"), this.$element.attr("contenteditable", !0), this.setHTML(a, !1), this.$editor.find('.fr-bttn:not([data-cmd="html"]), .fr-trigger').removeAttr("disabled"), this.$editor.find('.fr-bttn[data-cmd="html"]').removeClass("active"), this.$element.blur(), this.focus(), this.refreshButtons(), this.triggerEvent("htmlHide", [a], !0, !1)) : (this.$box.removeClass("f-placeholder"), this.clearSelection(), this.cleanify(!1, !0, !1), a = this.cleanTags(this.getHTML(!1, !1)), this.$html_area.val(a).trigger("resize"), this.$html_area.css("height", this.$element.height() - 1), this.$element.html("").append(this.$html_area).removeAttr("contenteditable"), this.$box.addClass("f-html"), this.$editor.find('button.fr-bttn:not([data-cmd="html"]), button.fr-trigger').attr("disabled", !0), this.$editor.find('.fr-bttn[data-cmd="html"]').addClass("active"), this.isHTML = !0, this.hide(), this.imageMode = !1, this.$element.blur(), this.$element.removeAttr("contenteditable"), this.triggerEvent("htmlShow", [a], !0, !1))
    }, a.Editable.prototype.insertHR = function(b) {
        this.$element.find("hr").addClass("fr-tag"), this.$element.hasClass("f-placeholder") ? a(this.$element.find("> " + this.valid_nodes.join(", >"))[0]).before("<hr/>") : this.document.execCommand(b), this.hide();
        var c = this.$element.find("hr:not(.fr-tag)").next(this.valid_nodes.join(","));
        c.length > 0 ? a(c[0]).prepend(this.markers_html) : this.$element.find("hr:not(.fr-tag)").after(this.options.paragraphy ? "<p>" + this.markers_html + "<br/></p>" : this.markers_html), this.restoreSelectionByMarkers(), this.triggerEvent(b, [], !0, !1)
    }, a.Editable.prototype.formatBlock = function(b) {
        if (this.disabledList.indexOf("formatBlock") >= 0) return !1;
        if (this.browser.msie && a.Editable.getIEversion() < 9) return "n" == b && (b = this.options.defaultTag), this.document.execCommand("formatBlock", !1, "<" + b + ">"), this.triggerEvent("formatBlock"), !1;
        if (this.$element.hasClass("f-placeholder")) {
            if (this.options.paragraphy || "n" != b) {
                "n" == b && (b = this.options.defaultTag);
                var c = a("<" + b + "><br/></" + b + ">");
                this.$element.html(c), this.setSelection(c.get(0), 0), this.$element.removeClass("f-placeholder")
            }
        } else {
            this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
            var d = this.getSelectionElements();
            d[0] == this.$element.get(0) && (d = this.$element.find("> " + this.valid_nodes.join(", >"))), this.saveSelectionByMarkers();
            for (var e, f = function(b) {
                    if ("PRE" == b.get(0).tagName)
                        for (; b.find("br + br").length > 0;) {
                            var c = a(b.find("br + br")[0]);
                            c.prev().remove(), c.replaceWith("\n\n")
                        }
                }, g = 0; g < d.length; g++) {
                var h = a(d[g]);
                if (!this.fakeEmpty(h)) {
                    if (f(h), !this.options.paragraphy && this.emptyElement(h.get(0)) && h.append("<br/>"), "n" == b)
                        if (this.options.paragraphy) {
                            var i = "<" + this.options.defaultTag + this.attrs(h.get(0)) + ">" + h.html() + "</" + this.options.defaultTag + ">";
                            e = a(i)
                        } else e = h.html() + "<br/>";
                    else e = a("<" + b + this.attrs(h.get(0)) + ">").html(h.html());
                    h.get(0) != this.$element.get(0) ? h.replaceWith(e) : h.html(e)
                }
            }
            this.unwrapText(), this.$element.find("pre + pre").each(function() {
                a(this).prepend(a(this).prev().html() + "<br/><br/>"), a(this).prev().remove()
            });
            var j = this;
            this.$element.find(this.valid_nodes.join(",")).each(function() {
                "PRE" != this.tagName && a(this).replaceWith("<" + this.tagName + j.attrs(this) + ">" + a(this).html().replace(/\n\n/gi, "</" + this.tagName + "><" + this.tagName + ">") + "</" + this.tagName + ">")
            }), this.$element.find(this.valid_nodes.join(":empty ,") + ":empty").append("<br/>"), this.cleanupLists(), this.restoreSelectionByMarkers()
        }
        this.triggerEvent("formatBlock"), this.repositionEditor()
    }, a.Editable.prototype.align = function(b) {
        if (this.browser.msie && a.Editable.getIEversion() < 9) return this.document.execCommand(b, !1, !1), this.triggerEvent("align", [b]), !1;
        this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers(), this.saveSelectionByMarkers();
        var c = this.getSelectionElements();
        "justifyLeft" == b ? b = "left" : "justifyRight" == b ? b = "right" : "justifyCenter" == b ? b = "center" : "justifyFull" == b && (b = "justify");
        for (var d = 0; d < c.length; d++) this.parents(a(c[d]), "LI").length > 0 && (c[d] = a(c[d]).parents("LI").get(0)), a(c[d]).css("text-align", b);
        this.cleanupLists(), this.unwrapText(), this.restoreSelectionByMarkers(), this.repositionEditor(), this.triggerEvent("align", [b])
    }, a.Editable.prototype.indent = function(b, c) {
        if (void 0 === c && (c = !0), this.browser.msie && a.Editable.getIEversion() < 9) return b ? this.document.execCommand("outdent", !1, !1) : this.document.execCommand("indent", !1, !1), !1;
        var d = 20;
        b && (d = -20), this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
        var e = this.getSelectionElements();
        this.saveSelectionByMarkers();
        for (var f = 0; f < e.length; f++) {
            var g = a(e[f]);
            if (g.parentsUntil(this.$element, "li").length > 0 && (g = g.closest("li")), this.raiseEvent("indent", [g, b]))
                if (g.get(0) != this.$element.get(0)) {
                    var h = parseInt(g.css("margin-left"), 10),
                        i = Math.max(0, h + d);
                    g.css("marginLeft", i), 0 === i && (g.css("marginLeft", ""), void 0 === g.css("style") && g.removeAttr("style"))
                } else {
                    var j = a("<div>").html(g.html());
                    g.html(j), j.css("marginLeft", Math.max(0, d)), 0 === Math.max(0, d) && (j.css("marginLeft", ""), void 0 === j.css("style") && j.removeAttr("style"))
                }
        }
        this.unwrapText(), this.restoreSelectionByMarkers(), c && this.repositionEditor(), b || this.triggerEvent("indent")
    }, a.Editable.prototype.outdent = function(a) {
        this.indent(!0, a), this.triggerEvent("outdent")
    }, a.Editable.prototype.execDefault = function(a, b) {
        this.saveUndoStep(), this.document.execCommand(a, !1, b), this.triggerEvent(a, [], !0, !0)
    }, a.Editable.prototype._startInDefault = function(a) {
        this.focus(), this.document.execCommand(a, !1, !1), this.refreshButtons()
    }, a.Editable.prototype._startInFontExec = function(b, c, d) {
        this.focus();
        try {
            var e = this.getRange(),
                f = e.cloneRange();
            f.collapse(!1);
            var g = a('<span data-inserted="true" data-fr-verified="true" style="' + b + ": " + d + ';">' + a.Editable.INVISIBLE_SPACE + "</span>", this.document);
            f.insertNode(g[0]), g = this.$element.find("[data-inserted]"), g.removeAttr("data-inserted"), this.setSelection(g.get(0), 1)
        } catch (h) {}
    }, a.Editable.prototype.removeFormat = function() {
        this.document.execCommand("removeFormat", !1, !1), this.document.execCommand("unlink", !1, !1)
    }, a.Editable.prototype.inlineStyle = function(b, c, d) {
        if (this.browser.webkit && "font-size" != b) {
            var e = function(a) {
                return a.attr("style").indexOf("font-size") >= 0
            };
            this.$element.find("span").each(function(b, c) {
                var d = a(c);
                d.attr("style") && e(d) && (d.data("font-size", d.css("font-size")), d.css("font-size", ""))
            })
        }
        this.document.execCommand("fontSize", !1, 4), this.saveSelectionByMarkers(), this.browser.webkit && "font-size" != b && this.$element.find("span").each(function(b, c) {
            var d = a(c);
            d.data("font-size") && (d.css("font-size", d.data("font-size")), d.removeData("font-size"))
        });
        var f = function(c) {
            var e = a(c);
            e.css(b) != d && e.css(b, ""), "" === e.attr("style") && e.replaceWith(e.html())
        };
        this.$element.find("font").each(function(c, e) {
            var g = a('<span data-fr-verified="true" style="' + b + ": " + d + ';">' + a(e).html() + "</span>");
            a(e).replaceWith(g);
            for (var h = g.find("span"), i = h.length - 1; i >= 0; i--) f(h[i])
        }), this.removeBlankSpans(), this.restoreSelectionByMarkers(), this.repositionEditor(), null != c && this.triggerEvent(c, [d], !0, !0)
    }
}(jQuery),
function(a) {
    a.Editable.prototype.addListener = function(a, b) {
        var c = this._events,
            d = c[a] = c[a] || [];
        d.push(b)
    }, a.Editable.prototype.raiseEvent = function(a, b) {
        void 0 === b && (b = []);
        var c = !0,
            d = this._events[a];
        if (d)
            for (var e = 0, f = d.length; f > e; e++) {
                var g = d[e].apply(this, b);
                void 0 !== g && c !== !1 && (c = g)
            }
        return void 0 === c && (c = !0), c
    }
}(jQuery),
function(a) {
    a.Editable.prototype.start_marker = '<span class="f-marker" data-id="0" data-fr-verified="true" data-type="true"></span>', a.Editable.prototype.end_marker = '<span class="f-marker" data-id="0" data-fr-verified="true" data-type="false"></span>', a.Editable.prototype.markers_html = '<span class="f-marker" data-id="0" data-fr-verified="true" data-type="false"></span><span class="f-marker" data-id="0" data-fr-verified="true" data-type="true"></span>', a.Editable.prototype.text = function() {
        var a = "";
        return this.window.getSelection ? a = this.window.getSelection() : this.document.getSelection ? a = this.document.getSelection() : this.document.selection && (a = this.document.selection.createRange().text), a.toString()
    }, a.Editable.prototype.selectionInEditor = function() {
        var b = this.getSelectionParent(),
            c = !1;
        return b == this.$element.get(0) && (c = !0), c === !1 && a(b).parents().each(a.proxy(function(a, b) {
            b == this.$element.get(0) && (c = !0)
        }, this)), c
    }, a.Editable.prototype.getSelection = function() {
        var a = "";
        return a = this.window.getSelection ? this.window.getSelection() : this.document.getSelection ? this.document.getSelection() : this.document.selection.createRange()
    }, a.Editable.prototype.getRange = function() {
        var a = this.getRanges();
        return a.length > 0 ? a[0] : null
    }, a.Editable.prototype.getRanges = function() {
        var a = this.getSelection();
        if (a.getRangeAt && a.rangeCount) {
            for (var b = [], c = 0; c < a.rangeCount; c++) b.push(a.getRangeAt(c));
            return b
        }
        return this.document.createRange ? [this.document.createRange()] : []
    }, a.Editable.prototype.clearSelection = function() {
        var a = this.getSelection();
        try {
            a.removeAllRanges ? a.removeAllRanges() : a.empty ? a.empty() : a.clear && a.clear()
        } catch (b) {}
    }, a.Editable.prototype.getSelectionElement = function() {
        var b = this.getSelection();
        if (b.rangeCount) {
            var c = this.getRange(),
                d = c.startContainer;
            if (1 == d.nodeType) {
                var e = !1;
                d.childNodes.length > 0 && d.childNodes[c.startOffset] && a(d.childNodes[c.startOffset]).text() === this.text() && (d = d.childNodes[c.startOffset], e = !0), !e && d.childNodes.length > 0 && a(d.childNodes[0]).text() === this.text() && ["BR", "IMG", "HR"].indexOf(d.childNodes[0].tagName) < 0 && (d = d.childNodes[0])
            }
            for (; 1 != d.nodeType && d.parentNode;) d = d.parentNode;
            for (var f = d; f && "BODY" != f.tagName;) {
                if (f == this.$element.get(0)) return d;
                f = a(f).parent()[0]
            }
        }
        return this.$element.get(0)
    }, a.Editable.prototype.getSelectionParent = function() {
        var b, c = null;
        return this.window.getSelection ? (b = this.window.getSelection(), b.rangeCount && (c = b.getRangeAt(0).commonAncestorContainer, 1 != c.nodeType && (c = c.parentNode))) : (b = this.document.selection) && "Control" != b.type && (c = b.createRange().parentElement()), null != c && (a.inArray(this.$element.get(0), a(c).parents()) >= 0 || c == this.$element.get(0)) ? c : null
    }, a.Editable.prototype.nodeInRange = function(a, b) {
        var c;
        if (a.intersectsNode) return a.intersectsNode(b);
        c = b.ownerthis.document.createRange();
        try {
            c.selectNode(b)
        } catch (d) {
            c.selectNodeContents(b)
        }
        return -1 == a.compareBoundaryPoints(Range.END_TO_START, c) && 1 == a.compareBoundaryPoints(Range.START_TO_END, c)
    }, a.Editable.prototype.getElementFromNode = function(b) {
        for (1 != b.nodeType && (b = b.parentNode); null !== b && this.valid_nodes.indexOf(b.tagName) < 0;) b = b.parentNode;
        return null != b && "LI" == b.tagName && a(b).find(this.valid_nodes.join(",")).not("li").length > 0 ? null : a.makeArray(a(b).parents()).indexOf(this.$element.get(0)) >= 0 ? b : null
    }, a.Editable.prototype.nextNode = function(a, b) {
        if (a.hasChildNodes()) return a.firstChild;
        for (; a && !a.nextSibling && a != b;) a = a.parentNode;
        return a && a != b ? a.nextSibling : null
    }, a.Editable.prototype.getRangeSelectedNodes = function(a) {
        var b = [],
            c = a.startContainer,
            d = a.endContainer;
        if (c == d && "TR" != c.tagName) {
            if (c.hasChildNodes() && 0 !== c.childNodes.length) {
                for (var e = c.childNodes, f = a.startOffset; f < a.endOffset; f++) e[f] && b.push(e[f]);
                return 0 === b.length && b.push(c), b
            }
            return [c]
        }
        if (c == d && "TR" == c.tagName) {
            var g = c.childNodes,
                h = a.startOffset;
            if (g.length > h && h >= 0) {
                var i = g[h];
                if ("TD" == i.tagName || "TH" == i.tagName) return [i]
            }
        }
        for (; c && c != d;) c = this.nextNode(c, d), (c != d || a.endOffset > 0) && b.push(c);
        for (c = a.startContainer; c && c != a.commonAncestorContainer;) b.unshift(c), c = c.parentNode;
        return b
    }, a.Editable.prototype.getSelectedNodes = function() {
        if (this.window.getSelection) {
            var b = this.window.getSelection();
            if (!b.isCollapsed) {
                for (var c = this.getRanges(), d = [], e = 0; e < c.length; e++) d = a.merge(d, this.getRangeSelectedNodes(c[e]));
                return d
            }
            if (this.selectionInEditor()) {
                var f = b.getRangeAt(0).startContainer;
                return 3 == f.nodeType ? [f.parentNode] : [f]
            }
        }
        return []
    }, a.Editable.prototype.getSelectionElements = function() {
        var b = this.getSelectedNodes(),
            c = [];
        return a.each(b, a.proxy(function(a, b) {
            if (null !== b) {
                var d = this.getElementFromNode(b);
                c.indexOf(d) < 0 && d != this.$element.get(0) && null !== d && c.push(d)
            }
        }, this)), 0 === c.length && c.push(this.$element.get(0)), c
    }, a.Editable.prototype.getSelectionLink = function() {
        var b = this.getSelectionLinks();
        return b.length > 0 ? a(b[0]).attr("href") : null
    }, a.Editable.prototype.saveSelection = function() {
        if (!this.selectionDisabled) {
            this.savedRanges = [];
            for (var a = this.getRanges(), b = 0; b < a.length; b++) this.savedRanges.push(a[b].cloneRange())
        }
    }, a.Editable.prototype.restoreSelection = function() {
        if (!this.selectionDisabled) {
            var a, b, c = this.getSelection();
            if (this.savedRanges && this.savedRanges.length)
                for (c.removeAllRanges(), a = 0, b = this.savedRanges.length; b > a; a += 1) c.addRange(this.savedRanges[a]);
            this.savedRanges = null
        }
    }, a.Editable.prototype.insertMarkersAtPoint = function(a) {
        var b = a.clientX,
            c = a.clientY;
        this.removeMarkers();
        var d, e = null;
        if ("undefined" != typeof this.document.caretPositionFromPoint ? (d = this.document.caretPositionFromPoint(b, c), e = this.document.createRange(), e.setStart(d.offsetNode, d.offset), e.setEnd(d.offsetNode, d.offset)) : "undefined" != typeof this.document.caretRangeFromPoint && (d = this.document.caretRangeFromPoint(b, c), e = this.document.createRange(), e.setStart(d.startContainer, d.startOffset), e.setEnd(d.startContainer, d.startOffset)), null !== e && "undefined" != typeof this.window.getSelection) {
            var f = this.window.getSelection();
            f.removeAllRanges(), f.addRange(e)
        } else if ("undefined" != typeof this.document.body.createTextRange) try {
            e = this.document.body.createTextRange(), e.moveToPoint(b, c);
            var g = e.duplicate();
            g.moveToPoint(b, c), e.setEndPoint("EndToEnd", g), e.select()
        } catch (h) {}
        this.placeMarker(e, !0, 0), this.placeMarker(e, !1, 0)
    }, a.Editable.prototype.saveSelectionByMarkers = function() {
        if (!this.selectionDisabled) {
            this.selectionInEditor() || this.focus(), this.removeMarkers();
            for (var a = this.getRanges(), b = 0; b < a.length; b++)
                if (a[b].startContainer !== this.document) {
                    var c = a[b];
                    this.placeMarker(c, !0, b), this.placeMarker(c, !1, b)
                }
        }
    }, a.Editable.prototype.hasSelectionByMarkers = function() {
        var a = this.$element.find('.f-marker[data-type="true"]');
        return a.length > 0 ? !0 : !1
    }, a.Editable.prototype.restoreSelectionByMarkers = function(b) {
        if (void 0 === b && (b = !0), !this.selectionDisabled) {
            var c = this.$element.find('.f-marker[data-type="true"]');
            if (0 === c.length) return !1;
            this.$element.is(":focus") || this.browser.msie || this.$element.focus();
            var d = this.getSelection();
            (b || this.getRange() && !this.getRange().collapsed || !a(c[0]).attr("data-collapsed")) && (this.browser.msie && a.Editable.getIEversion() < 9 || (this.clearSelection(), b = !0));
            for (var e = 0; e < c.length; e++) {
                var f = a(c[e]).data("id"),
                    g = c[e],
                    h = this.$element.find('.f-marker[data-type="false"][data-id="' + f + '"]');
                if (this.browser.msie && a.Editable.getIEversion() < 9) return this.setSelection(g, 0, h, 0), this.removeMarkers(), !1;
                var i;
                if (i = b ? this.document.createRange() : this.getRange(), h.length > 0) {
                    h = h[0];
                    try {
                        i.setStartAfter(g), i.setEndBefore(h)
                    } catch (j) {}
                }
                b && d.addRange(i)
            }
            this.removeMarkers()
        }
    }, a.Editable.prototype.setSelection = function(a, b, c, d) {
        var e = this.getSelection();
        if (e) {
            this.clearSelection();
            try {
                c || (c = a), void 0 === b && (b = 0), void 0 === d && (d = b);
                var f = this.getRange();
                f.setStart(a, b), f.setEnd(c, d), e.addRange(f)
            } catch (g) {}
        }
    }, a.Editable.prototype.buildMarker = function(b, c, d) {
        return void 0 === d && (d = ""), a('<span class="f-marker"' + d + ' style="display:none; line-height: 0;" data-fr-verified="true" data-id="' + c + '" data-type="' + b + '">', this.document)[0]
    }, a.Editable.prototype.placeMarker = function(b, c, d) {
        var e = "";
        b.collapsed && (e = ' data-collapsed="true"');
        try {
            var f = b.cloneRange();
            f.collapse(c);
            var g, h, i;
            if (f.insertNode(this.buildMarker(c, d, e)), c === !0 && e)
                for (g = this.$element.find('span.f-marker[data-type="true"][data-id="' + d + '"]').get(0).nextSibling; 3 === g.nodeType && 0 === g.data.length;) a(g).remove(), g = this.$element.find('span.f-marker[data-type="true"][data-id="' + d + '"]').get(0).nextSibling;
            if (c === !0 && "" === e && (i = this.$element.find('span.f-marker[data-type="true"][data-id="' + d + '"]').get(0), g = i.nextSibling, g && g.nodeType === Node.ELEMENT_NODE && this.valid_nodes.indexOf(g.tagName) >= 0)) {
                h = [g];
                do g = h[0], h = a(g).contents(); while (h[0] && this.valid_nodes.indexOf(h[0].tagName) >= 0);
                a(g).prepend(a(i))
            }
            if (c === !1 && "" === e && (i = this.$element.find('span.f-marker[data-type="false"][data-id="' + d + '"]').get(0), g = i.previousSibling, g && g.nodeType === Node.ELEMENT_NODE && this.valid_nodes.indexOf(g.tagName) >= 0)) {
                h = [g];
                do g = h[h.length - 1], h = a(g).contents(); while (h[h.length - 1] && this.valid_nodes.indexOf(h[h.length - 1].tagName) >= 0);
                a(g).append(a(i))
            }
        } catch (j) {}
    }, a.Editable.prototype.removeMarkers = function() {
        this.$element.find(".f-marker").remove()
    }, a.Editable.prototype.getSelectionTextInfo = function(a) {
        var b, c, d = !1,
            e = !1;
        if (this.window.getSelection) {
            var f = this.window.getSelection();
            f.rangeCount && (b = f.getRangeAt(0), c = b.cloneRange(), c.selectNodeContents(a), c.setEnd(b.startContainer, b.startOffset), d = "" === c.toString(), c.selectNodeContents(a), c.setStart(b.endContainer, b.endOffset), e = "" === c.toString())
        } else this.document.selection && "Control" != this.document.selection.type && (b = this.document.selection.createRange(), c = b.duplicate(), c.moveToElementText(a), c.setEndPoint("EndToStart", b), d = "" === c.text, c.moveToElementText(a), c.setEndPoint("StartToEnd", b), e = "" === c.text);
        return {
            atStart: d,
            atEnd: e
        }
    }, a.Editable.prototype.endsWith = function(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    }
}(jQuery),
function(a) {
    a.Editable.hexToRGB = function(a) {
        var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        a = a.replace(b, function(a, b, c, d) {
            return b + b + c + c + d + d
        });
        var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return c ? {
            r: parseInt(c[1], 16),
            g: parseInt(c[2], 16),
            b: parseInt(c[3], 16)
        } : null
    }, a.Editable.hexToRGBString = function(a) {
        var b = this.hexToRGB(a);
        return b ? "rgb(" + b.r + ", " + b.g + ", " + b.b + ")" : ""
    }, a.Editable.RGBToHex = function(a) {
        function b(a) {
            return ("0" + parseInt(a, 10).toString(16)).slice(-2)
        }
        try {
            return a && "transparent" !== a ? /^#[0-9A-F]{6}$/i.test(a) ? a : (a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), ("#" + b(a[1]) + b(a[2]) + b(a[3])).toUpperCase()) : ""
        } catch (c) {
            return null
        }
    }, a.Editable.getIEversion = function() {
        var a, b, c = -1;
        return "Microsoft Internet Explorer" == navigator.appName ? (a = navigator.userAgent, b = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== b.exec(a) && (c = parseFloat(RegExp.$1))) : "Netscape" == navigator.appName && (a = navigator.userAgent, b = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== b.exec(a) && (c = parseFloat(RegExp.$1))), c
    }, a.Editable.browser = function() {
        var a = {};
        if (this.getIEversion() > 0) a.msie = !0;
        else {
            var b = navigator.userAgent.toLowerCase(),
                c = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [],
                d = {
                    browser: c[1] || "",
                    version: c[2] || "0"
                };
            c[1] && (a[d.browser] = !0), parseInt(d.version, 10) < 9 && a.msie && (a.oldMsie = !0), a.chrome ? a.webkit = !0 : a.webkit && (a.safari = !0)
        }
        return a
    }, a.Editable.isArray = function(a) {
        return a && !a.propertyIsEnumerable("length") && "object" == typeof a && "number" == typeof a.length
    }, a.Editable.uniq = function(b) {
        return a.grep(b, function(c, d) {
            return d == a.inArray(c, b)
        })
    }, a.Editable.cleanWhitespace = function(b) {
        b.contents().filter(function() {
            return 1 == this.nodeType && a.Editable.cleanWhitespace(a(this)), 3 == this.nodeType && !/\S/.test(this.nodeValue)
        }).remove()
    }
}(jQuery),
function(a) {
    a.Editable.prototype.show = function(b) {
        if (this.hideDropdowns(), void 0 !== b) {
            if (this.options.inlineMode || this.options.editInPopup)
                if (null !== b && "touchend" !== b.type) {
                    if (this.options.showNextToCursor) {
                        var c = b.pageX,
                            d = b.pageY;
                        c < this.$element.offset().left && (c = this.$element.offset().left), c > this.$element.offset().left + this.$element.width() && (c = this.$element.offset().left + this.$element.width()), d < this.$element.offset.top && (d = this.$element.offset().top), d > this.$element.offset().top + this.$element.height() && (d = this.$element.offset().top + this.$element.height()), 20 > c && (c = 20), 0 > d && (d = 0), this.showByCoordinates(c, d)
                    } else this.repositionEditor();
                    a(".froala-editor:not(.f-basic)").hide(), this.$editor.show(), 0 !== this.options.buttons.length || this.options.editInPopup || this.$editor.hide()
                } else a(".froala-editor:not(.f-basic)").hide(), this.$editor.show(), this.repositionEditor();
            this.hidePopups(), this.options.editInPopup || this.showEditPopupWrapper(), this.$bttn_wrapper.show(), this.refreshButtons(), this.imageMode = !1
        }
    }, a.Editable.prototype.hideDropdowns = function() {
        this.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active"), this.$bttn_wrapper.find(".fr-dropdown .fr-trigger")
    }, a.Editable.prototype.hide = function(a) {
        return this.initialized ? (void 0 === a && (a = !0), a ? this.hideOtherEditors() : (this.closeImageMode(), this.imageMode = !1), this.$popup_editor.hide(), this.hidePopups(!1), void(this.link = !1)) : !1
    }, a.Editable.prototype.hideOtherEditors = function() {
        for (var b = 1; b <= a.Editable.count; b++) b != this._id && this.$window.trigger("hide." + b)
    }, a.Editable.prototype.hideBttnWrapper = function() {
        this.options.inlineMode && this.$bttn_wrapper.hide()
    }, a.Editable.prototype.showBttnWrapper = function() {
        this.options.inlineMode && this.$bttn_wrapper.show()
    }, a.Editable.prototype.showEditPopupWrapper = function() {
        this.$edit_popup_wrapper && (this.$edit_popup_wrapper.show(), setTimeout(a.proxy(function() {
            this.$edit_popup_wrapper.find("input").val(this.$element.text()).focus().select()
        }, this), 1))
    }, a.Editable.prototype.hidePopups = function(a) {
        void 0 === a && (a = !0), a && this.hideBttnWrapper(), this.raiseEvent("hidePopups")
    }, a.Editable.prototype.showEditPopup = function() {
        this.showEditPopupWrapper()
    }
}(jQuery),
function(a) {
    a.Editable.prototype.getBoundingRect = function() {
        var b;
        if (this.isLink) {
            b = {};
            var c = this.$element;
            b.left = c.offset().left - this.$window.scrollLeft(), b.top = c.offset().top - this.$window.scrollTop(), b.width = c.outerWidth(), b.height = parseInt(c.css("padding-top").replace("px", ""), 10) + c.height(), b.right = 1, b.bottom = 1, b.ok = !0
        } else if (this.getRange() && this.getRange().collapsed) {
            var d = a(this.getSelectionElement());
            this.saveSelectionByMarkers();
            var e = this.$element.find(".f-marker:first");
            e.css("display", "inline");
            var f = e.offset();
            e.css("display", "none"), b = {}, b.left = f.left - this.$window.scrollLeft(), b.width = 0, b.height = (parseInt(d.css("line-height").replace("px", ""), 10) || 10) - 10 - this.$window.scrollTop(), b.top = f.top, b.right = 1, b.bottom = 1, b.ok = !0, this.removeMarkers()
        } else this.getRange() && (b = this.getRange().getBoundingClientRect());
        return b
    }, a.Editable.prototype.repositionEditor = function(a) {
        var b, c, d;
        if (this.options.inlineMode || a) {
            if (b = this.getBoundingRect(), this.showBttnWrapper(), b.ok || b.left >= 0 && b.top >= 0 && b.right > 0 && b.bottom > 0) c = b.left + b.width / 2, d = b.top + b.height, this.iOS() && this.iOSVersion() < 8 || (c += this.$window.scrollLeft(), d += this.$window.scrollTop()), this.showByCoordinates(c, d);
            else if (this.options.alwaysVisible) this.hide();
            else {
                var e = this.$element.offset();
                this.showByCoordinates(e.left, e.top + 10)
            }
            0 === this.options.buttons.length && this.hide()
        }
    }, a.Editable.prototype.showByCoordinates = function(a, b) {
        a -= 22, b += 8;
        var c = this.$document.find(this.options.scrollableContainer);
        "body" != this.options.scrollableContainer && (a -= c.offset().left, b -= c.offset().top, this.iPad() || (b += c.scrollTop(), a += c.scrollLeft())), b > this.$box.offset().top + this.$box.outerHeight() && (b = this.$box.offset().top + this.$box.outerHeight(), this.options.inlineMode && (b += 10));
        var d = Math.max(this.$popup_editor.outerWidth(), 250);
        a + d >= c.outerWidth() - 50 && a + 44 - d > 0 ? (this.$popup_editor.addClass("right-side"), a = c.outerWidth() - (a + 44), "static" == c.css("position") && (a = a + parseFloat(c.css("margin-left"), 10) + parseFloat(c.css("margin-right"), 10)), this.$popup_editor.css("top", b), this.$popup_editor.css("right", a), this.$popup_editor.css("left", "auto")) : a + d < c.outerWidth() - 50 ? (this.$popup_editor.removeClass("right-side"), this.$popup_editor.css("top", b), this.$popup_editor.css("left", a), this.$popup_editor.css("right", "auto")) : (this.$popup_editor.removeClass("right-side"), this.$popup_editor.css("top", b), this.$popup_editor.css("left", Math.max(c.outerWidth() - d, 10) / 2), this.$popup_editor.css("right", "auto")), this.$popup_editor.show()
    }, a.Editable.prototype.positionPopup = function(b) {
        if (a(this.$editor.find('button.fr-bttn[data-cmd="' + b + '"]')).length) {
            var c = this.$editor.find('button.fr-bttn[data-cmd="' + b + '"]'),
                d = c.width(),
                e = c.height(),
                f = c.offset().left + d / 2,
                g = c.offset().top + e;
            this.showByCoordinates(f, g)
        }
    }
}(jQuery),
function(a) {
    a.Editable.prototype.refreshImageAlign = function(a) {
        this.$image_editor.find('.fr-dropdown > button[data-name="align"] + ul li').removeClass("active");
        var b = "floatImageNone",
            c = "center";
        a.hasClass("fr-fil") ? (c = "left", b = "floatImageLeft") : a.hasClass("fr-fir") && (c = "right", b = "floatImageRight"), this.$image_editor.find('.fr-dropdown > button[data-name="align"].fr-trigger i').attr("class", "fa fa-align-" + c), this.$image_editor.find('.fr-dropdown > button[data-name="align"] + ul li[data-val="' + b + '"]').addClass("active")
    }, a.Editable.prototype.refreshImageDisplay = function() {
        var a = this.$element.find(".f-img-editor");
        this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li').removeClass("active"), a.hasClass("fr-dib") ? this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li[data-val="fr-dib"]').addClass("active") : this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li[data-val="fr-dii"]').addClass("active")
    }, a.Editable.image_commands = {
        align: {
            title: "Alignment",
            icon: "fa fa-align-center",
            refresh: a.Editable.prototype.refreshImageAlign,
            refreshOnShow: a.Editable.prototype.refreshImageAlign,
            seed: [{
                cmd: "floatImageLeft",
                title: "Align Left",
                icon: "fa fa-align-left"
            }, {
                cmd: "floatImageNone",
                title: "Align Center",
                icon: "fa fa-align-center"
            }, {
                cmd: "floatImageRight",
                title: "Align Right",
                icon: "fa fa-align-right"
            }],
            callback: function(a, b, c) {
                this[c](a)
            },
            undo: !0
        },
        display: {
            title: "Text Wrap",
            icon: "fa fa-star",
            refreshOnShow: a.Editable.prototype.refreshImageDisplay,
            namespace: "Image",
            seed: [{
                title: "Inline",
                value: "fr-dii"
            }, {
                title: "Break Text",
                value: "fr-dib"
            }],
            callback: function(a, b, c) {
                this.displayImage(a, c)
            },
            undo: !0
        },
        linkImage: {
            title: "Insert Link",
            icon: {
                type: "font",
                value: "fa fa-link"
            },
            callback: function(a) {
                this.linkImage(a)
            }
        },
        replaceImage: {
            title: "Replace Image",
            icon: {
                type: "font",
                value: "fa fa-exchange"
            },
            callback: function(a) {
                this.replaceImage(a)
            }
        },
        removeImage: {
            title: "Remove Image",
            icon: {
                type: "font",
                value: "fa fa-trash-o"
            },
            callback: function(a) {
                this.removeImage(a)
            }
        }
    }, a.Editable.DEFAULTS = a.extend(a.Editable.DEFAULTS, {
        allowedImageTypes: ["jpeg", "jpg", "png", "gif"],
        customImageButtons: {},
        defaultImageTitle: "Image title",
        defaultImageWidth: 300,
        defaultImageDisplay: "block",
        defaultImageAlignment: "center",
        imageButtons: ["display", "align", "linkImage", "replaceImage", "removeImage"],
        imageDeleteConfirmation: !0,
        imageDeleteURL: null,
        imageDeleteParams: {},
        imageMove: !0,
        imageResize: !0,
        imageLink: !0,
        imageTitle: !0,
        imageUpload: !0,
        imageUploadParams: {},
        imageUploadParam: "file",
        imageUploadToS3: !1,
        imageUploadURL: "http://i.froala.com/upload",
        maxImageSize: 10485760,
        pasteImage: !0,
        textNearImage: !0
    }), a.Editable.prototype.hideImageEditorPopup = function() {
        this.$image_editor && this.$image_editor.hide()
    }, a.Editable.prototype.showImageEditorPopup = function() {
        this.$image_editor && this.$image_editor.show(), this.options.imageMove || this.$element.attr("contenteditable", !1)
    }, a.Editable.prototype.showImageWrapper = function() {
        this.$image_wrapper && this.$image_wrapper.show()
    }, a.Editable.prototype.hideImageWrapper = function(a) {
        this.$image_wrapper && (this.$element.attr("data-resize") || a || (this.closeImageMode(), this.imageMode = !1), this.$image_wrapper.hide(), this.$image_wrapper.find("input").blur())
    }, a.Editable.prototype.showInsertImage = function() {
        this.hidePopups(), this.showImageWrapper()
    }, a.Editable.prototype.showImageEditor = function() {
        this.hidePopups(), this.showImageEditorPopup()
    }, a.Editable.prototype.insertImageHTML = function() {
        var b = '<div class="froala-popup froala-image-popup" style="display: none;"><h4><span data-text="true">Insert Image</span><span data-text="true">Uploading image</span><i title="Cancel" class="fa fa-times" id="f-image-close-' + this._id + '"></i></h4>';
        return b += '<div id="f-image-list-' + this._id + '">', this.options.imageUpload && (b += '<div class="f-popup-line drop-upload">', b += '<div class="f-upload" id="f-upload-div-' + this._id + '"><strong data-text="true">Drop Image</strong><br>(<span data-text="true">or click</span>)<form target="frame-' + this._id + '" enctype="multipart/form-data" encoding="multipart/form-data" action="' + this.options.imageUploadURL + '" method="post" id="f-upload-form-' + this._id + '"><input id="f-file-upload-' + this._id + '" type="file" name="' + this.options.imageUploadParam + '" accept="image/*"></form></div>', this.browser.msie && a.Editable.getIEversion() <= 9 && (b += '<iframe id="frame-' + this._id + '" name="frame-' + this._id + '" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;"></iframe>'), b += "</div>"), this.options.imageLink && (b += '<div class="f-popup-line"><label><span data-text="true">Enter URL</span>: </label><input id="f-image-url-' + this._id + '" type="text" placeholder="http://example.com"><button class="f-browse fr-p-bttn" id="f-browser-' + this._id + '"><i class="fa fa-search"></i></button><button data-text="true" class="f-ok fr-p-bttn f-submit" id="f-image-ok-' + this._id + '">OK</button></div>'), b += "</div>", b += '<p class="f-progress" id="f-progress-' + this._id + '"><span></span></p>', b += "</div>"
    }, a.Editable.prototype.iFrameLoad = function() {
        var a = this.$image_wrapper.find("iframe#frame-" + this._id);
        if (!a.attr("data-loaded")) return a.attr("data-loaded", !0), !1;
        try {
            var b = this.$image_wrapper.find("#f-upload-form-" + this._id);
            if (this.options.imageUploadToS3) {
                var c = b.attr("action"),
                    d = b.find('input[name="key"]').val(),
                    e = c + d;
                this.writeImage(e), this.options.imageUploadToS3.callback && this.options.imageUploadToS3.callback.call(this, e, d)
            } else {
                var f = a.contents().text();
                this.parseImageResponse(f)
            }
        } catch (g) {
            this.throwImageError(7)
        }
    }, a.Editable.prototype.initImage = function() {
        this.buildInsertImage(), (!this.isLink || this.isImage) && this.initImagePopup(), this.addListener("destroy", this.destroyImage)
    }, a.Editable.initializers.push(a.Editable.prototype.initImage), a.Editable.prototype.destroyImage = function() {
        this.$image_editor && this.$image_editor.html("").removeData().remove(), this.$image_wrapper && this.$image_wrapper.html("").removeData().remove()
    }, a.Editable.prototype.buildInsertImage = function() {
        this.$image_wrapper = a(this.insertImageHTML()), this.$popup_editor.append(this.$image_wrapper);
        var b = this;
        if (this.$image_wrapper.on("mouseup touchend", a.proxy(function(a) {
                this.isResizing() || a.stopPropagation()
            }, this)), this.addListener("hidePopups", a.proxy(function() {
                this.hideImageWrapper(!0)
            }, this)), this.$progress_bar = this.$image_wrapper.find("p#f-progress-" + this._id), this.options.imageUpload) {
            if (this.browser.msie && a.Editable.getIEversion() <= 9) {
                var c = this.$image_wrapper.find("iframe").get(0);
                c.attachEvent ? c.attachEvent("onload", function() {
                    b.iFrameLoad()
                }) : c.onload = function() {
                    b.iFrameLoad()
                }
            }
            this.$image_wrapper.on("change", 'input[type="file"]', function() {
                if (void 0 !== this.files) b.uploadImage(this.files);
                else {
                    if (!b.triggerEvent("beforeImageUpload", [], !1)) return !1;
                    var c = a(this).parents("form");
                    c.find('input[type="hidden"]').remove();
                    var d;
                    for (d in b.options.imageUploadParams) c.prepend('<input type="hidden" name="' + d + '" value="' + b.options.imageUploadParams[d] + '" />');
                    if (b.options.imageUploadToS3 !== !1) {
                        for (d in b.options.imageUploadToS3.params) c.prepend('<input type="hidden" name="' + d + '" value="' + b.options.imageUploadToS3.params[d] + '" />');
                        c.prepend('<input type="hidden" name="success_action_status" value="201" />'), c.prepend('<input type="hidden" name="X-Requested-With" value="xhr" />'), c.prepend('<input type="hidden" name="Content-Type" value="" />'), c.prepend('<input type="hidden" name="key" value="' + b.options.imageUploadToS3.keyStart + (new Date).getTime() + "-" + a(this).val().match(/[^\/\\]+$/) + '" />')
                    } else c.prepend('<input type="hidden" name="XHR_CORS_TRARGETORIGIN" value="' + b.window.location.href + '" />');
                    b.showInsertImage(), b.showImageLoader(!0), b.disable(), c.submit()
                }
                a(this).val("")
            })
        }
        this.buildDragUpload(), this.$image_wrapper.on("mouseup keydown", "#f-image-url-" + this._id, a.proxy(function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation()
        }, this)), this.$image_wrapper.on("click", "#f-image-ok-" + this._id, a.proxy(function() {
            this.writeImage(this.$image_wrapper.find("#f-image-url-" + this._id).val(), !0)
        }, this)), this.$image_wrapper.on(this.mouseup, "#f-image-close-" + this._id, a.proxy(function(a) {
            return this.isDisabled ? !1 : (a.stopPropagation(), this.$bttn_wrapper.show(), this.hideImageWrapper(!0), this.options.inlineMode && 0 === this.options.buttons.length && (this.imageMode ? this.showImageEditor() : this.hide()), this.imageMode || (this.restoreSelection(), this.focus()), void(this.options.inlineMode || this.imageMode ? this.imageMode && this.showImageEditor() : this.hide()))
        }, this)), this.$image_wrapper.on("click", function(a) {
            a.stopPropagation()
        }), this.$image_wrapper.on("click", "*", function(a) {
            a.stopPropagation()
        })
    }, a.Editable.prototype.deleteImage = function(b) {
        if (this.options.imageDeleteURL) {
            var c = this.options.imageDeleteParams;
            c.info = b.data("info"), c.src = b.attr("src"), a.ajax({
                type: "POST",
                url: this.options.imageDeleteURL,
                data: c,
                crossDomain: this.options.crossDomain,
                xhrFields: {
                    withCredentials: this.options.withCredentials
                },
                headers: this.options.headers
            }).done(a.proxy(function(a) {
                b.parent().parent().hasClass("f-image-list") ? b.parent().remove() : b.parent().removeClass("f-img-deleting"), this.triggerEvent("imageDeleteSuccess", [a], !1)
            }, this)).fail(a.proxy(function() {
                b.parent().removeClass("f-img-deleting"), this.triggerEvent("imageDeleteError", ["Error during image delete."], !1)
            }, this))
        } else b.parent().removeClass("f-img-deleting"), this.triggerEvent("imageDeleteError", ["Missing imageDeleteURL option."], !1)
    }, a.Editable.prototype.imageHandle = function() {
        var b = this,
            c = a('<span data-fr-verified="true">').addClass("f-img-handle").on({
                movestart: function(c) {
                    b.hide(), b.$element.addClass("f-non-selectable").attr("contenteditable", !1), b.$element.attr("data-resize", !0), a(this).attr("data-start-x", c.startX), a(this).attr("data-start-y", c.startY)
                },
                move: function(c) {
                    var d = a(this),
                        e = c.pageX - parseInt(d.attr("data-start-x"), 10);
                    d.attr("data-start-x", c.pageX), d.attr("data-start-y", c.pageY);
                    var f = d.prevAll("img"),
                        g = f.width();
                    d.hasClass("f-h-ne") || d.hasClass("f-h-se") ? f.attr("width", g + e) : f.attr("width", g - e), b.triggerEvent("imageResize", [f], !1)
                },
                moveend: function() {
                    a(this).removeAttr("data-start-x"), a(this).removeAttr("data-start-y");
                    var c = a(this),
                        d = c.prevAll("img");
                    b.$element.removeClass("f-non-selectable"), b.isImage || b.$element.attr("contenteditable", !0), b.triggerEvent("imageResizeEnd", [d]), a(this).trigger("mouseup")
                },
                touchend: function() {
                    a(this).trigger("moveend")
                }
            });
        return c
    }, a.Editable.prototype.disableImageResize = function() {
        if (this.browser.mozilla) try {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
        } catch (a) {}
    }, a.Editable.prototype.isResizing = function() {
        return this.$element.attr("data-resize")
    }, a.Editable.prototype.getImageStyle = function(a) {
        var b = "z-index: 1; position: relative; overflow: auto;",
            c = a,
            d = "padding";
        return a.parent().hasClass("f-img-editor") && (c = a.parent(), d = "margin"), b += " padding-left:" + c.css(d + "-left") + ";", b += " padding-right:" + c.css(d + "-right") + ";", b += " padding-bottom:" + c.css(d + "-bottom") + ";", b += " padding-top:" + c.css(d + "-top") + ";", a.hasClass("fr-dib") ? (b += " vertical-align: top; display: block;", b += a.hasClass("fr-fir") ? " float: none; margin-right: 0; margin-left: auto;" : a.hasClass("fr-fil") ? " float: none; margin-left: 0; margin-right: auto;" : " float: none; margin: auto;") : (b += " display: inline-block;", b += a.hasClass("fr-fir") ? " float: right;" : a.hasClass("fr-fil") ? " float: left;" : " float: none;"), b
    }, a.Editable.prototype.getImageClass = function(a) {
        var b = a.split(" ");
        return a = "fr-fin", b.indexOf("fr-fir") >= 0 && (a = "fr-fir"), b.indexOf("fr-fil") >= 0 && (a = "fr-fil"), b.indexOf("fr-dib") >= 0 && (a += " fr-dib"), b.indexOf("fr-dii") >= 0 && (a += " fr-dii"), a
    }, a.Editable.prototype.refreshImageButtons = function(a) {
        this.$image_editor.find("button").removeClass("active");
        var b = a.css("float");
        b = a.hasClass("fr-fil") ? "Left" : a.hasClass("fr-fir") ? "Right" : "None", this.$image_editor.find('button[data-cmd="floatImage' + b + '"]').addClass("active"), this.raiseEvent("refreshImage", [a])
    }, a.Editable.prototype.initImageEvents = function() {
        document.addEventListener && !document.dropAssigned && (document.dropAssigned = !0, document.addEventListener("drop", a.proxy(function(b) {
            return a(".froala-element img.fr-image-move").length ? (b.preventDefault(), b.stopPropagation(), a(".froala-element img.fr-image-move").removeClass("fr-image-move"), !1) : void 0
        }, this))), this.disableImageResize();
        var b = this;
        this.$element.on("mousedown", 'img:not([contenteditable="false"])', function(c) {
            return b.isDisabled ? !1 : void(b.isResizing() || (b.initialized && c.stopPropagation(), b.$element.attr("contenteditable", !1), a(this).addClass("fr-image-move")))
        }), this.$element.on("mouseup", 'img:not([contenteditable="false"])', function() {
            return b.isDisabled ? !1 : void(b.isResizing() || (b.options.imageMove || b.isImage || b.isHTML || b.$element.attr("contenteditable", !0), a(this).removeClass("fr-image-move")))
        }), this.$element.on("click touchend", 'img:not([contenteditable="false"])', function(c) {
            if (b.isDisabled) return !1;
            if (!b.isResizing() && b.initialized) {
                if (c.preventDefault(), c.stopPropagation(), b.closeImageMode(), b.$element.blur(), b.refreshImageButtons(a(this)), b.$image_editor.find('.f-image-alt input[type="text"]').val(a(this).attr("alt") || a(this).attr("title")), b.showImageEditor(), !a(this).parent().hasClass("f-img-editor") || "SPAN" != a(this).parent().get(0).tagName) {
                    var d = b.getImageClass(a(this).attr("class"));
                    a(this).wrap('<span data-fr-verified="true" class="f-img-editor ' + d + '"></span>'), 0 !== a(this).parents(".f-img-wrap").length || b.isImage ? a(this).parents(".f-img-wrap").attr("class", d + " f-img-wrap") : a(this).parents("a").length > 0 ? a(this).parents("a:first").wrap('<span data-fr-verified="true" class="f-img-wrap ' + d + '"></span>') : a(this).parent().wrap('<span data-fr-verified="true" class="f-img-wrap ' + d + '"></span>')
                }
                if (a(this).parent().find(".f-img-handle").remove(), b.options.imageResize) {
                    var e = b.imageHandle();
                    a(this).parent().append(e.clone(!0).addClass("f-h-ne")), a(this).parent().append(e.clone(!0).addClass("f-h-se")), a(this).parent().append(e.clone(!0).addClass("f-h-sw")), a(this).parent().append(e.clone(!0).addClass("f-h-nw"))
                }
                b.showByCoordinates(a(this).offset().left + a(this).width() / 2, a(this).offset().top + a(this).height()), b.imageMode = !0, b.$bttn_wrapper.find(".fr-bttn").removeClass("active"), b.clearSelection()
            }
        }), this.$element.on("mousedown touchstart", ".f-img-handle", a.proxy(function() {
            return b.isDisabled ? !1 : void this.$element.attr("data-resize", !0)
        }, this)), this.$element.on("mouseup", ".f-img-handle", a.proxy(function(c) {
            if (b.isDisabled) return !1;
            var d = a(c.target).prevAll("img");
            setTimeout(a.proxy(function() {
                this.$element.removeAttr("data-resize"), d.click()
            }, this), 0)
        }, this))
    }, a.Editable.prototype.execImage = function(b, c, d) {
        var e = this.$element.find("span.f-img-editor"),
            f = e.find("img"),
            g = a.Editable.image_commands[b] || this.options.customImageButtons[b];
        g && g.callback && g.callback.apply(this, [f, b, c, d])
    }, a.Editable.prototype.bindImageRefreshListener = function(b) {
        b.refresh && this.addListener("refreshImage", a.proxy(function(a) {
            b.refresh.apply(this, [a])
        }, this))
    }, a.Editable.prototype.buildImageButton = function(a, b) {
        var c = '<button class="fr-bttn" data-namespace="Image" data-cmd="' + b + '" title="' + a.title + '">';
        return c += void 0 !== this.options.icons[b] ? this.prepareIcon(this.options.icons[b], a.title) : this.prepareIcon(a.icon, a.title), c += "</button>", this.bindImageRefreshListener(a), c
    }, a.Editable.prototype.buildImageAlignDropdown = function(a) {
        this.bindImageRefreshListener(a);
        for (var b = '<ul class="fr-dropdown-menu f-align">', c = 0; c < a.seed.length; c++) {
            var d = a.seed[c];
            b += '<li data-cmd="align" data-namespace="Image" data-val="' + d.cmd + '" title="' + d.title + '"><a href="#"><i class="' + d.icon + '"></i></a></li>'
        }
        return b += "</ul>"
    }, a.Editable.prototype.buildImageDropdown = function(a) {
        return dropdown = this.buildDefaultDropdown(a), btn = this.buildDropdownButton(a, dropdown), btn
    }, a.Editable.prototype.image_command_dispatcher = {
        align: function(a) {
            var b = this.buildImageAlignDropdown(a),
                c = this.buildDropdownButton(a, b);
            return c
        }
    }, a.Editable.prototype.buildImageButtons = function() {
        for (var b = "", c = 0; c < this.options.imageButtons.length; c++) {
            var d = this.options.imageButtons[c];
            if (void 0 !== a.Editable.image_commands[d] || void 0 !== this.options.customImageButtons[d]) {
                var e = a.Editable.image_commands[d] || this.options.customImageButtons[d];
                e.cmd = d;
                var f = this.image_command_dispatcher[d];
                b += f ? f.apply(this, [e]) : e.seed ? this.buildImageDropdown(e, d) : this.buildImageButton(e, d)
            }
        }
        return b
    }, a.Editable.prototype.initImagePopup = function() {
        this.$image_editor = a('<div class="froala-popup froala-image-editor-popup" style="display: none">');
        var b = a('<div class="f-popup-line f-popup-toolbar">').appendTo(this.$image_editor);
        b.append(this.buildImageButtons()), this.addListener("hidePopups", this.hideImageEditorPopup), this.options.imageTitle && a('<div class="f-popup-line f-image-alt">').append('<label><span data-text="true">Title</span>: </label>').append(a('<input type="text">').on("mouseup keydown touchend", function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation()
        })).append('<button class="fr-p-bttn f-ok" data-text="true" data-callback="setImageAlt" data-cmd="setImageAlt" title="OK">OK</button>').appendTo(this.$image_editor), this.$popup_editor.append(this.$image_editor), this.bindCommandEvents(this.$image_editor), this.bindDropdownEvents(this.$image_editor)
    }, a.Editable.prototype.displayImage = function(a, b) {
        var c = a.parents("span.f-img-editor");
        c.removeClass("fr-dii fr-dib").addClass(b), this.triggerEvent("imageDisplayed", [a, b]), a.click()
    }, a.Editable.prototype.floatImageLeft = function(a) {
        var b = a.parents("span.f-img-editor");
        b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fil"), this.isImage && this.$element.css("float", "left"), this.triggerEvent("imageFloatedLeft", [a]), a.click()
    }, a.Editable.prototype.floatImageNone = function(a) {
        var b = a.parents("span.f-img-editor");
        b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fin"), this.isImage || (b.parent().get(0) == this.$element.get(0) ? b.wrap('<div style="text-align: center;"></div>') : b.parents(".f-img-wrap:first").css("text-align", "center")), this.isImage && this.$element.css("float", "none"), this.triggerEvent("imageFloatedNone", [a]), a.click()
    }, a.Editable.prototype.floatImageRight = function(a) {
        var b = a.parents("span.f-img-editor");
        b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fir"), this.isImage && this.$element.css("float", "right"), this.triggerEvent("imageFloatedRight", [a]), a.click()
    }, a.Editable.prototype.linkImage = function(a) {
        this.imageMode = !0, this.showInsertLink();
        var b = a.parents("span.f-img-editor");
        "A" == b.parent().get(0).tagName ? this.updateLinkValues(b.parent()) : this.resetLinkValues()
    }, a.Editable.prototype.replaceImage = function(a) {
        this.showInsertImage(), this.imageMode = !0, this.$image_wrapper.find('input[type="text"]').val(a.attr("src")), this.showByCoordinates(a.offset().left + a.width() / 2, a.offset().top + a.height())
    }, a.Editable.prototype.removeImage = function(b) {
        var c = b.parents("span.f-img-editor");
        if (0 === c.length) return !1;
        var d = b.get(0),
            e = "Are you sure? Image will be deleted.";
        if (a.Editable.LANGS[this.options.language] && (e = a.Editable.LANGS[this.options.language].translation[e]), !this.options.imageDeleteConfirmation || confirm(e)) {
            if (this.triggerEvent("beforeRemoveImage", [a(d)], !1)) {
                var f = c.parents(this.valid_nodes.join(","));
                c.parents(".f-img-wrap").length ? c.parents(".f-img-wrap").remove() : c.remove(), this.refreshImageList(!0), this.hide(), f.length && f[0] != this.$element.get(0) && "" === a(f[0]).text() && 1 == f[0].childNodes.length && a(f[0]).remove(), this.wrapText(), this.triggerEvent("afterRemoveImage", [b]), this.focus(), this.imageMode = !1
            }
        } else b.click()
    }, a.Editable.prototype.setImageAlt = function() {
        var a = this.$element.find("span.f-img-editor"),
            b = a.find("img");
        b.attr("alt", this.$image_editor.find('.f-image-alt input[type="text"]').val()), b.attr("title", this.$image_editor.find('.f-image-alt input[type="text"]').val()), this.hide(), this.closeImageMode(), this.triggerEvent("imageAltSet", [b])
    }, a.Editable.prototype.buildImageMove = function() {
        var b = this;
        this.isLink || this.initDrag(), b.$element.on("dragover dragenter dragend", function(a) {
            a.preventDefault()
        }), b.$element.on("drop", function(c) {
            if (b.isDisabled) return !1;
            if (b.closeImageMode(), b.hide(), b.imageMode = !1, b.initialized || (b.$element.unbind("mousedown.element"), b.lateInit()), !b.options.imageUpload || 0 !== a(".froala-element img.fr-image-move").length) {
                if (a(".froala-element .fr-image-move").length > 0 && b.options.imageMove) {
                    c.preventDefault(), c.stopPropagation(), b.insertMarkersAtPoint(c.originalEvent), b.restoreSelectionByMarkers();
                    var d = a("<div>").append(a(".froala-element img.fr-image-move").clone().removeClass("fr-image-move").addClass("fr-image-dropped")).html();
                    b.insertHTML(d);
                    var e = a(".froala-element img.fr-image-move").parent();
                    a(".froala-element img.fr-image-move").remove(), e.get(0) != b.$element.get(0) && e.is(":empty") && e.remove(), b.clearSelection(), b.initialized ? setTimeout(function() {
                        b.$element.find(".fr-image-dropped").removeClass(".fr-image-dropped").click()
                    }, 0) : b.$element.find(".fr-image-dropped").removeClass(".fr-image-dropped"), b.sync(), b.hideOtherEditors()
                } else c.preventDefault(), c.stopPropagation(), a(".froala-element img.fr-image-move").removeClass("fr-image-move");
                return !1
            }
            if (c.originalEvent.dataTransfer && c.originalEvent.dataTransfer.files && c.originalEvent.dataTransfer.files.length) {
                if (b.isDisabled) return !1;
                var f = c.originalEvent.dataTransfer.files;
                b.options.allowedImageTypes.indexOf(f[0].type.replace(/image\//g, "")) >= 0 && (b.insertMarkersAtPoint(c.originalEvent), b.showByCoordinates(c.originalEvent.pageX, c.originalEvent.pageY), b.uploadImage(f), c.preventDefault(), c.stopPropagation())
            }
        })
    }, a.Editable.prototype.buildDragUpload = function() {
        var b = this;
        b.$image_wrapper.on("dragover", "#f-upload-div-" + this._id, function() {
            return a(this).addClass("f-hover"), !1
        }), b.$image_wrapper.on("dragend", "#f-upload-div-" + this._id, function() {
            return a(this).removeClass("f-hover"), !1
        }), b.$image_wrapper.on("drop", "#f-upload-div-" + this._id, function(c) {
            return c.preventDefault(), c.stopPropagation(), b.options.imageUpload ? (a(this).removeClass("f-hover"), void b.uploadImage(c.originalEvent.dataTransfer.files)) : !1
        })
    }, a.Editable.prototype.showImageLoader = function(b) {
        if (void 0 === b && (b = !1), b) {
            var c = "Please wait!";
            a.Editable.LANGS[this.options.language] && (c = a.Editable.LANGS[this.options.language].translation[c]), this.$progress_bar.find("span").css("width", "100%").text(c)
        } else this.$image_wrapper.find("h4").addClass("uploading");
        this.$image_wrapper.find("#f-image-list-" + this._id).hide(), this.$progress_bar.show(), this.showInsertImage()
    }, a.Editable.prototype.hideImageLoader = function() {
        this.$progress_bar.hide(), this.$progress_bar.find("span").css("width", "0%").text(""), this.$image_wrapper.find("#f-image-list-" + this._id).show(), this.$image_wrapper.find("h4").removeClass("uploading")
    }, a.Editable.prototype.writeImage = function(b, c, d) {
        if (c && (b = this.sanitizeURL(b), "" === b)) return !1;
        var e = new Image;
        e.onerror = a.proxy(function() {
            this.hideImageLoader(), this.throwImageError(1)
        }, this), e.onload = this.imageMode ? a.proxy(function() {
            var a = this.$element.find(".f-img-editor > img");
            a.attr("src", b), this.hide(), this.hideImageLoader(), this.$image_editor.show(), this.enable(), this.triggerEvent("imageReplaced", [a, d]), setTimeout(function() {
                a.trigger("click")
            }, 0)
        }, this) : a.proxy(function() {
            this.insertLoadedImage(b, d)
        }, this), this.showImageLoader(!0), e.src = b
    }, a.Editable.prototype.processInsertImage = function(b, c) {
        void 0 === c && (c = !0), this.enable(), this.focus(), this.restoreSelection();
        var d = "";
        parseInt(this.options.defaultImageWidth, 10) && (d = ' width="' + this.options.defaultImageWidth + '"');
        var e = "fr-fin";
        "left" == this.options.defaultImageAlignment && (e = "fr-fil"), "right" == this.options.defaultImageAlignment && (e = "fr-fir"), e += " fr-di" + this.options.defaultImageDisplay[0];
        var f = '<img class="' + e + ' fr-just-inserted" alt="' + this.options.defaultImageTitle + '" src="' + b + '"' + d + ">",
            g = this.getSelectionElements()[0],
            h = this.getRange(),
            i = !this.browser.msie && a.Editable.getIEversion() > 8 ? a(h.startContainer) : null;
        i && i.hasClass("f-img-wrap") ? (1 === h.startOffset ? (i.after("<" + this.options.defaultTag + '><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></' + this.options.defaultTag + ">"), this.restoreSelectionByMarkers(), this.getSelection().collapseToStart()) : 0 === h.startOffset && (i.before("<" + this.options.defaultTag + '><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></' + this.options.defaultTag + ">"), this.restoreSelectionByMarkers(), this.getSelection().collapseToStart()), this.insertHTML(f)) : this.getSelectionTextInfo(g).atStart && g != this.$element.get(0) && "TD" != g.tagName && "TH" != g.tagName && "LI" != g.tagName ? a(g).before("<" + this.options.defaultTag + ">" + f + "</" + this.options.defaultTag + ">") : this.insertHTML(f), this.disable()
    }, a.Editable.prototype.insertLoadedImage = function(b, c) {
        this.triggerEvent("imageLoaded", [b], !1), this.processInsertImage(b, !1), this.browser.msie && this.$element.find("img").each(function(a, b) {
            b.oncontrolselect = function() {
                return !1
            }
        }), this.enable(), this.hide(), this.hideImageLoader(), this.wrapText(), this.cleanupLists();
        var d, e = this.$element.find("img.fr-just-inserted").get(0);
        e && (d = e.previousSibling), d && 3 == d.nodeType && /\u200B/gi.test(d.textContent) && a(d).remove(), this.triggerEvent("imageInserted", [this.$element.find("img.fr-just-inserted"), c]), setTimeout(a.proxy(function() {
            this.$element.find("img.fr-just-inserted").removeClass("fr-just-inserted").trigger("touchend")
        }, this), 50)
    }, a.Editable.prototype.throwImageErrorWithMessage = function(a) {
        this.enable(), this.triggerEvent("imageError", [{
            message: a,
            code: 0
        }], !1), this.hideImageLoader()
    }, a.Editable.prototype.throwImageError = function(a) {
        this.enable();
        var b = "Unknown image upload error.";
        1 == a ? b = "Bad link." : 2 == a ? b = "No link in upload response." : 3 == a ? b = "Error during file upload." : 4 == a ? b = "Parsing response failed." : 5 == a ? b = "Image too large." : 6 == a ? b = "Invalid image type." : 7 == a && (b = "Image can be uploaded only to same domain in IE 8 and IE 9."), this.triggerEvent("imageError", [{
            code: a,
            message: b
        }], !1), this.hideImageLoader()
    }, a.Editable.prototype.uploadImage = function(b) {
        if (!this.triggerEvent("beforeImageUpload", [b], !1)) return !1;
        if (void 0 !== b && b.length > 0) {
            var c;
            if (this.drag_support.formdata && (c = this.drag_support.formdata ? new FormData : null), c) {
                var d;
                for (d in this.options.imageUploadParams) c.append(d, this.options.imageUploadParams[d]);
                if (this.options.imageUploadToS3 !== !1) {
                    for (d in this.options.imageUploadToS3.params) c.append(d, this.options.imageUploadToS3.params[d]);
                    c.append("success_action_status", "201"), c.append("X-Requested-With", "xhr"), c.append("Content-Type", b[0].type), c.append("key", this.options.imageUploadToS3.keyStart + (new Date).getTime() + "-" + b[0].name)
                }
                if (c.append(this.options.imageUploadParam, b[0]), b[0].size > this.options.maxImageSize) return this.throwImageError(5), !1;
                if (this.options.allowedImageTypes.indexOf(b[0].type.replace(/image\//g, "")) < 0) return this.throwImageError(6), !1
            }
            if (c) {
                var e;
                if (this.options.crossDomain) e = this.createCORSRequest("POST", this.options.imageUploadURL);
                else {
                    e = new XMLHttpRequest, e.open("POST", this.options.imageUploadURL);
                    for (var f in this.options.headers) e.setRequestHeader(f, this.options.headers[f])
                }
                e.onload = a.proxy(function() {
                    var b = "Please wait!";
                    a.Editable.LANGS[this.options.language] && (b = a.Editable.LANGS[this.options.language].translation[b]), this.$progress_bar.find("span").css("width", "100%").text(b);
                    try {
                        if (this.options.imageUploadToS3) 201 == e.status ? this.parseImageResponseXML(e.responseXML) : this.throwImageError(3);
                        else if (e.status >= 200 && e.status < 300) this.parseImageResponse(e.responseText);
                        else try {
                            var c = a.parseJSON(e.responseText);
                            c.error ? this.throwImageErrorWithMessage(c.error) : this.throwImageError(3)
                        } catch (d) {
                            this.throwImageError(3)
                        }
                    } catch (d) {
                        this.throwImageError(4)
                    }
                }, this), e.onerror = a.proxy(function() {
                    this.throwImageError(3)
                }, this), e.upload.onprogress = a.proxy(function(a) {
                    if (a.lengthComputable) {
                        var b = a.loaded / a.total * 100 | 0;
                        this.$progress_bar.find("span").css("width", b + "%")
                    }
                }, this), this.disable(), e.send(c), this.showImageLoader()
            }
        }
    }, a.Editable.prototype.parseImageResponse = function(b) {
        try {
            if (!this.triggerEvent("afterImageUpload", [b], !1)) return !1;
            var c = a.parseJSON(b);
            c.link ? this.writeImage(c.link, !1, b) : c.error ? this.throwImageErrorWithMessage(c.error) : this.throwImageError(2)
        } catch (d) {
            this.throwImageError(4)
        }
    }, a.Editable.prototype.parseImageResponseXML = function(b) {
        try {
            var c = a(b).find("Location").text(),
                d = a(b).find("Key").text();
            this.options.imageUploadToS3.callback && this.options.imageUploadToS3.callback.call(this, c, d), c ? this.writeImage(c) : this.throwImageError(2)
        } catch (e) {
            this.throwImageError(4)
        }
    }, a.Editable.prototype.setImageUploadURL = function(a) {
        a && (this.options.imageUploadURL = a), this.options.imageUploadToS3 && (this.options.imageUploadURL = "https://" + this.options.imageUploadToS3.bucket + "." + this.options.imageUploadToS3.region + ".amazonaws.com/")
    }, a.Editable.prototype.closeImageMode = function() {
        this.$element.find("span.f-img-editor > img").each(a.proxy(function(b, c) {
            a(c).removeClass("fr-fin fr-fil fr-fir fr-dib fr-dii").addClass(this.getImageClass(a(c).parent().attr("class"))), a(c).parents(".f-img-wrap").length > 0 ? "A" == a(c).parent().parent().get(0).tagName ? a(c).siblings("span.f-img-handle").remove().end().unwrap().parent().unwrap() : a(c).siblings("span.f-img-handle").remove().end().unwrap().unwrap() : a(c).siblings("span.f-img-handle").remove().end().unwrap()
        }, this)), this.$element.find("span.f-img-editor").length && (this.$element.find("span.f-img-editor").remove(), this.$element.parents("span.f-img-editor").remove()), this.$element.removeClass("f-non-selectable"), this.editableDisabled || this.isHTML || this.$element.attr("contenteditable", !0), this.$image_editor && this.$image_editor.hide(), this.$link_wrapper && this.options.linkText && this.$link_wrapper.find('input[type="text"].f-lt').parent().removeClass("fr-hidden")
    }, a.Editable.prototype.refreshImageList = function(b) {
        if (!this.isLink && !this.options.editInPopup) {
            var c = [],
                d = [],
                e = this;
            if (this.$element.find("img").each(function(b, f) {
                    var g = a(f);
                    if (c.push(g.attr("src")), d.push(g), "false" == g.attr("contenteditable")) return !0;
                    if (0 !== g.parents(".f-img-editor").length || g.hasClass("fr-dii") || g.hasClass("fr-dib") || (e.options.textNearImage ? g.addClass(g.hasClass("fr-fin") ? "fr-dib" : g.hasClass("fr-fil") || g.hasClass("fr-fir") ? "fr-dii" : "block" == g.css("display") && "none" == g.css("float") ? "fr-dib" : "fr-dii") : (g.addClass("fr-dib"), e.options.imageButtons.splice(e.options.imageButtons.indexOf("display"), 1))), e.options.textNearImage || g.removeClass("fr-dii").addClass("fr-dib"), 0 === g.parents(".f-img-editor").length && !g.hasClass("fr-fil") && !g.hasClass("fr-fir") && !g.hasClass("fr-fin"))
                        if (g.hasClass("fr-dii")) g.addClass("right" == g.css("float") ? "fr-fir" : "left" == g.css("float") ? "fr-fil" : "fr-fin");
                        else {
                            var h = g.attr("style");
                            g.hide(), g.addClass(0 === parseInt(g.css("margin-right"), 10) && h ? "fr-fir" : 0 === parseInt(g.css("margin-left"), 10) && h ? "fr-fil" : "fr-fin"), g.show()
                        }
                    g.css("margin", ""), g.css("float", ""), g.css("display", ""), g.removeAttr("data-style")
                }), void 0 === b)
                for (var f = 0; f < this.imageList.length; f++) c.indexOf(this.imageList[f].attr("src")) < 0 && this.triggerEvent("afterRemoveImage", [this.imageList[f]], !1);
            this.imageList = d
        }
    }, a.Editable.prototype.insertImage = function() {
        this.options.inlineMode || (this.closeImageMode(), this.imageMode = !1, this.positionPopup("insertImage")), this.selectionInEditor() && this.saveSelection(), this.showInsertImage(), this.imageMode = !1, this.$image_wrapper.find('input[type="text"]').val("")
    }
}(jQuery),
function(a) {
    a.Editable.prototype.showLinkWrapper = function() {
        this.$link_wrapper && (this.$link_wrapper.show(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList"), this.$link_wrapper.find("input.f-lu").removeClass("fr-error"), this.imageMode || !this.options.linkText ? this.$link_wrapper.find('input[type="text"].f-lt').parent().addClass("fr-hidden") : this.$link_wrapper.find('input[type="text"].f-lt').parent().removeClass("fr-hidden"), this.imageMode && this.$link_wrapper.find('input[type="text"].f-lu').removeAttr("disabled"), this.phone() ? this.$document.scrollTop(this.$link_wrapper.offset().top + 30) : setTimeout(a.proxy(function() {
            this.imageMode && this.iPad() || this.$link_wrapper.find('input[type="text"].f-lu').focus().select()
        }, this), 0), this.link = !0), this.refreshDisabledState()
    }, a.Editable.prototype.hideLinkWrapper = function() {
        this.$link_wrapper && (this.$link_wrapper.hide(), this.$link_wrapper.find("input").blur()), this.refreshDisabledState()
    }, a.Editable.prototype.showInsertLink = function() {
        this.hidePopups(), this.showLinkWrapper()
    }, a.Editable.prototype.updateLinkValues = function(b) {
        var c = b.attr("href") || "http://";
        this.$link_wrapper.find("input.f-lt").val(b.text()), this.isLink ? ("#" == c && (c = ""), this.$link_wrapper.find("input#f-lu-" + this._id).val(c.replace(/\&amp;/g, "&")), this.$link_wrapper.find(".f-external-link").attr("href", c || "#")) : (this.$link_wrapper.find("input.f-lu").val(c.replace(/\&amp;/g, "&")), this.$link_wrapper.find(".f-external-link").attr("href", c)), this.$link_wrapper.find("input.f-target").prop("checked", "_blank" == b.attr("target")), this.$link_wrapper.find("li.f-choose-link-class").each(a.proxy(function(c, d) {
            b.hasClass(a(d).data("class")) && a(d).click()
        }, this));
        for (var d in this.options.linkAttributes) {
            var e = b.attr(d);
            this.$link_wrapper.find("input.fl-" + d).val(e ? e : "")
        }
        this.$link_wrapper.find("a.f-external-link, button.f-unlink").show()
    }, a.Editable.prototype.initLinkEvents = function() {
        var b = this,
            c = function(a) {
                a.stopPropagation(), a.preventDefault()
            },
            d = function(c) {
                return c.stopPropagation(), c.preventDefault(), b.isDisabled ? !1 : "" !== b.text() ? (b.hide(), !1) : (b.link = !0, b.clearSelection(), b.removeMarkers(), b.selectionDisabled || (a(this).before('<span class="f-marker" data-type="true" data-id="0" data-fr-verified="true"></span>'), a(this).after('<span class="f-marker" data-type="false" data-id="0" data-fr-verified="true"></span>'), b.restoreSelectionByMarkers()), b.exec("createLink"), b.updateLinkValues(a(this)), b.showByCoordinates(a(this).offset().left + a(this).outerWidth() / 2, a(this).offset().top + (parseInt(a(this).css("padding-top"), 10) || 0) + a(this).height()), b.showInsertLink(), a(this).hasClass("fr-file") ? b.$link_wrapper.find("input.f-lu").attr("disabled", "disabled") : b.$link_wrapper.find("input.f-lu").removeAttr("disabled"), void b.closeImageMode())
            };
        this.$element.on("mousedown", "a", a.proxy(function(a) {
            this.isResizing() || a.stopPropagation()
        }, this)), this.isLink ? this.iOS() ? (this.$element.on("touchstart", c), this.$element.on("touchend", d)) : this.$element.on("click", d) : this.iOS() ? (this.$element.on("touchstart", 'a:not([contenteditable="false"])', c), this.$element.on("touchend", 'a:not([contenteditable="false"])', d), this.$element.on("touchstart", 'a[contenteditable="false"]', c), this.$element.on("touchend", 'a[contenteditable="false"]', c)) : (this.$element.on("click", 'a:not([contenteditable="false"])', d), this.$element.on("click", 'a[contenteditable="false"]', c))
    }, a.Editable.prototype.destroyLink = function() {
        this.$link_wrapper.html("").removeData().remove()
    }, a.Editable.prototype.initLink = function() {
        this.buildCreateLink(), this.initLinkEvents(), this.addListener("destroy", this.destroyLink)
    }, a.Editable.initializers.push(a.Editable.prototype.initLink), a.Editable.prototype.removeLink = function() {
        this.imageMode ? ("A" == this.$element.find(".f-img-editor").parent().get(0).tagName && a(this.$element.find(".f-img-editor").get(0)).unwrap(), this.triggerEvent("imageLinkRemoved"), this.showImageEditor(), this.$element.find(".f-img-editor").find("img").click(), this.link = !1) : (this.restoreSelection(), this.document.execCommand("unlink", !1, null), this.isLink || this.$element.find("a:empty").remove(), this.triggerEvent("linkRemoved"), this.hideLinkWrapper(), this.$bttn_wrapper.show(), (!this.options.inlineMode || this.isLink) && this.hide(), this.link = !1)
    }, a.Editable.prototype.writeLink = function(b, c, d, e, f) {
        var g, h = this.options.noFollow;
        this.options.alwaysBlank && (e = !0);
        var i, j = "",
            k = "",
            l = "";
        h === !0 && /^https?:\/\//.test(b) && (j = 'rel="nofollow"'), e === !0 && (k = 'target="_blank"');
        for (i in f) l += " " + i + '="' + f[i] + '"';
        var m = b;
        if (b = this.sanitizeURL(b), this.options.convertMailAddresses) {
            var n = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
            n.test(b) && 0 !== b.indexOf("mailto:") && (b = "mailto:" + b)
        }
        if (0 === b.indexOf("mailto:") || "" === this.options.linkAutoPrefix || /^(https?:|ftps?:|)\/\//.test(b) || (b = this.options.linkAutoPrefix + b), "" === b) return this.$link_wrapper.find("input.f-lu").addClass("fr-error").focus(), this.triggerEvent("badLink", [m], !1), !1;
        if (this.$link_wrapper.find("input.f-lu").removeClass("fr-error"), this.imageMode) {
            if ("A" != this.$element.find(".f-img-editor").parent().get(0).tagName) this.$element.find(".f-img-editor").wrap('<a data-fr-link="true" href="' + b + '" ' + k + " " + j + l + "></a>");
            else {
                var o = this.$element.find(".f-img-editor").parent();
                e === !0 ? o.attr("target", "_blank") : o.removeAttr("target"), h === !0 ? o.attr("rel", "nofollow") : o.removeAttr("rel");
                for (i in f) f[i] ? o.attr(i, f[i]) : o.removeAttr(i);
                o.removeClass(Object.keys(this.options.linkClasses).join(" ")), o.attr("href", b).addClass(d)
            }
            this.triggerEvent("imageLinkInserted", [b]), this.showImageEditor(), this.$element.find(".f-img-editor").find("img").click(), this.link = !1
        } else {
            var p = null;
            this.isLink ? "" === c && (c = this.$element.text()) : (this.restoreSelection(), g = this.getSelectionLinks(), g.length > 0 && (p = g[0].attributes, is_file = a(g[0]).hasClass("fr-file")), this.saveSelectionByMarkers(), this.document.execCommand("unlink", !1, b), this.$element.find('span[data-fr-link="true"]').each(function(b, c) {
                a(c).replaceWith(a(c).html())
            }), this.restoreSelectionByMarkers()), this.isLink ? (this.$element.text(c), g = [this.$element.attr("href", b).get(0)]) : (this.removeMarkers(), (this.options.linkText || "" === this.text()) && (this.insertHTML('<span class="f-marker" data-fr-verified="true" data-id="0" data-type="true"></span>' + (c || m) + '<span class="f-marker" data-fr-verified="true" data-id="0" data-type="false"></span>'), this.restoreSelectionByMarkers()), this.document.execCommand("createLink", !1, b), g = this.getSelectionLinks());
            for (var q = 0; q < g.length; q++) {
                if (p)
                    for (var r = 0; r < p.length; r++) "href" != p[r].nodeName && a(g[q]).attr(p[r].nodeName, p[r].value);
                e === !0 ? a(g[q]).attr("target", "_blank") : a(g[q]).removeAttr("target"), h === !0 && /^https?:\/\//.test(b) ? a(g[q]).attr("rel", "nofollow") : a(g[q]).removeAttr("rel"), a(g[q]).data("fr-link", !0), a(g[q]).removeClass(Object.keys(this.options.linkClasses).join(" ")), a(g[q]).addClass(d);
                for (i in f) f[i] ? a(g[q]).attr(i, f[i]) : a(g[q]).removeAttr(i)
            }
            this.$element.find("a:empty").remove(), this.triggerEvent("linkInserted", [b]), this.hideLinkWrapper(), this.$bttn_wrapper.show(), (!this.options.inlineMode || this.isLink) && this.hide(), this.link = !1
        }
    }, a.Editable.prototype.createLinkHTML = function() {
        var a = '<div class="froala-popup froala-link-popup" style="display: none;">';
        a += '<h4><span data-text="true">Insert Link</span><a target="_blank" title="Open Link" class="f-external-link" href="#"><i class="fa fa-external-link"></i></a><i title="Cancel" class="fa fa-times" id="f-link-close-' + this._id + '"></i></h4>', a += '<div class="f-popup-line fr-hidden"><input type="text" placeholder="Text" class="f-lt" id="f-lt-' + this._id + '"></div>';
        var b = "";
        if (this.options.linkList.length && (b = "f-bi"), a += '<div class="f-popup-line"><input type="text" placeholder="http://www.example.com" class="f-lu ' + b + '" id="f-lu-' + this._id + '"/>', this.options.linkList.length) {
            a += '<button class="fr-p-bttn f-browse-links" id="f-browse-links-' + this._id + '"><i class="fa fa-chevron-down"></i></button>', a += '<ul id="f-link-list-' + this._id + '">';
            for (var c = 0; c < this.options.linkList.length; c++) {
                var d = this.options.linkList[c],
                    e = "";
                for (var f in d) e += " data-" + f + '="' + d[f] + '"';
                a += '<li class="f-choose-link"' + e + ">" + d.body + "</li>"
            }
            a += "</ul>"
        }
        if (a += "</div>", Object.keys(this.options.linkClasses).length) {
            a += '<div class="f-popup-line"><input type="text" placeholder="Choose link type" class="f-bi" id="f-luc-' + this._id + '" disabled="disabled"/>', a += '<button class="fr-p-bttn f-browse-links" id="f-links-class-' + this._id + '"><i class="fa fa-chevron-down"></i></button>', a += '<ul id="f-link-class-list-' + this._id + '">';
            for (var g in this.options.linkClasses) {
                var h = this.options.linkClasses[g];
                a += '<li class="f-choose-link-class" data-class="' + g + '">' + h + "</li>"
            }
            a += "</ul>", a += "</div>"
        }
        for (var i in this.options.linkAttributes) {
            var j = this.options.linkAttributes[i];
            a += '<div class="f-popup-line"><input class="fl-' + i + '" type="text" placeholder="' + j + '" id="fl-' + i + "-" + this._id + '"/></div>'
        }
        return a += '<div class="f-popup-line"><input type="checkbox" class="f-target" id="f-target-' + this._id + '"> <label data-text="true" for="f-target-' + this._id + '">Open in new tab</label><button data-text="true" type="button" class="fr-p-bttn f-ok f-submit" id="f-ok-' + this._id + '">OK</button>', this.options.unlinkButton && (a += '<button type="button" data-text="true" class="fr-p-bttn f-ok f-unlink" id="f-unlink-' + this._id + '">UNLINK</button>'), a += "</div></div>"
    }, a.Editable.prototype.buildCreateLink = function() {
        this.$link_wrapper = a(this.createLinkHTML()), this.$popup_editor.append(this.$link_wrapper);
        var b = this;
        this.addListener("hidePopups", this.hideLinkWrapper), this.$link_wrapper.on("mouseup touchend", a.proxy(function(a) {
            this.isResizing() || (a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"))
        }, this)), this.$link_wrapper.on("click", function(a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("click", "*", function(a) {
            a.stopPropagation()
        }), this.options.linkText && this.$link_wrapper.on("mouseup keydown", "input#f-lt-" + this._id, a.proxy(function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList")
        }, this)), this.$link_wrapper.on("mouseup keydown touchend touchstart", "input#f-lu-" + this._id, a.proxy(function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList")
        }, this)), this.$link_wrapper.on("click keydown", "input#f-target-" + this._id, function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation()
        }), this.$link_wrapper.on("touchend", "button#f-ok-" + this._id, function(a) {
            a.stopPropagation()
        }).on("click", "button#f-ok-" + this._id, a.proxy(function() {
            var a, b = this.$link_wrapper.find("input#f-lt-" + this._id),
                c = this.$link_wrapper.find("input#f-lu-" + this._id),
                d = this.$link_wrapper.find("input#f-luc-" + this._id),
                e = this.$link_wrapper.find("input#f-target-" + this._id);
            a = b ? b.val() : "";
            var f = c.val();
            this.isLink && "" === f && (f = "#");
            var g = "";
            d && (g = d.data("class"));
            var h = {};
            for (var i in this.options.linkAttributes) h[i] = this.$link_wrapper.find("input#fl-" + i + "-" + this._id).val();
            this.writeLink(f, a, g, e.prop("checked"), h)
        }, this)), this.$link_wrapper.on("click touch", "button#f-unlink-" + this._id, a.proxy(function() {
            this.link = !0, this.removeLink()
        }, this)), this.options.linkList.length && (this.$link_wrapper.on("click touch", "li.f-choose-link", function() {
            b.resetLinkValues();
            var c = b.$link_wrapper.find("button#f-browse-links-" + b._id),
                d = b.$link_wrapper.find("input#f-lt-" + b._id),
                e = b.$link_wrapper.find("input#f-lu-" + b._id),
                f = b.$link_wrapper.find("input#f-target-" + b._id);
            d && d.val(a(this).data("body")), e.val(a(this).data("href")), f.prop("checked", a(this).data("blank"));
            for (var g in b.options.linkAttributes) a(this).data(g) && b.$link_wrapper.find("input#fl-" + g + "-" + b._id).val(a(this).data(g));
            c.click()
        }).on("mouseup", "li.f-choose-link", function(a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("click", "button#f-browse-links-" + this._id + ", button#f-browse-links-" + this._id + " > i", function(c) {
            c.stopPropagation();
            var d = b.$link_wrapper.find("ul#f-link-list-" + b._id);
            b.$link_wrapper.trigger("hideLinkClassList"), a(this).find("i").toggleClass("fa-chevron-down"), a(this).find("i").toggleClass("fa-chevron-up"), d.toggle()
        }).on("mouseup", "button#f-browse-links-" + this._id + ", button#f-browse-links-" + this._id + " > i", function(a) {
            a.stopPropagation()
        }), this.$link_wrapper.bind("hideLinkList", function() {
            var a = b.$link_wrapper.find("ul#f-link-list-" + b._id),
                c = b.$link_wrapper.find("button#f-browse-links-" + b._id);
            a && a.is(":visible") && c.click()
        })), Object.keys(this.options.linkClasses).length && (this.$link_wrapper.on("mouseup keydown", "input#f-luc-" + this._id, a.proxy(function(a) {
            var b = a.which;
            b && 27 === b || a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList")
        }, this)), this.$link_wrapper.on("click touch", "li.f-choose-link-class", function() {
            var c = b.$link_wrapper.find("input#f-luc-" + b._id);
            c.val(a(this).text()), c.data("class", a(this).data("class")), b.$link_wrapper.trigger("hideLinkClassList")
        }).on("mouseup", "li.f-choose-link-class", function(a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("click", "button#f-links-class-" + this._id, function(c) {
            c.stopPropagation(), b.$link_wrapper.trigger("hideLinkList");
            var d = b.$link_wrapper.find("ul#f-link-class-list-" + b._id);
            a(this).find("i").toggleClass("fa-chevron-down"), a(this).find("i").toggleClass("fa-chevron-up"), d.toggle()
        }).on("mouseup", "button#f-links-class-" + this._id, function(a) {
            a.stopPropagation()
        }), this.$link_wrapper.bind("hideLinkClassList", function() {
            var a = b.$link_wrapper.find("ul#f-link-class-list-" + b._id),
                c = b.$link_wrapper.find("button#f-links-class-" + b._id);
            a && a.is(":visible") && c.click()
        })), this.$link_wrapper.on(this.mouseup, "i#f-link-close-" + this._id, a.proxy(function() {
            this.$bttn_wrapper.show(), this.hideLinkWrapper(), (!this.options.inlineMode && !this.imageMode || this.isLink || 0 === this.options.buttons.length) && this.hide(), this.imageMode ? this.showImageEditor() : (this.restoreSelection(), this.focus())
        }, this))
    }, a.Editable.prototype.getSelectionLinks = function() {
        var a, b, c, d, e = [];
        if (window.getSelection) {
            var f = window.getSelection();
            if (f.getRangeAt && f.rangeCount) {
                d = this.document.createRange();
                for (var g = 0; g < f.rangeCount; ++g)
                    if (a = f.getRangeAt(g), b = a.commonAncestorContainer, b && 1 != b.nodeType && (b = b.parentNode), b && "a" == b.nodeName.toLowerCase()) e.push(b);
                    else {
                        c = b.getElementsByTagName("a");
                        for (var h = 0; h < c.length; ++h) d.selectNodeContents(c[h]), d.compareBoundaryPoints(a.END_TO_START, a) < 1 && d.compareBoundaryPoints(a.START_TO_END, a) > -1 && e.push(c[h])
                    }
            }
        } else if (this.document.selection && "Control" != this.document.selection.type)
            if (a = this.document.selection.createRange(), b = a.parentElement(), "a" == b.nodeName.toLowerCase()) e.push(b);
            else {
                c = b.getElementsByTagName("a"), d = this.document.body.createTextRange();
                for (var i = 0; i < c.length; ++i) d.moveToElementText(c[i]), d.compareEndPoints("StartToEnd", a) > -1 && d.compareEndPoints("EndToStart", a) < 1 && e.push(c[i])
            }
        return e
    }, a.Editable.prototype.resetLinkValues = function() {
        this.$link_wrapper.find("input").val(""), this.$link_wrapper.find('input[type="checkbox"].f-target').prop("checked", this.options.alwaysBlank), this.$link_wrapper.find('input[type="text"].f-lt').val(this.text()), this.$link_wrapper.find('input[type="text"].f-lu').val("http://"), this.$link_wrapper.find('input[type="text"].f-lu').removeAttr("disabled"), this.$link_wrapper.find("a.f-external-link, button.f-unlink").hide();
        for (var a in this.options.linkAttributes) this.$link_wrapper.find('input[type="text"].fl-' + a).val("")
    }, a.Editable.prototype.insertLink = function() {
        this.options.inlineMode || (this.closeImageMode(), this.imageMode = !1, this.positionPopup("createLink")), this.selectionInEditor() && this.saveSelection(), this.showInsertLink();
        var b = this.getSelectionLinks();
        b.length > 0 ? this.updateLinkValues(a(b[0])) : this.resetLinkValues()
    }
}(jQuery),
function(a) {
    a.Editable.prototype.browserFixes = function() {
        this.backspaceEmpty(), this.backspaceInEmptyBlock(), this.fixHR(), this.domInsert(), this.fixIME(), this.cleanInvisibleSpace(), this.cleanBR(), this.insertSpace()
    }, a.Editable.prototype.backspaceInEmptyBlock = function() {
        this.$element.on("keyup", a.proxy(function(b) {
            var c = b.which;
            if (this.browser.mozilla && !this.isHTML && 8 == c) {
                var d = a(this.getSelectionElement());
                this.valid_nodes.indexOf(d.get(0).tagName) >= 0 && 1 == d.find("*").length && "" === d.text() && 1 == d.find("br").length && this.setSelection(d.get(0))
            }
        }, this))
    }, a.Editable.prototype.insertSpace = function() {
        this.browser.mozilla && this.$element.on("keypress", a.proxy(function(a) {
            var b = a.which,
                c = this.getSelectionElements()[0];
            this.isHTML || 32 != b || "PRE" == c.tagName || (a.preventDefault(), this.insertSimpleHTML("&nbsp;"))
        }, this))
    }, a.Editable.prototype.cleanBR = function() {
        this.$element.on("keyup", a.proxy(function() {
            this.$element.find(this.valid_nodes.join(",")).each(a.proxy(function(b, c) {
                if (["TH", "TD", "LI"].indexOf(c.tagName) >= 0) return !0;
                var d = c.childNodes,
                    e = null;
                if (!d.length || "BR" != d[d.length - 1].tagName) return !0;
                e = d[d.length - 1];
                var f = e.previousSibling;
                f && "BR" != f.tagName && a(e).parent().text().length > 0 && this.valid_nodes.indexOf(f.tagName) < 0 && a(e).remove()
            }, this))
        }, this))
    }, a.Editable.prototype.replaceU200B = function(b) {
        for (var c = 0; c < b.length; c++) 3 == b[c].nodeType && /\u200B/gi.test(b[c].textContent) ? b[c].textContent = b[c].textContent.replace(/\u200B/gi, "") : 1 == b[c].nodeType && this.replaceU200B(a(b[c]).contents())
    }, a.Editable.prototype.cleanInvisibleSpace = function() {
        var b = function(b) {
            var c = a(b).text();
            return b && /\u200B/.test(a(b).text()) && c.replace(/\u200B/gi, "").length > 0 ? !0 : !1
        };
        this.$element.on("keyup", a.proxy(function() {
            var c = this.getSelectionElement();
            b(c) && 0 === a(c).find("li").length && (this.saveSelectionByMarkers(), this.replaceU200B(a(c).contents()), this.restoreSelectionByMarkers())
        }, this))
    }, a.Editable.prototype.fixHR = function() {
        this.$element.on("keypress", a.proxy(function(b) {
            var c = a(this.getSelectionElement());
            if (c.is("hr") || c.parents("hr").length) return !1;
            var d = b.which;
            if (8 == d) {
                var e = a(this.getSelectionElements()[0]);
                e.prev().is("hr") && this.getSelectionTextInfo(e.get(0)).atStart && (this.saveSelectionByMarkers(), e.prev().remove(), this.restoreSelectionByMarkers(), b.preventDefault())
            }
        }, this))
    }, a.Editable.prototype.backspaceEmpty = function() {
        this.$element.on("keydown", a.proxy(function(a) {
            var b = a.which;
            !this.isHTML && 8 == b && this.$element.hasClass("f-placeholder") && a.preventDefault()
        }, this))
    }, a.Editable.prototype.domInsert = function() {
        this.$element.on("keydown", a.proxy(function(a) {
            var b = a.which;
            13 === b && (this.add_br = !0)
        }, this)), this.$element.on("DOMNodeInserted", a.proxy(function(b) {
            if ("SPAN" !== b.target.tagName || a(b.target).attr("data-fr-verified") || this.no_verify || this.textEmpty(b.target) || a(b.target).replaceWith(a(b.target).contents()), "BR" === b.target.tagName && setTimeout(function() {
                    a(b.target).removeAttr("type")
                }, 0), "A" === b.target.tagName && setTimeout(function() {
                    a(b.target).removeAttr("_moz_dirty")
                }, 0), this.options.paragraphy && this.add_br && "BR" === b.target.tagName && (a(b.target).prev().length && "TABLE" === a(b.target).prev().get(0).tagName || a(b.target).next().length && "TABLE" === a(b.target).next().get(0).tagName)) {
                a(b.target).wrap('<p class="fr-p-wrap">');
                var c = this.$element.find("p.fr-p-wrap").removeAttr("class");
                this.setSelection(c.get(0))
            }
            "BR" === b.target.tagName && this.isLastSibling(b.target) && "LI" == b.target.parentNode.tagName && this.textEmpty(b.target.parentNode) && a(b.target).remove()
        }, this)), this.$element.on("keyup", a.proxy(function(a) {
            var b = a.which;
            8 === b && this.$element.find("span:not([data-fr-verified])").attr("data-fr-verified", !0), 13 === b && (this.add_br = !1)
        }, this))
    }, a.Editable.prototype.fixIME = function() {
        try {
            this.$element.get(0).msGetInputContext && (this.$element.get(0).msGetInputContext().addEventListener("MSCandidateWindowShow", a.proxy(function() {
                this.ime = !0
            }, this)), this.$element.get(0).msGetInputContext().addEventListener("MSCandidateWindowHide", a.proxy(function() {
                this.ime = !1, this.$element.trigger("keydown"), this.oldHTML = ""
            }, this)))
        } catch (b) {}
    }
}(jQuery),
function(a) {
    a.Editable.prototype.handleEnter = function() {
        var b = a.proxy(function() {
            var b = this.getSelectionElement();
            return "LI" == b.tagName || this.parents(a(b), "li").length > 0 ? !0 : !1
        }, this);
        this.$element.on("keypress", a.proxy(function(a) {
            if (!this.isHTML && !b()) {
                var c = a.which;
                if (13 == c && !a.shiftKey) {
                    a.preventDefault(), this.saveUndoStep(), this.insertSimpleHTML("<break></break>");
                    var d = this.getSelectionElements();
                    if (d[0] == this.$element.get(0) ? this.enterInMainElement(d[0]) : this.enterInElement(d[0]), this.getSelectionTextInfo(this.$element.get(0)).atEnd) this.$wrapper.scrollTop(this.$element.height());
                    else {
                        var e = this.getBoundingRect();
                        this.$wrapper.offset().top + this.$wrapper.height() < e.top + e.height && this.$wrapper.scrollTop(e.top + this.$wrapper.scrollTop() - (this.$wrapper.height() + this.$wrapper.offset().top) + e.height + 10)
                    }
                }
            }
        }, this))
    }, a.Editable.prototype.enterInMainElement = function(b) {
        var c = a(b).find("break").get(0);
        if (a(c).parent().get(0) == b) this.isLastSibling(c) ? this.insertSimpleHTML("</br>" + this.markers_html + this.br) : a(b).hasClass("f-placeholder") ? a(b).html("</br>" + this.markers_html + this.br) : this.insertSimpleHTML("</br>" + this.markers_html), a(b).find("break").remove(), this.restoreSelectionByMarkers();
        else if (a(c).parents(this.$element).length) {
            for (b = this.getSelectionElement();
                "BREAK" == b.tagName || 0 === a(b).text().length && b.parentNode != this.$element.get(0);) b = b.parentNode;
            if (this.getSelectionTextInfo(b).atEnd) a(b).after(this.breakEnd(this.getDeepParent(b), !0)), this.$element.find("break").remove(), this.restoreSelectionByMarkers();
            else if (this.getSelectionTextInfo(b).atStart) {
                for (; c.parentNode != this.$element.get(0);) c = c.parentNode;
                a(c).before("<br/>"), this.$element.find("break").remove(), this.$element.find("a:empty").replaceWith(this.markers_html + "<br/>"), this.restoreSelectionByMarkers()
            } else this.breakMiddle(this.getDeepParent(b), !0), this.restoreSelectionByMarkers()
        } else a(c).remove()
    }, a.Editable.prototype.enterInElement = function(b) {
        if (["TD", "TH"].indexOf(b.tagName) < 0) {
            var c = !1;
            if (this.emptyElement(b) && b.parentNode && "BLOCKQUOTE" == b.parentNode.tagName) {
                a(b).before(this.$element.find("break"));
                var d = b;
                b = b.parentNode, a(d).remove(), c = !0
            }
            this.getSelectionTextInfo(b).atEnd ? (a(b).after(this.breakEnd(b), !1), this.$element.find("break").remove(), this.restoreSelectionByMarkers()) : this.getSelectionTextInfo(b).atStart ? (this.options.paragraphy ? c ? (a(b).before("<" + this.options.defaultTag + ">" + this.markers_html + this.br + "</" + this.options.defaultTag + ">"), this.restoreSelectionByMarkers()) : a(b).before("<" + this.options.defaultTag + ">" + this.br + "</" + this.options.defaultTag + ">") : c ? (a(b).before(this.markers_html + "<br/>"), this.restoreSelectionByMarkers()) : a(b).before("<br/>"), this.$element.find("break").remove()) : "PRE" == b.tagName ? (this.$element.find("break").after("<br/>" + this.markers_html), this.$element.find("break").remove(), this.restoreSelectionByMarkers()) : (this.breakMiddle(b, !1, c), this.restoreSelectionByMarkers())
        } else this.enterInMainElement(b)
    }, a.Editable.prototype.breakEnd = function(b, c) {
        if (void 0 === c && (c = !1), "BLOCKQUOTE" == b.tagName) {
            var d = a(b).contents();
            d.length && "BR" == d[d.length - 1].tagName && a(d[d.length - 1]).remove()
        }
        var e = a(b).find("break").get(0),
            f = this.br;
        this.options.paragraphy || (f = "<br/>");
        var g = this.markers_html + f;
        for (c && (g = this.markers_html + a.Editable.INVISIBLE_SPACE); e != b;) "A" != e.tagName && "BREAK" != e.tagName && (g = "<" + e.tagName + this.attrs(e) + ">" + g + "</" + e.tagName + ">"), e = e.parentNode;
        return c && "A" != e.tagName && "BREAK" != e.tagName && (g = "<" + e.tagName + this.attrs(e) + ">" + g + "</" + e.tagName + ">"), this.options.paragraphy && (g = "<" + this.options.defaultTag + ">" + g + "</" + this.options.defaultTag + ">"), c && (g = f + g), g
    }, a.Editable.prototype.breakMiddle = function(b, c, d) {
        void 0 === c && (c = !1), void 0 === d && (d = !1);
        var e = a(b).find("break").get(0),
            f = this.markers_html;
        d && (f = "");
        for (var g = ""; e != b;) e = e.parentNode, g = g + "</" + e.tagName + ">", f = "<" + e.tagName + this.attrs(e) + ">" + f;
        var h = "";
        d && (h = this.options.paragraphy ? "<" + this.options.defaultTag + ">" + this.markers_html + "<br/></" + this.options.defaultTag + ">" : this.markers_html + "<br/>");
        var i = "<" + b.tagName + this.attrs(b) + ">" + a(b).html() + "</" + b.tagName + ">";
        i = i.replace(/<break><\/break>/, g + (c ? this.br : "") + h + f), a(b).replaceWith(i)
    }
}(jQuery),
function(a) {
    a.Editable.prototype.isFirstSibling = function(a) {
        var b = a.previousSibling;
        return b ? 3 == b.nodeType && "" === b.textContent ? this.isFirstSibling(b) : !1 : !0
    }, a.Editable.prototype.isLastSibling = function(a) {
        var b = a.nextSibling;
        return b ? 3 == b.nodeType && "" === b.textContent ? this.isLastSibling(b) : !1 : !0
    }, a.Editable.prototype.getDeepParent = function(a) {
        return a.parentNode == this.$element.get(0) ? a : this.getDeepParent(a.parentNode)
    }, a.Editable.prototype.attrs = function(a) {
        for (var b = "", c = a.attributes, d = 0; d < c.length; d++) {
            var e = c[d];
            b += " " + e.nodeName + '="' + e.value + '"'
        }
        return b
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a, b) {
    function c(a) {
        function b() {
            d ? (c(), M(b), e = !0, d = !1) : e = !1
        }
        var c = a,
            d = !1,
            e = !1;
        this.kick = function() {
            d = !0, e || b()
        }, this.end = function(a) {
            var b = c;
            a && (e ? (c = d ? function() {
                b(), a()
            } : a, d = !0) : a())
        }
    }

    function d() {
        return !0
    }

    function e() {
        return !1
    }

    function f(a) {
        a.preventDefault()
    }

    function g(a) {
        N[a.target.tagName.toLowerCase()] || a.preventDefault()
    }

    function h(a) {
        return 1 === a.which && !a.ctrlKey && !a.altKey
    }

    function i(a, b) {
        var c, d;
        if (a.identifiedTouch) return a.identifiedTouch(b);
        for (c = -1, d = a.length; ++c < d;)
            if (a[c].identifier === b) return a[c]
    }

    function j(a, b) {
        var c = i(a.changedTouches, b.identifier);
        if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
    }

    function k(a) {
        var b;
        h(a) && (b = {
            target: a.target,
            startX: a.pageX,
            startY: a.pageY,
            timeStamp: a.timeStamp
        }, J(document, O.move, l, b), J(document, O.cancel, m, b))
    }

    function l(a) {
        var b = a.data;
        s(a, b, a, n)
    }

    function m() {
        n()
    }

    function n() {
        K(document, O.move, l), K(document, O.cancel, m)
    }

    function o(a) {
        var b, c;
        N[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
            target: b.target,
            startX: b.pageX,
            startY: b.pageY,
            timeStamp: a.timeStamp,
            identifier: b.identifier
        }, J(document, P.move + "." + b.identifier, p, c), J(document, P.cancel + "." + b.identifier, q, c))
    }

    function p(a) {
        var b = a.data,
            c = j(a, b);
        c && s(a, b, c, r)
    }

    function q(a) {
        var b = a.data,
            c = i(a.changedTouches, b.identifier);
        c && r(b.identifier)
    }

    function r(a) {
        K(document, "." + a, p), K(document, "." + a, q)
    }

    function s(a, b, c, d) {
        var e = c.pageX - b.startX,
            f = c.pageY - b.startY;
        I * I > e * e + f * f || v(a, b, c, e, f, d)
    }

    function t() {
        return this._handled = d, !1
    }

    function u(a) {
        try {
            a._handled()
        } catch (b) {
            return !1
        }
    }

    function v(a, b, c, d, e, f) {
        {
            var g, h;
            b.target
        }
        g = a.targetTouches, h = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / h, b.velocityY = e / h, b.targetTouches = g, b.finger = g ? g.length : 1, b._handled = t, b._preventTouchmoveDefault = function() {
            a.preventDefault()
        }, L(b.target, b), f(b.identifier)
    }

    function w(a) {
        var b = a.data.timer;
        a.data.touch = a, a.data.timeStamp = a.timeStamp, b.kick()
    }

    function x(a) {
        var b = a.data.event,
            c = a.data.timer;
        y(), D(b, c, function() {
            setTimeout(function() {
                K(b.target, "click", e)
            }, 0)
        })
    }

    function y() {
        K(document, O.move, w), K(document, O.end, x)
    }

    function z(a) {
        var b = a.data.event,
            c = a.data.timer,
            d = j(a, b);
        d && (a.preventDefault(), b.targetTouches = a.targetTouches, a.data.touch = d, a.data.timeStamp = a.timeStamp, c.kick())
    }

    function A(a) {
        var b = a.data.event,
            c = a.data.timer,
            d = i(a.changedTouches, b.identifier);
        d && (B(b), D(b, c))
    }

    function B(a) {
        K(document, "." + a.identifier, z), K(document, "." + a.identifier, A)
    }

    function C(a, b, c) {
        var d = c - a.timeStamp;
        a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / d, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / d, a.pageX = b.pageX, a.pageY = b.pageY
    }

    function D(a, b, c) {
        b.end(function() {
            return a.type = "moveend", L(a.target, a), c && c()
        })
    }

    function E() {
        return J(this, "movestart.move", u), !0
    }

    function F() {
        return K(this, "dragstart drag", f), K(this, "mousedown touchstart", g), K(this, "movestart", u), !0
    }

    function G(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (J(this, "dragstart." + a.guid + " drag." + a.guid, f, b, a.selector), J(this, "mousedown." + a.guid, g, b, a.selector))
    }

    function H(a) {
        "move" !== a.namespace && "moveend" !== a.namespace && (K(this, "dragstart." + a.guid + " drag." + a.guid), K(this, "mousedown." + a.guid))
    }
    var I = 6,
        J = a.event.add,
        K = a.event.remove,
        L = function(b, c, d) {
            a.event.trigger(c, d, b)
        },
        M = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                return window.setTimeout(function() {
                    a()
                }, 25)
            }
        }(),
        N = {
            textarea: !0,
            input: !0,
            select: !0,
            button: !0
        },
        O = {
            move: "mousemove",
            cancel: "mouseup dragstart",
            end: "mouseup"
        },
        P = {
            move: "touchmove",
            cancel: "touchend",
            end: "touchend"
        };
    a.event.special.movestart = {
        setup: E,
        teardown: F,
        add: G,
        remove: H,
        _default: function(a) {
            function d() {
                C(f, g.touch, g.timeStamp), L(a.target, f)
            }
            var f, g;
            a._handled() && (f = {
                target: a.target,
                startX: a.startX,
                startY: a.startY,
                pageX: a.pageX,
                pageY: a.pageY,
                distX: a.distX,
                distY: a.distY,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                velocityX: a.velocityX,
                velocityY: a.velocityY,
                timeStamp: a.timeStamp,
                identifier: a.identifier,
                targetTouches: a.targetTouches,
                finger: a.finger
            }, g = {
                event: f,
                timer: new c(d),
                touch: b,
                timeStamp: b
            }, a.identifier === b ? (J(a.target, "click", e), J(document, O.move, w, g), J(document, O.end, x, g)) : (a._preventTouchmoveDefault(), J(document, P.move + "." + a.identifier, z, g), J(document, P.end + "." + a.identifier, A, g)))
        }
    }, a.event.special.move = {
        setup: function() {
            J(this, "movestart.move", a.noop)
        },
        teardown: function() {
            K(this, "movestart.move", a.noop)
        }
    }, a.event.special.moveend = {
        setup: function() {
            J(this, "movestart.moveend", a.noop)
        },
        teardown: function() {
            K(this, "movestart.moveend", a.noop)
        }
    }, J(document, "mousedown.move", k), J(document, "touchstart.move", o), "function" == typeof Array.prototype.indexOf && ! function(a) {
        for (var b = ["changedTouches", "targetTouches"], c = b.length; c--;) - 1 === a.event.props.indexOf(b[c]) && a.event.props.push(b[c])
    }(a)
}), window.WYSIWYGModernizr = function(a, b, c) {
        function d(a) {
            n.cssText = a
        }

        function e(a, b) {
            return typeof a === b
        }
        var f, g, h, i = "2.7.1",
            j = {},
            k = b.documentElement,
            l = "modernizr",
            m = b.createElement(l),
            n = m.style,
            o = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            p = {},
            q = [],
            r = q.slice,
            s = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : l + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', l, '">', a, "</style>"].join(""), j.id = l, (m ? j : n).innerHTML += f, n.appendChild(j), m || (n.style.background = "", n.style.overflow = "hidden", i = k.style.overflow, k.style.overflow = "hidden", k.appendChild(n)), g = c(j, a), m ? j.parentNode.removeChild(j) : (n.parentNode.removeChild(n), k.style.overflow = i), !!g
            },
            t = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return s("@media " + b + " { #" + l + " { position: absolute; } }", function(b) {
                    d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
                }), d
            },
            u = {}.hasOwnProperty;
        h = e(u, "undefined") || e(u.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return u.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = r.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(r.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(r.call(arguments)))
                };
            return d
        }), p.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : s(["@media (", o.join("touch-enabled),("), l, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        };
        for (var v in p) h(p, v) && (g = v.toLowerCase(), j[g] = p[v](), q.push((j[g] ? "" : "no-") + g));
        return j.addTest = function(a, b) {
            if ("object" == typeof a)
                for (var d in a) h(a, d) && j.addTest(d, a[d]);
            else {
                if (a = a.toLowerCase(), j[a] !== c) return j;
                b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (k.className += " " + (b ? "" : "no-") + a), j[a] = b
            }
            return j
        }, d(""), m = f = null, j._version = i, j._prefixes = o, j.mq = t, j.testStyles = s, j
    }(this, document), ! function(a) {
        a.Editable.prototype.coreInit = function() {
            var a = this,
                b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                c = function(a) {
                    for (var b = a.toString(), c = 0, d = 0; d < b.length; d++) c += parseInt(b.charAt(d), 10);
                    return c > 10 ? c % 9 + 1 : c
                };
            if (a.options.key !== !1) {
                var d = function(a, b, c) {
                        for (var d = Math.abs(c); d-- > 0;) a -= b;
                        return 0 > c && (a += 123), a
                    },
                    e = function(a) {
                        return a
                    },
                    f = function(a) {
                        if (!a) return a;
                        for (var f = "", g = e("charCodeAt"), h = e("fromCharCode"), i = b.indexOf(a[0]), j = 1; j < a.length - 2; j++) {
                            for (var k = c(++i), l = a[g](j), m = "";
                                /[0-9-]/.test(a[j + 1]);) m += a[++j];
                            m = parseInt(m, 10) || 0, l = d(l, k, m), l ^= i - 1 & 31, f += String[h](l)
                        }
                        return f
                    },
                    g = e(f),
                    h = function(a) {
                        return "none" == a.css("display") ? (a.attr("style", a.attr("style") + g("zD4D2qJ-7dhuB-11bB4E1wqlhlfE4gjhkbB6C5eg1C-8h1besB-16e1==")), !0) : !1
                    },
                    i = function() {
                        for (var a = 0, b = document.domain, c = b.split("."), d = "_gd" + (new Date).getTime(); a < c.length - 1 && -1 == document.cookie.indexOf(d + "=" + d);) b = c.slice(-1 - ++a).join("."), document.cookie = d + "=" + d + ";domain=" + b + ";";
                        return document.cookie = d + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + b + ";", b
                    }(),
                    j = function() {
                        var b = g(a.options.key) || "";
                        return b !== g("eQZMe1NJGC1HTMVANU==") && b.indexOf(i, b.length - i.length) < 0 && [g("9qqG-7amjlwq=="), g("KA3B3C2A6D1D5H5H1A3==")].indexOf(i) < 0 ? (a.$box.append(g("uA5kygD3g1h1lzrA7E2jtotjvooB2A5eguhdC-22C-16nC2B3lh1deA-21C-16B4A2B4gi1F4D1wyA-13jA4H5C2rA-65A1C10dhzmoyJ2A10A-21d1B-13xvC2I4enC4C2B5B4G4G4H1H4A10aA8jqacD1C3c1B-16D-13A-13B2E5A4jtxfB-13fA1pewxvzA3E-11qrB4E4qwB-16icA1B3ykohde1hF4A2E4clA4C7E6haA4D1xtmolf1F-10A1H4lhkagoD5naalB-22B8B4quvB-8pjvouxB3A-9plnpA2B6D6BD2D1C2H1C3C3A4mf1G-10C-8i1G3C5B3pqB-9E5B1oyejA3ddalvdrnggE3C3bbj1jC6B3D3gugqrlD8B2DB-9qC-7qkA10D2VjiodmgynhA4HA-9D-8pI-7rD4PrE-11lvhE3B5A-16C7A6A3ekuD1==")), a.$lb = a.$box.find("> div:last"), a.$ab = a.$lb.find("> a"), h(a.$lb) || h(a.$ab)) : void 0
                    };
                j()
            }
        }, a.Editable.initializers.push(a.Editable.prototype.coreInit)
    }(jQuery),
    function(a) {
        a.Editable.DEFAULTS = a.extend(a.Editable.DEFAULTS, {
            allowedBlankTags: ["TEXTAREA"],
            selfClosingTags: ["br", "input", "img", "hr", "param", "!--", "source", "embed", "!", "meta", "link", "base"],
            doNotJoinTags: ["a"],
            iconClasses: ["fa-"]
        }), a.Editable.prototype.isClosingTag = function(a) {
            return a ? null !== a.match(/^<\/([a-zA-Z0-9]+)([^<]+)*>$/gi) : !1
        }, a.Editable.prototype.tagName = function(a) {
            return a.replace(/^<\/?([a-zA-Z0-9-!]+)([^>]+)*>$/gi, "$1").toLowerCase()
        }, a.Editable.SELF_CLOSING_AFTER = ["source"], a.Editable.prototype.isSelfClosingTag = function(a) {
            var b = this.tagName(a);
            return this.options.selfClosingTags.indexOf(b.toLowerCase()) >= 0
        }, a.Editable.prototype.tagKey = function(a) {
            return a.type + (a.attrs || []).sort().join("|")
        }, a.Editable.prototype.extendedKey = function(a) {
            return this.tagKey(a) + JSON.stringify(a.style)
        }, a.Editable.prototype.mapDOM = function(b) {
            var c = [],
                d = {},
                e = {},
                f = 0,
                g = this;
            a(b).find(".f-marker").html(a.Editable.INVISIBLE_SPACE);
            var h = function(b, c) {
                    if (3 === b.nodeType) return [];
                    if (8 === b.nodeType) return [{
                        comment: !0,
                        attrs: {},
                        styles: {},
                        idx: f++,
                        sp: c,
                        ep: c,
                        text: b.textContent
                    }];
                    var d = b.tagName;
                    "B" == d && (d = "STRONG"), "I" != d || b.className && null != b.className.match(new RegExp(g.options.iconClasses.join("|"), "gi")) || (d = "EM"), b.style.display = "";
                    var e = {},
                        h = {},
                        i = null;
                    if (b.attributes)
                        for (var j = 0; j < b.attributes.length; j++) {
                            var k = b.attributes[j];
                            "style" == k.nodeName ? i = k.value : e[k.nodeName] = k.value
                        }
                    if (i) {
                        var l = i.match(/([^:]*):([^:;]*(;|$))/gi);
                        if (l)
                            for (var m = 0; m < l.length; m++) {
                                var n = l[m].split(":"),
                                    o = n.slice(1).join(":").trim();
                                ";" == o[o.length - 1] && (o = o.substr(0, o.length - 1)), h[n[0].trim()] = o
                            }
                    }
                    var p = [];
                    if (a.isEmptyObject(e) && "SPAN" == b.tagName && !a.isEmptyObject(h)) {
                        for (var q in h) {
                            var r = {};
                            r[q] = h[q], p.push({
                                selfClosing: !1,
                                attrs: e,
                                styles: r,
                                idx: f++,
                                sp: c,
                                ep: c + b.textContent.length,
                                tagName: d,
                                noJoin: b.nextSibling && "BR" === b.nextSibling.tagName
                            })
                        }
                        return p
                    }
                    return [{
                        selfClosing: g.options.selfClosingTags.indexOf(d.toLowerCase()) >= 0,
                        attrs: e,
                        styles: h,
                        idx: f++,
                        sp: c,
                        ep: c + b.textContent.length,
                        tagName: d,
                        noJoin: b.nextSibling && "BR" === b.nextSibling.tagName
                    }]
                },
                i = function(a, g) {
                    var j, k, l;
                    if (a != b)
                        for (k = h(a, g), j = 0; j < k.length; j++) l = k[j], c.push(l), d[l.sp] || (d[l.sp] = {}), e[l.ep] || (e[l.ep] = {}), d[l.sp][l.tagName] || (d[l.sp][l.tagName] = []), e[l.ep][l.tagName] || (e[l.ep][l.tagName] = []), d[l.sp][l.tagName].push(l), e[l.ep][l.tagName].push(l);
                    var m = a.childNodes;
                    if (m) {
                        for (j = 0; j < m.length; j++) j > 0 && 8 != m[j - 1].nodeType && (g += m[j - 1].textContent.length), i(m[j], g);
                        if (k)
                            for (j = 0; j < k.length; j++) l = k[j], l.ci = f++, d[l.ep] || (d[l.ep] = {}), d[l.ep][l.tagName] || (d[l.ep][l.tagName] = []), d[l.ep][l.tagName].push({
                                shadow: !0,
                                ci: f - 1
                            })
                    }
                },
                j = function() {
                    var b, e, f, h;
                    for (b in d)
                        for (var i in d[b])
                            for (f = 0; f < d[b][i].length; f++)
                                if (e = d[b][i][f], !e.selfClosing && !(e.dirty || e.shadow || e.comment || e.noJoin))
                                    for (var j = f + 1; j < d[b][i].length; j++)
                                        if (h = d[b][i][j], !h.selfClosing && !(h.dirty || h.shadow || h.comment || h.noJoin || 1 != Object.keys(e.styles).length || 1 != Object.keys(h.styles).length || h.sp == h.ep)) {
                                            var k = Object.keys(e.styles)[0];
                                            if (h.styles[k]) {
                                                e.sp = h.ep;
                                                for (var l = 0; l < d[e.sp][e.tagName].length; l++) {
                                                    var m = d[e.sp][e.tagName][l];
                                                    if (m.shadow && m.ci == h.ci) {
                                                        d[e.sp][e.tagName].splice(l, 0, e);
                                                        break
                                                    }
                                                }
                                                d[b][i].splice(f, 1), f--;
                                                break
                                            }
                                        }
                    for (b = 0; b < c.length; b++)
                        if (e = c[b], !(e.dirty || e.selfClosing || e.comment || e.noJoin || e.shadow || g.options.doNotJoinTags.indexOf(e.tagName.toLowerCase()) >= 0 || !a.isEmptyObject(e.attrs)))
                            if (e.sp == e.ep && a.isEmptyObject(e.attrs) && a.isEmptyObject(e.styles) && g.options.allowedBlankTags.indexOf(e.tagName) < 0) e.dirty = !0;
                            else if (d[e.ep] && d[e.ep][e.tagName])
                        for (f = 0; f < d[e.ep][e.tagName].length; f++)
                            if (h = d[e.ep][e.tagName][f], e != h && !(h.dirty || h.selfClosing || h.shadow || h.comment || h.noJoin || !a.isEmptyObject(h.attrs) || JSON.stringify(h.styles) != JSON.stringify(e.styles))) {
                                e.ep < h.ep && (e.ep = h.ep), e.sp > h.sp && (e.sp = h.sp), h.dirty = !0, b--;
                                break
                            }
                    for (b = 0; b < c.length; b++)
                        if (e = c[b], !(e.dirty || e.selfClosing || e.comment || e.noJoin || e.shadow || !a.isEmptyObject(e.attrs)))
                            if (e.sp == e.ep && a.isEmptyObject(e.attrs) && a.isEmptyObject(e.style) && g.options.allowedBlankTags.indexOf(e.tagName) < 0) e.dirty = !0;
                            else if (d[e.sp] && d[e.sp][e.tagName])
                        for (f = d[e.sp][e.tagName].length - 1; f >= 0; f--) h = d[e.sp][e.tagName][f], e != h && (h.dirty || h.selfClosing || h.shadow || h.comment || h.noJoin || e.ep == h.ep && a.isEmptyObject(h.attrs) && (e.styles = a.extend(e.styles, h.styles), h.dirty = !0))
                };
            i(b, 0), j();
            for (var k = c.length - 1; k >= 0; k--) c.dirty && c.splice(k, 1);
            return c
        }, a.Editable.prototype.sortNodes = function(a, b) {
            if (a.comment) return 1;
            if (a.selfClosing || b.selfClosing) return a.idx - b.idx;
            var c = a.ep - a.sp,
                d = b.ep - b.sp;
            return 0 === c && 0 === d ? a.idx - b.idx : c === d ? b.ci - a.ci : d - c
        }, a.Editable.prototype.openTag = function(a) {
            var b, c = "<" + a.tagName.toLowerCase(),
                d = Object.keys(a.attrs).sort();
            for (b = 0; b < d.length; b++) {
                var e = d[b];
                c += " " + e + '="' + a.attrs[e] + '"'
            }
            var f = "",
                g = Object.keys(a.styles).sort();
            for (b = 0; b < g.length; b++) {
                var h = g[b];
                null != a.styles[h] && (f += h.replace("_", "-") + ": " + a.styles[h] + "; ")
            }
            return "" !== f && (c += ' style="' + f.trim() + '"'), c += ">"
        }, a.Editable.prototype.commentTag = function(a) {
            var b = "";
            if (a.selfClosing) {
                var c;
                b = "<" + a.tagName.toLowerCase();
                var d = Object.keys(a.attrs).sort();
                for (c = 0; c < d.length; c++) {
                    var e = d[c];
                    b += " " + e + '="' + a.attrs[e] + '"'
                }
                var f = "",
                    g = Object.keys(a.styles).sort();
                for (c = 0; c < g.length; c++) {
                    var h = g[c];
                    null != a.styles[h] && (f += h.replace("_", "-") + ": " + a.styles[h] + "; ")
                }
                "" !== f && (b += ' style="' + f.trim() + '"'), b += "/>"
            } else a.comment && (b = "<!--" + a.text + "-->");
            return b
        }, a.Editable.prototype.closeTag = function(a) {
            return "</" + a.tagName.toLowerCase() + ">"
        }, a.Editable.prototype.nodesOpenedAt = function(a, b) {
            for (var c = [], d = a.length - 1; d >= 0 && a[d].sp == b;) c.push(a.pop()), d--;
            return c
        }, a.Editable.prototype.entity = function(a) {
            return ch_map = {
                ">": "&gt;",
                "<": "&lt;",
                "&": "&amp;"
            }, ch_map[a] ? ch_map[a] : a
        }, a.Editable.prototype.removeInvisibleWhitespace = function(a) {
            for (var b = 0; b < a.childNodes.length; b++) {
                var c = a.childNodes[b];
                c.childNodes.length ? this.removeInvisibleWhitespace(c) : c.textContent = c.textContent.replace(/\u200B/gi, "")
            }
        }, a.Editable.prototype.cleanOutput = function(b, c) {
            var d, e, f, g;
            c && this.removeInvisibleWhitespace(b);
            var h = this.mapDOM(b, c).sort(function(a, b) {
                    return b.sp - a.sp
                }),
                i = b.textContent;
            html = "";
            var j = [],
                k = -1,
                l = a.proxy(function() {
                    var b = "";
                    for (simple_nodes_to_close = [], j = j.sort(function(a, b) {
                            return a.idx - b.idx
                        }).reverse(); j.length;) {
                        for (var c = j.pop(); simple_nodes_to_close.length && simple_nodes_to_close[simple_nodes_to_close.length - 1].ci < c.ci;) b += this.closeTag(simple_nodes_to_close.pop());
                        c.selfClosing || c.comment ? b += this.commentTag(c) : (!a.isEmptyObject(c.attrs) || this.options.allowedBlankTags.indexOf(c.tagName) >= 0) && (b += this.openTag(c), simple_nodes_to_close.push(c))
                    }
                    for (; simple_nodes_to_close.length;) b += this.closeTag(simple_nodes_to_close.pop());
                    html += b
                }, this),
                m = {},
                n = [];
            for (d = 0; d <= i.length; d++) {
                if (m[d])
                    for (e = m[d].length - 1; e >= 0; e--)
                        if (n.length && n[n.length - 1].tagName == m[d][e].tagName && JSON.stringify(n[n.length - 1].styles) == JSON.stringify(m[d][e].styles)) html += this.closeTag(m[d][e]), n.pop();
                        else {
                            for (var o = []; n.length && (n[n.length - 1].tagName !== m[d][e].tagName || JSON.stringify(n[n.length - 1].styles) !== JSON.stringify(m[d][e].styles));) g = n.pop(), html += this.closeTag(g), o.push(g);
                            for (html += this.closeTag(m[d][e]), n.pop(); o.length;) {
                                var p = o.pop();
                                html += this.openTag(p), n.push(p)
                            }
                        }
                for (var q = this.nodesOpenedAt(h, d).sort(this.sortNodes).reverse(); q.length;) {
                    var r = q.pop();
                    if (!r.dirty)
                        if (r.selfClosing || r.comment) r.ci > k || "BR" == r.tagName ? (l(), html += this.commentTag(r), k = r.ci) : j.length ? (j.push(r), k < r.ci && (k = r.ci)) : (html += this.commentTag(r), k < r.ci && (k = r.ci));
                        else if (r.ep > r.sp) {
                        r.ci > k && l();
                        var s = [];
                        if ("A" == r.tagName)
                            for (var t = r.sp + 1; t < r.ep; t++)
                                if (m[t] && m[t].length)
                                    for (f = 0; f < m[t].length; f++) s.push(m[t][f]), html += this.closeTag(m[t][f]), n.pop();
                        var u = [];
                        if ("SPAN" == r.tagName && ("#123456" == r.styles["background-color"] || "#123456" === a.Editable.RGBToHex(r.styles["background-color"]) || "#123456" == r.styles.color || "#123456" === a.Editable.RGBToHex(r.styles.color)))
                            for (; n.length;) {
                                var v = n.pop();
                                html += this.closeTag(v), u.push(v)
                            }
                        for (html += this.openTag(r), k < r.ci && (k = r.ci), n.push(r), m[r.ep] || (m[r.ep] = []), m[r.ep].push(r); s.length;) r = s.pop(), html += this.openTag(r), n.push(r);
                        for (; u.length;) r = u.pop(), html += this.openTag(r), n.push(r)
                    } else r.sp == r.ep && (j.push(r), k < r.ci && (k = r.ci))
                }
                l(), d != i.length && (html += this.entity(i[d]))
            }
            return html = html.replace(/(<span[^>]*? class\s*=\s*["']?f-marker["']?[^>]+>)\u200B(<\/span>)/gi, "$1$2"), html
        }, a.Editable.prototype.wrapDirectContent = function() {
            var b = a.merge(["UL", "OL", "TABLE"], this.valid_nodes);
            if (!this.options.paragraphy)
                for (var c = null, d = this.$element.contents(), e = 0; e < d.length; e++) 1 != d[e].nodeType || b.indexOf(d[e].tagName) < 0 ? (c || (c = a('<div class="fr-wrap">'), a(d[e]).before(c)), c.append(d[e])) : c = null
        }, a.Editable.prototype.cleanify = function(b, c, d) {
            if (this.browser.msie && a.Editable.getIEversion() < 9) return !1;
            var e;
            if (this.isHTML) return !1;
            void 0 === b && (b = !0), void 0 === d && (d = !0), this.no_verify = !0, this.$element.find("span").removeAttr("data-fr-verified"), d && this.saveSelectionByMarkers(), b ? e = this.getSelectionElements() : (this.wrapDirectContent(), e = this.$element.find(this.valid_nodes.join(",")), 0 === e.length && (e = [this.$element.get(0)]));
            var f, g;
            if (e[0] != this.$element.get(0))
                for (var h = 0; h < e.length; h++) {
                    var i = a(e[h]);
                    0 === i.find(this.valid_nodes.join(",")).length && (f = i.html(), g = this.cleanOutput(i.get(0), c), g !== f && i.html(g))
                } else 0 === this.$element.find(this.valid_nodes.join(",")).length && (f = this.$element.html(), g = this.cleanOutput(this.$element.get(0), c), g !== f && this.$element.html(g));
            this.$element.find("[data-fr-idx]").removeAttr("data-fr-idx"), this.$element.find(".fr-wrap").each(function() {
                a(this).replaceWith(a(this).html())
            }), this.$element.find(".f-marker").html(""), d && this.restoreSelectionByMarkers(), this.$element.find("span").attr("data-fr-verified", !0), this.no_verify = !1
        }
    }(jQuery);

},{}],3:[function(require,module,exports){
/*!
 * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
!function(a){a.Editable.commands=a.extend(a.Editable.commands,{insertOrderedList:{title:"Numbered List",icon:"fa fa-list-ol",refresh:function(){},callback:function(a){this.formatList(a)},undo:!0},insertUnorderedList:{title:"Bulleted List",icon:"fa fa-list-ul",refresh:function(){},callback:function(a){this.formatList(a)},undo:!0}}),a.Editable.prototype.refreshLists=function(){var b=a(this.getSelectionElement()),c=this.parents(b,"ul, ol");if(c.length>0){var d="insertUnorderedList";"OL"==c[0].tagName&&(d="insertOrderedList"),this.$editor.find('button[data-cmd="'+d+'"]').addClass("active")}},a.Editable.prototype.processBackspace=function(b){var c=b.prev();if(c.length){for(this.removeMarkers(),("UL"==c.get(0).tagName||"OL"==c.get(0).tagName)&&(c=c.find("li:last"));c.find("> ul, > ol").length;)c=c.find("> ul li:last, > ol li:last");var d=c.find("> p, > h1, > h3, > h4, > h5, > h6, > div, > pre, > blockquote");if(0===c.text().length&&0===c.find("img, table, input, iframe, video").length)c.remove();else{if(this.emptyElement(c.get(0))||(this.keep_enter=!0,b.find("> p, > h1, > h3, > h4, > h5, > h6, > div, > pre, > blockquote").each(function(b,c){a(c).replaceWith(a(c).html())}),this.keep_enter=!1),d.length)if(a(d[d.length-1]).append(this.markers_html),0===b.find("ul, ol").length)a(d[d.length-1]).append(b.html());else{for(var e=!1,f=b.contents(),g=0;g<f.length;g++){var h=f[g];["OL","UL"].indexOf(f[g].tagName)>=0&&(e=!0),e?a(d[d.length-1]).after(h):a(d[d.length-1]).append(h)}this.$element.find("breakli").remove();var i=d[d.length-1].nextSibling;i&&"BR"==i.tagName&&a(i).remove()}else this.emptyElement(c.get(0))?(this.$element.find("breakli").replaceWith(this.markers_html),c.html(b.html())):(c.append(this.markers_html),c.append(b.html()));b.remove(),this.cleanupLists(),this.restoreSelectionByMarkers()}this.$element.find("breakli").remove()}else this.$element.find("breakli").remove(),this.parents(b,"ul").length?this.formatList("insertUnorderedList",!1):this.formatList("insertOrderedList",!1);this.sync()},a.Editable.prototype.liBackspace=function(){if(""!==this.text())return!0;var b,c=this.getSelectionElement(),d=this.parents(a(c),"table, li");if(d.length>0&&"TABLE"===d[0].tagName)return!0;if(b="LI"==c.tagName?a(c):this.parents(a(c),"li:first"),this.removeMarkers(),this.emptyElement(b.get(0))?(b.prepend("<breakli></breakli>"),1==b.find("br").length&&b.find("br").remove()):this.insertHTML("<breakli></breakli>"),b.find("breakli").prev().length&&"TABLE"===b.find("breakli").prev().get(0).tagName&&b.find("breakli").next().length&&"BR"===b.find("breakli").next().get(0).tagName)return this.setSelection(b.find("breakli").prev().find("td:first").get(0)),b.find("breakli").next().remove(),this.$element.find("breakli").remove(),!1;for(var e,f=b.html(),g=[],h=0;h<f.length;h++){if(chr=f.charAt(h),"<"!=chr)return this.$element.find("breakli").remove(),!0;var i=f.indexOf(">",h+1);if(-1!==i){e=f.substring(h,i+1);var j=this.tagName(e);if(h=i,"breakli"==j){if(!this.isClosingTag(e)&&!this.isClosingTag(g[g.length-1]))return this.processBackspace(b),!1}else g.push(e)}}return this.$element.find("breakli").remove(),!0},a.Editable.prototype.textLiEnter=function(b){this.removeMarkers(),this.insertSimpleHTML("<breakli></breakli>",!1);var c,d,e=b.html(),f=[],g={},h=[],i=0,j=b.prop("attributes"),k="";for(d=0;d<j.length;d++)k+=" "+j[d].name+'="'+j[d].value+'"';var l=!1;for(d=0;d<e.length;d++)if(chr=e.charAt(d),"<"==chr){var m=e.indexOf(">",d+1);if(-1!==m){c=e.substring(d,m+1);var n=this.tagName(c);if(d=m,"breakli"==n){if(!this.isClosingTag(c)){for(var o=f.length-1;o>=0;o--){var p=this.tagName(f[o]);h.push("</"+p+">")}h.push("</li>"),h.push("<li"+k+">");for(var q=0;q<f.length;q++)h.push(f[q]);h.push('<span class="f-marker" data-type="false" data-collapsed="true" data-id="0" data-fr-verified="true"></span><span class="f-marker" data-type="true" data-collapsed="true" data-id="0" data-fr-verified="true"></span>'),l=!1}}else if(h.push(c),l=!1,!this.isSelfClosingTag(c))if(this.isClosingTag(c)){var r=g[n].pop();f.splice(r,1)}else f.push(c),void 0===g[n]&&(g[n]=[]),g[n].push(f.length-1)}}else i++,32!=chr.charCodeAt(0)||l?(h.push(chr),l=!0):h.push("&nbsp;");var s=a(b.parents("ul, ol")[0]);b.replaceWith("<li"+k+">"+h.join("")+"</li>"),s.find("p:empty + table").prev().remove(),s.find("p + table").each(function(b,c){var d=a(c);d.prev().append(d.clone()),d.remove()}),s.find("table + p").each(function(b,c){var d=a(c);d.append(d.prev().clone()),d.prev().remove()}),this.keep_enter=!0,s.find(this.valid_nodes.join(",")).each(a.proxy(function(b,c){""===a(c).text().trim()&&0===a(c).find(this.valid_nodes.join(",")).length&&a(c).prepend(a.Editable.INVISIBLE_SPACE)},this)),this.keep_enter=!1},a.Editable.prototype.liEnter=function(){var b,c=this.getSelectionElement(),d=this.parents(a(c),"table, li");if(d.length>0&&"TABLE"==d[0].tagName)return!0;if(b="LI"==c.tagName?a(c):this.parents(a(c),"li:first"),this.getSelectionTextInfo(b.get(0)).atStart&&""===this.text())b.before("<li>"+a.Editable.INVISIBLE_SPACE+"</li>");else{if(0===this.trim(b.text()).length&&0===b.find("img, table, iframe, input, object").length)return this.outdent(!1),!1;this.textLiEnter(b),this.$element.find("breakli").remove(),this.restoreSelectionByMarkers()}return this.sync(),!1},a.Editable.prototype.listTab=function(){var b=a(this.getSelectionElement());return this.parents(b,"ul, ol").length>0&&0===this.parents(b,"table").length?(this.indent(),!1):void 0},a.Editable.prototype.listShiftTab=function(){var b=a(this.getSelectionElement());return this.parents(b,"ul, ol").length>0&&0===this.parents(b,"table").length?(this.outdent(),!1):void 0},a.Editable.prototype.indentList=function(a,b){return"LI"===a.get(0).tagName?(b?this.outdentLi(a):this.indentLi(a),this.cleanupLists(),!1):!0},a.Editable.prototype.initList=function(){this.addListener("tab",this.listTab),this.addListener("shift+tab",this.listShiftTab),this.addListener("refresh",this.refreshLists),this.addListener("indent",this.indentList),this.isImage||this.isLink||this.options.editInPopup||this.$element.on("keydown",a.proxy(function(b){if(["TEXTAREA","INPUT"].indexOf(b.target.tagName)<0&&!this.isHTML){var c=b.which,d=this.getSelectionElement();if("LI"==d.tagName||this.parents(a(d),"li").length>0){if(13==c&&!b.shiftKey&&this.options.multiLine)return this.liEnter();if(8==c)return this.liBackspace()}}},this))},a.Editable.initializers.push(a.Editable.prototype.initList),a.Editable.prototype.formatList=function(b,c){if(this.browser.msie&&a.Editable.getIEversion()<9)return document.execCommand(b,!1,!1),!1;void 0===c&&(c=!0);var d,e,f=!1,g=!0,h=!1,i=this.getSelectionElements(),j=this.parents(a(i[0]),"ul, ol");if(j.length&&("UL"===j[0].tagName?"insertUnorderedList"!=b&&(f=!0):"insertOrderedList"!=b&&(f=!0)),this.saveSelectionByMarkers(),f){d="ol","insertUnorderedList"===b&&(d="ul");var k=a(j[0]);k.replaceWith("<"+d+">"+k.html()+"</"+d+">")}else{for(var l=0;l<i.length;l++)if(e=a(i[l]),("TD"==e.get(0).tagName||"TH"==e.get(0).tagName)&&this.wrapTextInElement(e),this.parents(e,"li").length>0||"LI"==e.get(0).tagName){var m;m="LI"==e.get(0).tagName?e:a(e.parents("li")[0]);var n=this.parents(e,"ul, ol");if(n.length>0&&(d=n[0].tagName.toLowerCase(),m.before('<span class="close-'+d+'" data-fr-verified="true"></span>'),m.after('<span class="open-'+d+'" data-fr-verified="true"></span>')),0===this.parents(a(n[0]),"ol, ul").length||f)if(0===m.find(this.valid_nodes.join(",")).length){var o=m.html().replace(/\u200B/gi,"");this.options.paragraphy?(0===m.text().replace(/\u200B/gi,"").length&&(o+=m.find("br").length>0?"":this.br),o="<"+this.options.defaultTag+this.attrs(m.get(0))+">"+o,o=o+"</"+this.options.defaultTag+">"):o+=m.find("br").length>0?"":this.br,m.replaceWith(o)}else m.replaceWith(m.html().replace(/\u200B/gi,""));h=!0}else g=!1;h&&this.cleanupLists(),(g===!1||f===!0)&&(this.wrapText(),this.restoreSelectionByMarkers(),i=this.getSelectionElements(),this.saveSelectionByMarkers(),this.elementsToList(i,b),this.unwrapText(),this.cleanupLists())}this.options.paragraphy&&!f&&this.wrapText(!0),this.restoreSelectionByMarkers(),c&&this.repositionEditor(),b="insertUnorderedList"==b?"unorderedListInserted":"orderedListInserted",this.triggerEvent(b)},a.Editable.prototype.elementsToList=function(b,c){var d="<ol>";"insertUnorderedList"==c&&(d="<ul>"),b[0]==this.$element.get(0)&&(b=this.$element.find("> "+this.valid_nodes.join(", >")));for(var e=0;e<b.length;e++){var f=a(d);$element=a(b[e]),$element.get(0)!=this.$element.get(0)&&("TD"===$element.get(0).tagName||"TH"===$element.get(0).tagName?(this.wrapTextInElement($element,!0),this.elementsToList($element.find("> "+this.valid_nodes.join(", >")),c)):(""===$element.attr("class")&&$element.removeAttr("class"),f.append($element.get(0).tagName==this.options.defaultTag&&0===$element.get(0).attributes.length?a("<li>").html($element.clone().html()):a("<li>").html($element.clone())),$element.replaceWith(f)))}},a.Editable.prototype.indentLi=function(b){var c=b.parents("ul, ol"),d=c.get(0).tagName.toLowerCase();b.find("> ul, > ol").length>0&&b.prev("li").length>0?(this.wrapTextInElement(b),b.find("> "+this.valid_nodes.join(" , > ")).each(function(b,c){a(c).wrap("<"+d+"></"+d+">").wrap("<li></li>")}),b.prev("li").append(b.find("> ul, > ol")),b.remove()):0===b.find("> ul, > ol").length&&b.prev("li").length>0&&(b.prev().append(a("<"+d+">").append(b.clone())),b.remove(),a(c.find("li").get().reverse()).each(function(b,c){var d=a(c);d.find(" > ul, > ol").length>0&&d.prev()&&d.prev().find(" > ul, > ol").length>0&&1===d.contents().length&&(d.prev().append(d.html()),d.remove())}))},a.Editable.prototype.outdentLi=function(b){var c=a(b.parents("ul, ol")[0]),d=this.parents(c,"ul, ol"),e=c.get(0).tagName.toLowerCase();0===b.prev("li").length&&this.parents(b,"li").length>0?(b.before('<span class="close-'+e+'" data-fr-verified="true"></span>'),b.before('<span class="close-li" data-fr-verified="true"></span>'),b.before('<span class="open-li" data-fr-verified="true"></span>'),b.after('<span class="open-'+e+'" data-fr-verified="true"></span>'),b.replaceWith(b.html())):(b.before('<span class="close-'+e+'" data-fr-verified="true"></span>'),b.after('<span class="open-'+e+'" data-fr-verified="true"></span>'),this.parents(b,"li").length>0&&(b.before('<span class="close-li" data-fr-verified="true"></span>'),b.after('<span class="open-li" data-fr-verified="true"></span>'))),d.length||(0===b.find(this.valid_nodes.join(",")).length?b.replaceWith(b.html().replace(/\u200b/gi,"")+this.br):(b.find(this.valid_nodes.join(", ")).each(a.proxy(function(b,c){this.emptyElement(c)&&a(c).append(this.br)},this)),b.replaceWith(b.html().replace(/\u200b/gi,""))))},a.Editable.prototype.listTextEmpty=function(b){var c=a(b).text().replace(/(\r\n|\n|\r|\t|\u200B)/gm,"");return(""===c||b===this.$element.get(0))&&1===a(b).find("br").length}}(jQuery);
},{}],4:[function(require,module,exports){
/*!
 * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
!function(a){a.Editable.DEFAULTS=a.extend(a.Editable.DEFAULTS,{videoAllowedAttrs:["src","width","height","frameborder","allowfullscreen","webkitallowfullscreen","mozallowfullscreen","href","target","id","controls","value","name"],videoAllowedTags:["iframe","object","param","video","source","embed"],defaultVideoAlignment:"center",textNearVideo:!0}),a.Editable.VIDEO_PROVIDERS=[{test_regex:/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?(.+)/g,url_text:"//www.youtube.com/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com)\/(?:channels\/[A-z]+\/|groups\/[A-z]+\/videos\/)?(.+)/g,url_text:"//player.vimeo.com/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,url_text:"//www.dailymotion.com/embed/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>'},{test_regex:/^.+(screen.yahoo.com)\/(videos-for-you|popular)?\/[^_&]+/,url_regex:"",url_text:"",html:'<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>'}],a.Editable.video_commands={floatVideoLeft:{title:"Float Left",icon:{type:"font",value:"fa fa-align-left"}},floatVideoNone:{title:"Float None",icon:{type:"font",value:"fa fa-align-justify"}},floatVideoRight:{title:"Float Right",icon:{type:"font",value:"fa fa-align-right"}},removeVideo:{title:"Remove Video",icon:{type:"font",value:"fa fa-trash-o"}}},a.Editable.DEFAULTS=a.extend(a.Editable.DEFAULTS,{videoButtons:["floatVideoLeft","floatVideoNone","floatVideoRight","removeVideo"]}),a.Editable.commands=a.extend(a.Editable.commands,{insertVideo:{title:"Insert Video",icon:"fa fa-video-camera",callback:function(){this.insertVideo()},undo:!1}}),a.Editable.prototype.insertVideo=function(){this.options.inlineMode||(this.closeImageMode(),this.imageMode=!1,this.positionPopup("insertVideo")),this.selectionInEditor()&&this.saveSelection(),this.showInsertVideo(),this.$video_wrapper.find("textarea").val("")},a.Editable.prototype.insertVideoHTML=function(){var a='<div class="froala-popup froala-video-popup" style="display: none;"><h4><span data-text="true">Insert Video</span><i title="Cancel" class="fa fa-times" id="f-video-close-'+this._id+'"></i></h4><div class="f-popup-line"><textarea placeholder="Embedded code" id="f-video-textarea-'+this._id+'"></textarea></div><p class="or"><span data-text="true">or</span></p><div class="f-popup-line"><input type="text" placeholder="http://youtube.com/" id="f-video-input-'+this._id+'"/><button data-text="true" class="f-ok f-submit fr-p-bttn" id="f-video-ok-'+this._id+'">OK</button></div></div>';return a},a.Editable.prototype.buildInsertVideo=function(){this.$video_wrapper=a(this.insertVideoHTML()),this.$popup_editor.append(this.$video_wrapper),this.addListener("hidePopups",this.hideVideoWrapper),this.$video_wrapper.on("mouseup touchend",a.proxy(function(a){this.isResizing()||a.stopPropagation()},this)),this.$video_wrapper.on("mouseup keydown","input#f-video-input-"+this._id+", textarea#f-video-textarea-"+this._id,a.proxy(function(a){a.stopPropagation()},this));var b=this;this.$video_wrapper.on("change","input#f-video-input-"+this._id+", textarea#f-video-textarea-"+this._id,function(){"INPUT"==this.tagName?b.$video_wrapper.find("textarea#f-video-textarea-"+b._id).val(""):"TEXTAREA"==this.tagName&&b.$video_wrapper.find("input#f-video-input-"+b._id).val("")}),this.$video_wrapper.on("click","button#f-video-ok-"+this._id,a.proxy(function(){var a=this.$video_wrapper.find("input#f-video-input-"+this._id),b=this.$video_wrapper.find("textarea#f-video-textarea-"+this._id);""!==a.val()?this.writeVideo(a.val(),!1):""!==b.val()&&this.writeVideo(b.val(),!0)},this)),this.$video_wrapper.on(this.mouseup,"i#f-video-close-"+this._id,a.proxy(function(){this.$bttn_wrapper.show(),this.hideVideoWrapper(),this.options.inlineMode&&!this.imageMode&&0===this.options.buttons.length&&this.hide(),this.restoreSelection(),this.focus(),this.options.inlineMode||this.hide()},this)),this.$video_wrapper.on("click",function(a){a.stopPropagation()}),this.$video_wrapper.on("click","*",function(a){a.stopPropagation()}),this.$window.on("keydown."+this._id,a.proxy(function(b){if(this.$element.find(".f-video-editor.active").length>0){var c=b.which;if(46==c||8==c)return b.stopPropagation(),b.preventDefault(),setTimeout(a.proxy(function(){this.removeVideo()},this),0),!1}},this))},a.Editable.prototype.destroyVideo=function(){this.$video_wrapper.html("").removeData().remove()},a.Editable.prototype.initVideo=function(){this.buildInsertVideo(),this.addVideoControls(),this.addListener("destroy",this.destroyVideo)},a.Editable.initializers.push(a.Editable.prototype.initVideo),a.Editable.prototype.hideVideoEditorPopup=function(){this.$video_editor&&(this.$video_editor.hide(),a("span.f-video-editor").removeClass("active"),this.$element.removeClass("f-non-selectable"),this.editableDisabled||this.isHTML||this.$element.attr("contenteditable",!0))},a.Editable.prototype.showVideoEditorPopup=function(){this.hidePopups(),this.$video_editor&&this.$video_editor.show(),this.$element.removeAttr("contenteditable")},a.Editable.prototype.addVideoControlsHTML=function(){this.$video_editor=a('<div class="froala-popup froala-video-editor-popup" style="display: none">');for(var b=a('<div class="f-popup-line">').appendTo(this.$video_editor),c=0;c<this.options.videoButtons.length;c++){var d=this.options.videoButtons[c];if(void 0!==a.Editable.video_commands[d]){var e=a.Editable.video_commands[d],f='<button class="fr-bttn" data-callback="'+d+'" data-cmd="'+d+'" title="'+e.title+'">';f+=void 0!==this.options.icons[d]?this.prepareIcon(this.options.icons[d],e.title):this.prepareIcon(e.icon,e.title),f+="</button>",b.append(f)}}this.addListener("hidePopups",this.hideVideoEditorPopup),this.$popup_editor.append(this.$video_editor),this.bindCommandEvents(this.$video_editor)},a.Editable.prototype.floatVideoLeft=function(){a("span.f-video-editor.active").attr("class","f-video-editor active fr-fvl"),this.triggerEvent("videoFloatedLeft"),a("span.f-video-editor.active").click()},a.Editable.prototype.floatVideoRight=function(){a("span.f-video-editor.active").attr("class","f-video-editor active fr-fvr"),this.triggerEvent("videoFloatedRight"),a("span.f-video-editor.active").click()},a.Editable.prototype.floatVideoNone=function(){a("span.f-video-editor.active").attr("class","f-video-editor active fr-fvn"),this.triggerEvent("videoFloatedNone"),a("span.f-video-editor.active").click()},a.Editable.prototype.removeVideo=function(){a("span.f-video-editor.active").remove(),this.hide(),this.triggerEvent("videoRemoved"),this.focus()},a.Editable.prototype.refreshVideo=function(){this.$element.find("iframe, object").each(function(b,c){for(var d=a(c),e=0;e<a.Editable.VIDEO_PROVIDERS.length;e++){var f=a.Editable.VIDEO_PROVIDERS[e];if(f.test_regex.test(d.attr("src"))){0===d.parents(".f-video-editor").length&&d.wrap('<span class="f-video-editor fr-fvn" data-fr-verified="true" contenteditable="false">');break}}}),this.browser.msie&&this.$element.find(".f-video-editor").each(function(){this.oncontrolselect=function(){return!1}}),this.options.textNearVideo||this.$element.find(".f-video-editor").attr("contenteditable",!1).addClass("fr-tnv")},a.Editable.prototype.addVideoControls=function(){this.addVideoControlsHTML(),this.addListener("sync",this.refreshVideo),this.$element.on("mousedown","span.f-video-editor",a.proxy(function(a){a.stopPropagation()},this)),this.$element.on("click touchend","span.f-video-editor",a.proxy(function(b){if(this.isDisabled)return!1;b.preventDefault(),b.stopPropagation();var c=b.currentTarget;this.clearSelection(),this.showVideoEditorPopup(),this.showByCoordinates(a(c).offset().left+a(c).width()/2,a(c).offset().top+a(c).height()+3),a(c).addClass("active"),this.refreshVideoButtons(c)},this))},a.Editable.prototype.refreshVideoButtons=function(b){var c=a(b).attr("class");this.$video_editor.find("[data-cmd]").removeClass("active"),c.indexOf("fr-fvl")>=0?this.$video_editor.find('[data-cmd="floatVideoLeft"]').addClass("active"):c.indexOf("fr-fvr")>=0?this.$video_editor.find('[data-cmd="floatVideoRight"]').addClass("active"):this.$video_editor.find('[data-cmd="floatVideoNone"]').addClass("active")},a.Editable.prototype.writeVideo=function(b,c){var d=null;if(c)d=this.clean(b,!0,!1,this.options.videoAllowedTags,this.options.videoAllowedAttrs);else for(var e=0;e<a.Editable.VIDEO_PROVIDERS.length;e++){var f=a.Editable.VIDEO_PROVIDERS[e];if(f.test_regex.test(b)){b=b.replace(f.url_regex,f.url_text),d=f.html.replace(/\{url\}/,b);break}}if(d){this.restoreSelection(),this.$element.focus();var g="fr-fvn";"left"==this.options.defaultVideoAlignment&&(g="fr-fvl"),"right"==this.options.defaultVideoAlignment&&(g="fr-fvr"),this.textNearVideo||(g+=" fr-tnv");try{this.insertHTML('<span contenteditable="false" class="f-video-editor '+g+'" data-fr-verified="true">'+d+"</span>")}catch(h){}this.$bttn_wrapper.show(),this.hideVideoWrapper(),this.hide(),this.triggerEvent("videoInserted",[d])}else this.triggerEvent("videoError")},a.Editable.prototype.showVideoWrapper=function(){this.$video_wrapper&&(this.$video_wrapper.show(),this.$video_wrapper.find(".f-popup-line input").val(""))},a.Editable.prototype.hideVideoWrapper=function(){this.$video_wrapper&&(this.$video_wrapper.hide(),this.$video_wrapper.find("input").blur())},a.Editable.prototype.showInsertVideo=function(){this.hidePopups(),this.showVideoWrapper()}}(jQuery);
},{}],5:[function(require,module,exports){
var css = "/*!\n * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)\n * License https://www.froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */.dark-theme.froala-box.fr-disabled .froala-element{color:#999}.dark-theme.froala-box.fr-disabled button.fr-bttn,.dark-theme.froala-box.fr-disabled button.fr-trigger{color:#999!important}.dark-theme.froala-box.fr-disabled button.fr-bttn:after,.dark-theme.froala-box.fr-disabled button.fr-trigger:after{border-top-color:#999!important}.dark-theme.froala-box .html-switch{border-color:#999}.dark-theme.froala-box .froala-wrapper.f-basic{border:solid 1px #252525;background:#fff}.dark-theme.froala-box .froala-wrapper.f-basic.f-placeholder+span.fr-placeholder{margin:10px}.dark-theme.froala-box .froala-element hr{border-top-color:#aaa}.dark-theme.froala-box .froala-element.f-placeholder:before{color:#aaa}.dark-theme.froala-box .froala-element pre{border:solid 1px #aaa;background:#fcfcfc;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.dark-theme.froala-box .froala-element blockquote{border-left:solid 5px #aaa}.dark-theme.froala-box .froala-element img{min-width:32px!important;min-height:32px!important}.dark-theme.froala-box .froala-element img.fr-fil{padding:10px 10px 10px 3px}.dark-theme.froala-box .froala-element img.fr-fir{padding:10px 3px 10px 10px}.dark-theme.froala-box .froala-element img.fr-fin{padding:10px 0}.dark-theme.froala-box .froala-element img::selection{color:#fff}.dark-theme.froala-box .froala-element img::-moz-selection{color:#fff}.dark-theme.froala-box .froala-element span.f-img-editor:before{border:0!important;outline:solid 1px #2c82c9!important}.dark-theme.froala-box .froala-element span.f-img-editor.fr-fil{margin:10px 10px 10px 3px}.dark-theme.froala-box .froala-element span.f-img-editor.fr-fir{margin:10px 3px 10px 10px}.dark-theme.froala-box .froala-element span.f-img-editor.fr-fin{margin:10px 0}.dark-theme.froala-box .froala-element span.f-img-handle{height:8px;width:8px;border:solid 1px #fff!important;background:#2c82c9}.dark-theme.froala-box .froala-element span.f-video-editor.active:after{border:solid 1px #252525}.dark-theme.froala-box .froala-element.f-basic{color:#444;padding:10px}.dark-theme.froala-box .froala-element.f-basic a{color:inherit}.dark-theme.froala-box .froala-element table td{border:solid 1px #aaa}.dark-theme.froala-box.f-html .froala-element{background:#202020;color:#fff;font-family:'Courier New',Monospace;font-size:13px}.dark-theme.froala-editor{background:#353535;border:solid 1px #252525;border-top:solid 5px #252525}.dark-theme.froala-editor hr{border-top-color:#aaa}.dark-theme.froala-editor span.f-sep{border-right:solid 1px #aaa;height:35px}.dark-theme.froala-editor button.fr-bttn,.dark-theme.froala-editor button.fr-trigger{background:0 0;color:#fff;font-size:16px;line-height:35px;width:40px}.dark-theme.froala-editor button.fr-bttn img,.dark-theme.froala-editor button.fr-trigger img{max-width:40px;max-height:35px}.dark-theme.froala-editor button.fr-bttn:disabled,.dark-theme.froala-editor button.fr-trigger:disabled{color:#999!important}.dark-theme.froala-editor button.fr-bttn:disabled:after,.dark-theme.froala-editor button.fr-trigger:disabled:after{border-top-color:#999!important}.dark-theme.froala-editor.ie8 button.fr-bttn:hover,.dark-theme.froala-editor.ie8 button.fr-trigger:hover{background:#2c82c9;color:#fff}.dark-theme.froala-editor.ie8 button.fr-bttn:hover:after,.dark-theme.froala-editor.ie8 button.fr-trigger:hover:after{border-top-color:#fff}.dark-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover,.dark-theme.froala-editor .froala-popup button.fr-bttn:hover,.dark-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover,.dark-theme.froala-editor .froala-popup button.fr-trigger:hover{background:#2c82c9;color:#fff}.dark-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover:after,.dark-theme.froala-editor .froala-popup button.fr-bttn:hover:after,.dark-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover:after,.dark-theme.froala-editor .froala-popup button.fr-trigger:hover:after{border-top-color:#fff}.dark-theme.froala-editor .fr-bttn.active{color:#2c82c9;background:0 0}.dark-theme.froala-editor .fr-trigger:after{border-top-color:#fff}.dark-theme.froala-editor .fr-trigger.active{color:#fff;background:#2c82c9}.dark-theme.froala-editor .fr-trigger.active:after{border-top-color:#fff!important}.dark-theme.froala-editor .fr-dropdown .fr-trigger{width:calc(40px - 2px)}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu{background:#353535;border:solid 1px #252525}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu li.active a{background:#fff!important;color:#353535!important}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a{color:#fff}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a:hover{background:#fff!important;color:#353535!important}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>a,.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>a{background:#fff;color:#353535}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul{background:#353535;color:#fff;border:solid 1px #252525}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div{background:#353535;color:#fff;border:solid 1px #252525}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span>span{border:solid 1px #aaa}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span:hover>span,.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span.hover>span{background:rgba(61,142,185,.3);border:solid 1px #3d8eb9}.dark-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>hr{border-top:solid 1px #252525}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p{color:#fff}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn{color:#fff}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn:hover{color:#2c82c9}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active{outline:solid 1px #fff}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active:after{color:#fff}.dark-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn:hover:not(:focus):not(:active){outline:solid 1px #fff}.dark-theme.froala-editor .froala-popup{background:#353535}.dark-theme.froala-editor .froala-popup h4{color:#fff}.dark-theme.froala-editor .froala-popup h4 i{color:#aaa}.dark-theme.froala-editor .froala-popup h4 i.fa-external-link{color:#fff}.dark-theme.froala-editor .froala-popup h4 i.fa-external-link:hover{color:#2c82c9}.dark-theme.froala-editor .froala-popup h4 i:hover{color:#fff}.dark-theme.froala-editor .froala-popup button.fr-p-bttn{color:#fff}.dark-theme.froala-editor .froala-popup button.fr-p-bttn.f-ok{background:#2c82c9;color:#fff}.dark-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink{background:#b8312f;color:#fff}.dark-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink:hover{background:#fff;color:#353535}.dark-theme.froala-editor .froala-popup button.fr-p-bttn:hover,.dark-theme.froala-editor .froala-popup button.fr-p-bttn:focus{background:#fff;color:#353535}.dark-theme.froala-editor .froala-popup div.f-popup-line.f-popup-toolbar{background:#353535}.dark-theme.froala-editor .froala-popup div.f-popup-line label{color:#fff}.dark-theme.froala-editor .froala-popup div.f-popup-line input[type=text]{border:solid 1px #aaa}.dark-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:focus{border:solid 1px #54acd2}.dark-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:disabled{background:#fff;color:#999}.dark-theme.froala-editor .froala-popup div.f-popup-line textarea{border:solid 1px #aaa}.dark-theme.froala-editor .froala-popup div.f-popup-line textarea:focus{border:solid 1px #54acd2}.dark-theme.froala-editor .froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #aaa}.dark-theme.froala-editor .froala-popup.froala-video-popup p.or{color:#fff}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload{color:#fff;border:dashed 2px #aaa}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload:hover{border:dashed 2px #eee}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload.f-hover{border:dashed 2px #61bd6d}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse{background:#475577;color:#fff}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse:hover{background:#fff;color:#353535}.dark-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #aaa}.dark-theme.froala-editor .froala-popup.froala-image-popup p.f-progress{background-color:#61bd6d}.dark-theme.froala-editor .froala-popup.froala-image-popup p.f-progress span{background-color:#61bd6d;color:#fff}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links{background:#475577;color:#fff}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links:hover{background:#fff;color:#353535}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul{background:#353535;border:solid 1px #252525}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li{color:#fff}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li+li{border-top:solid 1px #252525}.dark-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li:hover{background:#fff;color:#353535}.dark-theme.froala-modal .f-modal-wrapper{background:#353535;border:solid 1px #252525;border-top:solid 5px #252525}.dark-theme.froala-modal .f-modal-wrapper h4{color:#fff}.dark-theme.froala-modal .f-modal-wrapper h4 i{color:#aaa}.dark-theme.froala-modal .f-modal-wrapper h4 i:hover{color:#fff}.dark-theme.froala-modal .f-modal-wrapper div.f-image-list div.f-empty{background:#aaa}.dark-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{background:#b8312f;color:#fff}.dark-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img:hover{background:#fff;color:#353535}.dark-theme.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img:hover{background:#fff;color:#353535}.froala-overlay{background:#000}"; (require("./../../node_modules/cssify"))(css); module.exports = css;
},{"./../../node_modules/cssify":9}],6:[function(require,module,exports){
var css = "/*!\n * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)\n * License https://www.froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */.gray-theme.froala-box.fr-disabled .froala-element{color:#999}.gray-theme.froala-box.fr-disabled button.fr-bttn,.gray-theme.froala-box.fr-disabled button.fr-trigger{color:#999!important}.gray-theme.froala-box.fr-disabled button.fr-bttn:after,.gray-theme.froala-box.fr-disabled button.fr-trigger:after{border-top-color:#999!important}.gray-theme.froala-box .html-switch{border-color:#999}.gray-theme.froala-box .froala-wrapper.f-basic{border:solid 1px #75706b;background:#fff}.gray-theme.froala-box .froala-wrapper.f-basic.f-placeholder+span.fr-placeholder{margin:10px}.gray-theme.froala-box .froala-element hr{border-top-color:#d1d5d8}.gray-theme.froala-box .froala-element.f-placeholder:before{color:#d1d5d8}.gray-theme.froala-box .froala-element pre{border:solid 1px #d1d5d8;background:#fcfcfc;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.gray-theme.froala-box .froala-element blockquote{border-left:solid 5px #d1d5d8}.gray-theme.froala-box .froala-element img{min-width:32px!important;min-height:32px!important}.gray-theme.froala-box .froala-element img.fr-fil{padding:10px 10px 10px 3px}.gray-theme.froala-box .froala-element img.fr-fir{padding:10px 3px 10px 10px}.gray-theme.froala-box .froala-element img.fr-fin{padding:10px 0}.gray-theme.froala-box .froala-element img::selection{color:#fff}.gray-theme.froala-box .froala-element img::-moz-selection{color:#fff}.gray-theme.froala-box .froala-element span.f-img-editor:before{border:0!important;outline:solid 1px #2c82c9!important}.gray-theme.froala-box .froala-element span.f-img-editor.fr-fil{margin:10px 10px 10px 3px}.gray-theme.froala-box .froala-element span.f-img-editor.fr-fir{margin:10px 3px 10px 10px}.gray-theme.froala-box .froala-element span.f-img-editor.fr-fin{margin:10px 0}.gray-theme.froala-box .froala-element span.f-img-handle{height:8px;width:8px;border:solid 1px #fff!important;background:#2c82c9}.gray-theme.froala-box .froala-element span.f-video-editor.active:after{border:solid 1px #75706b}.gray-theme.froala-box .froala-element.f-basic{color:#444;padding:10px}.gray-theme.froala-box .froala-element.f-basic a{color:inherit}.gray-theme.froala-box .froala-element table td{border:solid 1px #d1d5d8}.gray-theme.froala-box.f-html .froala-element{background:#202020;color:#fff;font-family:'Courier New',Monospace;font-size:13px}.gray-theme.froala-editor{background:#efefef;border:solid 1px #75706b;border-top:solid 5px #75706b}.gray-theme.froala-editor hr{border-top-color:#d1d5d8}.gray-theme.froala-editor span.f-sep{border-right:solid 1px #d1d5d8;height:35px}.gray-theme.froala-editor button.fr-bttn,.gray-theme.froala-editor button.fr-trigger{background:0 0;color:#75706b;font-size:16px;line-height:35px;width:40px}.gray-theme.froala-editor button.fr-bttn img,.gray-theme.froala-editor button.fr-trigger img{max-width:40px;max-height:35px}.gray-theme.froala-editor button.fr-bttn:disabled,.gray-theme.froala-editor button.fr-trigger:disabled{color:#999!important}.gray-theme.froala-editor button.fr-bttn:disabled:after,.gray-theme.froala-editor button.fr-trigger:disabled:after{border-top-color:#999!important}.gray-theme.froala-editor.ie8 button.fr-bttn:hover,.gray-theme.froala-editor.ie8 button.fr-trigger:hover{background:#28324e;color:#fff}.gray-theme.froala-editor.ie8 button.fr-bttn:hover:after,.gray-theme.froala-editor.ie8 button.fr-trigger:hover:after{border-top-color:#fff}.gray-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover,.gray-theme.froala-editor .froala-popup button.fr-bttn:hover,.gray-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover,.gray-theme.froala-editor .froala-popup button.fr-trigger:hover{background:#28324e;color:#fff}.gray-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover:after,.gray-theme.froala-editor .froala-popup button.fr-bttn:hover:after,.gray-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover:after,.gray-theme.froala-editor .froala-popup button.fr-trigger:hover:after{border-top-color:#fff}.gray-theme.froala-editor .fr-bttn.active{color:#28324e;background:0 0}.gray-theme.froala-editor .fr-trigger:after{border-top-color:#75706b}.gray-theme.froala-editor .fr-trigger.active{color:#fff;background:#28324e}.gray-theme.froala-editor .fr-trigger.active:after{border-top-color:#fff!important}.gray-theme.froala-editor .fr-dropdown .fr-trigger{width:calc(40px - 2px)}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu{background:#fff;border:solid 1px #75706b}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu li.active a{background:#28324e!important;color:#fff!important}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a{color:#28324e}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a:hover{background:#28324e!important;color:#fff!important}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>a,.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>a{background:#28324e;color:#fff}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul{background:#fff;color:#28324e;border:solid 1px #75706b}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div{background:#fff;color:#28324e;border:solid 1px #75706b}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span>span{border:solid 1px #d1d5d8}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span:hover>span,.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span.hover>span{background:rgba(40,50,78,.3);border:solid 1px #28324e}.gray-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>hr{border-top:solid 1px #75706b}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p{color:#28324e}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn{color:#28324e}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn:hover{color:#28324e}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active{outline:solid 1px #75706b}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active:after{color:#fff}.gray-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn:hover:not(:focus):not(:active){outline:solid 1px #75706b}.gray-theme.froala-editor .froala-popup{background:#fff}.gray-theme.froala-editor .froala-popup h4{color:#28324e}.gray-theme.froala-editor .froala-popup h4 i{color:#d1d5d8}.gray-theme.froala-editor .froala-popup h4 i.fa-external-link{color:#28324e}.gray-theme.froala-editor .froala-popup h4 i.fa-external-link:hover{color:#28324e}.gray-theme.froala-editor .froala-popup h4 i:hover{color:#28324e}.gray-theme.froala-editor .froala-popup button.fr-p-bttn{color:#fff}.gray-theme.froala-editor .froala-popup button.fr-p-bttn.f-ok{background:#75706b;color:#fff}.gray-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink{background:#28324e;color:#fff}.gray-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink:hover{background:#d1d5d8;color:#28324e}.gray-theme.froala-editor .froala-popup button.fr-p-bttn:hover,.gray-theme.froala-editor .froala-popup button.fr-p-bttn:focus{background:#d1d5d8;color:#28324e}.gray-theme.froala-editor .froala-popup div.f-popup-line.f-popup-toolbar{background:#efefef}.gray-theme.froala-editor .froala-popup div.f-popup-line label{color:#28324e}.gray-theme.froala-editor .froala-popup div.f-popup-line input[type=text]{border:solid 1px #d1d5d8}.gray-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:focus{border:solid 1px #28324e}.gray-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:disabled{background:#fff;color:#999}.gray-theme.froala-editor .froala-popup div.f-popup-line textarea{border:solid 1px #d1d5d8}.gray-theme.froala-editor .froala-popup div.f-popup-line textarea:focus{border:solid 1px #28324e}.gray-theme.froala-editor .froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #d1d5d8}.gray-theme.froala-editor .froala-popup.froala-video-popup p.or{color:#28324e}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload{color:#28324e;border:dashed 2px #d1d5d8}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload:hover{border:dashed 2px #353535}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload.f-hover{border:dashed 2px #61bd6d}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse{background:#28324e;color:#fff}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse:hover{background:#d1d5d8;color:#28324e}.gray-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #d1d5d8}.gray-theme.froala-editor .froala-popup.froala-image-popup p.f-progress{background-color:#61bd6d}.gray-theme.froala-editor .froala-popup.froala-image-popup p.f-progress span{background-color:#61bd6d;color:#fff}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links{background:#28324e;color:#fff}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links:hover{background:#d1d5d8;color:#28324e}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul{background:#fff;border:solid 1px #75706b}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li{color:#28324e}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li+li{border-top:solid 1px #75706b}.gray-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li:hover{background:#28324e;color:#fff}.gray-theme.froala-modal .f-modal-wrapper{background:#fff;border:solid 1px #75706b;border-top:solid 5px #75706b}.gray-theme.froala-modal .f-modal-wrapper h4{color:#28324e}.gray-theme.froala-modal .f-modal-wrapper h4 i{color:#d1d5d8}.gray-theme.froala-modal .f-modal-wrapper h4 i:hover{color:#28324e}.gray-theme.froala-modal .f-modal-wrapper div.f-image-list div.f-empty{background:#d1d5d8}.gray-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{background:#28324e;color:#fff}.gray-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img:hover{background:#d1d5d8;color:#28324e}.gray-theme.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img:hover{background:#d1d5d8;color:#28324e}.froala-overlay{background:#75706b}"; (require("./../../node_modules/cssify"))(css); module.exports = css;
},{"./../../node_modules/cssify":9}],7:[function(require,module,exports){
var css = "/*!\n * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)\n * License https://www.froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */.red-theme.froala-box.fr-disabled .froala-element{color:#999}.red-theme.froala-box.fr-disabled button.fr-bttn,.red-theme.froala-box.fr-disabled button.fr-trigger{color:#999!important}.red-theme.froala-box.fr-disabled button.fr-bttn:after,.red-theme.froala-box.fr-disabled button.fr-trigger:after{border-top-color:#999!important}.red-theme.froala-box .html-switch{border-color:#999}.red-theme.froala-box .froala-wrapper.f-basic{border:solid 1px #252525;background:#fff}.red-theme.froala-box .froala-wrapper.f-basic.f-placeholder+span.fr-placeholder{margin:10px}.red-theme.froala-box .froala-element hr{border-top-color:#ccc}.red-theme.froala-box .froala-element.f-placeholder:before{color:#ccc}.red-theme.froala-box .froala-element pre{border:solid 1px #ccc;background:#fcfcfc;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.red-theme.froala-box .froala-element blockquote{border-left:solid 5px #ccc}.red-theme.froala-box .froala-element img{min-width:32px!important;min-height:32px!important}.red-theme.froala-box .froala-element img.fr-fil{padding:10px 10px 10px 3px}.red-theme.froala-box .froala-element img.fr-fir{padding:10px 3px 10px 10px}.red-theme.froala-box .froala-element img.fr-fin{padding:10px 0}.red-theme.froala-box .froala-element img::selection{color:#fff}.red-theme.froala-box .froala-element img::-moz-selection{color:#fff}.red-theme.froala-box .froala-element span.f-img-editor:before{border:0!important;outline:solid 1px #2c82c9!important}.red-theme.froala-box .froala-element span.f-img-editor.fr-fil{margin:10px 10px 10px 3px}.red-theme.froala-box .froala-element span.f-img-editor.fr-fir{margin:10px 3px 10px 10px}.red-theme.froala-box .froala-element span.f-img-editor.fr-fin{margin:10px 0}.red-theme.froala-box .froala-element span.f-img-handle{height:8px;width:8px;border:solid 1px #fff!important;background:#2c82c9}.red-theme.froala-box .froala-element span.f-video-editor.active:after{border:solid 1px #252525}.red-theme.froala-box .froala-element.f-basic{color:#444;padding:10px}.red-theme.froala-box .froala-element.f-basic a{color:inherit}.red-theme.froala-box .froala-element table td{border:solid 1px #ccc}.red-theme.froala-box.f-html .froala-element{background:#202020;color:#fff;font-family:'Courier New',Monospace;font-size:13px}.red-theme.froala-editor{background:#b8312f;border:solid 1px #252525;border-top:solid 5px #252525}.red-theme.froala-editor hr{border-top-color:#ccc}.red-theme.froala-editor span.f-sep{border-right:solid 1px #ccc;height:35px}.red-theme.froala-editor button.fr-bttn,.red-theme.froala-editor button.fr-trigger{background:0 0;color:#fff;font-size:16px;line-height:35px;width:40px}.red-theme.froala-editor button.fr-bttn img,.red-theme.froala-editor button.fr-trigger img{max-width:40px;max-height:35px}.red-theme.froala-editor button.fr-bttn:disabled,.red-theme.froala-editor button.fr-trigger:disabled{color:#999!important}.red-theme.froala-editor button.fr-bttn:disabled:after,.red-theme.froala-editor button.fr-trigger:disabled:after{border-top-color:#999!important}.red-theme.froala-editor.ie8 button.fr-bttn:hover,.red-theme.froala-editor.ie8 button.fr-trigger:hover{background:#f7da64;color:#b8312f}.red-theme.froala-editor.ie8 button.fr-bttn:hover:after,.red-theme.froala-editor.ie8 button.fr-trigger:hover:after{border-top-color:#b8312f}.red-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover,.red-theme.froala-editor .froala-popup button.fr-bttn:hover,.red-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover,.red-theme.froala-editor .froala-popup button.fr-trigger:hover{background:#f7da64;color:#b8312f}.red-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover:after,.red-theme.froala-editor .froala-popup button.fr-bttn:hover:after,.red-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover:after,.red-theme.froala-editor .froala-popup button.fr-trigger:hover:after{border-top-color:#b8312f}.red-theme.froala-editor .fr-bttn.active{color:#f7da64;background:0 0}.red-theme.froala-editor .fr-trigger:after{border-top-color:#fff}.red-theme.froala-editor .fr-trigger.active{color:#b8312f;background:#f7da64}.red-theme.froala-editor .fr-trigger.active:after{border-top-color:#b8312f!important}.red-theme.froala-editor .fr-dropdown .fr-trigger{width:calc(40px - 2px)}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu{background:#fff;border:solid 1px #b8312f}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu li.active a{background:#444!important;color:#fff!important}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a{color:#444}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a:hover{background:#444!important;color:#fff!important}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>a,.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>a{background:#444;color:#fff}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul{background:#fff;color:#444;border:solid 1px #b8312f}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div{background:#fff;color:#444;border:solid 1px #b8312f}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span>span{border:solid 1px #ccc}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span:hover>span,.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span.hover>span{background:rgba(247,218,100,.3);border:solid 1px #f7da64}.red-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>hr{border-top:solid 1px #b8312f}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p{color:#444}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn{color:#444}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn:hover{color:#f7da64}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active{outline:solid 1px #252525}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active:after{color:#fff}.red-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn:hover:not(:focus):not(:active){outline:solid 1px #252525}.red-theme.froala-editor .froala-popup{background:#fff}.red-theme.froala-editor .froala-popup h4{color:#444}.red-theme.froala-editor .froala-popup h4 i{color:#ccc}.red-theme.froala-editor .froala-popup h4 i.fa-external-link{color:#444}.red-theme.froala-editor .froala-popup h4 i.fa-external-link:hover{color:#f7da64}.red-theme.froala-editor .froala-popup h4 i:hover{color:#444}.red-theme.froala-editor .froala-popup button.fr-p-bttn{color:#fff}.red-theme.froala-editor .froala-popup button.fr-p-bttn.f-ok{background:#b8312f;color:#fff}.red-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink{background:#353535;color:#fff}.red-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink:hover{background:#f7da64;color:#b8312f}.red-theme.froala-editor .froala-popup button.fr-p-bttn:hover,.red-theme.froala-editor .froala-popup button.fr-p-bttn:focus{background:#f7da64;color:#b8312f}.red-theme.froala-editor .froala-popup div.f-popup-line.f-popup-toolbar{background:#b8312f}.red-theme.froala-editor .froala-popup div.f-popup-line label{color:#444}.red-theme.froala-editor .froala-popup div.f-popup-line input[type=text]{border:solid 1px #ccc}.red-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:focus{border:solid 1px #f7da64}.red-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:disabled{background:#fff;color:#999}.red-theme.froala-editor .froala-popup div.f-popup-line textarea{border:solid 1px #ccc}.red-theme.froala-editor .froala-popup div.f-popup-line textarea:focus{border:solid 1px #f7da64}.red-theme.froala-editor .froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc}.red-theme.froala-editor .froala-popup.froala-video-popup p.or{color:#444}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload{color:#444;border:dashed 2px #ccc}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload:hover{border:dashed 2px #353535}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload.f-hover{border:dashed 2px #61bd6d}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse{background:#f7da64;color:#b8312f}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse:hover{background:#b8312f;color:#fff}.red-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc}.red-theme.froala-editor .froala-popup.froala-image-popup p.f-progress{background-color:#61bd6d}.red-theme.froala-editor .froala-popup.froala-image-popup p.f-progress span{background-color:#61bd6d;color:#fff}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links{background:#f7da64;color:#b8312f}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links:hover{background:#b8312f;color:#fff}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul{background:#fff;border:solid 1px #b8312f}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li{color:#444}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li+li{border-top:solid 1px #b8312f}.red-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li:hover{background:#444;color:#fff}.red-theme.froala-modal .f-modal-wrapper{background:#fff;border:solid 1px #252525;border-top:solid 5px #252525}.red-theme.froala-modal .f-modal-wrapper h4{color:#444}.red-theme.froala-modal .f-modal-wrapper h4 i{color:#ccc}.red-theme.froala-modal .f-modal-wrapper h4 i:hover{color:#444}.red-theme.froala-modal .f-modal-wrapper div.f-image-list div.f-empty{background:#ccc}.red-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{background:#353535;color:#fff}.red-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img:hover{background:#f7da64;color:#b8312f}.red-theme.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img:hover{background:#f7da64;color:#b8312f}.froala-overlay{background:#000}"; (require("./../../node_modules/cssify"))(css); module.exports = css;
},{"./../../node_modules/cssify":9}],8:[function(require,module,exports){
var css = "/*!\n * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)\n * License https://www.froala.com/wysiwyg-editor/terms\n * Copyright 2014-2015 Froala Labs\n */.royal-theme.froala-box.fr-disabled .froala-element{color:#999}.royal-theme.froala-box.fr-disabled button.fr-bttn,.royal-theme.froala-box.fr-disabled button.fr-trigger{color:#999!important}.royal-theme.froala-box.fr-disabled button.fr-bttn:after,.royal-theme.froala-box.fr-disabled button.fr-trigger:after{border-top-color:#999!important}.royal-theme.froala-box .html-switch{border-color:#999}.royal-theme.froala-box .froala-wrapper.f-basic{border:solid 1px #553982;background:#fff}.royal-theme.froala-box .froala-wrapper.f-basic.f-placeholder+span.fr-placeholder{margin:10px}.royal-theme.froala-box .froala-element hr{border-top-color:#ccc}.royal-theme.froala-box .froala-element.f-placeholder:before{color:#ccc}.royal-theme.froala-box .froala-element pre{border:solid 1px #ccc;background:#fcfcfc;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-moz-background-clip:padding;-webkit-background-clip:padding-box;background-clip:padding-box}.royal-theme.froala-box .froala-element blockquote{border-left:solid 5px #ccc}.royal-theme.froala-box .froala-element img{min-width:32px!important;min-height:32px!important}.royal-theme.froala-box .froala-element img.fr-fil{padding:10px 10px 10px 3px}.royal-theme.froala-box .froala-element img.fr-fir{padding:10px 3px 10px 10px}.royal-theme.froala-box .froala-element img.fr-fin{padding:10px 0}.royal-theme.froala-box .froala-element img::selection{color:#fff}.royal-theme.froala-box .froala-element img::-moz-selection{color:#fff}.royal-theme.froala-box .froala-element span.f-img-editor:before{border:0!important;outline:solid 1px #2c82c9!important}.royal-theme.froala-box .froala-element span.f-img-editor.fr-fil{margin:10px 10px 10px 3px}.royal-theme.froala-box .froala-element span.f-img-editor.fr-fir{margin:10px 3px 10px 10px}.royal-theme.froala-box .froala-element span.f-img-editor.fr-fin{margin:10px 0}.royal-theme.froala-box .froala-element span.f-img-handle{height:8px;width:8px;border:solid 1px #fff!important;background:#2c82c9}.royal-theme.froala-box .froala-element span.f-video-editor.active:after{border:solid 1px #553982}.royal-theme.froala-box .froala-element.f-basic{color:#444;padding:10px}.royal-theme.froala-box .froala-element.f-basic a{color:inherit}.royal-theme.froala-box .froala-element table td{border:solid 1px #ccc}.royal-theme.froala-box.f-html .froala-element{background:#202020;color:#fff;font-family:'Courier New',Monospace;font-size:13px}.royal-theme.froala-editor{background:#fff;border:solid 1px #553982;border-top:solid 5px #553982}.royal-theme.froala-editor hr{border-top-color:#ccc}.royal-theme.froala-editor span.f-sep{border-right:solid 1px #ccc;height:35px}.royal-theme.froala-editor button.fr-bttn,.royal-theme.froala-editor button.fr-trigger{background:0 0;color:#553982;font-size:16px;line-height:35px;width:40px}.royal-theme.froala-editor button.fr-bttn img,.royal-theme.froala-editor button.fr-trigger img{max-width:40px;max-height:35px}.royal-theme.froala-editor button.fr-bttn:disabled,.royal-theme.froala-editor button.fr-trigger:disabled{color:#999!important}.royal-theme.froala-editor button.fr-bttn:disabled:after,.royal-theme.froala-editor button.fr-trigger:disabled:after{border-top-color:#999!important}.royal-theme.froala-editor.ie8 button.fr-bttn:hover,.royal-theme.froala-editor.ie8 button.fr-trigger:hover{background:#9365b8;color:#fff}.royal-theme.froala-editor.ie8 button.fr-bttn:hover:after,.royal-theme.froala-editor.ie8 button.fr-trigger:hover:after{border-top-color:#fff}.royal-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover,.royal-theme.froala-editor .froala-popup button.fr-bttn:hover,.royal-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover,.royal-theme.froala-editor .froala-popup button.fr-trigger:hover{background:#9365b8;color:#fff}.royal-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-bttn:hover:after,.royal-theme.froala-editor .froala-popup button.fr-bttn:hover:after,.royal-theme.froala-editor .bttn-wrapper:not(.touch) button.fr-trigger:hover:after,.royal-theme.froala-editor .froala-popup button.fr-trigger:hover:after{border-top-color:#fff}.royal-theme.froala-editor .fr-bttn.active{color:#9365b8;background:0 0}.royal-theme.froala-editor .fr-trigger:after{border-top-color:#553982}.royal-theme.froala-editor .fr-trigger.active{color:#fff;background:#9365b8}.royal-theme.froala-editor .fr-trigger.active:after{border-top-color:#fff!important}.royal-theme.froala-editor .fr-dropdown .fr-trigger{width:calc(40px - 2px)}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu{background:#fff;border:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu li.active a{background:#553982!important;color:#fff!important}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a{color:#553982}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu li a:hover{background:#553982!important;color:#fff!important}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li:hover>a,.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li.hover>a{background:#553982;color:#fff}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>ul{background:#fff;color:#553982;border:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div{background:#fff;color:#553982;border:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span>span{border:solid 1px #ccc}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span:hover>span,.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>li>div>span.hover>span{background:rgba(85,57,130,.3);border:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown .fr-dropdown-menu.fr-table>hr{border-top:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p{color:#553982}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn{color:#553982}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu p a.fr-bttn:hover{color:#9365b8}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active{outline:solid 1px #553982}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn.active:after{color:#fff}.royal-theme.froala-editor .fr-dropdown.fr-color-picker .fr-dropdown-menu .fr-color-bttn:hover:not(:focus):not(:active){outline:solid 1px #553982}.royal-theme.froala-editor .froala-popup{background:#fff}.royal-theme.froala-editor .froala-popup h4{color:#553982}.royal-theme.froala-editor .froala-popup h4 i{color:#ccc}.royal-theme.froala-editor .froala-popup h4 i.fa-external-link{color:#553982}.royal-theme.froala-editor .froala-popup h4 i.fa-external-link:hover{color:#9365b8}.royal-theme.froala-editor .froala-popup h4 i:hover{color:#553982}.royal-theme.froala-editor .froala-popup button.fr-p-bttn{color:#fff}.royal-theme.froala-editor .froala-popup button.fr-p-bttn.f-ok{background:#553982;color:#fff}.royal-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink{background:#b8312f;color:#fff}.royal-theme.froala-editor .froala-popup button.fr-p-bttn.f-unlink:hover{background:#9365b8;color:#fff}.royal-theme.froala-editor .froala-popup button.fr-p-bttn:hover,.royal-theme.froala-editor .froala-popup button.fr-p-bttn:focus{background:#9365b8;color:#fff}.royal-theme.froala-editor .froala-popup div.f-popup-line.f-popup-toolbar{background:#fff}.royal-theme.froala-editor .froala-popup div.f-popup-line label{color:#553982}.royal-theme.froala-editor .froala-popup div.f-popup-line input[type=text]{border:solid 1px #ccc}.royal-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:focus{border:solid 1px #2969b0}.royal-theme.froala-editor .froala-popup div.f-popup-line input[type=text]:disabled{background:#fff;color:#999}.royal-theme.froala-editor .froala-popup div.f-popup-line textarea{border:solid 1px #ccc}.royal-theme.froala-editor .froala-popup div.f-popup-line textarea:focus{border:solid 1px #2969b0}.royal-theme.froala-editor .froala-popup.froala-image-editor-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc}.royal-theme.froala-editor .froala-popup.froala-video-popup p.or{color:#553982}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload{color:#553982;border:dashed 2px #ccc}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload:hover{border:dashed 2px #353535}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line.drop-upload div.f-upload.f-hover{border:dashed 2px #61bd6d}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse{background:#2969b0;color:#fff}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line button.f-browse:hover{background:#9365b8;color:#fff}.royal-theme.froala-editor .froala-popup.froala-image-popup div.f-popup-line+div.f-popup-line{border-top:solid 1px #ccc}.royal-theme.froala-editor .froala-popup.froala-image-popup p.f-progress{background-color:#61bd6d}.royal-theme.froala-editor .froala-popup.froala-image-popup p.f-progress span{background-color:#61bd6d;color:#fff}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links{background:#2969b0;color:#fff}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line .f-browse-links:hover{background:#9365b8;color:#fff}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul{background:#fff;border:solid 1px #553982}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li{color:#553982}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li+li{border-top:solid 1px #553982}.royal-theme.froala-editor .froala-popup.froala-link-popup div.f-popup-line ul li:hover{background:#553982;color:#fff}.royal-theme.froala-modal .f-modal-wrapper{background:#fff;border:solid 1px #553982;border-top:solid 5px #553982}.royal-theme.froala-modal .f-modal-wrapper h4{color:#553982}.royal-theme.froala-modal .f-modal-wrapper h4 i{color:#ccc}.royal-theme.froala-modal .f-modal-wrapper h4 i:hover{color:#553982}.royal-theme.froala-modal .f-modal-wrapper div.f-image-list div.f-empty{background:#ccc}.royal-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img{background:#b8312f;color:#fff}.royal-theme.froala-modal .f-modal-wrapper div.f-image-list div .f-delete-img:hover{background:#9365b8;color:#fff}.royal-theme.froala-modal .f-modal-wrapper div.f-image-list:not(.f-touch) div:hover .f-delete-img:hover{background:#9365b8;color:#fff}.froala-overlay{background:#000}"; (require("./../../node_modules/cssify"))(css); module.exports = css;
},{"./../../node_modules/cssify":9}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
/* Riot v2.1.0, @license MIT, (c) 2015 Muut Inc. + contributors */

;(function(window) {
  // 'use strict' does not allow us to override the events properties https://github.com/muut/riotjs/blob/dev/lib/tag/update.js#L7-L10
  // it leads to the following error on firefox "setting a property that has only a getter"
  //'use strict'


  var riot = { version: 'v2.1.0', settings: {} }


riot.observable = function(el) {

  el = el || {}

  var callbacks = {},
      _id = 0

  el.on = function(events, fn) {
    if (typeof fn == 'function') {
      fn._id = typeof fn._id == 'undefined' ? _id++ : fn._id

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
            if (cb._id == fn._id) { arr.splice(i, 1); i-- }
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
  var registeredMixins = {}
  return function(name, mixin) {
    if (!mixin) return registeredMixins[name]
      else registeredMixins[name] = mixin
  }
})()

;(function(riot, evt, window) {

  // browsers only
  if (!window) return

  var loc = window.location,
      fns = riot.observable(),
      win = window,
      started = false,
      current

  function hash() {
    return loc.href.split('#')[1] || ''
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
    if (!started) return
    win.removeEventListener ? win.removeEventListener(evt, emit, false) : win.detachEvent('on' + evt, emit)
    fns.off('*')
    started = false
  }

  r.start = function () {
    if (started) return
    win.addEventListener ? win.addEventListener(evt, emit, false) : win.attachEvent('on' + evt, emit)
    started = true
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


var brackets = (function(orig, s, b) {
  return function(x) {

    // make sure we use the current setting
    s = riot.settings.brackets || orig
    if (b != s) b = s.split(' ')

    // if regexp given, rewrite it with current brackets (only if differ from default)
    return x && x.test
      ? s == orig
        ? x : RegExp(x.source
                      .replace(/\{/g, b[0].replace(/(?=.)/g, '\\'))
                      .replace(/\}/g, b[1].replace(/(?=.)/g, '\\')),
                    x.global ? 'g' : '')

      // else, get specific bracket
      : b[x]

  }
})('{ }')


var tmpl = (function() {

  var cache = {},
      reVars = /(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi
              // [ 1               ][ 2  ][ 3 ][ 4                                                                                  ][ 5       ]
              // find variable names:
              // 1. skip quoted strings and regexps: "a b", 'a b', 'a \'b\'', /a b/
              // 2. skip object properties: .name
              // 3. skip object literals: name:
              // 4. skip javascript keywords
              // 5. match var name

  // build a template (or get it from cache), render with data
  return function(str, data) {
    return str && (cache[str] = cache[str] || tmpl(str))(data)
  }


  // create a template instance

  function tmpl(s, p) {

    // default template string to {}
    s = (s || (brackets(0) + brackets(1)))

      // temporarily convert \{ and \} to a non-character
      .replace(brackets(/\\{/g), '\uFFF0')
      .replace(brackets(/\\}/g), '\uFFF1')

    // split string to expression and non-expresion parts
    p = split(s, extract(s, brackets(/{/), brackets(/}/)))

    return new Function('d', 'return ' + (

      // is it a single expression or a template? i.e. {x} or <b>{x}</b>
      !p[0] && !p[2] && !p[3]

        // if expression, evaluate it
        ? expr(p[1])

        // if template, evaluate all expressions in it
        : '[' + p.map(function(s, i) {

            // is it an expression or a string (every second part is an expression)
          return i % 2

              // evaluate the expressions
              ? expr(s, true)

              // process string parts of the template:
              : '"' + s

                  // preserve new lines
                  .replace(/\n/g, '\\n')

                  // escape quotes
                  .replace(/"/g, '\\"')

                + '"'

        }).join(',') + '].join("")'
      )

      // bring escaped { and } back
      .replace(/\uFFF0/g, brackets(0))
      .replace(/\uFFF1/g, brackets(1))

    + ';')

  }


  // parse { ... } expression

  function expr(s, n) {
    s = s

      // convert new lines to spaces
      .replace(/\n/g, ' ')

      // trim whitespace, brackets, strip comments
      .replace(brackets(/^[{ ]+|[ }]+$|\/\*.+?\*\//g), '')

    // is it an object literal? i.e. { key : value }
    return /^\s*[\w- "']+ *:/.test(s)

      // if object literal, return trueish keys
      // e.g.: { show: isOpen(), done: item.done } -> "show done"
      ? '[' +

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

              }).join('')

        + '].join(" ").trim()'

      // if js expression, evaluate as javascript
      : wrap(s, n)

  }


  // execute js w/o breaking on errors or undefined vars

  function wrap(s, nonull) {
    s = s.trim()
    return !s ? '' : '(function(v){try{v='

        // prefix vars (name => data.name)
        + (s.replace(reVars, function(s, _, v) { return v ? '(d.'+v+'===undefined?'+(typeof window == 'undefined' ? 'global.' : 'window.')+v+':d.'+v+')' : s })

          // break the expression if its empty (resulting in undefined value)
          || 'x')
      + '}catch(e){'
      + '}finally{return '

        // default to empty string for falsy values except zero
        + (nonull === true ? '!v&&v!==0?"":v' : 'v')

      + '}}).call(d)'
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

    // push the remaining part
    return parts.concat(str)
  }


  // match strings between opening and closing regexp, skipping any inner/nested matches

  function extract(str, open, close) {

    var start,
        level = 0,
        matches = [],
        re = new RegExp('('+open.source+')|('+close.source+')', 'g')

    str.replace(re, function(_, open, close, pos) {

      // if outer inner bracket, mark position
      if(!level && open) start = pos

      // in(de)crease bracket level
      level += open ? 1 : -1

      // if outer closing bracket, grab the match
      if(!level && close != null) matches.push(str.slice(start, pos+close.length))

    })

    return matches
  }

})()

// { key, i in items} -> { key, i, items }
function loopKeys(expr) {
  var ret = { val: expr },
      els = expr.split(/\s+in\s+/)

  if (els[1]) {
    ret.val = brackets(0) + els[1]
    els = els[0].slice(brackets(0).length).trim().split(/,\s*/)
    ret.key = els[0]
    ret.pos = els[1]
  }

  return ret
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

  var template = dom.outerHTML,
      prev = dom.previousSibling,
      root = dom.parentNode,
      rendered = [],
      tags = [],
      checksum

  expr = loopKeys(expr)

  function add(pos, item, tag) {
    rendered.splice(pos, 0, item)
    tags.splice(pos, 0, tag)
  }

  // clean template code
  parent.one('update', function() {
    root.removeChild(dom)

  }).one('premount', function() {
    if (root.stub) root = parent.root

  }).on('update', function() {

    var items = tmpl(expr.val, parent)
    if (!items) return

    // object loop. any changes cause full redraw
    if (!Array.isArray(items)) {
      var testsum = JSON.stringify(items)

      if (testsum == checksum) return
      checksum = testsum

      // clear old items
      each(tags, function(tag) { tag.unmount() })
      rendered = []
      tags = []

      items = Object.keys(items).map(function(key) {
        return mkitem(expr, key, items[key])
      })

    }

    // unmount redundant
    each(rendered, function(item) {
      if (item instanceof Object) {
        // skip existing items
        if (items.indexOf(item) > -1) {
          return
        }
      } else {
        // find all non-objects
        var newItems = arrFindEquals(items, item),
            oldItems = arrFindEquals(rendered, item)

        // if more or equal amount, no need to remove
        if (newItems.length >= oldItems.length) {
          return
        }
      }
      var pos = rendered.indexOf(item),
          tag = tags[pos]

      if (tag) {
        tag.unmount()
        rendered.splice(pos, 1)
        tags.splice(pos, 1)
        // to let "each" know that this item is removed
        return false
      }

    })

    // mount new / reorder
    var prevBase = [].indexOf.call(root.childNodes, prev) + 1
    each(items, function(item, i) {

      // start index search from position based on the current i
      var pos = items.indexOf(item, i),
          oldPos = rendered.indexOf(item, i)

      // if not found, search backwards from current i position
      pos < 0 && (pos = items.lastIndexOf(item, i))
      oldPos < 0 && (oldPos = rendered.lastIndexOf(item, i))

      if (!(item instanceof Object)) {
        // find all non-objects
        var newItems = arrFindEquals(items, item),
            oldItems = arrFindEquals(rendered, item)

        // if more, should mount one new
        if (newItems.length > oldItems.length) {
          oldPos = -1
        }
      }

      // mount new
      var nodes = root.childNodes
      if (oldPos < 0) {
        if (!checksum && expr.key) var _item = mkitem(expr, item, pos)

        var tag = new Tag({ tmpl: template }, {
          before: nodes[prevBase + pos],
          parent: parent,
          root: root,
          item: _item || item
        })

        tag.mount()

        add(pos, item, tag)
        return true
      }

      // change pos value
      if (expr.pos && tags[oldPos][expr.pos] != pos) {
        tags[oldPos].one('update', function(item) {
          item[expr.pos] = pos
        })
        tags[oldPos].update()
      }

      // reorder
      if (pos != oldPos) {
        root.insertBefore(nodes[prevBase + oldPos], nodes[prevBase + (pos > oldPos ? pos + 1 : pos)])
        return add(pos, rendered.splice(oldPos, 1)[0], tags.splice(oldPos, 1)[0])
      }

    })

    rendered = items.slice()

  }).one('updated', function() {
    walk(root, function(dom) {
      each(dom.attributes, function(attr) {
        if (/^(name|id)$/.test(attr.name)) parent[attr.value] = dom
      })
    })
  })

}


function parseNamedElements(root, parent, childTags) {

  walk(root, function(dom) {
    if (dom.nodeType == 1) {
      dom.isLoop = 0
      if(dom.parentNode && dom.parentNode.isLoop) dom.isLoop = 1
      if(dom.getAttribute('each')) dom.isLoop = 1
      // custom child tag
      var child = getTag(dom)

      if (child && !dom.isLoop) {
        var tag = new Tag(child, { root: dom, parent: parent }, dom.innerHTML),
            namedTag = dom.getAttribute('name'),
            tagName = namedTag && namedTag.indexOf(brackets(0)) < 0 ? namedTag : child.name,
            ptag = parent,
            cachedTag

        while(!getTag(ptag.root)) {
          if(!ptag.parent) break
          ptag = ptag.parent
        }
        // fix for the parent attribute in the looped elements
        tag.parent = ptag

        cachedTag = ptag.tags[tagName]

        // if there are multiple children tags having the same name
        if (cachedTag) {
          // if the parent tags property is not yet an array
          // create it adding the first cached tag
          if (!Array.isArray(cachedTag))
            ptag.tags[tagName] = [cachedTag]
          // add the new nested tag to the array
          ptag.tags[tagName].push(tag)
        } else {
          ptag.tags[tagName] = tag
        }

        // empty the child node once we got its template
        // to avoid that its children get compiled multiple times
        dom.innerHTML = ''
        childTags.push(tag)
      }

      if(!dom.isLoop)
        each(dom.attributes, function(attr) {
          if (/^(name|id)$/.test(attr.name)) parent[attr.value] = dom
        })
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
      expressions = [],
      childTags = [],
      root = conf.root,
      item = conf.item,
      fn = impl.fn,
      tagName = root.tagName.toLowerCase(),
      attr = {},
      loopDom,
      TAG_ATTRIBUTES = /([\w\-]+)\s?=\s?['"]([^'"]+)["']/gim

  if (fn && root._tag) {
    root._tag.unmount(true)
  }

  if(impl.attrs) {
    var attrs = impl.attrs.match(TAG_ATTRIBUTES)

    each(attrs, function(a) {
      var kv = a.split(/\s?=\s?/)
      root.setAttribute(kv[0], kv[1].replace(/['"]/g, ''))
    })

  }
  // keep a reference to the tag just created
  // so we will be able to mount this tag multiple times
  root._tag = this

  // create a unique id to this tag
  // it could be handy to use it also to improve the virtual dom rendering speed
  this._id = fastAbs(~~(new Date().getTime() * Math.random()))

  extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item)

  // grab attributes
  each(root.attributes, function(el) {
    attr[el.name] = el.value
  })


  if (dom.innerHTML && !/select/.test(tagName) && !/tbody/.test(tagName) && !/tr/.test(tagName))
    // replace all the yield tags with the tag inner html
    dom.innerHTML = replaceYield(dom.innerHTML, innerHTML)


  // options
  function updateOpts() {
    each(Object.keys(attr), function(name) {
      opts[name] = tmpl(attr[name], parent || self)
    })
  }

  this.update = function(data, init) {
    extend(self, data, item)
    updateOpts()
    self.trigger('update', item)
    update(expressions, self, item)
    self.trigger('updated')
  }

  this.mixin = function() {
    each(arguments, function(mix) {
      mix = 'string' == typeof mix ? riot.mixin(mix) : mix
      each(Object.keys(mix), function(key) {
        // bind methods to self
        if ('init' != key)
          self[key] = 'function' == typeof mix[key] ? mix[key].bind(self) : mix[key]
      })
      // init method will be called automatically
      if (mix.init) mix.init.bind(self)()
    })
  }

  this.mount = function() {

    updateOpts()

    // initialiation
    fn && fn.call(self, opts)

    toggle(true)

    // parse layout after init. fn may calculate args for nested custom tags
    parseExpressions(dom, self, expressions)

    if (!self.parent) self.update()

    // internal use only, fixes #403
    self.trigger('premount')

    if (fn) {
      while (dom.firstChild) root.appendChild(dom.firstChild)

    } else {
      loopDom = dom.firstChild
      root.insertBefore(loopDom, conf.before || null) // null needed for IE8
    }

    if (root.stub) self.root = root = parent.root

    // if it's not a child tag we can trigger its mount event
    if (!self.parent) self.trigger('mount')
    // otherwise we need to wait that the parent event gets triggered
    else self.parent.one('mount', function() { self.trigger('mount') })
  }


  this.unmount = function(keepRootTag) {
    var el = fn ? root : loopDom,
        p = el.parentNode

    if (p) {

      if (parent) {
        // remove this tag from the parent tags object
        // if there are multiple nested tags with same name..
        // remove this element form the array
        if (Array.isArray(parent.tags[tagName])) {
          each(parent.tags[tagName], function(tag, i) {
            if (tag._id == self._id)
              parent.tags[tagName].splice(i, 1)
          })
        } else
          // otherwise just delete the tag instance
          parent.tags[tagName] = undefined
      } else {
        while (el.firstChild) el.removeChild(el.firstChild)
      }

      if (!keepRootTag)
        p.removeChild(el)

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
      parent[evt]('update', self.update)[evt]('unmount', self.unmount)
    }
  }

  // named elements available for fn
  parseNamedElements(dom, this, childTags)


}

function setEventHandler(name, handler, dom, tag, item) {

  dom[name] = function(e) {

    // cross browser event fix
    e = e || window.event
    e.which = e.which || e.charCode || e.keyCode
    e.target = e.target || e.srcElement
    e.currentTarget = dom
    e.item = item

    // prevent default behaviour (by default)
    if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
      e.preventDefault && e.preventDefault()
      e.returnValue = false
    }

    if (!e.preventUpdate) {
      var el = item ? tag.parent : tag
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

// item = currently looped item
function update(expressions, tag, item) {
    console.log("Update: ", expressions);

  each(expressions, function(expr, i) {

    var dom = expr.dom,
        attrName = expr.attr,
        value = tmpl(expr.expr, tag),
        parent = expr.dom.parentNode

    if (value == null) value = ''

    // leave out riot- prefixes from strings inside textarea
    if (parent && parent.tagName == 'TEXTAREA') value = value.replace(/riot-/g, '')

    // no change
    if (expr.value === value) return
    expr.value = value

    // text node
    if (!attrName) return dom.nodeValue = value.toString()

    // remove original attribute
    remAttr(dom, attrName)

    // event handler
    if (typeof value == 'function') {
      setEventHandler(attrName, value, dom, tag, item)

    // if- conditional
    } else if (attrName == 'if') {
      var stub = expr.stub

      // add to DOM
      if (value) {
        stub && insertTo(stub.parentNode, stub, dom)

      // remove from DOM
      } else {
        stub = expr.stub = stub || document.createTextNode('')
        insertTo(dom.parentNode, dom, stub)
      }

    // show / hide
    } else if (/^(show|hide)$/.test(attrName)) {
      if (attrName == 'hide') value = !value
      dom.style.display = value ? '' : 'none'

    // field value
    } else if (attrName == 'value') {
        console.log("Setting dom value!");
      dom.value = value
     if (typeof value != 'object') dom.setAttribute(attrName, value)

    // <img src="{ expr }">
    } else if (attrName.slice(0, 5) == 'riot-') {
      attrName = attrName.slice(5)
      value ? dom.setAttribute(attrName, value) : remAttr(dom, attrName)

    } else {
      if (expr.bool) {
        dom[attrName] = value
        if (!value) return
        value = attrName
      }

      if (typeof value != 'object') dom.setAttribute(attrName, value)

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

function remAttr(dom, name) {
  dom.removeAttribute(name)
}

function fastAbs(nr) {
  return (nr ^ (nr >> 31)) - (nr >> 31)
}

// max 2 from objects allowed
function extend(obj, from, from2) {
  from && each(Object.keys(from), function(key) {
    obj[key] = from[key]
  })
  return from2 ? extend(obj, from2) : obj
}

function checkIE() {
  if (window) {
    var ua = navigator.userAgent
    var msie = ua.indexOf('MSIE ')
    if (msie > 0) {
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }
    else {
      return 0
    }
  }
}

function optionInnerHTML(el, html) {
  var opt = document.createElement('option'),
      valRegx = /value=[\"'](.+?)[\"']/,
      selRegx = /selected=[\"'](.+?)[\"']/,
      valuesMatch = html.match(valRegx),
      selectedMatch = html.match(selRegx)

  opt.innerHTML = html

  if (valuesMatch) {
    opt.value = valuesMatch[1]
  }

  if (selectedMatch) {
    opt.setAttribute('riot-selected', selectedMatch[1])
  }

  el.appendChild(opt)
}

function tbodyInnerHTML(el, html, tagName) {
  var div = document.createElement('div')
  div.innerHTML = '<table>' + html + '</table>'

  if (/td|th/.test(tagName)) {
    el.appendChild(div.firstChild.firstChild.firstChild.firstChild)
  } else {
    el.appendChild(div.firstChild.firstChild.firstChild)
  }
}

function mkdom(template) {
  var tagName = template.trim().slice(1, 3).toLowerCase(),
      rootTag = /td|th/.test(tagName) ? 'tr' : tagName == 'tr' ? 'tbody' : 'div',
      el = mkEl(rootTag)

  el.stub = true

  if (tagName === 'op' && ieVersion && ieVersion < 10) {
    optionInnerHTML(el, template)
  } else if ((rootTag === 'tbody' || rootTag === 'tr') && ieVersion && ieVersion < 10) {
    tbodyInnerHTML(el, template, tagName)
  } else
    el.innerHTML = template

  return el
}

function walk(dom, fn) {
  if (dom) {
    if (fn(dom) === false) walk(dom.nextSibling, fn)
    else {
      dom = dom.firstChild

      while (dom) {
        walk(dom, fn)
        dom = dom.nextSibling
      }
    }
  }
}

function mkEl(name) {
  return document.createElement(name)
}

function replaceYield (tmpl, innerHTML) {
  return tmpl.replace(/<(yield)\/?>(<\/\1>)?/gim, innerHTML || '')
}

function $$(selector, ctx) {
  ctx = ctx || document
  return ctx.querySelectorAll(selector)
}

function arrDiff(arr1, arr2) {
  return arr1.filter(function(el) {
    return arr2.indexOf(el) < 0
  })
}

function arrFindEquals(arr, el) {
  return arr.filter(function (_el) {
    return _el === el
  })
}

function inherit(parent) {
  function Child() {}
  Child.prototype = parent
  return new Child()
}
/**
 *
 * Hacks needed for the old internet explorer versions [lower than IE10]
 *
 */

var ieVersion = checkIE()

function checkIE() {
  if (window) {
    var ua = navigator.userAgent
    var msie = ua.indexOf('MSIE ')
    if (msie > 0) {
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }
    else {
      return 0
    }
  }
}

function tbodyInnerHTML(el, html, tagName) {
  var div = mkEl('div'),
      loops = /td|th/.test(tagName) ? 3 : 2,
      child

  div.innerHTML = '<table>' + html + '</table>'
  child = div.firstChild

  while(loops--) {
    child = child.firstChild
  }

  el.appendChild(child)

}

function optionInnerHTML(el, html) {
  var opt = mkEl('option'),
      valRegx = /value=[\"'](.+?)[\"']/,
      selRegx = /selected=[\"'](.+?)[\"']/,
      valuesMatch = html.match(valRegx),
      selectedMatch = html.match(selRegx)

  opt.innerHTML = html

  if (valuesMatch) {
    opt.value = valuesMatch[1]
  }

  if (selectedMatch) {
    opt.setAttribute('riot-selected', selectedMatch[1])
  }

  el.appendChild(opt)
}

/*
 Virtual dom is an array of custom tags on the document.
 Updates and unmounts propagate downwards from parent to children.
*/

var virtualDom = [],
    tagImpl = {},
    styleNode


function getTag(dom) {
  return tagImpl[dom.getAttribute('riot-tag') || dom.tagName.toLowerCase()]
}

function injectStyle(css) {

  styleNode = styleNode || mkEl('style')

  if (!document.head) return

  if(styleNode.styleSheet)
    styleNode.styleSheet.cssText += css
  else
    styleNode.innerHTML += css

  if (!styleNode._rendered)
    if (styleNode.styleSheet)
      document.body.appendChild(styleNode)
    else
      document.head.appendChild(styleNode)

  styleNode._rendered = true

}

function mountTo(root, tagName, opts) {
  var tag = tagImpl[tagName],
      innerHTML = root.innerHTML

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
  if (typeof attrs == 'function') {
    fn = attrs
    if(/^[\w\-]+\s?=/.test(css)) {attrs = css; css = ''} else attrs = ''
  }
  if (typeof css == 'function') fn = css
  else if (css) injectStyle(css)
  tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
  return name
}

riot.mount = function(selector, tagName, opts) {

  var el,
      selctAllTags = function() {
        var keys = Object.keys(tagImpl)
        var list = keys.join(', ')
        each(keys, function(t) {
          list += ', *[riot-tag="'+ t.trim() + '"]'
        })
        return list
      },
      allTags,
      tags = []

  if (typeof tagName == 'object') { opts = tagName; tagName = 0 }

  // crawl the DOM to find the tag
  if(typeof selector == 'string') {
    if (selector == '*') {
      // select all the tags registered
      // and also the tags found with the riot-tag attribute set
      selector = allTags = selctAllTags()
    } else {
      selector.split(',').map(function(t) {
        selector += ', *[riot-tag="'+ t.trim() + '"]'
      })

    }
    // or just the ones named like the selector
    el = $$(selector)
  }
  // probably you have passed already a tag or a NodeList
  else
    el = selector

  // select all the registered and mount them inside their root elements
  if (tagName == '*') {
    // get all custom tags
    tagName = allTags || selctAllTags()
    // if the root el it's just a single tag
    if (el.tagName) {
      el = $$(tagName, el)
    } else {
      var nodeList = []
      // select all the children for all the different root elements
      each(el, function(tag) {
        nodeList = $$(tagName, tag)
      })
      el = nodeList
    }
    // get rid of the tagName
    tagName = 0
  }

  function push(root) {
    if(tagName && !root.getAttribute('riot-tag')) root.setAttribute('riot-tag', tagName)

    var name = tagName || root.getAttribute('riot-tag') || root.tagName.toLowerCase(),
        tag = mountTo(root, name, opts)

    if (tag) tags.push(tag)
  }

  // DOM node
  if (el.tagName)
    push(selector)
  // selector or NodeList
  else
    each(el, push)

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
  if (typeof exports === 'object')
    module.exports = riot
  else if (typeof define === 'function' && define.amd)
    define(function() { return riot })
  else
    window.riot = riot

})(typeof window != 'undefined' ? window : undefined);

},{}],11:[function(require,module,exports){
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

        this.init = function() {
            require('./lib/froala_editor.min');
            require('./lib/froala_editor.min.css');

            // Plugins
            require('./lib/plugins/lists.min');
            require('./lib/plugins/video.min');

            // Themes
            require('./lib/themes/dark.min.css');
            require('./lib/themes/gray.min.css');
            require('./lib/themes/red.min.css');
            require('./lib/themes/royal.min.css');

            // Options
            var options = {
                inlineMode : opts['inline-mode'] || 'true',
                theme  : opts['theme'] || 'dark',
                placeholder : opts['placeholder'] || 'Type something',
                paragraphy: opts['paragraphy'] || 'true'
            }

            options.inlineMode = parseBool(options.inlineMode);
            options.paragraphy = parseBool(options.paragraphy);

            if (opts['shortcuts-available']) {
                options.shortcutsAvailable  = opts['shortcuts-available'].split(/\s+/);
            }
            if (opts['buttons']) {
                options.buttons = opts['buttons'].split(/\s+/);
            }
            if (opts['format-tags']) {
                options.formatTags = opts['format-tags'].split(/\s+/);
            }

            if (opts['block-tags']) {
                options.blockTags = opts['block-tags'];
            }

            if (opts['width']) {
                options.width = opts['width'];
            }
            if (opts['height']) {
                options.height = opts['height'];
            }

            if (opts['link-classes']) {
                options.linkClasses = opts['link-classes'];
            }

            if (opts['default-image-width']) {
                options.defaultImageWidth = opts['default-image-width'];
            }

            $(this.root).find('#riot-froala-edit').on('editable.initialized', function(e, editor) {
                self.editor = editor;
                self.initialized = true;

                if (opts['default-link-class']) {
                    // Set a default class value and hide the combo box
                    editor.$link_wrapper.find('input#f-luc-1').data('class', opts['default-link-class']);
                    editor.$link_wrapper.find('input#f-luc-1').parent().addClass('fr-hidden');
                }
                if (opts['value']) {
                    editor.setHTML(opts['value']);
                }
            });

            $(this.root).find('#riot-froala-edit').editable(options);

            $(this.root).find('#riot-froala-edit').on('editable.contentChanged', function (e, editor) {
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

            $(this.root).find('#riot-froala-edit').on('editable.focus', function (e, editor) {
                self.settingHTML = false;
            });
        }

        this.getHTML = function() {
            if (self.editor) {
                return self.editor.getHTML();
            } else {
                return null;
            }
        }

        this.setHTML = function(string) {
            if (self.editor) {
                self.settingHTML = true;
                self.editor.setHTML(string);
            }
        }

        this.setBlockTags = function(blockTags) {
            opts['block-tags'] =  blockTags;
        }
        this.setLinkClasses = function(linkClasses) {
            opts['link-classes'] = linkClasses;
        }
    }
); 


},{"./lib/froala_editor.min":2,"./lib/froala_editor.min.css":1,"./lib/plugins/lists.min":3,"./lib/plugins/video.min":4,"./lib/themes/dark.min.css":5,"./lib/themes/gray.min.css":6,"./lib/themes/red.min.css":7,"./lib/themes/royal.min.css":8}],12:[function(require,module,exports){
(function (global){
'use strict';
if (!global.riot) {
    global.riot = require('riot');
}

var riotFroala = require('./riot-froala');

exports = module.exports = riotFroala;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./riot-froala":11,"riot":10}]},{},[12]);
