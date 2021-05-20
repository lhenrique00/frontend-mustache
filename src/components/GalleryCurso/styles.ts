import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xsmall};
    }

    .slick-next {
      right: -${theme.spacings.xsmall};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 0.5rem 0 0.5rem;
      cursor: pointer;
    }

    .slick-list {
      margin: 0 ${theme.spacings.xsmall};
    }
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
export const SelectedImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: 28rem;
  }
  ${media.greaterThan('medium')`
    img {
      width: auto;
      height: 50rem;
  }
  `}
`

export const NonSelectedImage = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  background-color: none;
  width: 35rem;
  img {
    width: 5rem;
    height: 8rem;
    object-fit: cover;
  }
  ${media.greaterThan('medium')`
    width: 70rem;
    img {
      width: 12rem;
      height: 12rem;
      object-fit: cover;
    }
  `}
  .slick-list {
    margin: 0;
  }
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`
