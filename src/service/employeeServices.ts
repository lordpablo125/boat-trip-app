import { DocumentId, Employee, Id } from '@/types'
import { api } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'

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

export const getEmployee = async (documentId: DocumentId) => {
  try {
    const response = await api.get(`/employees/${documentId}`)
    const data = (await response?.data.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetEmployee = (documentId: DocumentId) => {
  const { data } = useQuery({
    queryKey: ['employee'],
    queryFn: () => getEmployee(documentId)
  })

  return data
}

export const createEmployee = async (employee: Employee) => {
  try {
    const payload = { data: employee }
    const response = await api.post('/employees', payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return {}
  }
}

export const useCreateEmployee = () =>
  useMutation({
    mutationFn: createEmployee
  })

export const editEmployee = async ({
  documentId,
  employee
}: {
  documentId: DocumentId
  employee: Employee
}) => {
  try {
    const payload = { data: employee }
    const response = await api.put(`/employees/${documentId}`, payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useEditEmployee = () => {
  return useMutation({
    mutationFn: editEmployee
  })
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

export const useDeleteEmployee = (params: object) => {
  return useMutation({
    ...params,
    mutationFn: deleteEmployee
  })
}
