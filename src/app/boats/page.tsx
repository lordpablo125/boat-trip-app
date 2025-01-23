'use client'
import BoatCard from '@/components/BoatCard'
import { getBoats } from '@/service/boatServices'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [boats, setBoats] = useState([])
  console.log('***  ~ Page  ~ boats:', boats)
  const fetchData = async () => {
    try {
      const data = await getBoats()
      setBoats(data)
    } catch (error) {
      console.error('Failed to fetch boats:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <BoatCard boats={boats} />
}

export default Page
