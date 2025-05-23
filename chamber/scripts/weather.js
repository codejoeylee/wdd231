const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast-container');

const apiKey = 'b4c334509d8cbe581737345f6cddde7a';
const lat = 5.60;
const lon = -0.23;

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Current Weather API Error:', error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  
  captionDesc.textContent = desc;
}

async function apiForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Forecast API Error:', error);
  }
}

apiForecast();

function displayForecast(data) {
  const forecastList = data.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );
  const threeDayForecast = forecastList.slice(0, 3);

  threeDayForecast.forEach(item => {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    
    const temp = Math.round(item.main.temp);
    const icon = item.weather[0].icon;
    const desc = item.weather[0].description;
    
    forecastItem.innerHTML = `
      <h3>${day}</h3>
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="${desc}">
      <p>${temp}&deg;C</p>
    `;
    
    forecastContainer.appendChild(forecastItem);
  });
}
