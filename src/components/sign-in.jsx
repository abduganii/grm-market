'use client'
import React, { useState } from 'react'


export default function SignInMadal() {
  const [type, setType] = useState(1)

  return (
    <div  className='w-full fixed flex items-center justify-center top-0 left-0 bg-[#21212199]  h-full'>
        <div onClick={(e)=>e.stopPropagation()} className='w-full bg-white max-w-[600px] p-[63px] pt-[43px]'>
              <h3 className='text-[32px] leading-[37px] font-bold'>Регистрация & Логин</h3>
           {
          type == 1 ? <>
           <p className='text-[14px] leading-[16.4px] mt-[20px] mb-2'>Введите ваш номер для подтверждения вашей личности.</p>
              <div className='flex gap-2'>
                  <input className='py-[11px] w-full max-w-[290px] px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid' placeholder='+998' />
                  <button onClick={()=>setType(2)} className='bg-[#121212]  text-white  text-[16px] leading-[15px] py-[11px] rounded-[2px] px-[16px] flex items-center gap-2'>
                  Отправить смс код
          </button>
             </div>
            <p className='mt-[30px] text-[12px] min-h-[126px] font-medium text-[#21212173] leading-[14px]'>
              <p className='mb-4'>
                Регистрируясь на нашем сайте, вы подтверждаете свое согласие с нашей Политикой конфиденциальности и Условиями использования.
              </p>
              Эти документы содержат важную информацию о том, как мы защищаем ваши персональные данные, обрабатываем информацию и регулируем использование нашего сервиса. Мы рекомендуем вам внимательно ознакомиться с ними перед завершением регистрации, чтобы быть уверенными в прозрачности и безопасности нашего взаимодействия. Ваше доверие и защита ваших данных для нас приоритетны!</p></> :
            <>
               <p className='text-[14px] leading-[16.4px] mt-[20px] mb-2'>СМС с кодом подтверждения отправлено на номер +998 *** 3444.</p>
              <div className='flex gap-2'>
                  <input className='py-[11px] w-full max-w-[290px] px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid' placeholder='СМС с код' />
                  <button onClick={()=>setType(2)} className='bg-[#121212]  text-white  text-[16px] leading-[15px] py-[11px] rounded-[2px] px-[40px] flex items-center gap-2'>
                  Регистрация
          </button>
             </div>
            <p className='mt-[30px] text-[12px] min-h-[126px] pt-auto font-medium text-[#21212173] leading-[14px]'>
            Если вы не получили код, попробуйте отправить запрос повторно или свяжитесь с нашей техподдержкой. Убедитесь, что вы находитесь в правильном регионе, номер указан с верным кодом страны (+998), и сеть работает стабильно.</p>
            </>
             }
        </div>
    </div>
  )
}
