import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'asLink'
  fullWidth?: boolean
  className?: string
  children?: ReactNode
  value?: string
  tabIndex?: number
  isDisabled?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    children = '',
    tabIndex = 0,
    // isDisabled,
    ...rest
  } = props

  /*  const isDisabledAsLink = isDisabled ? s.isDisabledAsLink : ''*/

  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </Component>
  )
}
