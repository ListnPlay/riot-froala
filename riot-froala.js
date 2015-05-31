require('./lib/froala_editor.min');

riot.tag('riot-froala',' \
     <div id="riot-froala-edit"></div> \
     <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/froala-editor/1.2.7/css/froala_editor.min.css"> \
     <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css"> \
 ',
    function(opts) {
        this.on('mount', function() {
            $('#riot-froala-edit').editable();
        });
    }
);

