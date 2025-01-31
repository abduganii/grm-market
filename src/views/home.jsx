'use client'
import Container from '../components/container'
import GlamCard from '../components/glam-card'
import { Link } from '../i18n/routing'
import Image from 'next/image'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { changeBuskets, changeLike } from '../lib/features'
import { useLocalStorage } from "../hooks/useLocalStorage"

export default function HomePage({ product }) {
  const [localLeks,setlocLikes] = useLocalStorage("likes", [])
  const [localBuskets,setLocBuskets] = useLocalStorage("buskets",[])
  const { buskets } = useAppSelector(store => store.buskets);
  const {likes} = useAppSelector(store => store.likes);
  const dispatch = useAppDispatch();
  return (
      <div className='w-full px-[30px] mt-[90px]'>
          <header className='mb-[110px] text-center w-full max-w-[477px] mx-auto px-[30px] text-center '>
                <Link className='w-full inline-block max-w-[220px] mx-auto' href='/'>
                    <Image src={'/logo.svg'} width={220 } height={90}  alt="image" title='gr-code'/>
                </Link>
              <h3 className='text-[17px] leading-[20px] text-[#212121] mt-5 mb-[7px] font-semibold'>Погрузитесь в мир утончённости!</h3>
              <p className='text-normal text-[14px] leading-[16.71px]'>Турецкие, иранские и узбекские ковры – только премиальное качество и доступные цены. </p>
          </header>

      {/* <div className='w-full  gap-3 items-start flex flex-wrap'> */}
      <div className='w-full  columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8 '>
  
          {
          product?.length && product?.map((e,i) => (
            <GlamCard
              key={e?.title}
              className='colm1'
              url={`/glam/${e?.title}`}
              title={e?.title}
              items={e}
              text="220x350"
              type={i==1? "medium": i===3 ? "small" :i === 4? "large": i === 6? "small":i === 6?"medium":"extraLarge"}
              image={e.images?.[0 || 1]}
              isLike={likes?.map(it=>it?.title)?.includes(e?.title)}
              onLike={() => {
                dispatch(likes?.includes(e)  ? changeLike(likes?.filter(itms=> itms !== e)): changeLike([e, ...likes] ))
                likes?.includes(e) ? setlocLikes(likes?.filter(itms=> itms !== e)) : setlocLikes([e, ...likes])
              }}
              onBuslet={() => {
                dispatch(buskets?.includes(e) ? changeBuskets(buskets?.filter(itms=> itms !== e)): changeBuskets([e, ...buskets] ))
               buskets?.includes(e) ? setLocBuskets(buskets?.filter(itms=> itms !== e)): setLocBuskets([e, ...buskets] )
              }}
            />
            ))
            }
           
          </div>
    </div>
  )
}

