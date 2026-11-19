import { useRef, useState } from 'react'
import poczatkowe_dane from "./zdjecia.js"
import Image from "./components/Image.jsx"
import FilterSwitch from './components/FilterSwitch.jsx';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [zdjecia, setZdjecia] = useState(poczatkowe_dane)
  const [kwiatyFilter, setKwiatyFilter] = useState(false)
  const [zwierzetaFilter, setZwierzetaFilter] = useState(false)
  const [samochodyFilter, setSamochodyFilter] = useState(false)

  const opis_ref = useRef(0)
  const url_ref = useRef(1)
  const category_ref = useRef(3)

  function handleDownload(id) {
    setZdjecia(zdjecia.map((v) => {
      return v.id == id ? {...v, downloads: v.downloads + 1} : v
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    let max_id = 0

    for(let i = 0; i < zdjecia.length; i++) {
      max_id = Math.max(max_id, zdjecia[i].id)
    }

    let nowe_zdjecie = {
      id: max_id + 1,
      alt: opis_ref.current.value,
      filename: url_ref.current.value,
      downloads: 0,
      category: Number(category_ref.current.value)
    }

    setZdjecia([...zdjecia, nowe_zdjecie])
    event.target.reset()
  }

  const widoczne = zdjecia.filter((v) => {
    return (v.category == 1 && !kwiatyFilter)
      || (v.category == 2 && !zwierzetaFilter)
      || (v.category == 3 && !samochodyFilter)
  })

  return (
    <>
      <h2>
        Kategorie zdjęć
      </h2>
      <div className="d-flex flex-row">
        <FilterSwitch value={kwiatyFilter} set={setKwiatyFilter} label="Kwiaty" />
        <FilterSwitch value={zwierzetaFilter} set={setZwierzetaFilter} label="Zwierzęta" />
        <FilterSwitch value={samochodyFilter} set={setSamochodyFilter} label="Samochody" />
      </div>
      <div className="container">
        <div className="row g-3">
          {widoczne.map((v) => {
            return <Image key={v.id} data={v} handleDownload={handleDownload} />
          })}
        </div>
      </div>

      <form className="container" onSubmit={handleSubmit}>
        <label className="form-label">Opis</label>
        <input className="form-control" ref={opis_ref}></input>

        <label className="form-label">Url</label>
        <input className="form-control" ref={url_ref}></input>

        <label className="form-label">Typ</label>
        <select className="form-control" ref={category_ref}>
          <option value="1">Kwiaty</option>
          <option value="2">Zwierzęta</option>
          <option value="3">Samochody</option>
        </select>

        <input type="submit" className="mt-2 btn btn-primary"/>
      </form>
    </>
  )
}

export default App
