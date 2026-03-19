const sql = require('mssql');


const config = {
    user: 'usamazafar',
    password: 'usama-pass',
    server: 'DESKTOP-HD5VOJD\\SQLEXPRESS',
    database: 'test-db-1',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

async function getConnection() {

    try {

        const pool = await sql.connect(config)

        return pool;

    }
    catch (err) {
        console.log('err: ', err);

        return err

    }
}

module.exports = {
    sql,
    getConnection
}