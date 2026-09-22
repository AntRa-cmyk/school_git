import photos from "../data/photos.json"
import Fragment from "react"
import PhotoCard from "./PhotoCard.jsx"
import PhotoModal from "./PhotoModal.jsx"

function Gallery() {
	console.log(photos)
	return (<>
		{photos.map(photo => {
			return <div id={photo.id} >
				<PhotoCard title={photo.title} alt={photo.alt}
					image={photo.image} description={photo.description} id={photo.id} category={photo.category} />
				<PhotoModal title={photo.title} alt={photo.alt}
					imageLarge={photo.imageLarge} description={photo.description} id={photo.id} />
			</div>
		})}
	</>)
}

export default Gallery
