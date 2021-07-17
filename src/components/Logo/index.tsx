import * as S from './styles'
import Link from 'next/link'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({ size = 'normal', hideOnMobile = false }: LogoProps) => (
  <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
    <Link href="/" passHref>
      <svg
        width="275"
        height="64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="url(#pattern0)" d="M0 0h275v64H0z" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0"
              transform="matrix(.00103 0 0 .00442 -.058 -2.015)"
            />
          </pattern>
          <image
            id="image0"
            width="1080"
            height="1080"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4CAYAAADsEGyPAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAIABJREFUeJzs3b2SG8fdN+zfvuWc1BFwJR8A6dKTC66SY9GBnApO5FByREW3VnckRaZCKzGYSoGp+FaVodyqmzyAx16ewCPyCPYNGmNgV7v4nMFMD66ramtWmiXQaHTPdP/7YxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACf+w0M2mxCEFJj+wAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </Link>
  </S.Wrapper>
)

export default Logo