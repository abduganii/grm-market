"use client"
import GlamCard from '../components/glam-card'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { changeLike } from '../lib/features';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LikesPage() {
  const { likes } = useAppSelector(store => store.likes);
  const [setlocLikes] = useLocalStorage("likes",[])
  const dispatch = useAppDispatch();
  return (
    <div className='w-full max-w-[860px] gap-3 items-start flex flex-wrap justify-between'>
          {
          likes?.length ? likes?.map(e => (
            <GlamCard
              key={e?.title}
              className='colm2'
              url={`/glam/${e?.title}`}
              title={e?.title}
              items={e}
              text="220x350"
              image={e.images?.[0 || 1]}
              isLike={true}
              onLike={() => {
                dispatch(changeLike(likes?.filter(itms => itms !== e)))
                setlocLikes( changeLike([e, ...likes] ))
              }}
              
            />
            )):""
            }
        </div>
  )
}
