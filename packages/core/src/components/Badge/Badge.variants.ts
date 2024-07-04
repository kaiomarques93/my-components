import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'flex items-center gap-1 w-fit px-[7px] py-[5px] text-xs',
  {
    variants: {
      variant: {
        default: `bg-badge-answered text-text-badge-answered`,
        Respondido: `bg-badge-answered text-text-badge-answered`,
        Iniciado: `bg-badge-started text-text-badge-started`,
        Concluído: `bg-badge-done text-white`,
        Excluído: `bg-danger-opacity text-danger`,
        Transferido: `bg-primary-blue text-white`,
        Cancelado: `bg-danger text-white`,
        'Em espera': `bg-badge-waiting text-text-badge-waiting`,
        mediumBlue: 'text-text-badge-answered bg-medium-blue',
        hardBlue: 'text-text-badge-answered bg-hard-blue',
        white: 'text-text-primary bg-white border border-background-lines',
        gray: 'text-text-primary bg-background-gray',
        dark: 'text-text-primary bg-background-lines',
        black: 'text-white bg-black',
        light: 'text-text-primary bg-background-light',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'default',
    },
  },
)
