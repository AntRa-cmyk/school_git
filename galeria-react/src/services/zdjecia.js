let zdjecia = null

/** Funkcja async która fetch'uje zdjęcia i zwraca je jako listę obiektów.
 *  Lista jest pobierana tylko za pierwszym razem, następne wywołania zwracają cache'owaną wartość,
 *  która mogła być zmodyfikowana przez `usunZdjecie(id)` bądz `dodajZdjecie(zdjecie)`
 * 
 * @returns {Array<{id: 1, title: string, description: string, category: string, image: string, imageLarge: string, alt: string, favorite: boolean}>} Lista 
 */
export async function pobierzZdjecia() {
    if(zdjecia != null) {return zdjecia}

    const odpowiedz = await fetch("/photos.json")

    if(!odpowiedz.ok) {
        throw new Error("Błąd serwera " + odpowiedz.status)
    }

    zdjecia = await odpowiedz.json()
    return zdjecia
}

/** Funkcja która usuwa zdjęcie z listy zdjęć o danym id
 * 
 * @param {Number} id Id zdjęcia do usuniencia
 * @returns {Array<{id: 1, title: string, description: string, category: string, image: string, imageLarge: string, alt: string, favorite: boolean}>} Zfiltrowana lista zdjęć
 */
export function usunZdjecie(id) {
    zdjecia = zdjecia.filter((v) => v.id != id)
    return zdjecia
}

/** Przełącza flagę "ulubione" zdjęcia o danym id
 * 
 * @param {Number} id Id zdjęcia które ma być zmodyfikowane
 * @returns {Array<{id: 1, title: string, description: string, category: string, image: string, imageLarge: string, alt: string, favorite: boolean}>} zmodyfikowana lista zdjęć 
 */
export function przelaczUlubione(id) {
    zdjecia = zdjecia.map((v) => v.id == id ? {...v, favorite: !v.favorite} : v)
    return zdjecia
}

/** Dodaje zdjęcie do listy
 * 
 * @param {{id: 1, title: string, description: string, category: string, image: string, imageLarge: string, alt: string, favorite: boolean}} zdjecie które ma być dodane
 * @returns {Array<{id: 1, title: string, description: string, category: string, image: string, imageLarge: string, alt: string, favorite: boolean}>} lista zdjęć po dodaniu elementu
 */
export async function dodajZdjecie(zdjecie) {
    if(zdjecia == null) {await pobierzZdjecia()}
    zdjecia = [...zdjecia, zdjecie]
    return zdjecia
}