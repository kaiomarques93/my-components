import { FC } from 'react'
import { PatternFormat } from 'react-number-format'

import { Label } from '@/components/Label'
import { ValidationError } from '@/components/ValidationError'
import { cn } from '@/utils/cn'
import { inputVariants } from '../Input/Input.variants'
import { MaskWithLabelProps } from './MaskWithLabel.types'

const MaskWithLabel: FC<MaskWithLabelProps> = ({
  label,
  error,
  className,
  variant,
  inputClassName,
  required,
  ...props
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <Label required={required}>{label}</Label>
      <div className="relative">
        <PatternFormat
          {...props}
          className={cn(inputVariants({ variant }), inputClassName)}
          data-error={!!error}
        />
        <ValidationError error={error} />
      </div>
    </div>
  )
}

MaskWithLabel.displayName = 'MaskWithLabel'

export default MaskWithLabel
