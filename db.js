const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'produto-api',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
