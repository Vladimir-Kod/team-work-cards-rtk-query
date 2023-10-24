import { FC } from 'react'

import { Button } from '../../../ui/button'

import s from './check-email.module.scss'

import { CheckEmailIcon } from '@/assets/icons'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type CheckEmailType = {
  email: string
  backToSignIn?: () => void
}

export const CheckEmail: FC<CheckEmailType> = ({ email, backToSignIn }) => {
  return (
    <Card className={s.root}>
      <Typography as={'label'} size={'large'} className={s.label}>
        Check Email
      </Typography>

      <CheckEmailIcon />

      <Typography size={'body2'} className={s.helper}>
        We’ve sent an Email with instructions to {email}
      </Typography>

      <Button fullWidth={true} onClick={() => backToSignIn} className={s.button}>
        <Typography size={'subtitle2'} className={s.label}>
          Back to Sign In
        </Typography>
      </Button>
    </Card>
  )
}
