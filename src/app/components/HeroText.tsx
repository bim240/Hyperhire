'use client'
import React from 'react'
import {motion, MotionConfig} from 'framer-motion'
import {Tooltip} from 'react-tooltip'

export default function HeroText() {
  const [isOpen, setIsOpen] = React.useState(false)
  const text = [
    {title: '평균 월 120만원', subtitle: '임금을 해당 국가를 기준으로 계산합니다.'},
    {title: '최대 3회 인력교체', subtitle: '막상 채용해보니 맞지 않아도 걱정하지 마세요.'},
    {
      title: '평균 3일, 최대 10일',
      subtitle: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
    },
  ]

  setTimeout(() => {
    setIsOpen(true)
  }, 800)
  return (
    <section className="w-12/12 font-extrabold text-white sm:w-6/12">
      <Tooltip
        id="my-tooltip"
        content="풀타임, 파트타임"
        isOpen={isOpen}
        place="top-start"
        style={{color: '#40E2E8'}}
        variant="light"
      />
      <MotionConfig transition={{duration: 0.5}}>
        <motion.div initial={{opacity: 0, scale: 1, y: 50}} animate={{opacity: 1, scale: 1, y: 0}}>
          <h1
            data-tooltip-id="my-tooltip"
            className="font-extrabold text-white text-5xl leading-snug"
          >
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </h1>
          <h2 className="font-extrabold text-white text-2xl w-8/12 my-5 leading-snug">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </h2>
          <p className=" hidden font-extrabold text-white text-xl w-8/12 my-5 leading-snug underline sm:block">
            개발자가 필요하신가요?
          </p>
          <div className="hidden flex gap-6 mt-20 sm:flex">
            {text.map((text, idx) => (
              <div key={idx} className="flex flex-col gap-2 border-t border-white">
                <p className="text-lg block">{text.title}</p>
                <p className="text-gray-100">{text.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </MotionConfig>
    </section>
  )
}
