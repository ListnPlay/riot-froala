function parseBool(string) {
    return (string == "true");
}

riot.tag('riot-froala',' \
     <div id="riot-froala-edit"></div> \
     <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css"> \
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
                placeholder : opts['placeholder'] || 'Type something'
            }

            options.inlineMode = parseBool(options.inlineMode);


            if (opts['shortcuts-available']) {
                options.shortcutsAvailable  = opts['shortcuts-available'].split(",");
            }
            if (opts['buttons']) {
                options.buttons = opts['buttons'].replace(/\s/g, "").split(',');
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
    }
); 

