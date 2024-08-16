import type { Metadata } from "next";
import { Providers } from './../providers';
import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next Pizza", 
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (    
      <div> {/* Providers */}
        <main className="min-h-screen">
          {/* <Header></Header> */}
          <div>{children}</div>
          <div>{modal}</div>
        </main> 
      </div>
  );
}
