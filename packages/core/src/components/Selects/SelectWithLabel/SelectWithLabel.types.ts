import { Select } from '../Select/Select'

type SelectProps = React.ComponentProps<typeof Select>

export type OptionsProps = {
  value: string
  label: string
}

export interface SelectWithLabelProps extends SelectProps {
  title: string
  containerClass?: string
  options: OptionsProps[]
  error?: string
  required?: boolean
}
