import {useState, useEffect} from "react"

function ZdjecieDnia() {
	const [currentId, setCurrentId] = useState(null)
	const [imageMeta, setImageMeta] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	function fetchImage() {
		if(currentId == undefined) {return}

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
		return (<div className="spinner-border" role="status">
			<span className="visually-hidden">Loading…</span>
		</div>)
	}

	return (<div className="container">
		{
			error 
			? <p> {error} </p>
			: (<>
				<p> Autor: {imageMeta.author} </p>
				<img src={`https://picsum.photos/id/${currentId}/400/250`} />
			</>)
		}
	</div>)
}

export default ZdjecieDnia
