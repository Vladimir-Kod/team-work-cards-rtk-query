import { FC, ReactNode } from 'react'

import s from './card.module.scss'

type Props = {
  className?: string
  children?: ReactNode
}

export const Card: FC<Props> = ({ className = '', children, ...restProps }) => {
  return (
    <div className={`${className} ${s.root}`} {...restProps}>
      {children}
    </div>
  )
}
