"use client";
import { cn } from "@/lib/utils";
import AIChatBox from "@/components/AIChatBox";
import { useState } from "react";

export default function AIpage() {
  const [showAIChatBox, setShowAIChatBox] = useState(true);
  return (
    <div className={cn("flex h-screen w-screen items-center justify-center")}>
      <AIChatBox open={showAIChatBox} onClose={() => setShowAIChatBox(true)} />
    </div>
  );
}
