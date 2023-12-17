import { useState } from "react"

export default function({handleSearch, setSelValue}) {

    const [inpValue, setInpValue] = useState('');

    return (
    <nav className="searchBar">
        <select 
            onChange={e => setSelValue(e.target.value)}
        >
            <option value="movie">Movies</option>
            <option value="tv">TV Series</option>
            <option value="person">Person</option>
        </select>
        <input type="text" 
            value={inpValue}
            onChange={e => setInpValue(e.target.value)}
        />
        <button
            onClick={() => handleSearch(inpValue)}
        >Search</button>
    </nav>
    )
}
