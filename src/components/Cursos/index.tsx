import { useState } from 'react'
import * as S from './styles'
import { Container } from 'components/Container'
export type CursosInfoProps = {
  title: string
  description: string
  subdescription: string
  curseitems: CursosItemProps[]
  classsesitems: string
  localizationitems: string
  id: string
  preco: string
}

export type CursosItemProps = {
  title: string
  id: string
}

export type CursosProps = {
  items: CursosInfoProps[]
}

const Cursos = ({ items }: CursosProps) => {
  const [selectedDescription, setSelectedDescription] = useState(
    items[0].description
  )
  const [selectedTitle, setSelectedTitle] = useState(items[0].title)

  const [selectedSubdescription, setSelectedSubdescription] = useState(
    items[0].subdescription
  )
  const [selectedPreco, setSelectedPreco] = useState(items[0].preco)

  const initialValue = items[0].curseitems

  const [selectedCurseitems, setSelectedCurseitems] = useState(initialValue)

  const [selectedClasssesitems, setSelectedClasssesitems] = useState(
    items[0].classsesitems
  )
  const [selectedLocalizationitems, setSelectedLocalizationitems] = useState(
    items[0].localizationitems
  )
  const [selectedButton, setSelectedButton] = useState(items[0].id)
  return (
    <Container>
      <S.SectionCurse>
        <S.Title>Cursos</S.Title>
        <S.SectionService>
          <S.NonSelectedService>
            {items.map((item, index) => (
              <S.Button
                style={{
                  backgroundColor:
                    selectedButton === item.id ? '#E9A31B' : 'transparent',
                  transition: '0.6s',
                  border:
                    selectedButton === item.id ? 'none' : '1px solid #E9A31B'
                }}
                key={`thumb-${index}`}
                onClick={() => {
                  setSelectedButton(item.id)
                  setSelectedTitle(item.title)
                  setSelectedDescription(item.description)
                  setSelectedSubdescription(item.subdescription)
                  setSelectedCurseitems(item.curseitems)
                  setSelectedClasssesitems(item.classsesitems)
                  setSelectedLocalizationitems(item.localizationitems)
                  setSelectedPreco(item.preco)
                }}
              >
                <S.ButtonText>{item.title}</S.ButtonText>
              </S.Button>
            ))}
          </S.NonSelectedService>
        </S.SectionService>
        <S.SelectedService>
          <S.Info>
            <S.Heading>{selectedTitle}</S.Heading>
            <S.Description>{selectedDescription}</S.Description>
            <S.SubDescription>{selectedSubdescription}</S.SubDescription>
            <S.Text>
              {selectedCurseitems.map((item) => (
                <S.CursoItems key={item.id}>
                  <S.CursoItemTitle>{item.title}</S.CursoItemTitle>
                </S.CursoItems>
              ))}
            </S.Text>
            <S.FooterCurso>
              <S.Aulas>
                <S.Text>Aulas</S.Text>
                <S.Text>{selectedClasssesitems}</S.Text>
              </S.Aulas>
              <S.Localizacao>
                <S.Text>Localização</S.Text>
                <S.Text>{selectedLocalizationitems}</S.Text>
              </S.Localizacao>
            </S.FooterCurso>
            <S.Heading>{selectedPreco}</S.Heading>
            <S.ButtonInscrever>Inscrever-se</S.ButtonInscrever>
          </S.Info>
        </S.SelectedService>
      </S.SectionCurse>
    </Container>
  )
}

export default Cursos
