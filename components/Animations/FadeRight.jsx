import { motion } from 'framer-motion'


export default function FadeRight({ children, duration, delay }) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
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
