function Card({dane, handleRowerDeletion}) {
    return (<>
      <div className={dane.dostepny ? "m-2 card h-100" : "m-2 card h-100 opacity-50"}>
        <div className="card-body">
          <h3 className="card-title h5">{dane.model}</h3>
          <p><span className="badge text-bg-secondary mb-3">{dane.typ}</span></p>
          <button className="btn btn-outline-danger" onClick={() => {handleRowerDeletion(dane.id)}}>Usuń</button>
        </div>
      </div>
    </>)
}

export default Card