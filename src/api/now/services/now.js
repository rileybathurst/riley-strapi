'use strict';

/**
 * now service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::now.now');
