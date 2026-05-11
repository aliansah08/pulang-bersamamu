import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lettersData } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants } from '../utils/animations'
import { FaChevronDown } from 'react-icons/fa'

const Letters = () => {
  const [expandedId, setExpandedId] = useState(null)

  const colorMap = {
    rose: 'bg-rose/20 border-rose',
    lavender: 'bg-lavender/20 border-lavender',
    sage: 'bg-sage/20 border-sage'
  }

  const borderColorMap = {
    rose: 'border-rose',
    lavender: 'border-lavender',
    sage: 'border-sage'
  }

  return (
    <section id="letters" className="py-20 px-4 md:px-8 bg-gradient-to-b from-sage/10 to-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-rose/20 text-7xl">💌</div>
      <div className="absolute bottom-10 right-10 text-lavender/20 text-6xl">✨</div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown mb-4">
            Surat dari <span className="text-rose">Hati</span>
          </h2>
          <p className="text-brown/60 font-body text-lg">
            Kata-kata yang ingin kami ucapkan, tersimpan selamanya
          </p>
        </ScrollReveal>

        {/* Letters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {lettersData.map((letter) => (
            <motion.div
              key={letter.id}
              variants={itemVariants}
              className={`border-2 ${colorMap[letter.color]} rounded-xl overflow-hidden transition-all duration-300`}
            >
              {/* Letter Header */}
              <motion.button
                onClick={() => setExpandedId(expandedId === letter.id ? null : letter.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/30 transition-colors"
              >
                <div className="text-left">
                  <p className="text-sm font-semibold text-brown/60 font-body">
                    Surat dari {letter.from}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-brown mt-1">
                    {letter.title}
                  </h3>
                  <p className="text-xs text-brown/50 mt-2">{letter.date}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === letter.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-${letter.color}`}
                >
                  <FaChevronDown size={24} className="text-rose" />
                </motion.div>
              </motion.button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === letter.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t-2 ${borderColorMap[letter.color]}`}
                  >
                    <div className="p-6 bg-white/50 backdrop-blur-sm">
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brown/80 font-body leading-relaxed text-lg italic"
                      >
                        {letter.content}
                      </motion.p>

                      {/* Signature placeholder */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 pt-4 border-t border-brown/20 text-right"
                      >
                        <p className="font-accent text-2xl text-rose">Dengan segenap cinta,</p>
                        <p className="font-display font-bold text-brown mt-2">{letter.from}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Write your own prompt */}
        <ScrollReveal className="text-center mt-16 pt-8 border-t-2 border-brown/10">
          <p className="text-brown/60 font-body italic text-lg">
            💌 Punya surat cinta sendiri? Tambahkan untuk membuat koleksi ini lebih istimewa.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Letters
