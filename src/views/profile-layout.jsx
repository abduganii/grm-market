import Back from '../components/back'
import Container from '../components/container'
import React from 'react'
import { Link } from '../i18n/routing'

export default function ProfileLayout({children}) {
  return (
    <Container className={"flex px-[26px]  mt-[26px] gap-[35px] items-center"}>
      <Back />
      <div className='mt-[17px]'>
        <h3 className='mb-[71px] text-[22px] leading-[25px]'>Избранные</h3>
        <div className='flex gap-[80px]'>
          <div className='w-full max-w-[115px]'>
            <Link href='/profile/likes' className='inline-block w-full mb-[20px] text-[18px] leading-[21px]'>Избранные</Link>
            <Link href='' className='inline-block w-full mb-[20px] text-[18px] leading-[21px]'>Мои покупки</Link>
            <Link href='/profile/busket' className='inline-block w-full mb-[20px] text-[18px] leading-[21px]'>Корзина</Link>
            <Link href='' className='inline-block w-full mb-[20px] text-[18px] leading-[21px]'>Аккаунт</Link>
          </div>
          {children}
        </div>
      </div>
    </Container>
  )
}
