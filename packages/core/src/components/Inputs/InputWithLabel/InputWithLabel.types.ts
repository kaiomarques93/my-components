import { InputProps, InputVariants } from '../Input/'

export interface InputWithLabelProps extends InputProps {
  label: string
  error?: string
  className?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  disabled?: boolean
  inputClassName?: string
  variant?: InputVariants['variant']
  required?: boolean
}
