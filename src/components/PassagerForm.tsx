'use client'
import {
  editPassager,
  useCreatePassager,
  useEditPassager
} from '@/service/passagerServices'
import { Passager } from '@/types'
import {
  Alert,
  Box,
  Button,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'

type PassagerFormProps = {
  title: string
  passager?: Passager
}

const PassagerForm: FC<PassagerFormProps> = ({ title, passager = {} }) => {
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const { mutate: createPassager, isSuccess: isCreateSuccess } =
    useCreatePassager()
  const { mutate: editPassager, isSuccess: isEditSuccess } = useEditPassager()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data: Passager = Object.fromEntries(formData.entries())
    console.log('***  ~ handleSubmit  ~ data:', data)

    const isId = passager?.documentId

    if (isId) {
      editPassager({
        documentId: isId,
        passager: data
      })
    } else {
      createPassager(data)
    }
  }

  const handleSuccess = () => {
    setOpen(true)
    push(`/passagers`)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  useEffect(
    function showSnackbarOnSucces() {
      if (isCreateSuccess || isEditSuccess) {
        handleSuccess()
      }
    },
    [isCreateSuccess, isEditSuccess]
  )

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
          defaultValue={passager?.name}
          label='Name'
          name='name'
          required
        />
        <TextField
          defaultValue={passager?.dni}
          label='DNI'
          name='dni'
          type='number'
          required
        />

        <Box className='mx-auto'>
          <Link href='/passagers' className='ml-auto mr-4' passHref>
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
          New Passager added successfully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default PassagerForm
