import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages } from '../data/content'
import { ScrollReveal, containerVariants, itemVariants } from '../utils/animations'
import { FaTimes, FaPlay } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const getPlaceholderImage = (id) => {
    const colors = ['FFB6C1', 'FFD9E2', 'DFE7D0', 'E7E0F5', 'E8D7E1']
    return `https://via.placeholder.com/500x400/${colors[id % 5]}?text=Gallery+${id}`
  }

  // Masonry grid sizes
  const getMasonryClass = (index) => {
    const pattern = [
      'col-span-2 row-span-2', // Large
      'col-span-1', // Small
      'col-span-1', // Small
      'col-span-2', // Medium wide
      'col-span-1', // Small
      'col-span-1', // Small
      'col-span-1 row-span-2', // Medium tall
      'col-span-1' // Small
    ]
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    return isMobile ? '' : pattern[index % pattern.length]
  }

  // Check if item is video
  const isVideo = (item) => item.type === 'video'

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-gradient-to-b from-lavender/10 to-sage/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-rose/20 text-6xl">💕</div>
      <div className="absolute bottom-20 left-10 text-sage/20 text-7xl">🌿</div>

      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown mb-4">
            <span className="text-gradient">Galeri</span>
          </h2>
          <p className="text-brown/60 font-body text-lg">
            Perjalanan visual melalui momen-momen favorit kita
          </p>
        </ScrollReveal>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-max"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className={`${getMasonryClass(idx)} group cursor-pointer relative overflow-hidden rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300`}
              onClick={() => setSelectedImage(img)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {isVideo(img) ? (
                  <div className="relative w-full h-full">
                    <img
                      src={img.thumbnail || img.image}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-rose/80 rounded-full flex items-center justify-center">
                        <FaPlay size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent flex flex-col justify-end p-4 text-cream"
              >
                <h3 className="font-display font-bold text-lg">{img.title}</h3>
                <p className="text-sm text-cream/80">{img.date}</p>
              </motion.div>

              {/* Hover icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-10 h-10 bg-rose rounded-full flex items-center justify-center text-white text-lg"
              >
                {isVideo(img) ? <FaPlay size={16} className="ml-0.5" /> : '+'}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-cream rounded-xl overflow-hidden shadow-lift"
              >
                {/* Image or Video */}
                <div className="relative w-full">
                  {isVideo(selectedImage) ? (
                    <video
                      src={selectedImage.videoUrl}
                      controls
                      autoPlay
                      className="w-full max-h-[80vh] object-contain"
                    />
                  ) : (
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full max-h-[80vh] object-contain"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-display font-bold text-brown mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-brown/60 font-body">{selectedImage.date}</p>
                </div>

                    {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-rose text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-soft-lg z-10"
                >
                  <FaTimes size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
