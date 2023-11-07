import "./current-weather.css"
const CurrentWeather =() => {
    return(
        <div classname="weather">
            <div classname="top">
                <div>
                    <p classname="city">Belgrade</p>
                    <p classname="weather-description">Sunny</p>
                </div>
                <img alt="weather" classname="weather-icon" src="JS/01d.png"/>
            </div>
            <div classname="bottom">
                <p classname="temperature">18°C</p>
                <div classname="details">
                    <div classname="parameter-row">
                        <span classname="parameter-label">Details</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Feels like</span>
                        <span classname="parameter-value">22°C</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Wind</span>
                        <span classname="parameter-value">2 m/s</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Humidity</span>
                        <span classname="parameter-value">15%</span>
                    </div>
                    <div classname="parameter-row">
                        <span classname="parameter-label">Pressure</span>
                        <span classname="parameter-value">15 hPa</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CurrentWeather;