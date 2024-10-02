// Mysql 모듈 소환
const mariadb = require('mysql2');

// DB와 연결 통로 생성
const connection = mariadb.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'Bookshop',
    dateStrings : true
});

module.exports = connection;
