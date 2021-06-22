import {useState} from 'react'

export const useFormInput = (initialValue, label='') => {
  const [formValue, setFormValue] = useState(initialValue)

  return {
    label,
    placeholder: `Enter ${label}`,
    value: formValue,
    onChange: (e,{value}) => setFormValue(value)
  }
}