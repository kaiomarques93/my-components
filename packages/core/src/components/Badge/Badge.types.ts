import { VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'
import { badgeVariants } from './Badge.variants'

export type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps extends BadgeVariants {
  children: ReactNode
  className?: string
}
