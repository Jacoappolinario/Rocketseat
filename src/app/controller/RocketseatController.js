const data = require('../../../data')

module.exports = {
    dashboard(req, res) {
        return res.render("rocketseat/dashboard", { courses: data })
    },
    course(req, res) {
        const { id } = req.params
        const foundCourse = data.find(function(data) {
            if (data.id == id) {
                return true
            }
        })

        if (!foundCourse) return res.send("Not Found")

        return res.render("rocketseat/course", { course: foundCourse })
    }
}