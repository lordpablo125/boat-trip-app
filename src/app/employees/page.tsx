import EmployeeList from '@/components/EmployeeList'
import { getEmployees } from '@/service/employeeServices'
import React from 'react'

const PageEmployeeList = async () => {
  const employees = await getEmployees()
  console.log('***  ~ PageEmployeeList  ~ employees:', employees)
  return <EmployeeList employees={employees} />
}

export default PageEmployeeList
