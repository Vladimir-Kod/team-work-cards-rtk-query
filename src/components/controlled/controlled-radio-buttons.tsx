import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { RadioButtons, RadioButtonsProps } from '../ui/radio-buttons'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioButtonsProps, 'onValueChange' | 'name' | 'defaultValue'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return <RadioButtons {...rest} defaultValue={defaultValue} onValueChange={onChange} id={name} />
}
