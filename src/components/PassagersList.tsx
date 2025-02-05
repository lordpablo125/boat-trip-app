import { PassagerTableProps } from '@/types'
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
import { FC } from 'react'

const PassagersList: FC<PassagerTableProps> = async ({ passagers }) => {
  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center w-auto'>
        <Typography variant='h6' component='h2'>
          Passagers List
        </Typography>
        <Link href='/passagers/create' className='ml-auto mr-4' passHref>
          <Button
            sx={{ backgroundColor: 'MediumSeaGreen' }}
            variant='contained'
          >
            Add new
          </Button>
        </Link>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ '& > th': { fontWeight: 700 } }}>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DNI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passagers &&
              passagers.map(({ id, name, dni }) => (
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
