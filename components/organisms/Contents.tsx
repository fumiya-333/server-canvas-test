import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const Contents: FC<Props> = ({ children }) => {
  return (
    <div className='l-contents'>
      {children}
    </div>
  )
}