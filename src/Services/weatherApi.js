const API_KEY="910c703df104266bf0a4d8d861053bb3";
const BASE_URL ="https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) =>{
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error("City not found");
}
 const data = await response.json();
 return data;
};