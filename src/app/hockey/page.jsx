"use client";

import Dek HockeyBG from "@/app/hockeyBG.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

export default function page() {
  const reg = [
    {
      region: "Gatineau",
    },
    {
      region: "Cantley",
    },
    {
      region: "Mont-Laurier",
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="w-full gap-12 min-h-[100vh] mt-28 md:mt-0">
      <div className="hidden md:flex justify-between items-center h-32 w-full bg-[#000c3b]">
        <h1 className="text-xl md:text-3xl font-bold text-white pl-6">
          Régions de Hockey
        </h1>
        <div className="flex h-[52px] w-96 border-4 border-[#000c3b] rounded-[50px] mr-2">
          <div className="relative w-full h-full align-middle">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher"
              value={search}
              className="font-bold rounded-[50px] px-3 w-full h-full border-0 focus:outline-none"
            />
            <Link href={"#"}>
              <AiOutlineSearch className="absolute right-0 top-0 bottom-0 h-8 w-8 m-auto pr-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-b from-white  absolute z-10 w-full h-full"></div>

        <Image
          src={hockeyBG}
          alt="https://www.vecteezy.com/photo/27903147-men-in-blue-compete-in-ice-skating-motion-on-ice-rink-generated-by-ai"
        />

        <div className="absolute top-[25%] right-[50%] translate-x-[50%] z-20 w-[80%] md:w-full">
          <div className="block md:hidden h-32 w-full bg-transparent">
            <div className="flex h-[52px] max-w-sm border-4 border-[#000c3b] rounded-[50px] mr-2">
              <div className="relative w-full h-full align-middle">
                <input
                  type="search"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher"
                  value={search}
                  className="font-bold rounded-[50px] px-3 w-full h-full border-0 focus:outline-none"
                />
                <Link href={"#"}>
                  <AiOutlineSearch className="absolute right-0 top-0 bottom-0 h-8 w-8 m-auto pr-1" />
                </Link>
              </div>
            </div>
          </div>
          <h2 className="z-20 text-4xl font-bold text-center">
            Sélectionnez votre région
          </h2>
          <div className="mx-auto flex flex-col gap-4 max-w-[400px] mt-4 ">
            {reg
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.region.toLowerCase().includes(search.toLowerCase());
              })
              .map((item, i) => (
                <Link
                  key={i}
                  href={`/hockey/${item.region.toLowerCase()}`}
                  className="group relative flex gap-4 bg-white/80 hover:bg-[#00061d] border-4 border-[#00061d] text-[#00061d] hover:text-white rounded-[50px] py-4 px-1 text-xl font-bold items-center justify-center transition-all "
                >
                  {item.region}
                  <FiArrowRight className="absolute right-12 translate-x-[50%] text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[100%] transition-all" />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
