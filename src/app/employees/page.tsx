'use client'
import EmployeeList from '@/components/EmployeeList'
import { useGetEmployees } from '@/service/employeeServices'
import React from 'react'

const PageEmployeeList = () => {
  return <EmployeeList useGetTableData={useGetEmployees} />
}

export default PageEmployeeList
