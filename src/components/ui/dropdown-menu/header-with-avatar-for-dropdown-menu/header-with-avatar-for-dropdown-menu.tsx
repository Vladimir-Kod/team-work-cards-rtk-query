import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './header-with-avatar-for-dropdown-menu.module.scss'

import { HeaderAvatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'

type Props = {
  imgUrl?: string
  avatarFallback?: string
  email?: string
  login?: string
  withSeparator: boolean
}
export const HeaderWithAvatarForDropDMenu: FC<Props> = ({
  imgUrl,
  email,
  avatarFallback,
  login,
  withSeparator,
}) => {
  return (
    <>
      <DropdownMenu.Item className={s.item}>
        <div className={s.header}>
          <HeaderAvatar imgUrl={imgUrl} avatarFallback={avatarFallback} />
          <div className={s.typography}>
            <Typography className={s.typography} size={'subtitle2'}>
              {login}
            </Typography>
            <Typography className={s.typographyEmail} size={'caption'}>
              {email}
            </Typography>
          </div>
        </div>
      </DropdownMenu.Item>
      {withSeparator && <DropdownMenu.Separator className={s.DropdownMenuSeparator} />}
    </>
  )
}
