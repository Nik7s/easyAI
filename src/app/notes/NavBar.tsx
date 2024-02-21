import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { PlusCircledIcon, PlusIcon } from "@radix-ui/react-icons";

export default function NavBarPage() {
  return (
    <div className=" p-4 shadow">
      <div className="m-auto flex flex-wrap items-center justify-between gap-3">
        <Link
          href={"/notes"}
          className="flex items-center gap-2 font-bold text-orange-500"
        >
          <Image src={Logo} alt="easyAI logo" width={20} height={20} />
          <span>easyAI</span>
        </Link>
        <div className="flex items-center justify-between gap-3">
          <Button>
            <PlusCircledIcon className="mr-2" />
            Add note
          </Button>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { with: "", height: "" } },
            }}
          />
        </div>
      </div>
    </div>
  );
}
