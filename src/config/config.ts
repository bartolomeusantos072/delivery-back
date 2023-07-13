import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

export default config;
