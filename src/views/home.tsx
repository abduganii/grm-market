"use client";

import GlamCard from "../components/glam-card";
import { Link } from "../i18n/routing";
import Image from "next/image";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { changeBuskets, changeLike } from "../lib/features";
import Masonry from "react-masonry-css";
import { minio_img_url } from "@/utils/divice";

export default function HomePage({ product }) {
  const { buskets } = useAppSelector((store) => store.buskets);
  const { likes } = useAppSelector((store) => store.likes);
  const dispatch = useAppDispatch();
  const breakpointColumnsObj = {
    default: 4,
    // 1280: 4,
    1024: 3,
    768: 2,
    640: 2,
  };

  return (
    <div className="w-full px-4 sm:px-[30px] mt-[60px] sm:mt-[90px]">
      <header className="mb-[60px] sm:mb-[110px] text-center w-full max-w-[477px] mx-auto px-4 sm:px-[30px]">
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

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {product?.length &&
          product?.map((e) => (
            <GlamCard
              key={e?.id}
              className="colm1"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.collection?.title}`}
              title={`${e?.collection?.title} ${e?.model?.title}`}
              type={e?.sizeType}
              text={e?.size?.title}
              image={e?.imgUrl?.path ? minio_img_url + e?.imgUrl?.path : ""}
              isLike={likes?.map((it) => it?.id)?.includes(e?.id)}
              onLike={() => {
                dispatch(
                  likes?.includes(e)
                    ? changeLike(likes?.filter((itms) => itms?.id !== e?.id))
                    : changeLike([e, ...likes])
                );
              }}
              onBuslet={() => {
                dispatch(
                  buskets?.includes(e)
                    ? changeBuskets(
                      buskets?.filter((itms) => itms?.id !== e?.id)
                    )
                    : changeBuskets([e, ...buskets])
                );
              }} isloading={undefined} />
          ))}
      </Masonry>
    </div>
  );
}
