import {useState} from "react"
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card.jsx"
import FilterSwitch from "../components/FilterSwitch.jsx"

const cities = [
    "Kraków",
    "Wrocław",
    "Poznań",
    "Gdańsk",
]

function ListPage({dane}) {
    const [filters, setFilters] = useState([])

    const filter_switches = []

    function handleFilterAdd(filter) {
        setFilters([...filters, filter])
    }

    function handleFilterRemove(filter) {
        setFilters(filters.filter((f) => f != filter))
    }

    for(let i = 0; i < cities.length; i++) {
        filter_switches.push(<FilterSwitch key={i} checked={filters.indexOf(cities[i]) == -1} handleAdd={handleFilterAdd} handleRemove={handleFilterRemove} name={cities[i]} />)
    }

    const widoczne = dane.filter((wydarzenie) => filters.indexOf(wydarzenie.miasto) == -1)

    return (<>
        <div className="container">
            <div className="d-flex flex-rows">
                {filter_switches}
            </div>
            {
                widoczne.map((wydarzenie) => {
                    return <Card key={wydarzenie.id} wydarzenie={wydarzenie} />
                })
            }
        </div>
    </>)
}

export default ListPage