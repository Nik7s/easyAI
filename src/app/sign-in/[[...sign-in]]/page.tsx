import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "easyAI-Login",
};

export default function SignInPage() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: "rgb(253, 74, 42)" },
        }}
      />
    </div>
  );
}
