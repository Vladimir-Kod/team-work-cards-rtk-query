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
            id='signUp-email'
            name={'email'}
            error={errors.email?.message}
            labelValue={'Email'}
            placeholder={'Enter a correct email'}
          />

          <ControlledInput
            control={control}
            name={'password'}
            id='signUp-password'
            variant={'password'}
            error={errors.password?.message}
            labelValue={'Password'}
            placeholder={'Enter the correct password'}
          />

          <ControlledInput
            control={control}
            id='signUp-confirmPass'
            name={'confirmPassword'}
            variant={'password'}
            error={errors.confirmPassword?.message}
            labelValue={'Confirm Password'}
            placeholder={'Confirm please Password'}
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
