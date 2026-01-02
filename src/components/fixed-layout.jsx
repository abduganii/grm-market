"use client";
import { useRouter } from "../i18n/routing";
import React, { useEffect, useState } from "react";
import Container from "./container";
import {
  BurgerIcons,
  BusketIcons,
  HomeIcons,
  LikeIcons,
  PersonIcons,
  SearchIcons,
  TelIcons,
} from "./icons";
import SignInMadal from "./sign-in";
import { useAppSelector } from "../lib/hooks";

import Menu from "./menu";
import { Drawer } from "antd";

export default function FixedLayout() {
  const [isFocus, setIsfocus] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const { likes } = useAppSelector((store) => store.likes);
  const { buskets } = useAppSelector((store) => store.buskets);
  const { token } = useAppSelector((store) => store.token);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("click", () => setOpenAuth(false));
  }, []);


  return (
    <Container
      className={
        "flex justify-center sm:justify-between left-0  fixed  bottom-[20px] sm:bottom-[40px]"
      }
    >
      <div className="lg:w-[162px]"></div>
      <div className=" flex gap-1 ">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer bg-white p-[10px] rounded-[3px] shadow"
        >
          <HomeIcons />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            if(token){
              router.push("/profile/likes")
            }else{
              setOpenAuth(true);
            }
          }}
          className="cursor-pointer bg-white p-[10px] rounded-[3px] shadow"
        >
          <PersonIcons />
        </div>
        <div onClick={showDrawer} className="cursor-pointer flex gap-1  items-center bg-white p-[10px] rounded-[3px] shadow">
          <BurgerIcons />
          <p className="text-[14px] leading-[18px]">Menu</p>
        </div>
        <div
          onClick={() => router.push("/profile/likes")}
          className="cursor-pointer relative  bg-white p-[10px] rounded-[3px] shadow"
        >
          {likes?.length ? (
            <p className="h-[12px] w-[12px] text-[10px] leading-[12px] flex items-center absolute  justify-center text-white bg-[#FFA500] rounded-[1px] top-[2px] right-[2px]">
              {likes?.length}
            </p>
          ) : (
            ""
          )}
          <LikeIcons stroke={"black"} />
        </div>
        <div
          onClick={() => router.push("/profile/busket")}
          className="cursor-pointer relative bg-white p-[10px] rounded-[3px] shadow"
        >
          {buskets?.length ? (
            <p className="h-[12px] w-[12px] text-[10px] leading-[12px] flex items-center absolute  justify-center text-white bg-[#FFA500] rounded-[1px] top-[2px] right-[2px]">
              {buskets?.length}
            </p>
          ) : (
            ""
          )}
          <BusketIcons />
        </div>
        <div className="cursor-pointer bg-white p-[10px] rounded-[3px] shadow flex gap-1  items-center ">
          <SearchIcons />
          <input
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            className={`${
              isFocus ? "max-w-[180px] " : "max-w-[120px] "
            } transition-all hidden sm:inline-block  duration-150 ease-in-out  w-full outline-none`}
            placeholder="Поиск"
          />
        </div>
      </div>
      <a
        href="tel:+998991404422"
        className="cursor-pointer hidden  bg-white p-[10px] rounded-[3px] shadow lg:flex gap-1  items-center "
      >
        <TelIcons />
        <p className="text-[14px] leading-[18px]">+998 99 140-44-22</p>
      </a>

      {openAuth ? <SignInMadal setOpenAuth={setOpenAuth}  /> : ""}

      <Drawer
        title="Menu"
        placement={"bottom"}
        closable={true}
        onClose={onClose}
        open={open}
      >

      <Menu/>
      </Drawer>
    </Container>
  );
}
