'use client'

import CustomTableData from '@/components/CustomTableData'
import { useDeleteEmployee, useGetEmployees } from '@/service/employeeServices'
import React from 'react'

const PageEmployeeList = () => {
  const columns = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' }
  ]
  const { mutate: deleteEmployee } = useDeleteEmployee({
    onSuccess: () => window.location.reload()
  })

  return (
    <CustomTableData
      columns={columns}
      addNewURI={'employees'}
      useGetTableData={useGetEmployees}
      deteleMutation={deleteEmployee}
    />
  )
}

export default PageEmployeeList
