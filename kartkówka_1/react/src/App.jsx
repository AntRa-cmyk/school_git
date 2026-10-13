import { useState } from 'react'
import Park from "./components/Park.jsx"
import "bootstrap/dist/css/bootstrap.css"

function App() {
	const [imie, setImie] = useState("")
	const [numerParku, setNumerParku] = useState(0)
	const parki = [
		"Tatrzański",
		"Wielkopolski",
		"Bieszczadzki",
		"Białowieski",
		"Karkonoski",
	];

	function handleSubmit(e) {
		e.preventDefault()
		console.log(imie)

		if(parki[numerParku - 1]) {
			console.log(parki[numerParku - 1])
		}
		else {
			console.log("Nieprawidłowy numer parku narodowego")
		}
	}

	// W zadaniu pisze zeby dać "ponumerowaną" listę, ale obraz pokazuje nie ponumerowaną...
	return (<div className="container">
		<h1> Liczba parków narodowych: {parki.length} </h1>

		<ol>
			{parki.map((name, i) => <Park name={name} key={i} />)}
		</ol>

		<form className="form" onSubmit={handleSubmit}>
			<label className="form-label"> Imie i nazwisko: </label>
			<input className="form-control" onChange={(e) => setImie(e.target.value)} />

			<label className="form-label"> Numer parku narodowego: </label>
			<input className="form-control" type="number" onChange={(e) => setNumerParku(e.target.value)} />

			<input className="btn btn-primary mt-3" type="submit" value="Zatwierdź wybór" />
		</form>
	</div>)
}

export default App
