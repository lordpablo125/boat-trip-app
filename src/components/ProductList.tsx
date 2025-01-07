import React from 'react'
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material'
import { Product } from '@/types'
import getProducts from '@/hooks/getProducts'

const ProductList = async () => {
  const products: Product[] | undefined = await getProducts()
  return (
    <Box className='px-4'>
      <Typography variant='h4' component='h2' gutterBottom>
        Product List
      </Typography>
      {products?.length === 0 ? (
        <Typography variant='body1'>Loading products...</Typography>
      ) : (
        <Box className='flex flex-wrap gap-4 w-100'>
          {products.map((product) => {
            // Every product should have a USD price
            const price = product.prices?.find(
              (price) => price.currency === 'USD'
            )
            return (
              <Card className='basis-[32%]' key={product.id}>
                <CardMedia
                  sx={{ height: '5em' }}
                  image='/assets/logo.png'
                  title='Logo product'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {product.description}
                  </Typography>
                  <Typography variant='body2'>
                    <strong>Category:</strong> {product.category.name}
                  </Typography>
                  {price ? (
                    <Typography variant='body1'>
                      <strong>Price:</strong> {price.currency}{' '}
                      {(price.amount / 100).toFixed(2)}
                    </Typography>
                  ) : (
                    <Typography variant='body2' color='error'>
                      No price defined
                    </Typography>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </Box>
      )}
    </Box>
  )
}

export default ProductList
