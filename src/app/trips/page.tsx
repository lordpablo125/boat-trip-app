'use client'
import CustomTableData from '@/components/CustomTableData'
import { useGetTrips } from '@/service/tripsServices'
import React from 'react'
import { format } from 'date-fns'

//TODO modify names
const TripsPage = () => {
  const formatTime = (val: string) => {
    if (!val) {
      return '00:00'
    }
    const [horas, minutos, segundos] = val.split(':').map(Number)
    const base = new Date()
    const horaDate = new Date(base.setHours(horas, minutos, segundos, 0))

    return format(horaDate, 'HH:mm')
  }

  const columns = [
    { key: 'id', label: 'Id' },
    { key: 'type', label: 'type' },
    { key: 'date', label: 'date' },
    {
      key: 'startTime',
      label: 'startTime',
      render: (time: string) => {
        const formatedValue = formatTime(time)
        return <>{formatedValue}</>
      }
    },
    {
      key: 'endTime',
      label: 'endTime',
      render: (time: string) => {
        const formatedValue = formatTime(time)
        return <>{formatedValue}</>
      }
    }
  ]

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
