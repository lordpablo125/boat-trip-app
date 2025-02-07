import { DocumentId, Employee, Id } from '@/types'
import { api } from './api'
import { useQuery } from '@tanstack/react-query'

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

export const useGetEmployees = () => {
  const { data } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees
  })

  return data
}

export const getEmployee = async (id: DocumentId) => {
  try {
    const response = await api.get(`/employees/${id}`)
    const data = (await response?.data.data) || {}
    console.log('***  ~ getEmployee  ~ response:', response)

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetEmployee = (id) => {
  const { data } = useQuery({
    queryKey: ['employee'],
    queryFn: () => getEmployee(id)
  })

  return data
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

export const editEmployee = async (id: Id, employee: Employee) => {
  try {
    const payload = { data: employee }
    const response = await api.put(`/employees/${id}`, payload)
    const success = response.status === 200
    const data = (await response?.data.data) || []

    return { success, data }
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
