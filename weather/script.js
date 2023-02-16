//e6401a92f3d557b499862d0df113627e
const input = document.querySelector("input");

input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        let inputValue = input.value;
        console.log(inputValue);
        loadData(inputValue);

        function loadData() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=e6401a92f3d557b499862d0df113627e&units=metric`);

            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState === xhr.DONE) {
                    let data = JSON.parse(xhr.responseText);
                    console.log(data);
                    formatData(data);
                }
            });
            xhr.send(null);
        }
    }
});

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatData(data) {
    const container = document.querySelector("#main-container");

    //i+=8 because the data is in 3 hr increments.
    //so 8*3hrs = 24 hrs to get to the next day
    for (let i = 0; i < data.list.length; i += 8) {
        let div2 = document.createElement('div');
        let currentW = data.list[i];
        //city should stay the same
        if (i == 0) {
            div2.className = "today";
            let city = document.createElement('h2');
            city.textContent = data.city.name;
            div2.appendChild(city);
        }
        let dt = data.list[i].dt;
        const d = new Date(dt * 1000);
        const day = document.createElement('h2');
        day.textContent = weekday[d.getDay()];
        div2.appendChild(day);

        // console.log("currentW", currentW);

        let img = document.createElement('img');
        img.src = `http://openweathermap.org/img/wn/${currentW.weather[0].icon}@2x.png`;
        div2.appendChild(img);

        let temp = document.createElement('h2');
        temp.textContent = "Temperature: " + currentW.main.temp + "° Celsius";
        div2.appendChild(temp);

        let desc = document.createElement('h2');
        desc.textContent = currentW.weather[0].description;
        div2.appendChild(desc);

        if (i == 0) {
            let humid = document.createElement('h2');
            humid.textContent = "Humidity: " + currentW.main.humidity + "%";

            let press = document.createElement('h2');
            press.textContent = "Pressure: " + currentW.main.pressure + " hPa";

            let windSpeed = document.createElement('h2');
            windSpeed.textContent = "Wind speed: " + currentW.wind.speed + " m/s";

            let clouds = document.createElement('h2');
            clouds.textContent = "Cloudiness: " + currentW.clouds.all + "%";

            div2.appendChild(humid);
            div2.appendChild(press);
            div2.appendChild(windSpeed);
            div2.appendChild(clouds);
        }
        container.appendChild(div2);
    }
}