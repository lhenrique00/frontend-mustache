import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 44%;
    transform: translateX(-50%);
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuGroup = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
    margin: 0.3rem ${theme.spacings.small} 0;
    font-family: ${theme.font.familyText};
    text-decoration: none;
    font-weight: normal;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.secondary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    display: ${isOpen ? 'flex' : 'none'};
    pointer-events: ${isOpen ? 'all' : 'none'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: black
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

export const StyledLi = styled.li`
  margin: 0rem;
`

export const Dropbtn = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: ${theme.colors.black};
    font-weight: bold;
    font-size: ${theme.font.sizes.large};
    ${media.greaterThan('medium')`
		`}
  `}
`

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const DropDownLi = styled(StyledLi)`
  ${({ theme }) => css`
    display: inline-block;
    margin: 0.3rem ${theme.spacings.small} 0;
    &:hover {
      cursor: pointer;
    }
    &:hover ${DropDownContent} {
      display: block;
    }
  `}
`

export const StyledA = styled.a`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`

type MenuHeaderFullProps = {
  ToggleOpen: boolean
}

export const DropDownHeader = styled.a<MenuHeaderFullProps>`
  ${({ theme, ToggleOpen }) => css`
    cursor: pointer;
    position: relative;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    text-transform: capitalize;
    text-align: left;
    padding-bottom: 2rem;
    padding-right: 5rem;
    ${IconHeader} {
      transform: ${ToggleOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
      transition: transform 0.3s ease-in-out;
    }
    ${media.lessThan('medium')`
      padding-right: 0rem;
      text-align: center;
    `}
  `}
`

export const IconHeader = styled.div`
  position: absolute;
  width: 2rem;
  opacity: 0.8;
  margin-left: 8rem;
  margin-top: -2.5rem;
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style: none;
    cursor: pointer;
    margin-bottom: 0.2em;
    font-weight: ${theme.font.bold};
    letter-spacing: 0.2rem;
    ${media.lessThan('medium')`
      padding: 0.8rem;
    `}
  `}
`

export const DropDownListContainer = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 1rem;
  padding-left: 0.8rem;
  ${media.lessThan('medium')`
    padding-left: 0rem;
    text-align: center;
  `}
`

export const DropDownList = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    box-sizing: border-box;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    &:first-child {
      margin-top: 0rem;
  `}
`
