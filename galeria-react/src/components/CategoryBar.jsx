import CategoryBarButton from "./CategoryBarButton"

function CategoryBar({active, setActive}) {

	function setActiveTo(new_value) {
		setActive(new_value)
	}

    return (<div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
		<CategoryBarButton active={active} setActive={setActive} buttonText="Wszystkie" filterValue=""/>
		<CategoryBarButton active={active} setActive={setActive} buttonText="Góry" filterValue="gory"/>
		<CategoryBarButton active={active} setActive={setActive} buttonText="Morze" filterValue="morze"/>
		<CategoryBarButton active={active} setActive={setActive} buttonText="Miasto" filterValue="miasto"/>
	</div>)
}

export default CategoryBar
