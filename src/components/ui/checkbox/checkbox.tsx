import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { Check } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

export type CheckboxProps = {
  id?: string
  required?: boolean
  label?: string
  className?: string
  disabled?: boolean
  checked?: boolean
  onValueChange?: (checked: boolean) => void
}
export const Checkbox = (props: CheckboxProps) => {
  const { checked = false, onValueChange, disabled, id, label, ...rest } = props

  return (
    <div className={s.checkboxWrapper}>
      <CheckboxPrimitive.Root
        className={`${s.checkboxRoot}`}
        checked={checked}
        onCheckedChange={onValueChange}
        disabled={disabled}
        id={id}
        {...rest}
      >
        <div className={s.checkboxHighlight} />
        {checked && (
          <CheckboxPrimitive.Indicator className={s.indicator} forceMount>
            <Check />
          </CheckboxPrimitive.Indicator>
        )}
      </CheckboxPrimitive.Root>
      <label htmlFor={id}>
        <Typography size={'body2'} className={s.labelText}>
          {label}
        </Typography>
      </label>
    </div>
  )
}
