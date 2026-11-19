import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import { MemoryRouter } from "react-router-dom";
import PhotoCard from "./PhotoCard.jsx";

describe("PhotoCard", () => {
    it("Przełączanie uwielbienia", async () => {
        let onFavorite = vi.fn()

        render(<MemoryRouter>
            <PhotoCard togglePhotoFavorite={onFavorite} onCardDelete={() => {}} isFavorite={true} id={21} alt="" title="" category="gory" image={null} description=""/>
        </MemoryRouter>)

        await userEvent.click(screen.getAllByRole("button", {"className": "btn btn-primary m-1"})[1])

        expect(onFavorite).toHaveBeenCalledWith(21)
    })

    it("Wyświetla to co powinno", async () => {
        render(<MemoryRouter>
            <PhotoCard togglePhotoFavorite={() => {}} onCardDelete={() => {}} isFavorite={true} id={21} alt="_ALT" title="_TYTUL" category="_KATEGORIA" image="_URL" description="_DESC"/>
        </MemoryRouter>)

        expect(await screen.getByRole("img", {name: "_ALT"})).toBeInTheDocument()
        expect((await screen.getAllByRole("paragraph", {className: "card-title"}))[0].innerHTML).toBe(" _TYTUL ")
        expect((await screen.getAllByRole("paragraph", {className: "card-text"}))[2].innerHTML).toBe(" _DESC ")
    })
})