import { FC } from 'react'
import MultiSelectWithChips from './MultiSelectChips'
import { useGetPassagers } from '@/service/passagerServices'
import { Passager } from '@/types'

type PassagerMultiselectProps = {
  label?: string
  value: Passager[]
  onChange: (value: object[]) => void
}

const PassagerMultiselect: FC<PassagerMultiselectProps> = ({
  label = 'Passagers',
  value,
  onChange
}) => {
  const { data: passagerData } = useGetPassagers({ page: 1 })

  return (
    <>
      <MultiSelectWithChips
        label={label}
        options={passagerData?.data}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default PassagerMultiselect
