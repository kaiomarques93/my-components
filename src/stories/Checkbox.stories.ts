import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../packages/core/src/'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: '',
  },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}

export default meta
