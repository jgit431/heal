import { Routes, Route } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import usePageTransition from './components/usePageTransition.js'

import Home from './pages/Home.jsx'
import ThePlace from './pages/ThePlace.jsx'
import Classes from './pages/Classes.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  // displayedLocation lags the real one by one fade, so the outgoing page is
  // still on screen while it fades out.
  const { displayedLocation, phase } = usePageTransition()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className={`page page--${phase}`}>
        <Routes location={displayedLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/the-place" element={<ThePlace />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
