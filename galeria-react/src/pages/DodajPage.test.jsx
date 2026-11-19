import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import DodajPage from "./DodajPage.jsx";
import { MemoryRouter } from "react-router-dom";
import {dodajZdjecie} from "../services/zdjecia.js"

vi.mock("../services/zdjecia", {spy: true})
vi.mock("react-router-dom", {spy: true})

describe("DodajPage", () => {
    it("Dodawanie zdjęć formularzem", async () => {
        let onActivate = vi.fn()

        render(<MemoryRouter>
            <DodajPage active={[]} setActive={onActivate}/>
        </MemoryRouter>)

        await userEvent.type(screen.getByLabelText("Tytuł"), "tytul")
        await userEvent.type(screen.getByLabelText("Opis"), "opis")
        await userEvent.click(screen.getByLabelText("Zgadzam się na publikację zdjęcia w galerii"))
        await userEvent.selectOptions(screen.getByLabelText("Kategoria"), "gory")
        await userEvent.click(screen.getByRole("button", {name: "Zapisz"}))

        expect(dodajZdjecie).toHaveBeenCalledWith(expect.objectContaining({title: "tytul", description: "opis", category: "gory"}))
    })
})