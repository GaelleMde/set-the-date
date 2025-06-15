

function SearchBar(props) {    

    const handleSearch = (event) => {
        props.setSearchInputValue(event.target.value)
    }

  return (
    <div>
        <h2>Search</h2>
          <input type="text" placeholder="Search tournaments... " onChange={handleSearch} value={props.searchInputValue}/>

    </div>
  )
}

export default SearchBar