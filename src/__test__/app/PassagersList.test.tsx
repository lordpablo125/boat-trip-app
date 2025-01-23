import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PassagersList from '@/components/PassagersList'

//Test SSR
describe('PassagersList tests', () => {
  it('renders the title correctly', async () => {
    const mockPassagers = [
      { id: 1, name: 'John Doe', dni: '12345678' },
      { id: 2, name: 'Jane Doe', dni: '87654321' }
    ]

    it('renders the title "Passagers List"', () => {
      render(<PassagersList passagers={[]} />)
      expect(screen.getByText('Passagers List')).toBeInTheDocument()
    })

    it('renders the table headers', () => {
      render(<PassagersList passagers={[]} />)
      expect(screen.getByText('Id')).toBeInTheDocument()
      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('DNI')).toBeInTheDocument()
    })

    it('displays the passagers information correctly', () => {
      render(<PassagersList passagers={mockPassagers} />)
      mockPassagers.forEach(({ id, name, dni }) => {
        expect(screen.getByText(id.toString())).toBeInTheDocument()
        expect(screen.getByText(name)).toBeInTheDocument()
        expect(screen.getByText(dni)).toBeInTheDocument()
      })
    })
  })
})
