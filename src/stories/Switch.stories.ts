import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/index'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {},
}

export default meta
