import {ChangeEvent, ComponentProps, ComponentPropsWithoutRef, FC, forwardRef, ReactNode, useState} from 'react'

import {clsx} from 'clsx'
import s from './textField.module.scss'
import {Close, HidePassword, ShowPassword} from '@/assets/icons'

interface Margin {
    marginTop?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
}

export type InputProps = {
    id?: string
    type?: ComponentProps<'input'>['type']
    labelValue?: string
    error?: string
    leftIcon?: ReactNode
    fullWidth?: boolean
    onChangeText?: (value: string) => void
    margin?: Margin
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, InputProps &
    Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>>(
    (
        {
            id,
            type = 'text',
            value,
            labelValue,
            error,
            leftIcon,
            fullWidth,
            margin,
            onChangeText,
            onChange,
            ...restProps
        },
        ref
    ) => {
        const [showPass, setShowPass] = useState(false)

        const classNames = {
            root: s.root,
            wrapper: s.wrapper,
            inputBox: clsx(s.inputBox, fullWidth && s.fullWidth,),
            input: clsx(
                s.input,
                value && s.active,
                error && s.errorInput,
                leftIcon && s.leftPadding,
                type === 'search' || type === 'password' ? s.rightPadding : ''
            ),
            label: clsx(s.label, restProps.disabled && s.disabled),
            errorText: s.errorText,
            leftIcon: s.leftIcon,
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChangeText?.(e.currentTarget.value)
            onChange?.(e)
        }

        const resetValue = () => {
            onChangeText?.('')
        }

        const showHidePassword = () => {
            setShowPass(prev => !prev)
        }

        return (
            <div className={classNames.root} style={margin}>
                <div className={classNames.wrapper}>
                    {labelValue && (
                        <label htmlFor={id} className={classNames.label}>
                            {labelValue}
                        </label>
                    )}
                    <div className={classNames.inputBox}>
                        <input
                            {...restProps}
                            type={showPass ? 'text' : type}
                            id={id}
                            ref={ref}
                            value={value}
                            className={classNames.input}
                            onChange={onChangeHandler}
                        />
                        {<div className={classNames.leftIcon}>{leftIcon}</div>}
                        {type === 'search' && <CloseButton onClick={resetValue} value={value}/>}
                        {type === 'password' && (
                            <PasswordButton onClick={showHidePassword} showPass={showPass}/>
                        )}
                        {error && <span className={classNames.errorText}>{error}</span>}
                    </div>
                </div>
            </div>
        )
    }
)


type InputButtonProps = {
    value?: string | number | readonly string[] | undefined
    showPass?: boolean
} & ComponentPropsWithoutRef<'button'>
const CloseButton: FC<InputButtonProps> = ({value, ...restProps}) => {
    return (
        <div className={s.inputButtonWrapper} style={{display: value ? undefined : 'none'}}>
            <button {...restProps} className={s.inputButton}>
                <Close/>
            </button>
        </div>
    )
}

const PasswordButton: FC<InputButtonProps> = ({value, showPass, ...restProps}) => {
    return (
        <div className={s.inputButtonWrapper}>
            <button {...restProps} className={s.inputButton}>
                {showPass ? <HidePassword/> : <ShowPassword/>}
            </button>
        </div>
    )
}
