import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  'overflow-hidden rounded border border-background-lines focus:ring-[1px] outline-none h-10 px-3 text-sm h-[30px] md:h-[40px] text-xs md:text-sm data-[error=true]:ring-danger data-[error=true]:border-danger',
  {
    variants: {
      variant: {
        default:
          'bg-white placeholder-text-description ring-black text-field-text',
        gray: 'bg-[#EDEDED] placeholder-text-description ring-black text-field-text',
        red: 'bg-[#EDEDED] border-danger rounded-md ring-black text-field-text',
        disabled: 'bg-background-gray placeholder-[#C6C6C6] text-field-text',
        transparentLight:
          'bg-transparent placeholder-white text-white ring-black border-white',
        transparentDark:
          'bg-transparent border-text-primary placeholder-text-primary text-text-primary ring-black',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
