import { FC, ReactNode } from 'react';
import { Form } from '../../components/atoms/Form'
import { Container } from '../../components/organisms/Container'
import { Header } from '../../components/organisms/Header'
import { Footer } from '../../components/organisms/Footer'
import { Main } from '../../components/organisms/Main'
import { Contents } from '../../components/organisms/Contents'

type Props = {
  children: ReactNode
}

export const BaseTemplate: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Contents>
          { children }
        </Contents>
      </Main>
      <Footer></Footer>
    </Container>
  )
}