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
    "Take note-taking to the next level with AI-powered insights and interactions. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In veritatis quo accusantium voluptatibus inventore facilis tenetur, eaque placeat sunt aliquid suscipit obcaecati debitis, tempora minus. Labore nemo aliquid quae saepe! ";

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
