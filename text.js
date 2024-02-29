function searchWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '2ba315e03aacab67cdb18cae70f72826';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api2ba315e03aacab67cdb18cae70f72826Key}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <i class="weather-icon fas fa-cloud-sun"></i>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <div class="weather-details">
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}
