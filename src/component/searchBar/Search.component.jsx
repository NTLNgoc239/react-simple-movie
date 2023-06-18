import React from "react";

const Search = () => {
    // https://api.themoviedb.org/3/search/movie?query=S&include_adult=false&language=en-US&page=1
    const [searchKey, setSearchKey] = React.useState("");
    const handleOnChangeInput = (e) => {
        setSearchKey(e.target.value);
    }
    return (
        <div className="flex flex-row items-center justify-center mb-5 w-full">
            <input type="text" className="p-3 rounded w-6/12 mr-2 border hover:border border-pink-500" value={searchKey} onChange={handleOnChangeInput}/>
            <button type="submit" className="text-white py-3 px-12 rounded border border-pink-500 w-2/12 hover:bg-pink-500" onClick={() => {console.log(searchKey)}}>Search</button>
        </div>
    )
}

export default Search;