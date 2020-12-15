// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/yoursolution",
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: true,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: true,
  },
};
