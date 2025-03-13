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
}

const MultiSelectWithChips: FC<Props> = ({ label = 'Seleccione', options }) => {
  const [selectedValues, setSelectedValues] = useState([])

  if (!options) {
    return <></>
  }

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.name}
      value={selectedValues}
      onChange={(event, newValue) => setSelectedValues(newValue)}
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
