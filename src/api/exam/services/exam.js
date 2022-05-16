'use strict';

/**
 * exam service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exam.exam', ({strapi}) => ({
    async findExamCourses(examId) {
        return strapi.db.query('api::exam.exam').findOne({
            where: {id: examId},
            populate: { courses:  true, topics: true}
        })
    }   
}));
