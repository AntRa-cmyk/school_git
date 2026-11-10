import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import dane_poczatkowe from "./wydarzenia"
import ListPage from "./pages/ListPage.jsx"
import DetailsPage from "./pages/DetailsPage.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [wydarzenia, setWydarzenia] = useState(dane_poczatkowe)

  console.log(wydarzenia)
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage dane={wydarzenia} />}/>
        <Route path="/wydarzenie/:id" element={<DetailsPage dane={wydarzenia} />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default App
