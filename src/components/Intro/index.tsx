import * as S from './styles'

const Intro = () => (
  <S.Content>
    <S.Image src="/img/kleyton.jpg" />
    <S.Middle>
      <S.Info>
        <S.Heading>KLEYTON MARTINS</S.Heading>
        <S.Description>Fundador da Mustache Barbearia</S.Description>
        <S.Description>Barbeiro profissional</S.Description>
        <S.Links>
          <S.Item href="#sobre">Sobre</S.Item>
          <S.Item href="#cursos">Cursos</S.Item>
        </S.Links>
      </S.Info>
    </S.Middle>
  </S.Content>
)

export default Intro
