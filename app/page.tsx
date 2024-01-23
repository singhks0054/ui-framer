"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="p-8">
      <Link href="/menu" className="hover:text-orange-400">
        Go to Menu&apos;s
      </Link>
    </main>
  )
}
