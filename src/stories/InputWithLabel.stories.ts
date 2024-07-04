import { Meta, StoryObj } from '@storybook/react'
import { InputWithLabel } from '../../packages/core/src'

const meta: Meta<typeof InputWithLabel> = {
  title: 'Components/Inputs/InputWithLabel',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    variant: {
      options: [
        'default',
        'gray',
        'red',
        'disabled',
        'transparentLight',
        'transparentDark',
      ],
      control: 'select',
      description: 'Variant of the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to be displayed',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for the container',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    value: {
      control: 'text',
      description: 'Value of the input field',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when the input value changes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    inputClassName: {
      control: 'text',
      description: 'Custom CSS classes for the input',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
} satisfies Meta<typeof InputWithLabel>

type Story = StoryObj<typeof InputWithLabel>

export const Default: Story = {
  args: {
    label: 'Label',
    error: '',
    className: '',
    placeholder: 'Input',
    value: '',
    disabled: false,
    inputClassName: '',
    variant: 'default',
    required: false,
  },
}

export default meta
