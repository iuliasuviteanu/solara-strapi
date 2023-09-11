'use strict';

/**
 * free-market service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-market.free-market');
