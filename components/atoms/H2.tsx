import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const H2: FC<Props>  = ({ children }) => {
  return (
    <h2 className='h2'>
      {children}
    </h2>
  )
}