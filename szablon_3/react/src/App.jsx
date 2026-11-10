import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "bootstrap/dist/css/bootstrap.css"
import Card from "./components/Card.jsx"

function App() {
  const [rowery, setRowery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [szukaj, setSzukaj] = useState("")

  function handleRowerDeletion(id) {
    setRowery(rowery.filter((rower) => rower.id != id))
  }

  useEffect(() => {
    async function pobierz_dane() {
      try {
        let res = await fetch("/rowery.json")

        if(res.ok == false) {
          throw Error("Błąd podczas ładowania danych")
        }

        let data = await res.json()

        setRowery(data)
        setError(null)
      }
      catch (e) {
        setError(e.message)
        setRowery([])
      }
      finally {
        setIsLoading(false)
      }
    }

    pobierz_dane()
  }, [])

  if(isLoading) {
    return (<>
      <div className="container mt-4">
        <div className="spinner-border" role="status"></div>
        <span className="ms-2">Ładowanie...</span>
      </div>
    </>)
  }

  if(error != null) {
    return (<>
        <div className="alert alert-danger">{error}</div>
    </>)
  }

  const widoczne_rowery = rowery.filter((rower) => rower.model.toLowerCase().includes(szukaj.toLowerCase()))

  return (
    <>
      <div className="container">
        <input className="form-control m-2" value={szukaj} onChange={(e) => {console.log(e);setSzukaj(e.target.value)}} />
        {
          widoczne_rowery.length == 0 
          ? (<div className="alert alert-secondary">Brak rowerów</div>)
          : widoczne_rowery.map((rower) => {
            return <Card key={rower.id} handleRowerDeletion={handleRowerDeletion} dane={rower} />
          })
        }
      </div>
    </>
  )
}

export default App
