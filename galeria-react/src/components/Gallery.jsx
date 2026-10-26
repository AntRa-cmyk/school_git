import Fragment from "react"
import PhotoCard from "./PhotoCard.jsx"

function Gallery({photos, onCardDelete, togglePhotoFavorite}) {

	return (<div className="container">
		{photos.length == 0 && <p className="alert-warning"> Nie ma zdjęć z tym filtrem </p>}
		<div className="row g-4">
			{photos.map(photo => {
				return <div className="col-12 col-md-6 col-lg-4" key={photo.id} id={photo.id} >
					<PhotoCard title={photo.title} alt={photo.alt} onCardDelete={onCardDelete} togglePhotoFavorite={togglePhotoFavorite} isFavorite={photo.favorite}
						image={photo.image} description={photo.description} id={photo.id} category={photo.category} />
				</div>
			})}
		</div>
	</div>)
}

export default Gallery
