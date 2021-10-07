// Create Class selector variables

// Search Section
const submitBtn = document.querySelector('.submitBtn');
const inputValue = document.querySelector('#inputValue');

// Current Day Weather Card
const todaysCard = document.querySelector('#todaysCard');
const currentDate = document.querySelector('#currentDate');
const currentIcon = document.querySelector('#currentIcon');

// 5-Day Forecast Cards

// Day 1
const day1Card = document.querySelector('#day1');
const icon1 = document.querySelector('#icon1').innerContent;
const date1 = document.querySelector('#date1').innerText;
const temp1 = document.querySelector('#temp1').innerText;
const wind1 = document.querySelector('#wind1').innerText;
const humidity1 = document.querySelector('#humidity1').innerText;

// Day 2
const day2Card = document.querySelector('#day2');
const icon2 = document.querySelector('#icon2').innerContent;
const date2 = document.querySelector('#date2').innerText;
const temp2 = document.querySelector('#temp2').innerText;
const wind2 = document.querySelector('#wind2').innerText;
const humidity2 = document.querySelector('#humidity2').innerText;

// Day 3
const day3Card = document.querySelector('#day3');
const icon3 = document.querySelector('#icon3').innerContent;
const date3 = document.querySelector('#date3').innerText;
const temp3 = document.querySelector('#temp3').innerText;
const wind3 = document.querySelector('#wind3').innerText;
const humidity3 = document.querySelector('#humidity3').innerText;

// Day 4
const day4Card = document.querySelector('#day4');
const icon4 = document.querySelector('#icon4').innerContent;
const date4 = document.querySelector('#date4').innerText;
const temp4 = document.querySelector('#temp4').innerText;
const wind4 = document.querySelector('#wind4').innerText;
const humidity4 = document.querySelector('#humidity4').innerText;

// Day 5
const day5Card = document.querySelector('#day5');
const icon5 = document.querySelector('#icon5').innerContent;
const date5 = document.querySelector('#date5').innerText;
const temp5 = document.querySelector('#temp5').innerText;
const wind5 = document.querySelector('#wind5').innerText;
const humidity5 = document.querySelector('#humidity5').innerText;

// console.log(humidity5);

const apiKey = `96f5a24f18a847ade76f1f997da772d5`;

// assign "openweatheapi" url variable

// Current Day Weather URL
var todayURL = `api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`

// `api.openweathermap.org/data/2.5/weather?q=Detroit&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`

// 5-Day Forecast URL variable
var forecastURL = `api.openweathermap.org/data/2.5/forecast?q=`+inputValue.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`;

// `api.openweathermap.org/data/2.5/forecast?q=Detroit&appid=543cb12439df8f99a6ed8307126391a0&units=imperial`

// assign queries variables

function currentDayWeather(citySearch) {
    // save api key into variable

    let api = ``;
};

// Fetch 'OpenWeatherAPI"

// Current Day Fetch

// AddEventListener to search button
submitBtn.addEventListener('click', function () {
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(err => alert('Please enter a valid city name.'))

    // Forecast Fetch
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=`+inputValue.value+`&appid=96f5a24f18a847ade76f1f997da772d5&units=imperial`)
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(err => alert('Please enter a valid city name.'))

})

// TODO:
// function search(event) {
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
// }
// submitBtn.addEventListener('submit', search )
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