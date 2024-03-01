import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Rabbit,
  Trash,
  User2,
  XCircle,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Message } from "ai";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { useEffect, useRef } from "react";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleSubmit,
    setMessages,
    isLoading,
    error,
    handleInputChange,
  } = useChat(); //by default make request to //api/chat
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsuser = messages[messages.length - 1]?.role === "user";

  return (
    <div className={cn("w-full max-w-[500px] p-1 ", open ? "fixed" : "hidden")}>
      {/* <button onClick={onClose} title="closeBox" className="mb-1 ms-auto block">
        <XCircle size={30} />
      </button> */}
      <div className="flex h-[500px] flex-col rounded border bg-background shadow-xl ">
        <div className="h-full overflow-scroll" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
        </div>
        {isLoading && lastMessageIsuser && (
          <ChatMessage
            message={{
              role: "assistant",
              content: "Thinking....",
            }}
          />
        )}
        {error && (
          <ChatMessage
            message={{
              role: "assistant",
              content: "Something went wrong. Please try again",
            }}
          />
        )}
        {messages.length === 0 && (
          <div className="col-span-full flex h-screen flex-col items-center justify-center gap-6">
            <Image
              src={Logo}
              alt="easyAi"
              className="mr-2 h-20 w-20 rounded-full object-cover opacity-40"
            />
            <Rabbit size={200} strokeWidth={0.5} />
            <div className="flex gap-3">
              {"You don't have any chat yet. Try to chat with easyAI "}
              <ArrowDownRight color="orange" />
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className=" m-3 flex gap-2">
          <Button
            className="shrink-0"
            title="clear chat"
            type="button"
            variant={"secondary"}
            size="icon"
            onClick={() => setMessages([])}
          >
            <Trash />
          </Button>
          <Input
            placeholder="say something..."
            onChange={handleInputChange}
            value={input}
            ref={inputRef}
          />

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
  const { user } = useUser();
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 mt-2 flex items-center pl-5 pr-5 pt-2",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && (
        <Image
          src={Logo}
          alt="robot "
          className="mr-2 h-10 w-10 rounded-full object-cover"
        />
      )}

      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {content}
      </p>
      {!isAiMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="user"
          width={100}
          height={100}
          className="ml-2 h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
}
function ChatMessageEm({
  message: { role },
}: {
  message: Pick<Message, "role">;
}) {
  const notMessage = role === null;
  return (
    <div>
      <div>{notMessage && <Rabbit />}</div>
    </div>
  );
}