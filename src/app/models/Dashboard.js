const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`SELECT * FROM dashboard ORDER BY id ASC`)
    }
}