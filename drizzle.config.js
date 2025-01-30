import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_VsPAE5eHwv4Y@ep-yellow-tree-a56yr6v9-pooler.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require",
  },
});
