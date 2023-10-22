import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { SelectRoot, SelectType } from './../ui/select'

type ControlledInputProps<T extends FieldValues> = Pick<UseControllerProps<T>, 'control' | 'name'> &
  Omit<SelectType, 'value' | 'onChange'>

export const ControlledSelect = <T extends FieldValues>({
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

  return <SelectRoot {...rest} value={value} onValueChange={onChange} />
}
