import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import CategoryBar from "./CategoryBar.jsx"
import { MemoryRouter } from "react-router-dom";

describe("CategoryBar", () => {
    it("Klikanie guzików ustawia filter", async () => {
        let onActivate = vi.fn()

        render(<MemoryRouter>
            <CategoryBar active={[]} setActive={onActivate}/>
        </MemoryRouter>)

        await userEvent.click(screen.getByRole("button", {name: "Góry"}))

        expect(onActivate).toHaveBeenCalledWith("gory")
    })

    it("Zaznaczony przycisk kategori ma inny styl", async () => {
        render(<MemoryRouter>
            <CategoryBar active={["gory"]} setActive={() => {}}/>
        </MemoryRouter>)

        expect((await screen.getByRole("button", {name: "Góry"})).classList.contains("active")).toBeTruthy()
    })

    it("Niezaznaczony przycisk kategori nie ma innego stylu", async () => {
        render(<MemoryRouter>
            <CategoryBar active={["gory"]} setActive={() => {}}/>
        </MemoryRouter>)

        expect((await screen.getByRole("button", {name: "Morze"})).classList.contains("active")).toBeFalsy()
    })
})