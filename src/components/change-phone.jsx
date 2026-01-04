"use client";
import { changeToken } from "../lib/features";
import { formatUzPhone } from "../lib/formatUzPhone";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ChnagePhone({ onSuccess }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState( "");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
 
  const { token } = useAppSelector((store) => store.token);
  // 1️⃣ SEND PHONE
  const sendPhone = async () => {
    if (!phone) return alert("Введите номер");

    try {
      setLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_URL}/user/client/change-phone`, {
        method: "POST",
        headers: {
           "Content-Type": "application/json" ,
           Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ phone }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.tmp?.code || res?.code) {
            setStep(2);
            setCode(res?.tmp?.code|| res?.code);
          }
        });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ VERIFY CODE
  const verifyCode = async () => {
    if (!code) return alert("Введите код");

    try {
      setLoading(true);
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/user/client/confirm-phone`,
        {
          method: "POST",
          headers: {
             "Content-Type": "application/json",
             Authorization: "Bearer " + token,
             },
          body: JSON.stringify({ code }),
        }
      )
        // .then((res) => res.json())
        .then(() => {
          toast("Вы успешно изменили номер");
          if(onSuccess) onSuccess();
        });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#21212199] flex items-center justify-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-[600px] w-full p-[20px] sm:p-[63px]"
      >
        <h3 className="text-[32px] font-bold">Change Phone</h3>

        {step === 1 && (
          <>
            <p className="text-[14px] mt-[20px] mb-2">Введите номер телефона</p>

            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <input
                value={phone}
                onChange={(e) => setPhone(formatUzPhone(e.target.value))}
                placeholder="+998 99 999 99 99"
                className="border px-[12px] py-[11px] w-full sm:max-w-[290px]"
              />
              <button
                onClick={sendPhone}
                disabled={loading}
                className="bg-black text-white px-[16px]"
              >
                {loading ? "Отправка..." : "Отправить SMS"}
              </button>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <p className="text-[14px] mt-[20px] mb-2">
              Код отправлен на {phone}
            </p>

            <div className="flex gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="SMS код"
                className="border px-[12px] py-[11px] w-full sm:max-w-[290px]"
              />

              <button
                onClick={verifyCode}
                disabled={loading}
                className="bg-black text-white px-[40px]"
              >
                {loading ? "Проверка..." : "Подтвердить"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
