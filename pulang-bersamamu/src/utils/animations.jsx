import { motion } from 'framer-motion'

// Container animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Item animations
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Fade in from top
export const fadeInTopVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Fade in from sides
export const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// Scale animation
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Hover tilt animation
export const tiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.3 }
  },
  hover: {
    rotateX: 5,
    rotateY: -5,
    transition: { duration: 0.3 }
  }
}

// Floating animation
export const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Pulse animation
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Scroll reveal component wrapper
export const ScrollReveal = ({ children, variant = itemVariants, ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={variant}
    {...props}
  >
    {children}
  </motion.div>
)

export default {
  containerVariants,
  itemVariants,
  fadeInTopVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
  scaleVariants,
  tiltVariants,
  floatingVariants,
  pulseVariants,
  ScrollReveal
}
