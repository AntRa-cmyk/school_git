import { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

function App() {
	let nameInput = useRef(null)
	let numberInput = useRef(null)
	const [filter, setFilter] = useState("")
	const [sortAscending, setSortAscending] = useState(true)
	const [status, setStatus] = useState(true)

	const kursy = [
		"Programowanie obiektowe",
		"Programowanie funkcjonalne",
		"Programowanie webowe",
	]

	let visible_list = kursy
		.map((v, i) => { return{original_idx: i, value: v}})
		.filter(v => v.value.toLowerCase().startsWith(filter.toLowerCase()))
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

	return (
		<>
			<label htmlFor="filter_input"> Szukaj kursu </label>
			<input name="filter_input" onChange={handleFilter}></input>
			<button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "A - Z" : "Z - A"}</button>

			<p> Znaleziono {visible_list.length} z {kursy.length} kursów </p>
			<ul>
				{visible_list.map((v) => <li key={v.original_idx}> {v.original_idx + 1}. {v.value} </li>)}
			</ul>

			<form onSubmit={handleSubmit}>
				<input ref={nameInput}></input> <br></br>
				<input ref={numberInput}></input>
				<input type="submit"></input>
			</form>

			<div className={`alert alert-danger ${ status.typ == "blad" ? "" : "d-none"}`}> {status.tresc} </div>
			<div className={`alert alert-success ${ status.typ == "sukces" ? "" : "d-none"}`}> {status.tresc} </div>
		</>
	)
}

export default App
