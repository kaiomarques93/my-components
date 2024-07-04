import { cva } from 'class-variance-authority'

export const textVariants = cva('font-publicSans', {
  variants: {
    variant: {
      default: '',
      menu: 'font-medium',
      mediumPrimary: 'text-text-primary font-medium',
      descriptionSm: 'text-text-description text-sm font-normal',
      descriptionTighter: 'text-text-description tracking-tighter',
      primaryMediumTighter: 'text-text-primary font-medium tracking-tighter',
    },
  },
  defaultVariants: {
    variant: 'menu',
  },
})
