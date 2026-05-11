import { motion } from 'framer-motion'
import { memoryLaneData } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants } from '../utils/animations'
import { FaHeart } from 'react-icons/fa'

const MemoryLane = () => {
  return (
    <section id="memories" className="py-20 px-4 md:px-8 bg-gradient-to-b from-cream to-lavender/10 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-10 text-lavender/20 text-7xl">✨</div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brown mb-4">
                Lorong <span className="text-rose">Kenangan</span>
              </h2>
              <p className="text-brown/60 font-body text-lg">
                Momen yang mengubah hidup kita, terabadikan dalam waktu
              </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose via-mauve to-lavender" />

          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {memoryLaneData.map((memory, idx) => (
              <motion.div
                key={memory.id}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 0 ? '' : 'md:grid-cols-2 md:[direction:rtl]'
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 0 ? 'md:text-right' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card bg-white/80 backdrop-blur-sm border-l-4 border-rose"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{memory.emoji}</span>
                      <h3 className="text-2xl font-display font-bold text-brown">
                        {memory.title}
                      </h3>
                    </div>
                    <p className="text-sm text-rose font-semibold mb-3">{memory.date}</p>
                    <p className="text-brown/70 font-body leading-relaxed">
                      {memory.description}
                    </p>
                  </motion.div>
                </div>

                {/* Image */}
                <div className={idx % 2 === 0 ? '' : ''}>
                  <motion.div
                    whileHover={{ rotate: -2, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="polaroid"
                  >
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8"
                >
                  <div className="relative w-6 h-6 bg-rose rounded-full shadow-lg border-4 border-cream flex items-center justify-center">
                    <FaHeart size={10} className="text-white" />
                  </div>
                </motion.div>
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
