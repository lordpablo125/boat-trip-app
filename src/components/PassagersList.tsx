'use client'
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
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { useDeletePassager } from '@/service/passagerServices'

const PassagersList: FC<PassagerTableProps> = ({ passagers }) => {
  const { mutate: deletePassager } = useDeletePassager({
    onSuccess: () => window.location.reload()
  })
  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center w-auto'>
        <Typography variant='h6' component='h2'>
          Passagers List
        </Typography>
        <Link href='/passagers/create' className='ml-auto mr-4' passHref>
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
              <TableCell>DNI</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {passagers?.length &&
              passagers.map(({ id, name, dni, documentId }) => (
                <TableRow key={name + dni} className='hover:bg-slate-300'>
                  <TableCell component='th' scope='row'>
                    {id}
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{dni}</TableCell>
                  <TableCell>
                    <Box>
                      <Link
                        href={`/passagers/edit/${documentId}`}
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
                        onClick={() => deletePassager(documentId)}
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

export default PassagersList
