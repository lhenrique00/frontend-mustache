import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionService = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`

export const SectionCurse = styled.div`
  height: 150vh;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
`

export const NonSelectedService = styled.div`
  position: relative;
  display: inline-flex;
  margin: auto;
  margin-top: 10rem;
  align-items: center;
  text-align: center;
`

export const FooterCurso = styled.div`
  display: inline-flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
`

export const Aulas = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.tertiary};
    width: 50rem;
    border-radius: 20px 0px 0px 20px;
  `}
`

export const Localizacao = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.tertiary};
    width: 50rem;
    border-radius: 0px 20px 20px 0px;
  `}
`

export const SelectedService = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Info = styled.div`
  align-items: center;
  text-align: center;
  margin: auto;
  padding: 2rem;
  margin-top: 5rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    padding-bottom: 5rem;
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    border-bottom: 1px solid white;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      line-height: ${theme.font.sizes.large};
      font-weight: ${theme.font.normal};
    `}
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: 6vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    margin-bottom: 1rem;
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
    line-height: ${theme.font.sizes.small};
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
    width: auto;
    background-color: none;
    border: 1px solid ${theme.colors.tertiary};
    margin: 1rem;
    display: inline-flex;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    align-items: center;
  `}
`

export const CursoItemTitle = styled.div`
  ${({ theme }) => css`
    margin: auto;
    color: ${theme.colors.tertiary};
  `}
`

export const SubDescription = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.small};
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
    padding: 2rem;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
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
      margin: auto;
      margin-bottom: 2rem;
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
    background-color: transparent;
    color: ${theme.colors.tertiary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
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
