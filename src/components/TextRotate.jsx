import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const text = [' Créative sans frontières','Design addict', 'Votre futur étudiante ?? ']

const TextRotate = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex w-full items-center justify-center py-4 text-center">
      <AnimatePresence>
        <motion.div
          className="absolute cursor-pointer text-3xl font-semibold tracking-tight "
          key={index}
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.8 }}
          transition={{ ease: 'easeInOut', delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TextRotate
