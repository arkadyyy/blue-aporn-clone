function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env variable: ${name}`);
  }
  return value;
}

export default {
  googleClientId: requiredEnv("GOOGLE_CLIENT_ID"),
  googleClientSecret: requiredEnv("GOOGLE_CLIENT_SECRET"),
  googleRedirectURI: requiredEnv("GOOGLE_REDIRECT_URI"),

  frontendURL: requiredEnv("FRONTEND_URL"),

  postgresUser: requiredEnv("POSTGRES_USER"),
  postgresPassword: requiredEnv("POSTGRES_PASSWORD"),
  postgresDB: requiredEnv("POSTGRES_DB"),

  jwtSecret: requiredEnv("JWT_SECRET"),

  port: requiredEnv("PORT"),
};
