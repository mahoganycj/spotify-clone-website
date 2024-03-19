"use client";

import Image from "next/image";
import { FooterPlayer } from "./components/FooterPlayer";
import Sidebar from "./SideBar";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
      <Sidebar />
      <div className="bg-neutral-700">Main Content</div>
      <div className="col-span-2 bg-neutral-700">Player</div>
    </div>
  );
}
