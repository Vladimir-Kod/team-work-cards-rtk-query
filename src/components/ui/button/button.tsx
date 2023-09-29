import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import { Typography } from '@/components/ui/typography'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
  children?: ReactNode
  value?: string
  tabIndex?: number
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    value = '',
    children = '',
    tabIndex = 1,
    ...rest
  } = props

  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
      <Typography className={s.typography} size={'subtitle2'}>
        {value}
      </Typography>
    </Component>
  )
}
