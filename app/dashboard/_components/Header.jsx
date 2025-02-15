"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });

  const router = useRouter();

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
             ${path == "/dashboard" && "text-primary font-bold"}`}
          onClick={() => router.replace("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/questions" && "text-primary font-bold"
          }`}
          onClick={() => router.replace("/")}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/upgrade" && "text-primary font-bold"
          }`}
          onClick={() => router.replace("/upgrade")}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/how_it_works" && "text-primary font-bold"
          }`}
          onClick={() => router.replace("/")}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
