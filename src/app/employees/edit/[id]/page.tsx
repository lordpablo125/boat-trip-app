'use server'
import FormEmployee from '@/components/EmployeeForm'
import { getEmployee } from '@/service/employeeServices'
import React from 'react'

const EditEmployee = async ({ params }) => {
  const { id } = await params
  const employee = await getEmployee(id)

  return <FormEmployee title={'Edit Employee'} employee={employee} />
}

export default EditEmployee
