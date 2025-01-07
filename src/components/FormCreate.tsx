'use client'
import React, { useRef, useState } from 'react'
import {
  TextField,
  TextareaAutosize,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Box
} from '@mui/material'
import { api } from '@/hooks/api'
import { isAxiosError } from 'axios'
import { Category, Product } from '@/types'

type CategoryWithoutName = Omit<Category, 'name'>

type NewProduct = Omit<Product, 'id'> & {
  category: CategoryWithoutName
}

const FormCreate = ({ categories = [] }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const currencyRef = useRef<HTMLSelectElement>(null)
  const categoryIdRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    setIsSubmitting(true)

    const selectedCategory = categories.find(
      (cat) => cat.id === categoryIdRef.current?.value
    )

    const product: NewProduct = {
      name: nameRef.current?.value || '',
      description: descriptionRef.current?.value || '',
      prices: [
        {
          amount: Math.round(parseFloat(priceRef.current?.value || '0') * 100), // Convert to cents
          currency: currencyRef.current?.value || 'USD'
        }
      ],
      category: {
        id: categoryIdRef.current?.value || '',
        name: selectedCategory?.name || 'Unknown Category'
      }
    }

    try {
      const response = await api.post('/products', product)

      if (response.status === 201 || response.status === 200) {
        console.log('Product created:', response.data)
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error('Error creating product:', error?.response?.statusText)
      } else {
        console.error('Network error occurred')
      }
    }

    setIsSubmitting(false)
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <TextField
        label='Product Name'
        name='name'
        inputRef={nameRef}
        placeholder='Product Name'
        required
        fullWidth
      />

      <TextareaAutosize
        minRows={4}
        placeholder='Description'
        name='description'
        ref={descriptionRef}
        required
        style={{
          width: '100%',
          fontSize: '1rem',
          padding: '8px',
          border: '1px solid lightgrey',
          borderRadius: '4px'
        }}
      />

      <TextField
        label='Price'
        type='number'
        name='price'
        inputRef={priceRef}
        placeholder='Price'
        required
        fullWidth
      />

      <FormControl fullWidth required>
        <InputLabel>Currency</InputLabel>
        <Select
          name='currency'
          inputRef={currencyRef}
          defaultValue='USD'
          label='Currency'
        >
          <MenuItem value='USD'>USD</MenuItem>
          <MenuItem value='EUR'>EUR</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth required>
        <InputLabel>Category</InputLabel>
        <Select
          name='categoryId'
          inputRef={categoryIdRef}
          defaultValue=''
          label='Category'
        >
          <MenuItem value=''>
            <em>Select a category</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Add Product'}
      </Button>
    </form>
  )
}

export default FormCreate
