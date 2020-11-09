(()=>{"use strict";eval("\n// CONCATENATED MODULE: ./src/selectors.js\nconst api = {\n    key: 'fec0e887bafb28038fbe61858d51c3d4',\n    url: 'http://api.openweathermap.org/data/2.5/',\n    icon: 'http://openweathermap.org/img/w/'\n  }\n    \n  const city = document.querySelector('.city');\n  const iconElement = document.querySelector('.icon');\n  const temp = document.querySelector('.temp');\n  const weatherElement = document.querySelector('.weather');\n  const hiLow = document.querySelector('.hi-low');\n  const describe = document.querySelector('.description');\n  const pressureElement = document.querySelector('.pressure');\n  const humidElement = document.querySelector('.humidity');\n  const search = document.querySelector('.search');\n  const searchBtn = document.querySelector('#btn');\n\n\n// CONCATENATED MODULE: ./src/index.js\n;\n\n// const api = {\n//   key: 'fec0e887bafb28038fbe61858d51c3d4',\n//   url: 'http://api.openweathermap.org/data/2.5/',\n//   icon: 'http://openweathermap.org/img/w/'\n// }\n// const city = document.querySelector('.city');\n// const iconElement = document.querySelector('.icon');\n// const temp = document.querySelector('.temp');\n// const weatherElement = document.querySelector('.weather');\n// const hiLow = document.querySelector('.hi-low');\n// const describe = document.querySelector('.description');\n// const pressureElement = document.querySelector('.pressure');\n// const humidElement = document.querySelector('.humidity');\n\n// const search = document.querySelector('.search');\n// const searchBtn = document.querySelector('#btn');\nsearchBtn.addEventListener('click', () => {\n  getResults(search.value);\n//   console.log(search.value);\n});\n\nconst getResults = (inquire) => {\n  fetch(`${api.url}weather?q=${inquire}&units=metric&APPID=${api.key}`, {mode: 'cors'})\n    .then(data => {\n      return data.json();\n    })\n    .then(showResults);\n}\n\nconst showResults = (data) => {\n  console.log(data);\n  const icon = `${api.icon}` + data.weather[0].icon + '.png';\n  iconElement.setAttribute('src', icon);\n  city.innerHTML = `<span class='weather-atrributes'>City/Country: </span>${data.name}, ${data.sys.country}`;\n  // temp.innerHTML = `<span class='weather-atrributes'>Temp: </span>${Math.floor(data.main.temp)}<span>°C</span>`;\n  weatherElement.innerHTML = `<span class='weather-atrributes'>Weather: </span>${data.weather[0].main}`;\n  // hiLow.innerHTML  = `<span class='weather-atrributes'>Low/High: </span>${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}°C`;\n  describe.innerHTML  = `<span class='weather-atrributes'>Description: </span>${data.weather[0].description}`;\n  pressureElement.innerHTML = `<span class='weather-atrributes'>Atm. Pressure: </span>${data.main.pressure}<span> Pa</span>`;\n  humidElement.innerHTML = `<span class='weather-atrributes'>Humidity: </span>${data.main.humidity}`;\n\n  // Temp Toggle\n  const tempInC = Math.floor(data.main.temp);\n  const tempInF = (temp) => {\n    return Math.floor((temp * (9 / 5)) + 32);\n  }\n  const newTemp = tempInF(tempInC);\n  temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;\n  temp.addEventListener('click', () => {\n    if (temp.innerHTML.includes('C')) {\n      temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${newTemp}°F`;\n    } else if (temp.innerHTML.includes('F')) {\n      temp.innerHTML = `<button class='btn btn-light'><span class='weather-atrributes'>Temp: </span></button>${tempInC}°C`;\n    }\n    // console.log('Great');\n  });\n\n  // High_Low Toggle\n  const hiLowInC = `${Math.floor(data.main.temp_min)}°C / ${Math.floor(data.main.temp_max)}`;\n  const hiLowInF = (hiLow) => {\n    return `${Math.floor(data.main.temp_min)}°F / ${Math.floor(data.main.temp_max)}`;\n  }\n  const newHighLow = hiLowInF(hiLowInC);\n  hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;\n  temp.addEventListener('click', () => {\n    if (hiLow.innerHTML.includes('C')) {\n      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${newHighLow}°F`;\n    } else if (hiLow.innerHTML.includes('F')) {\n      hiLow.innerHTML = `<span class='weather-atrributes'>Low/High: </span>${hiLowInC}°C`;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zZWxlY3RvcnMuanM/MWNkMyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2ZBLENBQThJOztBQUU5STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGFBQWEsWUFBWTtBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxXQUFXLE9BQU8sQ0FBQyxZQUFZLFFBQVEsc0JBQXNCLE9BQU8sQ0FBQyxJQUFJLGFBQWE7QUFDdEY7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSxDQUFDO0FBQzNCLEVBQUUsd0JBQXdCO0FBQzFCLEVBQUUsY0FBYyw0REFBNEQsVUFBVSxJQUFJLGlCQUFpQjtBQUMzRyx1RUFBdUUsMkJBQTJCO0FBQ2xHLEVBQUUsd0JBQXdCLHVEQUF1RCxxQkFBcUI7QUFDdEcsNkVBQTZFLCtCQUErQixPQUFPLCtCQUErQjtBQUNsSixFQUFFLGtCQUFrQiw0REFBNEQsNEJBQTRCO0FBQzVHLEVBQUUseUJBQXlCLDZEQUE2RCxtQkFBbUI7QUFDM0csRUFBRSxzQkFBc0Isd0RBQXdELG1CQUFtQjs7QUFFbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxjQUFjLDJGQUEyRixRQUFRO0FBQ25ILEVBQUUscUJBQXFCO0FBQ3ZCLFFBQVEsdUJBQXVCO0FBQy9CLE1BQU0sY0FBYywyRkFBMkYsUUFBUTtBQUN2SCxLQUFLLFVBQVUsdUJBQXVCO0FBQ3RDLE1BQU0sY0FBYywyRkFBMkYsUUFBUTtBQUN2SDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHNCQUFzQiwrQkFBK0IsT0FBTywrQkFBK0I7QUFDM0Y7QUFDQSxjQUFjLCtCQUErQixPQUFPLCtCQUErQjtBQUNuRjtBQUNBO0FBQ0EsRUFBRSxlQUFlLHdEQUF3RCxTQUFTO0FBQ2xGLEVBQUUscUJBQXFCO0FBQ3ZCLFFBQVEsd0JBQXdCO0FBQ2hDLE1BQU0sZUFBZSx3REFBd0QsV0FBVztBQUN4RixLQUFLLFVBQVUsd0JBQXdCO0FBQ3ZDLE1BQU0sZUFBZSx3REFBd0QsU0FBUztBQUN0RjtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiI2ODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGkgPSB7XG4gICAga2V5OiAnZmVjMGU4ODdiYWZiMjgwMzhmYmU2MTg1OGQ1MWMzZDQnLFxuICAgIHVybDogJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41LycsXG4gICAgaWNvbjogJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJ1xuICB9XG4gICAgXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJyk7XG4gIGNvbnN0IGhpTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpLWxvdycpO1xuICBjb25zdCBkZXNjcmliZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICBjb25zdCBwcmVzc3VyZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKTtcbiAgY29uc3QgaHVtaWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bicpO1xuXG5leHBvcnQgeyBhcGksIGNpdHksIGljb25FbGVtZW50LCB0ZW1wLCB3ZWF0aGVyRWxlbWVudCwgaGlMb3csIGRlc2NyaWJlLCBwcmVzc3VyZUVsZW1lbnQsIGh1bWlkRWxlbWVudCwgc2VhcmNoLCBzZWFyY2hCdG4gfTsiLCJpbXBvcnQgeyBhcGksIGNpdHksIGljb25FbGVtZW50LCB0ZW1wLCB3ZWF0aGVyRWxlbWVudCwgaGlMb3csIGRlc2NyaWJlLCBwcmVzc3VyZUVsZW1lbnQsIGh1bWlkRWxlbWVudCwgc2VhcmNoLCBzZWFyY2hCdG4gfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbi8vIGNvbnN0IGFwaSA9IHtcbi8vICAga2V5OiAnZmVjMGU4ODdiYWZiMjgwMzhmYmU2MTg1OGQ1MWMzZDQnLFxuLy8gICB1cmw6ICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8nLFxuLy8gICBpY29uOiAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8nXG4vLyB9XG4vLyBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbi8vIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24nKTtcbi8vIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuLy8gY29uc3Qgd2VhdGhlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpO1xuLy8gY29uc3QgaGlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGktbG93Jyk7XG4vLyBjb25zdCBkZXNjcmliZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuLy8gY29uc3QgcHJlc3N1cmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlJyk7XG4vLyBjb25zdCBodW1pZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcblxuLy8gY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xuLy8gY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bicpO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRSZXN1bHRzKHNlYXJjaC52YWx1ZSk7XG4vLyAgIGNvbnNvbGUubG9nKHNlYXJjaC52YWx1ZSk7XG59KTtcblxuY29uc3QgZ2V0UmVzdWx0cyA9IChpbnF1aXJlKSA9PiB7XG4gIGZldGNoKGAke2FwaS51cmx9d2VhdGhlcj9xPSR7aW5xdWlyZX0mdW5pdHM9bWV0cmljJkFQUElEPSR7YXBpLmtleX1gLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKHNob3dSZXN1bHRzKTtcbn1cblxuY29uc3Qgc2hvd1Jlc3VsdHMgPSAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgaWNvbiA9IGAke2FwaS5pY29ufWAgKyBkYXRhLndlYXRoZXJbMF0uaWNvbiArICcucG5nJztcbiAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uKTtcbiAgY2l0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J3dlYXRoZXItYXRycmlidXRlcyc+Q2l0eS9Db3VudHJ5OiA8L3NwYW4+JHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YDtcbiAgLy8gdGVtcC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J3dlYXRoZXItYXRycmlidXRlcyc+VGVtcDogPC9zcGFuPiR7TWF0aC5mbG9vcihkYXRhLm1haW4udGVtcCl9PHNwYW4+wrBDPC9zcGFuPmA7XG4gIHdlYXRoZXJFbGVtZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nd2VhdGhlci1hdHJyaWJ1dGVzJz5XZWF0aGVyOiA8L3NwYW4+JHtkYXRhLndlYXRoZXJbMF0ubWFpbn1gO1xuICAvLyBoaUxvdy5pbm5lckhUTUwgID0gYDxzcGFuIGNsYXNzPSd3ZWF0aGVyLWF0cnJpYnV0ZXMnPkxvdy9IaWdoOiA8L3NwYW4+JHtNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wX21pbil9wrBDIC8gJHtNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wX21heCl9wrBDYDtcbiAgZGVzY3JpYmUuaW5uZXJIVE1MICA9IGA8c3BhbiBjbGFzcz0nd2VhdGhlci1hdHJyaWJ1dGVzJz5EZXNjcmlwdGlvbjogPC9zcGFuPiR7ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG4gIHByZXNzdXJlRWxlbWVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J3dlYXRoZXItYXRycmlidXRlcyc+QXRtLiBQcmVzc3VyZTogPC9zcGFuPiR7ZGF0YS5tYWluLnByZXNzdXJlfTxzcGFuPiBQYTwvc3Bhbj5gO1xuICBodW1pZEVsZW1lbnQuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSd3ZWF0aGVyLWF0cnJpYnV0ZXMnPkh1bWlkaXR5OiA8L3NwYW4+JHtkYXRhLm1haW4uaHVtaWRpdHl9YDtcblxuICAvLyBUZW1wIFRvZ2dsZVxuICBjb25zdCB0ZW1wSW5DID0gTWF0aC5mbG9vcihkYXRhLm1haW4udGVtcCk7XG4gIGNvbnN0IHRlbXBJbkYgPSAodGVtcCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0ZW1wICogKDkgLyA1KSkgKyAzMik7XG4gIH1cbiAgY29uc3QgbmV3VGVtcCA9IHRlbXBJbkYodGVtcEluQyk7XG4gIHRlbXAuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2J0biBidG4tbGlnaHQnPjxzcGFuIGNsYXNzPSd3ZWF0aGVyLWF0cnJpYnV0ZXMnPlRlbXA6IDwvc3Bhbj48L2J1dHRvbj4ke3RlbXBJbkN9wrBDYDtcbiAgdGVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGVtcC5pbm5lckhUTUwuaW5jbHVkZXMoJ0MnKSkge1xuICAgICAgdGVtcC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi1saWdodCc+PHNwYW4gY2xhc3M9J3dlYXRoZXItYXRycmlidXRlcyc+VGVtcDogPC9zcGFuPjwvYnV0dG9uPiR7bmV3VGVtcH3CsEZgO1xuICAgIH0gZWxzZSBpZiAodGVtcC5pbm5lckhUTUwuaW5jbHVkZXMoJ0YnKSkge1xuICAgICAgdGVtcC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nYnRuIGJ0bi1saWdodCc+PHNwYW4gY2xhc3M9J3dlYXRoZXItYXRycmlidXRlcyc+VGVtcDogPC9zcGFuPjwvYnV0dG9uPiR7dGVtcEluQ33CsENgO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnR3JlYXQnKTtcbiAgfSk7XG5cbiAgLy8gSGlnaF9Mb3cgVG9nZ2xlXG4gIGNvbnN0IGhpTG93SW5DID0gYCR7TWF0aC5mbG9vcihkYXRhLm1haW4udGVtcF9taW4pfcKwQyAvICR7TWF0aC5mbG9vcihkYXRhLm1haW4udGVtcF9tYXgpfWA7XG4gIGNvbnN0IGhpTG93SW5GID0gKGhpTG93KSA9PiB7XG4gICAgcmV0dXJuIGAke01hdGguZmxvb3IoZGF0YS5tYWluLnRlbXBfbWluKX3CsEYgLyAke01hdGguZmxvb3IoZGF0YS5tYWluLnRlbXBfbWF4KX1gO1xuICB9XG4gIGNvbnN0IG5ld0hpZ2hMb3cgPSBoaUxvd0luRihoaUxvd0luQyk7XG4gIGhpTG93LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nd2VhdGhlci1hdHJyaWJ1dGVzJz5Mb3cvSGlnaDogPC9zcGFuPiR7aGlMb3dJbkN9wrBDYDtcbiAgdGVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaGlMb3cuaW5uZXJIVE1MLmluY2x1ZGVzKCdDJykpIHtcbiAgICAgIGhpTG93LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nd2VhdGhlci1hdHJyaWJ1dGVzJz5Mb3cvSGlnaDogPC9zcGFuPiR7bmV3SGlnaExvd33CsEZgO1xuICAgIH0gZWxzZSBpZiAoaGlMb3cuaW5uZXJIVE1MLmluY2x1ZGVzKCdGJykpIHtcbiAgICAgIGhpTG93LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nd2VhdGhlci1hdHJyaWJ1dGVzJz5Mb3cvSGlnaDogPC9zcGFuPiR7aGlMb3dJbkN9wrBDYDtcbiAgICB9XG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///689\n")})();