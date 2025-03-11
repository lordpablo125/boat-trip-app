'use client'
import { Boat, BoatCardProps } from '@/types'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import AddIcon from '@mui/icons-material/Add'

const BoatCard: FC<BoatCardProps> = ({ boats }) => {
  return (
    <Box className='flex flex-col items-center '>
      <Typography className='text-center' variant='h2'>
        Boats list
      </Typography>
      <Link href={`/boats/create`} className=' my-4' passHref>
        <Button color='primary' variant='outlined'>
          <AddIcon />
          Add new
        </Button>
      </Link>
      {boats?.length > 0 &&
        boats.map((boat: Boat) => (
          <Card
            key={boat.name}
            className='mb-4'
            sx={{ width: 345, height: 400 }}
          >
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
        ))}
    </Box>
  )
}

export default BoatCard
