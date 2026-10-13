import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Gallery from "./components/Gallery.jsx"
import Navbar from "./components/Navbar.jsx"
import CategoryBar from "./components/CategoryBar.jsx"
import AddPhotoModal from "./components/AddPhotoModal.jsx"
import FiltersOffCanvas from "./components/FiltersOffCanvas.jsx"
import ZdjecieDnia from "./components/ZdjecieDnia.jsx"
import {useState, useEffect} from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
// import photosImport from "./data/photos.json"

function App() {
	const [photos, setPhotos] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [active, setActive] = useState("")


	useEffect(() => {
		fetch("/photos.json")
			.then(r => r.json())
			.then(data => {
				setPhotos(data)
				setIsLoading(false)
			})
			.catch(e => {
				setError("Wystąpił błąd: " + e.message)
				setIsLoading(false)
			})
	}, [])

	if(isLoading) {
		return (<div className="spinner-border" role="status">
			<span className="visually-hidden">Loading…</span>
		</div>)
	}

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

	function togglePhotoFavorite(id) {
		setPhotos(photos.map((v) => {
			return v.id != id ? v : {...v, favorite: !v.favorite}
		}))
	}

	return (
		<>
			<Navbar />
			<Header />
			<div className="container mt-4">
				<CategoryBar active={active} setActive={setActive} />
				{error
					? (<p> {error} </p>)
					: (<>
						<p> Wyświetlono {visiblePhotos.length} z {photos.length} zdjęć </p>
						<Gallery photos={visiblePhotos} onCardDelete={onCardDelete} togglePhotoFavorite={togglePhotoFavorite}/>
					</>)
				}
				
			</div>
			<AddPhotoModal onAddPhotoSubmit={onAddPhotoSubmit}/>
			<FiltersOffCanvas />
			<ZdjecieDnia />
		</>
	)
}

export default App
