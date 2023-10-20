import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import s from './input.module.scss'

import { EyeIcon, EyeOffIcon, SearchIcon, XIcon } from '@/assets/icons'
import { Label } from '@/components/ui/label'

type Props = {
  onValueChange?: (value: string) => void
  onClearInput?: () => void
  value?: string
  errorMessage?: string
  disabled?: boolean
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
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

    console.log(ref)
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
        <Label
          ariaDisabled={disabled}
          size={'body2'}
          className={s.Label}
          value={value || ''}
          id={'2'}
        />
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
            placeholder={value}
            onChange={handleInputChange}
            // value={inputValue}
            {...restProps}
          />
        </div>
        <Label size={'overline'} className={s.Error} value={errorMessage || ''} />
      </div>
    )
  }
)
