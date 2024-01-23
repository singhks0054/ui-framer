"use client"

import { Menu } from "@/components/menu"
import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <Link href="/menu">page 2</Link>
      <Menu />
    </main>
  )
}
