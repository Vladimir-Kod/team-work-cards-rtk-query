import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { Checkbox } from './../../ui/checkbox'
import { Input } from './../../ui/input'
import s from './login-form.module.scss'

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

  const {
    field: { value, onChange },
  } = useController({
    name: 'RememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={onSubmit}>
      <Card className={s.root}>
        <Label className={s.label} size={'large'} value={'Sign In'} />
        <div>
          <Input value={'email'} {...register('email')} errorMessage={errors.email?.message} />
        </div>

        <div>
          <Input
            password={true}
            value={'password'}
            {...register('password')}
            errorMessage={errors.password?.message}
          />
        </div>

        <Checkbox
          onValueChange={onChange}
          checked={value}
          label={'Remember me'}
          id={'Remember me'}
        />

        <Button variant={'link'}>
          <Typography size={'body2'} className={s.label}>
            Forgot Password?
          </Typography>
        </Button>

        <Button fullWidth={true} type="submit">
          <Typography size={'subtitle2'} className={s.label}>
            Sign In
          </Typography>
        </Button>

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
    </form>
  )
}
