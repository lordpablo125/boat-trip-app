'use client'
import EmployeeList from '@/components/EmployeeList'
import { useGetEmployees } from '@/service/employeeServices'
import React from 'react'

const PageEmployeeList = () => {
  const data = useGetEmployees()
  console.log('***  ~ PageEmployeeList  ~ data:', data)

  return <EmployeeList employees={data} />
}

export default PageEmployeeList
