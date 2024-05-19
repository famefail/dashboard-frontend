"use client"

import Login from "@/components/login/Container";
import Homepage from "@/components/homepage/Container";
import Header from "@/components/header";


export default function Home() {
  return (
    <main className="h-full bg-grey-300">
      {/* <Login /> */}
      <Header />
      <Homepage />
    </main>
  );
}
