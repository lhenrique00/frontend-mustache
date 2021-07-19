/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles'
import { gsap } from 'gsap'
import { useRef, useCallback, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const description = useRef<HTMLDivElement>(null)
  const firstImage = useRef<HTMLImageElement>(null)
  const secondImage = useRef<HTMLImageElement>(null)

  const initScrollAnimations = useCallback(() => {
    gsap.from(firstImage.current!, {
      opacity: 0,
      duration: 2,
      delay: 0.5
    })
    gsap.from(description.current!, {
      autoAlpha: 0,
      y: 100,
      duration: 1.5,
      delay: 0.5
    })
    gsap.from(secondImage.current!, {
      autoAlpha: 0,
      duration: 2,
      delay: 2
    })
  }, [])

  useEffect(() => {
    initScrollAnimations()
  }, [initScrollAnimations])

  return (
    <S.Content>
      <S.Image src="/img/Fundo.png" ref={firstImage} />
      <S.ImageCorte src="/img/Corte.png" ref={secondImage} />
      <S.Middle>
        <S.Info>
          <S.Heading ref={description}>muito mais que um corte</S.Heading>
        </S.Info>
      </S.Middle>
    </S.Content>
  )
}

export default Intro
