module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "venczelek"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 3306),
//       database: env("DATABASE_NAME", "venczele_venczelek"),
//       user: env("DATABASE_USERNAME", "venczele_J0c3r"),
//       password: env("DATABASE_PASSWORD", "makitax1234"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
