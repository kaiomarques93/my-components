import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/Button/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'Button',
    rounded: 'default',
    className: '',
    disabled: false,
    loading: false,
    hasIcon: false,
    size: 'default',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'light',
        'dark',
        'outlineBlue',
        'green',
        'outlineGray',
        'white',
        'danger',
        'black',
        'disabled',
        'loading',
        'blueText',
        'outlineWhite',
      ],
      control: { type: 'select' },
    },
    rounded: {
      options: ['default', 'sm', 'md', 'full'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'xs'],
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    hasIcon: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
}

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Button',
  },
}

export default meta
