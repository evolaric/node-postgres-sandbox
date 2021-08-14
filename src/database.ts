import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const POSTGRES_HOST = process.env.POSTGRES_HOST_DEV;
const POSTGRES_DB = process.env.POSTGRES_DB_DEV;
const POSTGRES_USER = process.env.POSTGRES_USER_DEV;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD_DEV;

const Client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
});

export default Client;
