import { FC, ReactNode } from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  children?: ReactNode
  size?: TypographySizeType
  className?: string
  disabled?: boolean
}

export const Label: FC<Props> = ({ size, className, disabled, ...rest }) => {
  return <Typography aria-disabled={disabled} className={className} size={size} {...rest} />
}
