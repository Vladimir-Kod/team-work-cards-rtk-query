import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography.tsx'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const text = 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH'

export const Large: Story = {
  args: {
    children: text,
    size: 'large',
  },
}

export const H1: Story = {
  args: {
    children: text,
    size: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: text,
    size: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: text,
    size: 'h3',
  },
}
export const Body1: Story = {
  args: {
    children: text,
    size: 'body1',
  },
}
export const Subtitle1: Story = {
  args: {
    children: text,
    size: 'subtitle1',
  },
}
export const Body2: Story = {
  args: {
    children: text,
    size: 'body2',
  },
}
export const Subtitle2: Story = {
  args: {
    children: text,
    size: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: text,
    size: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: text,
    size: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: text,
    size: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: text,
    size: 'link2',
  },
}
