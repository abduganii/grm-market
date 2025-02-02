import Back from '../components/back'
import Container from '../components/container'
import React from 'react'
import { Link } from '../i18n/routing'

export default function ProfileLayout({children}) {
  return (
    <Container className={"flex flex-wrap md:flex-nowrap px-[26px]  mt-[26px] gap-[35px] items-center"}>
      <Back />
      <div className='mt-[14px] w-full'>
        <h3 className='mb-[71px] md:inline-block hidden text-[22px] leading-[25px]'>Избранные</h3>
        <div className='flex mb-[100px]  flex-wrap md:flex-nowrap gap-[20px] lg:gap-[80px] w-full'>
          <div className='w-full flex gap-5 md:inline-block md:max-w-[115px]'>
            <Link href='/profile/likes' className='inline-block md:w-full mb-[20px] text-[14px] sm:text-[18px] leading-[21px]'>Избранные</Link>
            <Link href='' className='inline-block md:w-full mb-[20px] text-[14px] sm:text-[18px] leading-[21px]'>Мои покупки</Link>
            <Link href='/profile/busket' className='inline-block md:w-full mb-[20px] text-[14px] sm:text-[18px] leading-[21px]'>Корзина</Link>
            <Link href='/profile/account' className='inline-block md:w-full mb-[20px] text-[14px] sm:text-[18px] leading-[21px]'>Аккаунт</Link>
          </div>
          {children}
        </div>
      </div>
    </Container>
  )
}
