import { Label } from '@/components/Label'
import { ValidationError } from '@/components/ValidationError'
import { cn } from '@/utils/cn'
import { Select, SelectItem } from '../Select/Select'
import { SelectWithLabelProps } from './SelectWithLabel.types'

const SelectWithLabel = ({
  title,
  containerClass,
  options,
  error,
  required,
  ...props
}: SelectWithLabelProps) => {
  return (
    <div className={cn('space-y-2', containerClass)}>
      <Label required={required}>{title}</Label>
      <Select {...props} error={error}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="">
            {option.label}
          </SelectItem>
        ))}
      </Select>
      <ValidationError error={error} />
    </div>
  )
}

export default SelectWithLabel
