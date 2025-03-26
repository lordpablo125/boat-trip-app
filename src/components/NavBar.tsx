import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const Navbar = () => {
  const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1em' }}>
      <AppBar position='static'>
        <Toolbar className='gap-2'>
          <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>
          <Link href='/employees' passHref>
            <Box className='hover:underline'>Employees</Box>
          </Link>
          <Link href='/passagers' passHref>
            <Box className='hover:underline'>Passagers</Box>
          </Link>
          <Link href='/boats' passHref>
            <Box className='hover:underline'>Boats</Box>
          </Link>
          <Link href='/trips' passHref>
            <Box className='hover:underline'>Trips</Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
