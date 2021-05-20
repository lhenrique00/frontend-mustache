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
  object-fit: cover;
`

export const Middle = styled.div`
  text-align: left;
  background: linear-gradient(127deg, rgba(0, 0, 0, 1), rgba(0, 255, 0, 0) 10%);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  height: 100%;
  object-fit: cover;
  ${media.greaterThan('medium')`
    background: linear-gradient(127deg, rgba(0, 0, 0, 1), rgba(0,255,0,0) 50%);
  `}
`
export const Info = styled.div`
  margin-top: 5rem;
  margin-left: 10%;
  margin-right: auto;
  padding: 2rem;
`

export const Links = styled.li`
  display: flex;
  flex-wrap: nowrap;
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      line-height: ${theme.font.sizes.huge};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const Message = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyText};
    text-shadow: 10px 5px 15px #000000;
    padding: 2rem;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const SubscribeButton = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.tertiary};
    width: 30rem;
    background-color: transparent;
    padding: 1rem;
    border-radius: 5px;
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.tertiary};
    font-family: ${theme.font.familyTitle};
    text-shadow: 10px 5px 15px #000000;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      transition: 0.3s;
    `}
    &:hover {
      color: black;
      background-color: ${theme.colors.tertiary};
    }
  `}
`

export const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 80%;
  margin: auto;
  ${media.greaterThan('medium')`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    margin: auto;
  `}
`

export const NewInputLabel = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${theme.colors.secondary};
    font-family: ${theme.font.familyText};
    letter-spacing: 0.5rem;
  `}
`

export const NewInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    background: transparent;
    transition: border-color 0.2s;
    padding: 7px 0;
    margin-bottom: 2rem;

    letter-spacing: 0.1rem;
    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }

    &:focus {
      padding-bottom: 6px;
      font-weight: ${theme.font.light};
      border-width: 3px;
      border-image: linear-gradient(to right, #000000, #fafafa);
      border-image-slice: 1;
    }

    &:focus ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: ${theme.font.sizes.xsmall};
      color: #fafafa;
      font-weight: ${theme.font.light};
    }

    &:required {
      box-shadow: none;
    }
    &:invalid {
      box-shadow: none;
    }
  `}
`
