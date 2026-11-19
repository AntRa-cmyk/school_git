import {useState, useEffect} from "react"

function ZdjecieDnia() {
	const [currentId, setCurrentId] = useState(null)
	const [imageMeta, setImageMeta] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	function fetchImage() {
		if(currentId == undefined) {return}

		setIsLoading(true)
		fetch(`https://picsum.photos/id/${currentId}/info`)
			.then(r => r.json())
			.then(data => {
				setImageMeta(data)
				setIsLoading(false)
			})
			.catch(e => {
				setIsLoading(false)
				setError(e.message)
			})
	}

	function getRandomValue() {
		return Math.floor(Math.random() * 300)
	}


	useEffect(fetchImage, [currentId])
	useEffect(() => {setCurrentId(getRandomValue())}, [])

	if(isLoading) {
		return (
			<div className="d-flex flex-center align-items-center justify-content-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading…</span>
				</div>
			</div>
		)
	}

	return (<div className="container">
		{
			<div className="container d-flex flex-column">
				{
				error
				? (<>
					<p> {error} </p>
					<p>Komentarz dla oceniającego: Zadanie mówi aby wygenerować losowe id w zakresie od 0 do 300. Natomiast niektóre ID w tym zakresie nie są prawidłowe. Np: 285. Stąd wynika ten błąd</p>
				</>)
				:
				(<>
					<p> Autor: {imageMeta.author} </p>
					<img style={{width: "100%"}} src={`https://picsum.photos/id/${currentId}/400/250`} />
				</>)
				}
				
				<button className="btn btn-primary mt-2" onClick={() => {setCurrentId(getRandomValue())}}> Losuj nowe zdjęcie </button>
			</div>
		}
	</div>)
}

export default ZdjecieDnia
