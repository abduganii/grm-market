"use client";
import GlamCard from "../components/glam-card";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { changeBuskets, changeLike } from "../lib/features";
import { minio_img_url } from "@/utils/divice";

export default function LikesPage() {
  const { likes } = useAppSelector((store) => store.likes);
  const { buskets } = useAppSelector((store) => store.buskets)
  const dispatch = useAppDispatch();
  const [isloading,setIsloading]= useState(true)

  setTimeout(()=>{
    setIsloading(false)
  },300)
  return (
    <div className="w-full max-w-[860px] gap-3 items-start flex flex-wrap justify-between">
      {likes?.length
        ? likes?.map((e) => (
            <GlamCard
            isloading={isloading}
              key={e?.id}
              className="colm2"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.collection?.title}`}
              title={`${e.collection?.title} ${e?.model?.title}`}
              items={e}
              text={e?.size?.title}
              image={e?.imgUrl?.path? minio_img_url+ e?.imgUrl?.path :""}
              isLike={true}
              onBuslet={() => {
                dispatch(
                  buskets?.includes(e)
                    ? changeBuskets(
                        buskets?.filter((itms) => itms?.id !== e?.id)
                      )
                    : changeBuskets([e, ...buskets])
                )
              }}
              onLike={() => {
                dispatch(
                  likes?.includes(e)
                    ? changeLike(likes?.filter((itms) => itms?.id !== e?.id))
                    : changeLike([e, ...likes])
                );
              }}
            />
          ))
        : ""}
    </div>
  );
}
