import React, {useState} from 'react'

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  console.log(movies)
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <div>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search..."
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </div>
  )
}

export default Search