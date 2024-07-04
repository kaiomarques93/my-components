import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../packages/core/src/'

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
    className: '',
    placeholder: 'Input',
    width: 200,
    error: '',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'gray',
        'red',
        'disabled',
        'transparentLight',
        'transparentDark',
      ],
      control: { type: 'select' },
    },
    className: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'number' },
    },
    error: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export default meta
