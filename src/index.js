/* eslint-disable no-unused-vars, no-use-before-define, arrow-body-style, prefer-template */

import nav from './navbar';
import {
  api, city, iconElement, temp, weatherElement, hiLow, describe,
  pressureElement, humidElement, search, searchBtn,
} from './selectors';

searchBtn.addEventListener('click', () => {
  getResults(search.value);
});

const getResults = (inquire) => {
  fetch(`${api.url}weather?q=${inquire}&units=metric&APPID=${api.key}`, { mode: 'cors' })
    .then(data => {
      return data.json();
    })
    .then(showResults);
};

const showResults = (data) => {
  const icon = `${api.icon}` + data.weather[0].icon + '.png';
  iconElement.setAttribute('src', icon);
  city.innerHTML = `<span class='weather-atrributes'>City/Country: </span>${data.name}, ${data.sys.country}`;
  weatherElement.innerHTML = `<span class='weather-atrributes'>Weather: </span>${data.weather[0].main}`;
  describe.innerHTML = `<span class='weather-atrributes'>Description: </span>${data.weather[0].description}`;
  pressureElement.innerHTML = `<span class='weather-atrributes'>Atm. Pressure: </span>${data.main.pressure}<span> Pa</span>`;
  humidElement.innerHTML = `<span class='weather-atrributes'>Humidity: </span>${data.main.humidity}`;

  // Temp Toggle
  const tempInC = Math.floor(data.main.temp);
  const tempInF = (temp) => {
    return Math.floor((temp * (9 / 5)) + 32);
  };
  const newTemp = tempInF(tempInC);
  temp.innerHTML = `<button class='btn btn-light mr-1'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;
  temp.addEventListener('click', () => {
    if (temp.innerHTML.includes('C')) {
      temp.innerHTML = `<button class='btn btn-light mr-1'><span class='weather-atrributes'>Temp: </span></button>${newTemp}°F`;
    } else if (temp.innerHTML.includes('F')) {
      temp.innerHTML = `<button class='btn btn-light mr-1'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;
    }
  });

  // High_Low Toggle
  const hiLowInC = `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}`;
  const hiLowInF = (hiLow) => {
    return `${Math.floor(data.main.temp_min)}°F / ${Math.floor(data.main.temp_max)}`;
  };
  const newHighLow = hiLowInF(hiLowInC);
  hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;
  temp.addEventListener('click', () => {
    if (hiLow.innerHTML.includes('C')) {
      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${newHighLow}°F`;
    } else if (hiLow.innerHTML.includes('F')) {
      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;
    }
  });
};