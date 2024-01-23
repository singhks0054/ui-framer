import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"

const itemIds = ["Projects", "Agency", "Expertise", "Contact"]
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {},
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      // y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ i }: { i: string }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-6 rounded-[20px] bg-yellow-400 py-1 pl-5 text-4xl font-medium text-black"
    >
      {i}
    </motion.li>
  )
}

const navVariants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul variants={navVariants} className="m-2 rounded-[20px] bg-pink-400">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
)

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  return (
    <>
      <p>{isOpen ? "open" : "closed"}</p>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
        variants={sidebar}
        className="absolute right-8 top-4 flex cursor-pointer flex-col p-2 font-medium text-gray-700"
        onClick={() => toggleOpen()}
      >
        <motion.div variants={btnVariant} className="float-right rounded-[20px] border-0 bg-[#d0ff71] px-5 py-[6px]">
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
    border: 0,
    borderRadius: 20,
    backgroundColor: "#d0ff71",
    transition: {
      type: "spring",
      duration: 2,
      when: "beforeChildren",
    },
  },
  closed: {
    height: 0,
    width: 100,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
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
