// src/config/db.js

const mysql = require('mysql2');

// MySQL 연결 설정
const pool = mysql.createPool({
    host: 'localhost', // MySQL 서버 주소
    user: 'root',      // MySQL 사용자 이름
    password: '1234', // MySQL 비밀번호
    database: 'conciliation', // 데이터베이스 이름
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Promise를 사용하여 쿼리 결과를 반환하도록 설정
const promisePool = pool.promise();

module.exports = promisePool;
