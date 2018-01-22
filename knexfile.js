module.exports = {
  development: {
    client: "pg",
    // dame of the database here
    connection: "postgres:///mem1_db"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};