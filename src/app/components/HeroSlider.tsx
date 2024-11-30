'use client'

import React from 'react'
import abhiIcon from '../assets/abhi.svg'
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Navigation} from 'swiper/modules'
import Image from 'next/image'

export default function HeroSlider() {
  const data = [
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
  ]
  return (
    <div className="w-12/12 font-extrabold flex justify-center text-white sm:w-6/12">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        style={{
          height: '100%',
          width: '100%',
        }}
        className="mySwiper"
      >
        {data.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex justify-center"
            style={{display: 'flex', minHeight: '408px'}}
          >
            <div
              className="flex p-2 flex-col h-full bg-white rounded-xl gap-1 items-center justify-center w-80 "
              style={{minHeight: '408px'}}
            >
              <Image src={item.img} alt={item.name} height={120} width={120} />
              <p className="font-black text-black text-xl">{item.name}</p>
              <div className="flex flex-wrap justify-center text-black px-5 gap-1 mt-4">
                {item.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="text-gray-600 text-xl p-1 rounded-md border border-green"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
