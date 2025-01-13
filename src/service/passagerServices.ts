import { api } from './api'

export const getPassagers = async () => {
  try {
    const response = await api.get('/passagers')
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
