require('riot');
riot.tag('riot-froala',' \
         <span>{message}</span> \
 ',
    function(opts) {
        this.message = "Hello world!!";
    }
);

