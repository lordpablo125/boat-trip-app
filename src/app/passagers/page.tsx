'use client'
import CustomTableData from '@/components/CustomTableData'
import { useDeletePassager, useGetPassagers } from '@/service/passagerServices'
import React from 'react'

const Page = () => {
  const columns = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'dni', label: 'DNI' }
  ]
  const { mutate: deletePassager } = useDeletePassager({
    onSuccess: () => window.location.reload()
  })

  return (
    <CustomTableData
      columns={columns}
      addNewURI={'passagers'}
      useGetTableData={useGetPassagers}
      deteleMutation={deletePassager}
    />
  )
}

export default Page
