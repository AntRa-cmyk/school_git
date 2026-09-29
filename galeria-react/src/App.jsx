import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Gallery from "./components/Gallery.jsx"
import Navbar from "./components/Navbar.jsx"
import CategoryBar from "./components/CategoryBar.jsx"
import AddPhotoModal from "./components/AddPhotoModal.jsx"
import FiltersOffCanvas from "./components/FiltersOffCanvas.jsx"
import {useState} from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import photos from "./data/photos.json"

function App() {
	const [zdjecia, setZdjecia] = useState(photos)

	return (
		<>
			<Navbar />
			<Header />
			<div className="container mt-4">
				<CategoryBar />
				<Gallery photos={zdjecia} setPhotos={setZdjecia} />
			</div>
			<AddPhotoModal />
			<FiltersOffCanvas />
		</>
	)
}

export default App
