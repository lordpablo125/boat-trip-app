import axios from 'axios'

const NEXT_PUBLIC_API_HOST = process.env.NEXT_PUBLIC_API_HOST
const NEXT_PUBLIC_API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

export const api = axios.create({
  baseURL: NEXT_PUBLIC_API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + NEXT_PUBLIC_API_TOKEN
  }
})
