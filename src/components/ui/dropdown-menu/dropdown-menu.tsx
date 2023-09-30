import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

type DropdownMenuDemoType = {
  trigger?: ReactNode
  dropDownMenuElement?: ReactNode[]
}
export const DropdownMenuCustom: FC<DropdownMenuDemoType> = ({ dropDownMenuElement, trigger }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.triggerButton}>{trigger}</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          {dropDownMenuElement?.map(el => el)}
          <DropdownMenu.Arrow width={18} height={8} className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
