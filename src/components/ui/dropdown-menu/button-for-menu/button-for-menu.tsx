import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './button-for-menu.module.scss'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  title: string
  withSeparator: boolean
  icon: ReactNode
}

export const ButtonForMenu: FC<Props> = ({ title, withSeparator, icon }) => {
  return (
    <>
      <DropdownMenu.Item className={s.profile}>
        <Button className={s.button} variant={'link'}>
          <div className={s.itemChild}>
            {icon}
            <Typography className={s.typography} size={'caption'}>
              {title}
            </Typography>
          </div>
        </Button>
      </DropdownMenu.Item>
      {withSeparator && <DropdownMenu.Separator className={s.DropdownMenuSeparator} />}
    </>
  )
}
