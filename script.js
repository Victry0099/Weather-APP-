const apiKey = '11d59bef83msh7198de6731f32b7p196cc0jsn702408a3a70c';
const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const cityName = document.querySelector(".cityname")
// const cityName = document.getElementById('sity');
const weatheIcon = document.querySelector(".weather-icon") 
async function checkWeather(city){
    const url = `${apiUrl}?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Access and display the properties from the result object
        
        document.querySelector(".temp").innerHTML = result.temp + "°c"
        document.querySelector(".humidity").innerHTML = result.humidity + "%"
        document.querySelector(".wind").innerHTML = result.wind_speed + " km/h"
        cityName.innerHTML = city;  // Display the city name


        // Acourding to weather condition show weathe image

        if(result.temp<10 ||result.humidity>70 ){
            weatheIcon.src = "images/snow.png"
        }
        else if(result.temp>25 && result.humidity>75 ){
            weatheIcon.src = "images/cloudy.png"
        }
        else if(result.temp<20 && result.humidity>85){
            weatheIcon.src = "images/rain.png"
        }
        else{
            weatheIcon.src = "images/clearsun.png"
        }
        

    } catch (error) {
        console.error(error);
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
