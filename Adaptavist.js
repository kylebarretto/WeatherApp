//constants that will be used for javascrip
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const weatherResults = document.getElementById("weather-results");
const change = document.querySelector("body");
const weatherDetails = document.getElementById("weather-details");
const searchInput2 = document.getElementById("search-input2");
const searchButton2 = document.getElementById("search-button2");
const secondDiv = document.querySelector('.second');

//button 1
//listens for if the search button is clicked
searchButton.addEventListener("click", () => {
  const cityName = searchInput.value;
  const location = document.getElementById("location");
  location.innerHTML = cityName;

  //reseters for when a new city is searched
  change.style.backgroundImage = 'none';
  change.style.backgroundColor = 'white';
  weatherResults.innerHTML = "";
  weatherDetails.innerHTML = "";
  secondDiv.style.display = 'none';

  //api call
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=imperial&type=accurate&APPID=3e4fefb9a18a3d93e80e09207b049c44&cnt=5`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //creates an object for each day
      data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const where = data.city.name;
        const min = item.temp.min;
        const max = item.temp.max;
        const humidity = item.humidity;
        const temperature = item.temp.day;
        const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        const description = item.weather[0].description;
        //populates pic and date for the 5 objects
        const html = `
          <div class="weather-item">
            <img id="pic" src="${icon}" alt="${description}">
            <h2>${date.toDateString()}</h2>
            <div class="weather-details"></div>
          </div>
        `;
        weatherResults.insertAdjacentHTML("beforeend", html);
        // Add event listener to the icon
        const weatherItem = weatherResults.lastElementChild;
        const iconElement = weatherItem.querySelector('img');
        const detailsElement = weatherItem.querySelector('.weather-details');
        iconElement.addEventListener("click", () => {          
          // Show details for clicked weather item
          weatherResults.innerHTML = "";
          location.innerHTML = "";
          const moreDetails = `
            <img id="pic1" src="${icon}">
            <h2>${date.toDateString()}</h2>
            <p>&nbsp;</p>
            <p>${where}</p>
            <p>&nbsp;</p>
            <p>${temperature} &deg;F</p>
            <p>&nbsp;</p>
            <p>Current Temp: ${description}</p>
            <p>&nbsp;</p>
            <p>Min Temp: ${min} &deg;F</p>
            <p>&nbsp;</p>
            <p>Max Temp: ${max} &deg;F</p>
            <p>&nbsp;</p>
            <p>Humidity: ${humidity}</p>
          `;
          weatherDetails.innerHTML = moreDetails;

        });
      });
    })
    .catch(error => {
      console.log(error);
      weatherResults.innerHTML = "An error occurred while fetching the weather data.";
    });
});


//same thing but for button 2
searchButton2.addEventListener("click", () => {
  const cityName = searchInput2.value;

  const location = document.getElementById("location");
  location.innerHTML = cityName;
  change.style.backgroundImage = 'none';
  change.style.backgroundColor = 'white';
  weatherResults.innerHTML = "";
  weatherDetails.innerHTML = "";
  secondDiv.style.display = 'none';

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=imperial&type=accurate&APPID=3e4fefb9a18a3d93e80e09207b049c44&cnt=5`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const where = data.city.name;
        const min = item.temp.min;
        const max = item.temp.max;
        const humidity = item.humidity;
        const temperature = item.temp.day;
        const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        const description = item.weather[0].description;
        const html = `
          <div class="weather-item">
            <img id="pic" src="${icon}" alt="${description}">
            <h2>${date.toDateString()}</h2>
            <div class="weather-details"></div>
          </div>
        `;
        weatherResults.insertAdjacentHTML("beforeend", html);
        // Add event listener to the icon
        const weatherItem = weatherResults.lastElementChild;
        const iconElement = weatherItem.querySelector('img');
        const detailsElement = weatherItem.querySelector('.weather-details');
        iconElement.addEventListener("click", () => {          
          // Show details for clicked weather item
          weatherResults.innerHTML = "";
          location.innerHTML = "";
          const moreDetails = `
            <img id="pic1" src="${icon}">
            <h2>${date.toDateString()}</h2>
            <p>&nbsp;</p>
            <p>${where}</p>
            <p>&nbsp;</p>
            <p>Current Temp: ${temperature} &deg;F</p>
            <p>&nbsp;</p>
            <p>${description}</p>
            <p>&nbsp;</p>
            <p>Min Temp: ${min} &deg;F</p>
            <p>&nbsp;</p>
            <p>Max Temp: ${max} &deg;F</p>
            <p>&nbsp;</p>
            <p>Humidity: ${humidity}</p>
          `;
          weatherDetails.innerHTML = moreDetails;

        });
      });
    })
    .catch(error => {
      console.log(error);
      weatherResults.innerHTML = "An error occurred while fetching the weather data.";
    });
});

