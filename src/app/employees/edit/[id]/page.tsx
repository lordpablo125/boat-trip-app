// 'use server'
'use client'
import FormEmployee from '@/components/EmployeeForm'
import { useGetEmployee } from '@/service/employeeServices'
import React, { FC, use } from 'react'

interface Params {
  id: string
}

interface EditEmployeeProps {
  params: Promise<Params>
}

const EditEmployee: FC<EditEmployeeProps> = ({ params }) => {
  const { id }: { id: string } = use(params)
  const employee = useGetEmployee(id)

  return <FormEmployee title={'Edit Employee'} employee={employee} />
}

export default EditEmployee
