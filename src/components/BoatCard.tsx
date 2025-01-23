'use client'
import { Boat } from '@/types'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'

type BoatCardProps = {
  boats: Boat[]
}

const BoatCard: FC<BoatCardProps> = ({ boats }) => {
  return (
    <Box className='flex flex-col items-center '>
      <Typography variant='h6' component='h2'>
        Boats list
      </Typography>
      {boats?.length > 0 &&
        boats.map((boat: Boat) => (
          <div key={boat.name}>
            <Card className='mb-4' sx={{ width: 345, height: 400 }}>
              <CardMedia
                component='img'
                className='h-[250px]'
                alt={boat.name}
                image={boat.image}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {boat.name}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Brand: {boat.brand}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  model: {boat.model}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Maximum Capacity: {boat.maximum_capacity}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
    </Box>
  )
}

export default BoatCard
