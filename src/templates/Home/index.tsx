import * as S from './styles'
import Intro from 'components/Intro'
import About from 'components/About'
import { Container } from 'components/Container'
import Formulario from 'components/Formulario'
import Cortes from 'components/Cortes'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import Cursos from 'components/Cursos'
import { CursosInfoProps } from 'components/Cursos'
import { NextSeo } from 'next-seo'
import Menu from 'components/Menu'

export type HomeTemplateProps = {
  gallery: GalleryImageProps[]
  curso: CursosInfoProps[]
}

const Home = ({ gallery, curso }: HomeTemplateProps) => {
  return (
    <>
      <S.Wrapper>
        <NextSeo
          title="Mustache Barbearia"
          description="Mustache barbearia / Barber School"
          canonical="https://mustachebarbearia.com"
        />
        <S.Content>
          <Container>
            <Menu />
          </Container>
          <Intro />
          <Container>
            <Cursos items={curso} />
            <Cortes />
            <Gallery items={gallery} />
            <About />
            <Formulario />
          </Container>
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default Home
