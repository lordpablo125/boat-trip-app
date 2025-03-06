'use client'
import BoatCard from '@/components/BoatCard'
import { useGetBoats } from '@/service/boatServices'
import React from 'react'

const BoatPage = () => {
  const { data } = useGetBoats({ page: 1 })

  return <BoatCard boats={data?.data} />
}

export default BoatPage
