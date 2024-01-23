"use client"

import React from "react"
import Link from "next/link"

import { Menu } from "@/components/menu2"

export default function Page() {
  return (
    <>
      <Link href="/">page 1</Link>
      <Menu />
    </>
  )
}
