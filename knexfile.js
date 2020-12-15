// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/yoursolution",
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
//please work ==> Yeah it worked after deleting app in Heroku!
