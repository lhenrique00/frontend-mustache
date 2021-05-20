import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  display: block;
  width: 100%;
  height: 100%;
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
  margin-top: -10rem;
  ${media.greaterThan('medium')`
    width: 100%;
    height: auto;
    margin-top: -120vh;
  `}
`

export const Middle = styled.div`
  text-align: left;
  background: linear-gradient(160deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  height: 100%;
  object-fit: cover;
  ${media.greaterThan('medium')`
    background: linear-gradient(127deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%);
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
    font-size: 12vw;
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    margin-bottom: 2rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
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
    color: ${theme.colors.white};
    font-family: ${theme.font.familyTitle};
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 3rem;
    text-shadow: 10px 10px 15px #000000;
    &:hover {
      border-bottom: 2px solid white;
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
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

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      line-height: 5rem;
      letter-spacing: 0.1rem;
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
    `}
  `}
`
