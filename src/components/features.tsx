import { RocketIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function Features() {
  return (
    <div className=" grid grid-cols-3 gap-6">
      <Card className="bg-[#252525] sm:w-[350px]">
        <CardHeader className="flex items-center space-x-2">
          <CardTitle>
            <Avatar>
              <AvatarImage
                // src="https://avatars.githubusercontent.com/u/123258064?v=4"
                alt="easyOne"
              />
              <AvatarFallback>🚀</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription> Innovation</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-lg">
            Explore the latest innovations in note-taking technology.
          </p>
        </CardContent>

        <CardFooter className="flex flex-col items-center">
          <RocketIcon className="mb-2 text-blue-400" />
          <Button>Discover more</Button>
        </CardFooter>
      </Card>

      <Card className="bg-[#252525] sm:w-[350px]">
        <CardHeader className="flex items-center space-x-2">
          <CardTitle>
            <Avatar>
              <AvatarImage
                // src="https://avatars.githubusercontent.com/u/123258064?v=4"
                alt="easyOne"
              />
              <AvatarFallback>🎉</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription> Celebrate</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-lg">
            Join us in celebrating our community milestones and achievements.
          </p>
        </CardContent>

        <CardFooter className="flex flex-col items-center">
          <SparklesIcon className="mb-2 text-yellow-500" />
          <Button>Join the party</Button>
        </CardFooter>
      </Card>

      <Card className="bg-[#252525] sm:w-[350px]">
        <CardHeader className="flex items-center space-x-2">
          <CardTitle>
            <Avatar>
              <AvatarImage
                //src="https://avatars.githubusercontent.com/u/123258064?v=4"
                alt="easyOne"
              />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription>🔒 Security</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-lg">
            Your notes are safe with our industry-leading security measures.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <ShieldCheckIcon className="mb-2 text-green-400" />
          <Button>Stay protected</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
