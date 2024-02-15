import * as dotenv from 'dotenv'
dotenv.config()

export const {
    TURSO_API_TOKEN,
    DATABASE_URL
} = process.env
