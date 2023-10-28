import { FC, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TextField, InputProps } from './'
import {Search} from "@/assets/icons";



const meta: Meta<typeof TextField> = {
  title: 'Components/textField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

type UseInputProps = {
  defaultValue: string
} & InputProps
const UseInputWithStorybook: FC<UseInputProps> = ({ defaultValue, ...args }) => {
  const [value, setValue] = useState(defaultValue)

  return <TextField {...args} value={value} onChangeText={setValue} />
}

export const DefaultInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#default'}
        label={'Default-input'}
        defaultValue={''}
        placeholder={'Default'}
      />
    )
  },
}

export const SearchInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#search'}
        label={'Search-input'}
        defaultValue={''}
        placeholder={'Search'}
        leftIcon={<Search />}
        variant={'search'}
      />
    )
  },
}

export const PasswordInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#password'}
        label={'Password-input'}
        defaultValue={''}
        placeholder={'Password'}
        variant={'password'}
      />
    )
  },
}

export const ErrorInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#error'}
        label={'Error-input'}
        defaultValue={''}
        placeholder={'Error'}
        error={'Error !!!!'}
      />
    )
  },
}