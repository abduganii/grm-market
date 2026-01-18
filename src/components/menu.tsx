"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname, Link } from "../i18n/routing";

const filters = {
    category: [
        { label: "для дома", value: "home" },
        { label: "детские", value: "kids" },
        { label: "гостинные", value: "living_room" },
        { label: "классические", value: "classic" },
        { label: "для Офисов", value: "office" },
    ],

};

export default function Menu() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [styles, setStyles] = useState<{ id: string; title: string }[]>([]);
    const [colors, setColors] = useState<{ id: string; title: string }[]>([]);

    useEffect(() => {
        const fetchStyles = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/style`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data)) {
                        setStyles(data);
                    } else if (data && data.items && Array.isArray(data.items)) {
                        setStyles(data.items);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch styles:", error);
            }
        };

        const fetchColors = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/color`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data)) {
                        setColors(data);
                    } else if (data && data.items && Array.isArray(data.items)) {
                        setColors(data.items);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch colors:", error);
            }
        };

        fetchStyles();
        fetchColors();
    }, []);

    const handleFilterChange = (type, value) => {
        const params = new URLSearchParams(searchParams);
        const existing = params.get(type)?.split(",") || [];

        if (existing.includes(value)) {
            const updated = existing.filter((item) => item !== value);
            if (updated.length > 0) {
                params.set(type, updated.join(","));
            } else {
                params.delete(type);
            }
        } else {
            existing.push(value);
            params.set(type, existing.join(","));
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    const isChecked = (type, value) => {
        const existing = searchParams.get(type)?.split(",") || [];
        return existing.includes(value);
    };

    return (
        <div className="w-full bg-white pb-5">
            <div className="flex flex-col md:flex-row gap-8 pl-5 md:pl-14 pr-5 justify-between">
                {/* Left Column */}
                <div className="flex flex-col justify-between w-full md:w-auto">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.svg"
                                alt="Gilam Market Details"
                                width={80}
                                height={40}
                                className="object-contain"
                            />
                            <div>
                                <h3 className="font-bold text-lg text-[#333]">OOO Gilam Market</h3>
                                <p className="text-sm text-gray-500">Онлайн интернет магазин</p>
                            </div>
                        </div>

                        <nav className="flex flex-col gap-2 text-[16px] font-medium text-[#333]">
                            <Link href="/about">О нас</Link>
                            <Link href="/delivery">О доставке</Link>
                            <Link href="/payment">Об оплате</Link>
                        </nav>
                    </div>

                    <div className="mt-8 md:mt-0 space-y-4">
                        <h4 className="font-bold text-lg text-[#333]">Контакты</h4>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Адрес</p>
                                <p className="text-sm font-medium text-[#333]">
                                    ул.Паркентский,131 А
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Номер</p>
                                <a
                                    href="tel:+998991404422"
                                    className="text-sm font-medium text-[#333]"
                                >
                                    +998 94 609-34-44
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Filters */}
                <div className="flex flex-wrap gap-8 md:gap-16 w-full md:w-auto">
                    <div className="flex flex-col gap-2 min-w-[120px]">
                        {filters.category.map((item) => (
                            <label
                                key={item.value}
                                className="flex items-center gap-2 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked("category", item.value)}
                                    onChange={() => handleFilterChange("category", item.value)}
                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                />
                                <span className="text-[15px] text-[#333] group-hover:text-black transition-colors">
                                    {item.label}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2  pr-2">
                        {styles.map((item) => (
                            <label
                                key={item.id}
                                className="flex items-center gap-2 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked("style", item.id)}
                                    onChange={() => handleFilterChange("style", item.id)}
                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                />
                                <span className="text-[15px] text-[#333] group-hover:text-black transition-colors">
                                    {item.title}
                                </span>
                            </label>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-2">
                        {colors.map((item) => (
                            <label
                                key={item.id}
                                className="flex items-center gap-2 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked("color", item.id)}
                                    onChange={() => handleFilterChange("color", item.id)}
                                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                />
                                <span className="text-[15px] text-[#333] group-hover:text-black transition-colors">
                                    {item.title}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}