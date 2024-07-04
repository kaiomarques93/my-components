import { cn } from '@/utils/cn'
import { TextProps } from './Text.types'
import { textVariants } from './Text.variants'

const Text = ({ children, variant, className }: TextProps) => {
  return (
    <span className={cn(textVariants({ variant, className }))}>{children}</span>
  )
}

export default Text
