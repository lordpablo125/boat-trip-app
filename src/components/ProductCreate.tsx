import { Box } from '@mui/material'
import getCategories from '@/hooks/getCategories'
import FormCreate from './FormCreate'

const ProductCreate = async () => {
  const categories = await getCategories()

  return (
    <Box className='flex flex-col items-center '>
      <h1>New Product</h1>
      <FormCreate categories={categories} />
    </Box>
  )
}

export default ProductCreate
