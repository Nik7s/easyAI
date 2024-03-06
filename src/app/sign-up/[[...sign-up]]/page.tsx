import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "easyAI-signup",
  description: "to easyAI",
};

export default function SignUpPage() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignUp
          appearance={{
            baseTheme: dark,
            variables: { colorPrimary: "rgb(253, 74, 42)" },
          }}
        />
      </div>
    </>
  );
}
