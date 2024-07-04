import type { Meta, StoryObj } from '@storybook/react'
import Badge from '../../packages/core/src/components/Badge/Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'Badge',
    rounded: 'default',
    className: '',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'Respondido',
        'Iniciado',
        'Concluído',
        'Excluído',
        'Transferido',
        'Cancelado',
        'Em espera',
        'mediumBlue',
        'hardBlue',
        'white',
        'gray',
        'dark',
        'black',
        'light'
      ],
      control: { type: 'select' },
    },
    rounded: {
      options: ['default', 'sm', 'none'],
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
  },
}

export default meta
