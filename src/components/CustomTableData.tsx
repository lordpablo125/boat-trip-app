'use client'
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
const CustomTableData: FC<any> = ({
  title = 'Table title',
  addNewURI,
  columns,
  useGetTableData,
  deteleMutation
}: any) => {
  const [page, setPage] = useState(1)
  const { data } = useGetTableData({ page })

  const dataColumns = data?.data
  const isData = dataColumns?.length > 0
  const pagination = data?.meta?.pagination
  const pageSize = pagination?.pageSize

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  if (!isData) {
    return <>Loading...</>
  }

  return (
    <Box className='flex flex-col items-start pl-4 '>
      <TableContainer className='flex flex-col items-center'>
        <Typography className='text-center' variant='h2'>
          {title}
        </Typography>
        <Link href={`/${addNewURI}/create`} className='ml-auto mr-4' passHref>
          <Button color='primary' variant='outlined'>
            <AddIcon />
            Add new
          </Button>
        </Link>

        <Table aria-label='simple table'>
          <TableHead>
            <TableRow sx={{ '& > th': { fontWeight: 700 } }}>
              <TableCell>indx</TableCell>
              {columns.map((col) => (
                <TableCell key={String(col.key)}>{col.label}</TableCell>
              ))}
              <TableCell>
                <Box className={'text-right'}>Actions</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataColumns.map((row, rowIndex): any => (
              <TableRow key={rowIndex} className='hover:bg-slate-300'>
                <TableCell component='th' scope='row'>
                  {rowIndex + 1 + (page - 1) * pageSize}
                </TableCell>
                {columns.map((col) => (
                  <TableCell key={String(col.key)} component='th' scope='row'>
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                  </TableCell>
                ))}
                <TableCell>
                  <Box className={'text-right'}>
                    <Link
                      href={`/${addNewURI}/edit/${row?.documentId}`}
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
                      onClick={() => deteleMutation(documentId)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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

export default CustomTableData
