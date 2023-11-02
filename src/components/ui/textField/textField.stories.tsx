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
        labelValue={'Default-input'}
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
        labelValue={'Search-input'}
        defaultValue={''}
        placeholder={'Search'}
        leftIcon={<Search />}
        type={'search'}
      />
    )
  },
}

export const PasswordInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#password'}
        labelValue={'Password-input'}
        defaultValue={''}
        placeholder={'Password'}
        type={'password'}
      />
    )
  },
}

export const ErrorInput: Story = {
  render: () => {
    return (
      <UseInputWithStorybook
        id={'#error'}
        labelValue={'Error-input'}
        defaultValue={''}
        placeholder={'Error'}
        error={'Error !!!!'}
      />
    )
  },
}
