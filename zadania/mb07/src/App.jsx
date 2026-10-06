import { useRef, useState } from 'react'

function App() {
	let nameInput = useRef(null)
	let numberInput = useRef(null)
	const [filter, setFilter] = useState("")
	const [sortAscending, setSortAscending] = useState(true)

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
		const idx = parseInt(numberInput.current.value)
		console.log(idx, kursy.length)
		if(idx >= kursy.length) {
			alert("Nie ma kursu")
		}
		else {
			console.log(nameInput.current.value)
		}
	}

	function handleFilter(e) {
		setFilter(e.target.value)
	}

	return (
		<>
			<p> Liczba kursów: {kursy.length} </p>
			<label htmlFor="filter_input"> Szukaj kursu </label>
			<input name="filter_input" onChange={handleFilter}></input>
			<button onClick={() => setSortAscending(!sortAscending)}>{sortAscending ? "A - Z" : "Z - A"}</button>
			<ul>
				{visible_list.map((v) => <li key={v.original_idx}> {v.original_idx + 1}. {v.value} </li>)}
			</ul>

			<form onSubmit={handleSubmit}>
				<input ref={nameInput}></input> <br></br>
				<input ref={numberInput}></input>
				<input type="submit"></input>
			</form>
		</>
	)
}

export default App
