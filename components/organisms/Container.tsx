import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div className='l-container'>
      {children}
    </div>
  )
}