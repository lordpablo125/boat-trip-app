import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Para métodos como toBeInTheDocument
import BoatCard from '../../components/BoatCard'

describe('BoatCard tests', () => {
  const mockBoats = [
    {
      name: 'Speedster',
      brand: 'Yamaha',
      model: '2023',
      maximum_capacity: 6,
      image: '/path/to/image1.jpg'
    },
    {
      name: 'WaveRunner',
      brand: 'Sea-Doo',
      model: '2022',
      maximum_capacity: 4,
      image: '/path/to/image2.jpg'
    }
  ]

  it('renders the title correctly', () => {
    render(<BoatCard boats={[]} />)
    expect(screen.getByText('Boats list')).toBeInTheDocument()
  })

  it('renders no boats when the list is empty', () => {
    render(<BoatCard boats={[]} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders boats correctly', () => {
    render(<BoatCard boats={mockBoats} />)
    // Verifica que los nombres de los botes se rendericen
    expect(screen.getByText('Speedster')).toBeInTheDocument()
    expect(screen.getByText('WaveRunner')).toBeInTheDocument()
    // Verifica que las imágenes tengan el atributo correcto
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', '/path/to/image1.jpg')
    expect(images[1]).toHaveAttribute('src', '/path/to/image2.jpg')
  })

  it('renders boat details correctly', () => {
    render(<BoatCard boats={mockBoats} />)
    // Verifica detalles de un bote
    expect(screen.getByText('Brand: Yamaha')).toBeInTheDocument()
    expect(screen.getByText('model: 2023')).toBeInTheDocument()
    expect(screen.getByText('Maximum Capacity: 6')).toBeInTheDocument()
  })
})
