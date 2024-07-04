import { Select as SelectComponent } from './ui/select'

export interface SelectProps
  extends React.ComponentProps<typeof SelectComponent> {
  children?: React.ReactNode
  placeholder?: string
  contentClass?: string
  triggerClass?: string
  error?: string
  disabledPlaceholder?: string
  disabled?: boolean
}
