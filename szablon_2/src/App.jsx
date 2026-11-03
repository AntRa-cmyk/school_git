import { useState } from 'react'
import {przepisyStartowe} from "./przepisy"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [przepisy, setPrzepisy] = useState(przepisyStartowe)
  const [rosnonco, setRosnonco] = useState(true)
  const [nazwa, setNazwa] = useState(null)
  const [czas, setCzas] = useState(null)
  const [isCzasInvalid, setIsCzasInvalid] = useState(false)
  const [validationErrorMessage, setValidationErrorMessage] = useState(null)

  const widoczne_przepisy = przepisy.sort((a, b) => rosnonco ? a.czas - b.czas : b.czas - a.czas)

  function handleSubmit(e) {
    e.preventDefault()

    if(czas < 0) {
      setIsCzasInvalid(true)
      setValidationErrorMessage("Czas przygotowania nie może być ujemny")
      return
    }

    if(czas == null) {
      setIsCzasInvalid(true)
      setValidationErrorMessage("Nie podano czasu przygotowania")
      return
    }

    if(nazwa == null) {
      setIsCzasInvalid(true)
      setValidationErrorMessage("Nie podano nazwy przepisu")
      return
    }

    setIsCzasInvalid(false)
    setValidationErrorMessage(null)
    
    let max_id = 0
    for(let i = 0; i < przepisy.length; i++) {
      Math.max(max_id, przepisy[i].id)
    }
    setPrzepisy([...przepisy, {
      id: max_id + 1,
      nazwa: nazwa,
      czas: czas,
      kategoria: "inne"
    }])

    setCzas(null)
    setNazwa(null)
  }

  return (
    <div>
      <button onClick={() => {setRosnonco(!rosnonco)}} className="btn btn-outline-primary m-2">{rosnonco ? "Malejaco" : "Rosnonco"}</button>
      <div className="row g-4">
        {przepisy.map((v) => {
          return <div key={v.id} className="col-12 col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title h5">{v.nazwa}</h4>
                  <span className="badge text-bg-secondary m-1">{v.kategoria} </span>
                </div>
                <div className="card-body">
                  <p>Czas przygotowania: {v.czas} minuty</p>
                </div>
              </div>
          </div>
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Nazwa:</label>
        <input className="form-control" name="nazwa" onChange={(e) => {setNazwa(e.target.value)}} value={nazwa}/>
        <label className="form-label">Czas przygotowania:</label>
        <input className={isCzasInvalid ? "form-control is-invalid" : "form-control"} onChange={(e) => {setCzas(e.target.value)}} value={czas} type="number" name="czas" />
        <input className="btn btn-primary" type="submit"/>
        <div className={validationErrorMessage == null ? "d-none" : "d-block invalid-feedback"}>
          {validationErrorMessage}
        </div>
      </form>
    </div>
  )
}

export default App
