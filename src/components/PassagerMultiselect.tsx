'use client'
import { FC, useEffect, useState } from 'react'
import MultiSelectWithChips from './MultiSelectChips'
import { useGetPassagers } from '@/service/passagerServices'
import { Passager } from '@/types'

type PassagerMultiselectProps = {
  label?: string
  values: Passager[]
  onChange: (value: object[]) => void
}

const PassagerMultiselect: FC<PassagerMultiselectProps> = ({
  label = 'Passagers',
  values,
  onChange
}) => {
  const { data: passagerData, isLoading } = useGetPassagers({ page: 1 })
  const [formatedData, setFormatedData] = useState([])

  useEffect(() => {
    if (values && !isLoading) {
      const test = values[0]
      const val =
        test && typeof test === 'string'
          ? passagerData?.data.filter((pd: Passager) =>
              values.includes(pd.documentId)
            )
          : values
      setFormatedData(val)
    }
  }, [values, isLoading, passagerData?.data])

  return (
    <>
      <MultiSelectWithChips
        label={label}
        options={passagerData?.data}
        value={formatedData}
        onChange={onChange}
      />
    </>
  )
}

export default PassagerMultiselect
