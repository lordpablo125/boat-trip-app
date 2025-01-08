// import { Category } from '@/types'
import { api } from './api'

const getCategories = async () => {
  try {
    const response = await api.get('/categories')

    const categoriesData = response?.data || []
    return categoriesData
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default getCategories
