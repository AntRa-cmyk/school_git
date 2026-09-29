function PhotoCard({id, title, description, category, image, alt, onCardDelete}) {
	return (
		<div className="card h-100">
			<img className="card-img-top" src={image} alt={alt} />
			<div className="card-body">
				<p className="card-title"> {title} </p>
				<p className="badge text-bg-primary"> {category} </p>
				<p className="card-text"> {description} </p>
				<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#zdjecie${id}`}> Powiększ </button>
			</div>
			<button className="btn btn-primary" onClick={() => onCardDelete(id)}>Usuń</button>
		</div>
	)
}

export default PhotoCard
