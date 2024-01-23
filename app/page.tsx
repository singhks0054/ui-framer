"use client"

import { Menu } from "@/components/menu"

export default function Home() {
  return (
    <main className="">
      {/* <button onClick={() => window.location.reload()} className="mb-8 bg-slate-500 rounded-r-lg px-4 py-2 w-fit ">
        Refresh
      </button> */}
      <Menu />
    </main>
  )
}
