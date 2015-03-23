﻿define(function(require) {
    'use strict';

    var RouteType = require('enum/routeType');

    var NavigationItem = Backbone.Model.extend({
        defaults: {
            route: RouteType.NotFound,
            active: false,
            text: ''
        }
    });

    return NavigationItem;
});