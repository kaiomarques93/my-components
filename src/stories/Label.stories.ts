import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../../packages/core/src/'
import React from 'react'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    className: '',
    required: true,
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    required: true,
    children: 'Label',
  },
}

export default meta
