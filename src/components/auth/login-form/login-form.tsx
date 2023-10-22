import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { Input } from './../../ui/input'
import s from './login-form.module.scss'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox.tsx'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  RememberMe: z.boolean().optional().default(false),
})

//Что бы не дублировать типизацию мы ее унаследуюем от loginSchema при помощи z.infer
type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data)
  })

  return (
    <Card className={s.root}>
      <form onSubmit={onSubmit}>
        <Label className={s.label} size={'large'} value={'Sign In'} />
        <div>
          <Input value={'email'} {...register('email')} errorMessage={errors.email?.message} />
        </div>

        <div style={{ marginTop: '10px' }}>
          <Input
            password={true}
            value={'password'}
            {...register('password')}
            errorMessage={errors.password?.message}
          />
        </div>

        <ControlledCheckbox control={control} name={'RememberMe'} label={'Remember me'} />

        <Button variant={'link'} type={'button'}>
          <Typography size={'body2'} className={s.label}>
            Forgot Password?
          </Typography>
        </Button>

        <Button fullWidth={true} type="submit">
          <Typography size={'subtitle2'} className={s.label}>
            Sign In
          </Typography>
        </Button>
      </form>

      <Button variant={'link'}>
        <Typography size={'body2'} className={s.typographyDontHaveAcc}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
      </Button>

      <Button variant={'link'}>
        <Typography size={'link1'} className={s.typographySignUp}>
          Sign Up
        </Typography>
      </Button>
    </Card>
  )
}
