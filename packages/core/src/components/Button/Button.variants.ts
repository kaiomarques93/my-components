import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex flex-row items-center gap-x-2 px-3.5 py-2 hover:cursor-pointer text-xs tracking-[-0.24px] whitespace-nowrap transition-all duration-400 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 h-fit',
  {
    variants: {
      variant: {
        default:
          'bg-primary-blue text-white focus:bg-primary-blue-action hover:bg-primary-blue-hover',
        light: 'bg-primary-blue text-white focus:bg-blue-400 hover:bg-blue-300',
        dark: 'bg-blue-900 text-white focus:bg-blue-800 hover:bg-blue-700',
        outlineBlue:
          'bg-white text-primary-blue border border-primary-blue focus:bg-blue-100 hover:bg-blue-50',
        green: 'bg-badge-done text-white hover:bg-badge-done/80',
        outlineGray:
          'bg-background-lines border-[0.5px] border-solid border-neutral-300 hover:bg-hover',
        white:
          'border border-solid border-background-lines bg-white hover:bg-background-lines',
        danger:
          'border text-white border-solid border-background-lines bg-danger hover:bg-danger-hover',
        black:
          'bg-black text-white focus:bg-text-text-primary hover:bg-background-lines hover:text-text-primary',
        disabled:
          'bg-button-inactive text-button-text-inactive border-button-inactive',
        loading: 'bg-button-loading text-text-primary',
        blueText:
          'text-primary-blue border-none bg-transparent font-bold hover:text-primary-blue-hover',
        outlineWhite: 'bg-white hover:bg-hover border border-background-lines',
      },

      size: {
        default: 'text-[16px] py-[10px]',
        sm: 'text-[14px] py-[5px]',
        lg: 'text-[16px] py-[12px]',
        xs: 'text-[12px] px-[7px] py-[5px]',
      },
      rounded: {
        default: 'rounded-[0px]',
        sm: 'rounded-sm',
        md: 'rounded',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
)
