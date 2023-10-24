import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'

import s from './sign-up.module.scss'

import { ControlledInput } from '@/components/controlled/controlled-input.tsx'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type SignUpFormValuesType = z.infer<typeof loginSchema>

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValuesType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit((data: SignUpFormValuesType) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Card className={s.root}>
        <Typography as={'label'} size={'large'} className={s.label}>
          Sign Up
        </Typography>
        <div className={s.inputSpot}>
          <ControlledInput
            control={control}
            name={'email'}
            errorMessage={errors.email?.message}
            labelValue={'email'}
          />

          <ControlledInput
            control={control}
            name={'password'}
            password={true}
            errorMessage={errors.password?.message}
            labelValue={'password'}
          />

          <ControlledInput
            control={control}
            name={'confirmPassword'}
            password={true}
            errorMessage={errors.confirmPassword?.message}
            labelValue={'Confirm Password'}
          />
        </div>

        <Button fullWidth={true} type="submit">
          <Typography size={'subtitle2'} className={s.label}>
            Sign Up
          </Typography>
        </Button>

        <Button variant={'link'} type={'button'}>
          <Typography size={'body2'} className={s.typographyDontHaveAcc}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Already have an account?
          </Typography>
        </Button>

        <Button variant={'link'} type={'button'}>
          <Typography size={'link1'} className={s.typographySignUp}>
            Sign In
          </Typography>
        </Button>
      </Card>
    </form>
  )
}
