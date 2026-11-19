import {useState, useEffect} from "react"
import {pobierzZdjecia} from "../services/zdjecia"

export function useZdjecia() {
    const [zdjecia, setZdjecia] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        pobierzZdjecia().then((zdjecia) => {
            setZdjecia(zdjecia)
            setIsLoading(false)
            setError(null)
        }).catch((error) => {
            setZdjecia([])
            setIsLoading(false)
            setError(error.message)
        })
    }, [])

    return {zdjecia, setZdjecia, isLoading, error}
}