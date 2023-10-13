import {ChangeEvent, ComponentPropsWithoutRef, FC, useState} from 'react'

import s from './input.module.scss'

import { EyeIcon, EyeOffIcon, SearchIcon, XIcon } from '@/assets/icons'
import { Label } from '@/components/ui/label'



type Props = {
  value?: string
  error?: string
  disabled?: boolean
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>


export const Input: FC<Props> = ({value, error, disabled, password, search, ...restProps}) => {
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
      <Label ariaDisabled={disabled} size={'body2'} className={s.Label} value={value || ''} id={'2'}/>
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
          {...restProps}
        />
      </div>
      <Label size={'overline'} className={s.Error} value={error || ''}/>
    </div>
  )
}
