'use client'
import { deleteEmployee } from '@/service/employeeServices'
import { DocumentId, Employee, EmployeeTableProps, Id } from '@/types'
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import EditNoteIcon from '@mui/icons-material/EditNote'

const EmployeeList: FC<EmployeeTableProps> = ({ employees }) => {
  const { push } = useRouter()

  const handleRowClick = (documentId: DocumentId) => {
    push(`/employees/edit/${documentId}`)
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
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.length &&
              employees.map(({ id, name, role, documentId }: Employee) => (
                <TableRow
                  key={name}
                  className='hover:bg-slate-300'
                  onClick={() => handleRowClick(documentId)}
                >
                  <TableCell component='th' scope='row'>
                    {id}
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>
                    <Box className='text-right'>
                      <Link
                        href={`/employees/edit/${documentId}`}
                        className='ml-auto mr-4'
                        passHref
                      >
                        <Button color='inherit' variant='outlined'>
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default EmployeeList
