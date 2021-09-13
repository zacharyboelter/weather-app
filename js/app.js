let weatherData, userInput;

const $city = $('#city-name');
const $temperature = $('#temp');
const $feelsLike = $('#feels_like');
const $input = $('input[type="text"]');
const $weather = $('#weather');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
    // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
    // getting the user input
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=01a0da2a36f369665070a8130312e823&units=imperial`
    }).then(
        (data) => {
            weatherData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }
    );
}

function render() {
    $city.text(weatherData.name);
    $temperature.text(weatherData.main.temp);
    $feelsLike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].main);
}
