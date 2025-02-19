// 'use server'
'use client'
import PassagerForm from '@/components/PassagerForm'
import { useGetPassager } from '@/service/passagerServices'
import { ParamProp } from '@/types'
import React, { FC, use } from 'react'

const EditEmployee: FC<ParamProp> = ({ params }) => {
  const { id }: { id: string } = use(params)
  const passager = useGetPassager(id)

  return <PassagerForm title={'Edit Employee'} passager={passager} />
}

export default EditEmployee
