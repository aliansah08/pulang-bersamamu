import { motion } from 'framer-motion'
import { memoryLaneData } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants } from '../utils/animations'
import { FaHeart } from 'react-icons/fa'

const MemoryLane = () => {
  return (
    <section id="memories" className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-cream to-lavender/10 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-10 text-lavender/20 text-7xl">✨</div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brown mb-4">
                Lorong <span className="text-rose">Kenangan</span>
              </h2>
              <p className="text-brown/60 font-body text-base md:text-lg">
                Momen yang mengubah hidup kita, terabadikan dalam waktu
              </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - left for mobile, center for desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-rose via-mauve to-lavender" />

          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8 md:space-y-12"
          >
            {memoryLaneData.map((memory, idx) => (
              <motion.div
                key={memory.id}
                variants={itemVariants}
                className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center"
              >
                {/* Timeline dot - left for mobile, center for desktop */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-20 md:top-1/2 z-10"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-rose rounded-full shadow-lg border-2 md:border-4 border-cream flex items-center justify-center">
                    <FaHeart size={8} className="text-white" />
                  </div>
                </motion.div>

                {/* Content - mobile: full width, desktop: alternating */}
                <div className={`pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card bg-white/80 backdrop-blur-sm border-l-4 border-rose"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <span className="text-2xl md:text-3xl">{memory.emoji}</span>
                      <h3 className="text-lg md:text-2xl font-display font-bold text-brown">
                        {memory.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-rose font-semibold mb-2 md:mb-3">{memory.date}</p>
                    <p className="text-sm text-brown/70 font-body leading-relaxed">
                      {memory.description}
                    </p>
                  </motion.div>
                </div>

                {/* Image - mobile: full width below content, desktop: alternating */}
                <div className={`pl-10 md:pl-0 mt-6 md:mt-0 ${idx % 2 === 0 ? '' : ''}`}>
                  <motion.div
                    whileHover={{ rotate: -2, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="polaroid"
                  >
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-56 md:h-80 object-cover rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-16">
          <p className="text-brown/60 font-body italic">
            "Kenangan terbaik masih akan datang..." 💕
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default MemoryLane
