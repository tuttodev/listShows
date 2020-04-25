import React, {useState} from 'react';

const Search = ({searchTvShows}) => {

    const [textSearch, setTextSearch] = useState('');

    return (
        <form 
            className="form-inline my-2 my-lg-0"
            onSubmit={e => e.preventDefault()}
        >
            <input 
                className="form-control mr-sm-2" 
                type="search"
                placeholder="Search" 
                aria-label="Search" 
                onChange={e => setTextSearch(e.target.value)}
            />
            <button
                className="btn btn-outline-success my-2 my-sm-0" 
                type="button"
                onClick={() => searchTvShows(textSearch)}
            >Search</button>
        </form>
    );
}

export default Search;