import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { getEmployees } from '@/service/employeeServices'

const EmployeeList = async () => {
  const employees = await getEmployees()

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center' component={Paper}>
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
            {employees.map(({ id, name, role }) => (
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
