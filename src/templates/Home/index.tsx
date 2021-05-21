import * as S from './styles'
import Intro from 'components/Intro'
import About from 'components/About'
import { Container } from 'components/Container'
import Formulario from 'components/Formulario'
import Cortes from 'components/Cortes'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GalleryCursoImageProps } from 'components/GalleryCurso'
import Cursos from 'components/Cursos'
import { NextSeo } from 'next-seo'
import useWindowSize from 'hooks/useWindowSize'
import { useRef, useCallback, useEffect } from 'react'
import MediaMatch from 'components/MediaMatch'

export type HomeTemplateProps = {
  gallery: GalleryImageProps[]
  galleryCurso: GalleryCursoImageProps[]
}

const Home = ({ gallery, galleryCurso }: HomeTemplateProps) => {
  const size = useWindowSize()
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    ease: 0.08,
    curr: 0,
    prev: 0,
    rounded: 0
  }

  const setBodyHeight = () => {
    document.body.style.height = `${
      containerRef.current?.getBoundingClientRect().height
    }px`
  }

  const smoothScroll = useCallback(() => {
    if (containerRef.current == null) {
      return
    } else {
      data.curr = window.scrollY
      data.prev += (data.curr - data.prev) * data.ease
      data.rounded = Math.round(data.prev * 100) / 100
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      containerRef.current!.style.transform = `translateY(-${data.rounded}px)`

      requestAnimationFrame(() => smoothScroll())
    }
  }, [data])

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll())
  }, [smoothScroll])

  useEffect(() => {
    setBodyHeight()
  }, [size.height])

  return (
    <>
      <MediaMatch greaterThan="medium">
        <S.Wrapper ref={containerRef}>
          <NextSeo
            title="Mustache Barbearia"
            description="Mustache barbearia, além do corte!"
            canonical="https://mustachebarbearia.com"
          />
          <S.Content>
            <Intro />
            <Container>
              <About />
              <Cortes />
              <Gallery items={gallery} />
              <Cursos galleryCurso={galleryCurso} />
              <Formulario />
            </Container>
          </S.Content>
        </S.Wrapper>
      </MediaMatch>
      <MediaMatch lessThan="medium">
        <S.Wrapper>
          <NextSeo
            title="Mustache Barbearia"
            description="Mustache barbearia, além do corte!"
            canonical="https://mustachebarbearia.com"
          />
          <S.Content>
            <Intro />
            <Container>
              <About />
              <Cortes />
              <Gallery items={gallery} />
              <Cursos galleryCurso={galleryCurso} />
              <Formulario />
            </Container>
          </S.Content>
        </S.Wrapper>
      </MediaMatch>
    </>
  )
}

export default Home
