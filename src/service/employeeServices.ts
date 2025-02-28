import { DocumentId, Employee, Id } from '@/types'
import { api } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'

export const getEmployees = async ({ page }) => {
  try {
    const response = await api.get(
      `/employees?pagination[page]=${page}&pagination[pageSize]=5`
    )
    const data = (await response?.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetEmployees = (obj: object) => {
  const query = useQuery({
    queryKey: ['employees', obj],
    queryFn: () => getEmployees(obj)
  })

  return query
}

export const getEmployee = async (documentId: string) => {
  try {
    const response = await api.get(`/employees/${documentId}`)
    const data = (await response?.data.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetEmployee = (documentId: string) => {
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
