import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Faqs from './pages/Faqs'
import About from './pages/About'
import Terms from './pages/Terms'
import { Home } from './pages/Home'
import Privacy from './pages/Privacy'
import Contact from './pages/Contact'
import Products from './pages/Products'
import { NavBar } from './pages/Navbar'
import Privacy_2 from './pages/Privacy_2'
import { Services } from './pages/Services'
// import { Footer } from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="min-h-screen bg-white">
				<NavBar />

        {/* <Home /> */}
        
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contact />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/privacy_2" element={<Privacy_2 />} />
					<Route path="/faqs" element={<Faqs />} />
					<Route path="/terms" element={<Terms />} />
				</Routes>

			</div>
		</BrowserRouter>
	)
}

export default App
