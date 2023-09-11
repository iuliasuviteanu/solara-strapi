'use strict';

/**
 * available-solara service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-solara.available-solara');
