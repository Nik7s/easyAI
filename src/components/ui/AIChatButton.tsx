import { useState } from "react";
import { Button } from "./button";
import AIChatBox from "../AIChatBox";
import { Bot } from "lucide-react";

export default function AIChatBoxButton() {
  const [showAIChatBox, setShowAIChatBox] = useState(false);

  return (
    <>
      <Button onClick={() => setShowAIChatBox(true)}>
        <Bot size={20} className="m-2" />
        AI-Chat
      </Button>{" "}
      <AIChatBox open={showAIChatBox} onClose={() => setShowAIChatBox(false)} />
    </>
  );
}
