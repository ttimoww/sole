import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {ReactComponent as Icon} from './media/search-icon.svg'

function SearchBar(){
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    function handleSearchInput(e) {setSearchInput(e.target.value)}
    function handleSearch(){
        history.push(`/search?s=${searchInput.replace(/ /g,'%')}`)
    }

    return(
        <section className="search">
            <input type="text" placeholder="search" onChange={handleSearchInput} />
            <button className="btn btn-blue" onClick={handleSearch}><Icon /></button>
        </section>
    )
}

export default SearchBar;