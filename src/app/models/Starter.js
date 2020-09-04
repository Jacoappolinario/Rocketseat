const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`SELECT * FROM starter ORDER BY id ASC`)
    }
}