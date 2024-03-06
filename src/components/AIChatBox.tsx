import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Rabbit,
  Send,
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
    <div
      className={cn(
        " h-screen  w-screen justify-center p-5 pt-10 md:p-10 ",
        open ? "fixed" : "hidden",
      )}
    >
      {/* <button onClick={onClose} title="closeBox" className="mb-1 ms-auto block">
        <XCircle size={30} />
      </button> */}
      <div className="flex min-h-full flex-col rounded bg-background px-5 sm:px-20 ">
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
          <div className="col-span-full flex min-h-[450px] flex-col items-center justify-center gap-6 sm:min-h-[500px]">
            {/* <Image
              src={Logo}
              alt="easyAi"
              className="mr-2 h-20 w-20 rounded-full object-cover opacity-40"
            /> */}
            <Rabbit size={200} strokeWidth={0.5} className="my-16" />
            <div className="flex gap-3">
              <p className="text-center opacity-60">
                {"You don't have any chat yet. Try to chat with easyAI "}
              </p>
              <ArrowDownRight color="orange hidden sm:block" />
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className=" m-3 flex flex-col gap-2 sm:flex-row"
        >
          <Button
            className=" hidden shrink-0 items-center justify-center sm:flex"
            title="clear chat"
            type="button"
            variant={"secondary"}
            size="icon"
            onClick={() => setMessages([])}
          >
            <Trash />
          </Button>
          <Input
            placeholder="Prompt here!..."
            onChange={handleInputChange}
            value={input}
            ref={inputRef}
            className=""
          />

          <Button type="submit" className="flex items-center justify-center">
            <Send />
          </Button>
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
