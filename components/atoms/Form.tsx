import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const Form: FC<Props>  = ({ children }) => {
  return (
    <form className='c-form'>
      {children}
    </form>
  )
}