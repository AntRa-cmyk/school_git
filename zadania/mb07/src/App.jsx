import { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

function App() {
	let nameInput = useRef(null)
	let numberInput = useRef(null)
	const [filter, setFilter] = useState("")
	const [sortAscending, setSortAscending] = useState(true)
	const [status, setStatus] = useState()

	const kursy = [
		"Programowanie obiektowe",
		"Programowanie funkcjonalne",
		"Programowanie webowe",
	]

	let visible_list = kursy
		.map((v, i) => { return{original_idx: i, value: v}})
		.filter(v => v.value.toLowerCase().includes(filter.toLowerCase()))
		.sort((a, b) => sortAscending ? b.value.localeCompare(a.value) : a.value.localeCompare(b.value))

	function handleSubmit(e) {
		e.preventDefault()
		const idx = parseInt(numberInput.current.value) - 1
		console.log(idx)
		if(idx >= kursy.length || isNaN(idx)) {
			setStatus({typ: "blad", tresc: "Nie prawidłowy numer kursu" })
			return
		}

		setStatus({typ: "sukces", tresc: `${nameInput.current.value} wybrał kurs: "${kursy[idx]}"` })
		console.log(nameInput.current.value)
	}

	function handleFilter(e) {
		setFilter(e.target.value)
	}

	let alert_class = "d-none"

	if(status != undefined && status.typ == "blad") {
		alert_class = "alert alert-danger"
	}
	else if(status != undefined && status.typ == "sukces") {
		alert_class = "alert alert-success"
	}

	console.log(status)
	return (
		<div className="container">
			<label htmlFor="filter_input"> Szukaj kursu </label>
			<input name="filter_input m - 2" onChange={handleFilter} />
			<button className="btn btn-primary m-2" onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "A - Z" : "Z - A"}</button>

			<h3> Znaleziono {visible_list.length} z {kursy.length} kursów </h3>

			<ul>
				{visible_list.map((v) => <li key={v.original_idx}> {v.original_idx + 1}. {v.value} </li>)}
			</ul>

			<form className="form" onSubmit={handleSubmit}>
				<label className="form-label"> Imie i nazwisko </label>
				<input className="form-control" ref={nameInput} />
				<label className="form-label"> Numer kursu </label>
				<input className="form-control" ref={numberInput} />
				<input className="btn btn-primary" type="submit" value="Wyślij" />
			</form>

			<div className={alert_class}> {status != undefined && status.tresc} </div>
		</div>
	)
}

export default App
