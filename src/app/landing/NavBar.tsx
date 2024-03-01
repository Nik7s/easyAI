"use client";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-Mode";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ArrowUpRight, Menu } from "lucide-react";
import NavComponent, { NavComponentSmall } from "@/components/NavComponents";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
export default function NavBarPage() {
  return (
    <>
      <div className=" sticky top-0 p-4 shadow">
        <div className="m-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href={"/notes"}
            className="flex items-center gap-2 font-bold text-orange-500"
          >
            <Image src={Logo} alt="easyAI logo" width={20} height={20} />
            <span>easyAI</span>
          </Link>

          {/* menuItems */}
          <NavigationMenu className="flex gap-5">
            <NavComponent />

            <div className="flex items-center justify-between gap-3">
              <Button asChild variant={"secondary"}>
                <Link href={"https://www.buymeacoffee.com/henrylee"}>
                  Support
                  <ArrowUpRight />
                </Link>
              </Button>
              <div className="hidden sm:block">
                <Button variant={"outline"} asChild>
                  <Link href={"/notes"}>Get started</Link>
                </Button>
              </div>

              <ModeToggle />
            </div>

            {/* Small screen */}

            <Dialog>
              <DialogTrigger asChild>
                <div className="block sm:hidden">
                  <Button className=" rounded-full" variant={"ghost"}>
                    <Menu size={20}></Menu>
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <NavComponentSmall />
              </DialogContent>
            </Dialog>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
