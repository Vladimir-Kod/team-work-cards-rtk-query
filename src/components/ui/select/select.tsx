import { forwardRef } from 'react'

import * as Select from '@radix-ui/react-select'
import { SelectItemProps, SelectProps } from '@radix-ui/react-select'

import s from './select.module.scss'

import { ArrowDown } from '@/assets/icons'
import { Label } from '@/components/ui/label/label.tsx'
import { Typography } from '@/components/ui/typography'

export type SelectType = {
  selectItemValue?: string[]
  placeHolderValue?: string
  labelValue: string
} & SelectProps

export const SelectRoot = (props: SelectType) => {
  const { disabled, onValueChange, selectItemValue, placeHolderValue, labelValue } = props

  const changeCurrentValue = (value: string) => {
    onValueChange?.(value)
  }

  return (
    <div className={s.root}>
      <Select.Root onValueChange={changeCurrentValue} disabled={disabled}>
        <div className={s.headerSelect}>
          {labelValue && (
            <Label ariaDisabled={disabled} size={'body2'} className={s.label} value={labelValue} />
          )}
          <Select.Trigger className={s.trigger}>
            <Select.Value
              placeholder={
                <Typography aria-disabled={disabled} size={'body1'} className={s.typography}>
                  {placeHolderValue}
                </Typography>
              }
            />
            <Select.Icon className={s.ArrowDownIcon}>
              <ArrowDown />
            </Select.Icon>
          </Select.Trigger>
        </div>
        <Select.Content className={s.SelectContent} position="popper" sideOffset={-4}>
          <div className={s.d}></div>
          <Select.Viewport>
            {selectItemValue &&
              selectItemValue.map(el => {
                return (
                  <SelectItem key={el} className={s.item} value={el}>
                    <Typography aria-disabled={disabled} size={'body1'} className={s.typography}>
                      {el}
                    </Typography>
                  </SelectItem>
                )
              })}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, ref) => {
    return (
      <Select.Item className={className} value={value} {...props} ref={ref}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
