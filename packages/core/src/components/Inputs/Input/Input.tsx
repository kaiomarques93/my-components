import React from 'react'

import { inputVariants } from './Input.variants'
import { InputProps } from './Input.types'
import { cn } from '@/utils/cn'
import { ValidationError } from '@/components/ValidationError'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, width, error, placeholder, ...props }, ref) => {
    return (
      <>
        <input
          data-error={!!error}
          placeholder={placeholder}
          className={cn(inputVariants({ variant, className }))}
          style={{ width: `${width}px` }}
          ref={ref}
          {...props}
        />
        <ValidationError error={error} />
      </>
    )
  },
)

Input.displayName = 'Input'

export default Input
