import { FC } from 'react'

import * as Slider from '@radix-ui/react-slider'
import { SliderProps } from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/typography'

type Props = {
  className?: string
  changeSliderValue: (value: number[]) => void
  minMaxValues: number[]
} & SliderProps

export const SliderRoot: FC<Props> = ({ minMaxValues, max, step, changeSliderValue }) => {

  const changeCurrentValue = (value: number[]) => {
    changeSliderValue(value)
  }

  return (
    <form>
      <div className={s.root}>
        <div className={s.sliderContainer}>
          <div className={s.minValue}>
            <Typography size={'body1'} className={s.typography}>
              {minMaxValues ? minMaxValues[0] : ''}
            </Typography>
          </div>
          <Slider.Root
            onValueChange={changeCurrentValue}
            className={s.SliderRoot}
            defaultValue={minMaxValues}
            max={max}
            step={step}
          >
            <Slider.Track className={s.SliderTrack}>
              <Slider.Range className={s.SliderRange} />
            </Slider.Track>
            <Slider.Thumb className={s.SliderThumb} aria-label="Volume">
              <div className={s.CenterSliderThumb}></div>
            </Slider.Thumb>
            <Slider.Thumb className={s.SliderThumb} aria-label="Volume1">
              <div className={s.CenterSliderThumb}></div>
            </Slider.Thumb>
          </Slider.Root>
          <div className={s.maxValue}>
            <Typography size={'body1'} className={s.typography}>
              {minMaxValues ? minMaxValues[1] : ''}
            </Typography>
          </div>
        </div>
      </div>
    </form>
  )
}
