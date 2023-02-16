for (let i=0; i < data.list.length; i+=8 ) {
    let currWeather = data.list[i];
    let iconId = currWeather.weather[0].icon;
    let todayDiv1 = document.createElement('div');
    if (i == 0) {
        todayDiv1.className = "todayDiv1";
        let city = document.createElement('p');
        city.textContent = data.city.name;
        todayDiv1.appendChild(city);
    } else {
        todayDiv1.className = "nextDay";
    }
    // add day of week
    let date = document.createElement('p');
    date.textContent = weekDay(day);
    todayDiv1.appendChild(date);
    //add icon
    let icon = document.createElement('img');
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconId}@2x.png`);
    todayDiv1.appendChild(icon);
    //add temp
    let temp = document.createElement('p');
    temp.textContent = currWeather.main.temp + '°C';
    todayDiv1.appendChild(temp);
    //add description
    let descr = document.createElement('p');
    descr.textContent = currWeather.weather[0].description;
    todayDiv1.appendChild(descr);
    
    container.appendChild(todayDiv1);
    
    if (i == 0) {
        let todayDiv2 = document.createElement('div');
        todayDiv2.className = "todayDiv2";
        
        // add wind
        let wind = document.createElement('p');
        wind.textContent = 'Wind: ' + currWeather.wind.speed + ' m/s';
        todayDiv2.appendChild(wind);
        // add pressure
        let pressure = document.createElement('p');
        pressure.textContent = 'Pressure: ' + currWeather.main.pressure + ' hPa';
        todayDiv2.appendChild(pressure);
        // add humidity
        let humid = document.createElement('p');
        humid.textContent = 'Humidity: ' + currWeather.main.humidity + '%';
        todayDiv2.appendChild(humid);
        // add cloudiness
        let cloudy = document.createElement('p');
        cloudy.textContent = 'Cloudiness: ' + currWeather.clouds.all + '%';
        todayDiv2.appendChild(cloudy);
        
        todayDiv1.appendChild(todayDiv2);
    } 
