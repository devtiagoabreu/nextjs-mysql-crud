import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: process.env.MYSQL_HOST_REDELOCAL,
    user: process.env.MYSQL_USER_REDELOCAL,
    password: process.env.MYSQL_PASSWORD_REDELOCAL,
    port: process.env.MYSQL_PORT_REDELOCAL,
    database: process.env.MYSQL_DB_REDELOCAL
});

export { pool };