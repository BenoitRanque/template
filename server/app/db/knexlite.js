module.exports = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./ZKTimeNet.db"
  }
})