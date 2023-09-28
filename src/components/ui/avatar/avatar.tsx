import { FC } from 'react'

import * as Avatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type HeaderAvatarType = {
  imgUrl?: string
  avatarFallback?: string
}
export const HeaderAvatar: FC<HeaderAvatarType> = ({ imgUrl, avatarFallback }) => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Avatar.Root className={s.AvatarRoot}>
        <Avatar.Image className={s.AvatarImage} src={imgUrl} alt="avatar" />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          {avatarFallback && avatarFallback}
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
