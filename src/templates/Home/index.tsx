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
import MediaMatch from 'components/MediaMatch'

export type HomeTemplateProps = {
  gallery: GalleryImageProps[]
  galleryCurso: GalleryCursoImageProps[]
}

const Home = ({ gallery, galleryCurso }: HomeTemplateProps) => {
  return (
    <>
      <MediaMatch greaterThan="medium">
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
