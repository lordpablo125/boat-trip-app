import { Box } from '@mui/material'
import { getBoats } from '@/service/boatServices'

const BoatShow = async () => {
  const { data: boats } = await getBoats()

  return (
    <Box className='flex flex-col items-center '>
      <h1>Boats</h1>
      {boats?.length > 0 && boats.map((b) => <div key={b.name}>{b.name}</div>)}
    </Box>
  )
}

export default BoatShow
