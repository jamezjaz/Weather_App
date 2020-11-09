const api = {
    key: 'fec0e887bafb28038fbe61858d51c3d4',
    url: 'http://api.openweathermap.org/data/2.5/',
    icon: 'http://openweathermap.org/img/w/'
  }
  const header = document.querySelector('.header'); 
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

export { api, header, city, iconElement, temp, weatherElement, hiLow, describe, pressureElement, humidElement, search, searchBtn };