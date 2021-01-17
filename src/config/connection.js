const mysql = require('mysql');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'iE0Ax4jxo8',
    password: 'WdsWpgXGUF',
    database: 'WdsWpgXGUF'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connection is successfully');
})

module.exports = db