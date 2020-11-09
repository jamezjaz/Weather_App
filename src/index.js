const api = {
  key: 'fec0e887bafb28038fbe61858d51c3d4',
  url: 'http://api.openweathermap.org/data/2.5/',
  icon: 'http://openweathermap.org/img/w/'
}

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
}