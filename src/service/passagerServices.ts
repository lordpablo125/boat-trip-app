import { Passager } from '@/types'
import { api } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'

export const getPassagers = async ({ page = 1 }) => {
  try {
    const response = await api.get(
      `/passagers?pagination[page]=${page}&pagination[pageSize]=5`
    )
    const data = (await response?.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPassagers = (obj?: object) => {
  const query = useQuery({
    queryKey: ['passagers', obj],
    queryFn: () => getPassagers(obj)
  })

  return query
}

export const getPassager = async (documentId: string) => {
  try {
    const response = await api.get(`/passagers/${documentId}`)
    const data = (await response?.data.data) || {}

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useGetPassager = (documentId: string) => {
  const { data } = useQuery({
    queryKey: ['passager'],
    queryFn: () => getPassager(documentId)
  })

  return data
}

export const createPassager = async (passager: Passager) => {
  try {
    const payload = { data: passager }
    const response = await api.post('/passagers', payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useCreatePassager = () =>
  useMutation({
    mutationFn: createPassager
  })

export const editPassager = async ({
  documentId,
  passager
}: {
  documentId: string
  passager: Passager
}) => {
  try {
    const payload = { data: passager }
    const response = await api.put(`/passagers/${documentId}`, payload)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useEditPassager = () => {
  return useMutation({
    mutationFn: editPassager
  })
}

export const deletePassager = async (id: Id) => {
  try {
    const response = await api.delete(`/passagers/${id}`)
    const data = (await response?.data.data) || []

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export const useDeletePassager = (params?: object) => {
  return useMutation({
    ...params,
    mutationFn: deletePassager
  })
}
