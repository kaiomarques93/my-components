import { LabelProps } from './Label.types'

const Label = ({ children, required = false, ...props }: LabelProps) => {
  return (
    <label
      className="flex w-fit items-center gap-x-2 text-sm font-medium tracking-tight text-text-primary"
      {...props}
    >
      {children}
      {required && <span className="text-danger">*</span>}
    </label>
  )
}

export default Label
