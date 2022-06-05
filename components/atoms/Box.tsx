import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const Box: FC<Props>  = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  )
}