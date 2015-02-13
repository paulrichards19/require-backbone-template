require.config({
    baseUrl: 'js/',
    paths: {

        jquery:         'lib/jquery-1.11.2.min',
        backbone:       'lib/backbone-min',
        underscore:     'lib/lodash.min',
        domReady:       'lib/domReady',
        text:           'lib/text'

    },

    shim : {
        "backbone"      : {
            deps : ["jquery", "underscore"],
            init : function($)
            {
                var Backbone = this.Backbone.noConflict();
                // manually include jQuery because it is not attached to the
                // window object
                Backbone.$ = $;
                return Backbone;
            }
        },
        "underscore"    : {
            exports : "_",
            init    : function()
            {
                return this._.noConflict();
            }
        }
    }

});

require(["domReady!", "jquery",'backbone','underscore'], function(document, $)
{
    console.log('ready');
});