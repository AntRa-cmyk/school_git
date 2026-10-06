import { useRef, useState } from 'react'

function App() {
	let nameInput = useRef(null)
	let numberInput = useRef(null)
	const [filter, setFilter] = useState("")

	const kursy = [
		"Programowanie obiektowe",
		"Programowanie funkcjonalne",
		"Programowanie webowe",
	]

	const visible_list = kursy
		.map((v, i) => { return{original_idx: i, value: v}})
		.filter(v => v.value.toLowerCase().startsWith(filter.toLowerCase()))

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
			<label for="filter_input"> Szukaj kursu </label>
			<input name="filter_input" onChange={handleFilter}></input>
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
