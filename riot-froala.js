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

