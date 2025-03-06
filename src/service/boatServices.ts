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
