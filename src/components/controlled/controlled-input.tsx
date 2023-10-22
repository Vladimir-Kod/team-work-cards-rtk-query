import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { InputProps } from '@/components/ui/input/input.tsx'

type ControlledInputProps<T extends FieldValues> = Pick<UseControllerProps<T>, 'control' | 'name'> &
  Omit<InputProps, 'value' | 'onValueChange' | 'onChange' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  })

  return <Input {...rest} value={value} onValueChange={onChange} id={name} />
}
