import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import {InputProps, TextField} from "@/components/ui/textField";

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> & InputProps

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
