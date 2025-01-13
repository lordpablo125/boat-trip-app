import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { MenuItem, Select } from '@mui/material'

const Navbar = () => {
  const APP_NAME = process.env.APP_NAME
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1em' }}>
      <AppBar position='static'>
        <Toolbar className='gap-2'>
          <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <Select
            className='text-white'
            name='currency'
            defaultValue='USD'
            label='Currency'
          >
            <MenuItem value='USD'>USA</MenuItem>
            <MenuItem value='EUR'>EUR</MenuItem>
          </Select>
          <Link href='/employees' passHref>
            <Button color='inherit'>Employees</Button>
          </Link>
          <Link href='/boats' passHref>
            <Button color='inherit'>Boats</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
