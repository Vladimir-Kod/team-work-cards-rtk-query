import type { Meta, StoryObj } from '@storybook/react'

import { SliderRoot } from '@/components/ui/slider'

const meta = {
  title: 'Components/SliderRoot',
  component: SliderRoot,
  tags: ['autodocs'],
} satisfies Meta<typeof SliderRoot>

export default meta
type Story = StoryObj<typeof meta>

export const SliderDefault: Story = {
  args: {
    defaultValue: [33, 66],
    max: 100,
    step: 1,
  },
}
