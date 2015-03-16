﻿define(function(require) {
    'use strict';

    var Page = require('model/page');
    var Route = require('enum/route');
    var GettingStartedPageView = require('view/page/gettingStarted/gettingStartedPageView');

    var GettingStartedPageRegion = Marionette.Region.extend({
        initialize: function() {
            this.listenTo(Streamus.channels.body.vent, 'rendered', this._onBodyRendered);
        },

        _onBodyRendered: function() {
            var gettingStartedPageView = new GettingStartedPageView({
                model: new Page({
                    route: Route.GettingStarted
                })
            });
            gettingStartedPageView.render();
        }
    });

    return GettingStartedPageRegion;
});