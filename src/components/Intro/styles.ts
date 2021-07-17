import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  display: block;
  width: 100%;
  ${media.greaterThan('medium')`
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

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 0rem;
  opacity: 0.5;
  ${media.greaterThan('medium')`
    width: 100%;
    height: 102vh;
    margin-top: -9vh;
  `}
`

export const ImageCorte = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  right: 20rem;
  ${media.greaterThan('medium')`
    width: 65%;
    z-index: 3;
  `}
`

export const Middle = styled.div`
  text-align: left;
  background: linear-gradient(140deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  height: 100%;
  object-fit: cover;
  ${media.greaterThan('medium')`
    background: linear-gradient(150deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%);
  `}
`
export const Info = styled.div`
  margin-top: 2rem;
  margin-left: 5%;
  margin-right: auto;
  padding: 2rem;
  ${media.greaterThan('medium')`
    margin-top: 5rem;
    margin-left: 10%;
    margin-right: auto;
    padding: 2rem;
  `}
`

export const Links = styled.li`
  display: flex;
  flex-wrap: nowrap;
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: 10vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    margin-bottom: 2rem;
    ${media.greaterThan('medium')`
      font-size: 8.3vw;
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
      position: absolute;
      top: 30rem;
      right: 32rem;
      z-index: 2;
    `}
  `}
`

export const Item = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: nowrap;
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 3rem;
    text-shadow: 10px 10px 15px #000000;
    &:hover {
      border-bottom: 2px solid ${theme.colors.tertiary};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.light};
      color: ${theme.colors.tertiary};
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
    text-shadow: 10px 10px 15px #000000;
    width: 60%;

    ${media.greaterThan('medium')`
      margin-top: 6rem;
      margin-bottom: 3rem;
      font-size: 3vw;
      line-height: 4vw;
      width: 70%;
      letter-spacing: 0.3rem;
      font-weight: ${theme.font.normal};
      color: ${theme.colors.white};
    `}
  `}
`
