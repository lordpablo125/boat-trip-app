import React, { FC, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'

interface OptionType {
  id: number
  name: string
}

type Props = {
  label: string
  options: OptionType[]
  value: object[]
  onChange: (value: object[]) => void
}

const MultiSelectWithChips: FC<Props> = ({
  label = 'Seleccione',
  options,
  value,
  onChange
}) => {
  if (!options) {
    return <></>
  }
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.name}
      value={value}
      onChange={handleChange}
      renderTags={(value) =>
        value.map((option) => (
          <Chip
            className='mr-1'
            key={option.name}
            label={option.name}
            color='info'
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} variant='outlined' label={label} />
      )}
    />
  )
}

export default MultiSelectWithChips
