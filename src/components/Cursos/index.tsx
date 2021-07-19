import { useState } from 'react'
import * as S from './styles'
import { Container } from 'components/Container'
import Link from 'next/link'
export type CursosInfoProps = {
  title: string
  description: string
  subdescription: string
  curseitems: CursosItemProps[]
  classsesitems: ClassesItemProps[]
  localizationitems: LocalizatoinItemProps[]
  id: string
  preco: string
}

export type CursosItemProps = {
  title: string
  id: string
}

export type ClassesItemProps = {
  title: string
  id: string
}

export type LocalizatoinItemProps = {
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

  const [selectedCurseitems, setSelectedCurseitems] = useState(
    items[0].curseitems
  )

  const [selectedClasssesitems, setSelectedClasssesitems] = useState(
    items[0].classsesitems
  )
  const [selectedLocalizationitems, setSelectedLocalizationitems] = useState(
    items[0].localizationitems
  )
  const [selectedButton, setSelectedButton] = useState(items[0].id)
  return (
    <Container>
      <S.SectionCurse id="cursos">
        <S.Title>Cursos</S.Title>
        <S.Divider />
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
            <div>
              {selectedCurseitems.map((item) => (
                <S.CursoItems key={item.id}>
                  <S.CursoItemTitle>{item.title}</S.CursoItemTitle>
                </S.CursoItems>
              ))}
            </div>
            <S.FooterCurso>
              <S.Aulas>
                <S.TitleFooter>Aulas</S.TitleFooter>
                <S.Text>
                  {selectedClasssesitems.map((item) => (
                    <div key={item.id}>
                      <S.Text>{item.title}</S.Text>
                    </div>
                  ))}
                </S.Text>
              </S.Aulas>
              <S.Localizacao>
                <S.TitleFooter>Localização</S.TitleFooter>
                <S.Text>
                  {selectedLocalizationitems.map((item) => (
                    <div key={item.id}>
                      <S.Text>{item.title}</S.Text>
                    </div>
                  ))}
                </S.Text>
              </S.Localizacao>
            </S.FooterCurso>
            <S.Preco>{selectedPreco}</S.Preco>
            <Link href="#inscreverse">
              <S.ButtonInscrever>Inscrever-se</S.ButtonInscrever>
            </Link>
          </S.Info>
        </S.SelectedService>
      </S.SectionCurse>
    </Container>
  )
}

export default Cursos
