"use client"

import Link from "next/link"

import { Menu } from "@/components/menu"

export default function Home() {
  return (
    <main className="">
      <Link href="/menu">page 2</Link>
      <Menu />
    </main>
  )
}
