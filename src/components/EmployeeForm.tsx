'use client'
import { useCreateEmployee, useEditEmployee } from '@/service/employeeServices'
import { Employee } from '@/types'
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
import React, { FC, useEffect, useState } from 'react'

type EmployeeFormProps = {
  title: string
  employee: Employee
}

const FormEmployee: FC<EmployeeFormProps> = ({ title, employee = {} }) => {
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const { mutate: createEmployee, isSuccess: isCreateSuccess } =
    useCreateEmployee()
  const { mutate: editEmployee, isSuccess: isEditSuccess } = useEditEmployee()

  const handleSuccess = () => {
    setOpen(true)
    push(`/employees`)
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

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data: Employee = Object.fromEntries(formData.entries())

    const isId = employee?.documentId

    if (isId) {
      editEmployee({
        documentId: isId,
        employee: data
      })
    } else {
      createEmployee(data)
    }
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
          label='Name'
          name='name'
          defaultValue={employee?.name}
          required
        />
        <TextField
          select
          label='Role'
          name='role'
          defaultValue={employee?.role ? employee?.role : 'assistant'}
          required
        >
          <MenuItem value='assistant'>Assistant</MenuItem>
          <MenuItem value='skipper'>Skipper</MenuItem>
        </TextField>
        <Box className='mx-auto'>
          <Link href='/employees' className='ml-auto mr-4' passHref>
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

export default FormEmployee
