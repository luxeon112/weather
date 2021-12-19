document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch( city ){
    let key= '25df10e0f35664b5c6c1b7b1018597ca' ;
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {

        });
}
function cityWeather(e){
    weatherDataFetch("Tallinn");
}
function drawWeather( data) {
    let celsius = Math.round(parseFloat(data.main.temp)-273.15);
    let description = data.weather[0].description;
    document.querySelector(`#description`).innerHTML =data.name;
    document.querySelector(`#temp`).innerHTML =celsius + `&deg;`;
    document.querySelector(`#location`).innerHTML =description;
}