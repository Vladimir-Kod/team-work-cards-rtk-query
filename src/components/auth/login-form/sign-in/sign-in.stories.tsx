import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './sign-in.tsx'

const meta = {
  title: 'Auth/Sign In',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
