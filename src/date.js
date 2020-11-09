import { date } from './selectors';

const currentDate = (() => {
    const dateElement = document.createElement('span');
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString('en-US', options);
    dateElement.classList = 'font-weight-light text-dark p-1';
    date.appendChild(dateElement);
  })();
  
  export default currentDate;