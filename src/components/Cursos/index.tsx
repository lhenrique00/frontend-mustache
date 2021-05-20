/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'
import { Container } from 'components/Container'
import GalleryCurso, { GalleryCursoImageProps } from 'components/GalleryCurso'

export type CursoProps = {
  galleryCurso: GalleryCursoImageProps[]
}

const Cursos = ({galleryCurso} : CursoProps) => (
  <Container id="cursos">
    <S.SectionCurso>
      <S.Heading>Cursos</S.Heading>
      <S.Divider />
      <S.Content>
        <S.Column>
          <S.SecondaryHeading>
            BArbeiro Iniciante
          </S.SecondaryHeading>
          <S.TertiaryHeading>
            Do básico voando para o
            avançado!
          </S.TertiaryHeading>
          <S.CursoItem>-Conheça o Longo, Medio e Curto</S.CursoItem>
          <S.CursoItem>-Segredos da Projeção</S.CursoItem>
          <S.CursoItem>-Texturização e seus efeitos</S.CursoItem>
          <S.CursoItem>-Escovação</S.CursoItem>
          <S.CursoItem>-Produtos</S.CursoItem>
          <S.CursoItem>-Finalização para Foto</S.CursoItem>
          <S.CursoItem>-Tríplice Análise</S.CursoItem>
          <S.CursoItem>-Conheça os tipos de fade (degrade)</S.CursoItem>
          <S.CursoItem>-Como tirar boas fotos</S.CursoItem>
          <S.CursoItem>-Atendimento e como conquistar seus clientes</S.CursoItem>
          <S.Social>
            <S.Sociais>
              <S.HeadSocial>Aulas</S.HeadSocial>
              <S.CursoItem>
                1 mês de curso
                10 aulas
                3x por semana
              </S.CursoItem>
              <S.SecondaryHeading>
                R$1.499,90
              </S.SecondaryHeading>
            </S.Sociais>
            <S.Sociais>
              <S.HeadSocial>Local</S.HeadSocial>
              <S.CursoItem>
                Mustache Barbearia
                Rua Visconde de Guarapuava, 173
                União da Vitória, PR
              </S.CursoItem>
            </S.Sociais>
          </S.Social>
        </S.Column>
        <S.Column>
          <S.GalleryHeading>
            Cortes dos alunos:
          </S.GalleryHeading>
          <S.Card>
            <GalleryCurso items={galleryCurso} />
          </S.Card>
        </S.Column>
      </S.Content>
      <S.Divider />
    </S.SectionCurso>
  </Container>
)

export default Cursos
