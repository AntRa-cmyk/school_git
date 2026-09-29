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
import photosImport from "./data/photos.json"

function App() {
	const [photos, setPhotos] = useState(photosImport)
	const [active, setActive] = useState("")

	let visiblePhotos = photos
	if(active != "") {
		visiblePhotos = photos.filter(v => v.category == active)
	}

	function onCardDelete(id) {
		setPhotos(photos.filter((v) => {
			return v.id != id
		}))
	}

	function onAddPhotoSubmit(zdjecie) {
		zdjecie.id = Math.max(...photos.map(v => v.id)) + 1
		setPhotos([...photos, zdjecie])
		console.log(photos)
	}

	return (
		<>
			<Navbar />
			<Header />
			<div className="container mt-4">
				<CategoryBar active={active} setActive={setActive} />
				<Gallery photos={visiblePhotos} onCardDelete={onCardDelete} />
			</div>
			<AddPhotoModal onAddPhotoSubmit={onAddPhotoSubmit}/>
			<FiltersOffCanvas />
		</>
	)
}

export default App
