import { useState } from 'react'
import ksiazkiStartowe from "./ksiazki.js"
import "bootstrap/dist/css/bootstrap.css"
import FilterButton from "./components/FilterButton.jsx"

const possible_generes = [
  {
    title: "Wszystkie",
    value: null
  },
  {
    title: "Powieść",
    value: "powieść"
  },
  {
    title: "Poemat",
    value: "poemat"
  },
  {
    title: "Sci-fi",
    value: "science-fiction"
  },
  {
    title: "Fantasy",
    value: "fantasy"
  },
  {
    title: "Dramat",
    value: "dramat"
  },
]
function App() {
  const [ksiazki, setKsiazki] = useState(ksiazkiStartowe)
  const [aktywnyGatunek, setAktywnyGatunek] = useState(null)

  const widoczne_ksiazki = ksiazki.filter((v) => {return aktywnyGatunek == null || v.gatunek == aktywnyGatunek})

  function handleBookFavoriteToggle(id) {
    setKsiazki(ksiazki.map((v) => {
      return v.id == id ? {...v, ulubiona: !v.ulubiona} : v
    }))
  }

  return (<div>
    <div>
      {possible_generes.map((v) => {
        return <FilterButton key={v.title} setFilter={setAktywnyGatunek} filterTitle={v.title} currentFilter={aktywnyGatunek} filterValue={v.value} />
      })}
    </div>
    <h2>Wyświetlono {widoczne_ksiazki.length} z {ksiazki.length} książek</h2>
    <div className="row g-4 m-3">
      {widoczne_ksiazki.map((v) => {
        return <div key={v.id} className="col-12 col-md-4">
          <div className={v.dostepna ? "card border-success" : "card border-danger"}>
            <div className="card-header">
                {v.tytul}
                {v.dostepna ?
                  <span className="badge text-bg-success m-2">Dostępna</span>
                  :
                  <span className="badge text-bg-danger m-2">Wypożyczona</span>
                }
            </div>
            <div className="card-body">
                <p>
                    Autor: {v.autor}
                </p>
                <p>
                    Gatunek: {v.gatunek}
                </p>
                <button className="btn btn-link p-0 fs-4" onClick={() => {handleBookFavoriteToggle(v.id)}}>{v.ulubiona ? "☆" : "★"}</button>
            </div>
          </div>
        </div>
      })}
    </div>
  </div>)
}

export default App
