import { FC, useState, useRef, forwardRef, useImperativeHandle, ForwardedRef } from 'react'

type Props = {
  ref: ForwardedRef<CanvasHandles>
}

export interface CanvasHandles {
  init(width: number, height: number, cls: string): void,
  getWidth(): number,
  getHeight(): number,
  fillText(value: string, font: string, fillStyle: string): void,
  drawImage(image: HTMLImageElement | undefined, sx: number, sy: number, sw: number, sh: number): void,
  getImagefromCanvas(): Promise<HTMLImageElement>,
}

export const Canvas: FC<Props> = forwardRef<CanvasHandles>((props, ref) => {

  const canvasRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [cls, setCls] = useState('')

  useImperativeHandle(ref, () => ({

    init(width: number, height: number, cls: string) {
      setWidth(width)
      setHeight(height)
      setCls(cls)
    },

    getWidth() {
      return width
    },

    getHeight() {
      return height
    },

    fillText(value: string, font: string, fillStyle: string) {
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      ctx.font = font
      ctx.fillStyle = fillStyle
      ctx.fillText(value ,0, 100)
    },

    drawImage(image: HTMLImageElement, sx: number, sy: number, sw: number, sh: number) {
      const ctx = canvasRef.current.getContext("2d")
      image.onload = () => {
        ctx.drawImage(image, sx, sy, sw, sh)
      }
    },

    getImagefromCanvas() {
      return new Promise((resolve, reject) => {
        const image = new Image()
        const ctx = canvasRef.current.getContext("2d")
        image.onload = () => resolve(image)
        image.onerror = (e) => reject(e)
        image.src = ctx.canvas.toDataURL()
      })
    },

  }))


  return (
    <canvas ref={canvasRef} width={width} height={height} className={cls}></canvas>
  )
})

Canvas.displayName = 'canvas'