import { useRef } from "react"
import { motion, useCycle } from "framer-motion"

const itemIds = ["Projects", "Agency", "Expertise", "Contact"]

export default function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      variants={menuVariant}
      className=" right-8 top-4 flex cursor-pointer flex-col rounded-[20px] bg-[#d0ff71] font-medium text-gray-700"
      onClick={() => toggleOpen()}
    >
      <motion.div variants={btnVariant} className="float-right rounded-[20px] border-0 bg-[#d0ff71] px-5 py-[6px]">
        {isOpen ? "CLOSE" : "MENU"}
      </motion.div>
      <Navigation />
    </motion.nav>
  )
}

const menuVariant = {
  open: {
    height: 450,
    width: 350,
    padding: 10,
    transition: {
      type: "spring",
      duration: 2,
      bounce: 0,
    },
  },
  closed: {
    height: 30,
    padding: 0,
    width: 90,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0,
    },
  },
}

const btnVariant = {
  open: {
    backgroundColor: "black",
    color: "#d0ff71",
    transition: {
      type: "spring",
      duration: 0.1,
      when: "beforeChildren",
    },
  },
  closed: {
    transition: {
      type: "spring",
      duration: 0.1,
    },
  },
}

export const MenuItem = ({ i }: { i: string }) => {
  return (
    <motion.li
      variants={menuIVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-6 rounded-[20px] bg-yellow-400 py-1 pl-5 text-4xl font-medium text-black"
    >
      {i}
    </motion.li>
  )
}

const menuIVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", y: { stiffness: 10 } },
  },
  closed: {
    x: -150,
    opacity: 0,
    transition: { type: "spring", y: { stiffness: 10 } },
  },
}

export const Navigation = () => (
  <motion.ul variants={navVariants} className="m-2 rounded-[20px] bg-pink-400">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
)

const navVariants = {
  open: {
    display: "block",
    transition: { delay: 0.5, type: "spring", staggerChildren: 0.3 },
  },
  closed: {
    display: "none",
    transition: { type: "spring", staggerChildren: 0.2, staggerDirection: 1 },
  },
}
