import Image from "next/image";
import React, { useState } from "react";
import { MinutIcons, PlusIcons, RoundedIcons, SomeThingIcons } from "./icons";


export default function GlamCardBusket({ title,items, image }) {
  const [count, setCount] = useState(1);
  console.log(items)
  return (
    <div className="flex w-full max-w-[610px] sm:flex-nowrap border-[1px] flex-wrap  mb-[30px] p-[2px]  border-[#EEEEEE] items-start gap-[24px]">
      {image && (
        <Image src={image} alt={"img"} title={title} width={174} height={256} />
      )}
      <div className="w-full max-w-[360px] ">
        <div className="flex  flex-wrap py-[30px] border-b-[1px]">
            <div className="w-1/4 mr-[4px]">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Коллекция
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.model?.collection?.title}
              </p>

            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Модель
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.model?.title}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Размер
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.size}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Цена за м²
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.price}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Цвет
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.color?.title}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Стиль
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.style}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Форма
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.shape}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Страна
              </h3>
              <p className="text-[16px] text-nowrap  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.country}
              </p>
            </div>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap w-full items-center py-[25px] gap-[19px]">
          <div className="flex w-1/3 gap-[2px]   ">
            <div
              className={`${
                count == 1
                  ? "opacity-40 cursor-not-allowed"
                  : " hover:bg-[#EEEEEE] active:bg-white cursor-pointer"
              }  p-2  border-[1px] border-[#EEEEEE] `}
              onClick={count > 1 ? () => setCount(count - 1) : () => {}}
            >
              <MinutIcons />
            </div>
            <div className="px-3 pb-[6px] pt-[10px] border-[1px]  border-[#EEEEEE]  text-[14px] leading-[16px] text-medium">
              {count}
            </div>
            <div
              className={`${
                items?.count == count
                  ? "opacity-40 cursor-not-allowed"
                  : " hover:bg-[#EEEEEE] active:bg-white cursor-pointer"
              }  p-2  border-[1px] border-[#EEEEEE] hover:bg-[#EEEEEE] active:bg-white`}
              onClick={() => {
                if(items?.count > count)
                setCount(count + 1)
              }}
            >
              <PlusIcons />
            </div>
          </div>

          <div className="w-1/3">
            <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Скидка
            </h3>
            <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
              -15%
            </p>
          </div>
          <div className="w-1/3 ">
            <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Итого
            </h3>
            <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
              {items?.secondPrice * count} sum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
