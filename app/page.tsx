"use client"

import Login from "@/app/login/page";
import Homepage from "@/app/homepage/page";
import Header from "./header";



export default function Home() {
  return (
    <main className="h-full bg-grey-300">
      {/* <Login /> */}
      <Header />
      <Homepage />
    </main>
  );
}
