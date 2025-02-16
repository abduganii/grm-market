import Image from "next/image";
import React, { useState } from "react";
import { MinutIcons, PlusIcons, RoundedIcons, SomeThingIcons } from "./icons";

const data = [
  {
    label: "Коллекция",
    key: "Hera Classic",
  },
  {
    label: "Модель",
    key: "M3559",
  },
  {
    label: "Размер",
    key: "200x300",
  },
  {
    label: "Цена за м²",
    key: "320 000 сум",
  },
  {
    label: "Цвет",
    key: "Беживый",
  },
  {
    label: "Стиль",
    key: "Классик",
  },
  {
    label: "Форма",
    key: "Овал",
  },
  {
    label: "Страна",
    key: "Турция",
  },
];
export default function GlamCardBusket({ title, image }) {
  const [count, setCount] = useState(1);

  return (
    <div className="flex w-full max-w-[610px] sm:flex-nowrap border-[1px] flex-wrap  mb-[30px] p-[2px]  border-[#EEEEEE] items-start gap-[24px]">
      {image && (
        <Image src={image} alt={"img"} title={title} width={174} height={256} />
      )}
      <div className="w-full max-w-[360px] ">
        <div className="flex  flex-wrap py-[30px] border-b-[1px]">
          {data?.map((e, i) => (
            <div key={i} className="w-1/4">
              <h3 className="text-[12px] leading-[14px] text-[#282A2C] mb-1 opacity-45">
                {e?.label}
              </h3>
              <p className="text-[16px]  leading-[19px] text-[#282A2C] mb-1 ">
                {e?.key}
              </p>
            </div>
          ))}
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
                count == 6
                  ? "opacity-40 cursor-not-allowed"
                  : " hover:bg-[#EEEEEE] active:bg-white cursor-pointer"
              } cursor-pointer p-2  border-[1px] border-[#EEEEEE] hover:bg-[#EEEEEE] active:bg-white`}
              onClick={() => setCount(count + 1)}
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
              1 632 000 сум
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
