import * as S from './styles'
import Subscribe from 'components/Subcribe'
const Formulario = () => (
  <S.Content id="formulario">
    <S.Column>
      <S.Heading>FORMULÁRIO</S.Heading>
      <S.Description>
        Você receberá um email com as próximas instruções, basta preencher o
        campo de e-mail abaixo e conferir a sua caixa de entrada.
      </S.Description>
      <Subscribe />
    </S.Column>
  </S.Content>
)

export default Formulario
