'use client'
import { Employee, Passager, Trip } from '@/types'
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { format, addDays, add } from 'date-fns'
import PassagerMultiselect from './PassagerMultiselect'
import { useCreateTrips } from '@/service/tripsServices'

type TripFormProps = {
  title: string
  trip?: Employee
}

const TripForm: FC<TripFormProps> = ({ title, trip = {} }) => {
  const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd') // Calcula el día siguiente
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const [passagers, setPassagers] = useState<Passager[]>([])
  console.log('***  ~ passagers:', passagers)
  const { mutate: createTrip, isSuccess: isCreateSuccess } = useCreateTrips()

  const handleSuccess = () => {
    setOpen(true)
    push(`/trips`)
  }

  const handlePassagerChange = (value: Passager[]) => setPassagers(value)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data: any = Object.fromEntries(formData.entries())
    const passagersArray = passagers.map((pas) => pas.documentId)

    const { startTime } = data
    const [hora, minutos] = startTime.split(':').map(Number)
    const hoy = new Date()
    const horaBase = new Date(hoy.setHours(hora, minutos, 0, 0))
    const nuevaHora = add(horaBase, { hours: 3 })
    const endTime = format(nuevaHora, 'HH:mm')
    // return
    console.log('***  ~ handleSubmit  ~ data:', data, { passagersArray })

    await createTrip({
      ...data,
      passagers: passagersArray,
      startTime: startTime + ':00',
      endTime: endTime + ':00'
    })

    if (isCreateSuccess) {
      handleSuccess()
    }
  }

  return (
    <Box className='flex justify-center flex-col'>
      <Typography className='text-center' variant='h2'>
        {title}
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 max-w-[300px] my-4 mx-auto'
      >
        <TextField
          select
          label='type'
          name='type'
          defaultValue={'common'}
          required
        >
          <MenuItem value='common'>common</MenuItem>
          <MenuItem value='special'>special</MenuItem>
        </TextField>

        <TextField
          label='date'
          name='date'
          type='date'
          // slots={{ input: 'input' }}
          slotProps={{
            input: { min: tomorrow },
            inputLabel: { shrink: true }
          }}
          required
        />
        <TextField
          label='startTime'
          name='startTime'
          type='time'
          slotProps={{ inputLabel: { shrink: true } }}
          required
        />
        <TextField
          label='passagerNumber'
          name='passagerNumber'
          type='number'
          value={45}
          slotProps={{
            input: {
              readOnly: true
            }
          }}
        />
        <TextField
          label='price'
          name='price'
          type='number'
          required
          value={400}
          slotProps={{
            input: {
              readOnly: true
            }
          }}
        />

        <PassagerMultiselect
          value={passagers}
          onChange={handlePassagerChange}
        />
        {/* <MultiSelectWithChips label={'Crew'} options={employeeData?.data} />
        <MultiSelectWithChips label={'Skipper'} options={employeeData?.data} /> */}
        <Box className='mx-auto'>
          <Link href='/trips' className='ml-auto mr-4' passHref>
            <Button color='inherit' variant='contained'>
              Back
            </Button>
          </Link>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          variant='filled'
          sx={{ width: '100%', backgroundColor: 'MediumSeaGreen' }}
        >
          New Employee added successfully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default TripForm
