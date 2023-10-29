import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'

import s from './sign-in.module.scss'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox.tsx'
import { ControlledInput } from '@/components/controlled/controlled-input.tsx'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  RememberMe: z.boolean().optional().default(false),
})

//Что бы не дублировать типизацию мы ее унаследуюем от loginSchema при помощи z.infer
type SignInFormValuesType = z.infer<typeof loginSchema>

export const SignIn = () => {
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
        {/*<div className={s.inputSpot}>*/}
        <Typography as={'label'} size={'large'} className={s.label}>
          Sign In
        </Typography>
        <div className={s.wrapperFlex}>
          <ControlledInput
              control={control}
              id='signIn-email'
              name={'email'}
              error={errors.email?.message}
              labelValue={'email'}
              placeholder={'Enter a correct email'}
              fullWidth={true}
              margin={{marginTop: '1.68rem'}}
          />
          <ControlledInput
              control={control}
              id='signIn-password'
              name={'password'}
              variant={'password'}
              error={errors.password?.message}
              labelValue={'password'}
              placeholder={'Enter the correct password'}
              fullWidth={true}
              margin={{marginTop: '1.5rem'}}
          />

          <ControlledCheckbox control={control} name={'RememberMe'} label={'Remember me'} margin={{marginTop: '0.75rem'}}/>

          <Button variant={'link'} type={'button'} style={{marginLeft: 'auto'}} className={s.forgotPass}>
            <Typography size={'body2'} className={s.labelForgotPasseord}>
              Forgot Password?
            </Typography>
          </Button>
        </div>

        {/*</div>*/}

        <Button fullWidth={true} type="submit" style={{marginTop: '4.1rem', marginBottom: '1.25rem'}}>
          <Typography size={'subtitle2'} className={s.label}>
            Sign In
          </Typography>
        </Button>

        <Button variant={'link'} type={'button'}>
          <Typography size={'body2'} className={s.typographyDontHaveAcc}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
          </Typography>
        </Button>

        <Button variant={'link'} type={'button'}>
          <Typography size={'link1'} className={s.typographySignUp}>
            Sign Up
          </Typography>
        </Button>
      </Card>
    </form>
  )
}
