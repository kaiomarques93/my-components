import { cn } from '../../utils/cn'
import { BadgeProps } from './Badge.types'
import { badgeVariants } from './Badge.variants'

function Badge({ children, className, variant, rounded }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, rounded }), className)}>
      {children}
    </div>
  )
}

Badge.displayName = 'Badge'

export default Badge
