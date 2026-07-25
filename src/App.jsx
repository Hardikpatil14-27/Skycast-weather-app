// import "./css/App.css";
// import Navbar from "./componentes/Navbar";
// import SearchBar from "./componentes/SearchBar";
// import WeatherCard from "./componentes/WeatherCard";
// function App(){
//   return(
//     <>
//      <Navbar />
//     <div className="app">
     
//       <h1>THIS IS WEATHER APP...</h1>
//       <SearchBar />
//       <WeatherCard />
//     </div>
//     </>
//   );
// }
// export default App;

import { useState } from "react";
import "./css/App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

import { getWeather } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="app">
        <h1>Welcome to SkyCast</h1>
        <p>Search any city to get live weather updates.</p>

        <SearchBar onSearch={handleSearch} />

        {/* {weather && <WeatherCard weather={weather} />} */}
      {weather && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}

export default App;