import * as CheckboxRadix from '@radix-ui/react-checkbox'
import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { cn } from '../../utils/cn'
import { WithRefProps, WithoutRefProps } from './Checkbox.types'

const Checkbox = React.forwardRef<WithRefProps, WithoutRefProps>(
  ({ className, ...props }, ref) => (
    <CheckboxRadix.Root
      ref={ref}
      className={cn(
        'flex h-[15px] w-[15px] appearance-none items-center justify-center rounded-sm border-[1px] border-solid border-background-lines bg-white hover:outline hover:outline-1 hover:outline-primary-blue',
        className,
      )}
      {...props}
    >
      <CheckboxRadix.Indicator className="text-background-branco flex rounded-sm bg-primary-blue">
        <BiCheck fontSize={14} className="text-white" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  ),
)

Checkbox.displayName = CheckboxRadix.Root.displayName

export default Checkbox

export { Checkbox }
