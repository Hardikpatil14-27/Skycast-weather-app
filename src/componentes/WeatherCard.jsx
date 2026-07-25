import "../css/WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weather-card">
      <h2>Pune</h2>

      <h1>29°C</h1>

      <p>☀ Clear Sky</p>

      <div className="weather-details">
        <p>💧 Humidity : 72%</p>
        <p>🌬 Wind : 10 km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;