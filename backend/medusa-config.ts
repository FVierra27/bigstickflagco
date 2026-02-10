import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,

    // ✅ Fix: use real Redis when REDIS_URL is set
    redisUrl: process.env.REDIS_URL,

    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:3000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:9000",
      // ✅ Fix: don't hard-require AUTH_CORS. Default it.
      authCors: process.env.AUTH_CORS || process.env.ADMIN_CORS || "http://localhost:9000",

      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
})
