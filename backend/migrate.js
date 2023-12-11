require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
    const {HOST, USER, PASSWORD, NAME} = process.env;

    const connection = await mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        multipleStatements: true
    });

    await connection.query(`DROP DATABASE IF EXISTS \`${NAME}\``);
    await connection.query(`CREATE DATABASE \`${NAME}\``);
    await connection.query(`USE \`${NAME}\``);

    const sql = fs.readFileSync("./database.sql", "utf8");
    await connection.query(sql);
    await connection.end();
};
try {
    migrate();
} catch (error) {
    console.error(error);
    process.exit(1);
}
module.exports = migrate;
