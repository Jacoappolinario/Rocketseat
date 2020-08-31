const data = require('../../../data')

module.exports = {
    dashboard(req, res) {
        return res.render("rocketseat/dashboard", { courses: data })
    }
}