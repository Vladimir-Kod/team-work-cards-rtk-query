import {ComponentPropsWithoutRef, FC} from 'react'

import { Typography, TypographySizeType } from '@/components/ui/typography'

type Props = {
  size?: TypographySizeType
  className?: string
  ariaDisabled?: boolean
  value: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<Props> = ({ size, className, ariaDisabled, value, ...restProps }) => {
  return (
    <label {...restProps}>
      <Typography aria-disabled={ariaDisabled} className={className} size={size}>
        {value}
      </Typography>
    </label>
  )
}
