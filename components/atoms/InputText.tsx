import { ChangeEventHandler, FC, ReactNode } from 'react';

type Props = {
  value?: string,
  placeholder?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

export const InputText: FC<Props>  = (props) => {
  return (
    <>
      <input type="text" className='c-input' placeholder={props.placeholder} value={props.value} onChange={props.onChange}></input>
    </>
  )
}