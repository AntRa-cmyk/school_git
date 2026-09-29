import CategoryBarButton from "./CategoryBarButton"

function CategoryBar({active, setActive}) {
	const buttons = [
		{title: "Wszystkie", value: ""},
		{title: "Góry", value: "gory"},
		{title: "Morze", value: "morze"},
		{title: "Miasto", value: "miasto"},
	]

	function setActiveTo(new_value) {
		setActive(new_value)
	}

    return (<div id="kategorie" className="d-flex flex-wrap gap-2 mb-4">
		{buttons.map((v) => {
			return (<CategoryBarButton active={active} setActive={setActive} buttonText={v.title} filterValue={v.value}/>)
		})}
	</div>)
}

export default CategoryBar
