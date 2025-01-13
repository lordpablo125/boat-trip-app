import BoatCard from '@/components/BoatCard'
import EmployeeList from '@/components/EmployeeList'
import PassagersList from '@/components/PassagersList'

export default async function Home() {
  return (
    <div className='container'>
      {/* <BoatCard /> */}
      {/* <EmployeeList /> */}
      <PassagersList />
    </div>
  )
}
