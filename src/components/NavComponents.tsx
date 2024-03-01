import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Bird, Component, LucideWorkflow, PersonStanding } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function NavComponent() {
  return (
    <NavigationMenuList className="hidden md:flex ">
      {/* items NumberOne! */}
      <NavigationMenuItem>
        <NavigationMenuTrigger>Features✨</NavigationMenuTrigger>
        <NavigationMenuContent className="sm:min-w-[500px]">
          <ul>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <PersonStanding className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">easyAI</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* item numberTwo */}
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources🪝</NavigationMenuTrigger>
        <NavigationMenuContent className="sm:min-w-[500px]">
          <ul>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <PersonStanding className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">easyAI</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* item numberThree */}
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Company <Component />
        </NavigationMenuTrigger>
        <NavigationMenuContent className="sm:min-w-[500px]">
          <ul className="flex flex-col gap-1 p-5">
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <PersonStanding className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    💡Let you be connecte with us
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Know-us, contact-us, work with us
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a className="pl-2" href="/">
                  <div className="mb-2 mt-4 flex gap-2 text-lg font-medium">
                    <Bird /> About us
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a className="pl-2" href="/">
                  <div className="mb-2 mt-4 text-lg font-medium">
                    📞Contant-us
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a className="pl-2" href="/">
                  <div className="mb-2 mt-4 flex gap-2 text-lg font-medium">
                    <LucideWorkflow /> work with us
                  </div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}

export function NavComponentSmall() {
  return (
    <Card className="absolute right-0 top-10 ">
      <CardContent className="flex flex-col items-center justify-center gap-3 p-5">
        {/* items NumberOne! */}
        <CardHeader>
          <CardTitle>Resources🪝</CardTitle>
        </CardHeader>
        <CardDescription>
          <ul>
            <li>
              <a className="" href="/">
                new!
              </a>
            </li>
          </ul>
        </CardDescription>

        {/* item numberTwo */}
        <CardHeader>
          <CardTitle>Resources🪝</CardTitle>
        </CardHeader>
        <CardDescription>
          <ul>
            <li>
              <a className="" href="/">
                blog
              </a>
            </li>
          </ul>
        </CardDescription>

        {/* item numberThree */}
        <CardHeader>
          <CardTitle>Resources🪝</CardTitle>
        </CardHeader>
        <CardDescription>
          <ul>
            <li>
              <a className="" href="/">
                contact
              </a>
            </li>
          </ul>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
