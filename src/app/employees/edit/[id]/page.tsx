'use server'
import FormEmployee from '@/components/EmployeeForm'
import { editEmployee, getEmployee } from '@/service/employeeServices'
import React from 'react'

const EditEmployee = async ({ params }) => {
  const { id } = params
  const employee = await getEmployee(id)

  return <FormEmployee title={'Edit Employee'} employee={employee} />
}

export default EditEmployee
