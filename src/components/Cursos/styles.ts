import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionCurse = styled.div`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    margin-top: 10rem;
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
      margin-top: 20rem;
    `}
  `}
`

export const SectionService = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
`

export const Column = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
`

export const NonSelectedService = styled.div`
  position: relative;
  display: inline-flex;
  margin: auto;
  margin-top: 5rem;
  align-items: center;
  text-align: center;
  ${media.lessThan('medium')`
    margin-top: 2rem;
    margin-bottom: 2rem;
  `}
`

export const SelectedService = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
  align-items: center;
  text-align: center;
`

export const Info = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  margin: auto;
`

export const FooterCurso = styled.div`
  margin: auto;
  display: inline-flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
`

export const Aulas = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 20px 0px 0px 20px;
    margin: 0;
    width: 50%;
  `}
`

export const Localizacao = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 0px 20px 20px 0px;
    margin: 0;
    width: 50%;
  `}
`

export const Image = styled.img`
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 15px;

  ${media.greaterThan('medium')`
    height: 100%;
    width: 100%;
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    height: 0.1rem;
    border: 1px solid white;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.small}  0.1) auto ${theme.spacings.small};
    `}
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 10vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    ${media.greaterThan('medium')`
      font-size: 4vw;
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const TitleFooter = styled.h3`
  ${({ theme }) => css`
    font-size: 7vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    margin-top: 2rem;
    ${media.greaterThan('medium')`
      font-size: 2vw;
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
      letter-spacing: 0.5rem;
    `}
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: 8vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    ${media.greaterThan('medium')`
      font-size: 4vw;
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const Preco = styled.h3`
  ${({ theme }) => css`
    font-size: 12vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    ${media.greaterThan('medium')`
      font-size: 4vw;
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const ButtonText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    text-shadow: 0px 5px 10px #000000;
    margin: auto;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    `}
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 25rem;
    flex-wrap: wrap;
    margin: 3rem;
    margin-right: 10rem;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 2rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    font-family: ${theme.font.familyText};
    cursor: pointer;

    ${media.lessThan('medium')`
      margin: 1rem;
      margin-bottom: 2rem;
      width: 15rem;
    `}
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    margin: auto;
    margin-top: 5rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    `}
  `}
`

export const CursoItems = styled.div`
  ${({ theme }) => css`
    background-color: none;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${theme.colors.tertiary};
    margin: 1rem;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    ${media.greaterThan('medium')`
      width: auto;
      display: inline-flex;
    `}
  `}
`

export const CursoItemTitle = styled.div`
  ${({ theme }) => css`
    margin: auto;
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyText};
  `}
`

export const SubDescription = styled.h3`
  ${({ theme }) => css`
    width: 90%;
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    margin: auto;
    margin-top: 7rem;
    margin-bottom: 5rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.normal};
    `}
  `}
`

export const Text = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    letter-spacing: 0.1rem;
    padding: 1rem;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.huge};
    `}
  `}
`

export const ButtonInscrever = styled.button`
  ${({ theme }) => css`
    width: 30rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: ${theme.font.familyText};
    letter-spacing: 0.2rem;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 2rem;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 10px;
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.tertiary};
    }
    ${media.greaterThan('medium')`
      width: 40rem;
      margin-bottom: 5rem;
    `}
  `}
`
