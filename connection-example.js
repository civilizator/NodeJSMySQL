let mysql = require('mysql');

// MySQL Command Line Client
// node connection-example.js

console.log('Get connection ...');

let conn = mysql.createConnection({
    database: 'mytestdb',
    host: "localhost",
    user: "root",
    password: "12345"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
