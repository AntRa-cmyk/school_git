import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import Gallery from "./Gallery.jsx"
import { MemoryRouter } from "react-router-dom";

describe("Gallery", () => {
    it("Ilość elementów listy jest taka sama jak długość danych", () => {
        const photos = [
            {
                "id": 1,
                "title": "Morskie Oko o świcie",
                "description": "Tafla jeziora w Tatrach tuż przed wschodem słońca.",
                "category": "gory",
                "image": "https://picsum.photos/seed/morskie-oko/600/400",
                "imageLarge": "https://picsum.photos/seed/morskie-oko/1200/800",
                "alt": "Tafla jeziora w Tatrach tuż przed wschodem słońca.",
                "favorite": false
            },
            {
                "id": 2,
                "title": "Grań nad doliną",
                "description": "Szlak granią w porannej mgle, widok na dolinę.",
                "category": "gory",
                "image": "https://picsum.photos/seed/gran-tatry/600/400",
                "imageLarge": "https://picsum.photos/seed/gran-tatry/1200/800",
                "alt": "Szlak granią w porannej mgle, widok na dolinę.",
                "favorite": false
            },
        ]

        render(<MemoryRouter>
            <Gallery photos={photos}/>
        </MemoryRouter>)

        expect(screen.getAllByRole('link', {name: "Powiększ"})).toHaveLength(2)
    })

    it("Obsługuje błąd gdy nie może pobrać listy zdjęć", () => {

    })
})