import { motion } from 'framer-motion'
import { heroCollageImages } from '../data/content'
import { fadeInTopVariants, itemVariants, containerVariants } from '../utils/animations'
import { FaHeart, FaStar } from 'react-icons/fa'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-b from-cream via-rose/10 to-cream flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-rose/30 text-6xl animate-float">✨</div>
      <div className="absolute bottom-10 right-10 text-lavender/30 text-6xl animate-float" style={{ animationDelay: '1s' }}>💕</div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl w-full"
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Collage */}
          <motion.div
            variants={fadeInTopVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-3 w-full h-[350px] md:h-[450px] lg:relative lg:w-auto lg:h-[450px] lg:grid-cols-2 lg:gap-0 lg:block">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg hidden lg:block lg:absolute lg:top-0 lg:left-0 lg:w-48 lg:h-48 lg:rotate-[-3deg]">
                <img src={heroCollageImages[0]} alt="Memory 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg hidden lg:block lg:absolute lg:top-0 lg:right-16 lg:w-44 lg:h-52 lg:rotate-[5deg]">
                <img src={heroCollageImages[1]} alt="Memory 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg hidden lg:block lg:absolute lg:bottom-16 lg:left-4 lg:w-48 lg:h-56 lg:rotate-[2deg]">
                <img src={heroCollageImages[2]} alt="Memory 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg hidden lg:block lg:absolute lg:bottom-8 lg:right-8 lg:w-52 lg:h-60 lg:rotate-[-5deg]">
                <img src={heroCollageImages[3]} alt="Memory 4" className="w-full h-full object-cover" />
              </div>
              <img src={heroCollageImages[0]} alt="Memory 1" className="w-full h-full object-cover rounded-2xl shadow-lg lg:hidden" />
              <img src={heroCollageImages[1]} alt="Memory 2" className="w-full h-full object-cover rounded-2xl shadow-lg lg:hidden" />
              <img src={heroCollageImages[2]} alt="Memory 3" className="w-full h-full object-cover rounded-2xl shadow-lg lg:hidden" />
              <img src={heroCollageImages[3]} alt="Memory 4" className="w-full h-full object-cover rounded-2xl shadow-lg lg:hidden" />
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-4 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <p className="text-rose font-accent text-2xl mb-2">Selamat Datang di</p>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-brown leading-tight">
                <span className="text-gradient">Dunia Kecil Kita</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-brown/70 leading-relaxed font-body"
            >
              Setiap momen denganmu adalah kenangan yang akan kita hargai selamanya.
            </motion.p>

            {/* Feature list */}
            <motion.div variants={itemVariants} className="space-y-3">
              {[
                { icon: '💫', text: 'Perjalanan kita bersama' },
                { icon: '📸', text: 'Kenangan berharga' },
                { icon: '💌', text: 'Surat dari hati' },
                { icon: '🎯', text: 'Momen tak terlupakan' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-rose">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body text-brown">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.button
                onClick={() => scrollToSection('memories')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 group"
              >
                  <FaStar size={18} className="group-hover:animate-spin" />
                  Cerita Kita
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('gallery')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <FaHeart size={18} />
                Gallery
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-16"
        >
                  <p className="text-brown/50 text-sm font-body">Scroll untuk mengeksplor</p>
          <p className="text-2xl text-rose">↓</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
