import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionAbout = styled.section`
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

export const Social = styled.div`
  grid-column: 1 / span 12;
  grid-row: 1 / 1;
  display: inline-flex;
  flex-wrap: nowrap;
`

export const Sociais = styled.div`
  padding: 1rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    width: 13rem;
    height: 5rem;
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0.5rem;
    margin-left: 0rem;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 10px;
    background-color: transparent;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    svg {
      width: 3rem;
    }
    p {
      margin-top: 0.2rem;
      margin-left: 0.5rem;
      font-family: ${theme.font.familyText};
    }
    ${media.greaterThan('medium')`
      width: 13rem;
      cursor: pointer;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(2, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Heading = styled.h3`
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

export const Card = styled.div`
  display: flex;
  align-items: center;
`

export const HeadSocial = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyTitle};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: 5rem;
      letter-spacing: 0.1rem;
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
    `}
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    margin-bottom: 1.5rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      text-indent: 1.5em;
      line-height: 3rem;
      letter-spacing: 0.1rem;
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
    `}
  `}
`

export const TextoIntro = styled.section`
  ${({ theme }) => css`
    padding: 1.5rem;
    ${media.greaterThan('medium')`
      position: relative;
      z-index: ${theme.layers.base};
      padding-right: 10vh;
      padding-top: 10vh;
      padding-bottom: 25vh;
    `}
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

export const CardImage = styled.img`
  margin: auto;
  width: 30rem;
  height: 25rem;
  object-fit: cover;
  object-position: center;
  border: 2px solid white;
  border-radius: 10px;
  ${media.greaterThan('medium')`
    margin: 0;
    width: 50rem;
    height: auto;
    object-fit: cover;
    object-position: center;
    border: 2px solid white;
  `}
`
