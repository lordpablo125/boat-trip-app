import PassagersList from '@/components/PassagersList'
import { getPassagers } from '@/service/passagerServices'
import React from 'react'

const Page = async () => {
  const passagers = await getPassagers()
  return <PassagersList passagers={passagers} />
}

export default Page
