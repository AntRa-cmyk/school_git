import {dodajZdjecie} from "../services/zdjecia"
import {useNavigate} from "react-router-dom"

function DodajPage() {
    let navigate = useNavigate()

	function onSubmit(e) {
		e.preventDefault()
		const titleInput = document.querySelector("#tytul")
		const categorySelect = document.querySelector("#kategoria")
		const fileInput = document.querySelector("#plik")
		const descriptionInput = document.querySelector("#opis")
        
        dodajZdjecie({
			title: titleInput.value,
			description: descriptionInput.value,
			category: categorySelect.value
		})

        navigate("/")
	}

	return (
        <div className="container">
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="tytul" className="form-label">Tytuł</label>
                        <input type="text" className="form-control" id="tytul"/>
                        <div className="invalid-feedback hidden">Podaj tytuł zdjęcia — to pole jest wymagane.</div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="kategoria" className="form-label">Kategoria</label>
                        <select className="form-select" id="kategoria">
                            <option value="" selected>Wybierz kategorię…</option>
                            <option value="gory">Góry</option>
                            <option value="morze">Morze</option>
                            <option value="miasto">Miasto</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <label htmlFor="plik" className="form-label">Plik ze zdjęciem</label>
                        <input type="file" className="form-control" id="plik" accept="image/*" />
                        <div className="form-text">JPG lub PNG, maksymalnie 5 MB.</div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="opis" className="form-label">Opis</label>
                        <textarea className="form-control" id="opis" rows="3"></textarea>
                        <div className="form-text">Jedno–dwa zdania: gdzie i kiedy powstało zdjęcie.</div>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="zgoda" />
                            <label className="form-check-label" htmlFor="zgoda">
                                Zgadzam się na publikację zdjęcia w galerii
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={onSubmit}>Zapisz</button>
            </div>
        </div>
	)
}

export default DodajPage
