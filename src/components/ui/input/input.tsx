import { ChangeEvent, useState } from 'react'

import s from './input.module.scss'

import { EyeIcon, EyeOffIcon, SearchIcon, XIcon } from '@/assets/icons'
import { Label } from '@/components/ui/label'

type Props = {
  value?: string
  error?: string
  disabled?: boolean
  password?: boolean
  search?: boolean
}

export const Input = (props: Props) => {
  const { value, error, disabled, password, search } = props
  const [inputValue, setInputValue] = useState('')
  const [isTypePassword, setIsTypePassword] = useState(password)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClearInput = () => {
    setInputValue('')
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
      <Label areaDisabled={disabled} size={'body2'} className={s.Label}>
        {value}
      </Label>
      <div className={s.InputContainer}>
        {search && <SearchIcon className={s.SearchIcon} />}
        {inputValue && search && <XIcon className={s.XIcon} onClick={handleClearInput} />}
        {password && isTypePassword && (
          <EyeIcon onClick={changeTypePassword} className={s.EyeIcon} />
        )}
        {password && !isTypePassword && (
          <EyeOffIcon onClick={changeTypePassword} className={s.EyeIcon} />
        )}

        <input
          disabled={disabled}
          className={`${error ? s.InputError : s.Input} ${search ? s.WithSearchIcon : ''}`}
          type={isTypePassword ? 'password' : 'text'}
          placeholder={value}
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      <Label size={'overline'} className={s.Error}>
        {error}
      </Label>
    </div>
  )
}
