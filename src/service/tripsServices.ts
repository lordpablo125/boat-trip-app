import { DocumentId, Employee, Id, Trip } from '@/types'
import { api } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'

//TODO change the entity parte of the name
export const getTrips = async ({ page }) => {
  try {
    const response = await api.get(
      `/trips?pagination[page]=${page}&pagination[pageSize]=5`
    )
    const data = (await response?.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetTrips = (obj: object) => {
  const query = useQuery({
    queryKey: ['trips', obj],
    queryFn: () => getTrips(obj)
  })

  return query
}

export const getTrip = async (documentId: string) => {
  try {
    const response = await api.get(
      `/trips/${documentId}?populate[passagers][fields][0]=documentId&populate[crew][fields][0]=documentId`
    )
    const data = (await response?.data.data) || {}
    const formatedData = {
      ...data,
      passagers: data?.passagers.map((p) => p.documentId)
    }

    return formatedData
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetTrip = (documentId: string) => {
  const { data } = useQuery({
    queryKey: ['trip'],
    queryFn: () => getTrip(documentId)
  })

  return data
}

export const createTrips = async (trip: Trip) => {
  try {
    const payload = { data: trip }
    const response = await api.post('/trips', payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return {}
  }
}

export const useCreateTrips = () =>
  useMutation({
    mutationFn: createTrips
  })

// Trips
export const editTrip = async ({
  documentId,
  employee
}: {
  documentId: DocumentId
  employee: Employee
}) => {
  try {
    const payload = { data: employee }
    const response = await api.put(`/trips/${documentId}`, payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useEditTrips = () => {
  return useMutation({
    mutationFn: editTrips
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
