"use client";
import { EditIcons } from "@/components/icons";
import { useAppSelector } from "@/lib/hooks";
import { getDetailedDeviceName } from "@/utils/divice";
import React, { useEffect, useState } from "react";

export default function AcountPage() {
  const { userMe } = useAppSelector((store) => store.userMe);
  const [device, setDevice] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    setName(userMe?.firstName);
  }, [userMe]);
  useEffect(() => {
    const getDeviceInfo = async () => {
      // IP
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();

      // Device
      const device = getDetailedDeviceName();

      setDevice({
        ip: data.ip,
        device,
      });
    };

    getDeviceInfo();
  }, []);

  const ChageData = async () => {
    try {
      setLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_URL}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          title: surname,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          toast(" успешно ");
        });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full">
      <h4 className="text-[44px] leading-[51px] mt-3 mb-[13px]">
        id:{userMe?.login}
      </h4>
      <div className="flex items-center gap-[21px]">
        <p className="text-[22px] leading-[25px]">{userMe?.phone}</p>
        <EditIcons />
        <p className="text-[#212121] opacity-30 text-[12px] leading-[18px]">
          подтержден
        </p>
      </div>
      <div className="flex items-end gap-4 max-w-[596px] mt-[41px] mb-[48px]">
        <div className=" w-full">
          <p className="mb-2 text-[14px] leading-[16px]">Имя</p>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            className="py-[11px] w-full px-[12px] outline-none border"
          />
        </div>
        <div className=" w-full">
          <p className="mb-2 text-[14px] leading-[16px]">Фамилия</p>

          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Фамилия"
            className="py-[11px] w-full px-[12px] outline-none border"
          />
        </div>
        <button
          onClick={ChageData}
          disabled={loading}
          className="bg-black h-12 text-white px-[40px]"
        >
          {loading ? "Проверка..." : "Подтвердить"}
        </button>
      </div>
      <p className="text-[14px] leading-[20px] text-[#212121]">ip device: </p>
      <p className="text-[14px] leading-[20px] text-[#212121] opacity-40">
        {device?.ip} {device?.device}
      </p>
      {/* <p className='text-[14px] leading-[20px] text-[#212121] mt-5'>location registry:  </p>
          <p className='text-[14px] leading-[20px] text-[#212121] opacity-40'>c.Tashkent. str.Yuganik l:892423 sh:29832</p> */}

      <p className="mt-[50px] w-full text-[#21212173]  max-w-[474px] text-[12px] leading-[15px]">
        <p className="mb-[10px]">
          {" "}
          Регистрируясь на нашем сайте, вы подтверждаете свое согласие с нашей{" "}
          <span className="font-medium text-[#349AFF]">
            Политикой конфиденциальности
          </span>{" "}
          и{" "}
          <span className="font-medium text-[#349AFF]">
            Условиями использования.
          </span>
        </p>
        Эти документы содержат важную информацию о том, как мы защищаем ваши
        персональные данные, обрабатываем информацию и регулируем использование
        нашего сервиса. Мы рекомендуем вам внимательно ознакомиться с ними перед
        завершением регистрации, чтобы быть уверенными в прозрачности и
        безопасности нашего взаимодействия. Ваше доверие и защита ваших данных
        для нас приоритетны!
      </p>
    </div>
  );
}
