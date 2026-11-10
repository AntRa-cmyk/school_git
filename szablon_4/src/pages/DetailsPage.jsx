import { useParams, useNavigate } from "react-router-dom";

function DetailsPage({dane}) {
    let params = useParams()
    let navigate = useNavigate()

    let id = Number(params.id)

    let wydarzenie = dane.find((v) => v.id == id)

    if(wydarzenie == null) {
        return (<div className="container">
            <p>
                Nie znaleziono wydarzenia o numerze {id}
            </p>
            <button className="btn btn-secondary" onClick={() => {navigate(-1)}}>Wróc</button>
        </div>)
    }

    return (<>
        <div className="container">
            <p> Miasto: {wydarzenie.miasto} </p>
            <p> Nazwa: {wydarzenie.nazwa} </p>
            <p> data: {wydarzenie.data} </p>
            <p> {wydarzenie.cena == 0 ? "Wstęp wolny" : `${wydarzenie.cena} zł` } </p>
            <button className="btn btn-secondary" onClick={() => {navigate(-1)}}>Wróc</button>
        </div>
    </>)
}

export default DetailsPage