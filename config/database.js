const {
  DB_USER = 'postgres',
  DB_PASSWORD = 'postgres',
  DB_NAME = 'db_bikeshop',
  DB_HOST = 'localhost',
  DB_PORT = '5432',
} = process.env

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
  },
}
