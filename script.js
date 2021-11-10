// Create Class selector variables

// Search Section
const submitBtn  = document.querySelector('.submitBtn');
const inputValue = document.querySelector('#inputValue');


// Current Day Weather Card
const todaysCard  = document.querySelector('#todaysCard');
const cityName    = document.querySelector('#location');
const currentDate = document.querySelector('#currentDate');
const currentIcon = document.querySelector('#currentIcon');
const currentTemp = document.querySelector('#currentTemp');
const currentWind = document.querySelector('#currentWind');
const currentHumidity = document.querySelector('#currentHumidity');


// Day1:4 / Day2:12 / Day3:20 / Day4:28 / Day5:36
// 5-Day Forecast Cards
submitBtn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=` + inputValue.value + `&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(response =>
            response.json())
        .then(data => {
            let tempValue1 = data['list'][4]['main']['temp'];
            let windValue1 = data['list'][4]['wind']['speed'];
            let humidityValue1 = data['list'][4]['main']['humidity'];
            let iconValue1 = data.list[4].weather[0].icon;
            let tempValue2 = data['list'][12]['main']['temp'];
            let windValue2 = data['list'][12]['wind']['speed'];
            let humidityValue2 = data['list'][12]['main']['humidity'];
            let iconValue2 = data.list[12].weather[0].icon;
            let tempValue3 = data['list'][20]['main']['temp'];
            let windValue3 = data['list'][20]['wind']['speed'];
            let humidityValue3 = data['list'][20]['main']['humidity'];
            let iconValue3 = data.list[20].weather[0].icon;
            let tempValue4 = data['list'][28]['main']['temp'];
            let windValue4 = data['list'][28]['wind']['speed'];
            let humidityValue4 = data['list'][28]['main']['humidity'];
            let iconValue4 = data.list[28].weather[0].icon;
            let tempValue5 = data['list'][36]['main']['temp'];
            let windValue5 = data['list'][36]['wind']['speed'];
            let humidityValue5 = data['list'][36]['main']['humidity'];
            let iconValue5 = data.list[36].weather[0].icon;
            // Forecast
            // Day 1
            temp1.innerText = tempValue1;
            icon1.src="http://openweathermap.org/img/wn/"+iconValue1+"@2x.png";
            wind1.innerText = windValue1;
            humidity1.innerText = humidityValue1;
            
            //Day2
            temp2.innerText = tempValue2;
            icon2.src="http://openweathermap.org/img/wn/"+iconValue2+"@2x.png";
            wind2.innerText = windValue2;
            humidity2.innerText = humidityValue2;
            
            // Day 3
            temp3.innerText = tempValue3;
            icon3.src="http://openweathermap.org/img/wn/"+iconValue3+"@2x.png";
            wind3.innerText = windValue3;
            humidity3.innerText = humidityValue3;
            
            //Day 4
            temp4.innerText = tempValue4;
            icon4.src="http://openweathermap.org/img/wn/"+iconValue4+"@2x.png";
            wind4.innerText = windValue4;
            humidity4.innerText = humidityValue4;
            
            //Day 5
            temp5.innerText = tempValue5;
            icon5.src="http://openweathermap.org/img/wn/"+iconValue5+"@2x.png";
            wind5.innerText = windValue5;
            humidity5.innerText = humidityValue5;
        })
        .catch(err => console.log('Need to Enter a valid city'))
});

// Day 1
const day1Card = document.querySelector('#day1');
const icon1 = document.querySelector('#icon1');
const date1 = document.querySelector('#date1');
const temp1 = document.querySelector('#temp1');
const wind1 = document.querySelector('#wind1');
const humidity1 = document.querySelector('#humidity1');

// Day 2
const day2Card = document.querySelector('#day2');
const icon2 = document.querySelector('#icon2');
const date2 = document.querySelector('#date2');
const temp2 = document.querySelector('#temp2');
const wind2 = document.querySelector('#wind2');
const humidity2 = document.querySelector('#humidity2');

// Day 3
const day3Card = document.querySelector('#day3');
const icon3 = document.querySelector('#icon3');
const date3 = document.querySelector('#date3');
const temp3 = document.querySelector('#temp3');
const wind3 = document.querySelector('#wind3');
const humidity3 = document.querySelector('#humidity3');

// Day 4
const day4Card = document.querySelector('#day4');
const icon4 = document.querySelector('#icon4');
const date4 = document.querySelector('#date4');
const temp4 = document.querySelector('#temp4');
const wind4 = document.querySelector('#wind4');
const humidity4 = document.querySelector('#humidity4');

// Day 5
const day5Card = document.querySelector('#day5');
const icon5 = document.querySelector('#icon5');
const date5 = document.querySelector('#date5');
const temp5 = document.querySelector('#temp5');
const wind5 = document.querySelector('#wind5');
const humidity5 = document.querySelector('#humidity5');

// console.log(humidity5);

const apiKey = `96f5a24f18a847ade76f1f997da772d5`;



// AddEventListener to search button

// TODO:
// IF search button click search

// Current day (city name) with date
// TEMP, WIND, HUMIDITY, UV INDEX from api for main card(current day)

// 5 day Forecast info fetched for
// Date
// TEMP, WIND, HUMIDITY

// Searches saved to localStorage
// Local Storage content displayed under Search button
// if searches add .. else

// Error catch


submitBtn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=` + inputValue.value + `&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(response =>
            response.json())
        .then(data => {
            let tempValue = data['list'][0]['main']['temp'];
            let windValue = data['list'][0]['wind']['speed'];
            let humidityValue = data['list'][0]['main']['humidity'];

            currentTemp.innerText = tempValue;
            currentWind.innerText = windValue;
            currentHumidity.innerText = humidityValue;
        })
        .catch(err => console.log('Need to Enter a valid city'))
});

// Updates h1 heading to Searched city name
submitBtn.addEventListener('click', () => {
    cityName.innerText = inputValue.value;
})
const searchItems = [];
const pastSearches = document.querySelector('.pastSearches');
