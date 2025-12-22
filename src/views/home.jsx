"use client";

import GlamCard from "../components/glam-card";
import { Link } from "../i18n/routing";
import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { changeBuskets, changeLike } from "../lib/features";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function HomePage({ product }) {
  const [, setlocLikes] = useLocalStorage("likes", []);
  const [, setLocBuskets] = useLocalStorage("buskets", []);
  const { buskets } = useAppSelector((store) => store.buskets);
  const { likes } = useAppSelector((store) => store.likes);
  const dispatch = useAppDispatch();
  const [isloading,setIsloading]= useState(true)
  setTimeout(()=>{
    setIsloading(false)
  },300)

  return (
    <div className="w-full px-[30px] mt-[90px]">
      <header className="mb-[110px] text-center w-full max-w-[477px] mx-auto px-[30px]">
        <Link className="w-full inline-block max-w-[220px] mx-auto" href="/">
          <Image
            src={"/logo.svg"}
            width={220}
            height={90}
            alt="image"
            title="gr-code"
          />
        </Link>
        <h3 className="text-[17px] leading-[20px] text-[#212121] mt-5 mb-[7px] font-semibold">
          Погрузитесь в мир утончённости!
        </h3>
        <p className="text-normal text-[14px] leading-[16.71px]">
          Турецкие, иранские и узбекские ковры – только премиальное качество и
          доступные цены.
        </p>
      </header>

      <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8  ">
        {product?.length&&
          product?.map((e, i) => (
            <GlamCard
              key={e?.id}
              isloading={isloading}
              className="colm1"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.collection?.title}`}
              title={`${e?.collection?.title} ${e?.model?.title}`}
              items={e}
              text={e?.size}
              type={
                i == 1
                  ? "medium"
                  : i === 3
                  ? "medium"
                  : i === 4
                  ? "large"
                  : i === 2
                  ? "small"
                  : i === 6
                  ? "small"
                  : "extraLarge"
              }
              image={e?.imgUrl}
              isLike={likes?.map((it) => it?.id)?.includes(e?.id)}
              onLike={() => {
                dispatch(
                  likes?.includes(e)
                    ? changeLike(likes?.filter((itms) => itms?.id !== e?.id))
                    : changeLike([e, ...likes])
                );
                likes?.includes(e)
                  ? setlocLikes(likes?.filter((itms) => itms?.id !== e?.id))
                  : setlocLikes([e, ...likes]);
              }}
              onBuslet={() => {
                dispatch(
                  buskets?.includes(e)
                    ? changeBuskets(
                        buskets?.filter((itms) => itms?.id !== e?.id)
                      )
                    : changeBuskets([e, ...buskets])
                );
                buskets?.includes(e)
                  ? setLocBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
                  : setLocBuskets([e, ...buskets]);
              }}
            />
          ))}
      </div>
    </div>
  );
}
