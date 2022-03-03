const API_KEY = `4390f8fa445a172a7218ca8c25864d89`;

const searchTemperature = () =>{
    const searchCity = document.getElementById('city-name');
    const city = searchCity.value;
    searchCity.value ='';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res =>res.json())
    .then(data=> displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText=text;
}

const displayTemperature = (temperature) =>{
    setInnerText('city', temperature.name);
    setInnerText('degree', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);
    
    // set weather icon

    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', url);
    
}