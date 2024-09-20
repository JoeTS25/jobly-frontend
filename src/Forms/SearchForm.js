import React, { useState } from "react";

function SearchForm({ searchFor }) {
    const [searchWords, setSearchWords] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        setSearchWords(searchWords.trim());
    }

    function handleChange(evt) {
        setSearchWords(evt.target.value);
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    name="searchWords"
                    placeholder="Enter search"
                    value={searchWords}
                    onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;