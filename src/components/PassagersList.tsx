import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { getPassagers } from '@/service/passagerServices'

const PassagersList = async () => {
  const passagers = await getPassagers()

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center w-auto'>
        <Typography variant='h6' component='h2'>
          Passagers List
        </Typography>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DNI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passagers.map(({ id, name, dni }) => (
              <TableRow key={name} className='hover:bg-slate-300'>
                <TableCell component='th' scope='row'>
                  {id}
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{dni}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PassagersList
