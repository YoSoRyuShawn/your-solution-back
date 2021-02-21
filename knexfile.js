// Update with your config settings.
const pg = require("pg");
pg.defaults.ssl = { rejectUnauthorized: false };

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
