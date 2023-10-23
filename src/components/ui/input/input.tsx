import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import s from './input.module.scss'

import { EyeIcon, EyeOffIcon, SearchIcon, XIcon } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

export type InputProps = {
  onValueChange?: (value: string) => void
  onClearInput?: () => void
  labelValue?: string
  errorMessage?: string
  disabled?: boolean
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelValue,
      errorMessage,
      disabled,
      password,
      search,
      onChange,
      onValueChange,
      onClearInput,
      ...restProps
    },
    ref
  ) => {
    // const [inputValue, setInputValue] = useState('')
    const [isTypePassword, setIsTypePassword] = useState(password)
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      onValueChange?.(event.target.value)
    }

    const handleClearInput = () => {
      // onValueChange?.('')
      // onClearInput?.()
    }
    const changeTypePassword = () => {
      if (isTypePassword) {
        setIsTypePassword(false)
      }
      if (!isTypePassword) {
        setIsTypePassword(true)
      }
    }

    return (
      <div className={s.ContainerRoot}>
        <div>
          <Typography
            aria-disabled={disabled}
            as={'label'}
            size={'body2'}
            className={s.Label}
            id={'2'}
          >
            {labelValue || ''}
          </Typography>
        </div>

        <div className={s.InputContainer}>
          {search && <SearchIcon className={s.SearchIcon} />}
          {search && <XIcon className={s.XIcon} onClick={handleClearInput} />}
          {password && isTypePassword && (
            <EyeIcon onClick={changeTypePassword} className={s.EyeIcon} />
          )}
          {password && !isTypePassword && (
            <EyeOffIcon onClick={changeTypePassword} className={s.EyeIcon} />
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={`${errorMessage ? s.InputError : s.Input} ${search ? s.WithSearchIcon : ''}`}
            type={isTypePassword ? 'password' : 'text'}
            placeholder={labelValue}
            onChange={handleInputChange}
            {...restProps}
          />
        </div>

        <Typography size={'overline'} className={s.Error}>
          {errorMessage || ''}
        </Typography>
      </div>
    )
  }
)
