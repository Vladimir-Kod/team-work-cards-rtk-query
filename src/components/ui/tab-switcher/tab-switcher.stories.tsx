import type { Meta, StoryObj } from '@storybook/react'

import { TabsSwitcher } from '@/components/ui/tab-switcher'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TabsSwitcherDefault: Story = {
  args: {
    labelValue: 'Title',
    tabValue: ['Switcher 1', 'Switcher 2', 'Switcher 3', 'Switcher 4'],
    tabContent: ['', '', '', ''],
  },
}

export const TabsSwitcherDisabled: Story = {
  args: {
    labelValue: 'Title',
    tabValue: ['Switcher 1', 'Switcher 2', 'Switcher 3', 'Switcher 4'],
    tabContent: ['', '', '', ''],
    disabled: true,
  },
}
