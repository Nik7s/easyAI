"use client";
import { cn } from "@/lib/utils";
import AIChatBox from "@/components/AIChatBox";
import { useState } from "react";
import NavBarPage from "./NavBar";

export default function AIpage() {
  const [showAIChatBox, setShowAIChatBox] = useState(true);
  return (
    <div className="flex h-screen flex-col gap-6 ">
      <NavBarPage />
      <div
        className={cn(
          "mb-4 flex h-screen w-screen items-center justify-center",
        )}
      >
        <AIChatBox
          open={showAIChatBox}
          onClose={() => setShowAIChatBox(true)}
        />
      </div>
    </div>
  );
}
