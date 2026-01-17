"use client";
import Back from "../components/back";
import GlamCard from "../components/glam-card";
import { BackPlusIcons, LikeIcons, ShareIcons } from "../components/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeBuskets, changeLike } from "@/lib/features";
import { minio_img_url } from "@/utils/divice";

export default function GlamById({ product, productArr, id }) {
  const [LocalId, setLocalId] = useState(id);
  const [type, setType] = useState(1);
  const [oneProduct, setOneProduct] = useState<any>();
  const { buskets } = useAppSelector((store) => store.buskets);
  const { likes } = useAppSelector((store) => store.likes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setOneProduct(product?.find((e) => e?.id == LocalId));
  }, [product, LocalId]);

  const HendleLike = (e) => {
    dispatch(
      likes?.includes(e)
        ? changeLike(likes?.filter((itms) => itms?.id !== e?.id))
        : changeLike([e, ...likes])
    );
  };
  const HendleBusket = (e) => {
    dispatch(
      buskets?.includes(e)
        ? changeBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
        : changeBuskets([e, ...buskets])
    );
  };
  return (
    <>
      <div
        className={
          "flex flex-wrap justify-start lg:flex-nowrap px-[15px] md:px-[30px] mt-[26px] gap-[35px]  items-start"
        }
      >
        <Back />
        <div className="flex w-full gap-2 max-w-[620px]">
          <div className="w-[81px]">
            <div
              className={`flex items-center h-[122px] w-full max-w-[81px] bg-[#F0F0E5] justify-center `}
            >
              <Image
                src={"/empty-folder.png"}
                width={20}
                height={20}
                alt="img"
              />
            </div>
          </div>
          {oneProduct?.imgUrl ? (
            <Image
              className={`  object-contain max-h-[740px]`}
              width={500}
              height={740}
              src={oneProduct?.imgUrl?.path ? minio_img_url + oneProduct?.imgUrl?.path : ""}
              alt="image"
            />
          ) : (
            <div
              className={`flex items-center h-[740px] w-full max-w-[500px] bg-[#F0F0E5] justify-center `}
            >
              <Image
                src={"/empty-folder.png"}
                width={60}
                height={60}
                alt="img"
              />
            </div>
          )}
        </div>
        <div className="w-full max-w-[530px] mt-[20px]">
          <h4 className="text-[24px] leading-[30px] text-nowrap text-[#282A2C] font-normal mb-1">
            {oneProduct?.model?.title}
          </h4>
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-[40px] leading-[50px] text-nowrap font-normal text-[#282A2C]">
              {oneProduct?.collection?.title}
            </h4>
            <p className="text-[18px] leading-[20px] font-normal text-[#212121]">
              {oneProduct?.i_price} sum
            </p>
          </div>
          <div className="flex flex-wrap gap-[2px] mb-[49px]">
            {product?.map((e, i) => (
              <p
                key={e?.id}
                onClick={() => setLocalId(e?.id)}
                className={`${e?.id == LocalId
                  ? "bg-[#212121] text-white"
                  : "bg-[#F4F4F4] text-[#212121]"
                  } px-[10px] py-1 cursor-pointer rounded-[5px] text-[16px] leading-[18px]`}
              >
                {e?.size?.title}
              </p>
            ))}
          </div>
          <div className="w-full border-b-[1px] mb-[32px] relative">
            <p
              onClick={() => setType(1)}
              className={`${type == 1 ? "" : "opacity-50"
                } text-[#212121] text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}
            >
              Характеристика
            </p>
            <p
              onClick={() => setType(2)}
              className={`${type == 2 ? "" : "opacity-50"
                } text-[#212121]  text-[16px] inline-block p-[10px] leading-[18px] pb-[20px] cursor-pointer`}
            >
              Оплата и доставка
            </p>
            <div
              className={`${type == 1 ? "left-[0px] w-[130px]" : "left-[150px] w-[140px]"
                } transition-all  duration-150 ease-in-out h-[2px]  bg-black absolute bottom-[0px]`}
            ></div>
          </div>
          {type == 1 ? (
            <>
              <p className="text-[15px] min-h-[200px] text-[#282A2C] w-full max-w-[144px] leading-[18px]  whitespace-pre-line">
                {oneProduct?.internetInfo}
              </p>
            </>
          ) : (
            <p className="min-h-[200px]">
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
      </div>
      <div className="w-full mt-[94px] px-[30px] flex gap-8  ">
        {productArr?.length ?
          productArr?.map((e) => (
            <GlamCard
              key={e?.id}
              className="colm1"
              url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.collection?.title}`}
              title={`${e?.collection?.title} ${e?.model?.title}`}
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
              }} type={undefined} isloading={undefined} />
          )) : ""}
      </div>
    </>
  );
}
