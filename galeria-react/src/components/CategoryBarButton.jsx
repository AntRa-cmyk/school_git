function CategoryBarButton({active, setActive, filterValue, buttonText}) {
	let buttonClasses = "btn btn-outline-primary"
	if(active == filterValue) {
		buttonClasses = buttonClasses += " active"
	}
	return (
		<button type="button" onClick={() => setActive(filterValue)} className={buttonClasses}>{buttonText}</button>
	)
}

export default CategoryBarButton
