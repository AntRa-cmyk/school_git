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
})