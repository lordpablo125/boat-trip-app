import { useQuery } from '@tanstack/react-query'
import { api } from './api'

export const getBoats = async ({ page }) => {
  try {
    const response = await api.get(
      `/boats?populate[image][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=5`
    )
    const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
    const data = (await response?.data) || []

    let formattedData = []
    if (data?.data) {
      formattedData = await data?.data?.map((boat) => ({
        ...boat,
        image: `${ENDPOINT}${boat?.image?.url}`
      }))
    }

    return {
      ...data,
      data: formattedData
    }
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetBoats = (obj: object) => {
  const query = useQuery({
    queryKey: ['boats', obj],
    queryFn: () => getBoats(obj)
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
