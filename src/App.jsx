import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataManager from './components/DataManager'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Discography from './pages/Discography'
import Gallery from './pages/Gallery'
import Choreography from './pages/Choreography'
import Video from './pages/Video'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<DataManager />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/discography' element={<Discography />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/choreography' element={<Choreography />} />
				<Route path='/video' element={<Video />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App