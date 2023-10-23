import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'

import s from './forgot-your-password.module.scss'

import { ControlledInput } from '@/components/controlled/controlled-input.tsx'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const loginSchema = z.object({
  email: z.string().email(),
})

type ForgotYourPasswordType = z.infer<typeof loginSchema>

export const ForgotYourPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotYourPasswordType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit((data: ForgotYourPasswordType) => {
    console.log(data)
  })

  return (
    <Card className={s.root}>
      <form onSubmit={onSubmit}>
        <div className={s.inputSpot}>
          <Typography as={'label'} size={'large'} className={s.label}>
            Forgot your password?
          </Typography>

          <ControlledInput
            control={control}
            name={'email'}
            errorMessage={errors.email?.message}
            labelValue={'email'}
          />

          <Typography size={'body2'} className={s.helper}>
            Enter your email address and we will send you further instructions
          </Typography>
        </div>

        <Button fullWidth={true} type="submit">
          <Typography size={'subtitle2'} className={s.label}>
            Send Instructions
          </Typography>
        </Button>
      </form>

      <Button variant={'link'}>
        <Typography size={'body2'} className={s.typographyDontHaveAcc}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Did you remember your password?
        </Typography>
      </Button>

      <Button variant={'link'}>
        <Typography size={'link1'} className={s.typographySignUp}>
          Try logging in
        </Typography>
      </Button>
    </Card>
  )
}
