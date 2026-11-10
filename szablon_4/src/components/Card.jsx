import { Link } from "react-router-dom";

function Card({wydarzenie}) {
    return (<>
        <div className="card h-100">
            <div className="card-body">
                <h3 className="card-title h5">{wydarzenie.nazwa}</h3>
                <p className="text-body-secondary mb-2">{wydarzenie.miasto} - {wydarzenie.data}</p>
                <Link to={`/wydarzenie/${wydarzenie.id}`} className="btn btn-outline-primary btn-sm">Szczegóły</Link>
            </div>
        </div>
    </>)
}

export default Card