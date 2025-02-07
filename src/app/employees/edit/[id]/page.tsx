// 'use server'
'use client'
import FormEmployee from '@/components/EmployeeForm'
import { useGetEmployee } from '@/service/employeeServices'
import { ParamProp } from '@/types'
import React, { FC, use } from 'react'

const EditEmployee: FC<ParamProp> = ({ params }) => {
  const { id }: { id: string } = use(params)
  const employee = useGetEmployee(id)

  return <FormEmployee title={'Edit Employee'} employee={employee} />
}

export default EditEmployee
