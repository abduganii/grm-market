'use client'
import { Link, useRouter } from '../i18n/routing'
// import Image from 'next/image'
import React from 'react'
import { BusketIcons, LikeIcons } from './icons'

export default function GlamCard({ className,onBuslet, onLike, isLike, url, title, text, image }) {
  const router = useRouter()
  return (
    <div className={`${className && className}    text-center mb-[65px]`}>
          <div onClick={()=>router.push(url)} className='w-full h-auto min-h-[100px] relative group flex text-center items-center justify-center'>
            <img className='object-contain m-auto  hover:shadow-xl bg-transparent cursor-pointer ease-in duration-200 hover:-translate-y-2'  src={image}  alt='image ' title={title} />
        <div className={`absolute ${isLike ? "flex":"hidden"} group-hover:flex bottom-[69px] left-0 gap-1 w-full  items-center justify-center`}>
          <div
              onClick={(e) => {
              e.stopPropagation()
              onLike(e)
            }}
            className='p-[10px] bg-white cursor-pointer'><LikeIcons stroke={isLike ? "red" : "black"} fill={isLike ? "red" : "none"} /> </div>
          <div onClick={(e) => {
             e.stopPropagation()
             onBuslet(e)
                }} className='p-[10px] bg-white cursor-pointer'><BusketIcons/> </div>
            </div>
          </div>
          <h3 className='text-[20px] leading-[25px] font-normal mt-3 mb-2'>{title }</h3>
          <p className='text-[15px] tetx-[#00000005] leading-[18px] font-normal '>{text }</p>
    </div>
  )
}
