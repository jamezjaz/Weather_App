const api = {
  key: 'fec0e887bafb28038fbe61858d51c3d4',
  url: 'http://api.openweathermap.org/data/2.5/',
  icon: 'http://openweathermap.org/img/w/'
}
const city = document.querySelector('.city');
const iconElement = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const weatherElement = document.querySelector('.weather');
const hiLow = document.querySelector('.hi-low');
const describe = document.querySelector('.description');
const pressureElement = document.querySelector('.pressure');
const humidElement = document.querySelector('.humidity');

const search = document.querySelector('.search');
const searchBtn = document.querySelector('#btn');
searchBtn.addEventListener('click', () => {
  getResults(search.value);
//   console.log(search.value);
});

const getResults = (inquire) => {
  fetch(`${api.url}weather?q=${inquire}&units=metric&APPID=${api.key}`, {mode: 'cors'})
    .then(data => {
      return data.json();
    })
    .then(showResults);
}

const showResults = (data) => {
  console.log(data);
  const icon = `${api.icon}` + data.weather[0].icon + '.png';
  iconElement.setAttribute('src', icon);
  city.innerHTML = `<span class='weather-atrributes'>City/Country: </span>${data.name}, ${data.sys.country}`;
  temp.innerHTML = `<span class='weather-atrributes'>Temp: </span>${Math.floor(data.main.temp)}<span>°C</span>`;
  weatherElement.innerHTML = `<span class='weather-atrributes'>Weather: </span>${data.weather[0].main}`;
  hiLow.innerHTML  = `<span class='weather-atrributes'>Low/High: </span>${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`;
  describe.innerHTML  = `<span class='weather-atrributes'>Description: </span>${data.weather[0].description}`;
  pressureElement.innerHTML = `<span class='weather-atrributes'>Atm. Pressure: </span>${data.main.pressure}<span> Pa</span>`;
  humidElement.innerHTML = `<span class='weather-atrributes'>Humidity: </span>${data.main.humidity}`;
}