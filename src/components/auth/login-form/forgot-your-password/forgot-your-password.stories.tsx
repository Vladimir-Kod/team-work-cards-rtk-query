import type { Meta, StoryObj } from '@storybook/react'

import { ForgotYourPassword } from './forgot-your-password.tsx'

const meta = {
  title: 'Auth/Forgot Your Password',
  component: ForgotYourPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotYourPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
