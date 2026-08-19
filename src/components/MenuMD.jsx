"use client";

import logo from "@/app/rise_logo_white-v3.png";
import Image from "next/image";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GiHockey, GiRing, GiSoccerBall } from "react-icons/gi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoHome } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function MenuMD() {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden fixed top-0 w-full bg-[#000c3b] h-28 p-4 z-30 items-center justify-between">
      <Link href={'/'}>
      <Image src={logo} alt="Logo R.I.S.E." className="w-40" />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiOutlineMenuAlt1 className="text-white w-8 h-8" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Général</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link
              href={"/"}
              className="font-semibold flex gap-2 items-center text-[#000c3b] "
            >
              <IoHome />
              Accueil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Sports</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link
              href={"/hockey"}
              className="font-semibold flex gap-2 items-center text-[#000c3b] "
            >
              <GiHockey />
              Polyvalente de l'Érablière
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/soccer"}
              className="font-semibold  flex gap-2 items-center text-[#000c3b] "
            >
              <GiSoccerBall />
              Soccer
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/baseball"}
              className="font-semibold  flex gap-2 items-center text-[#000c3b] "
            >
              <FaBaseballBatBall />
              Baseball
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/ringuette"}
              className="font-semibold  flex gap-2 items-center text-[#000c3b] "
            >
              <GiRing />
              Ringuette
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Personnel</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link
              href={"/assurances"}
              className="font-semibold  flex gap-2 items-center text-[#000c3b] "
            >
              <CgNotes />
              Assurances
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/reglages"}
              className="font-semibold  flex gap-2 items-center text-[#000c3b] "
            >
              <FiSettings />
              Réglages
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
