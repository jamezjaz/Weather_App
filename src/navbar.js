import { header } from './selectors';

const nav = (() => {
    header.innerHTML = `
                      <nav class="navbar navbar-light header">
                          <a class="navbar-brand text-dark" href="index.html">
                              <i class="fas fa-cloud-sun-rain p-2"></i>
                              Weather App
                          </a>
                          <a class="navbar-brand text-dark" href="#">
                          <span class="px-4">
                              <i class="fas fa-map-marker-alt"></i>
                              Open Weather Map
                          </span
                          <span>
                              <i class="fas fa-code"></i>
                              API
                          </span
                          </a>
                      </nav>
                      `;
  })();
  
  export default nav;