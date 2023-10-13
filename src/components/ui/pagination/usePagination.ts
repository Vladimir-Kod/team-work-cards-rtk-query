import { useCallback, useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

export const DOTS = '...'

type Type = {
  totalCount: number
  currentPage: number
  pageSize: number
  siblingCount?: number
  onChange: (pageNumber: number) => void
}

type PaginationRange = (number | '...')[]
export const usePagination = (props: Type) => {
  const { totalCount, currentPage, siblingCount = 1, pageSize, onChange } = props

  const arrayPages = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage]) as PaginationRange

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === arrayPages.at(-1)

  const handleNextPageClicked = useCallback(() => {
    onChange(currentPage + 1)
  }, [currentPage, onChange])

  const handlePreviousPageClicked = useCallback(() => {
    onChange(currentPage - 1)
  }, [currentPage, onChange])

  const handleCurrentPageClicked = (pageNumber: number) => {
    return () => onChange(pageNumber)
  }

  return {
    arrayPages,
    isFirstPage,
    isLastPage,
    handleNextPageClicked,
    handlePreviousPageClicked,
    handleCurrentPageClicked,
  }
}
