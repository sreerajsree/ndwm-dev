import { motion } from 'framer-motion'


export default function FadeUp({ children, duration, delay }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: 'easeInOut',
          delay,
        },
      }}
    >
      {children}
    </motion.div>
  )
}
