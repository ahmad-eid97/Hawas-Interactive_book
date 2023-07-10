"use client";
import Link from "next/link";

import { ContinueTyping } from "@/components";

export default function Home() {
  return (
    <main>
      <h1><i className="fa-regular fa-house"></i> Home Page</h1>
      <div>
        <Link href="/book">Book</Link>
      </div>
      <Link href="/login">Login</Link>

      <ContinueTyping />
    </main>
  )
}
