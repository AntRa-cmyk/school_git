import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Gallery from "../components/Gallery.jsx"
import Navbar from "../components/Navbar.jsx"
import CategoryBar from "../components/CategoryBar.jsx"
import AddPhotoModal from "../components/AddPhotoModal.jsx"
import FiltersOffCanvas from "../components/FiltersOffCanvas.jsx"
import ZdjecieDnia from "../components/ZdjecieDnia.jsx"
import {useState, useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "../components/Footer.jsx"
import Layout from "../components/Layout.jsx"
import Header from "../components/Header.jsx"
import {useZdjecia} from "../hooks/useZdjecia.js"
import {usunZdjecie, dodajZdjecie, przelaczUlubione} from "../services/zdjecia.js"
// import photosImport from "./data/photos.json"

function GaleriaPage() {
	const {zdjecia, setZdjecia, isLoading, error} = useZdjecia()
	const [active, setActive] = useState("")

	if(isLoading) {
		return (
			<div className="d-flex flex-center align-items-center justify-content-center mt-5">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading…</span>
				</div>
			</div>
		)
	}

	let visiblePhotos = zdjecia
	if(active != "") {
		visiblePhotos = photos.filter(v => v.category == active)
	}

	function onCardDelete(id) {
		setZdjecia(usunZdjecie(id))
	}

	function onAddPhotoSubmit(zdjecie) {
		zdjecie.id = Math.max(...photos.map(v => v.id)) + 1
		setZdjecia(dodajZdjecie(zdjecie))
	}

	function togglePhotoFavorite(id) {
		setZdjecia(przelaczUlubione(id))
	}

	return (
		<>
			<Header />
			<div className="container mt-4">
				<CategoryBar active={active} setActive={setActive} />
				{error
					? (<p> {error} </p>)
					: (<>
						<p> Wyświetlono {visiblePhotos.length} z {zdjecia.length} zdjęć </p>
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

export default GaleriaPage