import "./current-weather.css"
const CurrentWeather =({data}) => {
    return(
        <div classname="weather">
            <div classname="top">
                <div>
                    <p classname="city">{data.city}</p>
                    <p classname="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" classname="weather-icon" src={'JS/${data.weather[0].icon}.png'}/>
            </div>
            <div classname="bottom">
                <p classname="temperature">{Math.round(data.main.temp)}°C</p>
                <div classname="details">
                    <div classname="parameter-row">
                        <span classname="parameter-label">Details</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Feels like</span>
                        <span classname="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Wind</span>
                        <span classname="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Humidity</span>
                        <span classname="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Pressure</span>
                        <span classname="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>

    );
    };
export default CurrentWeather;