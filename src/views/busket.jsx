"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { changeBuskets } from '../lib/features';
import { useLocalStorage } from '../hooks/useLocalStorage';
import GlamCardBusket from "../components/gllam-card-busket"

export default function BusketPage() {
  const { buskets } = useAppSelector(store => store.buskets);
  const [setLocBuskets] = useLocalStorage("buskets",[])
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
                setLocBuskets( changeBuskets([e, ...buskets] ))
              }}
              
            />
            )):""
            }
          </div>
          <div >
              contact
          </div>
        </div>
  )
}
