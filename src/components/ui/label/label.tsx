import { FC, ReactNode } from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  children?: ReactNode
  size?: TypographySizeType
  className?: string
  ariaDisabled?: boolean
}

export const Label: FC<Props> = ({ size, className, ariaDisabled, ...rest }) => {
  return (
    <label>
      <Typography aria-disabled={ariaDisabled} className={className} size={size} {...rest} />
    </label>
  )
}
