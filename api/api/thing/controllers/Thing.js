'use strict';

/**
 * Thing.js controller
 *
 * @description: A set of functions called "actions" for managing `Thing`.
 */

module.exports = {

  /**
   * Retrieve thing records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.thing.search(ctx.query);
    } else {
      return strapi.services.thing.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a thing record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.thing.fetch(ctx.params);
  },

  /**
   * Count thing records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.thing.count(ctx.query);
  },

  /**
   * Create a/an thing record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.thing.add(ctx.request.body);
  },

  /**
   * Update a/an thing record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.thing.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an thing record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.thing.remove(ctx.params);
  }
};
