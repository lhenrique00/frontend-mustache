import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="#curso" passHref>
            <S.MenuLink>Curso</S.MenuLink>
          </Link>
          <Link href="#tragetoria" passHref>
            <S.MenuLink>Tragetória</S.MenuLink>
          </Link>
          <Link href="#inscreverse" passHref>
            <S.MenuLink>Inscrever-se</S.MenuLink>
          </Link>
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Home</S.MenuLink>
          </Link>
          <Link href="#curso" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Curso</S.MenuLink>
          </Link>
          <Link href="#tragetoria" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Tragetória</S.MenuLink>
          </Link>
          <Link href="#inscreverse" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>
              Inscrever-se
            </S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
