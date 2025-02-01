import { EditIcons } from '@/components/icons'
import React from 'react'

export default function AcountPage() {
  return (
    <div className='w-full h-full'>
          <h4 className='text-[44px] leading-[51px] mt-3 mb-[13px]'>id:092u3jd2</h4>
          <div className='flex items-center gap-[21px]'>
              <p className='text-[22px] leading-[25px]'>+998 94 609-34-44</p>
              <EditIcons />
              <p className='text-[#212121] opacity-30 text-[12px] leading-[18px]'>подтержден</p>
          </div>
          <div className='flex gap-4 max-w-[596px] mt-[41px] mb-[48px]'>
              <div className=' w-full'>
                  <p className='mb-2 text-[14px] leading-[16px]'>Имя</p>  
                  <input placeholder='Имя' className='py-[11px] w-full  px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid'/>
              </div>
              <div className=' w-full'>
                  <p className='mb-2 text-[14px] leading-[16px]'>Фамилия</p>  
                  <input placeholder='Фамилия' className='py-[11px] w-full  px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid'/>
              </div>
          </div>
          <p className='text-[14px] leading-[20px] text-[#212121]'>ip device: </p>
          <p className='text-[14px] leading-[20px] text-[#212121] opacity-40'>129u41201i2  Samsung Galaxy A6+</p>
          <p className='text-[14px] leading-[20px] text-[#212121] mt-5'>location registry:  </p>
          <p className='text-[14px] leading-[20px] text-[#212121] opacity-40'>c.Tashkent. str.Yuganik l:892423 sh:29832</p>

          <p className='mt-[50px] w-full text-[#21212173]  max-w-[474px] text-[12px] leading-[15px]'>
            <p className='mb-[10px]'> Регистрируясь на нашем сайте, вы подтверждаете свое согласие с нашей <span className='font-medium text-[#349AFF]'>Политикой конфиденциальности</span> и <span className='font-medium text-[#349AFF]'>Условиями использования.</span></p>
              Эти документы содержат важную информацию о том, как мы защищаем ваши персональные данные, обрабатываем информацию и регулируем использование нашего сервиса. Мы рекомендуем вам внимательно ознакомиться с ними перед завершением регистрации, чтобы быть уверенными в прозрачности и безопасности нашего взаимодействия. Ваше доверие и защита ваших данных для нас приоритетны!
          </p>
    </div>
  )
}
