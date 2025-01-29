import Image from 'next/image'
import React from 'react'

export default function GlamCardBusket({  title, text, image }) {
  return (
    <div className='flex w-full mb-[30px] pb-[30px] border-b-[1px] border-[#EEEEEE] items-start gap-[24px]'>
          {image && <Image src={image} alt={"img"} title={title} width={174} height={ 256} />}
          <div className='w-full max-w-[360px] mt-[10px]'>
              <h2>{ title}</h2>
          </div>
    </div>
  )
}
