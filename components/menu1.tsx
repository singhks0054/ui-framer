import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"

const itemIds = ["Projects", "Agency", "Expertise", "Contact"]

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    transition: {
      duration: 0.1,
    },
  },
}
export const MenuItem = ({ i }: { i: string }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{
        x: 30,
        transition: {
          duration: 0.3,
        },
      }}
      className="m-6 text-4xl font-medium text-gray-900"
    >
      {i}
    </motion.li>
  )
}

const navVariants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2, staggerDirection: -1, when: "afterChildren" },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

export const Navigation = () => (
  <motion.ul variants={navVariants} className="m-2 mt-20">
    <p className="text-2xl font-semibold text-gray-800">FRAMER</p>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
)

export default function Menu1() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        variants={sidebar}
        className=" right-8 top-4 flex cursor-pointer flex-col font-medium text-gray-700"
        onClick={() => toggleOpen()}
      >
        <motion.div variants={btnVariant} className=" right-2 top-2 rounded-[20px] border-0 bg-[#d0ff71] px-5 py-[6px]">
          {isOpen ? "CLOSE" : "MENU"}
        </motion.div>
        <Navigation />
      </motion.nav>
    </>
  )
}
const sidebar = {
  open: {
    height: 450,
    width: 350,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#d0ff71",
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  closed: {
    height: 0,
    padding: 0,
    width: 100,
    transition: {
      type: "spring",
      when: "afterChildren",
      duration: 2,
    },
  },
}

const btnVariant = {
  open: {
    backgroundColor: "black",
    color: "#d0ff71",
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  closed: {
    transition: {
      type: "spring",
      duration: 2,
    },
  },
}
