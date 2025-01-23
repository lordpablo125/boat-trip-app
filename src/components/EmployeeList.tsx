import { Employee, EmployeeTableProps } from '@/types'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { FC } from 'react'

const EmployeeList: FC<EmployeeTableProps> = async ({ employees }) => {
  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Typography variant='h6' component='h2'>
          Employee List
        </Typography>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(({ id, name, role }: Employee) => (
              <TableRow key={name} className='hover:bg-slate-300'>
                <TableCell component='th' scope='row'>
                  {id}
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default EmployeeList
