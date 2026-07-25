// import "../css/WeatherCard.css";

// function WeatherCard() {
//   return (
//     <div className="weather-card">
//       <h2>Pune</h2>

//       <h1>29°C</h1>

//       <p>☀ Clear Sky</p>

//       <div className="weather-details">
//         <p>💧 Humidity : 72%</p>
//         <p>🌬 Wind : 10 km/h</p>
//       </div>
//     </div>
//   );
// }

// export default WeatherCard;

import "../css/WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">

      <h2>{weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].main}</p>

      <div className="weather-details">
        <p>💧 Humidity : {weather.main.humidity}%</p>
        <p>🌬 Wind : {weather.wind.speed} m/s</p>
      </div>

    </div>
  );
}

export default WeatherCard;