'use strict';

/**
 * Other.js controller
 *
 * @description: A set of functions called "actions" for managing `Other`.
 */

module.exports = {

  /**
   * Retrieve other records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.other.search(ctx.query);
    } else {
      return strapi.services.other.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a other record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.other.fetch(ctx.params);
  },

  /**
   * Count other records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.other.count(ctx.query);
  },

  /**
   * Create a/an other record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.other.add(ctx.request.body);
  },

  /**
   * Update a/an other record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.other.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an other record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.other.remove(ctx.params);
  }
};
