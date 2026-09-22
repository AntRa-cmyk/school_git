function PhotoModal({id, title, description, imageLarge, alt}) {
	return (
		<div class="modal fade" id={`zdjecie${id}`} tabindex="-1" aria-hidden="true">
			<div class="modal-dialog" style={{"min-width": "80vw", height: "50vh"}}>
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5">{title}</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						{description}
						<img className="img-fluid" src={imageLarge} alt={alt} />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoModal
