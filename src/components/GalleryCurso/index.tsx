import { useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'progressive',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 5,
  speed: 500,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 5,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
        draggable: true
      }
    }
  ]
}

export type GalleryCursoImageProps = {
  src: string
  label: string
}

export type GalleryCursoProps = {
  items: GalleryCursoImageProps[]
}

const GalleryCurso = ({ items }: GalleryCursoProps) => {
  const slider = useRef<SlickSlider>(null)
  const [selectedImg, setSelectedImg] = useState(items[0].src)
  return (
    <S.Wrapper>
      <S.SelectedImage>
        <img src={selectedImg} alt="selected" />
      </S.SelectedImage>
      <S.NonSelectedImage>
        <Slider ref={slider} settings={settings}>
          {items.map((item, index) => (
            <img
              role="button"
              key={`thumb-${index}`}
              src={item.src}
              alt={`Thumb - ${item.label}`}
              onClick={() => {
                slider.current?.slickGoTo(index, true)
                setSelectedImg(item.src)
              }}
            />
          ))}
        </Slider>
      </S.NonSelectedImage>
    </S.Wrapper>
  )
}

export default GalleryCurso
