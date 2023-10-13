import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalCount: 100,
    siblingCount: 1,
    pageSize: 10,
  },
  argTypes: {
    totalCount: {
      control: 'select',
      options: [5, 10, 30, 50, 80, 100, 200],
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

type PaginationComponentProps = {
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
  onChangePage: (pageNumber: number) => void
}

export const PaginationComponent: Story = {
  render: (args: PaginationComponentProps) => {
    const [_, updateArgs] = useArgs()
    const onPageChange = (page: number) => {
      updateArgs({ ...args, currentPage: page })
    }

    return <Pagination {...args} currentPage={args.currentPage} onChangePage={onPageChange} />
  },
}
