import type { Meta, StoryObj } from '@storybook/react'
import { SelectWithLabel } from '@/components/Selects'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]

const meta: Meta<typeof SelectWithLabel> = {
  title: 'Components/SelectWithLabel',
  component: SelectWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Select with label',
    containerClass: '',
    options: options,
    error: '',
    required: false,
    placeholder: 'Select an option',
    disabledPlaceholder: 'No options',
    disabled: false,
    contentClass: '',
    triggerClass: '',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    containerClass: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'object' },
    },
    error: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabledPlaceholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof SelectWithLabel>

type Story = StoryObj<typeof SelectWithLabel>

export const Default: Story = {
  args: {},
}

export default meta
