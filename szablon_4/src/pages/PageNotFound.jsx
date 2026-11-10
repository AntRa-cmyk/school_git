import { Link } from "react-router-dom";

function PageNotFound() {
    return (<>
        <p>
            Podstrona nie istnieje
        </p>
        <Link to="/">Wróc do listy</Link>
    </>)
}

export default PageNotFound