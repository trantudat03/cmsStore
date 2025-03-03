export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: env("DATABASE_URL") // Sử dụng URL thay vì từng biến riêng lẻ
      ? env("DATABASE_URL")
      : {
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "railway"),
          user: env("DATABASE_USERNAME", "postgres"),
          password: env(
            "DATABASE_PASSWORD",
            "mIZJLnhNWsssbtIKBuNWzSkJThvcXRku"
          ),
          ssl: env.bool("DATABASE_SSL", false)
            ? { rejectUnauthorized: false }
            : false,
        },
    pool: { min: 2, max: 10 },
  },
});
