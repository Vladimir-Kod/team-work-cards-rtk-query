import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'

import s from './create-new-password.module.scss'

import { ControlledInput } from '@/components/controlled/controlled-input.tsx'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const loginSchema = z.object({
  password: z.string().min(3),
})

//Что бы не дублировать типизацию мы ее унаследуюем от loginSchema при помощи z.infer
type SignInFormValuesType = z.infer<typeof loginSchema>

export const CreateNewPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValuesType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit((data: SignInFormValuesType) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Card className={s.root}>
        <Typography as={'label'} size={'large'} className={s.label}>
          Create new password
        </Typography>

        <ControlledInput
          control={control}
          name={'password'}
          password={true}
          errorMessage={errors.password?.message}
          labelValue={'password'}
        />

        <Typography size={'body2'} className={s.helper}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button fullWidth={true} type="submit">
          <Typography size={'subtitle2'} className={s.label}>
            Create New Password
          </Typography>
        </Button>
      </Card>
    </form>
  )
}
