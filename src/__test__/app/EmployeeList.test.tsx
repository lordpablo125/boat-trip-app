import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmployeeList from '@/components/EmployeeList'

//Test SSR
describe('EmployeeList tests', () => {
  const mockEmployees = [
    { id: 1, name: 'John Doe', role: 'Manager' },
    { id: 2, name: 'Jane Smith', role: 'Engineer' }
  ]

  it('renders the title correctly', async () => {
    render(await EmployeeList({ employees: [] }))
    expect(screen.getByText('Employee List')).toBeInTheDocument()
  })

  it('renders a table with employee data', async () => {
    render(await EmployeeList({ employees: mockEmployees }))

    expect(screen.getByText('Id')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Role')).toBeInTheDocument()

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Manager')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })
})
