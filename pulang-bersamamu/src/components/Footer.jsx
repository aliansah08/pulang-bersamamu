import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = ({ scrollToTop }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown text-cream py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 right-10 text-rose/20 text-5xl">💕</div>
      <div className="absolute bottom-5 left-10 text-lavender/20 text-5xl">✨</div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Pulang Bersamamu
            </h3>
            <p className="text-cream/70 font-body text-sm leading-relaxed">
              Tempat filled with tiny memories. Website yang didedikasikan untuk cinta yang kita bagi dan masa depan yang sedang kita bangun bersama.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Jelajahi</h4>
            <ul className="space-y-2 font-body text-sm text-cream/70">
              <li>
                <a href="#hero" className="hover:text-rose transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#memories" className="hover:text-rose transition-colors">
                  Cerita Kita
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#favorites" className="hover:text-rose transition-colors">
                  Playlist
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaHeart size={20} className="text-rose" />
              <p className="font-body text-sm">Made with love</p>
            </div>
            <p className="text-cream/50 font-body text-xs">
              Tempat istimewa ini dibuat untuk merayakan cinta kita dan perjalanan indah yang kita lalui bersama.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 font-body text-sm text-center md:text-left">
               © {currentYear} Pulang Bersamamu. Dunia kecil kita, selamanya.
            </p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose text-brown font-semibold hover:shadow-lg transition-all"
            >
              <span>↑</span>
              Kembali ke Atas
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
