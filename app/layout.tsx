import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "./StoreProvider";
import Header from "./Header";
import Footer from "@/components/Footer/page";

export const metadata: Metadata = {
  title: "Dir Commerce",
  description: "buy simply",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClerkProvider>
          <StoreProvider>
               <Header   />
              <main className=" h-full w-full">
                {children}
              </main>
           </StoreProvider>
        </ClerkProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
      
    </html>
  );
}