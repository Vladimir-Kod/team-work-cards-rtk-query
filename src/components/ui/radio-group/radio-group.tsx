import { FC } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui/typography'

type Props = {
  radioGroupContent: string[]
}
export const RadioGroupCustom: FC<Props> = ({ radioGroupContent }) => (
  <form>
    <RadioGroup.Root className={s.RadioGroupRoot} defaultValue="default" aria-label="View density">
      {radioGroupContent.map((el, index) => (
        <div key={index} className={s.content}>
          <RadioGroup.Item
            className={s.RadioGroupItem}
            value={index.toString()}
            id={index.toString()}
          >
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <label className={s.Label} htmlFor={index.toString()}>
            <Typography className={s.typography} size={'body2'}>
              {el}
            </Typography>
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
)