function parseBool(string) {
    return (string == "true");
}

riot.tag('riot-froala',' \
     <div id="riot-froala-edit"></div> \
 ',
    function(opts) {
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

            console.log("Options: ", options);

            $('#riot-froala-edit').editable(options);

            $('#riot-froala-edit').on('editable.contentChanged', function (e, editor) {
                if (opts['content-changed']) {
                    opts['content-changed'](e, editor);
                }
            });

        }

        this.getHTML = function() {
            return $('#riot-froala-edit').editable('getHTML');
        }

        this.setBlockTags = function(blockTags) {
            opts['block-tags'] =  blockTags;
        }

    }
); 

