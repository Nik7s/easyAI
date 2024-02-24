import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "easyAI-Login",
};

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "rgb(253, 74, 42)" },
        }}
      />
    </div>
  );
}
