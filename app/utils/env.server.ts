import { z } from "zod";
import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

const envSchema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.string(),
  VITE_DOMAIN: z.string(),
  VITE_GTM_ID: z.string(),
});

let env: ReturnType<typeof initEnv>;

export const initEnv = () => {
  const envData = envSchema.safeParse(process.env);
  if (!envData.success) {
    console.error(
      "❌ Invalid environment variables:",
      envData.error.flatten().fieldErrors
    );

    throw new Error("Invalid environment variables");
  }
  env = envData.data;

  console.log("✅ Environment variables loaded successfully");
  return envData.data;
};

export const getServerEnv = () => env;

export const getClientEnv = () => {
  const serverEnv = env;
  return {
    NODE_ENV: serverEnv.NODE_ENV,
    VITE_DOMAIN: serverEnv.VITE_DOMAIN,
    VITE_GTM_ID: serverEnv.VITE_GTM_ID,
  };
};

export type CLIENT_ENV = ReturnType<typeof getClientEnv>;
type APP_ENV = z.infer<typeof envSchema>;

declare global {
  interface Window {
    env: CLIENT_ENV;
  }
  namespace NodeJS {
    interface ProcessEnv extends APP_ENV {}
  }
}
