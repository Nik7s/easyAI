"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardComponent() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 50;
  const sentence =
    "I'm Henry, and I'm excited to introduce you to a revolutionary note-taking platform that brings your note-taking experience to new heights through cutting-edge AI-powered insights and interactive features. 🚀 With our app, you can seamlessly capture your ideas, thoughts, and important information in a more efficient and effective way. Join me on this exciting journey of elevated note-taking experiences! ✍️";

  useEffect(() => {
    const typing = setInterval(() => {
      if (index < sentence.length) {
        setText(text + sentence[index]);
        setIndex(index + 1);
      } else {
        clearInterval(typing);
      }
    }, typingSpeed);

    return () => clearInterval(typing);
  }, [index, text]);

  return (
    <div className=" w-70">
      <Card className=" sm:max-w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/123258064?v=4"
                alt="easyOne"
              />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <span className="mt-2">Henry Dioniz</span>
          </CardTitle>
          <CardDescription>👋 hello!</CardDescription>
        </CardHeader>

        <CardContent>
          <p>{text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
