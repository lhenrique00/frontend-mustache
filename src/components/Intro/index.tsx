/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles'
import { gsap } from 'gsap'
import { useRef, useCallback, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const description = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLDivElement>(null)
  const links = useRef<HTMLLIElement>(null)

  const initScrollAnimations = useCallback(() => {
    gsap.from(title.current!, {
      opacity: 0,
      duration: 2,
      delay: 0.5
    })
    gsap.from(description.current!, {
      opacity: 0,
      duration: 2,
      delay: 1
    })
    gsap.from(links.current!, {
      opacity: 0,
      duration: 2,
      delay: 1.5
    })
  }, [])

  useEffect(() => {
    initScrollAnimations()
  }, [initScrollAnimations])

  return (
    <S.Content>
      <S.Image src="/img/kleyton.jpg" />
      <S.Middle>
        <S.Info>
          <S.Heading ref={title}>KLEYTON MARTINS</S.Heading>
          <S.Description ref={description}>
            Fundador da Mustache Barbearia. <br />
            Barbeiro profissional
          </S.Description>
          <S.Links ref={links}>
            <S.Item href="#sobre">Sobre</S.Item>
            <S.Item href="#cursos">Cursos</S.Item>
          </S.Links>
        </S.Info>
      </S.Middle>
    </S.Content>
  )
}

export default Intro
