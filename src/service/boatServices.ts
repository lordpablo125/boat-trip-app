import { api } from './api'

export const getBoats = async () => {
  try {
    const response = await api.get('/boats?populate=image')
    const { ENDPOINT } = process.env
    const data = (await response?.data.data) || []

    let formattedData = []
    if (data.length) {
      formattedData = await data?.map(({ image, ...boat }) => ({
        ...boat,
        image: `${ENDPOINT}${image?.formats?.thumbnail?.url}`
      }))
    }

    return formattedData
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}
