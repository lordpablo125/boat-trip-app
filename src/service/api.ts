import axios from 'axios'

const { API_TOKEN, API_HOST } = process.env
export const api = axios.create({
  baseURL: API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + API_TOKEN
  }
})
