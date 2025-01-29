'use client'
import Back from '../components/back'
import Container from '../components/container'
import GlamCard from '../components/glam-card'
import { BackPlusIcons, LikeIcons, ShareIcons } from '../components/icons'
import Image from 'next/image'
import React, { useState } from 'react'

export default function GlamById({ id }) {
  const [type,setType] = useState(1)
  return (
    <>
    <Container className={"flex  px-[26px] mt-[26px] gap-[35px] items-center"}>
      <Back />
        <Image className="object-contain max-h-[740px]" width={683} height={740} src='/image2.png' alt='image' />
        <div className='w-full max-w-[430px] '>
            <h4 className='text-[24px] leading-[30px] text-[#282A2C] font-normal mb-1'>3667</h4>
          <div className='flex items-center justify-between mb-5'>
            <h4 className='text-[40px] leading-[50px] font-normal text-[#282A2C]'>Aspendos</h4>
            <p className='text-[18px] leading-[20px] font-normal text-[#212121]'>120000 sum</p>
          </div>
          <div className='flex flex-wrap gap-[2px] mb-[49px]'>
            <p className={`${true ? "bg-[#212121] text-white" : "bg-[#F4F4F4] text-[#212121]"} px-[10px] py-1 rounded-[5px] text-[16px] leading-[18px]`}>100x150</p>
            <p 
            className={`${false? "bg-[#212121] text-white":"bg-[#F4F4F4] text-[#212121]"}  px-[10px] py-1 rounded-[5px] text-[16px] leading-[18px]`}>100x150</p>
            <p 
            className={`${false? "bg-[#212121] text-white":"bg-[#F4F4F4] text-[#212121]"}  px-[10px] py-1 rounded-[5px] text-[16px] leading-[18px]`}>100x150</p>
            <p 
            className={`${false? "bg-[#212121] text-white":"bg-[#F4F4F4] text-[#212121]"}  px-[10px] py-1 rounded-[5px] text-[16px] leading-[18px]`}>100x150</p>
          </div>
          <div className='w-full border-b-[1px] mb-[32px] relative'>
          <p onClick={()=>setType(1)} className={`${type==1 ? "":"opacity-50"} text-[#212121] text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}>Характеристика</p>
            <p onClick={() => setType(2)} className={`${type == 2 ? "" : "opacity-50"} text-[#212121]  text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}>Оплата и доставка</p>
            <div className={`${type ==1 ? "left-[0px] w-[130px]":"left-[150px] w-[140px]"} transition-all  duration-150 ease-in-out h-[2px]  bg-black absolute bottom-[0px]`}>
            </div>
          </div>
          {
            type == 1 ? 
              <>
               <div className='w-full mb-2 flex items-center gap-[15px] md:gap-[42px]'>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px] opacity-50'>Вес ковра</p>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px]'>123 </p>
              </div>
              <div className='w-full mb-2 flex items-center gap-[15px] md:gap-[42px]'>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px] opacity-50'>Высота ворса (мм.)</p>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px]'>123 </p>
              </div>
              <div className='w-full mb-2 flex items-center gap-[15px] md:gap-[42px]'>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px] opacity-50'>Плотность ворса</p>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px]'>123 </p>
              </div>
              <div className='w-full mb-2 flex items-center gap-[15px] md:gap-[42px]'>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px] opacity-50'>Производитель</p>
                <p className='text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px]'>123 </p>
              </div>
              </>:
              <p>Добро пожаловать в наш интернет-магазин ковров – место, где качество, стиль и уют соединяются!
              Мы гордимся тем, что предлагаем</p>
         }

          <div className='mt-[50px] mb-[36px] flex gap-[10px]'>
            <button className='bg-[#121212] text-white  text-[13px] leading-[15px] py-[10px] rounded-[2px] px-[24px] flex items-center gap-2'>
              <BackPlusIcons/>
              Добавить в корзинку
            </button>

            <button className='text-[#121212] bg-[#F4F4F4]  text-[13px] leading-[15px] py-[10px] rounded-[2px] px-[24px] flex items-center gap-2'>
              <LikeIcons/>
              Понравился
            </button>
          </div>
          <div  className='flex items-center gap-2 cursor-pointer'>
            <ShareIcons />
            <p className='text-[#121212]   text-[13px] leading-[15px]'>Поделится</p>
          </div>
        </div>

    </Container>
    <Container className='w-full mt-[94px] gap-3 items-start flex flex-wrap justify-between'>
      <GlamCard  className='colm1' url={"/glam/1"}  title="Sanat Docu 3455" text="220x350" image='/image1.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image2.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image3.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image4.png' />
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image1.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image3.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image4.png'/>
      <GlamCard className='colm1' url={"/glam/1"} title="Sanat Docu 3455" text="220x350" image='/image2.png'/>
    </Container>
    </>
  )
}
