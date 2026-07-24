import { useState } from "react";
import "../css/Searchbar.css";

function SearchBar() {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }

    // console.log(city);
     alert(city);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;