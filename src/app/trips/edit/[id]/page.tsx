// 'use server'
'use client'
import TripForm from '@/components/TripsForm'
import { useGetTrip } from '@/service/tripsServices'
import { ParamProp } from '@/types'
import React, { FC, use } from 'react'

const EditEmployee: FC<ParamProp> = ({ params }) => {
  const { id }: { id: string } = use(params)
  const trip = useGetTrip(id)

  return <TripForm title={'Create Trip Form'} trip={trip} />
}

export default EditEmployee
