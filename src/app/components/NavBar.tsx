'use client'
import React from 'react'
import navIcon from '@/app/assets/logo.svg'
import Image from 'next/image'
import Select, {Options} from './Select'
import {Button} from '@headlessui/react'

export default function NavBar() {
  const options: Options[] = [
    {id: 1, name: '채용'},
    {id: 2, name: '해외 개발자 원격 채용'},
    {id: 3, name: '외국인 원격 채용 (비개발 직군)'},
    {id: 4, name: '한국어 가능 외국인 채용'},
  ]
  return (
    <nav className="bg-transparent">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between min-w-full">
          <div className="">
            <Image src={navIcon} alt="nav" />
          </div>
          <div className="hidden flex items-center justify-center gap-5 sm:flex">
            <Select options={options} />
            <p className="text-white font-extrabold mt-2"> 해외 개발자 활용 서비스</p>
          </div>
          <div className="hidden flex items-center pr-2 sm:flex">
            <Button className="bg-white text-blue-700 font-extrabold px-4 py-2 rounded">
              {' '}
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
