'use client'
import CustomTableData from '@/components/CustomTableData'
import { useGetTrips } from '@/service/tripsServices'
import React from 'react'
import { format } from 'date-fns'

//TODO modify names
const TripsPage = () => {
  const formatTime = (val) => {
    if (!val) {
      return '00:00'
    }
    const [horas, minutos, segundos] = val.split(':').map(Number)

    // Creamos un objeto Date base (usamos la fecha de hoy por default)
    const base = new Date()
    const horaDate = new Date(base.setHours(horas, minutos, segundos, 0))

    // Formateamos
    return format(horaDate, 'HH:mm')
  }

  const columns = [
    { key: 'id', label: 'Id' },
    { key: 'type', label: 'type' },
    { key: 'date', label: 'date' },
    {
      key: 'startTime',
      label: 'startTime',
      render: (time) => {
        const formatedValue = formatTime(time)
        return <>{formatedValue}</>
      }
    },
    {
      key: 'endTime',
      label: 'endTime',
      render: (time) => {
        console.log('***  ~ TripsPage  ~ time:', time)
        const formatedValue = formatTime(time)
        return <>{formatedValue}</>
      }
    }
  ]
  // const { mutate: deletePassager } = useDeletePassager({
  //   onSuccess: () => window.location.reload()
  // })

  return (
    <CustomTableData
      title={'Trips List'}
      columns={columns}
      addNewURI={'trips'}
      useGetTableData={useGetTrips}
      // deteleMutation={deletePassager}
    />
  )
}

export default TripsPage
