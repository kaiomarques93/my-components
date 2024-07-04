import { VariantProps } from 'class-variance-authority'
import { inputVariants } from './Input.variants'

export type InputVariants = VariantProps<typeof inputVariants>

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants {
  width?: number
  error?: string
  placeholder?: string
}
