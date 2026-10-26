import {useNavigate, useParams} from "react-router-dom"
import {useZdjecia} from "../hooks/useZdjecia"

function ZdjeciePage() {
    let navigate = useNavigate()
    let params = useParams()
    let id = params.id
	const {zdjecia, setZdjecia, isLoading, error} = useZdjecia()

    if(isLoading) {
        return <p>Ładowanie</p>
    }

    if(error != null) {
        return <p>błąd: {error}</p>
    }

    const {title, description, imageLarge, alt, category} = zdjecia.find((v) => v.id == id)

	return (

		<div className="card h-100">
			<img className="card-img-top" src={imageLarge} alt={alt ? alt : "Nie znaleziono zdjęcia"} />
			<div className="card-body">
				<p className="card-title"> {title} </p>
				<p className="badge text-bg-primary"> {category} </p>
				<p className="card-text"> {description} </p>
			</div>
            <button type="button" className="btn btn-secondary" onClick={() => {navigate(-1)}} >Wstecz</button>
		</div>
	)
}

export default ZdjeciePage
// :)