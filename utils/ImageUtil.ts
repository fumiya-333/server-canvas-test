export const convToImage = (url: string) => {
  const image = new Image()
  image.src = url
  return image
}