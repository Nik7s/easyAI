import { SignUp } from "@clerk/nextjs";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "easyAI-signup",
  description: "to easyAI",
};

export default function SignUpPage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <SignUp
          appearance={{
            baseTheme: dark,
            variables: { colorPrimary: "rgb(253, 74, 42)" },
          }}
        />
      </div>

      {/* <div className="flex items-center justify-center">
        <Image src={Logo} width={100} height={100} alt="easyOne logo" />
      </div> */}
    </>
  );
}
