import Home, { HomeTemplateProps } from 'templates/Home'
import galleryMock from 'components/Gallery/mock'
import galleryCursoMock from 'components/GalleryCurso/mock'
export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      gallery: galleryMock,
      galleryCurso: galleryCursoMock
    }
  }
}
