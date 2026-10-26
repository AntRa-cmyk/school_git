import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Route, Routes} from "react-router-dom"
import GaleriaPage from "./pages/GaleriaPage.jsx"
import ZdjeciePage from "./pages/ZdjeciePage.jsx"
import DodajPage from "./pages/DodajPage.jsx"
import Layout from "./components/Layout.jsx"

function App() {
    return (
	<Routes>
		<Route element={<Layout />}>
			<Route path="/" element={<GaleriaPage />} />
			<Route path="/zdjecie/:id" element={<ZdjeciePage />} />
			<Route path="/dodaj" element={<DodajPage />}/>
			{/* <Route path="*"/> */}
		</Route>
    </Routes>)
}

export default App
