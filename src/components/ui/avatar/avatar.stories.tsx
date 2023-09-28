import type { Meta, StoryObj } from '@storybook/react'

import { HeaderAvatar } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: HeaderAvatar,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: ['true', 'false'],
  //   selectItemValue: ['HTML', 'SCC', 'React'],
  //   placeHolderValue: ['Select-box'],
  //   defaultValue: []
  // },
} satisfies Meta<typeof HeaderAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    imgUrl:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    avatarFallback: 'VK',
  },
}
