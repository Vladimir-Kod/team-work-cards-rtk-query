import { SliderProps } from '@radix-ui/react-slider'
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import { SliderRoot } from '@/components/ui/slider'

const meta = {
  title: 'Components/SliderRoot',
  component: SliderRoot,
  tags: ['autodocs'],
  args: {
    minMaxValues: [33, 66],
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof SliderRoot>

export default meta
type Story = StoryObj<typeof meta>

type SliderTestProps = {
  className?: string
  changeSliderValue: (value: number[]) => void
  minMaxValues: number[] | ((() => number[]) & number[])
} & SliderProps

export const SliderWithStory: Story = {
  render: (args: SliderTestProps) => {
    const [_, updateArgs] = useArgs()

    const changeMinMaxValues = (arr: number[]) => {
      updateArgs({ ...args, minMaxValues: arr })
    }

    return (
      <SliderRoot
        {...args}
        changeSliderValue={changeMinMaxValues}
        minMaxValues={args.minMaxValues}
        step={args.step}
        max={args.max}
      />
    )
  },
}
