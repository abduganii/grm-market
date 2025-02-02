"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { changeBuskets } from '../lib/features';
import { useLocalStorage } from '../hooks/useLocalStorage';
import GlamCardBusket from "../components/gllam-card-busket"

export default function OrderPage() {
  const { buskets } = useAppSelector(store => store.buskets);
  const [localBuskets,setLocBuskets] = useLocalStorage("buskets",[])
  const dispatch = useAppDispatch();
  return (
      <div className='w-full max-w-[1100px] lg:flex-nowrap flex-wrap gap-[20px] items-start flex justify-between'>
          <div className='w-full max-w-[610px]'>
              <div className='p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-2'>
                  <p className='text-[12px] leading-[14px] mb-[15px]'>Список выбранные вами заказов</p>
                  <ul>
                    <li className='p-[13px] flex items-center gap-2 rounded-[3px] border-[#EEEEEE] border-[1px]'>
                    <p className='text-[12px] leading-[14px] w-full'>Aspendos</p>
                    <p className='text-[12px] leading-[14px] w-full'>3667</p>
                    <p className='text-[12px] leading-[14px] w-full'>200x300</p>
                    <p className='text-[12px] leading-[14px] w-full'>Blue</p>
                    <p className='text-[12px] leading-[14px] w-full'>Classic</p>
                    <p className='text-[12px] leading-[14px] w-full'>1 120 000.00</p>
                      </li>
                      <li className='p-[13px] flex items-center gap-2 rounded-[3px] border-[#EEEEEE] border-[1px]'>
                    <p className='text-[12px] leading-[14px] w-full'>Aspendos</p>
                    <p className='text-[12px] leading-[14px] w-full'>3667</p>
                    <p className='text-[12px] leading-[14px] w-full'>200x300</p>
                    <p className='text-[12px] leading-[14px] w-full'>Blue</p>
                    <p className='text-[12px] leading-[14px] w-full'>Classic</p>
                    <p className='text-[12px] leading-[14px] w-full'>1 120 000.00</p>
                    </li>
                  </ul>
              </div>
              <div className='p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-2'>
                  <p className='text-[12px] leading-[14px] mb-[15px]'>Укажите метод оплаты</p>
                  <div className='flex items-center gap-2 mb-4 ] '>
                      <div className='flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]'>
                        <p className='text-[#212121] text-[12px] leading-[14px]'>Наличными</p>
                      </div>
                      <div className='flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]'>
                        <p className='text-[#212121] text-[12px] leading-[14px]'>Payme</p>
                      </div>
                      <div className='flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]'>
                        <p className='text-[#212121] text-[12px] leading-[14px]'>Click</p>
                        </div>
                     </div>
                    <p className='text-[12px] leading-[18px] text-[#212121] opacity-50'>После выбора способа оплаты: вы обязаны оплатить заказ по указанному методу. Торговаться или изменять условия оплаты, включая наличный способ, нельзя. Вы должны внести полную сумму, указанную в итоговой цене.</p>
              </div>
              <div className='p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-6'>
                  <p className='text-[12px] leading-[14px] mb-[15px]'>Адрес для доставки</p>
                  <input  className='py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid mb-4' placeholder='Город, улица, дом, ориентир, номер квартиры'/>
                    <p className='text-[12px] leading-[18px] text-[#212121] opacity-50'>Убедитесь, что указали правильный адрес доставки. После оформления заказа изменить адрес будет невозможно. В случае ошибки в адресе, вам придется оплатить дополнительные курьерские услуги. Пожалуйста, не забудьте встретить курьера во дворе!</p>
              </div>
              <p className='text-[12px] leading-[14px] mb-[12px]'>Комментарий для курьера</p>
              <textarea className='px-[16px] py-[13px] bg-[#F9F9F9] border-[#EEEEEE] border-[1px] outline-none w-full mb-[60px]' rows={3} placeholder='Оставьте комментарий для курьера'/>
              <buttun className='py-[11px] w-full mb-[59px] bg-[#212121] text-white text-center inline-block w-full ]  px-[12px] border-[#EEEEEE] border-[1px] border-solid'>
        Оформиь заказ
        </buttun>
           
          </div>
          <div  className='w-full max-w-[270px]'>
              <p className='text-[12px] leading-[14.4px] text-[#212121]'>Заказчик</p>
            <p className='text-[20px] leading-[23.4px] text-[#212121] mt-[6px] mb-[24px]'>id:9823hd23i</p>
        
        <div className='items-center w-full mb-2 flex justify-between'>
          <p className='text-[12px] leading-[14.4px] text-[#212121]'>Номер для связи</p>
          <p className='text-[12px] leading-[14.4px] text-[#006BD6]'>Изменить</p>
        </div>
         
              <p className='py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid'>+998 94 609 34 44</p>
       
          </div>
        </div>
  )
}
