const data = require('../../../data')
const starter = require('../../../database')

module.exports = {
    dashboard(req, res) {
        return res.render("rocketseat/dashboard", { courses: data })
    },
    starter(req, res) {
        return res.render("rocketseat/starter", { starter })
    }
}