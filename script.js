const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const cloud_pct = document.getElementById('cloud_pct')
const wind_speed = document.getElementById('wind_speed')
let city = document.getElementById('city')
const submit = document.getElementById('submit')





let SearchWeather = (c) =>{
   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4248d2f06mshd255777cfff2926p1f8386jsnc42c8169cd7c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + c, options)
	.then(response => response.json())
	.then(response => {
        cloud_pct.innerText = response.cloud_pct;
        // feels_like.innerHTMl = response.feels_like;
        humidity.innerText = response.humidity;
        // max_temp.innerHTMl = response.max_temp;
        // min_temp.innerHTMl = response.min_temp;
        // sunrise.innerHTMl = response.sunrise;
        // sunset.innerHTMl = response.sunset;
        temp.innerText = response.temp;
        // wind_degrees.innerHTMl = response.wind_degrees;
         wind_speed.innerText = response.wind_speed;
        console.log(response)
    })
	.catch(err => console.error(err));

    c = c.toUpperCase();
    city.innerText = c;
    console.log(c);
}

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let cityName = document.getElementById('cityName')
    //SearchWeather(SearchWeather(cityName.value))
    SearchWeather(cityName.value);
    console.log(cityName.value)
})
SearchWeather('ranchi')
