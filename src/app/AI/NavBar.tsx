"use client";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import AddNoteDialog from "@/components/addNoteDialog";
import { ModeToggle } from "@/components/theme-Mode";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function NavBarPage() {
  const [showDialog, setShowDialog] = useState(false);

  const { theme } = useTheme();
  return (
    <>
      <div className=" p-4 shadow">
        <div className="m-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href={"/notes"}
            className="flex items-center gap-2 font-bold text-orange-500"
          >
            <Image src={Logo} alt="easyAI logo" width={20} height={20} />
            <span>easyAI</span>
          </Link>
          <div className="flex items-center justify-between gap-3">
            <Button onClick={() => setShowDialog(true)} variant={"secondary"}>
              <PlusCircledIcon className="mr-2" />
              Teach
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"/notes"}>Vist</Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { with: "", height: "" } },
              }}
            />
            <ModeToggle />
          </div>
        </div>
      </div>
      <AddNoteDialog open={showDialog} setOpen={setShowDialog} />
    </>
  );
}
