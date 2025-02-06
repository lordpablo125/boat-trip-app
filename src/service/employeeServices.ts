import { DocumentId, Employee, Id } from '@/types'
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

export const createEmployee = async (employee: Employee) => {
  try {
    const payload = { data: employee }
    const response = await api.post('/employees', payload)
    const success = response.status === 201
    const data = (await response?.data.data) || []

    return { success, data }
  } catch (error) {
    console.error('Error:', error)
    return {}
  }
}

export const deleteEmployee = async (id: Id) => {
  try {
    const response = await api.delete(`/employees/${id}`)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const getEmployee = async (id: DocumentId) => {
  try {
    const response = await api.get(`/employees/${id}`)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const editEmployee = async (id: Id, employee: Employee) => {
  try {
    const payload = { data: employee }
    const response = await api.post(`/employees/${id}`, payload)
    const data = (await response?.data.data[0]) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
