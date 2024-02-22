import Logo from "@/app/assets/logo.png";
import Curvedarrow from "@/app/assets/curveArrow.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/cardAnimate";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-Mode";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/notes");

  return (
    <>
      <nav className="flex items-center justify-between p-3 shadow dark:bg-slate-900">
        <h1 className="font-bold text-orange-500">eayOne!</h1>

        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-3">
            <Link href={"/"}>Feature</Link>
            <Link href={"/"}>Help?</Link>
          </div>

          <ModeToggle />
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
