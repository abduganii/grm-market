"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Back from "../components/back";
import Container from "../components/container";
import GlamCard from "../components/glam-card";
import { BackPlusIcons, LikeIcons, ShareIcons } from "../components/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeBuskets, changeLike } from "@/lib/features";

export default function GlamById({ product, productArr, id }) {
  const [LocalId, setLocalId] = useState(id);
  const [type, setType] = useState(1);
  const [oneProduct, setOneProduct] = useState();
  const [, setlocLikes] = useLocalStorage("likes", []);
  const [, setLocBuskets] = useLocalStorage("buskets", []);
  const { buskets } = useAppSelector((store) => store.buskets);
  const { likes } = useAppSelector((store) => store.likes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOneProduct(product?.find((e) => e.id == LocalId));
  }, [product, LocalId]);

  const HendleLike = (e) => {
    dispatch(
      likes?.includes(e)
        ? changeLike(likes?.filter((itms) => itms?.id !== e?.id))
        : changeLike([e, ...likes])
    );
    likes?.includes(e)
      ? setlocLikes(likes?.filter((itms) => itms?.id !== e?.id))
      : setlocLikes([e, ...likes]);
  };
  const HendleBusket = (e) => {
    dispatch(
      buskets?.includes(e)
        ? changeBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
        : changeBuskets([e, ...buskets])
    );
    buskets?.includes(e)
      ? setLocBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
      : setLocBuskets([e, ...buskets]);
  };
  return (
    <>
      <Container
        className={
          "flex flex-wrap justify-center lg:flex-nowrap px-[15px] md:px-[26px] mt-[26px] gap-[35px] items-center"
        }
      >
        <Back />
        <Image
          className="object-contain max-h-[740px]"
          width={683}
          height={740}
          src={oneProduct?.imgUrl}
          alt="image"
        />
        <div className="w-full max-w-[430px] ">
          <h4 className="text-[24px] leading-[30px] text-[#282A2C] font-normal mb-1">
            {oneProduct?.model?.title}
          </h4>
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-[40px] leading-[50px] font-normal text-[#282A2C]">
              {oneProduct?.model?.collection?.title}
            </h4>
            <p className="text-[18px] leading-[20px] font-normal text-[#212121]">
              {oneProduct?.secondPrice} sum
            </p>
          </div>
          <div className="flex flex-wrap gap-[2px] mb-[49px]">
            {product?.map((e, i) => (
              <p
                key={e?.id}
                onClick={() => setLocalId(e?.id)}
                className={`${
                  e?.id == LocalId
                    ? "bg-[#212121] text-white"
                    : "bg-[#F4F4F4] text-[#212121]"
                } px-[10px] py-1 rounded-[5px] text-[16px] leading-[18px]`}
              >
                {e?.size}
              </p>
            ))}
          </div>
          <div className="w-full border-b-[1px] mb-[32px] relative">
            <p
              onClick={() => setType(1)}
              className={`${
                type == 1 ? "" : "opacity-50"
              } text-[#212121] text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}
            >
              Характеристика
            </p>
            <p
              onClick={() => setType(2)}
              className={`${
                type == 2 ? "" : "opacity-50"
              } text-[#212121]  text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}
            >
              Оплата и доставка
            </p>
            <div
              className={`${
                type == 1 ? "left-[0px] w-[130px]" : "left-[150px] w-[140px]"
              } transition-all  duration-150 ease-in-out h-[2px]  bg-black absolute bottom-[0px]`}
            ></div>
          </div>
          {type == 1 ? (
            <>
              <p className="text-[15px] text-[#282A2C] w-full max-w-[144px] leading-[18px]  whitespace-pre-line">
                {oneProduct?.internetInfo}
              </p>
            </>
          ) : (
            <p>
              Добро пожаловать в наш интернет-магазин ковров – место, где
              качество, стиль и уют соединяются! Мы гордимся тем, что предлагаем
            </p>
          )}

          <div className="mt-[50px] mb-[36px] flex gap-[10px]">
            <button
              onClick={() => HendleBusket(oneProduct)}
              className="bg-[#121212] text-white  text-[13px] leading-[15px] py-[10px] rounded-[2px] px-[24px] flex items-center gap-2"
            >
              {buskets?.map((it) => it?.id)?.includes(oneProduct?.id) ? (
                "Добавлено"
              ) : (
                <>
                  {" "}
                  <BackPlusIcons /> Добавить в корзинку
                </>
              )}
            </button>

            <button
              onClick={() => HendleLike(oneProduct)}
              className="text-[#121212] bg-[#F4F4F4]  text-[13px] leading-[15px] py-[10px] rounded-[2px] px-[24px] flex items-center gap-2"
            >
              <LikeIcons
                stroke={
                  likes?.map((it) => it?.id)?.includes(oneProduct?.id)
                    ? "red"
                    : "black"
                }
                fill={
                  likes?.map((it) => it?.id)?.includes(oneProduct?.id)
                    ? "red"
                    : "none"
                }
              />
              Понравился
            </button>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <ShareIcons />
            <p className="text-[#121212]   text-[13px] leading-[15px]">
              Поделится
            </p>
          </div>
        </div>
      </Container>
      <div className="w-full mt-[94px] columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8  ">
        {productArr?.length &&
          productArr?.map((e, i) => (
            <GlamCard
              key={e?.id}
              className="colm1"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.model?.collection?.title}`}
              title={`${e?.model?.collection?.title} ${e?.model?.title}`}
              items={e}
              text="220x350"
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
              image={e.imgUrl}
              isLike={likes?.map((it) => it?.id)?.includes(e?.id)}
              onLike={() => HendleLike(e)}
              onBuslet={() => HendleBusket(e)}
            />
          ))}
      </div>
    </>
  );
}
