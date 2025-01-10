import { api } from './api'

export const getEmployees = async () => {
  try {
    const response = await api.get('/employees')
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
