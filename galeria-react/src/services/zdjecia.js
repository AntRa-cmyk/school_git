let zdjecia = null

export async function pobierzZdjecia() {
    if(zdjecia != null) {return zdjecia}

    const odpowiedz = await fetch("/photos.json")

    if(!odpowiedz.ok) {
        throw new Error("Błąd serwera " + odpowiedz.status)
    }

    zdjecia = await odpowiedz.json()
    return zdjecia
}

export function usunZdjecie(id) {
    zdjecia = zdjecia.filter((v) => v.id != id)
    return zdjecia
}

export function przelaczUlubione(id) {
    zdjecia = zdjecia.map((v) => v.id == id ? {...v, favorite: !v.favorite} : v)
    return zdjecia
}

export async function dodajZdjecie(zdjecie) {
    if(zdjecia == null) {await pobierzZdjecia()}
    zdjecia = [...zdjecia, zdjecie]
    return zdjecia
}