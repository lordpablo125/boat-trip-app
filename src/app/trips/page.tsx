'use client'
import CustomTableData from '@/components/CustomTableData'
import { useGetTrips } from '@/service/tripsServices'
import React from 'react'

//TODO modify names
const TripsPage = () => {
  const columns = [
    { key: 'id', label: 'Id' },
    { key: 'type', label: 'type' },
    { key: 'date', label: 'date' },
    { key: 'startTime', label: 'startTime' },
    { key: 'endTime', label: 'endTime' }
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
