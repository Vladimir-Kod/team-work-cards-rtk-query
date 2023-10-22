import type { Meta, StoryObj } from '@storybook/react'

import { RadioButtons } from '@/components/ui/radio-buttons/radio-buttons.tsx'

const meta = {
  title: 'Components/RadioGroupCustom',
  component: RadioButtons,
  // tags: ['autodocs'],
  // argTypes: {
  //   value: ['Some checkBox'],
  // },
} satisfies Meta<typeof RadioButtons>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    radioGroupContent: ['defaultValue', 'RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
    isDisabled: false,
    defaultValue: 'defaultValue',
  },
}
export const RadioGroupDisabled: Story = {
  args: {
    radioGroupContent: ['defaultValue', 'RadioGroup1', 'RadioGroup2', 'RadioGroup3', 'RadioGroup4'],
    isDisabled: true,
  },
}
