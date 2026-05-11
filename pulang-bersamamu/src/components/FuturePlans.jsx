import { useState } from 'react'
import { motion } from 'framer-motion'
import { futurePlansData } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants } from '../utils/animations'
import { FaCheck, FaCircle } from 'react-icons/fa'

const FuturePlans = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const getProgressPercentage = () => {
    const checked = Object.values(checkedItems).filter(Boolean).length
    return Math.round((checked / futurePlansData.length) * 100)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-sage'
      case 'in-progress':
        return 'text-rose'
      case 'pending':
        return 'text-lavender'
      default:
        return 'text-brown/40'
    }
  }

  const getStatusBg = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-sage/20'
      case 'in-progress':
        return 'bg-rose/20'
      case 'pending':
        return 'bg-lavender/20'
      default:
        return 'bg-brown/5'
    }
  }

  return (
    <section id="future" className="py-20 px-4 md:px-8 bg-gradient-to-b from-rose/5 to-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-lavender/20 text-7xl">🌟</div>
      <div className="absolute bottom-20 left-20 text-rose/20 text-6xl">💭</div>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown mb-4">
            Mimpi & Rencana <span className="text-gradient">Masa Depan</span>
          </h2>
          <p className="text-brown/60 font-body text-lg">
            Petualangan yang tak sabar untuk kita jalani bersama
          </p>
        </ScrollReveal>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-white rounded-xl shadow-soft p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-display font-bold text-brown text-lg">Progres Kita</h3>
            <p className="font-display font-bold text-rose text-2xl">
              {getProgressPercentage()}%
            </p>
          </div>
          <div className="w-full bg-brown/10 rounded-full h-3 overflow-hidden">
            <motion.div
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-r from-rose via-mauve to-lavender h-full"
            />
          </div>
        </motion.div>

        {/* Dream Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {futurePlansData.map((dream) => (
            <motion.div
              key={dream.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`card ${getStatusBg(dream.status)} border-l-4 ${
                dream.status === 'completed'
                  ? 'border-sage'
                  : dream.status === 'in-progress'
                  ? 'border-rose'
                  : 'border-lavender'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <motion.button
                  onClick={() => toggleCheck(dream.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 mt-1"
                >
                  <div className={`relative w-6 h-6 rounded-full transition-all ${
                    dream.status === 'completed' || checkedItems[dream.id]
                      ? 'bg-sage text-white'
                      : 'bg-white border-2 border-brown/30'
                  }`}>
                    {(dream.status === 'completed' || checkedItems[dream.id]) && (
                      <FaCheck size={16} className="absolute inset-1" />
                    )}
                  </div>
                </motion.button>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{dream.emoji}</span>
                    <h3 className={`text-lg font-display font-bold ${
                      dream.status === 'completed' || checkedItems[dream.id]
                        ? 'text-brown/50 line-through'
                        : 'text-brown'
                    }`}>
                      {dream.dream}
                    </h3>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      dream.status === 'completed'
                        ? 'bg-sage text-sage/70'
                        : dream.status === 'in-progress'
                        ? 'bg-rose text-rose/70'
                        : 'bg-lavender text-lavender/70'
                    }`}>
                      {dream.status === 'in-progress' ? '🚀 Dalam Proses' : dream.status === 'completed' ? '✓ Selesai' : '💭 Tertunda'}
                    </span>
                  </div>

                  {/* Details */}
                  <p className="text-sm text-brown/70 font-body">
                    {dream.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-16 pt-8 border-t-2 border-brown/10">
            <p className="text-brown/60 font-body text-lg italic mb-4">
              "Masa depan cerah saat kita bersama" ✨
            </p>
            <p className="text-sm text-brown/50 font-body">
              Mari wujudkan mimpi bersama, satu petualangan setiap saat 💕
            </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default FuturePlans
