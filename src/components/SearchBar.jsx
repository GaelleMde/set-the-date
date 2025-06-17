

function SearchBar(props) {    

    const handleSearch = (event) => {
        props.setSearchInputValue(event.target.value)
    }

  return (
    
        
          <input type="text" placeholder="Search tournaments... " onChange={handleSearch} value={props.searchInputValue}/>

    
  )
}

export default SearchBar