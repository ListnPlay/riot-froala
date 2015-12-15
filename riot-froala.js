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
                options.linkClasses = opts['link-classes'];
            }

            if (opts['default-image-width']) {
                options.imageDefaultWidth = opts['default-image-width'];
            }

            if (opts['use-relative-image-width'] && opts['use-relative-image-width'].toLowerCase() == 'true') {
                useRelativeImageWidth = true;
            }

            $(this.root).find('#riot-froala-edit').on('froalaEditor.initialized', function(e, editor) {
                self.editor = editor;
                self.initialized = true;

                if (opts['default-link-class']) {
                    // Set a default class value and hide the combo box
                    //@todo: editor.$link_wrapper.find('input#f-luc-1').data('class', opts['default-link-class']);
                    //@todo: editor.$link_wrapper.find('input#f-luc-1').parent().addClass('fr-hidden');
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

            $(this.root).find('#riot-froala-edit').on('froalaEditor.focus', function (e, editor) {
                self.settingHTML = false;
            });
        }

        this.getHTML = function() {
            if (self.editor) {
                var editorHTML = self.editor.html.get();
                if (useRelativeImageWidth) {
                    // parse html into an actual element
                    var containerWidth = $(this.root).find('#riot-froala-edit .froala-view').width()

                    var virtualFroalaContentDiv = $('<div />').html(editorHTML);
                    var virtualFroalaContentImageElements = virtualFroalaContentDiv.find('img');

                    // parse images and replace absolute width with relative
                    virtualFroalaContentImageElements.each(function() {
                        var absoluteWidthValue = $(this).attr('width');

                        if (typeof absoluteWidthValue !== typeof undefined && absoluteWidthValue !== false) {

                            if (!absoluteWidthValue.endsWith('%')) {
                                var relativeWidthValue = Math.round((absoluteWidthValue / containerWidth) * 100) + '%';
                                $(this).attr('width', relativeWidthValue);
                            }
                        }
                    });

                    editorHTML = virtualFroalaContentDiv.html();
                }
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
    }
); 

