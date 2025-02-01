"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { changeBuskets } from '../lib/features';
import { useLocalStorage } from '../hooks/useLocalStorage';
import GlamCardBusket from "../components/gllam-card-busket"

export default function BusketPage() {
  const { buskets } = useAppSelector(store => store.buskets);
  const [localBuskets,setLocBuskets] = useLocalStorage("buskets",[])
  const dispatch = useAppDispatch();
  return (
      <div className='w-full max-w-[1100px] gap-[20px] items-start flex justify-between'>
          <div className='w-full max-w-[560px]'>
          {buskets?.length ? buskets?.map(e => (
            <GlamCardBusket
              key={e?.title}
              className='colm2'
              url={`/glam/${e?.title}`}
              title={e?.title}
              items={e}
              text="220x350"
              image={e.images?.[0 || 1]}
              onLike={() => {
                dispatch(changeBuskets(buskets?.filter(itms => itms !== e)))
                setLocBuskets( [e, ...buskets] )
              }}
              
            />
            )):""
            }
          </div>
          <div  className='w-full max-w-[270px]'>
              <p className='text-[12px] leading-[14.4px] text-[#212121]'>Заказчик</p>
            <p className='text-[20px] leading-[23.4px] text-[#212121] mt-[6px] mb-[24px]'>Не ригистрирован</p>
        
        <div className='items-center w-full mb-2 flex justify-between'>
          <p className='text-[12px] leading-[14.4px] text-[#212121]'>Номер для связи</p>
          <p className='text-[12px] leading-[14.4px] text-[#006BD6]'>Изменить</p>
        </div>
          <input className='py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid'
          placeholder='+998' />
        <buttun className='py-[11px] text-center inline-block w-full mt-[30px]  px-[12px] border-[#EEEEEE] border-[1px] border-solid'>
        Оформиь заказ
        </buttun>
          </div>
        </div>
  )
}
