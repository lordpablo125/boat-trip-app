'use client'
import { createPassager } from '@/service/passagerServices'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function CreatePassagers() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    console.log('***  ~ handleSubmit  ~ data:', data)
    createPassager({ data })
  }

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        New Passager
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField label='Name' name='name' required />
        <TextField label='DNI' name='dni' type='number' required />

        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </Box>
    </Box>
  )
}
