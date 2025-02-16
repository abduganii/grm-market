"use client";
import Back from "../components/back";
import Container from "../components/container";
import React from "react";
import { Link, usePathname } from "../i18n/routing";

const arr = [
  { name: "Избранные", link: "likes" },
  { name: "Мои покупки", link: "likes" },
  { name: "Корзина", link: "busket" },
  { name: "Аккаунт", link: "account" },
];

export default function ProfileLayout({ children }) {
  const pathName = usePathname();
  return (
    <Container
      className={
        "flex flex-wrap md:flex-nowrap px-[26px]  mt-[26px] gap-[35px] items-center"
      }
    >
      <Back />
      <div className="mt-[14px] w-full">
        <h3 className="mb-[71px] md:inline-block hidden text-[22px] leading-[25px]">
          Избранные
        </h3>
        <div className="flex mb-[100px]  flex-wrap md:flex-nowrap gap-[20px] lg:gap-[80px] w-full">
          <div className="w-full flex gap-5 md:inline-block md:max-w-[115px]">
            {arr?.map((e) => (
              <Link
                key={e?.link}
                href={`/profile/${e?.link}`}
                className={`${
                  pathName.includes(e?.link) ? "opacity-100" : "opacity-45"
                } inline-block md:w-full mb-[12px] text-[13px] sm:text-[15px] leading-[21px]`}
              >
                {e?.name}
              </Link>
            ))}

            <p className="inline-block md:w-full mb-[12px] text-[13px] sm:text-[15px] leading-[17px] cursor-pointer mt-[25px]">
              Выйти
            </p>
          </div>
          {children}
        </div>
      </div>
    </Container>
  );
}
