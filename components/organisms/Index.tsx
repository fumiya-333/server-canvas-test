import { FC, useState, useEffect, useCallback, ChangeEvent, useRef, RefObject } from 'react'
import { CanvasHandles } from '~/components/atoms/Canvas'
import { BaseTemplate } from '~/components/templates/BaseTemplate'
import { Form } from '~/components/atoms/Form'
import { Box } from '~/components/atoms/Box'
import { H2 } from '~/components/atoms/H2'
import { Canvas } from '~/components/atoms/Canvas'
import { InputText } from '~/components/atoms/InputText'
import { convToImage } from '~/utils/ImageUtil'

type Props = {}

export const Index: FC<Props> = () => {

  const [text1, setText1] = useState('')
  const canvasJoinRef = useRef<CanvasHandles>(null)
  const canvasRef = useRef<CanvasHandles>(null)
  const canvas2Ref = useRef<CanvasHandles>(null)

  const execJoinCanvas = useCallback(async (value: string) => {
    canvasRef.current?.fillText(value, '48px serif', '#000')

    const refs = [canvas2Ref, canvasRef]
    for(const ref of refs) {
      const image = await ref.current?.getImagefromCanvas()
      console.log(canvasJoinRef.current)
      const ctx = canvasJoinRef.current?.getContext()
      ctx.drawImage(image, 0, 0, canvasJoinRef.current?.getWidth(), canvasJoinRef.current?.getHeight())
    }
  }, [canvasJoinRef, canvasRef, canvas2Ref])

  useEffect(()=> {
    (async() => {
      canvasJoinRef.current?.init(500, 300, 'c-canvas-join')
      canvasRef.current?.init(500, 300, 'c-canvas')
      canvas2Ref.current?.init(500, 300, 'c-canvas2')
      const image = convToImage('https://static.retrip.jp/article/5324/images/53246ec2f4e4-e8a2-415e-a0b3-54c6036c4789_l.jpg')
      canvas2Ref.current?.drawImage(image, 200, 0, 100, 300)
    })()
  }, [text1, canvasJoinRef, canvasRef, canvas2Ref, execJoinCanvas])

  const changeText1 = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText1(e.target.value)
    execJoinCanvas(e.target.value)
  }, [execJoinCanvas])

  return (
    <BaseTemplate>
      <Box>
        <H2>プレビュー</H2>
        <Canvas ref={canvasJoinRef}></Canvas>
        <Canvas ref={canvasRef}></Canvas>
        <Canvas ref={canvas2Ref}></Canvas>
        <Form>
          <InputText value={text1} placeholder="文字を入力してください" onChange={changeText1}></InputText><br></br>
          <button type="button" className='c-input c-btn-login'>サーバへ保存</button>
        </Form>
      </Box>
      <Box>
        <H2>保存済み画像</H2>
        <ul id="result"></ul>
      </Box>
    </BaseTemplate>
  )
}