'use client'
import { useDeleteEmployee } from '@/service/employeeServices'
import { Employee, EmployeeTableProps } from '@/types'
import {
  Box,
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { FC, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote'

//TODO refactor to be more modular & generic
const EmployeeList: FC<EmployeeTableProps> = ({ useGetTableData }: any) => {
  const [page, setPage] = useState(1)
  const { data } = useGetTableData({ page })
  const employees = data?.data
  const pagination = data?.meta?.pagination
  console.log('***  ~ employees:', employees)
  const { mutate: deleteEmployee } = useDeleteEmployee({
    onSuccess: () => window.location.reload()
  })
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Typography className='text-center' variant='h2'>
          Employee List
        </Typography>
        <Link href='/employees/create' className='ml-auto mr-4' passHref>
          <Button color='primary' variant='outlined'>
            <AddIcon />
            Add new
          </Button>
        </Link>

        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ '& > th': { fontWeight: 700 } }}>
              <TableCell>indx</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>
                <Box className={'text-right'}>Actions</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.length &&
              employees.map(
                ({ id, name, role, documentId }: Employee, indx) => (
                  <TableRow key={name} className='hover:bg-slate-300'>
                    <TableCell component='th' scope='row'>
                      {indx + 1}
                    </TableCell>
                    <TableCell component='th' scope='row'>
                      {id}
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{role}</TableCell>
                    <TableCell>
                      <Box className={'text-right'}>
                        <Link
                          href={`/employees/edit/${documentId}`}
                          className='ml-auto mr-4'
                          passHref
                        >
                          <Button
                            className='bg-red-500'
                            color='inherit'
                            variant='outlined'
                          >
                            <EditNoteIcon />
                          </Button>
                        </Link>
                        <Button
                          color='error'
                          variant='outlined'
                          onClick={() => deleteEmployee(documentId)}
                        >
                          <DeleteIcon />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
        {console.log('***  ~ pagination?.page:', pagination?.page)}
        <Pagination
          className='my-4'
          color='primary'
          shape='rounded'
          variant='outlined'
          count={pagination?.pageCount}
          page={page}
          onChange={handlePageChange}
        />
      </TableContainer>
    </Box>
  )
}

export default EmployeeList
