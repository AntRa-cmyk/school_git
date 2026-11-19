import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it, expect, vi} from "vitest"
import CategoryBar from "./CategoryBar.jsx"
import { MemoryRouter } from "react-router-dom";

describe("CategoryBar", () => {
    it("", async () => {
        let onActivate = vi.fn()

        render(<MemoryRouter>
            <CategoryBar active={[]} setActive={onActivate}/>
        </MemoryRouter>)

        await userEvent.click(screen.getByRole("button", {name: "Góry"}))

        expect(onActivate).toHaveBeenCalledWith("gory")
    })
})