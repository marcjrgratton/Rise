"use client";

import logo from "@/app/rise_logo_white-v3.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgNotes } from "react-icons/cg";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GiHockey, GiRing, GiSoccerBall } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="hidden md:flex relative p-4 min-h-[100vh] w-64 bg-gradient-to-t from-[#00061d] to-[#000c3b] flex-col gap-4">
        <Link href={"/"}>
          <Image src={logo} alt="Logo Rise" />
        </Link>
        <div className="flex flex-col text-white text-sm gap-1">
          Général
          <Link
            href={"/"}
            className={`font-semibold rounded-sm px-2  text-lg flex gap-2 items-center mt-1  ${
              pathname === "/"
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <IoHome />
            Accueil
          </Link>
        </div>
        <div className="flex flex-col text-white text-sm gap-1">
          Sports
          <Link
            href={"/hockey"}
            className={`font-semibold rounded-sm px-2  text-lg flex gap-2 items-center mt-1  ${
              pathname.includes("hockey")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <GiHockey />
            Polyvalente de l'Érablière
          </Link>
          <Link
            href={"/soccer"}
            className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
              pathname.includes("soccer")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <GiSoccerBall />
            Soccer
          </Link>
          <Link
            href={"/baseball"}
            className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
              pathname.includes("baseball")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <FaBaseballBatBall />
            Baseball
          </Link>
          <Link
            href={"/ringuette"}
            className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
              pathname.includes("ringuette")
                ? "bg-slate-200/[.30]"
                : "text-white hover:bg-slate-200/[.30] transition-all"
            }`}
          >
            <GiRing />
            Ringuette
          </Link>
        </div>

        <div className="absolute bottom-4 flex flex-col text-white text-sm gap-6">
          <div className="flex flex-col text-white text-sm gap-1">
            <Link
              href={"/assurances"}
              className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
                pathname.includes("reglages")
                  ? "bg-slate-200/[.30]"
                  : "text-white hover:bg-slate-200/[.30] transition-all"
              }`}
            >
              <CgNotes />
              Assurances
            </Link>
            <Link
              href={"/reglages"}
              className={`font-semibold rounded-sm px-2 text-lg flex gap-2 items-center mt-1 ${
                pathname.includes("reglages")
                  ? "bg-slate-200/[.30]"
                  : "text-white hover:bg-slate-200/[.30] transition-all"
              }`}
            >
              <FiSettings />
              Réglages
            </Link>
          </div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">Utilisateur</p>
              <p>utilisateur@email.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
