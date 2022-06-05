import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <div className='l-main'>
      {children}
    </div>
  )
}