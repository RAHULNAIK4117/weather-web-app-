const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const searchbox = document.querySelector('.card input');
const searchbutton = document.querySelector('.card button');
const weathericon = document.querySelector('.weathericon');

async function getWeatherData(city) {
    try {
        const response = await fetch(`${apiurl}&q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
        const data = await response.json();

        console.log(data);

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('#wind').innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
    } catch (error) {
        console.error('Error:', error);
        alert('City not found. Please try again.');
    }
}

searchbutton.addEventListener('click', () => {
    getWeatherData(searchbox.value);
});
