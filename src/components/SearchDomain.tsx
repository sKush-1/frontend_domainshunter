
const SearchDomain = () => {
  return (
    <div className="search-domain">
    <img src="background-image.jpg" alt="Background" className="background-image" />
    <div className="search-container">
      <input type="text" placeholder="Write your prompt to find domains" className="search-input" />
      <button className="search-button">Search</button>

    </div>
    </div>
  )
}

export default SearchDomain