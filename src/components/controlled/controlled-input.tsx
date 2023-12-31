import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import {InputProps, TextField} from "@/components/ui/textField";

type ControlledInputProps<T extends FieldValues> = Pick<
    UseControllerProps<T>,
    'name' | 'control'
    > & Omit<InputProps, 'onChangeText' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { value, onChange},
  } = useController({
    name,
    control,
  })

  return <TextField value={value} onChangeText={onChange} {...rest}/>
}
