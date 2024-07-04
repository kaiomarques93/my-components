import { Meta, StoryObj } from '@storybook/react'
import { MaskWithLabel } from '@/index'

const meta: Meta<typeof MaskWithLabel> = {
  title: 'Components/Inputs/MaskWithLabel',
  component: MaskWithLabel,
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
    mask: {
      control: 'text',
      description: 'Mask for the input field',
    },
    format: {
      control: 'text',
      description: 'Pattern format for the input',
    },
  },
} satisfies Meta<typeof MaskWithLabel>

type Story = StoryObj<typeof MaskWithLabel>

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
    mask: '_',
    format: '###-###',
  },
}

export default meta
