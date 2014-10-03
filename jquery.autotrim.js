/*
 * jQuery Autotrim Plugin for auto-trimming input content.
 *
 * @author: Bogdan Burim
 * @requires jQuery v1.7 or later
 *
 */
;(function($) {
"use strict";

    $.fn.autotrim = function(cmd) {
        function trim() {
            $(this).val($.trim($(this).val()));
        };
        var that   = this;
        var methods = {
            init : function() {
                that.bind('keyup.autotrim', trim);
                that.trigger('keyup.autotrim');
            },
            destroy : function() {
                that.unbind('keyup.autotrim');
            }
        };
        cmd = cmd || 'init';
        if (cmd && typeof methods[cmd] !== 'undefined') {
            return methods[cmd].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
})(jQuery);