"use client";
import Logo from "@/app/assets/logo.png";
import Curvedarrow from "@/app/assets/curveArrow.png";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CardComponent from "@/components/cardAnimate";
import Link from "next/link";
// import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

export default function Home() {
  // const { userId } = auth();
  // if (userId) redirect("/notes");

  const { setTheme } = useTheme();
  return (
    <>
      <nav className="flex items-center justify-between p-3 shadow dark:bg-slate-900">
        <h1 className="font-bold text-orange-500">eayOne!</h1>

        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-3">
            <Link href={"/"}>Feature</Link>
            <Link href={"/"}>Help?</Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <main className="flex h-screen flex-col  items-center justify-center gap-4 dark:bg-slate-950">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="EasyAI logo here!" width={100} height={100} />
          <span className="font-bold text-orange-500">easy note AI</span>
        </div>
        <CardComponent />

        <Image src={Curvedarrow} alt="curved arrow" width={50} height={100} />
        <Button asChild>
          <Link href={"/notes"}>Start now</Link>
        </Button>
      </main>
    </>
  );
}
