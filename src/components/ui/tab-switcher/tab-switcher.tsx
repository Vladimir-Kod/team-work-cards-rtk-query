import { FC, ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Label } from '@/components/ui/label/label.tsx'
import { Typography } from '@/components/ui/typography'

type Props = {
  tabValue: string[]
  tabContent: ReactNode[]
  labelValue?: string
  disabled?: boolean
}

export const TabsSwitcher: FC<Props> = ({ tabValue, tabContent, labelValue, disabled }) => {
  const text = labelValue !== undefined ? labelValue : ''

  return (
    <div className={s.root}>
      <Label areaDisabled={disabled} size={'body2'} className={s.label}>
        {text}
      </Label>
      <Tabs.Root className="TabsRoot" defaultValue={tabValue[0]}>
        <Tabs.List className="TabsList" aria-label="Manage your account">
          {tabValue?.map((el, index) => (
            <Tabs.Trigger
              className={
                // eslint-disable-next-line no-nested-ternary
                index === 0 ? s.firstTab : index === tabValue.length - 1 ? s.lastTab : s.tab
              }
              value={el}
              key={index}
              disabled={disabled}
            >
              <div className={s.t}>
                <Typography aria-disabled={disabled} className={s.typographyTrigger} size={'body1'}>
                  {el}
                </Typography>
              </div>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabContent?.map((el, index) => (
          <Tabs.Content value={tabValue[index]} key={index}>
            <p className="Text">{el}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
