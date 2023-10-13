import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'


import { usePagination } from '@/components/ui/pagination/usePagination.ts'
import {ArrowLeft, ArrowRight} from "@/assets/icons";

type PaginationProps = {
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className?: string
  onChangePage: (pageNumber: number) => void
}

const classNames = {
  root: s.root,
  item: s.item,
  itemDots: s.itemDots,
  itemNavigate: s.itemNavigate,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
}

export const Pagination: FC<PaginationProps> = ({
  siblingCount = 1,
  totalCount,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  const {
    arrayPages,
    isFirstPage,
    isLastPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleCurrentPageClicked,
  } = usePagination({
    totalCount,
    pageSize,
    currentPage,
    siblingCount,
    onChange: onChangePage,
  })

  return (
    <div className={classNames.root}>
      <NavigateButton onClick={handlePreviousPageClicked} disabled={isFirstPage}>
        <ArrowLeft />
      </NavigateButton>

      <ListPages
        paginationRange={arrayPages}
        currentPage={currentPage}
        onClick={handleCurrentPageClicked}
      />

      <NavigateButton onClick={handleNextPageClicked} disabled={isLastPage}>
        <ArrowRight />
      </NavigateButton>
    </div>
  )
}

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
  children?: ReactNode
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}
const PageButton: FC<PageButtonProps> = ({ page, selected, onClick, disabled }) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      onClick={onClick}
      disabled={selected || disabled}
    >
      {page}
    </button>
  )
}

const NavigateButton: FC<NavigationButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button className={classNames.itemNavigate} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

const Dots: FC = () => {
  return <span className={classNames.itemDots}>&#8230;</span>
}

type ListPagesProps = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}
const ListPages: FC<ListPagesProps> = ({ currentPage, paginationRange, onClick }) => {
  return (
    <>
      {paginationRange.map((pageNumber: number | string, idx: number) => {
        const isSelected = pageNumber === currentPage

        if (typeof pageNumber !== 'number') {
          return <Dots key={idx} />
        }

        return (
          <PageButton
            key={idx}
            onClick={onClick(pageNumber)}
            page={pageNumber}
            selected={isSelected}
          />
        )
      })}
    </>
  )
}
