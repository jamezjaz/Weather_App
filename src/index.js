import { api, city, iconElement, temp, weatherElement, hiLow, describe, pressureElement, humidElement, search, searchBtn } from './selectors';

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
  // temp.innerHTML = `<span class='weather-atrributes'>Temp: </span>${Math.floor(data.main.temp)}<span>°C</span>`;
  weatherElement.innerHTML = `<span class='weather-atrributes'>Weather: </span>${data.weather[0].main}`;
  // hiLow.innerHTML  = `<span class='weather-atrributes'>Low/High: </span>${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`;
  describe.innerHTML  = `<span class='weather-atrributes'>Description: </span>${data.weather[0].description}`;
  pressureElement.innerHTML = `<span class='weather-atrributes'>Atm. Pressure: </span>${data.main.pressure}<span> Pa</span>`;
  humidElement.innerHTML = `<span class='weather-atrributes'>Humidity: </span>${data.main.humidity}`;

  // Temp Toggle
  const tempInC = Math.floor(data.main.temp);
  const tempInF = (temp) => {
    return Math.floor((temp * (9 / 5)) + 32);
  }
  const newTemp = tempInF(tempInC);
  temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;
  temp.addEventListener('click', () => {
    if (temp.innerHTML.includes('C')) {
      temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${newTemp}°F`;
    } else if (temp.innerHTML.includes('F')) {
      temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;
    }
    // console.log('Great');
  });

  // High_Low Toggle
  const hiLowInC = `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}`;
  const hiLowInF = (hiLow) => {
    return `${Math.floor(data.main.temp_min)}°F / ${Math.floor(data.main.temp_max)}`;
  }
  const newHighLow = hiLowInF(hiLowInC);
  hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;
  temp.addEventListener('click', () => {
    if (hiLow.innerHTML.includes('C')) {
      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${newHighLow}°F`;
    } else if (hiLow.innerHTML.includes('F')) {
      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;
    }
  });
}