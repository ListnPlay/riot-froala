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
                if (opts['default-image-width'] == '0') {
                    options.imageDefaultWidth = 0;  // must be integer, '0' displays all images as 0px, instead of using the actual image width
                }
                else {
                    options.imageDefaultWidth = opts['default-image-width'];
                }
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
                    var containerWidth = $(this.root).find('#riot-froala-edit .fr-element.fr-view').width()

                    var virtualFroalaContentImageElements = virtualFroalaContentDiv.find('img');

                    // parse images and replace absolute width with relative
                    virtualFroalaContentImageElements.each(function () {
                        var absoluteWidthValue = $(this).width();

                        if (typeof absoluteWidthValue !== typeof undefined && absoluteWidthValue !== false && absoluteWidthValue !== 0) {

                            if (!absoluteWidthValue.toString().endsWith('%')) {
                                var relativeWidthValue = Math.round((absoluteWidthValue / containerWidth) * 100) + '%';
                                $(this).width(relativeWidthValue);
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

