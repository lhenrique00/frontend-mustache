/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles'
import { Container } from 'components/Container'
import GalleryCurso, { GalleryCursoImageProps } from 'components/GalleryCurso'
import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export type CursoProps = {
  galleryCurso: GalleryCursoImageProps[]
}

const Cursos = ({ galleryCurso }: CursoProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const items = useRef<HTMLDivElement>(null)
  const items1 = useRef<HTMLDivElement>(null)
  const items2 = useRef<HTMLDivElement>(null)
  const items3 = useRef<HTMLDivElement>(null)
  const items4 = useRef<HTMLDivElement>(null)
  const items5 = useRef<HTMLDivElement>(null)
  const items6 = useRef<HTMLDivElement>(null)
  const items7 = useRef<HTMLDivElement>(null)
  const items8 = useRef<HTMLDivElement>(null)
  const items9 = useRef<HTMLDivElement>(null)
  const items10 = useRef<HTMLDivElement>(null)

  const initScrollAnimations = useCallback(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: '-300px',
          end: '100px',
          scrub: 1
        }
      })
      .from(items.current!, { scale: 0 })
      .from(items1.current!, { scale: 0 })
      .from(items2.current!, { scale: 0 })
      .from(items3.current!, { scale: 0 })
      .from(items4.current!, { scale: 0 })
      .from(items5.current!, { scale: 0 })
      .from(items6.current!, { scale: 0 })
      .from(items7.current!, { scale: 0 })
      .from(items8.current!, { scale: 0 })
      .from(items9.current!, { scale: 0 })
      .from(items10.current!, { scale: 0 })
  }, [])
  useEffect(() => {
    initScrollAnimations()
  }, [initScrollAnimations])
  return (
    <Container id="cursos" ref={containerRef}>
      <S.SectionCurso>
        <S.Heading>Cursos</S.Heading>
        <S.Divider />
        <S.SecondaryHeading>BArbeiro Iniciante</S.SecondaryHeading>
        <S.TertiaryHeading>Do básico voando para o avançado!</S.TertiaryHeading>
        <S.HeadingCurso>O que você irá aprender:</S.HeadingCurso>
        <S.Content>
          <S.CursoItem ref={items}>Conheça o Longo, Medio e Curto</S.CursoItem>
          <S.CursoItem ref={items1}>Segredos da Projeção</S.CursoItem>
          <S.CursoItem ref={items2}>Escovação</S.CursoItem>
          <S.CursoItem ref={items3}>Produtos</S.CursoItem>
          <S.CursoItem ref={items4}>Finalização para Foto</S.CursoItem>
          <S.CursoItem ref={items5}>Como tirar boas fotos</S.CursoItem>
          <S.CursoItem ref={items6}>Texturização e seus efeitos</S.CursoItem>
          <S.CursoItem ref={items7}>Tríplice Análise</S.CursoItem>
          <S.CursoItem ref={items8}>Tipos de fade (degrade)</S.CursoItem>
          <S.CursoItem ref={items9}>Atendimento</S.CursoItem>
          <S.CursoItem ref={items10}>Como conquistar seus clientes</S.CursoItem>
        </S.Content>
        <S.Content2>
          <S.Column>
            <S.Sociais>
              <S.TertiaryHeading>Aulas</S.TertiaryHeading>
              <S.Description>
                1 mês de curso <br />
                10 aulas <br />
                3x por semana
              </S.Description>
            </S.Sociais>
          </S.Column>
          <S.Column>
            <S.Sociais>
              <S.TertiaryHeading>Local</S.TertiaryHeading>
              <S.Description>
                Mustache Barbearia <br />
                Rua Visconde de Guarapuava, 173 <br />
                União da Vitória, PR
              </S.Description>
            </S.Sociais>
          </S.Column>
        </S.Content2>
        <S.SecondaryHeading>R$1499,90</S.SecondaryHeading>
        <Link href="#formulario">
          <S.DivButton>
            <S.ButtonInscrever>Inscrever-se</S.ButtonInscrever>
          </S.DivButton>
        </Link>
        <S.Divider />
        <S.GalleryHeading>Cortes dos alunos:</S.GalleryHeading>
        <S.Card>
          <GalleryCurso items={galleryCurso} />
        </S.Card>
      </S.SectionCurso>
    </Container>
  )
}

export default Cursos
