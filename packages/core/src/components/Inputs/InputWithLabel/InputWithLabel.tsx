import React from 'react'

import { cn } from '../../../utils/cn'
import { Label } from '../../Label'
import { Input } from '../Input/'
import { InputWithLabelProps } from './InputWithLabel.types'

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      label,
      error,
      className,
      placeholder,
      value,
      onChange,
      disabled,
      inputClassName,
      variant,
      required,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <div className={cn('space-y-2', className)}>
        <Label required={required}>{label}</Label>
        <Input
          className={inputClassName}
          ref={ref}
          variant={variant}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...inputProps}
          error={error}
        />
      </div>
    )
  },
)

InputWithLabel.displayName = 'InputWithLabel'

export default InputWithLabel
