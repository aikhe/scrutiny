import { motion } from "framer-motion"
import aboba from '/aboba.png'

function App() {
  return (
    <div className="flex w-full flex-col h-[100svh] items-center
      justify-center">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="size-24">
        <img src={aboba} alt="Spinning Lumi" />
      </motion.div>

      <h1 className="text-4xl mt-4">lumi ah :3</h1>
    </div>
  )
}

export default App
