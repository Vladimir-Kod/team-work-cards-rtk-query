import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckboxChecked: Story = {
  args: {
    checked: true,
  },
}

export const CheckboxUnChecked: Story = {
  args: {
    checked: false,
  },
}

export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const CheckboxLabel: Story = {
  args: {
    label: 'Checkbox',
  },
}
