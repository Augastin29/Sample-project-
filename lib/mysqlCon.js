var mysql = require("mysql");
global.studentMysqlCon = {};
studentMysqlCon = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "admin",
    user: "root",
    password: ''
});
studentMysqlCon.connect(function (err) {
    if (err) {
        console.log('mysql database connection error');
    } else {
        console.log('mysql database connection created');
    }
});