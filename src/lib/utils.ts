import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function compareHash ({ password, hash }: { password: string, hash: string }) {
  return await bcrypt.compare(password, hash)
}

export const hashPassword = async ({ password }: { password: string }) => {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export const expiresIn = 60 * 60 * 24 * 14 

export const signToken = (data: { email: string }) => {
  return jwt.sign(data, 'secret', { expiresIn })
}
