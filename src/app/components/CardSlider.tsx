'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import userIcon from '../assets/user.svg'
import callIcon from '../assets/call.svg'
import galleryIcon from '../assets/gallery.svg'
import locationIcon from '../assets/location.svg'
import boxIcon from '../assets/box.svg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Autoplay} from 'swiper/modules'
import Image from 'next/image'

export default function CardSlider() {
  const sliderData = [
    {
      icon: userIcon,
      text: '해외 마케팅',
    },
    {
      icon: galleryIcon,
      text: '퍼블리셔',
    },
    {
      icon: boxIcon,
      text: '캐드원(제도사)',
    },
    {
      icon: locationIcon,
      text: '해외 세일즈',
    },
    {
      icon: callIcon,
      text: '해외 CS',
    },
  ]
  return (
    <div className="hidden sm:block">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        style={{width: '100%', height: '100%'}}
        className="mySwiper"
      >
        {sliderData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex p-2 bg-white bg-opacity-30 rounded gap-4 items-center w-80">
              <Image src={item.icon} alt={item.text} height={32} width={32} />
              <p className="font-black text-white text-xl">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
