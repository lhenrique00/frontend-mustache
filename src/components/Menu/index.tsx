import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

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
        <Link href="/">
          <S.Logo src="https://mustache-barbearia.s3.sa-east-1.amazonaws.com/LOGO-BARBERSCHOOL-BRANCA.png" />
        </Link>
      </S.LogoWrapper>

      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="#cursos" passHref>
            <S.MenuLink>Cursos</S.MenuLink>
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
          <Link href="#cursos" passHref>
            <S.MenuLink onClick={() => setIsOpen(false)}>Cursos</S.MenuLink>
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
