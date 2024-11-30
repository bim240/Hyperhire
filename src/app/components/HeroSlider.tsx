'use client'
/* eslint-disable */
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import checkIcon from '../assets/check.svg'
import abhiIcon from '../assets/abhi.svg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Navigation} from 'swiper/modules'
import Image from 'next/image'
import {Tooltip} from 'react-tooltip'
import {fetcher} from '../utils/network.helper'
import useSWR from 'swr'

export default function HeroSlider() {
  const {data, isLoading} = useSWR('/api', fetcher)
  const footerData = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']

  return isLoading ? (
    <></>
  ) : (
    <div className="w-12/12 flex-col gap-8 font-extrabold flex justify-center text-white sm:w-6/12">
      <Tooltip
        id="my-tooltip1"
        content="월 100만원"
        place="top"
        style={{color: 'green'}}
        variant="light"
      />
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
        {data &&
          data?.data &&
          Array.isArray(data?.data) &&
          data?.data?.map((item: any, idx: number) => (
            <SwiperSlide key={idx} className="flex justify-center" style={{display: 'flex'}}>
              <div
                data-tooltip-id="my-tooltip1"
                className="flex p-2 flex-col h-full bg-white rounded-xl gap-1 items-center justify-center w-80 "
              >
                <Image src={abhiIcon} alt={item.name} height={120} width={120} />
                <p className="font-black text-black text-xl">{item.name}</p>
                <div className="flex flex-wrap justify-center text-black px-5 gap-1 mt-4">
                  {item.tags.map((tag: string, idx: number) => (
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
      <div className="flex flex-wrap gap-8 sm:hidden">
        {footerData.map((item, idx) => (
          <div key={idx} className="flex gap-2 item-center">
            <Image src={checkIcon} alt={item} />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex text-yellow-400 flex-wrap gap-8 sm:hidden">개발자가 필요하신가요?</div>
    </div>
  )
}
