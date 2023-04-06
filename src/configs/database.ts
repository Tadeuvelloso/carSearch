import pg from "pg";

const { Pool } = pg;

const connectionDb = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'carsearch'
})

export { connectionDb }