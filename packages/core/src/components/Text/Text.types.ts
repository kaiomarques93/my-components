import { VariantProps } from 'class-variance-authority'
import { textVariants } from './Text.variants'

export type TextVariants = VariantProps<typeof textVariants>

export interface TextProps extends TextVariants {
  className?: string
  children: React.ReactNode
}
