import { FC, ReactNode } from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  children?: ReactNode
  size?: TypographySizeType
  className?: string
}

export const Label: FC<Props> = ({ size, className, ...rest }) => {
  return <Typography className={className} size={size} {...rest} />
}
