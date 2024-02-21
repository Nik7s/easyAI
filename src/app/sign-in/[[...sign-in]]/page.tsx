import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "easyAI-Login",
};
export default function SignInPage() {
  return (
    <div className="flex items-center justify-center">
      <SignIn
        appearance={{ variables: { colorPrimary: "rgb(253, 74, 42)" } }}
      />
    </div>
  );
}
