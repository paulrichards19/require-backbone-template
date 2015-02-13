require.config({
    baseUrl: 'js/',
    paths: {

        almond: 'lib/almond',
        jquery:         'lib/jquery-1.11.2.min',
        backbone:       'lib/backbone-min',
        underscore:     'lib/lodash.min',
        domReady:       'lib/domReady',
        text:           'lib/text',

        bootstrap:        'lib/bootstrap.min'

    },

    shim : {
        "backbone"      : {
            deps : ["jquery", "underscore"],
            init : function($)
            {
                var Backbone = this.Backbone.noConflict();
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
        },
        "bootstrap" : { "deps" :['jquery'] }
    },
    deps: ['bootstrap','app/App']

});