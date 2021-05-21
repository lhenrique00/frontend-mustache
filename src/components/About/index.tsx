/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import Link from 'next/link'
import { Container } from 'components/Container'
import MediaMatch from 'components/MediaMatch'
const About = () => (
  <Container id="sobre">
    <MediaMatch greaterThan="medium">
      <S.SectionAbout>
        <S.Heading>Sobre</S.Heading>
        <S.Divider />
        <S.Content>
          <S.Column>
            <S.Card>
              <S.CardImage src="/img/kleyton/photo4985758841228601668.jpg" />
            </S.Card>
          </S.Column>
          <S.Column>
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
            <S.Social>
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
            <S.Heading>Sobre</S.Heading>
            <S.Divider />
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
            <S.Social>
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
            <S.Card>
              <S.CardImage src="/img/kleyton/photo4985758841228601668.jpg" />
            </S.Card>
          </S.Column>
        </S.Content>
      </S.SectionAbout>
    </MediaMatch>
  </Container>
)

export default About
