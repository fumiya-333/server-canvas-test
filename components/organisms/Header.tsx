import { FC } from 'react';

type Props = {};

export const Header: FC<Props> = () => {
  return (
    <header className='l-header'>
      <h1>Canvasを画像に変換しサーバへ送信</h1>
    </header>
  )
}