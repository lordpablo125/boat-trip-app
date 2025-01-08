import { api } from './api'

export const getBoats = async () => {
  try {
    const response = await api.get('/boats')

    const data = response?.data || []
    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
