import type { Meta, StoryObj } from '@storybook/react'
import { PageTitle } from '@/components/PageTitle'

const breadcrumbs = [
  { name: 'Cidade Conectada', url: '/' },
  { name: 'Serviços', url: undefined },
]

const meta: Meta<typeof PageTitle> = {
  title: 'Components/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Serviços',
    subtitle: 'Gerencie, edite e crie novos serviços',
    className: '',
    breadcrumbs: breadcrumbs,
    goBackButtonURL: '/',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    className: { control: 'text' },
    breadcrumbs: { control: 'object' },
    goBackButtonURL: { control: 'text' },
    goToPage: { action: 'goToPage' },
    goToPreviousPage: { action: 'goToPreviousPage' },
    goToBreadCrumbLink: { action: 'goToBreadCrumbLink' },
  },
} satisfies Meta<typeof PageTitle>

type Story = StoryObj<typeof PageTitle>

export const Default: Story = {
  args: {},
}

export default meta
