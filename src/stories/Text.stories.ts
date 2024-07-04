import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/index'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: '',
    children: 'Text',
  },
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    variant: {
      options: [
        'default',
        'menu',
        'mediumPrimary',
        'descriptionSm',
        'descriptionTighter',
        'primaryMediumTighter',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {},
}

export default meta
