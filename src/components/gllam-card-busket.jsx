import Image from "next/image";
import React, { useState } from "react";
import { CloseIcons, MinutIcons, PlusIcons } from "./icons";


export default function GlamCardBusket({ title,onRemove,items, image }) {
  const [count, setCount] = useState(1);
  return (
    <div className="flex w-full max-w-[610px] relative sm:flex-nowrap border-[1px] flex-wrap  mb-[30px] p-[2px]  border-[#EEEEEE] items-start gap-[24px]">
      {image && (
        <Image src={image} alt={"img"} title={title} width={174} height={256} />
      )}

      <div onClick={onRemove} className="ms-auto -mx-1.5 cursor-pointer absolute top-4 right-4 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
             <CloseIcons/>
          </div>
      <div className="w-full max-w-[360px] ">
        <div className="flex  flex-wrap py-[30px] border-b-[1px]">
            <div className="w-1/4 mr-[4px]">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Коллекция
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.collection?.title}
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
                {items?.size?.title}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Цена за м²
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.price?.title}
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
                {items?.style?.title}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Форма
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.shape?.title}
              </p>
            </div>
            <div className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
              Страна
              </h3>
              <p className="text-[16px] text-nowrap  leading-[19px] text-[#282A2C] mb-1 ">
                {items?.country?.title}
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
