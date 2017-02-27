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
                toolbarInline : opts['inline-mode'] || opts['inlineMode'] || 'true',
                theme  : opts['theme'] || 'dark',
                placeholderText : opts['placeholder'] || 'Type something',
                enter: opts['paragraphy'] || 'true'
            }

            options.toolbarInline = parseBool(options.toolbarInline);
            options.enter = parseBool(options.enter);

            if (opts['key']) {
                options.key  = opts['key']
            }

            if (opts['shortcuts-available'] || opts['shortcutsAvailable']) {
                options.shortcutsEnabled  = (opts['shortcuts-available'] || opts['shortcutsAvailable']).split(/\s+/);
            }
            if (opts['buttons']) {
                options.toolbarButtonsXS = options.toolbarButtonsSM = options.toolbarButtonsMD = options.toolbarButtons = opts['buttons'].split(/\s+/);
            }
            if (opts['block-tags'] || opts['blockTags']) {
                options.paragraphFormat = (opts['block-tags'] || opts['blockTags']);
            }

            if (opts['width']) {
                options.width = opts['width'];
            }
            if (opts['height']) {
                options.height = opts['height'];
            }

            if (opts['link-classes'] || opts['linkClasses']) {
                options.linkStyles = (opts['link-classes'] || opts['linkClasses']);
            }

            if (opts['default-image-width'] || opts['defaultImageWidth']) {
                if ((opts['default-image-width'] || opts['defaultImageWidth']) == '0') {
                    options.imageDefaultWidth = 0;  // must be integer, '0' displays all images as 0px, instead of using the actual image width
                }
                else {
                    options.imageDefaultWidth = (opts['default-image-width'] || opts['defaultImageWidth']);
                }
            }

            if (opts['image-upload-to-s3-details'] || opts['imageUploadToS3Details']) {
                options.imageUploadToS3 = (opts['image-upload-to-s3-details'] || opts['imageUploadToS3Details']);
            }

            if ((opts['use-relative-image-width'] || opts['useRelativeImageWidth']) && (opts['use-relative-image-width'] || opts['useRelativeImageWidth']).toLowerCase() == 'true') {
                useRelativeImageWidth = true;
            }

            $(this.root).find('#riot-froala-edit').on('froalaEditor.initialized', function(e, editor) {
                self.editor = editor;
                self.initialized = true;

                if (opts['default-link-class'] || opts['defaultLinkClass']) {
                    // todo: hide style selection button in the link popup

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
                if (opts['content-changed'] || opts['contentChanged']) {
                    (opts['content-changed'] || opts['contentChanged'])(e, editor);
                }
                if (!self.settingHTML && (opts['content-input'] || opts['contentInput'])) {
                    (opts['content-input'] || opts['contentInput'])(e, editor);
                }
                self.settingHTML = false;
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.afterRemoveImage', function (e, editor) {
                if (opts['content-changed'] || opts['contentChanged']) {
                    (opts['content-changed'] || opts['contentChanged'])(e, editor);
                }
                if (opts['content-input'] || opts['contentInput']) {
                    (opts['content-input'] || opts['contentInput'])(e, editor);
                }
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.image.resizeEnd', function (e, editor) {
                if (opts['content-changed'] || opts['contentChanged']) {
                    (opts['content-changed'] || opts['contentChanged'])(e, editor);
                }
                if (opts['content-input'] || opts['contentInput']) {
                    (opts['content-input'] || opts['contentInput'])(e, editor);
                }
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.focus', function (e, editor) {
                self.settingHTML = false;
            });

            $(this.root).find('#riot-froala-edit').on('froalaEditor.image.beforeUpload', function (e, editor, images) {
                if (opts['before-upload-image'] || opts['beforeUploadImage']) {
                    (opts['before-upload-image'] || opts['beforeUploadImage'])(e, editor, images);
                }
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
                        var absoluteWidthValue = $(this).css('width');

                        if (typeof absoluteWidthValue !== typeof undefined && absoluteWidthValue !== false && absoluteWidthValue !== 0 && absoluteWidthValue !== '0px') {

                            if (!absoluteWidthValue.toString().endsWith('%')) {

                                absoluteWidthValue = absoluteWidthValue.replace(/px$/, '');

                                var relativeWidthValue = Math.round((absoluteWidthValue / containerWidth) * 100) + '%';
                                $(this).width(relativeWidthValue);
                            }
                        }
                    });
                }

                if (opts['default-link-class'] || opts['defaultLinkClass']) {
                    var virtualFroalaContentHrefElements = virtualFroalaContentDiv.find('a');

                    // parse anchor tags and add default style
                    virtualFroalaContentHrefElements.each(function() {
                        $(this).addClass(opts['default-link-class'] || opts['defaultLinkClass']);
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

        this.focusOnEditor = function() {
            if (self.editor) {
                self.editor.events.focus();
            }
        }

        this.setImageUploadToS3Details = function(imageUploadToS3Details) {

            /*
            -- required structure for parameter:
            {
                 bucket: 'your_bucket_name',
                 region: 's3',  // or your bucket region
                 keyStart: 'prefix_to_assign_to_uploaded_files/',
                 callback: function (url, key) {
                     // The URL and Key returned from Amazon.
                     console.log ('*** url = ', url);
                     console.log ('*** key = ', key);
                 },
                 params: {
                     acl: 'public-read',    // or your required ACL
                     AWSAccessKeyId: 'your_AWS_Access_Key_ID'
                     policy: s3Policy,   // see explanation further down
                     signature: s3Signature   // see explanation further down
                 }
             }

             -- the last two parameters should be constructed in the backend, which can be done like so:
             function generateS3PolicySignatureForFroala() {
                 let expiration = moment.utc(moment().add(2, 'days')).toISOString();    // set expiration 2 days ahead

                 // build policy object, according to AWS documentation
                 let s3Policy = {
                     "expiration": expiration,
                     "conditions": [
                         ["starts-with", "$key", consts.AWS_EDITOR_IMAGES_PREFIX],
                         {"bucket": envUtil.get('AWS_IMAGES_BUCKET_NAME')},
                         {"acl": "public-read"},
                         ["starts-with", "$Content-Type", ''],
                         {"success_action_status": "201"},
                         {"x-requested-with": "xhr"}
                     ]
                 };

                 // stringify and encode the policy
                 let stringPolicy = JSON.stringify(s3Policy);
                 let base64Policy = Buffer(stringPolicy, "utf-8").toString("base64");

                 // sign the base64 encoded policy
                 let signature = crypto.createHmac("sha1", envUtil.get('AWS_SECRET_KEY'))
                     .update(new Buffer(base64Policy, "utf-8"))
                     .digest("base64");

                 let s3Credentials = {
                     s3Policy: base64Policy,
                     s3Signature: signature
                 };
             }
             */

            opts['image-upload-to-s3-details'] = imageUploadToS3Details;
        }
    }
); 

