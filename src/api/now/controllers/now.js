'use strict';

/**
 * now controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::now.now');
