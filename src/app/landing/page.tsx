import CardComponent from "@/components/cardAnimate";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center ">
      <Card className="mb-9 p-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl">
              Smart AI for Organizing your note
            </h1>
            <h1 className="text-easycolor text-5xl sm:text-6xl md:text-7xl">
              Smart Organize |
            </h1>
            <p className="max-w-[450px] text-justify">
              Create note, input important information to remmber, with simple
              prompt get information you need at time
            </p>
          </div>

          <div className="m-10">
            <Button className="bg-easycolor text-gray-200 hover:text-gray-900">
              Start Writing For Free
            </Button>
            <p className="text-center">Stay smarter!</p>
          </div>
        </div>
      </Card>

      <div className="block items-center justify-evenly gap-4 sm:flex">
        <h2 className="text-easycolor flex items-center justify-center text-9xl">
          Hello!
          <div className="h-5 w-5 animate-ping rounded-full bg-green-400 "></div>
        </h2>
        <CardComponent />
      </div>
    </main>
  );
}
