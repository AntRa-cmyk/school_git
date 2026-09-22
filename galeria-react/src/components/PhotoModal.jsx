function PhotoModal({id, title, description, imageLarge, alt}) {
	return (
		<div className="modal fade" id={`zdjecie${id}`} tabindex="-1" aria-hidden="true">
			<div className="modal-dialog" style={{"min-width": "80vw", height: "50vh"}}>
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5">{title}</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						{description}
						<img classNameName="img-fluid" src={imageLarge} alt={alt} />
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoModal
