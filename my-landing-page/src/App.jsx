import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Faq from './pages/Faq'
import About from './pages/About'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import { NavBar } from './pages/Navbar'
import Products from './pages/Products'
import { Hero } from './components/Hero'
import { Services } from './pages/Services'
import { Footer } from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="min-h-screen bg-white">
				<NavBar />

				<Routes>
					<Route path="/home" element={<Hero />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contact />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/faq" element={<Faq />} />
				</Routes>

				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
