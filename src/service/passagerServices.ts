import { Passager } from '@/types'
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

export const createPassager = async (passager: Passager) => {
  try {
    const response = await api.post('/passagers', passager)
    const data = (await response?.data.data) || []
    console.log('***  ~ createPassager  ~ passagers data:', data)

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
