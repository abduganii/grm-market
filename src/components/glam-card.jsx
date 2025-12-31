"use client";
import { Skeleton } from "antd";
import { Link, useRouter } from "../i18n/routing";
import Image from "next/image";
import React from "react";
import { BusketIcons, LikeIcons } from "./icons";

const typeObj = {
  extraSmall: 52,
  small: 63,
  medium: 75,
  large: 87,
  extraLarge: 100,
};
export default function GlamCard({
  className,
  onBuslet,
  type,
  onLike,
  isLike,
  url,
  title,
  text,
  image,
  isloading = true,
}) {
  const router = useRouter();

  return (
    <div className={`${className && className} mb-[60px]   text-center`}>
      <div
        onClick={() => router.push(url)}
        className="w-full h-auto min-h-[100px] relative group flex text-center items-center justify-center"
      >
        {isloading ? (
          <div className="p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-[500px] bg-gray-300 rounded"></div>
            </div>
          </div>
        ) : image ? (
          <Image
            height={1000}
            width={1000}
            style={{ width: `${typeObj?.[type]}%` }}
            className={`${
              isloading ? "hidden" : ""
            } object-contain m-auto  hover:shadow-xl bg-transparent cursor-pointer ease-in duration-200 hover:-translate-y-2`}
            src={image || null}
            alt="image"
            title={title}
          />
        ) : (
          <div
            className={` object-contain m-auto h-[500px] w-full bg-slate-100  hover:shadow-xl cursor-pointer ease-in duration-200 hover:-translate-y-2`}
          ></div>
        )}
        <div
          className={`absolute ${
            isLike ? "flex" : "hidden"
          } group-hover:flex bottom-[69px] left-0 gap-1 w-full  items-center justify-center`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onLike && onLike(e);
            }}
            className="p-[10px] bg-white cursor-pointer"
          >
            <LikeIcons
              stroke={isLike ? "red" : "black"}
              fill={isLike ? "red" : "none"}
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onBuslet && onBuslet(e);
            }}
            className="p-[10px] bg-white cursor-pointer"
          >
            <BusketIcons />
          </div>
        </div>
      </div>
      <h3 className="text-[20px] leading-[25px] font-normal mt-3 mb-2">
        {title}
      </h3>
      <p className="text-[15px] tetx-[#00000005] leading-[18px] font-normal ">
        {text}
      </p>
    </div>
  );
}
