// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost:pasuwa-do/yoursolution",
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
};
//please work... --> Yeah it worked after deleting app once in Heroku!
