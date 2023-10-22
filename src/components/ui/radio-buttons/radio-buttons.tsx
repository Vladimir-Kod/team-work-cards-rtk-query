import { ComponentPropsWithoutRef, FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-buttons.module.scss'

import { Typography } from '@/components/ui/typography'

export type RadioButtonsProps = {
  radioGroupContent: string[]
  isDisabled?: boolean
  onValueChange?: (value: string) => void
  name?: string
  defaultValue?: string
} & ComponentPropsWithoutRef<'div'>
export const RadioButtons: FC<RadioButtonsProps> = ({
  radioGroupContent,
  isDisabled,
  defaultValue,
}) => (
  <form>
    <RadioGroup.Root
      disabled={isDisabled}
      className={s.RadioGroupRoot}
      defaultValue={defaultValue}
      aria-label="View density"
    >
      {radioGroupContent.map((el, index) => (
        <div key={index} className={s.content}>
          <RadioGroup.Item className={s.RadioGroupItem} value={el} id={index.toString()}>
            <div className={s.RadioGroupIndicatorEmptyCircle}>
              <RadioGroup.Indicator className={s.RadioGroupIndicator} />
            </div>
          </RadioGroup.Item>

          <Typography
            as={'label'}
            className={s.typography}
            size={'body2'}
            htmlFor={index.toString()}
          >
            {el}
          </Typography>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
)
