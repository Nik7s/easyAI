import CardComponent from "@/components/cardAnimate";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Curvedarrow from "@/app/assets/curveArrow.png";
import Link from "next/link";
import Image from "next/image";
import { Bot } from "lucide-react";
import MyComponent from "@/components/typeWrite";

export const metadata = {
  title: "easyAI",
};

export default function LandingPage() {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center ">
      <Card className="mb-9 border-none p-10 shadow-none">
        <CardHeader>
          <div className="mt-5 flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <Bot />
              <h1 className="text-5xl sm:text-6xl md:text-6xl">
                AI for Organizing your note
              </h1>
              {/* <h2 className="text-5xl text-easycolor sm:text-6xl md:text-7xl ">
                Easy Organize <span className="cursor-blink">|</span>
              </h2> */}

              <MyComponent />

              <CardDescription className="max-w-[450px] text-justify">
                Create note, input important information to remmber, with simple
                prompt get information you need at time
              </CardDescription>
            </div>

            <div className="m-10 flex flex-col items-center justify-center gap-2">
              <Image
                src={Curvedarrow}
                alt="curved arrow"
                width={50}
                height={100}
                className=" animate-bounce"
              />
              <Button className=" asChild">
                <Link href={"/notes"}>Start now</Link>
              </Button>
              <p className="text-center font-mono text-easycolor opacity-60 ">
                Stay smarter!
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="block items-center justify-evenly gap-4 sm:flex">
        <div className="flex items-center justify-center">
          <h2 className=" text-9xl text-easycolor">Hello!</h2>
          <div className="h-5 w-5 animate-ping rounded-full bg-green-400 "></div>
        </div>

        <CardComponent />
      </div>
    </main>
  );
}
