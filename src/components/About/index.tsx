/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import Link from 'next/link'
import { Container } from 'components/Container'
import MediaMatch from 'components/MediaMatch'
import { gsap } from 'gsap'
import { useRef, useCallback, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sobreTitle = useRef<HTMLDivElement>(null)
  const sobreImage = useRef<HTMLDivElement>(null)
  const sobreDescription = useRef<HTMLDivElement>(null)
  const social = useRef<HTMLDivElement>(null)
  const divider = useRef<HTMLHRElement>(null)
  const sobreTitleMobile = useRef<HTMLDivElement>(null)
  const sobreImageMobile = useRef<HTMLDivElement>(null)
  const sobreDescriptionMobile = useRef<HTMLDivElement>(null)
  const socialMobile = useRef<HTMLDivElement>(null)
  const dividerMobile = useRef<HTMLHRElement>(null)

  const initScrollAnimations = useCallback(() => {
    gsap.from(sobreImage.current!, {
      x: -1500,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-800px',
        end: '-300px',
        scrub: 1
      }
    })
    gsap.from(divider.current!, {
      x: -1500,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-700px',
        end: '-200px',
        scrub: 1
      }
    })
    gsap.from(sobreDescription.current!, {
      x: 300,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-700px',
        end: '-200px',
        scrub: 1
      }
    })
    gsap.from(social.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-100px',
        end: '0px',
        scrub: 1
      }
    })
    gsap.from(sobreTitle.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-600px',
        end: '-400px',
        scrub: 1
      }
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: '-500px',
          end: '-100px',
          scrub: 1
        }
      })
      .to(sobreTitle.current!, { x: 0 })

    // --------------------------
    gsap.from(sobreTitleMobile.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-300px',
        end: '-100px',
        scrub: 1
      }
    })
    gsap.from(dividerMobile.current!, {
      x: -500,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-300px',
        end: '-200px',
        scrub: 1
      }
    })
    gsap.from(sobreDescriptionMobile.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '-300px',
        end: '-100px',
        scrub: 1
      }
    })
    gsap.from(socialMobile.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '0px',
        end: '100px',
        scrub: 1
      }
    })
    gsap.from(sobreImageMobile.current!, {
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current!,
        start: '200px',
        end: '300px',
        scrub: 1
      }
    })

    // gsap.from(sobreTitle.current!, {
    //   opacity: 0,
    //   duration: 2
    // })
  }, [])

  useEffect(() => {
    initScrollAnimations()
  }, [initScrollAnimations])

  return (
    <Container id="tragetoria" ref={containerRef}>
      <MediaMatch greaterThan="medium">
        <S.SectionAbout >
          <S.Heading ref={sobreTitle}>Tragetória</S.Heading>
          <S.Divider ref={divider}/>
          <S.Content>
            <S.Column>
              <S.Card ref={sobreImage}>
                <S.CardImage src="/img/kleyton/photo4985758841228601668.jpg" />
              </S.Card>
            </S.Column>
            <S.Column>
              <div ref={sobreDescription}>
                <S.Description>
                  Kleyton Barber "Adailton Kleyton Martins", começou a trabalhar desde
                  cedo, fazendo serviços como pedreiro e pintor. Mas sua história só
                  foi começar a mudar aos seus 18 anos, enquanto trabalhava de leiteiro
                  e fazia faculdade, arranjou um tempo para estudar o que ele realmente
                  gostava.
                </S.Description>
                <S.Description>
                  Sua paixão por cabelo veio de criança, pois sua família já tinha
                  afinidade com esse trabalho. Sua mãe, por exemplo, teve um salão
                  durante 20 anos e continua na profissão até hoje, sendo um dos motivos
                  da paixão de Kleyton.
                </S.Description>
                <S.Description>
                  Hoje já fazem mais de 2 anos que ele ingressou na profissão de
                  barbeiro. Com uma grande evolução nas suas habilidades, junto com
                  estudo e dedicação, nesse ano de 2021, fundou sua própria barbearia, a
                  Mustache Barbearia, que vem sendo destaque na cidade de União da
                  Vitória pela qualidade do corte e atendimento.
                </S.Description>
              </div>
              <S.Social ref={social}>
                <S.Sociais>
                  <S.HeadSocial>Mustache Barbearia</S.HeadSocial>
                  <Link href="https://instagram.com/mustache_barbeariaaa" passHref>
                    <S.Button>
                      <Instagram />
                      <p>Instagram</p>
                    </S.Button>
                  </Link>
                  <Link
                    href="https://facebook.com/mustachebarbearia.oficial"
                    passHref
                  >
                    <S.Button>
                      <FacebookSquare />
                      <p>Facebook</p>
                    </S.Button>
                  </Link>
                </S.Sociais>
                <S.Sociais>
                  <S.HeadSocial>Kleyton Martins</S.HeadSocial>
                  <Link href="https://instagram.com/mustache_barbeariaaa" passHref>
                    <S.Button>
                      <Instagram />
                      <p>Instagram</p>
                    </S.Button>
                  </Link>
                  <Link
                    href="https://www.facebook.com/adailtonkleyton.martinsdasilva"
                    passHref
                  >
                    <S.Button>
                      <FacebookSquare />
                      <p>Facebook</p>
                    </S.Button>
                  </Link>
                </S.Sociais>
              </S.Social>
            </S.Column>
          </S.Content>
        </S.SectionAbout>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.SectionAbout>
          <S.Content>
            <S.Column>
              <S.Heading ref={sobreTitleMobile}>Sobre</S.Heading>
              <S.Divider ref={dividerMobile}/>
              <div ref={sobreDescriptionMobile}>
                <S.Description>
                  Kleyton Barber "Adailton Kleyton Martins", começou a trabalhar desde
                  cedo, fazendo serviços como pedreiro e pintor. Mas sua história só
                  foi começar a mudar aos seus 18 anos, enquanto trabalhava de leiteiro
                  e fazia faculdade, arranjou um tempo para estudar o que ele realmente
                  gostava.
                </S.Description>
                <S.Description>
                  Sua paixão por cabelo veio de criança, pois sua família já tinha
                  afinidade com esse trabalho. Sua mãe, por exemplo, teve um salão
                  durante 20 anos e continua na profissão até hoje, sendo um dos motivos
                  da paixão de Kleyton.
                </S.Description>
                <S.Description>
                  Hoje já fazem mais de 2 anos que ele ingressou na profissão de
                  barbeiro. Com uma grande evolução nas suas habilidades, junto com
                  estudo e dedicação, nesse ano de 2021, fundou sua própria barbearia, a
                  Mustache Barbearia, que vem sendo destaque na cidade de União da
                  Vitória pela qualidade do corte e atendimento.
                </S.Description>
              </div>
              <S.Social ref={socialMobile}>
                <S.Sociais>
                  <S.HeadSocial>Mustache Barbearia</S.HeadSocial>
                  <Link href="https://instagram.com/mustache_barbeariaaa" passHref>
                    <S.Button>
                      <Instagram />
                      <p>Instagram</p>
                    </S.Button>
                  </Link>
                  <Link
                    href="https://facebook.com/mustachebarbearia.oficial"
                    passHref
                  >
                    <S.Button>
                      <FacebookSquare />
                      <p>Facebook</p>
                    </S.Button>
                  </Link>
                </S.Sociais>
                <S.Sociais>
                  <S.HeadSocial>Kleyton Martins</S.HeadSocial>
                  <Link href="https://instagram.com/mustache_barbeariaaa" passHref>
                    <S.Button>
                      <Instagram />
                      <p>Instagram</p>
                    </S.Button>
                  </Link>
                  <Link
                    href="https://www.facebook.com/adailtonkleyton.martinsdasilva"
                    passHref
                  >
                    <S.Button>
                      <FacebookSquare />
                      <p>Facebook</p>
                    </S.Button>
                  </Link>
                </S.Sociais>
              </S.Social>
            </S.Column>
            <S.Column>
              <S.Card ref={sobreImageMobile}>
                <S.CardImage src="/img/kleyton/photo4985758841228601668.jpg" />
              </S.Card>
            </S.Column>
          </S.Content>
        </S.SectionAbout>
      </MediaMatch>
    </Container>
  )

}

export default About
