const apikey = "bc6befa0f3ff8abde8ede447a52ecace"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search_bar input")
const searchbtn = document.querySelector(".icon")
const weathericon = document.querySelector(".weathericon")


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
    
     
 
    if(data.weather[0].main == "Clouds"){
        weathericon.src="images/cloud.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src="images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="images/mist.png"
    }
    else if(data.weather[0].main == "Wind"){
        weathericon.src="images/wind.png"
    }
    else if(data.weather[0].main == "Humidity"){
        weathericon.src="images/humidity1.png"
    }

    document.querySelector(".weather").style.display="block"

}

// console.log(weathericon);
searchbtn.addEventListener("click" , ()=>{
    checkweather(search.value);
})
