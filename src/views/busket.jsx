"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { changeBuskets } from "../lib/features";
import { useLocalStorage } from "../hooks/useLocalStorage";
import GlamCardBusket from "../components/gllam-card-busket";
import { useRouter } from "@/i18n/routing";

export default function BusketPage() {
  const { buskets } = useAppSelector((store) => store.buskets);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [, setLocBuskets] = useLocalStorage("buskets", []);
  const HendleRemove = (e) => {
    dispatch(
    changeBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
    );
   setLocBuskets(buskets?.filter((itms) => itms?.id !== e?.id))
  };
  return (
    <div className="w-full max-w-[1100px] gap-[20px] items-start flex flex-wrap xl:flex-nowrap justify-between">
      <div className="w-full max-w-[610px]">
        {buskets?.length
          ? buskets?.map((e) => (
              <GlamCardBusket
                key={e?.id}
                url={`/glam/${e?.id}?modelId=${e?.model?.title}&color=${e?.color?.title}&collectionId=${e?.collection?.title}`}
                title={`${e?.collection?.title} ${e?.model?.title}`}
                items={e}
                text={e?.size}
                image={e?.imgUrl}
                onRemove={()=>HendleRemove(e)}

              />
            ))
          : ""}
      </div>
      <div className="w-full sm:max-w-[270px]">
        <p className="text-[12px] leading-[14.4px] text-[#212121]">Заказчик</p>
        <p className="text-[20px] leading-[23.4px] text-[#212121] mt-[6px] mb-[24px]">
          Не ригистрирован
        </p>

        <div className="items-center w-full mb-2 flex justify-between">
          <p className="text-[12px] leading-[14.4px] text-[#212121]">
            Номер для связи
          </p>
          <p className="text-[12px] leading-[14.4px] text-[#006BD6]">
            Изменить
          </p>
        </div>
        <input
          className="py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid"
          placeholder="+998"
        />
        <buttun
          onClick={() => router.push("/order")}
          className="py-[11px] cursor-pointer text-center inline-block w-full mt-[30px]  px-[12px] border-[#EEEEEE] border-[1px] border-solid"
        >
          Оформиь заказ
        </buttun>
      </div>
    </div>
  );
}
