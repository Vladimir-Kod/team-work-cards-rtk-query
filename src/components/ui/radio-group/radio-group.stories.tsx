import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupCustom } from '@/components/ui/radio-group/radio-group.tsx'

const meta = {
  title: 'Components/RadioGroupCustom',
  component: RadioGroupCustom,
  // tags: ['autodocs'],
  // argTypes: {
  //   value: ['Some checkBox'],
  // },
} satisfies Meta<typeof RadioGroupCustom>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    radioGroupContent: ['RadioGroup', 'RadioGroup', 'RadioGroup', 'RadioGroup', 'RadioGroup'],
    isDisabled: false,
  },
}
export const RadioGroupDisabled: Story = {
  args: {
    radioGroupContent: ['RadioGroup', 'RadioGroup', 'RadioGroup', 'RadioGroup', 'RadioGroup'],
    isDisabled: true,
  },
}
