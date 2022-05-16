'use strict';

/**
 *  exam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exam.exam', ({strapi}) => ({
    async findExamCourses(ctx) {
        try {
            const result = await strapi.service('api::exam.exam').findExamCourses(ctx.params.id);
            ctx.body = result;
        } catch (err) {
            ctx.body = err;
        }
    }
}));
