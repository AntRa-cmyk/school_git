import {Link, NavLink} from "react-router-dom"

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
			<div className="container">
				<NavLink className={({isActive}) => isActive ? "navbar-brand fw-bold" : "navbar-brand" } to="/">Galeria Podróży</NavLink>

				<button className="navbar-toggler" type="button"
						data-bs-toggle="collapse" data-bs-target="#menuGlowne"
						aria-controls="menuGlowne" aria-expanded="false" aria-label="Przełącz menu">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="menuGlowne">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Galeria</Link></li>
						<li className="nav-item"><Link to="/#kategorie" className="nav-link">Kategorie</Link></li>
						<li className="nav-item"><Link to="/#stopka" className="nav-link">Kontakt</Link></li>
					</ul>
				</div>
			</div>
		</nav>)
}

export default Navbar
