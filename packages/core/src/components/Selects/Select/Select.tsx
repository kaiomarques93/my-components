import { cn } from '@/utils/cn'
import { SelectProps } from './Select.types'
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const Select = ({
  children,
  disabledPlaceholder,
  placeholder,
  contentClass = 'w-full',
  triggerClass,
  disabled = false,
  error,
  ...props
}: SelectProps) => {
  return (
    <SelectComponent disabled={disabled} {...props}>
      <SelectTrigger
        data-error={!!error}
        className={cn(
          'w-full data-[error=true]:focus:ring-danger data-[error=true]:border-danger',
          triggerClass,
        )}
      >
        <SelectValue
          placeholder={disabled ? disabledPlaceholder : placeholder}
        />
      </SelectTrigger>
      <SelectContent className={cn('h-fit', contentClass)}>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </SelectComponent>
  )
}

export { Select, SelectItem }
