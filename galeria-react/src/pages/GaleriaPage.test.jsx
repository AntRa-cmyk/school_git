import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import GaleriaPage from "./GaleriaPage.jsx"
import { MemoryRouter } from "react-router-dom";

vi.mock("../services/zdjecia", () => {
    return {pobierzZdjecia: () => Promise.reject(new Error("Błąd"))}
})

describe("DodajPage", () => {
    it("Obsługuje błąd gdy nie może pobrać listy zdjęć", async () => {
        render(<MemoryRouter>
            <GaleriaPage />
        </MemoryRouter>)

        expect(await screen.findByText("Błąd")).toBeInTheDocument()
    })
})
