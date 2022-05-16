module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/exam/courses/:id',
            handler: 'exam.findExamCourses',
            config: {
                auth: false
            }
        }
    ]
}