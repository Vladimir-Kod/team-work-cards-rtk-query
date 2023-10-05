import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: ['Some checkBox'],
    error: ['Error'],
    disabled: ['false', 'true'],
    password: ['false', 'true'],
    search: ['false', 'true'],
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {
    value: 'Input',
  },
}
export const InputError: Story = {
  args: {
    value: 'Input',
    error: 'Error',
  },
}
export const InputDisabled: Story = {
  args: {
    value: 'Input',
    error: '',
    disabled: true,
  },
}
export const InputPassword: Story = {
  args: {
    value: 'Input',
    error: '',
    disabled: false,
    password: true,
  },
}
export const InputSearch: Story = {
  args: {
    value: 'Input',
    error: '',
    disabled: false,
    password: false,
    search: true,
  },
}
