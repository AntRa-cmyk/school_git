import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import CategoryBar from "./CategoryBar.jsx"
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer.jsx";

describe("Footer", () => {
    it("renderuje się", async () => {
        let onActivate = vi.fn()

        render(
            <Footer />
        )

        expect(await screen.getByText("Galeria Podróży © 2026 — makieta na zajęcia INF.04"))
        expect(await screen.getByText("Zdjęcia pobierane z serwisu picsum.photos"))
    })
})