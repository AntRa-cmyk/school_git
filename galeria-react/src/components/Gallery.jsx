import photos from "../data/photos.json"
import Fragment from "react"
import PhotoCard from "./PhotoCard.jsx"
import PhotoModal from "./PhotoModal.jsx"

function Gallery() {
	console.log(photos)
	return (<div className="container">
		<div className="row g-4">
			{photos.map(photo => {
				return <div className="col-12 col-md-6 col-lg-4" id={photo.id} >
					<PhotoCard title={photo.title} alt={photo.alt}
						image={photo.image} description={photo.description} id={photo.id} category={photo.category} />
					<PhotoModal title={photo.title} alt={photo.alt}
						imageLarge={photo.imageLarge} description={photo.description} id={photo.id} />
				</div>
			})}
		</div>
	</div>)
}

export default Gallery
