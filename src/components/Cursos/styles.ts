import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionCurse = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 15rem;
  padding-bottom: 10rem;
  align-items: center;
  ${media.greaterThan('medium')`
    margin-top: 25rem;
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
  margin-top: 10rem;
  align-items: center;
  text-align: center;
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
  margin: auto;
`

export const FooterCurso = styled.div`
  display: inline-flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
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
  `}
`

export const SubDescription = styled.h3`
  ${({ theme }) => css`
    width: 30%;
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    margin: auto;
    margin-top: 7rem;
    margin-bottom: 5rem;
    ${media.greaterThan('medium')`
      width: auto;
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
      width: 15rem;
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
