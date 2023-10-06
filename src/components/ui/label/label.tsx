import { FC, ReactNode } from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  children?: ReactNode
  size?: TypographySizeType
  className?: string
  areaDisabled?: boolean
}

export const Label: FC<Props> = ({ size, className, areaDisabled, ...rest }) => {
  return <Typography aria-disabled={areaDisabled} className={className} size={size} {...rest} />
}
