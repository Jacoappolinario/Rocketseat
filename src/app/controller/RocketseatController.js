const Starter = require('../models/Starter')
const Dashboard = require('../models/Dashboard')

module.exports = {
    async dashboard(req, res) {
        let results = await Dashboard.all()
        const courses = results.rows

        return res.render("rocketseat/dashboard", { courses })
    },
    async starter(req, res) {
        let results = await Starter.all()
        const courses = results.rows

        return res.render("rocketseat/starter", { courses })
    }
}