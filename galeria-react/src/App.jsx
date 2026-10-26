import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {Route, Routes} from "react-router-dom"
import GaleriaPage from "./pages/GaleriaPage.jsx"
import Layout from "./components/Layout.jsx"

function App() {
    return (
	<Routes>
		<Route element={<Layout />}>
			<Route path="/" element={<GaleriaPage />} />
			{/* <Route path="/zdjecie/:id"/> */}
			{/* <Route path="/dodaj"/> */}
			{/* <Route path="*"/> */}
			{/* <App /> */}
		</Route>
    </Routes>)
}

export default App
