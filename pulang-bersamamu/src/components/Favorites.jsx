import { useState } from 'react'
import { motion } from 'framer-motion'
import { favoritesData } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants, pulseVariants } from '../utils/animations'
import { FaMusic, FaUtensils, FaBolt } from 'react-icons/fa'

const Favorites = () => {
  const [activeTab, setActiveTab] = useState('songs')

  const tabs = [
    { id: 'songs', label: 'Lagu', icon: FaMusic, color: 'rose' },
    { id: 'foods', label: 'Makanan', icon: FaUtensils, color: 'sage' },
    { id: 'activities', label: 'Aktivitas', icon: FaBolt, color: 'lavender' }
  ]

  const tabColorMap = {
    songs: 'from-rose to-rose/50',
    foods: 'from-sage to-sage/50',
    activities: 'from-lavender to-lavender/50'
  }

  const getTabData = () => {
    return favoritesData[activeTab]
  }

  return (
    <section id="favorites" className="py-20 px-4 md:px-8 bg-gradient-to-b from-cream to-rose/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-sage/20 text-7xl">🎵</div>
      <div className="absolute bottom-20 left-10 text-rose/20 text-6xl">💕</div>

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown mb-4">
            <span className="text-rose">Favorit</span> Kita
          </h2>
          <p className="text-brown/60 font-body text-lg">
            Hal-hal yang membuat kita tersenyum, tertawa, dan hidup
          </p>
        </ScrollReveal>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-${tab.color} text-brown shadow-soft-lg`
                    : 'bg-white text-brown border-2 border-brown/20 hover:border-brown/40'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={activeTab}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {getTabData().map((item, idx) => (
              <motion.div
                key={item.id || idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`card bg-gradient-to-br ${tabColorMap[activeTab]}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon/Emoji */}
                  <motion.div
                    animate={pulseVariants.animate}
                    className="text-4xl flex-shrink-0 mt-1"
                  >
                    {item.emoji || '✨'}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    {activeTab === 'songs' && (
                      <>
                        <h3 className="text-xl font-display font-bold text-brown">
                          {item.title}
                        </h3>
                        <p className="text-brown/70 text-sm mb-2">
                          {item.artist}
                        </p>
                        <p className="text-brown/60 font-body italic">
                          "{item.reason}"
                        </p>
                      </>
                    )}

                    {activeTab === 'foods' && (
                      <>
                        <h3 className="text-xl font-display font-bold text-brown">
                          {item.name}
                        </h3>
                        <p className="text-brown/60 font-body">
                          {item.reason}
                        </p>
                      </>
                    )}

                    {activeTab === 'activities' && (
                      <>
                        <h3 className="text-xl font-display font-bold text-brown">
                          {item.activity}
                        </h3>
                        <p className="text-brown/60 font-body">
                          {item.reason}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Spotify Embed Placeholder */}
        {activeTab === 'songs' && (
          <ScrollReveal className="text-center mt-16 pt-8 border-t-2 border-brown/10">
            <p className="text-brown/60 font-body text-sm mb-4">
              🎵 Tambahkan playlist Spotify dengan mengganti placeholder di bawah
            </p>
            <div className="bg-white/50 border-2 border-dashed border-rose/30 rounded-xl p-12 text-center text-brown/40">
              <p className="font-body">
                {'<iframe src="spotify_playlist_url" />'} 
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}

export default Favorites
