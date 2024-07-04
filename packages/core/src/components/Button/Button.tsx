import { forwardRef } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { VscLoading } from 'react-icons/vsc'
import { cn } from '../../utils/cn'
import { ButtonProps } from './Button.types'
import { buttonVariants } from './Button.variants'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    children,
    variant,
    size,
    rounded,
    hasIcon,
    loading,
    disabled,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
      disabled={loading || disabled}
    >
      {hasIcon && <MdOutlineAdd />}
      {loading ? (
        <div className="flex items-center gap-2">
          <span>Aguarde</span>
          <VscLoading className="animate-spin" />
        </div>
      ) : (
        children && <div>{children}</div>
      )}
    </button>
  )
})

export default Button
