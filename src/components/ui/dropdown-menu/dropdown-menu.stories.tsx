import type { Meta, StoryObj } from '@storybook/react'

import { EditIcon, Logout, PersonIcon, TrashIcon, PlayCircleIcon } from '@/assets/icons'
import { HeaderAvatar } from '@/components/ui/avatar'
import { DropdownMenuDemo } from '@/components/ui/dropdown-menu'
import { ButtonForMenu } from '@/components/ui/dropdown-menu/botton-for-menu'
import { HeaderWithAvatarForDropDMenu } from '@/components/ui/dropdown-menu/header-with-avatar-for-dropdown-menu'

const meta = {
  title: 'Components/DropdownMenuDemo',
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  // argTypes: {
  //   disabled: ['true', 'false'],
  //   selectItemValue: ['HTML', 'SCC', 'React'],
  //   placeHolderValue: ['Select-box'],
  //   defaultValue: []
  // },
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

const imgAvatar =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
const avatarFallback = 'KS'
const email = 'ksyusha@gmail.com'
const login = 'Ksyusha'

export const DropDownMenuWithAvatar: Story = {
  args: {
    trigger: <HeaderAvatar imgUrl={imgAvatar} avatarFallback={avatarFallback} />,
    dropDownMenuElement: [
      <HeaderWithAvatarForDropDMenu
        key={'1'}
        avatarFallback={avatarFallback}
        imgUrl={imgAvatar}
        email={email}
        login={login}
        withSeparator={true}
      />,
      <ButtonForMenu icon={<PersonIcon />} withSeparator={true} title={'My Profile'} key={'2'} />,
      <ButtonForMenu icon={<Logout />} withSeparator={false} title={'Sign Out'} key={'3'} />,
    ],
  },
}

export const DropDownMenu: Story = {
  args: {
    trigger: <HeaderAvatar imgUrl={imgAvatar} avatarFallback={avatarFallback} />,
    dropDownMenuElement: [
      <ButtonForMenu icon={<PlayCircleIcon />} withSeparator={true} title={'Learn'} key={'1'} />,
      <ButtonForMenu icon={<EditIcon />} withSeparator={true} title={'Edit'} key={'2'} />,
      <ButtonForMenu icon={<TrashIcon />} withSeparator={false} title={'Delete'} key={'3'} />,
    ],
  },
}
