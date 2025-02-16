"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Container from "@/components/container";
import Back from "@/components/back";

export default function OrderPage() {
  const dispatch = useAppDispatch();
  return (
    <Container
      className={
        "flex flex-wrap md:flex-nowrap px-[26px]  mt-[26px] gap-[35px] items-center"
      }
    >
      <Back />
      <div className="mt-[14px] w-full">
        <h3 className="mb-[71px] md:inline-block hidden text-[22px] leading-[25px]">
          Корзина | Оформления заказа
        </h3>
        <div className="flex mb-[100px]  flex-wrap md:flex-nowrap gap-[20px] lg:gap-[80px] w-full">
          <div className="w-full flex gap-5 md:inline-block md:max-w-[205px]">
            <h4 className="text-[14px] leading-[16px] font-medium">
              Об оформления
            </h4>
            <p className="mt-[12px] text-[12px] mb-[40px] leading-[14px]">
              После оформления заказа появится окно с подтверждением успешного
              оформления и чеком вашего заказа. Также заказ будет доступен в
              разделе "Мои покупки", где вы сможете найти его номер для
              уточнения статуса у оператора.
            </p>
            <h4 className="text-[14px] leading-[16px] font-medium">
              Предоплата
            </h4>
            <p className="mt-[12px] text-[12px] mb-[10px] leading-[14px]">
              Если для онлайн-заказа выбрана оплата наличными, потребуется
              предоплата для подтверждения заказа.
            </p>
            <p className="mt-[12px] text-[12px] mb-[40px] leading-[14px]">
              После оформления заказа и получения его номера свяжитесь с
              оператором для уточнения деталей оплаты. Для информации
              обращайтесь к оператору!
            </p>
            <p className="mt-[12px] text-[12px] leading-[14px] opacity-45 mb-[20px]">
              Для связи с модератором по вопросам оформления заказов звоните по
              номеру или пишите в telegram:
            </p>

            <a
              className="text-[12px] w-full inline-block mb-[6px] leading-[14px] font-medium"
              href="tel:+998991404422"
            >
              +998 90 000-00-00
            </a>
            <a
              className="text-[12px] w-full inline-block  leading-[14px] font-medium"
              target="_blank"
            >
              @t.me/username
            </a>
          </div>
          <div className="w-full max-w-[1100px] lg:flex-nowrap flex-wrap gap-[20px] items-start flex justify-between">
            <div className="w-full max-w-[610px]">
              <div className="p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-2">
                <p className="text-[12px] leading-[14px] mb-[15px]">
                  Список выбранные вами заказов
                </p>
                <ul>
                  <li className="p-[13px] flex items-center gap-2 rounded-[3px] border-[#EEEEEE] border-[1px]">
                    <p className="text-[12px] leading-[14px] w-full">
                      Aspendos
                    </p>
                    <p className="text-[12px] leading-[14px] w-full">3667</p>
                    <p className="text-[12px] leading-[14px] w-full">200x300</p>
                    <p className="text-[12px] leading-[14px] w-full">Blue</p>
                    <p className="text-[12px] leading-[14px] w-full">Classic</p>
                    <p className="text-[12px] leading-[14px] w-full">
                      1 120 000.00
                    </p>
                  </li>
                  <li className="p-[13px] flex items-center gap-2 rounded-[3px] border-[#EEEEEE] border-[1px]">
                    <p className="text-[12px] leading-[14px] w-full">
                      Aspendos
                    </p>
                    <p className="text-[12px] leading-[14px] w-full">3667</p>
                    <p className="text-[12px] leading-[14px] w-full">200x300</p>
                    <p className="text-[12px] leading-[14px] w-full">Blue</p>
                    <p className="text-[12px] leading-[14px] w-full">Classic</p>
                    <p className="text-[12px] leading-[14px] w-full">
                      1 120 000.00
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-2">
                <p className="text-[12px] leading-[14px] mb-[15px]">
                  Укажите метод оплаты
                </p>
                <div className="flex items-center gap-2 mb-4 ] ">
                  <div className="flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]">
                    <p className="text-[#212121] text-[12px] leading-[14px]">
                      Наличными
                    </p>
                  </div>
                  <div className="flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]">
                    <p className="text-[#212121] text-[12px] leading-[14px]">
                      Payme
                    </p>
                  </div>
                  <div className="flex w-full items-center gap-2 rounded-[2px] border-[#EEEEEE] border-[1px] p-[12px] pr-[25px]">
                    <p className="text-[#212121] text-[12px] leading-[14px]">
                      Click
                    </p>
                  </div>
                </div>
                <p className="text-[12px] leading-[18px] text-[#212121] opacity-50">
                  После выбора способа оплаты: вы обязаны оплатить заказ по
                  указанному методу. Торговаться или изменять условия оплаты,
                  включая наличный способ, нельзя. Вы должны внести полную
                  сумму, указанную в итоговой цене.
                </p>
              </div>
              <div className="p-[30px] rounded-[3px] border-[#EEEEEE] border-[1px] mb-6">
                <p className="text-[12px] leading-[14px] mb-[15px]">
                  Адрес для доставки
                </p>
                <input
                  className="py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid mb-4"
                  placeholder="Город, улица, дом, ориентир, номер квартиры"
                />
                <p className="text-[12px] leading-[18px] text-[#212121] opacity-50">
                  Убедитесь, что указали правильный адрес доставки. После
                  оформления заказа изменить адрес будет невозможно. В случае
                  ошибки в адресе, вам придется оплатить дополнительные
                  курьерские услуги. Пожалуйста, не забудьте встретить курьера
                  во дворе!
                </p>
              </div>
              <p className="text-[12px] leading-[14px] mb-[12px]">
                Комментарий для курьера
              </p>
              <textarea
                className="px-[16px] py-[13px] bg-[#F9F9F9] border-[#EEEEEE] border-[1px] outline-none w-full mb-[60px]"
                rows={3}
                placeholder="Оставьте комментарий для курьера"
              />
              <buttun className="py-[11px] w-full mb-[59px] bg-[#212121] text-white text-center inline-block w-full ]  px-[12px] border-[#EEEEEE] border-[1px] border-solid">
                Оформиь заказ
              </buttun>
            </div>
            <div className="w-full max-w-[270px]">
              <p className="text-[12px] leading-[14.4px] text-[#212121]">
                Заказчик
              </p>
              <p className="text-[20px] leading-[23.4px] text-[#212121] mt-[6px] mb-[24px]">
                id:9823hd23i
              </p>

              <div className="items-center w-full mb-2 flex justify-between">
                <p className="text-[12px] leading-[14.4px] text-[#212121]">
                  Номер для связи
                </p>
                <p className="text-[12px] leading-[14.4px] text-[#006BD6]">
                  Изменить
                </p>
              </div>

              <p className="py-[11px] w-full px-[12px] outline-none border-[#EEEEEE] border-[1px] border-solid">
                +998 94 609 34 44
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
