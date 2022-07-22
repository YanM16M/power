import React, {useState} from 'react'
import '../styles/SearchBar.css';
import {BsSearch} from 'react-icons/bs'

function SearchBar({onChange, onEnter}) {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
        onChange(search);
    }

    const handleKeyUp = (event) => {
        if (event.onKeyUp == 13) {
            onEnter(search);
        }
    }

    return ( 
        <div className="searchbar_container">
            <BsSearch className="search-icon"/>
            <input class="searchbar" type="text" onKeyUp={handleKeyUp} onChange={handleSearch} value={search} />
        </div>
     );
}

export default SearchBar;