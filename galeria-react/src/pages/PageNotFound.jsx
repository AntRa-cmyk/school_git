import {useNavigate} from "react-router-dom"

function PageNotFound() {
    let navigate = useNavigate()
    return (<div className="container">
        <h1>
            Strona nie znaleziona :/
        </h1>
        <button className="btn btn-primary" onClick={() => {navigate(-1)}}>Wstecz</button>
    </div>)
}

export default PageNotFound