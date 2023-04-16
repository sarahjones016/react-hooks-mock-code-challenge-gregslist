import React, {useState} from "react";

function Search({onSearch}) {

  const [currentSearch, setCurrentSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch)
  }

  function handleSearch(e) {
    setCurrentSearch(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        onChange={handleSearch}/>
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
