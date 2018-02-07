'use strict';

var _ = require('lodash');

module.exports = function(Place) {


    Place.beforeRemote('find', function(ctx, instance, next) {
        if (!ctx.args.filter) {
            ctx.args.filter = {};
        }
        ctx.args.filter.include = [ "actividads" ];
        if (!ctx.args.filter.where) {
            ctx.args.filter.where = {};
        }
        ctx.args.filter.where = _.merge(ctx.args.filter.where, {});
        ctx.args.filter.order = ""
        next();
    });


};
