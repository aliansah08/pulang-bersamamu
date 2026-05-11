import { useRef, useEffect } from 'react'
import Hero from './components/Hero'
import MemoryLane from './components/MemoryLane'
import Gallery from './components/Gallery'
// import Letters from './components/Letters'
import Favorites from './components/Favorites'
// import FuturePlans from './components/FuturePlans'
import Footer from './components/Footer'

function App() {
  const sectionRefs = {
    hero: useRef(null),
    memories: useRef(null),
    gallery: useRef(null),
    letters: useRef(null),
    favorites: useRef(null),
    future: useRef(null)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md shadow-soft">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display font-bold text-xl text-brown hover:text-rose transition-colors"
          >
            💕 Pulang Bersamamu
          </button>

          {/* Navigation Links - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex gap-6 font-body text-sm font-semibold">
            {[
              { label: 'Cerita Kita', id: 'memories' },
              { label: 'Galeri', id: 'gallery' },
              // { label: 'Surat', id: 'letters' },
              { label: 'Favorit', id: 'favorites' },
              // { label: 'Mimpi', id: 'future' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-brown hover:text-rose transition-colors relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection('memories')}
              className="text-brown hover:text-rose transition-colors font-semibold text-sm"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <MemoryLane />
        <Gallery />
        <Favorites />
        {/* <Letters /> */}
        {/* <FuturePlans /> */}
      </main>

      {/* Footer */}
      <Footer scrollToTop={scrollToTop} />


    </div>
  )
}

export default App
