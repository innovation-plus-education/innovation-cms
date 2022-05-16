'use strict';

/**
 *  exam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exam.exam', ({strapi}) => ({
    async find(ctx) {
        try {
            const result = await strapi.service('api::exam.exam').findExamsWithImage();
            const sanitizedEntity = await this.sanitizeOutput(result, ctx);
            return this.transformResponse(sanitizedEntity);
        } catch (err) {
            ctx.body = err
        }
    },

    async findExamCourses(ctx) {
        try {
            const result = await strapi.service('api::exam.exam').findExamCourses(ctx.params.id);
            const sanitizedEntity = await this.sanitizeOutput(result, ctx);
            return this.transformResponse(sanitizedEntity);
        } catch (err) {
            ctx.body = err;
        }
    }
}));
