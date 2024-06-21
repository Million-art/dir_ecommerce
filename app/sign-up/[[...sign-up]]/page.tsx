import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex items-center justify-center my-4 w-full h-full">
      <SignUp fallbackRedirectUrl="/" />;
  </div>
  )
}