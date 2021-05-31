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
  const items11 = useRef<HTMLDivElement>(null)
  const items12 = useRef<HTMLDivElement>(null)
  const items13 = useRef<HTMLDivElement>(null)
  const items14 = useRef<HTMLDivElement>(null)
  const items15 = useRef<HTMLDivElement>(null)
  const items16 = useRef<HTMLDivElement>(null)
  const items17 = useRef<HTMLDivElement>(null)
  const items18 = useRef<HTMLDivElement>(null)
  const items19 = useRef<HTMLDivElement>(null)

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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: '1500px',
          end: '1800px',
          scrub: 1
        }
      })
      .from(items11.current!, { scale: 0 })
      .from(items12.current!, { scale: 0 })
      .from(items13.current!, { scale: 0 })
      .from(items14.current!, { scale: 0 })
      .from(items15.current!, { scale: 0 })
      .from(items16.current!, { scale: 0 })
      .from(items17.current!, { scale: 0 })
      .from(items18.current!, { scale: 0 })
      .from(items19.current!, { scale: 0 })
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
        <S.DescriptionCurso>
          Curso para quem deseja aprender ou melhorar as suas habilidades de
          barbeiro, deixando de ser um iniciante e se tornando um profissional
          na area!
        </S.DescriptionCurso>
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
        <S.Price>R$1499,90</S.Price>
        <S.DescriptionCurso>
          À vista 10% de desconto <br />
          5x sem juros no cartão de crédito.
        </S.DescriptionCurso>
        <Link href="#formulario">
          <S.DivButton>
            <S.ButtonInscrever>Inscrever-se</S.ButtonInscrever>
          </S.DivButton>
        </Link>
        <S.Divider />
        {/* ----------------------------------------------------------- */}
        <S.SecondaryHeading>BArbeiro Avançado</S.SecondaryHeading>
        <S.TertiaryHeading>
          Essa metodologia fará você um barbeiro de sucesso!
        </S.TertiaryHeading>
        <S.DescriptionCurso>
          Esse curso é para você, que ja sabe cortar cabelo, mas, deseja elevar
          o seu nível e aprender novas técnicas para crescer ainda mais como
          barbeiro.
        </S.DescriptionCurso>
        <S.HeadingCurso>O que você irá aprender:</S.HeadingCurso>
        <S.Content>
          <S.CursoItem ref={items11}>
            Conheça todos os tipos de cabelos
          </S.CursoItem>
          <S.CursoItem ref={items12}>Segredos da Projeção</S.CursoItem>
          <S.CursoItem ref={items13}>Texturização e seus efeitos</S.CursoItem>
          <S.CursoItem ref={items14}>Finalização para Foto</S.CursoItem>
          <S.CursoItem ref={items15}>Tríplice Análise </S.CursoItem>
          <S.CursoItem ref={items16}>Conheça os 5 tipos de fade</S.CursoItem>
          <S.CursoItem ref={items17}>Fundamentos do Fade</S.CursoItem>
          <S.CursoItem ref={items18}>Ganhe tempo e qualidade</S.CursoItem>
          <S.CursoItem ref={items19}>
            Iluminação, tecnologia e ambiente
          </S.CursoItem>
        </S.Content>
        <S.Content2>
          <S.Column>
            <S.Sociais>
              <S.TertiaryHeading>Aulas</S.TertiaryHeading>
              <S.Description>3 aulas</S.Description>
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
        <S.Price>R$499,90</S.Price>
        <S.DescriptionCurso>
          À vista 10% de desconto <br />
          5x sem juros no cartão de crédito.
        </S.DescriptionCurso>
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
