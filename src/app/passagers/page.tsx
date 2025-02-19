'use client'
import PassagersList from '@/components/PassagersList'
import { useGetPassagers } from '@/service/passagerServices'
import React from 'react'

const Page = () => {
  const passagers = useGetPassagers()
  return <PassagersList passagers={passagers} />
}

export default Page
