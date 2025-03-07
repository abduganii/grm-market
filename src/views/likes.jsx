"use client";
import GlamCard from "../components/glam-card";
import React from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { changeLike } from "../lib/features";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LikesPage() {
  const { likes } = useAppSelector((store) => store.likes);
  const [localLike, setlocLikes] = useLocalStorage("likes", []);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full max-w-[860px] gap-3 items-start flex flex-wrap justify-between">
      {likes?.length
        ? likes?.map((e) => (
            <GlamCard
              key={e?.id}
              className="colm2"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.model?.collection?.title}`}
              title={`${e?.model?.collection?.title} ${e?.model?.title}`}
              items={e}
              text="220x350"
              image={e.imgUrl}
              isLike={true}
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
            />
          ))
        : ""}
    </div>
  );
}
