import { PatternFormat } from 'react-number-format'
import { InputVariants } from '../Input'

export type PatternFormatProps = React.ComponentProps<typeof PatternFormat>

export interface MaskWithLabelProps extends PatternFormatProps, InputVariants {
  label: string
  error?: string
  className?: string
  inputClassName?: string
  required?: boolean
}
