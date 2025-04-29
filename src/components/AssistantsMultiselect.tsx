'use client'
import { FC, useEffect, useState } from 'react'
import MultiSelectWithChips from './MultiSelectChips'
import { Employee } from '@/types'
import { useGetAssistants } from '@/service/employeeServices'

type AssistantsMultiselectProps = {
  label?: string
  values: Employee[]
  onChange: (value: object[]) => void
}

const AssistantsMultiselect: FC<AssistantsMultiselectProps> = ({
  label = 'Assistants',
  values,
  onChange
}) => {
  const { data: assistantsData, isLoading } = useGetAssistants()
  const [formatedData, setFormatedData] = useState([])

  useEffect(() => {
    if (values && !isLoading) {
      const test = values[0]
      const val =
        test && typeof test === 'string'
          ? assistantsData?.data.filter((pd: Employee) =>
              values.includes(pd.documentId)
            )
          : values
      setFormatedData(val)
    }
  }, [values, isLoading, assistantsData?.data])

  return (
    <>
      <MultiSelectWithChips
        label={label}
        options={assistantsData?.data}
        value={formatedData}
        onChange={onChange}
      />
    </>
  )
}

export default AssistantsMultiselect
