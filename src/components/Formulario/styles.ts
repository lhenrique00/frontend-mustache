import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 15rem;
  padding-bottom: 10rem;
  align-items: center;
  ${media.greaterThan('medium')`
    argin-top: 25rem;
  `}
`

export const Column = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
`

export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    font-family: ${theme.font.familyText};
    margin: auto;
    margin-bottom: 1.5rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      line-height: 3rem;
      letter-spacing: 0.1rem;
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
      width: 50%;
    `}
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto ${theme.spacings.xsmall};
    height: 0.1rem;
    border: 0;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.small}  0.1) auto ${theme.spacings.small};
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
