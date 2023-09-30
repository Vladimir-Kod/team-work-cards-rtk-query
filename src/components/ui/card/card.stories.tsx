import { StoryObj, Meta } from '@storybook/react'

import { Card } from '@/components/ui/card/card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  // argTypes: {
  // },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDefault: Story = {
  args: {
    children: (
      <>
        <p>Card</p>
      </>
    ),
  },
}
