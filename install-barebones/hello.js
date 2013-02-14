(function ($) {
    var HelloView = Backbone.View.extend({
        el: $("#hello"),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.append("Hello, world!");
        }
    });

    var hello = new HelloView();
} (jQuery));