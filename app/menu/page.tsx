"use client"

import React from "react"
import Link from "next/link"

import Menu1 from "@/components/menu1"
import Menu2 from "@/components/menu2"

export default function Page() {
  return (
    <section className="p-8">
      <Link href="/" className="hover:text-orange-400">
        Go to Home
      </Link>
      <main className="mt-4 flex justify-end gap-6">
        <Menu1 />
        <Menu2 />
      </main>
    </section>
  )
}
